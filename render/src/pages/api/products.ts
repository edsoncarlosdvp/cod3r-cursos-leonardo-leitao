// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// interface DataProps {
//   id: number
//   name: string
//   price: number
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    { id: 1, name: 'Caneta', price: 5.60 },
    { id: 2, name: 'Caderno', price: 15.60 },
    { id: 3, name: 'Borracha', price: 7.30 },
    { id: 4, name: 'Tesoura', price: 21.55 },
  ])
}
