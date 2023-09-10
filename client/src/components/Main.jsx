import '../styles/main.css'
import axios from 'axios';
const  Main = () =>{
    const uri = `http://localhost:8080/api/main/offers`;
    axios.get(uri).then((data) => console.log(data.data.data));
    // fetch(uri)
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    return(
        <main className='main'>
            <div className='big-img head-container container'>
                <img width="250" height='300' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
                <img width="700" height='300' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
                <img width="250" height='300' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
            </div>

            <h2 className='cards-title'>Ловите часы продажи!</h2>
            <div className="cards-without-content">
                <div className="card">
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                </div>
                <div className="card">
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                </div>
                <div className="card">
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                </div>
                <div className="card">
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                </div>
                
            </div>
            {/* Add Something */}

            <h2 className='cards-title'>Лучшие предложения!</h2>
            <div className="cards">

                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>    

                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/600b002d639dd13:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>  

                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/600b13942045f1a:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>   
                 
            </div>

            {/* big img content */}
            <div className='big-img'>
                <img width="350" height='200' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
                <img width="350" height='200' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
                <img width="350" height='200' src="https://masterpiecer-images.s3.yandex.net/6007b37ce857d30:upscaled" alt="logo" />
            </div>

            <h2 className='cards-title'>Самые просматриваемые товары</h2>
            <div className="cards">
                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/60084a404dcc06d:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>    

                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/600b002d639dd13:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>  

                <div className='card'>
                    <img  width="200" src="https://masterpiecer-images.s3.yandex.net/600b13942045f1a:upscaled" alt="товар" />
                    <div className='card-cost'>
                        <span className='current-cost'>732 ₽</span>
                        <span className='previous-cost'>1 010 ₽</span>
                        <span className='discount'>−27%</span>
                    </div>
                    <div className="card-content">
                        <span>Дрип-пакеты для кофе пустые 100 шт</span>
                    </div>
                </div>   

            </div>
        </main>
    )
}

export default Main