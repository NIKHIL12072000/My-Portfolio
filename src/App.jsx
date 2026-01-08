import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import BlogList from "./blog/BlogList";
import BlogPost from "./blog/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Blogs */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
