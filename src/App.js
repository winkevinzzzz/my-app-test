import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="greeting-text">Hi, it is me! What about you :/?</h1>
        <p className="description-text">Let's make this page look cool and awesome.</p>
      </header>
      <section className="content-section">
        <div className="card">
          <h2>Card Title 1</h2>
          <p>This is a cool card with some content.</p>
        </div>
        <div className="card">
          <h2>Card Title 2</h2>
          <p>This is another cool card with more content.</p>
        </div>
        <div className="card">
          <h2>Card Title 3</h2>
          <p>Yet another card to make things interesting.</p>
        </div>
      </section>
      <footer className="footer">
        <p>Made with ❤️ by Your Name</p>
      </footer>
    </div>
  );
}

export default App;