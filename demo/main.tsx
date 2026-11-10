// Demo: the Picnic Cinema player on its own, filling the page.
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoPlayer } from '@videojs/react/video';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { VideoSkin } from '@/video/skin';

import './styles.css';

// The Fall of the House of Usher (1928), public domain, streamed from Mux.
const PLAYBACK_ID = 'vQ601DxySQ7nM3en3GWs00025Hhm3vgyIbsqfbaRDbe8mQ';
const SRC = `https://stream.mux.com/${PLAYBACK_ID}.m3u8`;
const POSTER = `https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp?time=5`;

function Demo() {
  return (
    <main className="stage">
      <VideoPlayer poster={POSTER}>
        <VideoSkin className="demo-player">
          {/* crossOrigin lets WebGL read the video frames for the sheet and its light. */}
          <HlsVideo src={SRC} playsInline crossOrigin="anonymous" />
        </VideoSkin>
      </VideoPlayer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Demo />
  </StrictMode>,
);
