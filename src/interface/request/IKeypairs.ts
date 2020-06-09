export interface IKeypairImportRequest {
  name: string;
  public_key: string;
}

export interface IKeypairDeleteRequest {
  name: string;
}

export interface IKeypairSetDefaultRequest {
  keypair_id: string;
  is_default: boolean;
}
