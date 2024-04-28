import './App.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function App() {
  const defaultState = {
    center: [54.976473, 49.035627],
    zoom: 13,
  };
  const defaultStateSec = {
    center: [54.990303, 49.087953],
    zoom: 14,
  };
  
  return (
    <>
    <header className='header'>
      <h1>Фэнил hэм Земфира</h1>
      <h2>08.06.2024</h2>
      <h3>Хормэтле туганнар hэм якыннар!
        <br />Сезне никах-туебызнын кадерле кунагы булырга чакырабыз!
      </h3>
    </header>
    <main>
      <section id='timetable'>
          <h2>Көн программасы</h2>
        {/* <Countdown date={Date.now() + (new Date("2024-06-08")-Date.now())} /> */}
        <h3>Шимбә, 8 июнь 2024</h3>
        <div className='timetable'>
          <div className='pointWrapper'>
            <img className='img' src="./mark.svg" alt="Сбор гостей" />
            <div className='text'>
              <span className='time'>12:30</span>
              <p className='title'>Кунаклар җыю</p>
              <p className='description'>Безгә елмаю бирегез һәм яхшы кәеф алып киләгез</p>
            </div>
          </div>
          <div className='pointWrapper'>
            <div className='line'></div>
          </div>
          <div className='pointWrapper'>
            <img className='img' src="./moon.svg" alt="Никах" />
            <div className='text'>
              <span className='time'>13:00</span>
              <p className='title'>Никах тантанасы</p>
              <p className='description'>Күңеллегез тулып китсә, еларга рөхсәт ителә</p>
            </div>
          </div>
          <div className='pointWrapper'>
            <div className='line'></div>
          </div>
          <div className='pointWrapper'>
            <img className='img' src="./banquet.svg" alt="Банкет" />
            <div className='text'>
              <span className='time'>15:00</span>
              <p className='title'>Мәҗлес</p>
              <p className='description'>Тәмле ризык, бию һәм күңел ачу өчен иң яхшы вакыт</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Урынлашу</h2>
        <div className='map'>
        <h3>Ак мәчет, Болгар</h3>
        <div className='imgWrapper'>
          <img className='imgLoc' src='./akmechet.jpeg' alt='Белая мечеть'/>
        </div>
        <p className='locText'>
          Наша церемония пройдет в Белой мечети по адресу: ул. Кул Гали, 1, Болгар.
        </p>
          <YMaps>
            <Map defaultState={defaultState}>
              <Placemark geometry={[54.976473, 49.035627]} />
            </Map>
          </YMaps>
        </div>
        <div className='map'>
        <h3>Kol Gali Resort&SPA</h3>
        <p className='locText'>
          Наш банкет пройдет в ресторане Kol Gali Resort&SPA по адресу: ул. Прибрежная, 1, посёлок Приволжский.
        </p>
        <div className='imgWrapper'>
          <img className='imgLoc' src='./rest.webp' alt='Ресторан'/>
        </div>
          <YMaps>
            <Map defaultState={defaultStateSec}>
              <Placemark geometry={[54.990303, 49.087953]} />
            </Map>
          </YMaps>
        </div>
      </section>
    </main>
    <footer className='footer'>
      <h2>Без сезне көтеп калабыз!</h2>
      <div className='imgWrapper'>
        <img className='imgLoc' src='./couple.jpg' alt='Мы будем вас ждать'/>
      </div>
    </footer>
  </>
  )
}

export default App
