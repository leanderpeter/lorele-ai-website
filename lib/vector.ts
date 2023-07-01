import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { getSession } from '@auth0/nextjs-auth0';

const makeRequest = async (
  requestUrl: string | undefined,
  method: Method,
  headers?: Record<string, string> | null,
  payload?: Record<string, unknown>
) => {
  const reqConfig: AxiosRequestConfig = {
    method,
    url: `${process.env.VECTOR_BASE_URL}/${requestUrl}`
  };
  if (payload) {
    reqConfig.data = payload;
  }

  // Get the user session from the request
  const session = await getSession();

  // Add the access token to the request headers
  if (session && session.user && session.user.accessToken) {
    if (!headers) {
      headers = {};
    }
    headers['Authorization'] = `Bearer ${session.user.accessToken}`;
  }

  if (headers) {
    reqConfig.headers = headers;
  } else {
    reqConfig.withCredentials = true;
  }
  try {
    const { data, status } = await axios(reqConfig);

    return { data, status };
  } catch (err: unknown) {
    const axiosError = err as AxiosError;
    const { response } = axiosError;

    if (response) {
      const { status, data } = response;

      return { status, data };
    }

    return {
      status: 500,
      data: {}
    };
  }
};

export const listDatastores = async () => {
  const requestUrl = `datastores`;

  return makeRequest(requestUrl, 'GET');
};
