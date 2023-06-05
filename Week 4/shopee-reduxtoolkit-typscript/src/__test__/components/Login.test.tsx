import { fireEvent, render, screen } from '@testing-library/react';
import TestComponent from '../../components/TestComponent';

//test render
test("username should be render", () => {
  render(<TestComponent />)
  const userInputEl = screen.getByPlaceholderText(/Tài khoản/i)
  expect(userInputEl).toBeInTheDocument();
})
test("password should be render", () => {
  render(<TestComponent />)
  const passwordnputEl = screen.getByPlaceholderText(/Mật khẩu/i)
  expect(passwordnputEl).toBeInTheDocument();
})

// test empty
test("password should be empty", () => {
  render(<TestComponent />)
  const userInputEl = screen.getByPlaceholderText(/Mật khẩu/i) as HTMLInputElement;
  expect(userInputEl.value).toBe("");
})
test("username should be empty", () => {
  render(<TestComponent />)
  const userInputEl = screen.getByPlaceholderText(/Tài khoản/i) as HTMLInputElement;
  expect(userInputEl.value).toBe("");
})

// test button disable
test("button login should be disable", () => {
  render(<TestComponent />)
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
})

//test visible
test("error message should not be visible", () => {
  render(<TestComponent />)
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
})

//test change value
test("username should change", () => {
  render(<TestComponent />)
  const userInputEl = screen.getByPlaceholderText(/Tài khoản/i) as HTMLInputElement;
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } })
  expect(userInputEl.value).toBe(testValue);
})
test("password should change", () => {
  render(<TestComponent />)
  const passwordInputEl = screen.getByPlaceholderText(/Mật khẩu/i) as HTMLInputElement;
  const testValue = "test";
  fireEvent.change(passwordInputEl, { target: { value: testValue } })
  expect(passwordInputEl.value).toBe(testValue);
})


// test button not disable when change input values
test("button login should be not disable when change input values", () => {
  render(<TestComponent />)
  const buttonEl = screen.getByRole("button");

  const userInputEl = screen.getByPlaceholderText(/Tài khoản/i) as HTMLInputElement;
  const passwordInputEl = screen.getByPlaceholderText(/Mật khẩu/i) as HTMLInputElement;

  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } })
  fireEvent.change(passwordInputEl, { target: { value: testValue } })

  expect(buttonEl).not.toBeDisabled();
})