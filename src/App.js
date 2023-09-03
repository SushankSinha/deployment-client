import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DisplayAllBooks } from "./components/DisplayAllBooks";
import AddBooks from "./components/AddBooks";
import EditBooks from "./components/EditBooks";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAllBooks />}></Route>
          <Route
            path="/books/add"
            element={<AddBooks/>}
          ></Route>
          <Route
            path="/books/edit/:id"
            element={
              <EditBooks />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
