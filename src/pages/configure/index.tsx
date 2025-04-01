import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { nav2Home } from "../../utils";
import {
  Checkbox,
  Container,
  FileUpload,
  FormField,
  Grid,
  Header,
  Multiselect,
  SpaceBetween,
  Tiles,
} from "@cloudscape-design/components";
import { Link as CloudscapeLink } from "@cloudscape-design/components";
import { useState } from "react";
import { ColorPicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AuthTypeList } from "../const";

const Configure: React.FC = () => {
  const navigate = useNavigate();
  const [layout, setLayout] = useState("center");
  const [background, setBackground] = useState("single");
  const [singleColor, setSingleColor] = useState("#00071659");
  const [singleColorOpen, setSingleColorOpen] = useState(false);
  const [gradientColor, setGradientColor] = useState<
    { color: string; percent: number }[]
  >([
    { color: "rgb(16, 142, 233)", percent: 0 },
    { color: "rgb(135, 208, 104)", percent: 100 },
  ]);

  const [file, setFile] = useState<File[]>([]);
  const [mode, setMode] = useState("multi");
  const [authTypes, setAuthTypes] = useState<
    { label?: string; value?: string; description?: string }[]
  >([
    {
      label: "OIDC账号",
      value: "oidc",
      description: "第三方IDP供应商申请的账号身份验证",
    },
  ]);

  const genStyle = (background: string) => {
    switch (background) {
      case "single":
        return (
          <ColorPicker
            value={singleColor}
            open={singleColorOpen}
            onOpenChange={setSingleColorOpen}
            onChangeComplete={(c) => {
              setSingleColor(c.toCssString());
            }}
            showText={() => (
              <DownOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />
            )}
          />
        );
      case "gradient":
        return (
          <ColorPicker
            value={gradientColor}
            allowClear
            mode="gradient"
            onChangeComplete={(c) => {
              const gradientString = c.toCssString(); // "linear-gradient(90deg, rgb(16, 142, 233) 0%, rgb(135, 208, 104) 100%)"

              const gradientMatch = gradientString.match(
                /rgb\(\d+,\d+,\d+\)\s*\d+%/g
              );

              if (gradientMatch) {
                const gradientColors = gradientMatch.map((item) => {
                  const [color, percent] = item.split(/\s+/); // 以空格拆分
                  return { color, percent: parseInt(percent) };
                });

                setGradientColor(gradientColors);
              }
            }}
          />
        );
      default:
        return (
          //   <Dragger {...props}>
          //     <p className="ant-upload-drag-icon">
          //       <InboxOutlined />
          //     </p>
          //     <p className="ant-upload-text">
          //       Click or drag file to this area to upload
          //     </p>
          //     <p className="ant-upload-hint">
          //       Support for a single or bulk upload. Strictly prohibited from
          //       uploading company data or other banned files.
          //     </p>
          //   </Dragger>
          <FileUpload
            onChange={({ detail }) => setFile(detail.value)}
            value={file}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "选择图片" : "选择图片"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            tokenLimit={3}
          />
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
                          <a href="">更新日志</a>
                        </li>
                        <li>
                          <a href="">使用指南</a>
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
                    {/* <button className="draw" onClick={()=>{window.location.href='http://mis.leego.vip'}}>进入控制台</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="service-box-area pt-140 pb-30" id="module">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SpaceBetween size={"l"}>
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
                          description="请设置背景风格"
                          label="背景主题"
                        />
                        <Tiles
                          onChange={({ detail }) => setBackground(detail.value)}
                          value={background}
                          items={[
                            {
                              label: "单一纯色",
                              value: "single",
                              description: "页面背景为单一颜色",
                            },
                            {
                              label: "渐变颜色",
                              value: "gradient",
                              description: "页面背景为从一种颜色过渡到另一颜色",
                            },
                            {
                              label: "图片",
                              value: "pic",
                              description: "选择图片作为主题背景",
                            },
                          ]}
                        />
                      </Grid>
                      <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
                        <FormField
                          description={
                            background === "single" || background === "gradient"
                              ? "请设置背景色"
                              : "请上传背景图片"
                          }
                          label={
                            background === "single" || background === "gradient"
                              ? "颜色设置"
                              : "图片设置"
                          }
                        />
                        <div style={{ marginTop: 5 }}>
                          {genStyle(background)}
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
                ></Container>
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
                  <Checkbox checked={false}>我同意条款与限制</Checkbox>
                </FormField>
                {/* <Steps
    current={1}
    direction="vertical"
    items={[
      {
        title: '自定义主题',
        description: '自定义交互样式和风格',
      },
      {
        title: '配置功能',
        description: '定义认证方式及行为',
      },
      {
        title: '代码生成 & 线上部署',
        description: '下载到本地或云端部署',
      },
    ]}
  /> */}
              </SpaceBetween>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Configure;
