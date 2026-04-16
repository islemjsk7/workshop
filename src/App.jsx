import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Islempage from "./pages/Islempage";

function App() {
  return (
    <div>
      <h1>Mon App</h1>
      <Routes>
        <Route path='/home' element={<h1>home page</h1>}/>
    
       <Route path="/page1" element={<Page1/>}/>

       <Route path="/islem" element={<Islempage/>}/>
      </Routes>

    </div>
  );
}

export default App;