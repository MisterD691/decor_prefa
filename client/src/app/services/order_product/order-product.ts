import { Order } from "../order/order";
import { Product } from "../product/product";

export interface OrderProduct {
  _id?: string;
  quantity: number;
  order: Order;
  orderId?: string;
  product: Product;
  productId?: string;
}
