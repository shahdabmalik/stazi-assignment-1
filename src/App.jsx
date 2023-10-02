import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "./pages/home/HomePage"
import SearchPage from "./pages/search/SearchPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page/:pageNumber" element={<Page />} />
        <Route path="/search/:search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
