// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   id: String;
//   title: String;
//   price: String;
//   category: String;
//   description: String;
//   image: String
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  try {
    const response = await fetch('https://6183caa491d76c00172d1b4b.mockapi.io/api/product')
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}
