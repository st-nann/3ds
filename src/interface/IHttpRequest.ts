export interface IHttpRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" | "get" | "delete" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "put" | "patch" | "PATCH" | "link" | "LINK" | "unlink" | "UNLINK";
  path: string;
  payload?: any;
  mutation: string;
}

export interface IToken {
  "x-auth-token": string;
  "project-id": string;
  "black-box": string;
  "description": string;
  "neutron-extension": string;
}

export interface IUnscopeToken {
  "black-box": string;
}
