import ButtonBuy from '../components/Atoms/Buttons/ButtonBuy';
import ButtonArrowRight from '../components/Atoms/Buttons/ButtonArrowRight';
import type { Meta } from '@storybook/react';

export default {
  title: "Atoms/Button",
  component: ButtonArrowRight
} as Meta;

interface Props {
  handleMove: () => void;
}
export const ArrowRight = ({ handleMove }: Props) => <ButtonArrowRight handleMove={handleMove} />
