export interface IHttpRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" | "get" | "delete" | "post" | "put";
  path: string;
  payload?: any;
  mutation: string;
}

export interface IToken {
  "x-auth-token": string;
}
