import "./App.css";

import ForWhomWeExist from "./components/main-content/ForWhomWeExist";
import Header from "./components/header/Header";
import Advantages from "./components/main-content/Advantages";
import Statistik from "./components/main-content/statistics/Statistik";
import AboutMoow from "./components/main-content/AboutMoow";
import Discounts from "./components//main-content/Discounts";
import Registration from "./components/main-content/Registration";
import AllEazy from "./components/main-content/AllEazy";
import Driver from "./components/main-content/Driver";
import Question from "./components/main-content/Question";
import AppOrWeb from "./components/main-content/AppOrWeb";
import Footer from "./components/footer/Footer";

import { useEffect, useState } from "react";


function App() {
 

  const [scroll, setscroll] = useState(0);

  useEffect(() => {  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setscroll(window.scrollY);
  }

  return (
    <div className="App">
      <Header />
      <Advantages show={"show"} />
      {/* scroll height check, if true we show the component */}
      {scroll > 550 ? <ForWhomWeExist show={"show"} /> : <ForWhomWeExist />}
      {scroll > 750 ? <Statistik show={"show"} /> : <Statistik />}
      {scroll > 1900 ? <AboutMoow show={"show"} /> : <AboutMoow />}
      {scroll > 2320 ? <Discounts show={"show"} /> : <Discounts />}
      {scroll > 2650 ? <Registration show={"show"} /> : <Registration />}
      {scroll > 3060 ? <AllEazy show={"show"} /> : <AllEazy />}
      {scroll > 3340 ? <Driver show={"show"} /> : <Driver />}
      {scroll > 4070 ? <Question show={"show"} /> : <Question />}
      {scroll > 4400 ? <AppOrWeb show={"show"} /> : <AppOrWeb />}
      <Footer />
    </div>
  );
}

export default App;
