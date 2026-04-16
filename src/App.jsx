import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Mon App</h1>
      <Routes>
        <Routes path='/home' element={<h1>home page</h1>}/>
      </Routes>
    </div>
  );
}

export default App;