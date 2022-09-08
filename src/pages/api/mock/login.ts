import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({
      code: 200,
      data: {
        token: 'dummy-token',
      },
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
