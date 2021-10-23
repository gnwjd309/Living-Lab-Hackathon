import './App.css';
import MainContainer from "./Containers/MainContainer";
import Footer from "./Conponents/Footer/Footer";
import firebaseInit from "./firebase";

function App() {
  console.log(firebaseInit);
  return (
    <div className="App">
      <MainContainer />
      <Footer />
    </div>
  )
}

export default App;