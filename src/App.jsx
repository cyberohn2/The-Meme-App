import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home"
import MemeEditor from "./Components/MemeEditor"
import TweetEditor from "./Components/TweetEditor"


function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route exact path="/The-Meme-App" element={<Home />}></Route>
          <Route exact path="/The-Meme-App/Meme-Editor" element={<MemeEditor />}></Route>
          <Route exact path="/The-Meme-App/Tweet-Editor" element={<TweetEditor />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
