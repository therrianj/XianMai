import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <a href="/"><img  src="assets/images/logo-bai.png" alt="mini-logo" height="100px" width="100px"/></a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-2 pt-4" navbar>
            <NavItem >
              <NavLink className='text-light' href="/beer"><h5>Beer啤酒</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-light' href="/food"><h5>Food菜品</h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='text-light' href="/story"><h5>Story故事</h5></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='text-light'><h5>
                Location地址
              </h5></DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/mandy">
                  Xian Brewery - Mandy 蔓蒂广场
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/live">
                  XM Live - Zhu Que Gate 朱雀门里
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/creativevalley">
                  XM Taproom - Creative Valley 创意谷店 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/nearwall">
                  Near Wall Bar 泥窝窝 - South Gate 南门
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <h4 className='text-secondary'>Xian Brewery</h4>
          <h4 className="ml-1 text-secondary"><strong>仙麦</strong></h4>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default Navi;