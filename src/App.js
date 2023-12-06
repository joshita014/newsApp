import React from 'react';
import NewsList from './components/NewsList'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My News App</h1>
      </header>
      <main>
        {/* Include your NewsList component */}
        <NewsList />
      </main>
      <footer>
        {/* You can add a footer if needed */}
        <p>&copy; 2023 My News App</p>
      </footer>
    </div>
  );
}

export default App;
