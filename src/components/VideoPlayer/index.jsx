'use client';

import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: '100%',
    height: '400',
  };

  function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  return (
    <div className="mt-10">
      <YouTube videoId={YouTubeGetID(youtubeId)} onReady={(e) => e.target.pauseVideo()} opts={option} />
    </div>
  );
};

export default VideoPlayer;
