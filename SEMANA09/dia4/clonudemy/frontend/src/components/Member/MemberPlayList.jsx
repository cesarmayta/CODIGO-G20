import React, { useState } from 'react';

const MemberPlayList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>Video Gallery</h2>
        <ul style={styles.videoList}>
          {videos.map((video, index) => (
             <li
              key={index}
              style={styles.videoItem}
              onClick={() => handleVideoClick(video.code)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.videoPlayer}>
        {selectedVideo && (
          <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube video"
            style={{ borderRadius: '10px' }}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    sidebar: {
      width: '250px',
      background: '#f2f2f2',
      padding: '20px',
    },
    videoList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    videoItem: {
      cursor: 'pointer',
      marginBottom: '10px',
      padding: '5px',
      borderRadius: '5px',
      background: '#fff',
    },
    videoPlayer: {
      flex: 1,
      background: '#000',
      display: 'flex',
      height: '500px',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

export default MemberPlayList;
