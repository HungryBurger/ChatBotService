import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/YRB_logo.png';
import {Button, Nav, Navbar, Form} from 'react-bootstrap';
import Login from '../Pages/Login'

const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div id="Header">
            <Navbar bg="dark" variant="dark">
                <Link to="/"><img className="Header_logo" style={{width: "50px", height: "50px"}} src={logo}
                                  alt="yrb 로고"/></Link>
                {/* <div>
                    <div className="Menu_ChatBotService"></div>
                    <div></div>
                </div> */}
                <Nav className="mr-auto">
                    <Nav.Link className="Menu_ChatBotService" style={{margin: "20px" ,fontSize: "30px"}} href="/ChatBotIntro">ChatBot Service
                        {/* <ul className="dropDownMenu">
                            <li><Link to="/ChatBotIntro" style={{textDecoration:"none", color:"white"}}>
                                    <div className="dropDown_div">
                                        <div><img src={logo} alt="챗봇 인트로 로고"></img></div>
                                        <div style={{height:"30px", marginTop:"4px"}}><span style={{fontSize:"20px"}}>챗봇 인트로</span></div>
                                    </div>          
                                </Link>
                            </li>
                            <li><Link to="/ChatBotDemo" style={{textDecoration:"none", color:"white"}}>
                                    <div className="dropDown_div">
                                        <div><img src={logo} alt="챗봇 인트로 로고"></img></div>
                                        <div style={{height:"30px", marginTop:"4px"}}><span style={{fontSize:"20px"}}>챗봇 데모</span></div>
                                    </div>      
                                </Link>
                            </li>
                        </ul>     */}
                    </Nav.Link>
                    <Nav.Link style={{margin: "20px" ,fontSize: "30px"}} href="/MemberIntro">Member Introduction</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={() => setModalShow(true)} style={{margin: "10px"}}><Link to="/Login">로그인</Link></Button>
                    <Link to ="/MyPage"><Button variant="outline-info">나의 정보</Button></Link>
                </Form>
            </Navbar>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Menu;