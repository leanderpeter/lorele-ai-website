import { Card, Title, Text } from '@tremor/react';
import CreateDatastoreModal from '../components/createDatastoreModal';
import Search from '../components/search';
import DatastoresTable, { Datastore } from '../components/table';
import { useEffect, useState } from 'react';

export const dynamic = 'force-dynamic';

export default function IndexPage() {
  const [datastores, setDatastores] = useState<Datastore[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDatastores = async () => {
      const res = await fetch('/api/get-datastores');
      const data = await res.json();
      setDatastores(data.datastores.results);
    };

    fetchDatastores();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="relative">
        <Title>Datastores</Title>
        <Text>A list of your datastores</Text>
        <Search />
        <button
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Create Datastore
        </button>
      </div>
      <Card className="mt-6">
        {datastores && datastores.length > 0 ? (
          <DatastoresTable stores={datastores} />
        ) : (
          <></>
        )}
      </Card>
      <CreateDatastoreModal isOpen={isModalOpen} closeModal={closeModal} />
    </main>
  );
}
