import { useState } from 'react'
import {Menu} from 'antd'

import './styles/app.css'
import './styles/index.css'
function App() {
  const [count, setCount] = useState(0)
  const items = [
    {label: 'Home'},
    {label: 'Home'},
    {label: 'Home'},
    {label: 'Home'},
  ]
  return (
    <div className='App'>
      
      <Menu items={items} className='sidebar-nav' style={{width: '300px'}}>

      </Menu>
    </div>
  )
}

export default App
