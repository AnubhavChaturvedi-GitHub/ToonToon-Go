import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [channelName, setChannelName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // Updated YouTube video URLs for channels with embed format and autoplay, hidden controls, etc.
  const channels = {
    'Mr. Bean': 'https://www.youtube.com/embed/-sL6UIYNk0c?autoplay=1&controls=0&modestbranding=1&rel=0',
    'Chota Bheem': 'https://www.youtube.com/embed/mAolnHiqkX4?autoplay=1&controls=0&modestbranding=1&rel=0',
    'Papa Pig': 'https://www.youtube.com/embed/BUpN8KmTdtc?autoplay=1&controls=0&modestbranding=1&rel=0',
    'Phineas and Ferb': 'https://www.youtube.com/embed/yNf1nnQrfi4?autoplay=1&controls=0&modestbranding=1&rel=0',
    'Baby Bunny': 'https://www.youtube.com/embed/p5l3ZS1jVUE?autoplay=1&controls=0&modestbranding=1&rel=0',
    'Tom and Jerry': 'https://www.youtube.com/embed/IJbbpAhjboI?autoplay=1&controls=0&modestbranding=1&rel=0',
    'The Smurfs': 'https://www.youtube.com/embed/ay6xaygH16E?autoplay=1&controls=0&modestbranding=1&rel=0',
  };

  // Handle Channel Selection
  const handleChannelChange = (e) => {
    const selectedChannel = e.target.value;
    setChannelName(selectedChannel);
    setVideoUrl(channels[selectedChannel]);
  };

  return (
    <div className="toon-toon-go">
      <header className="app-header">
        <h2>Welcome to {channelName || 'select a channel'}</h2>
      </header>

      {/* Dropdown for selecting channel */}
      <div className="channel-selector">
        <label htmlFor="channel">Choose Channel: </label>
        <select id="channel" onChange={handleChannelChange}>
          <option value="">--Select a Channel--</option>
          {Object.keys(channels).map((channel, index) => (
            <option key={index} value={channel}>
              {channel}
            </option>
          ))}
        </select>
      </div>

      {/* TV-like Video Display */}
      <div className="tv-container">
        <div className="video-overlay"></div> {/* Overlay to hide the title */}
        {videoUrl ? (
          <iframe
            title={channelName}
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Select a channel to watch live streaming!</p>
        )}
      </div>
    </div>
  );
};

export default App;
