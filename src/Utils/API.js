const BASE_URL = 'https://api.chucknorris.io/jokes';
const CATEGORIES_ENDPOINT = '/categories';
const GET_JOKE_ENDPOINT = '/random';

const request = async (endpoint, postData, aditionalHeaders) => {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      headers: new Headers({ ...aditionalHeaders, 'Content-Type': 'application/json' }),
      method: postData ? 'POST' : 'GET',
      ...(postData && { body: JSON.stringify(postData) }),
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCategories = () => request(CATEGORIES_ENDPOINT);
export const getJoke = category => request(`${GET_JOKE_ENDPOINT}?category=${category}`);
