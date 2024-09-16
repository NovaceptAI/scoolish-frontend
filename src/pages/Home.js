import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles'; // Import the particles library
import '../styles/Home.css';

function Home() {
  // Particle configuration options
  const particlesOptions = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00aaff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00aaff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      }
    },
    retina_detect: true
  };

  return (
    <div>
      <section className="hero1">
        {/* Video background */}
        <video autoPlay loop muted className="hero1-video">
          <source src='/static/scoolish_video4.mp4' type="video/mp4" />
          {/* <source src='https://www.youtube.com/watch?v=pv648_qOz94&ab_channel=FILMPAC' type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Hero content */}
        <div className="hero1-content">
          <h1>Scoolish</h1>
          <p>Empowering Minds, Shaping Futures</p>
          
        </div>
        <div className="cta-buttons">
            <Link to="/upload" className="btn primary-btn">Try Scoolish</Link>
            <a href="#learn-more-section" className="btn secondary-btn">Learn More</a>
          </div>
        
      </section>
      
      {/* New inspirational quote section */}
      <section className="inspirational-quote">
        <p>
          <em>"At Scoolish, we believe that knowledge has the power to transform lives. Our mission is to empower individuals, foster growth, and shape the future through innovation and education."</em>
        </p>
        <p>- The Scoolish Team</p>
      </section>

      <section className="features">
      <h2>Scoolish Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/summarization.webp)' }}></div>
          <div className="feature-text">
            <h2>Summarization</h2>
            <p>Get comprehensive and short summaries of your documents.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/segmentation.webp)' }}></div>
          <div className="feature-text">
            <h2>Segmentation</h2>
            <p>Segment your text into meaningful sections.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/sentiment.webp)' }}></div>
          <div className="feature-text">
            <h2>Sentiment Analysis</h2>
            <p>Analyze the sentiment of your text to understand emotions.</p>
          </div>
        </div>
      </div>  
       
      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/topic.webp)' }}></div>
          <div className="feature-text">
            <h2>Topic Modelling</h2>
            <p>Discover the key topics in your documents.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/translation.webp)' }}></div>
          <div className="feature-text">
            <h2>Translation</h2>
            <p>Translate your documents into more than 100 languages.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-background" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
          <div className="feature-text">
            <h2>Entity Resolution</h2>
            <p>Translate your documents into more than 100 languages.</p>
          </div>
        </div>
        {/* <!-- Add more feature items similarly --> */}
      </div>
    </section>
    <br></br>

     {/* Fun Facts Section */}
     <section className="fun-facts-section">
        {/* Particles effect for this section */}
        <Particles className="particles-js" options={particlesOptions} />
        <div className="fun-facts-container">
          <h2>Did You Know?</h2>
          <p>AI-powered learning tools can boost student engagement by up to 60% by providing personalized learning experiences.</p>
        </div>
      </section>



    <section className="special-features">
  <h2>Scoolish Smart Learning AIDS</h2>
  <div className="special-features-grid">
    <div className="special-feature-item animate-feature" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
    <div className="feature-text">
      <h3>Story to Comics Converter</h3>
      <a href="#learn-more-section" className="btn secondary-btn">Learn More</a>
      <p>Write a story and watch it come to life as a comic strip.</p>
    </div>
    <div className="special-feature-item animate-feature" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
    <div className="feature-text">
      <h3>AI-Powered Homework Helper</h3>
      <a href="#learn-more-section" className="btn secondary-btn">Learn More</a>
      <p>Get help with assignments and understand concepts easily.</p>
    </div>
    <div className="special-feature-item animate-feature" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
    <div className="feature-text">
      <h3>Virtual Science Lab</h3>
      <a href="#learn-more-section" className="btn secondary-btn">Learn More</a>
      <p>Perform experiments in a safe, virtual environment.</p>
    </div>
    <div className="special-feature-item animate-feature" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
    <div className="feature-text">
      <h3>AI Writing Assistant for Essays</h3>
      <a href="#learn-more-section" className="btn secondary-btn">Learn More</a>
      <p>Receive essay writing help and feedback with AI.</p>
    </div>
    <div className="special-feature-item animate-feature" style={{ backgroundImage: 'url(/static/entity.webp)' }}></div>
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
