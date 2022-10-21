import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from '../App'
import MenuTwo from '../pages/menuTwo/index'
import Showpage from '../pages/showpage/index'

const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/menuTwo" element={<MenuTwo></MenuTwo>}></Route>
        <Route path="/showpage" element={<Showpage></Showpage>}></Route>
      </Route>
    </Routes>
  </Router>
)

export default BaseRouter
