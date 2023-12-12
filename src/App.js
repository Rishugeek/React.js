import './App.css';
import Home from './components/homePage';
import Navbar from './components/navbar';
import About from './components/aboutPage';
import ErrorPage from './components/errorPage';
import Contact from './components/contact';
import FooterSec from './components/footerSec';
import Preloader from './components/preloader';
import { useEffect,useState } from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  const p=(loading)=>{
    if(!loading){
      let l=document.getElementsByClassName("pace");
      
      if(l!==undefined){
       for(let x=0;x<l.length;x++){
        try {
          let element=l[x];
          element.remove();
        } catch (error) {
          continue;
        }
          
       }
      }
    }
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
      {loading ?(<Preloader/>):(
     <>
     {p(loading)}
     <Navbar/>
      {components}
      <FooterSec/></>)}
      
     
    </div></>
  );
}

export default App;
