import './App.css';
import Home from './components/homePage';
import Navbar from './components/navbar';
import About from './components/aboutPage';
import ErrorPage from './components/errorPage';
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
      
     
    </div></>
  );
}

export default App;
