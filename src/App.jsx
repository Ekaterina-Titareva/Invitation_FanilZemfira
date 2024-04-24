import './App.css'
// import Countdown from 'react-countdown'

function App() {

  return (
    <>
    <header className='header'>
      <h1>Фаниль и Земфира</h1>
      <h2>08.06.2024</h2>
      <h3>Дорогие родные и близкие!</h3>
      <h3>Приглашаем вас на нашу свадьбу!</h3>
    </header>
    <main>
      <section id='timetable'>
        <div className='imageWrapper'>
          <img src="/timetable.svg" alt="Программа дня" />
        </div>
        {/* <Countdown date={Date.now() + (new Date("2024-06-08")-Date.now())} /> */}
        <h2>Суббота, 8 июня 2024</h2>
        <div className='timetable'>
          <div className='pointWrapper'>
            <span className='time'>12:00</span>
            <img className='img' src="/mark.svg" alt="Сбор гостей" />
              <p className='title'>Сбор гостей</p>
          </div>
          <div className='pointWrapper'>
            <div></div>
            <div className='line'></div>
            <p className='description'>Подарите нам свою улыбку и возьмите с собой хорошее настроение</p>
          </div>
          <div className='pointWrapper'>
            <span className='time'>14:00</span>
            <img className='img' src="/ceremony.svg" alt="Церемония" />
              <p className='title'>Церемония</p>
          </div>
          <div className='pointWrapper'>
            <div></div>
            <div className='line'></div>
            <p className='description'>Может быть трогательно, разрешается всплакнуть</p>
          </div>
          <div className='pointWrapper'>
            <span className='time'>17:00</span>
            <img className='img' src="/banquet.svg" alt="Банкет" />
              <p className='title'>Банкет</p>
          </div>
          <div className='pointWrapper'>
            <div></div>
            <div className='line'></div>
            <p className='description'>Самое время для вкусной еды, танцев и развлечений</p>
          </div>
          <div className='pointWrapper'>
            <span className='time'>23:00</span>
            <img className='img' src="/end.svg" alt="Завершение торжества" />
              <p className='title'>Завершение торжества</p>
          </div>
          <div className='pointWrapper'>
            <div></div>
            <div></div>
            <p className='description'>Надеемся, этот вечер вам понравится</p>
          </div>
        </div>
      </section>
      <section>
        <div className='imageWrapper'>
          <img src="/location.svg" alt="Локация" />
        </div>
      </section>
      <section>
        <div className='imageWrapper'>
          <img src="/dresscode.svg" alt="Дресс-код" />
          <div className='colors'>
            <div className='color light'></div>
            <div className='color main'></div>
            <div className='color dark'></div>
            <div className='color male'></div>
          </div>
        </div>
      </section>
      <section>
        <div className='imageWrapper'>
          <img src="/waiting.svg" alt="Будем вас ждать" />
        </div>
      </section>
    </main>
    <footer className='footer'>

    </footer>
  </>
  )
}

export default App
