export interface ICreateRequest {
  type: string;
  name: string;
  description?: string;
  tag?: string[];
  members: number;
}

export interface IEditRequest {
  name?: string;
  tag?: string[];
  members?: number;
}

export interface IJoinAndUnjoinRequest {
  partyId: string;
}
