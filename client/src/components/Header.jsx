import '../styles/header.css'
import { Button, Input, Select, Space, } from 'antd';
const Header = () =>{
    const { Search } = Input;
    const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
        },
      ];

    const listSearchElem = <><span>Везде</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="currentColor" d="m4 6 4 5 4-5H4Z"></path></svg></>;
    return(
        <header className='header'>
            <nav className='nav'>
                <ul className='info-links'>
                    <li><a href="http://vk.com">Rub</a></li>
                    <li><a href="#">Пункт Ozon Ул.Королева 22.а</a></li>
                    <li><a href="http://vk.com">Покупать как компания</a></li>
                    <li><a href="http://vk.com">Мобильное приложение</a></li>
                    <li><a href="http://vk.com">Подарочные сертификаты</a></li>
                </ul>
                <ul className='search-links'>
                    <Button type='primary'>Каталог</Button>
                    <Search 
                        addonBefore={listSearchElem}
                        placeholder="input search text" 
                        allowClear 
                    />
                    <li><a href="http://vk.com"><span></span>Профиль</a></li>
                    <li><a href="http://vk.com"><span></span>Заказы</a></li>
                    <li><a href="http://vk.com"><span></span>Избранное </a></li>
                    <li><a href="http://vk.com"><span></span>Корзина</a></li>
                </ul>
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
                    <li><a href="http://vk.com">Рассрочка</a></li>
                </ul>
               
            </nav>
        </header>
    )
}

export default Header