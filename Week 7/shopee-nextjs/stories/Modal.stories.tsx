import { Product } from "@/types";
import Modal from "../components/Molecules/Modal";
import type { Meta, Story } from "@storybook/react";
import "../styles/scss/global.scss";
export default {
  title: "Molecules/Modal",
  component: Modal,
} as Meta;
interface Props {
  product: Product;
  handleAddToCart: () => void;
  handleRedirects: () => void;
  handleClose: () => void;
}
const Template: Story<Props> = (args) => <Modal {...args} />;
export const ModalProduct = Template.bind({});

ModalProduct.args = {
  product: {
    id: "1",
    desc: "desc 1",
    image: "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
    price: 100,
    title: "title 1",
    quantity: 10,
  },
  handleAddToCart: () => {},
  handleRedirects: () => {},
  handleClose: () => {},
};

