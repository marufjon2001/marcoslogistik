import { Box } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar1 from './Navbar1/Navbar1';
import navbar from "../images/Navbar/navbar.svg"
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

function BasicExample() {
  return (
    <Box>
     <Navbar1/>
    <Navbar style={{backgroundColor: '#23262F'}} expand="lg">
      <Container>
        <img src={navbar} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Box>
  );
}

export default BasicExample;