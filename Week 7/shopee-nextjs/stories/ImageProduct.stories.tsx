import ImageProduct from "../components/Atoms/Images/ImageProduct";
import type { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms/Images",
  component: ImageProduct,
} as Meta;

interface Props {
  image: String;
  width: Number;
  height: Number;
}
const Template: Story<Props> = (args) => <ImageProduct {...args} />;
export const Product = Template.bind({});

Product.args = {
  image: "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
  width: 500,
  height: 300,
};
