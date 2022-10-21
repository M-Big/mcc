import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../../redux/action/name'
import './index.less'

const MenuTwo = () => {
  const [val, setVal] = useState()
  const dispatch = useDispatch()

  const chang = (e) => {
    setVal(e.target.value)
  }
  const setName = () => {
    dispatch(changeName(val))
  }

  return (
    <div className="menuPageContainer">
      <Input
        onChange={chang}
        placeholder="请输入修改后的菜单名称"
        className="ipt"
      ></Input>
      <Button onClick={setName} className="btn" type="primary">
        保存
      </Button>
    </div>
  )
}

export default MenuTwo
