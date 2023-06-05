// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: String;
  title: String;
  price: String;
  category: String;
  description: String;
  image: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    console.log("data1",data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}
