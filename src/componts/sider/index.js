import { Button, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  MailOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sider from 'antd/lib/layout/Sider'
import { useSelector } from 'react-redux'

const MySider = () => {
  const [collapsed, setCollapsed] = useState(false) // 展示图标显示哪个开关
  const [items, setItems] = useState('')

  const navigate = useNavigate()

  const { name } = useSelector((state) => state.name)

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  useEffect(() => {
    const newItems = [
      getItem('菜单一', 'sub1', <MailOutlined />, [
        getItem('子菜单1-1', '1'),
        getItem('子菜单1-2', '2'),
      ]),
      getItem('菜单二', 'sub2', <AppstoreOutlined />, [
        getItem('子菜单2-1', '3'),
        getItem(name, 'menuTwo'),
      ]),
    ]
    setItems(newItems)
  }, [name])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const goPage = (e) => {
    console.log(e.key)
    if (e.key === 'menuTwo') {
      navigate('/' + e.key)
    } else {
      navigate('/Showpage')
    }
  }

  return (
    <Sider width={300}>
      <Button type="primary" onClick={toggleCollapsed} className="hideBtn">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['menuTwo']}
        defaultOpenKeys={['sub2']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        style={{ width: '300px', height: '100%' }}
        className="aside"
        items={items}
        onClick={goPage}
      ></Menu>
    </Sider>
  )
}

export default MySider
