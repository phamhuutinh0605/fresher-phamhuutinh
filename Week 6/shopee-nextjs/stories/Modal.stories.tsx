import { Product } from '@/types';
import Modal from '../components/Molecules/Modal';
import type { Meta } from '@storybook/react';

export default {
  title: "Molecules/Modal",
  component: Modal
} as Meta;
interface Props {
  product: Product;
  handleAddToCart: () => void;
  handleRedirects: () => void;
  handleClose: () => void;
}

export const ModalProduct = ({product, handleAddToCart, handleRedirects, handleClose }: Props) => <Modal product={product} handleAddToCart={handleAddToCart} handleRedirects={handleRedirects} handleClose={handleClose} />
