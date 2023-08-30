import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <section id="portfolio" className="relative z-10 py-16 md:py-20 lg:py-28">
        
    <div className="container">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
   
    </Table>
    </div>
    </section>
  );
}