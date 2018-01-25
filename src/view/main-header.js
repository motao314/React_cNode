import React,{Component} from "react";
import {Layout, Row, Col, Menu, Icon, Divider, Button, Dropdown} from "antd";
import {NavLink, Link} from "react-router-dom";
const navItem = [
    {
       icon: "home",
       path: "/",
       content:"首页"
    },{
        icon: "book",
        path: "/",
        content:"教程"
    },{
        icon: "info-circle-o",
        path: "/",
        content:"关于"
    }
];
const topMenu = (
    <Menu className="dropMenu">
        {navItem.map((item,index)=>{
            return (<Menu.Item key={index}>
                <Link to={item.path}><Icon type={item.icon} />{item.content}</Link>
            </Menu.Item>)
        })}
        <Menu.Divider/>
        <Menu.Item>
            <Link to="/"><Icon type="user"/>登陆</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="https://cnodejs.org/auth/github/new" target="_blank"><Icon type="flag"/>注册</Link>
        </Menu.Item>
    </Menu>
);

export default class MainHeader extends Component {
    render(){
        return <Layout.Header id="header">
            <Row id="headerRow" className="mainWrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">CNode</h1>
                </Col>
                <Col md={18} xs={0} className="headerRight">
                    <Divider type="vertical" className="headerDivider" />
                    <Menu className="nav" mode="horizontal">
                        <Menu.Item>
                            <NavLink to="/"><Icon type="home" />首页</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/book"><Icon type="book" />教程</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to="/about"><Icon type="info-circle-o" />关于</NavLink>
                        </Menu.Item>
                    </Menu>
                    {/*<div className="nav_login">*/}
                        {/*<Link to="/" ><Button><Icon type="user"/>登陆</Button></Link>*/}
                        {/*<Link to="https://cnodejs.org/auth/github/new" target="_blank" ><Button><Icon type="flag"/>注册</Button></Link>*/}
                    {/*</div>*/}
                </Col>
                <Row className="topMenu">
                    <Col xs={24} md={0}>
                        <Dropdown overlay={topMenu} placement="bottomRight" trigger={["click","touchend"]}>
                            <Button><Icon type="bars" /></Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Row>
        </Layout.Header>;
    }
}