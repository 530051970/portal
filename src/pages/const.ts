export const AuthTypeList = [
    {
      label: "用户名/密码",
      value: "user",
      description: "凭用户名/密码进行身份认证",
    },
    {
      label: "手机验证码",
      value: "sns",
      description: "通过手机号进行身份验证",
    },
    {
      label: "OIDC账号",
      value: "oidc",
      description:
        "IDP供应商申请的账号身份验证",
    },
  ]


  export const ThirdAuthTypeList = [
    {
        label: "Google",
        value: "google",
        description: "全球最大搜索引擎公司",
      },
      {
        label: "GitHub",
        value: "github",
        description: "全球最大开源代码托管平台",
      },
  ]

  export const SsoList = [
    {
        label: "Amazon MiddleWay",
        value: "midway",
        description: "Amazon微服务基础设施组件",
      }
  ]
export const DEFAULT_ZH_LANG = 'zh';
export const DEFAULT_EN_LANG = 'en';
export const ZH_LANGUAGE_LIST = [DEFAULT_ZH_LANG, 'zh-CN', 'zh-cn', 'zh_CN'];

  export const EN_LANGUAGE_LIST = ['en', 'en-US', 'en_UK'];
export const EN_LANG = 'en';
export const ZH_LANG = 'zh';

export const LOGIN_TYPE = {
  USER: 'user',
  SNS: 'sns',
  OIDC: 'oidc',
};
