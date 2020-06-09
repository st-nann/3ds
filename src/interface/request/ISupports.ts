export interface ISupportAddTicketCommentRequest {
  ticketId: string;
  authorEmail: string;
  body: string;
}

export interface ISupportTicketCreationRequest {
  subject: string;
  type: string;
  phone: string;
  description: string;
  name: string;
  email: string;
  attachments?: string;
}

export interface ISupportUploadTicketAttachmentRequest {
  attachment: object[];
  fileName: object[];
}
