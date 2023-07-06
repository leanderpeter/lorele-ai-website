import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

export type Datastore = {
  //id: number;
  name: string;
};

export default function DatastoresTable({ stores }: { stores: Datastore[] }) {
  console.log(stores);
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
