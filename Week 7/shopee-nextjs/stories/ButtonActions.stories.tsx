import { Product } from "@/types";
import type { Meta, Story } from "@storybook/react";
import ButtonActions from "../components/Molecules/ButtonActions";

export default {
  title: "Molecules/Actions",
  component: ButtonActions,
} as Meta;
interface Props {
  handleAddToCart: () => void;
  handleOpen: () => void;
  product: Product;
}

const Template: Story<Props> = (args) => <ButtonActions {...args} />;
export const Actions = Template.bind({});

Actions.args = {
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
// export const CardProduct = ({
//   handleAddToCart,
//   handleOpen,
//   product,
// }: Props) => (
//   <ButtonActions
//     handleAddToCart={handleAddToCart}
//     handleOpen={handleOpen}
//     product={product}
//   />
// );
