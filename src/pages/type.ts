export interface AuthType { 
    label?: string; 
    value?: string; 
    description?: string
}

export interface OidcType {
    label: string,
    value: string,
    description?: string,
    clientId: string,
    redirectUrl: string,
};

export interface OidcOptionType{
    label: string,
    iconUrl?: string,
    value: string,
    clientId: string,
    redirectUri: string,
    tags: [string],
}

export interface AuthDetailType {type: string, oidcList?: OidcType[]}