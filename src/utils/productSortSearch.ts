import { Product } from "../redux/product/types";

export const productSortSearch = (items: Product[], searchVal: string) => {
  const newitems = [...items]
    .sort(
      (a, b) =>
        Number(new Date(b.delivery_date)) - Number(new Date(a.delivery_date))
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.status.toLowerCase().includes(searchVal.toLowerCase()) ||
        String(item.sum).includes(searchVal) ||
        String(item.qty).includes(searchVal) ||
        String(item.delivery_date).includes(searchVal) ||
        item.currency.includes(searchVal) ||
        String(item.volume).includes(searchVal) ||
        String(item.sum * item.qty).includes(searchVal)
    );

  return newitems;
};
