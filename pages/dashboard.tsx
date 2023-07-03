import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search';
import DatastoresTable from '../components/table';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export const dynamic = 'force-dynamic';

export default function IndexPage() {
  const { user, isLoading } = useUser();

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/protected-api');

      const data = await res.json();

      setData(data);

      console.log(data);
    })();
  }, []);

  const datastores = { data: { results: [] } };

  return (
    <>
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Datastores</Title>
        <Text>A list of your datastores</Text>
        <Search />
        <Card className="mt-6">
          {datastores.data ? (
            <DatastoresTable stores={datastores.data.results} />
          ) : (
            <></>
          )}
        </Card>
      </main>
    </>
  );
}
