import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import allBeasts from './data.json';
import SelectedBeast from './components/SelectedBeast';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function displayAsModal(name) {
    const beastWithName = allBeasts.find(beast => beast.title === name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }

  function handleClose() {
    setDisplayModal(false);
  }

  return (
    <div className="App">
      <Header />
      <Gallery allBeasts={allBeasts} displayAsModal={displayAsModal} />
      <SelectedBeast selectedBeast={selectedBeast} show={displayModal} handleClose={handleClose} 
      />
      <Footer />
    </div>
  );
}

export default App;

