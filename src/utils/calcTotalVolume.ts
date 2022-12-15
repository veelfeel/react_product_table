import { Product } from "../redux/product/types";

export const calcTotalVolume = (items: Product[]) => {
  return items.reduce((sum, item) => sum + item.volume, 0);
};
