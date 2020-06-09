export interface IInstanceParam {
  id: string;
}

export interface IInstanceCreationParam {
  page?: string;
  marker?: string;
  query?: string;
}

export interface ILogsParam {
  id: string;
  fullLogs: string;
}
