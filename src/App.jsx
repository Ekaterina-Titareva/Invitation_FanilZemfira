import './App.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function App() {
  const defaultState = {
    center: [54.965912, 49.061215],
    zoom: 14,
  };
  const defaultStateSec = {
    center: [54.990303, 49.087953],
    zoom: 14,
  };
  
  return (
    <>
    <header className='header'>
      <h1>Фэнил<br/>hэм<br/>Земфира</h1>
      <h2>Хормэтле туганнар hэм якыннар!</h2>
      <h2>08.06.2024</h2>
      <h3>Сезне никах-туебызнын кадерле кунагы булырга чакырабыз!</h3>
    </header>
    <main>
      <section id='timetable'>
          <h2 className='blockTitle'>Кон программасы</h2>
        <h3 className='secondTitle'>Шимбә, 8 июнь 2024</h3>
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
              <p className='description'>Күңелегез тулып китсә, еларга рөхсәт ителә</p>
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
        <h2 className='blockTitle'>Урынлашу</h2>
        <div className='map'>
          <h3 className='secondTitle'>Ак мәчет, Болгар</h3>
          <p className='locText'>
          Безнең тантана Ак мәчеттә Кол Гали урамы, 1, Болгар адресы буенча узачак.
          </p>
          <div className='imgWrapper'>
            <img className='imgLoc' src='./akmechet.jpeg' alt='Белая мечеть'/>
          </div>
          <div className='mapWrapper'>
            <YMaps className='mapWrapper'>
              <Map defaultState={defaultState}>
                <Placemark geometry={[54.965912, 49.061215]} />
              </Map>
            </YMaps>
          </div>
        </div>
        <div className='map'>
          <h3 className='secondTitle'>Kol Gali Resort&SPA</h3>
          <p className='locText'>
            Безнең мәҗлес Kol Gali Resort&SPA ресторанында узачак: Прибрежная урамы, 1, Волга буе Бистәсе.
          </p>
          <div className='imgWrapper'>
            <img className='imgLoc' src='./rest.jpg' alt='Ресторан'/>
          </div>
          <div className='mapWrapper'>
            <YMaps>
              <Map defaultState={defaultStateSec}>
                <Placemark geometry={[54.990303, 49.087953]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </section>
    </main>
    <footer className='footer'>
      <h2 className='blockTitle'>Без сезне котеп калабыз!</h2>
    </footer>
  </>
  )
}

export default App
