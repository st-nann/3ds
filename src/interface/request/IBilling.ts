export interface IBillingInvoiceRequest {
  taxNo: string;
  name: string;
  phone: string;
  address: string;
  delivery: null | string;
}

export interface IBillingTopUpRequest {
  amount: number;
}

export interface IBillingVoucherRequest {
  id: string;
}
