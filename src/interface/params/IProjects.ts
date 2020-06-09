export interface IProjectParam {
  id: string;
}

export interface IProjectUpdateProfileParam {
  id: string;
}

export interface IProjectCancelInviteMemberParam {
  id: string;
  memberId: string;
  email: string;
}

export interface IProjectDeleteInviteMemberParam {
  id: string;
  userId: string;
  role: string;
  ownerName: string;
  ownerEmail: string;
}

export interface IProjectDocumentParam {
  id: string;
}

export interface IProjectSignUrlDocumentParam {
  id: string;
  action: string;
}