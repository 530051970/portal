import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { nav2Home } from "../utils";
import {
  AttributeEditor,
  Checkbox,
  Container,
  FormField,
  Grid,
  Input,
  Header,
  Multiselect,
  SpaceBetween,
  Tiles,
  Select,
  Button,
  Cards,
} from "@cloudscape-design/components";
import { Link as CloudscapeLink } from "@cloudscape-design/components";
import { useEffect, useRef, useState } from "react";
import { ColorPicker, ColorPickerProps, Drawer, Result } from "antd";
import { AuthTypeList, SsoList, ThirdAuthTypeList } from "../const";
import { AuthDetailType, AuthType, OidcType } from "../type";

const initialOidc = {
  label: "Authing",
  value: "authing",
  description: "",
  clientId: "",
  redirectUrl: "",
};
type Presets = Required<ColorPickerProps>["presets"][number];

function genPresets(presets: Record<string, string[]>) {
  return Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
    key: label,
  }));
}

const Configure: React.FC = () => {
  const navigate = useNavigate();
  const [appName, setAppName] = useState("Auth-Hub Demo");
  const [author, setAuthor] = useState("進撃の巴图鲁");
  const [layout, setLayout] = useState("center");
  const [themeType, setThemeType] = useState("single");
  const [singleColor, setSingleColor] = useState("#00071659");
  const [gradientColor, setGradientColor] = useState<string>(
    encodeURIComponent(
      "linear-gradient(45deg, rgba(0, 7, 22, 1), rgb(128 128 128 / 0%))"
    )
  );
  const [selectedPics, setSelectedPics] = useState<
    { name: string; img: string }[]
  >([]);
  const [deploy, setDeploy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cloudProvider, setCloudProvider] = useState<string>("aws");
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [ak, setAk] = useState("");
  const [sk, setSk] = useState("");

  const customPresets = {
    常用主题色: [
      "#EC008C",
      "#1890ff",
      "#ff4d4f",
      "#52c41a",
      "#faad14",
      "#13c2c2",
    ],
  };

  const customBackgroundPresets = {
    浅色系: ["#FAFAFAE6", "#F5F5F5D9", "#F0F0F0", "#F7F2ED", "#E5E5E5"],
    高级感: ["#CED4DA", "#D6D3D1", "#DCDCDC", "#ECECEC", "#EBE5DF"],
    深色系: ["#333333", "#2C3539", "#191970CC", "#353535", "#1C1C1C"],
  };

  const gradientOptions = [
    "linear-gradient(45deg, rgba(0, 7, 22, 1), rgb(128 128 128 / 0%))",
    "linear-gradient(120deg, rgba(168, 237, 234, 0.8) 0%, rgba(254, 214, 227, 0.8) 100%)",
    "linear-gradient(to right, rgba(255, 236, 210, 0.7) 0%, rgba(252, 182, 159, 0.7) 100%)",
    "linear-gradient(90deg, rgba(255, 107, 107, 0.9) 0%, rgba(255, 217, 61, 0.9) 100%)",
    "linear-gradient(to bottom right, rgba(15, 12, 41, 0.8) 0%, rgba(48, 43, 99, 0.8) 50%, rgba(36, 36, 62, 0.8) 100%)",
    "linear-gradient(to top, rgba(212, 252, 121, 0.7) 0%, rgba(150, 230, 161, 0.7) 100%)",
    "linear-gradient(45deg, rgba(255, 107, 107, 0.8) 0%, rgba(78, 205, 196, 0.8) 100%)",
  ];

  const presets = genPresets(customPresets);
  const backgroundPresets = genPresets(customBackgroundPresets);
  const [mode, setMode] = useState("multi");
  const prevAuthTypesRef = useRef<string[]>([]);
  const [authTypes, setAuthTypes] = useState<AuthType[]>([
    {
      label: "OIDC账号",
      value: "oidc",
      description: "IDP供应商申请的账号身份验证",
    },
  ]);
  const [thirdAuthTypes, setThirdAuthTypes] = useState<AuthType[]>([]);
  const [ssoAuthTypes, setSsoAuthTypes] = useState<AuthType[]>([]);
  const [output, setOutput] = useState("cloud");
  const [cn, setCn] = useState(true);
  const [en, setEn] = useState(true);
  const [oidcList, setOidcList] = useState<OidcType[]>([initialOidc]);
  const [primeColor, setPrimeColor] = useState<string>("#EC008C");
  const order = ["user", "sns", "oidc"];
  const targetAuthType = "oidc";

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const submitConfigure = async () => {
    if (output === "download") {
      const result: any = await fetch("https://example.com/file.pdf");

      if (result) {
        window.open(result, "_blank");
      }
    } else {
      setDeploy(true);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("选择的文件:", files[0]);
    }
  };

  const genGradientBorder = (g: string) => {
    return g === gradientColor ? "2px solid #EC008C" : "0px solid #EC008C";
  };

  //   const handleColorChange = (color: string) => {
  //     console.log("选中的颜色 / 渐变色是：", color);
  //   };

  useEffect(() => {
    const prev = prevAuthTypesRef.current;
    const curr = authTypes.map((item) => item.value);

    const wasAbsentBefore = !prev.includes(targetAuthType);
    const isPresentNow = curr.includes(targetAuthType);

    if (wasAbsentBefore && isPresentNow) {
      setOidcList([initialOidc]);
    }

    prevAuthTypesRef.current = authTypes.map((item) => item.value || "");
  }, [authTypes]);

  const genAuthDetails = (authTypes: AuthType[], oidcList: OidcType[]) => {
    const authDetails: AuthDetailType[] = [];
    authTypes.map((item) => {
      if (item.value === "oidc") {
        authDetails.push({
          type: "oidc",
          oidcList: oidcList,
        });
      } else {
        authDetails.push({
          type: item.value || "",
        });
      }
    });
    return authDetails.sort(
      (a, b) => order.indexOf(a.type) - order.indexOf(b.type)
    );
  };

  const genStyle = (themeType: string) => {
    switch (themeType) {
      case "single":
        return (
          <ColorPicker
            onChangeComplete={(c) => {
              setSingleColor(c.toCssString());
            }}
            presets={backgroundPresets}
            value={singleColor}
          />
        );
      case "gradient":
        return (
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {gradientOptions.map((g, idx) => (
              <div
                key={idx}
                onClick={() => setGradientColor(g)}
                style={{
                  width: 60,
                  height: 30,
                  borderRadius: 6,
                  background: g,
                  cursor: "pointer",
                  border: genGradientBorder(g),
                }}
              />
            ))}
          </div>
        );
      default:
        return (
          <SpaceBetween direction="horizontal" size="m">
            <div>
              <Button onClick={showDrawer}>使用内置图片</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;或
            </div>
            <Button onClick={handleButtonClick}>上传自定义图片</Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </SpaceBetween>
        );
    }
  };

  return (
    <>
      <header>
        <div className="header__main header-sticky header-main-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-8">
                <div className="logo">
                  <a
                    className="logo-text-white"
                    href=""
                    onClick={() => nav2Home(navigate)}
                  >
                    <img
                      src="/assets/img/logo/logo.png"
                      alt=""
                      style={{ width: 150 }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-4">
                <div
                  className="header__menu-area f-left none"
                  style={{ height: 100 }}
                >
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link to="/#module">功能模块</Link>
                        </li>
                        <li>
                          <Link to="/#feature">产品特色</Link>
                        </li>
                        <li>
                          <Link to="/#version">经典版本</Link>
                        </li>
                        <li>
                          <Link to="/deploy">部署记录</Link>
                        </li>
                        <li>
                          <Link to="/docs">使用指南</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header__btn d-none">
                    <a href="#" className="grb-btn">
                      Get Reserved<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="header__menu-area f-right"
                  style={{ height: 100 }}
                >
                  <div
                    className="custom"
                    style={{ float: "left", marginRight: 3 }}
                  >
                    <a href="" className="grb-btn-2">
                      体验中心
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {deploy ? (
        <section className="service-box-area pt-140 pb-30" id="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div style={{ width: "100%", height: 80 }}></div>
                <Result
                  status="success"
                  title=" 已经开始部署..."
                  subTitle="部署编号: 2025182818828182881 预计耗时 15 分钟, 请稍等."
                  extra={[
                    <Button
                      variant="primary"
                      key="console"
                      onClick={() => nav2Home(navigate)}
                    >
                      返回主页
                    </Button>,
                    <Button key="buy" onClick={() => navigate("/deploy")}>
                      部署记录
                    </Button>,
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="service-box-area pt-140 pb-30" id="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SpaceBetween size={"l"}>
                  <Container
                    header={
                      <Header variant="h3" description="设置应用的基本信息">
                        基本信息
                      </Header>
                    }
                  >
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <SpaceBetween direction="vertical" size="m">
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请输入应用名称(建议10个字符以内)"
                            label="应用名称"
                          />
                          <Input
                            value={appName}
                            placeholder="输入应用基本信息"
                            onChange={(e) => {
                              setAppName(e.detail.value);
                            }}
                          />
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请输入应用开发者名称(建议10个字符以内)"
                            label="作者信息"
                          />
                          <Input
                            value={author}
                            placeholder="输入开发者"
                            onChange={(e) => {
                              setAuthor(e.detail.value);
                            }}
                          />
                        </Grid>
                      </SpaceBetween>
                    </div>
                  </Container>
                  <Container
                    header={
                      <Header variant="h3" description="自定义交互样式和风格">
                        个性化设置
                      </Header>
                    }
                  >
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <SpaceBetween direction="vertical" size="m">
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择需要的语言支持"
                            label="多语言"
                          />
                          <SpaceBetween direction="horizontal" size="xxl">
                            <Checkbox
                              onChange={({ detail }) => setCn(detail.checked)}
                              checked={cn}
                            >
                              中文
                            </Checkbox>
                            <Checkbox
                              onChange={({ detail }) => setEn(detail.checked)}
                              checked={en}
                            >
                              英文
                            </Checkbox>
                          </SpaceBetween>
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择页面布局"
                            label="页面布局"
                          />
                          <Tiles
                            onChange={({ detail }) => setLayout(detail.value)}
                            value={layout}
                            items={[
                              {
                                label: "中心布局",
                                value: "center",
                                description: "输入框位于页面中心",
                              },
                              {
                                label: "右边对齐",
                                value: "right",
                                description: "输入框位于页面右侧",
                              },
                            ]}
                          />
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请设置主题色,用于定义基调风格"
                            label="主题色"
                          />
                          <div style={{ marginTop: 5 }}>
                            <ColorPicker
                              onChangeComplete={(c) => {
                                setPrimeColor(c.toCssString());
                              }}
                              presets={presets}
                              value={primeColor}
                            />
                          </div>
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请设置背景风格"
                            label="背景样式"
                          />
                          <Tiles
                            onChange={({ detail }) =>
                              setThemeType(detail.value)
                            }
                            value={themeType}
                            items={[
                              {
                                label: "单一纯色",
                                value: "single",
                                description: "页面背景为单一颜色",
                              },
                              {
                                label: "渐变颜色",
                                value: "gradient",
                                description:
                                  "页面背景为从一种颜色过渡到另一颜色",
                              },
                              {
                                label: "图片",
                                value: "pic",
                                disabled: true,
                                description: "选择图片作为主题背景",
                              },
                            ]}
                          />
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description={
                              themeType === "single" || themeType === "gradient"
                                ? "请设置背景色"
                                : "请上传背景图片"
                            }
                            label={
                              themeType === "single" || themeType === "gradient"
                                ? "背景色"
                                : "背景图片"
                            }
                          />
                          <div style={{ marginTop: 5 }}>
                            {genStyle(themeType)}
                          </div>
                        </Grid>
                      </SpaceBetween>
                    </div>
                  </Container>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="根据需要选择登录方式和附属行为"
                      >
                        功能及行为
                      </Header>
                    }
                  >
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <SpaceBetween direction="vertical" size="m">
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择认证方式（单一或组合）"
                            label="认证模式"
                          />
                          <Tiles
                            onChange={({ detail }) => setMode(detail.value)}
                            value={mode}
                            items={[
                              {
                                label: "单一认证",
                                value: "one",
                                description: "只需要一种身份认证方式",
                              },
                              {
                                label: "组合认证",
                                value: "multi",
                                description: "多种认证方式的组合",
                              },
                            ]}
                          />
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择认证类型"
                            label="认证类型"
                          />
                          {mode === "one" ? (
                            <Tiles
                              onChange={({ detail }) =>
                                setAuthTypes(
                                  AuthTypeList.filter(
                                    (item) => item.value === detail.value
                                  )
                                )
                              }
                              value={authTypes[0]?.value || "oidc"}
                              items={AuthTypeList}
                            />
                          ) : (
                            <Multiselect
                              selectedOptions={authTypes}
                              onChange={({ detail }) =>
                                setAuthTypes([...detail.selectedOptions])
                              }
                              options={AuthTypeList}
                              placeholder="选择认证方式..."
                            />
                          )}
                        </Grid>
                        {authTypes.some((item) => item.value === "oidc") && (
                          <Grid
                            gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}
                          >
                            <FormField
                              description="从对应的IPD供应商控制台获取"
                              label="OIDC账号资料"
                            />
                            <AttributeEditor
                              onAddButtonClick={() =>
                                setOidcList([
                                  ...oidcList,
                                  {
                                    label: "",
                                    value: "",
                                    description: "",
                                    clientId: "",
                                    redirectUrl: "",
                                  },
                                ])
                              }
                              onRemoveButtonClick={({
                                detail: { itemIndex },
                              }) => {
                                if (oidcList.length == 1) return;
                                const tmpItems = [...oidcList];
                                tmpItems.splice(itemIndex, 1);
                                setOidcList(tmpItems);
                              }}
                              items={oidcList}
                              addButtonText="添加新的OIDC账号"
                              definition={[
                                {
                                  label: "OIDC供应商",
                                  constraintText: "请选择OIDC账号提供商",
                                  control: (_, index) => (
                                    <Select
                                      selectedOption={oidcList[index]}
                                      onChange={({ detail }) => {
                                        // setOidcProviderOptions(detail.selectedOption);
                                        const newOidcList = [...oidcList];
                                        newOidcList[index] = {
                                          ...newOidcList[index],
                                          label:
                                            detail.selectedOption.label || "",
                                          value:
                                            detail.selectedOption.value || "",
                                        };
                                        setOidcList(newOidcList);
                                      }}
                                      options={[
                                        {
                                          label: "Cognito",
                                          value: "cognito",
                                        },
                                        {
                                          label: "Authing",
                                          value: "authing",
                                        },
                                        {
                                          label: "Keycloak",
                                          value: "keycloak",
                                        },
                                      ]}
                                      triggerVariant="option"
                                    />
                                  ),
                                  info: (
                                    <CloudscapeLink variant="info">
                                      Info
                                    </CloudscapeLink>
                                  ),
                                },
                                {
                                  label: "资料详情",
                                  control: (_, index) => (
                                    <SpaceBetween direction="vertical" size="s">
                                      <Input
                                        value={
                                          oidcList[index].description || ""
                                        }
                                        placeholder="输入描述 - 可选"
                                        onChange={({ detail }) => {
                                          const newOidcList = [...oidcList];
                                          newOidcList[index].description =
                                            detail.value;
                                          setOidcList(newOidcList);
                                        }}
                                      />
                                      <Input
                                        value={oidcList[index].clientId}
                                        placeholder="输入Client Id"
                                        onChange={({ detail }) => {
                                          const newOidcList = [...oidcList];
                                          newOidcList[index].clientId =
                                            detail.value;
                                          setOidcList(newOidcList);
                                        }}
                                      />
                                      <Input
                                        value={oidcList[index].redirectUrl}
                                        placeholder="输入RedirectURL"
                                        onChange={({ detail }) => {
                                          const newOidcList = [...oidcList];
                                          newOidcList[index].redirectUrl =
                                            detail.value;
                                          setOidcList(newOidcList);
                                        }}
                                      />
                                    </SpaceBetween>
                                  ),
                                  info: (
                                    <CloudscapeLink variant="info">
                                      Info
                                    </CloudscapeLink>
                                  ),
                                },
                              ]}
                              empty="No items associated with the resource."
                              removeButtonText={"移除该账号"}
                              disableAddButton={5 - oidcList.length <= 0}
                              additionalInfo={
                                5 - oidcList.length <= 0 ? (
                                  <span>您最多只能添加 5 个账号</span>
                                ) : (
                                  <span>
                                    您可以再追加 {5 - oidcList.length} 个账号
                                  </span>
                                )
                              }
                            />
                          </Grid>
                        )}
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择支持的认证方式"
                            label="第三方认证"
                          />
                          <Multiselect
                            selectedOptions={thirdAuthTypes}
                            onChange={({ detail }) =>
                              setThirdAuthTypes([...detail.selectedOptions])
                            }
                            options={ThirdAuthTypeList}
                            placeholder="选择第三方认证..."
                          />
                        </Grid>
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="如果需要新增企业级SSO，请联系管理员"
                            label="企业级SSO认证"
                          />
                          {/* <SpaceBetween direction="vertical" size="xxs">
                            <Grid gridDefinition={[{ colspan: 6 }]}> */}
                          <Multiselect
                            selectedOptions={ssoAuthTypes}
                            onChange={({ detail }) =>
                              setSsoAuthTypes([...detail.selectedOptions])
                            }
                            options={SsoList}
                            placeholder="选择第三方认证..."
                          />
                          {/* <Tiles
                                onChange={({ detail }) => setSSO(detail.value)}
                                value={sso}
                                items={[
                                  {
                                    label: "Amazon MiddleWay",
                                    description: " Amazon微服务基础设施组件",
                                    value: "midway",
                                  },
                                ]}
                              /> */}
                          {/* </Grid>
                          </SpaceBetween> */}
                        </Grid>
                      </SpaceBetween>
                    </div>
                  </Container>
                  <Container
                    header={
                      <Header
                        variant="h3"
                        description="支持代码下载到本地或者部署到云端"
                      >
                        代码生成部署
                      </Header>
                    }
                  >
                    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                      <SpaceBetween direction="vertical" size="s">
                        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                          <FormField
                            description="请选择交付方式"
                            label="部署方式"
                          />
                          <Tiles
                            onChange={({ detail }) => setOutput(detail.value)}
                            value={output}
                            items={[
                              {
                                label: "本地下载",
                                value: "download",
                                description: "将代码下载到本地",
                              },
                              {
                                label: "云端部署",
                                value: "cloud",
                                description: "将代码部署上云",
                              },
                            ]}
                          />
                        </Grid>
                        {output === "cloud" && (
                          <Grid
                            gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}
                          >
                            <FormField
                              description="请配置部署终端"
                              label="部署终端"
                            />
                            <SpaceBetween direction="vertical" size="xxs">
                              <Grid gridDefinition={[{ colspan: 6 }]}>
                                <Tiles
                                  onChange={({ detail }) =>
                                    setCloudProvider(detail.value)
                                  }
                                  value={cloudProvider}
                                  items={[
                                    {
                                      label: "亚马逊云",
                                      description: "Amazon Web Services（AWS）",
                                      value: "aws",
                                    },
                                  ]}
                                />
                              </Grid>
                              <Grid
                                gridDefinition={[
                                  { colspan: 6 },
                                  { colspan: 6 },
                                ]}
                              >
                                <FormField
                                  description="控制后台获取账号"
                                  label="账号（AK）"
                                >
                                  <Input
                                    value={ak}
                                    onChange={(event) =>
                                      setAk(event.detail.value)
                                    }
                                  />
                                </FormField>
                                <FormField
                                  description="控制后台获取账号对应密钥"
                                  label="密钥（SK）"
                                >
                                  <Input
                                    value={sk}
                                    onChange={(event) =>
                                      setSk(event.detail.value)
                                    }
                                  />
                                </FormField>
                              </Grid>
                            </SpaceBetween>
                            <FormField
                              description={
                                <>
                                  请详读我们的{" "}
                                  <CloudscapeLink
                                    href="#"
                                    external={true}
                                    variant="primary"
                                    fontSize="body-s"
                                  >
                                    条款与限制
                                  </CloudscapeLink>{" "}
                                  并点击同意。
                                </>
                              }
                              label="条款与限制"
                            >
                              <Checkbox
                                checked={agree}
                                onChange={({ detail }) =>
                                  setAgree(detail.checked)
                                }
                              >
                                我同意条款与限制
                              </Checkbox>
                            </FormField>
                          </Grid>
                        )}
                      </SpaceBetween>
                    </div>
                  </Container>
                  <div style={{ float: "right" }}>
                    <SpaceBetween direction="vertical" size="s">
                      <SpaceBetween direction="horizontal" size="s">
                        <Button
                          onFollow={() => {
                            nav2Home(navigate);
                          }}
                        >
                          取消
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            const configParams = {
                              basicInfo: {
                                appName,
                                author,
                              },
                              customizationInfo: {
                                lang: [cn && "zh", en && "en"].filter(Boolean),
                                layout,
                                primeColor: primeColor,
                                theme: {
                                  themeType,
                                  themeDetail:
                                    themeType === "single"
                                      ? singleColor
                                      : themeType === "gradient"
                                      ? gradientColor
                                      : selectedPics[0].name,
                                },
                              },
                              actionInfo: {
                                authDetails: genAuthDetails(
                                  authTypes,
                                  oidcList
                                ),
                                thirdAuthTypes: thirdAuthTypes.map(
                                  (item) => item.value
                                ),
                                ssoList: ssoAuthTypes.map((item) => item.value),
                              },
                            };
                            const encodedParams = encodeURIComponent(
                              JSON.stringify(configParams)
                            );
                            window.open(
                              `/preview?config=${encodedParams}`,
                              "_blank"
                            );
                            // navigate("/preview", {
                            //   state: configParams
                            // });
                          }}
                        >
                          预览
                        </Button>
                        <Button variant="primary" onClick={submitConfigure}>
                          {output === "download" ? "下载" : "部署"}
                        </Button>
                      </SpaceBetween>
                    </SpaceBetween>
                  </div>
                </SpaceBetween>
                <Drawer
                  width={640}
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  open={open}
                >
                  <Cards
                    onSelectionChange={({ detail }) =>
                      setSelectedPics(detail?.selectedItems ?? [])
                    }
                    selectedItems={selectedPics}
                    cardDefinition={{
                      header: (item) => (
                        <CloudscapeLink fontSize="body-m">
                          {item.name}
                        </CloudscapeLink>
                      ),
                      sections: [
                        {
                          id: "image",
                          content: (item) => (
                            <img
                              style={{ width: "100%", height: 300 }}
                              src={item.img}
                              alt="placeholder"
                            />
                          ),
                        },
                      ],
                    }}
                    cardsPerRow={[{ cards: 1 }]}
                    items={[
                      {
                        name: "东方既白",
                        img: "/assets/img/theme/gray.png",
                      },
                      {
                        name: "经典科技",
                        img: "/assets/img/theme/classic-tech.png",
                      },
                      {
                        name: "星球主题",
                        img: "/assets/img/theme/moon.png",
                      },
                    ]}
                    loadingText="Loading resources"
                    selectionType="single"
                    trackBy="name"
                    visibleSections={["image"]}
                  />
                </Drawer>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Configure;
