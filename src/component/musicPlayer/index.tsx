import { useEffect, useRef, useState } from "react"
import { MUSIC_YOUTUBE_ID } from "../../const"
import "./index.scss"

declare global {
  interface Window {
    YT: typeof YT
    onYouTubeIframeAPIReady: () => void
  }
}

export const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const playerRef = useRef<YT.Player | null>(null)
  const readyRef = useRef(false)

  useEffect(() => {
    if (!MUSIC_YOUTUBE_ID) return

    const initPlayer = () => {
      playerRef.current = new window.YT.Player("yt-music-player", {
        videoId: MUSIC_YOUTUBE_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: MUSIC_YOUTUBE_ID,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            readyRef.current = true
          },
          onStateChange: (e) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING)
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
      if (!document.getElementById("yt-api-script")) {
        const script = document.createElement("script")
        script.id = "yt-api-script"
        script.src = "https://www.youtube.com/iframe_api"
        document.head.appendChild(script)
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [])

  const toggle = () => {
    if (!playerRef.current || !readyRef.current) return
    if (playing) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  if (!MUSIC_YOUTUBE_ID) return null

  return (
    <div className="music-player">
      <div id="yt-music-player" style={{ display: "none" }} />
      <button className="music-btn" onClick={toggle} aria-label={playing ? "음악 끄기" : "음악 켜기"}>
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
          </svg>
        )}
      </button>
    </div>
  )
}
