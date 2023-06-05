import { Product } from '@/types';
import Card from '../components/Molecules/Card';
import type { Meta } from '@storybook/react';

export default {
  title: "Molecules/Card",
  component: Card
} as Meta;
interface Props {
  handleAddToCart: () => void;
  handleOpen: () => void;
  product: Product;
}
export const CardProduct = ({ handleAddToCart, handleOpen, product }: Props) => <Card handleAddToCart={handleAddToCart} handleOpen={handleOpen} product={product} />
