import { useState } from 'react';
import '../styles/header.css'
import { Button, Input, Modal, Space} from 'antd';
const Header = () =>{
    const[open, setModalOpen] = useState(false);
    const[modalAuthOpen, setModalAuthOpen] = useState(false);
    const [auth, setAuth] = useState(false);
    const { Search } = Input;
    // const options = [
    //     {
    //       value: 'zhejiang',
    //       label: 'Zhejiang',
    //     },
    //     {
    //       value: 'jiangsu',
    //       label: 'Jiangsu',
    //     },
    //   ];
   
    const listSearchElem = <div className='search'><span>Везде</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="m4 6 4 5 4-5H4Z"></path></svg></span></div>;
    return(
        <header className='header'>
            <nav className='nav'>
                <ul className='info-links'>
                    <ul>
                        <li><span className='currency' onClick={() => {setModalOpen(!open)}}>Rub</span></li>
                        <li><span className='location'>Пункт Ozon Ул.Королева 22.а</span></li>
                    </ul>
                    
                    <ul>
                        <li><span className='btn-seller'>Стать продавцом</span></li>
                        <li><a href="http://vk.com">Покупать как компания</a></li>
                        <li><a href="http://vk.com">Мобильное приложение</a></li>
                        <li><a href="http://vk.com">Подарочные сертификаты</a></li>
                    </ul>
                    
                </ul>
                <ul className='search-links'>
                    <Button type='primary'>Скидки и Акции!</Button>
                    <Button type='primary'>Каталог</Button>
                    <Search 
                        addonBefore={listSearchElem}
                        placeholder="Искать на E-shop" 
                        allowClear 
                    />
                        <ul>
                            <li>
                                <a href="#" className='info-link'>

                                    {auth 
                                    ? <div onClick={() => null}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M11.132 3.504a1 1 0 0 1 1.736 0l3.35 5.863 5.075-5.074a1 1 0 0 1 1.698.845l-1.667 12a1 1 0 0 1-.99.862H10a1.03 1.03 0 0 1-.077-.003l-.09.003H3.667a1 1 0 0 1-.99-.862l-1.668-12a1 1 0 0 1 1.698-.845l5.074 5.074 3.35-5.863ZM6.003 16h3.83l.09.003A1.03 1.03 0 0 1 10 16h9.463l1.136-8.185-3.892 3.892a1 1 0 0 1-1.575-.21L12 6.015l-3.132 5.48a1 1 0 0 1-1.575.211L3.4 7.815 4.537 16h1.466ZM4 20a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"></path></svg><span>Герман</span></div>
                                    : <div onClick={() => setModalAuthOpen(!modalAuthOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-8.3 4.286c.016.015.185.165.5.323.376.187.971.391 1.8.391.829 0 1.425-.204 1.8-.391.175-.088.355-.19.5-.323a1 1 0 0 1 1.407 1.421C15.587 16.827 14.357 18 12 18c-2.358 0-3.587-1.173-3.707-1.293A1 1 0 0 1 9.7 15.286Z"></path><path fill="currentColor" d="M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a11 11 0 0 1 6.23-9.914 1 1 0 0 1 1.36.524c.292.72.69 1.565 1.362 2.233C10.592 5.481 11.524 6 13 6a1 1 0 1 1 0 2c-2.024 0-3.458-.743-4.459-1.74-.6-.596-1.027-1.267-1.34-1.875A9 9 0 1 0 12 3a1 1 0 0 1-1.001-1Z"></path></svg><span>Войдите</span></div>
                                    }
                                </a>
                            </li>
                            <li>
                                <a href="http://vk.com" className='info-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12.486 1.126a1 1 0 0 0-.972 0l-9 5A1 1 0 0 0 2 7v9.98a1.003 1.003 0 0 0 .515.894l9 5a1 1 0 0 0 .989-.01l8.982-4.99A1 1 0 0 0 22 17V7a1 1 0 0 0-.514-.874l-9-5ZM11 20.3l-7-3.888V8.7l2 1.11V13a1 1 0 1 0 2 0v-2.078l3 1.666v7.713ZM7.5 8.356 5.06 7 12 3.144 14.441 4.5l-6.94 3.856ZM9.56 9.5l6.94-3.856L18.941 7l-6.94 3.856L9.558 9.5ZM13 20.3v-7.712L20 8.7v7.712L13 20.3Z"></path></svg>
                                    <span>Заказы</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://vk.com" className='info-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z"></path></svg>
                                    <span>Избранное</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://vk.com" className='info-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4V6Zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z"></path></svg>
                                    <span>Корзина</span>
                                </a>
                            </li>
                    
                        </ul>
                    </ul>
                    {/* background-image:url('https://cdn1.ozone.ru/s3/cms/8e/tfb/union_18.png'); */}
                    
                <ul className='helper-links'>
                    <li><a href="http://vk.com">Ozon Карта</a></li>
                    <li><a href="http://vk.com">Билеты, отели, туры</a></li>
                    <li><a href="http://vk.com">Одежда и обувь</a></li>
                    <li><a href="http://vk.com">Электроника</a></li>
                    <li><a href="http://vk.com">Дом и сад</a></li>
                    <li><a href="http://vk.com">Детские товары</a></li>
                    <li><a href="http://vk.com">Акции</a></li>
                    <li><a href="http://vk.com">Premium</a></li>
                    <li><a href="http://vk.com">Бренды</a></li>
                    <li><a href="http://vk.com"><span style ={ { backgroundImage: "url('https://cdn1.ozone.ru/s3/cms/3f/tae/union_17.png')"}}></span>Рассрочка</a></li>
                </ul>
               
            </nav>
            <Modal
            title="Выберите валюту"
            centered
            open={open}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            cancelText="Отмена"
            okText="Подтвердить"
        >
            <Space>
                <Button type='dashed' >EUR</Button>
                <Button type='dashed' >USD</Button>
                <Button type='dashed' >CNY</Button>
                <Button type='primary' >Rub</Button>
            </Space>
         
            
        </Modal>

        <Modal
            title=""
            centered
            open={modalAuthOpen}
            onOk={() => setModalAuthOpen(false)}
            onCancel={() => setModalAuthOpen(false)}
            cancelText="Отмена"
            okText="Подтвердить"
        >
            <Space>
                <h1>Выберите способ авторизации</h1>
                <Button type='dashed' onClick={() => setAuth(false)}>Вк</Button>
                <Button type='dashed' onClick={() => setAuth(true)}>Телефон</Button>
               
            </Space>
         
            
        </Modal>
        </header>
        
    )
}

export default Header