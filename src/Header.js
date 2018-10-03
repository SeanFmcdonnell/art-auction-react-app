import React, {PureComponent} from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import ModalComponent from './ModalComponent'

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChangeValue = e => this.setState({value: e.target.value});

  render() {
    return(
        <Navbar inverse collapseOnSelect style={{display:"flex", flexDirection:"row"}}>
          <Navbar.Header >
            <Navbar.Brand className="brand">
              Bid Wrangler
            </Navbar.Brand>
          <Nav style={{display:"flex", flexDirection:"row"}} >
            <NavItem eventKey={1} href="/dashboard">Dashboard</NavItem>
            <NavItem eventKey={2} href="/products">Art</NavItem>
            <NavItem><ModalComponent value={this.state.value} onChangeValue={this.handleChangeValue}/></NavItem>
          </Nav>
        </Navbar.Header>
      </Navbar>
      );
  }
}
