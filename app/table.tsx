import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { listDatastores } from '../lib/vector';

interface Datastore {
  //id: number;
  name: string;
}

export default function DatastoresTable({ stores }: { stores: Datastore[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stores.map((store) => (
          <TableRow key={store.name}>
            <TableCell>{store.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
