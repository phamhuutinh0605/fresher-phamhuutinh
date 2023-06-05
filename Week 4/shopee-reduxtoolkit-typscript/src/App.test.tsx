import { render, screen } from '@testing-library/react';
import App from 'App';

test('render register link',()=>{
  render(<App/>);
  const linkElement=screen.getByText(/Đăng kí/i);
  expect(linkElement).toBeInTheDocument();
})
