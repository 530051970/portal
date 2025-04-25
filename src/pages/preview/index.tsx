import {
  Button,
  Checkbox,
  Grid,
  Icon,
  Link,
  SpaceBetween,
  Tabs,
  TabsProps,
} from "@cloudscape-design/components";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import OIDC from "./component/oidc";
import SNS from "./component/sns";
import User from "./component/user";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { EN_LANG, ZH_LANG, ZH_LANGUAGE_LIST } from "../const";
import { changeLanguage } from "../utils";
import { AuthDetailType, OidcOptionType, OidcType } from "../type";

export const Preview: React.FC = () => {
  // const [activeTabId, setActiveTabId] = useState(LOGIN_TYPE.OIDC);
  const [logging] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [keep, setKeep] = useState(false);
  const { t, i18n } = useTranslation();
  const [error, setError] = useState("" as string);
  // const [config] = useState(null as any);
  const [selectedProvider, setSelectedProvider] = useState(null as any);
  const [selectedProviderName, setSelectedProviderName] = useState(null as any);
  // const [tabs] = useState([] as any[]);
  // const [projectName, setProjectName] = useState("" as string);
  // const [author, setAuthor] = useState("" as string);
  const [lang, setLang] = useState("");
  // const [isLoading, setIsLoading] = useState(false as boolean);
  // const [, setOidcList] = useState([] as any[]);
  const oidcOptions: OidcOptionType[] = [];
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { configParams: stateConfigParams } = location.state || {};
  const urlConfigParams = searchParams.get('config') ? JSON.parse(decodeURIComponent(searchParams.get('config') || '')) : null;
  const configParams = stateConfigParams || urlConfigParams;
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (ZH_LANGUAGE_LIST.includes(i18n.language)) {
      setLang(ZH_LANG);
      i18n.changeLanguage(ZH_LANG);
    } else {
      setLang(EN_LANG);
      i18n.changeLanguage(EN_LANG);
    }
    setError("");
  }, [i18n]);

  const genContentByAuthDetail = (authDetail: AuthDetailType) => {
    switch (authDetail.type) {
      case "user":
        return (
          <User
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        );
        break;
      case "sns":
        return (
          <SNS
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        );
        break;
      default:
        authDetail.oidcList?.map((item: OidcType) => {
          let description = "";
          switch (item.value) {
            case "keycloak":
              description = t("auth:keycloakDesc");
              break;
            case "authing":
              description = t("auth:authingDesc");
              break;
            default:
              description = t("auth:cognitoDesc");
              break;
          }
          oidcOptions.push({
            label: item.label,
            value: item.value,
            clientId: item.clientId,
            redirectUri: item.redirectUrl,
            tags: [description],
          });
        });
        return (
          <>
            <OIDC
              provider={selectedProvider || oidcOptions[0]}
              username={username}
              password={password}
              oidcOptions={oidcOptions}
              setSelectedProviderName={setSelectedProviderName}
              setProvider={setSelectedProvider}
              setUsername={setUsername}
              setPassword={setPassword}
              setError={setError}
            />
            <div style={{ height: 20, width: "100%" }}></div>
          </>
        );
      // return <></>;
    }
  };

  const genMainContent = () => {
    const authDetails = configParams.actionInfo.authDetails;
    if (authDetails.length > 1) {
      const tabs: TabsProps.Tab[] = [];
      authDetails.forEach((item: AuthDetailType) => {
        switch (item.type) {
          case "user":
            tabs.push({
              label: (
                <div style={{ width: 100, textAlign: "right" }}>
                  {t("auth:username")}
                </div>
              ),
              id: "user",
              content: (
                <User
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                />
              ),
            });
            break;
          case "sns":
            tabs.push({
              label: (
                <div
                  style={{ paddingLeft: 15, width: 120, textAlign: "center" }}
                >
                  {t("auth:sns")}
                </div>
              ),
              id: "sns",
              content: (
                <SNS
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                />
              ),
            });
            break;
          default:
            item.oidcList?.map((item: OidcType) => {
              let description = "";
              switch (item.value) {
                case "keycloak":
                  description = t("auth:keycloakDesc");
                  break;
                case "authing":
                  description = t("auth:authingDesc");
                  break;
                default:
                  description = t("auth:cognitoDesc");
                  break;
              }
              oidcOptions.push({
                label: item.label,
                value: item.value,
                clientId: item.clientId,
                redirectUri: item.redirectUrl,
                tags: [description],
              });
            });
            tabs.push({
              label: (
                <div style={{ width: 120, textAlign: "center" }}>
                  {t("auth:oidc")}
                </div>
              ),
              id: "oidc",
              content: (
                <OIDC
                  provider={selectedProvider || oidcOptions[0]}
                  username={username}
                  password={password}
                  oidcOptions={oidcOptions}
                  setSelectedProviderName={setSelectedProviderName}
                  setProvider={setSelectedProvider}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  setError={setError}
                />
              ),
            });
          // return <></>;
        }
      });

      return <Tabs tabs={tabs}></Tabs>;
    }

    return <>{genContentByAuthDetail(authDetails[0])}</>;
  };

  // useEffect(() => {
  //   updateEnv(config);
  // }, [config, username, password, lang, selectedProvider]);

  // const updateEnv = (config: any) => {
  //   setIsLoading(true);
  //   if (config !== null) {
  //     let tmp_tabs: any[] = [];
  //     setProjectName(config.project);
  //     setAuthor(config.author);
  //     if (config.login?.user) {
  //       tmp_tabs.push({
  //         label: (
  //           <div style={{ width: 100, textAlign: "right" }}>
  //             {t("auth:username")}
  //           </div>
  //         ),
  //         id: "user",
  //         content: (
  //           <User
  //             username={username}
  //             password={password}
  //             setUsername={setUsername}
  //             setPassword={setPassword}
  //           />
  //         ),
  //         disabled: config.login?.user?.disabled || false,
  //       });
  //     }
  //     if (config.login?.sns) {
  //       tmp_tabs.push({
  //         label: (
  //           <div style={{ paddingLeft: 15, width: 120, textAlign: "center" }}>
  //             {t("auth:sns")}
  //           </div>
  //         ),
  //         id: "sns",
  //         disabled: config.login.sns.disabled || false,
  //         content: (
  //           <SNS
  //             username={username}
  //             password={password}
  //             setUsername={setUsername}
  //             setPassword={setPassword}
  //           />
  //         ),
  //       });
  //     }
  //     if (configParams?.oidc && configParams.oidc.providers.length > 0) {
  //       configParams.oidc.providers.forEach((item: any) => {
  //         let description = "";
  //         switch (item.name) {
  //           case "keycloak":
  //             description = t("auth:keycloakDesc");
  //             break;
  //           case "authing":
  //             description = t("auth:authingDesc");
  //             break;
  //           default:
  //             description = t("auth:cognitoDesc");
  //             break;
  //         }
  //         oidcOptions.push({
  //           label: item.label,
  //           iconUrl: `imgs/${item.name}.png`,
  //           value: item.name,
  //           clientId: item.clientId,
  //           clientSecret: item.clientSecret,
  //           redirectUri: item.redirectUri,
  //           disabled: item.disabled || false,
  //           tags: [description],
  //         });
  //         // tmp_login_params.set(item.name, item)
  //       });
  //     }

  //     setOidcList(oidcOptions);

  //     tmp_tabs.push({
  //       label: (
  //         <div style={{ width: 120, textAlign: "center" }}>
  //           {t("auth:oidc")}
  //         </div>
  //       ),
  //       id: "oidc",
  //       disabled: config.login?.oidc.disabled || false,
  //       content: (
  //         <OIDC
  //           provider={selectedProvider || oidcOptions[0]}
  //           username={username}
  //           password={password}
  //           oidcOptions={oidcOptions}
  //           setSelectedProviderName={setSelectedProviderName}
  //           setProvider={setSelectedProvider}
  //           setUsername={setUsername}
  //           setPassword={setPassword}
  //           setError={setError}
  //         />
  //       ),
  //     });
  //   }
  //   // setTabs(tmp_tabs);
  //   setIsLoading(false);
  // };
  // return () => {
  return (
    <>
      <div className="preview-login-div">
        {/* {JSON.stringify(configParams)} */}
        <SpaceBetween direction="vertical" size="m">
          <div className="container">
            <div className="banner">{configParams.basicInfo.appName}</div>
            <div className="sub-title">
              {t("auth:support-prefix")} {configParams.basicInfo.author}{" "}
              
              {t("auth:support-postfix")}
              {configParams.customizationInfo.lang.length>1 && (
                <>
                {" "}
              <Link
                variant="info"
                onFollow={() => changeLanguage(lang, setLang, i18n)}
              >
                {t("auth:changeLang")}
              </Link>
                </>
              )}
              
            </div>
            <div className="tab" style={{ paddingLeft: "10%" }}>
              {/* {JSON.stringify(configParams.actionInfo.authDetails)} */}
              {genMainContent()}
              {/* <Tabs
                onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
                activeTabId={activeTabId}
                tabs={genTabs()}
              /> */}
              <div className="bottom-setting">
                <Grid gridDefinition={[{ colspan: 4 }, { colspan: 8 }]}>
                  <div>
                    <Checkbox
                      onChange={({ detail }) => setKeep(detail.checked)}
                      checked={keep}
                    >
                      <span className="keep">{t("auth:keepLogin")}</span>
                    </Checkbox>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Link>{t("auth:forgetPWD")}</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link>{t("auth:register")}</Link>
                  </div>
                </Grid>
              </div>
              <div className="button-group">
                <Button
                  variant="primary"
                  className="login"
                  loading={logging}
                  onClick={() => {
                    console.log("~~~");
                  }}
                >
                  {t("auth:login")}
                </Button>
                <Grid
                  gridDefinition={[
                    { colspan: 5 },
                    { colspan: 2 },
                    { colspan: 5 },
                  ]}
                >
                  <div
                    style={{ marginTop: 20, borderBottom: "1px solid #ccc" }}
                  ></div>
                  <div
                    style={{
                      textAlign: "center",
                      paddingTop: 8,
                      color: "#ccc",
                    }}
                  >
                    {t("auth:or")}
                  </div>
                  <div
                    style={{ marginTop: 20, borderBottom: "1px solid #ccc" }}
                  ></div>
                </Grid>
                <div style={{ marginTop: 12 }}>
                  <SpaceBetween direction="vertical" size="m">
                    <Button
                      className="login"
                      onClick={() => {
                        console.log("SSO");
                      }}
                      disabled
                    >
                      {t("auth:sso")}
                    </Button>

                    {showMore ? (
                      <>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                          onClick={() => setShowMore(false)}
                        >
                          <Icon name="angle-up" />
                        </div>
                        <Button
                      className="login"
                      onClick={() => {
                        console.log("SSO");
                      }}
                      disabled
                    >
                      {t("auth:google")}
                    </Button>
                    <Button
                      className="login"
                      onClick={() => {
                        console.log("SSO");
                      }}
                      disabled
                    >
                      {t("auth:github")}
                    </Button>


                      </>
                    ) : (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                        onClick={() => setShowMore(true)}
                      >
                        <Icon name="angle-down" />
                      </div>
                    )}
                  </SpaceBetween>
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    textAlign: "right",
                    color: "red",
                    fontWeight: 800,
                    height: 16,
                  }}
                >
                  {error}
                </div>
              </div>
              <div style={{ display: "none" }}>{selectedProviderName}</div>
            </div>
          </div>
        </SpaceBetween>
      </div>
    </>
  );
};
// }
