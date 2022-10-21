import { Layout } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import './App.less'
import '../node_modules/antd/dist/antd.css'
import MySider from './componts/sider'

const logo =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'

function App() {
  return (
    <Layout id="App" className="appContainer">
      <Header className="header">
        <div className="logoBox">
          <img src={logo} className="logo" alt="logo" />
          <span>react</span>
        </div>
        <div className="setBox">
          <QuestionCircleOutlined />
          <span>admin</span>
        </div>
      </Header>

      <div className="contentBox">
        <MySider></MySider>
        <Content>
          <div>
            <Outlet></Outlet>
          </div>
        </Content>
      </div>
    </Layout>
  )
}

export default App
