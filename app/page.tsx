import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import DatastoresTable from './table';
import { listDatastores } from '../lib/vector';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const datastores = await listDatastores();
  console.log(datastores.data.results);

  return (
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
  );
}
