import ButtonBuy from '../components/Atoms/Buttons/ButtonBuy';
import type { Meta } from '@storybook/react';

export default {
  title: "Atoms/Button",
  component: ButtonBuy
} as Meta;

interface Props {
  handleAddToCart: () => void;
}
export const Buy = ({ handleAddToCart }: Props) => <ButtonBuy handleAddToCart={handleAddToCart} />
