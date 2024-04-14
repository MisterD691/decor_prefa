import { Category } from "../category/category";

export interface Product {
  _id?: string;
  title: string;
  description?: string;
  quantity: number;
  price: number;
  picture?: string;
  categoryId?: string;
  category: Category;
}
