import './App.css';
import Home from './components/homePage';
import Navbar from './components/navbar';
import About from './components/aboutPage';
import ErrorPage from './components/errorPage';
import VanillaTilt from "./components/vanilla-tilt";
function tilt(){
    var l=document.getElementsByClassName("card2");
    for (let index = 0; index < l.length; index++) {
        const element = l[index];
        
            VanillaTilt.init(element, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare":1,
            });
        
        
    }
}
function App() {
  
  let components;
  switch(window.location.pathname){
    case "/":
      components=<Home/>;
      break;
    case "/home":
        components=<Home/>;
        break;
    case "/about":
      components=<About/>;
      break;
    default:
      components=<ErrorPage/>

  }
  return (<>
    <div className="App">
      <Navbar/>
      {components}
      {tilt()}
     
    </div></>
  );
}

export default App;
