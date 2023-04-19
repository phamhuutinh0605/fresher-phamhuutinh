export type ProductProp = {
  desc: String;
  id: String;
  image: String;
  price: Number;
  title: String;
  quantity:Number;
}
export type Order = {
  title: string[];
  price: string[];
  amount: string[];
  total: number;
  address: string;
  phone: string;
  dateOrder: string;
  id: String;
}
export interface User {
  id: String;
  email: String;
  username: String;
  password: String;
  address: {
    street:String;
    city:String;
  };
  phone: Number;
}