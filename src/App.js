import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/schedule'>Schedule</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/about'>About</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: '50px', minHeight: '100vh' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/schedule/:date?' component={Schedule} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          by @oakraw
        </Footer>
      </Layout>
    );
  }
}

export default App;
