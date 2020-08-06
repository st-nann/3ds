export interface IVdoResponse {
  message: {
    etag: string;
    items: object[];
    kind: string;
    nextPageToken: string;
    pageInfo: object;
    regionCode: string;
  };
  status: string;
}