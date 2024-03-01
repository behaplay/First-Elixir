import { Route, Routes } from "react-router-dom"
import Layout from "./Fundament/Layout"
import Pageone from "./Page1/Pageone"
import Pagetwo from "./Pagetwo"
import Pagethree from "./Pagethree/Pagethree"
import Pagefor from "./Pagefor/Pagefor"
import Pagefive from "./Pagefive/Pagefive"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Pageone />} />
        <Route path="/pagetwo" element={<Pagetwo />} />
        <Route path="/pagethree" element={<Pagethree />} />
        <Route path="/pagefor" element={<Pagefor />} />
        <Route path="/pagefive" element={<Pagefive />} />
      </Routes>
    </Layout>
  )
}

export default App
