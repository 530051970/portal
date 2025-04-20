import {
  Button,
  Checkbox,
  Grid,
  Link,
  SpaceBetween,
  Spinner,
  Tabs,
} from "@cloudscape-design/components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import yaml from "yaml";
import OIDC from "./component/oidc";
import SNS from "./component/sns";
import User from "./component/user";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { EN_LANG, LOGIN_TYPE, ZH_LANG, ZH_LANGUAGE_LIST } from "../const";
import { changeLanguage } from "../utils";

export const Preview: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(LOGIN_TYPE.OIDC);
  const [logging, setLogging] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [keep, setKeep] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [error, setError] = useState("" as string);
  const [config, setConfig] = useState(null as any);
  const [selectedProvider, setSelectedProvider] = useState(null as any);
  const [selectedProviderName, setSelectedProviderName] = useState(null as any);
  const [tabs, setTabs] = useState([] as any[]);
  const [projectName, setProjectName] = useState("" as string);
  const [author, setAuthor] = useState("" as string);
  const [version, setVersion] = useState(0);
  const [lang, setLang] = useState("");
  const [isLoading, setIsLoading] = useState(true as boolean);
  const [oidcList, setOidcList] = useState([] as any[]);
  const oidcOptions: any[] = [];
  const location = useLocation();
  const { configParams } = location.state || {};

  useEffect(() => {
    if (ZH_LANGUAGE_LIST.includes(i18n.language)) {
      setLang(ZH_LANG);
      i18n.changeLanguage(ZH_LANG);
    } else {
      setLang(EN_LANG);
      i18n.changeLanguage(EN_LANG);
    }
    const loadConfig = async () => {
      let response = await fetch("/config.yaml");
      let data = await response.text();
      return yaml.parse(data);
    };
    loadConfig().then((configData) => {
      setConfig(configData);
    });
    setError("");
  }, [i18n]);

  useEffect(() => {
    updateEnv(config);
  }, [config, username, password, lang, selectedProvider]);

  const updateEnv = (config: any) => {
    setIsLoading(true);
    if (config !== null) {
      let tmp_tabs: any[] = [];
      setProjectName(config.project);
      setAuthor(config.author);
      if (config.login?.user) {
        tmp_tabs.push({
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
          disabled: config.login?.user?.disabled || false,
        });
      }
      if (config.login?.sns) {
        tmp_tabs.push({
          label: (
            <div style={{ paddingLeft: 15, width: 120, textAlign: "center" }}>
              {t("auth:sns")}
            </div>
          ),
          id: "sns",
          disabled: config.login.sns.disabled || false,
          content: (
            <SNS
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ),
        });
      }
      if (configParams?.oidc && configParams.oidc.providers.length > 0) {
        configParams.oidc.providers.forEach((item: any) => {
          let description = "";
          switch (item.name) {
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
            iconUrl: `imgs/${item.name}.png`,
            value: item.name,
            clientId: item.clientId,
            clientSecret: item.clientSecret,
            redirectUri: item.redirectUri,
            disabled: item.disabled || false,
            tags: [description],
          });
          // tmp_login_params.set(item.name, item)
        });
      }

      setOidcList(oidcOptions);

      tmp_tabs.push({
        label: (
          <div style={{ width: 120, textAlign: "center" }}>
            {t("auth:oidc")}
          </div>
        ),
        id: "oidc",
        disabled: config.login?.oidc.disabled || false,
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
    // setTabs(tmp_tabs);
    setIsLoading(false);
  };
  // return () => {
  return isLoading ? (
    <div style={{ paddingTop: "20%", paddingLeft: "50%" }}>
      <Spinner size="large" />
    </div>
  ) : (
    <>
      <div className="login-div">
        <SpaceBetween direction="vertical" size="m">
          <div className="container">
            <div className="banner">{projectName}</div>
            <div className="sub-title">
              {t("auth:support-prefix")} {author} {t("auth:support-postfix")}{" "}
              <Link
                variant="info"
                onFollow={() => changeLanguage(lang, setLang, i18n)}
              >
                {t("auth:changeLang")}
              </Link>
            </div>
            <div className="tab" style={{ paddingLeft: "10%" }}>
              <Tabs
                onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
                activeTabId={activeTabId}
                tabs={tabs}
              />
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
                  <Button
                    className="login"
                    onClick={() => {
                      console.log("SSO");
                    }}
                    disabled
                  >
                    {t("auth:sso")}
                  </Button>
                </div>
                <div
                  style={{
                    marginTop: 30,
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
