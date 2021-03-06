import React from 'react'
import { Menu, Layout } from 'antd';
import { Link, withRouter } from 'react-router-dom'

const Header = Layout.Header

class HeadComp extends React.Component {
    render() {
        return (
            <Header>
                <div className='logo'>
                    <img src='/imooc.png' alt=''></img>
                </div>
                <Menu theme='dark' mode="horizontal"
                   defaultSelectedKeys={[this.props.location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key='/'>
                        <Link to='/'>首页</Link>
                    </Menu.Item>
                    <Menu.Item key='/qa'>
                        <Link to='/qa'>问答</Link>
                    </Menu.Item>
                    <Menu.Item key='/create'>
                        <Link to='/create'>我要众筹</Link>
                    </Menu.Item>
                    <Menu.Item key='/goods'>
                        <Link to='/goods'>商品列表</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(HeadComp)