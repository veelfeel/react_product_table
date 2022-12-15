import { Product } from "../redux/product/types";

export const calcTotalQuantity = (items: Product[]) => {
  return items.reduce((sum, item) => sum + item.qty, 0);
};
