import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo"><img src='./icon.png' alt='logo'/></div>
        <nav className="nav-links">
          <a href="https://www.google.com/">Контакти</a>
          <a href="https://www.google.com/">Головна</a>
          <a href="https://www.google.com/">З чим ми працюємо</a>
          <button className="support-button">ПІДТРИМАТИ ФОНД</button>
        </nav>
      </header>

      <section className="hero-section">
        <img src="/first_screen.png" alt="Фонд підтримки" className="hero-image" />
        <div className="text-block">
          <h1>ФОНД ПІДТРИМКИ<br />ПОСТРАЖДАЛИХ<br />ВІД ВІЙНИ</h1>
          <p>Ми хочемо допомогти кожному, хто постраждав під час війни</p>
          <button className="support-btn-main">ПІДТРИМАТИ ФОНД</button>
        </div>
      </section>

      <section className="about-section">
        <h2>МИ – ФОНД ПІДТРИМКИ<br />ПОСТРАЖДАЛИХ ВІД ВІЙНИ</h2>
        <p className="subtitle">Наша мета – психологічна та гуманітарна допомога українцям</p>
        <p className="subnote">Кожен, хто звернеться, отримає допомогу, яка у наших силах</p>

        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>РЕАБІЛІТАЦІЙНИЙ<br />ЦЕНТР</h3>
              <p>
                Ми допомагаємо людям, які постраждали знайти правильне лікування.
                У нашому фонді є чотири напрямки: фізична та реабілітаційна медицина,
                терапевтичне, неврологічне та хірургічне. Ми маємо заклади-партнери,
                де швидко та якісно можуть надати допомогу.
              </p>
            </div>
            <img src="./rehab.png" alt="Реабілітація" className="card-img" />
          </div>

          <div className="card reverse">
            <img src="./children.png" alt="Діти" className="card-img" />
            <div className="card-text">
              <h3>РОБОТА З ДІТЬМИ</h3>
              <p>
                Діти – найвразливіша частина суспільства, і їм особливо потрібна підтримка дорослих.
                Тому наш фонд збирає речі для дітей, проводить літні й зимові табори, майстер-класи
                та за потреби – дитячу психотерапію.
              </p>
            </div>
          </div>
        </div>

        <button className="more-btn">ДІЗНАТИСЯ БІЛЬШЕ</button>
      </section>

      <section className="mission-section">
        <h2 className="mission-title">
          Наша місія – щоб кожен українець мав можливість отримати допомогу
        </h2>
        <img src="./mission.png" alt="Діти обіймаються" className="mission-image" />
      </section>


      <section className="support-section">
        <h2>ПІДТРИМАЙТЕ НАШУ РОБОТУ!</h2>
        <p className="donation-subtitle">
          Усі ваші донати йдуть саме на роботу фонду: заробітні плати ми виплачуємо з коштів грантодавців
        </p>
        
        <div className="goal-bar-container">
          <div className="goal-bar-fill"></div>
        </div>
        <p className="goal-label">Зібрано 2 300 250 ₴ з 10 000 000 ₴</p>

        <button className="more-btn">ДІЗНАТИСЯ БІЛЬШЕ</button>
      </section>


      <section className="contact-section">
        <h2 className="contact-title">КОНТАКТИ</h2>
        <div className="contact-info">
          <p>📞 Якщо у вас виникнуть питання – телефонуйте за номером <b>0-987-654-321</b></p>
          <p>✉️ Або пишіть нам у чат-бот</p>
        </div>

        <div className="subscription-block">
          <img src="./letter.png" alt="Іконка листа" />
          <form className="subscription-form">
            <p>Щоб дізнаватися усі новини, підпишіться на нашу розсилку</p>
            <input type="text" placeholder="Ім’я" />
            <input type="email" placeholder="Емейл" />
            <button type="submit">ПІДПИСАТИСЯ</button>
          </form>
        </div>
      </section>




    </div>
  );
}

export default App;
