import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';

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
  // If we dont provide any headers/cookie
  // to auth the user, we send the credentials
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

  return makeRequest(requestUrl, 'GET', {
    Authorization: process.env.VECTOR_AUTH_KEY || ''
  });
};
