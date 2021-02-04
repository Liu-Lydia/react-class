import React, { useState, useEffect } from 'react'
import { BsFillAwardFill } from 'react-icons/bs'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const { auth } = props

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/home">
          React-Bootstrap
          <BsFillAwardFill />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/about">
              關於我們
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              會員註冊
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              登入
            </Nav.Link>
            {auth && (
              <Nav.Link as={NavLink} to="/member">
                會員專區
              </Nav.Link>
            )}
            <Nav.Link as={NavLink} to="/productcategory">
              產品分類
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student">
              學生資料
            </Nav.Link>
            <NavDropdown title="產品" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/product/men">
                男性
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product/women">
                女性
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/product/baby">
                嬰幼兒
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
