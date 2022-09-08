import axios from 'axios';

/** Add NEXT_PUBLIC_MOCK_DEPLOYMENT_URL to your production deployment on vercel! */
const baseURL = process.env.NEXT_PUBLIC_MOCK_DEPLOYMENT_URL
  ? `https://${process.env.NEXT_PUBLIC_MOCK_DEPLOYMENT_URL}/api/mock`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/mock`
  : 'http://localhost:3000/api/mock';

export const apiMock = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default apiMock;
