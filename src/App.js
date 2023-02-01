import './App.css';
import ForWhomWeExist from './components/header/main-content/ForWhomWeExist';
import Header from './components/header/Header';
import Advantages from './components/header/main-content/Advantages';
import Statistik from './components/header/main-content/statistics/Statistik';
import AboutMoow from './components/header/main-content/statistics/AboutMoow';
import Discounts from './components/header/main-content/Discounts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Advantages/>
      <ForWhomWeExist/>
      <Statistik/>
      <AboutMoow/>
      <Discounts/>
    </div>
  );
}

export default App;
