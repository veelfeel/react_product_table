export interface CancelProduct {
  id: string;
  name: string;
}

export interface CancelProductSliceState {
  cancelProducts: CancelProduct[];
}
