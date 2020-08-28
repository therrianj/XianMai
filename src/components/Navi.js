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

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <h4 to="/"><img src="assets/images/logo-bai.png" alt="mini-logo" height="80px" width="80px"/></h4>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/beer">Beer啤酒</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/food">Food菜品</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/story">Story故事</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Location地址
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/mandy">
                  Xian Brewery - Mandy 蔓蒂广场
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem to="/live">
                  XM Live - Zhu Que Gate 朱雀门里
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem to="/creativeValley">
                  XM Taproom - Creative Valley 创意谷店 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem to="/NearWall">
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