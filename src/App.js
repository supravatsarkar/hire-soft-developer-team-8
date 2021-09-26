import Header from "./component/Header/Header";
import './App.css';
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
