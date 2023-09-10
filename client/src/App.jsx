import { useState } from 'react'
import {Modal} from 'antd'
import Header from './components/Header'
import Main from './components/Main'
import './styles/app.css'
import './styles/index.css'
import Footer from './components/Footer'
import '../src/styles/vk.api.css';

function App() {
  // const [open, setModalOpen] = useState(false);
  // const items = [
  //   {label: 'Home'},
  //   {label: 'Home'},
  //   {label: 'Home'},
  //   {label: 'Home'},
  // ]
  return (
    <div className='App'>
      <Header/>
      <Main/>
      {/* <Menu items={items} className='sidebar-nav' style={{width: '300px'}}>

      </Menu> */}
      <Footer></Footer>
    </div>
  )
}

export default App
