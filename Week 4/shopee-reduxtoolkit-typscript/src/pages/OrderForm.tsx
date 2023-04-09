import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addOrder, updateOrder } from "../store/ordersSlice";

export interface Order {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number;
}

interface OrderFormProps {
  initialOrder?: Order;
  toggle: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ initialOrder, toggle }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState<Order>(
    initialOrder ?? {
      id: "0",
      title: "",
      price: 0,
      desc: "",
      image: "",
      quantity: 0,
    }
  );

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Number(order.id) === 0) {
      dispatch(addOrder(order));
    } else {
      dispatch(updateOrder(order));
    }
    toggle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          value={order.title.toString()}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
          value={order.price.toString()}
          onChange={handleChange}
          min={0}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="desc">Description</Label>
        <Input
          type="textarea"
          name="desc"
          id="desc"
          placeholder="Enter description"
          value={order.desc.toString()}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input
          type="text"
          name="image"
          id="image"
          placeholder="Enter image URL"
          value={order.image.toString()}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="quantity">Quantity</Label>
        <Input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Enter quantity"
          value={order.quantity.toString()}
          onChange={handleChange}
          min={0}
          required
        />
      </FormGroup>
      <Button color="primary" type="submit">
        {Number(order.id) === 0 ? "Add" : "Update"} Order
      </Button>
    </Form>
  );
};

export default OrderForm;
