import Fuse from 'fuse.js';

import data from './data.json' with { type: 'json' };

function sleep(timeMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
}

export async function GET(request: Request) {
  // simulate latency
  await sleep(5_000);

  const url = new URL(request.url);
  const search = url.searchParams.get('search');

  if (!search) {
    return Response.json(data);
  }

  const options = {
    keys: ['title', 'description'],
    // Adjust threshold for more or less strict matching
    threshold: 0.4,
  };

  const fuse = new Fuse(data, options);

  return Response.json(fuse.search(search).map(({ item }) => item));
}
