
import React from 'react';
import Contact from './page/Contact';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  return (
    <div className="app">
      <header className="header bg-gray-800 text-white p-4">
        <h1 className="text-2xl">React One-Pager</h1>
      </header>
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="signin">
          <SignIn />
        </section>
        <section id="signup">
          <SignUp />
        </section>
      </main>
      <footer className="footer bg-gray-800 text-white p-4">
        <p>React One-Pager Footer</p>
      </footer>
    </div>
  );
}

export default App;
