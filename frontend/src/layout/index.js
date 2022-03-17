import React from 'react'
import { connect } from 'react-redux'
import { Avatar, Dropdown, Layout, Menu } from 'antd'
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import Controller from './controller'
import { Link } from 'react-router-dom';
import {setUserAuth} from '../redux/settingsactions';

const { Content, Header, Sider } = Layout

class LayoutComponent extends Controller {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  onClickLogout =(e) => {
    e.preventDefault();
    this.props.handleAuth(false)
    // console.log(e,' its called');
  }

  

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="#">View Profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="#">Settings</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Link onClick={this.onClickLogout} >Logout</Link>
        </Menu.Item>
      </Menu>
    )

    return (
      <Layout>
        <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            Logo goes here.
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Overall
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header>
            {this.state.collapsed ? (
              <MenuUnfoldOutlined onClick={evt => this.toggleSidebar(evt)} />
            ) : (
              <MenuFoldOutlined onClick={evt => this.toggleSidebar(evt)} />
            )}
            <Dropdown overlay={menu} trigger={['click']}>
              <Avatar size={32} icon={<UserOutlined />} onClick={evt => this.onClickLogout} />
            </Dropdown>
          </Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    )
  }
}

const mapState = state => {
}

const mapDispatch = dispatch => ({
  handleAuth : (payload) => {
    dispatch(setUserAuth(payload))
  }
})

export default connect(mapState, mapDispatch)(LayoutComponent)
