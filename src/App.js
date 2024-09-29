import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';  // Assuming you already created this
import Upload from './pages/Upload';     // Assuming this is your upload page
import SelectPagesFeatures from './pages/SelectPagesFeatures';
import MindMapPage from './pages/MindMap';
import MultiFeaturePage from './pages/MultiFeature';
import SummarizationPage from './pages/Summarization';
import SegmentationPage from './pages/Segmentation';
import Login from './components/Login';   // Import the Login component
import TopicModelingPage from './pages/TopicModelling';
import SentimentAnalysisPage from './pages/SentimentAnalysis';
import SimilarityPage from './pages/Similarity';
import TranslationPage from './pages/Translation';
import ChronologyPage from './pages/Chronology';
import EntityResolutionPage from './pages/EntityResolution';
import StoryToComics from './components/StoryToComics';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/select_pages_features" element={<SelectPagesFeatures />} />
          <Route path="/mindmap" element={<MindMapPage />} />
          <Route path="/multifeature" element={<MultiFeaturePage />} />
          <Route path="/summarization" element={<SummarizationPage />} />
          <Route path="/segmentation" element={<SegmentationPage />} />
          <Route path="/topicModelling" element={<TopicModelingPage />} />
          <Route path="/sentimentAnalysis" element={<SentimentAnalysisPage />} />
          <Route path="/similarity" element={<SimilarityPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/chronology" element={<ChronologyPage />} />
          <Route path="/entityResolution" element={<EntityResolutionPage />} />
          <Route path="/story-to-comics" element={<StoryToComics />} />
          <Route path="/login" element={<Login />} />   
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
