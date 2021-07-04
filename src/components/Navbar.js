import {Navbar,Form,Button,FormControl} from 'react-bootstrap'

function Nav(setsearch){
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Movie App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
    <Form inline>
      <FormControl  onChange={(e)=>setsearch(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}


export default Nav