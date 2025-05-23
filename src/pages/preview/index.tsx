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
import OIDC from "./component/oidc";
import SNS from "./component/sns";
import User from "./component/user";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../utils";
import { AuthDetailType, OidcOptionType, OidcType } from "../type";

export const Preview: React.FC = () => {
  const [logging] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [keep, setKeep] = useState(false);
  const { t, i18n } = useTranslation();
  const [selectedProvider, setSelectedProvider] = useState(null as any);
  const [selectedProviderName, setSelectedProviderName] = useState(null as any);
  const oidcOptions: OidcOptionType[] = [];
  const [error, setError] = useState("" as string);
  const urlParams = new URLSearchParams(window.location.search);
  const configStr = urlParams.get("config");
  const config = JSON.parse(configStr || "");
  const configParams = config;
  const [lang, setLang] = useState(configParams.customizationInfo.lang[0]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    i18n.changeLanguage(lang);
    const color = configParams.customizationInfo.primeColor;
    const backgroundColor = configParams.customizationInfo.theme.themeDetail;

    if (color) {
      document.documentElement.style.setProperty("--primary-color", color);
    }
    if (backgroundColor) {
      document.documentElement.style.setProperty(
        "--background-color",
        backgroundColor
      );
    }
  }, []);

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
            primeColor={configParams.customizationInfo.primeColor}
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
                  primeColor={configParams.customizationInfo.primeColor}
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
        }
      });
      return <Tabs tabs={tabs}></Tabs>;
    }

    return <>{genContentByAuthDetail(authDetails[0])}</>;
  };
  return (
    <>
      <div className="preview-login-div">
        <SpaceBetween direction="vertical" size="m">
          <div
            className={`container ${
              configParams.customizationInfo.layout === "right"
                ? "container-right"
                : ""
            }`}
          >
            <div className="banner">{configParams.basicInfo.appName}</div>
            <div className="sub-title">
              {t("auth:support-prefix")} {configParams.basicInfo.author}{" "}
              {t("auth:support-postfix")}
              {configParams.customizationInfo.lang.length > 1 && (
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
              {genMainContent()}
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
