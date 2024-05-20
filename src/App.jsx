import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home"


function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route exact path="/The-Meme-App" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
