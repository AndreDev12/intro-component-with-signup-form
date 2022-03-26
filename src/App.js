import { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <main className="main">
        <div className="container main-wrapper">
          <div className="information">
            <h1 className="title">Learn to code by watching others</h1>
            <p className="information-paragraph">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
          <div className="signup">
            <div className="try">
              <p className="try-paragraph"><span className="free">Try it free 7 days </span>then $20/mo. thereafter</p>
            </div>
            <Form />
          </div>
        </div>
      </main>
      <footer className="footer container">
        <p className="attribution">Challenge by <a className="link" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a className="link" href="https://www.frontendmentor.io/profile/AndreDev12" target="_blank" rel="noopener noreferrer">@AndreDev12</a>.</p>
      </footer>
    </Fragment>
  );
}

export default App;