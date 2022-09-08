import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];
    if (token === 'dummy-token') {
      return res.status(200).json({
        code: 200,
        data: {
          id: 1,
          name: 'Theodorus Clarence',
          token: 'dummy-token',
        },
      });
    } else {
      return res.status(401).json({
        code: 401,
        status: 'Error',
        message: "You're not authorized to access this resource",
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
