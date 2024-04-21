import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
}

export default App;
