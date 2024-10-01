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
import HomeworkHelper from './components/HomeworkHelper';
import QuizCreator from './components/QuizCreator';
import VirtualScienceLab from './components/VirtualScienceLab';
import WritingAssistant from './components/WritingAssistant';
import LearnByDrawing from './components/LearnByDrawing';
import DigitalDebatePlatform from './components/DigitalDebate';
import ModelBuilder from './components/3DModelBuilder';
import LanguageLearningGames from './components/LanguageLearningGames';
import VirtualFieldTrips from './components/VirtualFieldTrips';
import CollaborativeMindMappingTool from './components/CollaborativeMindMappingTool';
import MathProblemVisualizer from './components/MathProblemVisualizer';
import CreativeWritingPrompts from './components/CreativeWritingPrompts';
import HistoricalTimelineBuilder from './components/HistoricalTimelineBuilder';
import VisualStudyGuideMaker from './components/VisualStudyGuideMaker';
import CodePlayground from './components/CodePlayground';
import MusicToStudyBy from './components/MusicToStudyBy';
import ComicStripBuilder from './components/ComicStripBuilder';


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
          <Route path="/homework-helper" element={<HomeworkHelper />} />
          <Route path="/quiz-creator" element={<QuizCreator />} />    
          <Route path="/virtual-science-lab" element={<VirtualScienceLab />} />   
          <Route path="/writing-assistant" element={<WritingAssistant />} />  
          <Route path="/learn-by-drawing" element={<LearnByDrawing />} />  
          <Route path="/digital-debate" element={<DigitalDebatePlatform />} />   
          <Route path="/3d-model-builder" element={<ModelBuilder />} />      
          <Route path="/language-learning-games" element={<LanguageLearningGames />} />     
          <Route path="/virtual-field-trips" element={<VirtualFieldTrips />} />          
          <Route path="/collaborative-mind-mapping" element={<CollaborativeMindMappingTool />} />   
          <Route path="/math-problem-visualizer" element={<MathProblemVisualizer />} />         
          <Route path="/creative-writing-prompts" element={<CreativeWritingPrompts />} />      
          <Route path="/historical-timeline-builder" element={<HistoricalTimelineBuilder />} />  
          <Route path="/visual-study-guide-maker" element={<VisualStudyGuideMaker />} />     
          <Route path="/code-playground-for-kids" element={<CodePlayground />} />       
          <Route path="/music-to-study-by" element={<MusicToStudyBy />} />        
          <Route path="/interactive-comic-strip-builder" element={<ComicStripBuilder />} />               
          <Route path="/login" element={<Login />} />   
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
