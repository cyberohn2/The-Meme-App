import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Components/Home"
import MemeEditor from "./Components/MemeEditor"
import TweetEditor from "./Components/TweetEditor"
import MemeFeed from "./Components/MemeFeed"
import About from "./Components/About"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"


function App() {

  return (
    <div className="bg-background text-[white]">
      <Router >
        <Navigation />
        <Routes>
          <Route exact path="/The-Meme-App" element={<Home />}></Route>
          <Route path="/The-Meme-App/Meme-Feed" element={<MemeFeed />}></Route>
          <Route path="/The-Meme-App/Meme-Editor" element={<MemeEditor />}></Route>
          <Route path="/The-Meme-App/Tweet-Editor" element={<TweetEditor />}></Route>
          <Route path="/The-Meme-App/About" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
