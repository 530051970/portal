export const AuthTypeList = [
    {
      label: "用户名/密码",
      value: "username",
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
        "第三方IDP供应商申请的账号身份验证",
    },
  ]