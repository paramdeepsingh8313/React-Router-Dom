import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Paths from "./component/Paths";

function App() {
  return (
    <div className="App">
      <h1>Navigation</h1>
      <p>Query String Parameters example</p>
      <p>https://www.google.com/search?q=india&rlz=1C1UEAD_enIN1022IN1022</p>
      <p>example is ?q=india&rlz=1C1UEAD_enIN1022IN1022</p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2/:variable_name" element={<Page2 />} />
          <Route path="/page3/:id" element={<Page3 />} />
          <Route path="/page4/:id" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6/:id" element={<Page6 />} />
        </Routes>

        {/* <Paths /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
