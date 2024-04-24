import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import BolsaPage from "./Pages/BolsaPage/BolsaPage"


const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/bolsa" element={<BolsaPage/>}/>
      </Routes>
    </Router>
  )
}





export default App;
