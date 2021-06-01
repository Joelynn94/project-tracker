import Checkbox from './components/Checkbox/Checkbox';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Table from './components/Table/Table';
import TableBody from './components/TableBody/TableBody';
import TableCell from './components/TableCell/TableCell';
import TableHead from './components/TableHead/TableHead';
import TableHeading from './components/TableHeading/TableHeading';
import TableRow from './components/TableRow/TableRow';
import Dropdown from './components/Dropdown/Dropdown';
import './index.css';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

const items = [
  {
    id: 1,
    value: 'Web Application (Front End)',
  },
  {
    id: 2,
    value: 'Web Application (Back End)',
  },
  {
    id: 3,
    value: 'Web Application (Full Stack)',
  },
  {
    id: 4,
    value: 'Mobile Application',
  },
];

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
      <Input helperText='testing 123' type='date' icon='calendar' />

      <Table>
        <TableHead>
          <TableRow>
            <TableHeading>Project Name</TableHeading>
            <TableHeading>Project Type</TableHeading>
            <TableHeading>Priority</TableHeading>
            <TableHeading>Due Date</TableHeading>
            <TableHeading>Updated Date</TableHeading>
            <TableHeading>Created Date</TableHeading>
            <TableHeading>Complete</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>REST Countries API</TableCell>
            <TableCell>Web Application (Front End)</TableCell>
            <TableCell>Medium</TableCell>
            <TableCell>5/20/21</TableCell>
            <TableCell>5/15/21</TableCell>
            <TableCell>5/14/21</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              <Checkbox />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>REST Countries API</TableCell>
            <TableCell>Web Application (Front End)</TableCell>
            <TableCell>High</TableCell>
            <TableCell>5/20/21</TableCell>
            <TableCell>5/15/21</TableCell>
            <TableCell>5/14/21</TableCell>
            <TableCell style={{ textAlign: 'center' }}>
              <Checkbox />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Dropdown title='Select project type' items={items} />

      <ToggleSwitch />
    </Container>
  );
}

export default App;
