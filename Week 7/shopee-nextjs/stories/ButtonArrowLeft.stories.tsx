import ButtonArrowLeft from '../components/Atoms/Buttons/ButtonArrowLeft';
import type { Meta } from '@storybook/react';

export default {
  title: "Atoms/Button",
  component: ButtonArrowLeft
} as Meta;

interface Props {
  handleMove: () => void;
}
export const ArrowLeft = ({ handleMove }: Props) => <ButtonArrowLeft handleMove={handleMove} />
