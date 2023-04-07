import type {  Meta, StoryObj } from '@storybook/react';
import { Button, Props } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
}
export default meta;
type Story = StoryObj<typeof Button>;
export const Buy: Story = {
  args: {
    label: 'Mua Ngay',
    backgroundColor:"#f7472e",
    color:"white",
    border:"none",
    padding:"10px 15px",
    fontSize:"12px"
  }
}
export const AddCart: Story = {
  args: {
    label: 'Thêm Vào Giỏ',
    color:"#f7472e",
    backgroundColor:"white",
    border:"1px solid #f7472e",
    padding:"10px 15px",
    fontSize:"12px"
  }
}
export const Detail: Story = {
  args: {
    label: 'Chi Tiết',
    color:"#f7472e",
    backgroundColor:"white",
    border:"1px solid #f7472e",
    padding:"10px 15px",
    fontSize:"12px"
  }
}

export const Login: Story = {
  args: {
    label: 'ĐĂNG NHẬP',
    backgroundColor:"#f7472e",
    color:"white",
    border:"none",
    padding:"8px 10px",
    fontSize:"12px",
    cursor: "pointer",
    width:"100%"
  }
}

export const Register: Story = {
  args: {
    label: 'ĐĂNG KÝ',
    backgroundColor:"#f7472e",
    color:"white",
    border:"none",
    padding:"8px 10px",
    fontSize:"12px",
    cursor: "pointer",
    width:"100%"
  }
}
// export default{
//   title:"Component/Button",
//   component:Button
// } as Meta<typeof Button>

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Submit = Template.bind({});
// Submit.args = {
//   label: 'Button',
//   variant:"primary"
// };
