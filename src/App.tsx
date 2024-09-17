import React from 'react';
import './App.css';
import './Static/StyleSheets/fonts.css';
import './Static/StyleSheets/theme.css';
import Home from "./Pages/Home/Home";
import BlogList from "./Pages/BlogList/BlogList";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog_list" element={<BlogList />} />
              <Route path="/blog_details" element={<BlogDetails />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
