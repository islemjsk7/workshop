import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";

function App() {
  return (
    <div>
      <h1>Mon App</h1>
      <Routes>
        <Route path='/home' element={<h1>home page</h1>}/>
    
       <Route path="/page1" element={<Page1/>}/>
      </Routes>

    </div>
  );
}

export default App;