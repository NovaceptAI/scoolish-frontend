import React, { useState } from 'react';
import '../styles/MusicToStudyBy.css'; // Ensure this file exists

const MusicToStudyBy = () => {
  const [task, setTask] = useState('deep_focus'); // Default study task
  const [playlist, setPlaylist] = useState([]); // Holds the playlist songs
  const [currentTrack, setCurrentTrack] = useState(null); // Currently playing track

  // Sample playlists based on study task
  const playlists = {
    deep_focus: [
      { title: 'Focus Beats', artist: 'Lo-Fi Chill', url: 'sample1.mp3' },
      { title: 'Deep Concentration', artist: 'Meditation Vibes', url: 'sample2.mp3' },
    ],
    light_reading: [
      { title: 'Soft Instrumentals', artist: 'Chill Out', url: 'sample3.mp3' },
      { title: 'Calm Waters', artist: 'Nature Sounds', url: 'sample4.mp3' },
    ],
    creative_writing: [
      { title: 'Creative Flow', artist: 'Ambient Sounds', url: 'sample5.mp3' },
      { title: 'Inspiring Tunes', artist: 'Soft Piano', url: 'sample6.mp3' },
    ],
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleGeneratePlaylist = () => {
    setPlaylist(playlists[task] || []);
    setCurrentTrack(playlists[task][0] || null); // Set first track to play
  };

  const handlePlayPause = (track) => {
    if (currentTrack === track) {
      setCurrentTrack(null); // Pause if already playing
    } else {
      setCurrentTrack(track); // Play new track
    }
  };

  return (
    <div className="music-study-container">
      <header>
        <h1>Music to Study By</h1>
      </header>

      <div className="music-controls">
        <label htmlFor="task-select">Select Study Mode:</label>
        <select id="task-select" value={task} onChange={handleTaskChange}>
          <option value="deep_focus">Deep Focus</option>
          <option value="light_reading">Light Reading</option>
          <option value="creative_writing">Creative Writing</option>
        </select>

        <button onClick={handleGeneratePlaylist}>Generate Playlist</button>
      </div>

      <div className="playlist-container">
        {playlist.length > 0 ? (
          <>
            <h2>Curated Playlist for {task.replace('_', ' ').toUpperCase()}</h2>
            <ul className="playlist">
              {playlist.map((track, index) => (
                <li key={index} className="playlist-item">
                  <div>
                    <strong>{track.title}</strong> by {track.artist}
                  </div>
                  <button onClick={() => handlePlayPause(track)}>
                    {currentTrack === track ? 'Pause' : 'Play'}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No playlist generated yet. Select a study mode and click "Generate Playlist".</p>
        )}
      </div>

      <div className="music-player">
        {currentTrack && (
          <audio controls autoPlay>
            <source src={currentTrack.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default MusicToStudyBy;
