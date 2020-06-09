export interface IDnsZoneCreationRequest {
  zones: {
    name: string,
    email: string,
    ttl: number
  };
}

export interface IDnsZoneRecordCreationRequest {
  name: string;
  type: string;
  records: string[];
  ttl: number;
}

export interface IDnsZoneRecordUpdateRequest {
  record: {
    records: string[],
    ttl: number
  };
}
