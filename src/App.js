import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Table from './components/Table/Table';
import TableBody from './components/TableBody/TableBody';
import TableCell from './components/TableCell/TableCell';
import TableHead from './components/TableHead/TableHead';
import TableHeading from './components/TableHeading/TableHeading';
import TableRow from './components/TableRow/TableRow';
import './index.css';

function App() {
  return (
    <Container>
      <Button buttonStyle='btn--default'>Testing</Button>
      <Button buttonStyle='btn--primary'>Testing</Button>
      <Button buttonStyle='btn--secondary'>Testing</Button>
      <Button buttonStyle='btn--danger'>Testing</Button>
      <Button buttonStyle='btn--success'>Testing</Button>
      <Button buttonStyle='btn--dark'>Testing</Button>
      <Input helperText='testing 123' icon='search' />
      <Input helperText='testing 123' />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeading>Name</TableHeading>
            <TableHeading>Date</TableHeading>
            <TableHeading>Name</TableHeading>
            <TableHeading>Date</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Project Date</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Project Date</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Project Date</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Project Date</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;
