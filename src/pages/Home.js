import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
 // Assuming you have common styles here, otherwise create a new CSS file for the Home page.

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Innovate with AI</h1>
        <p>Want to get your document analyzed? You're at the right place! Get your document analyzed within minutes.</p>
        <div className="cta-buttons">
          <Link to="/upload" className="btn primary-btn">Upload Now</Link>
          <a href="https://www.youtube.com/embed/sample_video" className="btn secondary-btn" target="_blank" rel="noopener noreferrer">Watch Video</a>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Summarization</h3>
            <p>Get comprehensive and short summaries of your documents.</p>
          </div>
          <div className="feature-item">
            <h3>Segmentation</h3>
            <p>Segment your text into meaningful sections.</p>
          </div>
          <div className="feature-item">
            <h3>Sentiment Analysis</h3>
            <p>Analyze the sentiment of your text to understand emotions.</p>
          </div>
          <div className="feature-item">
            <h3>Topic Modelling</h3>
            <p>Discover the key topics in your documents.</p>
          </div>
          <div className="feature-item">
            <h3>Translation</h3>
            <p>Translate your documents into more than 100 languages.</p>
          </div>
          <div className="feature-item">
            <h3>Entity Resolution</h3>
            <p>Identify and resolve entities across your documents.</p>
          </div>
          <div className="feature-item">
            <h3>Chronology</h3>
            <p>Organize events and dates in chronological order.</p>
          </div>
          <div className="feature-item">
            <h3>Similarity</h3>
            <p>Find similar topics and lines from your documents.</p>
          </div>
          <div className="feature-item">
            <h3>Keyword Search</h3>
            <p>Search for keywords and get instant results.</p>
          </div>
        </div>
      </section>

      <section className="special-features">
        <h2>Special Features</h2>
        <div className="special-features-grid">
          <div className="special-feature-item">
            <h3>Audio Processing</h3>
            <p>Analyze and transcribe audio files with precision.</p>
          </div>
          <div className="special-feature-item">
            <h3>Video Processing</h3>
            <p>Extract key insights from video content.</p>
          </div>
          <div className="special-feature-item">
            <h3>100+ Language Translations</h3>
            <p>Translate content into over 100 languages with ease.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Upload your document, audio, or video now and let our AI do the rest.</p>
        <Link to="/upload" className="btn primary-btn">Upload Now</Link>
      </section>
    </div>
  );
}

export default Home;
