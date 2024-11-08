import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home-Page/home-page";
import GalleryPage from "./Pages/Gallery-Page/gallery-page";
import CentersPage from "./Pages/Centers-Page/centers-page";
import EventsPage from "./Pages/Events-Page/events-page";
import MakersTurnPage from "./Pages/Makers-Turn-Page/makers-turn-page";
import NotFoundPage from "./Pages/Not-Found-Page/not-found-page";
import "./App.css";
import InvestmentPage from "./Pages/Investment-Page/investment-page";
import FormPage from "./Pages/Form-Page/form-page";
import AboutPage from "./Pages/About-Page/about-page";
import MemesPage from "./Pages/Memes-Page/memes-page";

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const App = () => {
  useScrollToTop();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/centers" element={<CentersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/makers-turn" element={<MakersTurnPage />} />
        <Route path="/for-investment" element={<InvestmentPage />} />
        <Route path="/form/:id" element={<FormPage />} />
        <Route path="/about-z2b" element={<AboutPage />} />
        <Route path="/memes" element={<MemesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
