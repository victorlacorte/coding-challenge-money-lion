import { searchResultSchema } from './schemas';

const apiBase = 'http://localhost:3000/api';

export async function getSearchData(search: string) {
  let url = new URL(apiBase);

  if (search.length > 0) {
    url.searchParams.set('search', search);
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

  return searchResultSchema.parse(json);
}
