import { Product } from "@/types";
import Card from "../components/Molecules/Card";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta;
interface Props {
  handleAddToCart: () => void;
  handleOpen: () => void;
  product: Product;
}
const Template: Story<Props> = (args) => <Card {...args} />;
export const ProductCard = Template.bind({});

ProductCard.args = {
  product: {
    id: "1",
    desc: "desc 1",
    image: "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
    price: 100,
    title: "title 1",
    quantity: 10,
  },
  handleAddToCart: () => {},
  handleOpen: () => {},
};

