// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

function numRandom(min = 1, max = 100000) {
  return Math.random() * (max - min) + min
}

export default function apiProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    { id: numRandom(), name: 'Caneta', price: 5.60 },
    { id: numRandom(), name: 'Caderno', price: 15.60 },
    { id: numRandom(), name: 'Borracha', price: 7.30 },
    { id: numRandom(), name: 'Tesoura', price: 21.55 },
  ])
}
