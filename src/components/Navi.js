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
        <a href="/"><img  src="assets/images/logo-bai.png" alt="mini-logo" height="80px" width="80px"/></a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/beer">Beer啤酒</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/food">Food菜品</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/story">Story故事</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Location地址
              </DropdownToggle>
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
            <h5>Xian Brewery</h5>
            <h4 className="ml-1"><strong>仙麦</strong></h4>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default Navi;