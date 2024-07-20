import { searchResultSchema } from './schemas';

async function getData() {
  const res = await fetch('http://localhost:3000/api?search=budget');
  // const res = await fetch('http://localhost:3000/api');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json();

  return searchResultSchema.parse(json);
}

async function Home() {
  const data = await getData();

  return data.map((item) => <div key={item.id}>{item.title}</div>)
}

export default Home;
