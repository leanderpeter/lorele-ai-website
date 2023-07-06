import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import axios from 'axios';

async function handle(req: any, res: any) {
  try {
    const session = await getSession(req, res);

    if (!session) {
      res.status(401).json({});
      throw new Error('fail bruh');
    }

    // Fetch datastores from localhost:8080/datastores
    const response = await axios.get('https://vector.lorele.ai/datastores', {
      headers: {
        Authorization: `Bearer ${session.accessToken}` // Send the access token with the request
      }
    });

    // Assuming the response data is an array of datastores, you can process it accordingly
    const datastores = response.data;

    res.status(200).json({
      datastores
    });
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch', description: e.message });
  }
}

export default withApiAuthRequired(handle);
