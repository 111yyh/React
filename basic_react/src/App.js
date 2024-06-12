import { useState } from 'react'
import './css/index.css'

const list = [
  { id: 1, name: 'Vue' },
  { id: 2, name: '456' },
  { id: 3, name: '555' }
]
const isLogin = true
// 只传事件e
const click = (e) => {
  console.log("156165", e);
}
// 只传自定义参数
const clickCustom = (name) => {
  console.log("156165", name);
}
// 传自定义参数和事件e
const clickCustomAndE = (name, e) => {
  console.log("156165", name, e);
}

// 定义组件button 函数首字母大写
const Button = () => {
  return <button>click me!</button>
}

// useState使用
/**
 * useState 是一个react hook
 * const [count,setCount] = useState(0)
 */

function App() {
  // 解构赋值 count为状态变量, setCount为修改变量的方法
  const [count, setcount] = useState(0)
  const handleCount = () => {
    setcount(count + 1)
    console.log(count);
  }

  // 更新对象
  const [form, setform] = useState({ name: '11' })
  const handleForm = () => {
    setform({
      //... 展开运算符
      ...form,
      name: '798798'
    })
  }

  const buttonStyle = {
    color: 'pink',
    fontSize: '30px'
  }

  return (
    <div>
      <ul>
        {list.map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
      <div>
        {/* 基础条件渲染 */}
        {isLogin && <span>123</span>}
        {isLogin ? <span>111</span> : <span>load</span>}
      </div>
      {/* 点击事件 */}
      <button onClick={click}>click</button>
      <button onClick={() => clickCustom("gyh")}>click</button>
      <button className="foo" onClick={(e) => clickCustomAndE("gyh", e)}>click</button>
      {/* 自闭合 */}
      <Button />
      {/* 成对 */}
      <Button></Button>
      <button style={{ color: 'red', fontSize: '20px' }} onClick={handleCount}>{count}</button>
      <button style={buttonStyle} onClick={handleForm}>"form"{form.name}</button>
    </div>
  );
}

export default App;
