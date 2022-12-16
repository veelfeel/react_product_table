import { selectProductData } from "../redux/product/selectors";
import { useAppSelector } from "../redux/store";
import { calcTotalQuantity } from "../utils/calcTotalQuantity";
import { calcTotalVolume } from "../utils/calcTotalVolume";

export const Footer = () => {
  const { products } = useAppSelector(selectProductData);

  const totalVolume = calcTotalVolume(products);
  const totalQuantity = calcTotalQuantity(products);

  return (
    <footer>
      <div>Общий объем: {totalVolume}</div>
      <div>Общее количество: {totalQuantity}</div>
    </footer>
  );
};
