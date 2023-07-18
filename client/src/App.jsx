import { useState } from 'react'
import {Menu} from 'antd'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import './styles/index.css'
function App() {
  const [count, setCount] = useState(0)
  const items = [
    {label: 'Home'}
  ]
  return (
    <>
      <Menu items={items}>

      </Menu>
    </>
  )
}

export default App
