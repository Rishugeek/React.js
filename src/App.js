import './App.css';
import Home from './components/homePage';
import Navbar from './components/navbar';
import About from './components/aboutPage';
import ErrorPage from './components/errorPage';
import Contact from './components/contact';
import FooterSec from './components/footerSec';
function App() {
  let back=false;
  let components;
  switch(window.location.pathname){
    case "/":
      back=false;
      components=<Home/>;
      break;
    case "/home":
        back=false;
        components=<Home/>;
        break;
    case "/about":
      back=false;
      components=<About/>;
      break;
      case "/contact":
        back=true;
        components=<Contact back={back}/>;
        break;
    default:
      back=false;
      components=<ErrorPage/>

  }
  return (<>
    <div className="App">
      <Navbar/>
      {components}
      <FooterSec/>
     
    </div></>
  );
}

export default App;
