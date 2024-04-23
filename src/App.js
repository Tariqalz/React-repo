import './App.css';
import Header from './Header';
import UrlForm from './UrlForm';
import History from './History';

function App() {
  
    return(
      <>
      <Header/>
      <UrlForm/>
      <p>Resent:</p>
      <History Url= "https://www.youtube.com/" shortUrl= "https://www.yotub.com/"/>
      <History Url= "https://www.google.com/" shortUrl= "https://www.ggl.com/"/>
      <History Url= "https://www.yahoo.com/" shortUrl= "https://www.yho.com/"/>
      </>
    );

}

export default App

