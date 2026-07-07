export const ShuttleBusMap = () => {
  return (
    <div className="shuttle-map">
      <svg
        className="shuttle-map-svg"
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#faf7f0" />
            <stop offset="100%" stopColor="#f0ebde" />
          </linearGradient>
          <linearGradient id="foldShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.02)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
          </linearGradient>
          <filter id="paperShadow" x="-5%" y="-5%" width="110%" height="115%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
        </defs>

        <g filter="url(#paperShadow)">
          <rect x="10" y="15" width="380" height="230" rx="2" fill="url(#paperGrad)" />

          <rect x="140" y="15" width="2" height="230" fill="url(#foldShade)" opacity="0.5" />
          <rect x="260" y="15" width="2" height="230" fill="url(#foldShade)" opacity="0.5" />
          <rect x="10" y="128" width="380" height="2" fill="url(#foldShade)" opacity="0.3" />

          <path d="M 30 70 Q 100 65 200 78 T 380 82" stroke="#c8d9c0" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 30 190 L 380 195" stroke="#d9c8b0" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 200 20 L 195 240" stroke="#c8d9c0" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 90 30 L 100 240" stroke="#c8d9c0" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 300 30 L 305 240" stroke="#c8d9c0" strokeWidth="3" fill="none" strokeLinecap="round" />

          <circle cx="105" cy="75" r="8" fill="#7ba098" opacity="0.8" />
          <text x="105" y="93" textAnchor="middle" fill="#5a6b6a" fontSize="9" fontFamily="MapoGoldenPier">시청역</text>

          <circle cx="305" cy="82" r="7" fill="#a89c7a" opacity="0.7" />
          <text x="305" y="100" textAnchor="middle" fill="#5a6b6a" fontSize="9" fontFamily="MapoGoldenPier">우체국</text>

          <circle cx="100" cy="195" r="6" fill="#7ba098" opacity="0.7" />
          <text x="100" y="212" textAnchor="middle" fill="#5a6b6a" fontSize="9" fontFamily="MapoGoldenPier">공원</text>

          <circle cx="305" cy="200" r="6" fill="#a89c7a" opacity="0.7" />
          <text x="305" y="217" textAnchor="middle" fill="#5a6b6a" fontSize="9" fontFamily="MapoGoldenPier">정류장</text>

          <g transform="translate(200, 130)">
            <ellipse cx="0" cy="26" rx="18" ry="4" fill="rgba(0,0,0,0.15)" />
            <path
              d="M 0 -22 C -14 -22 -22 -12 -22 0 C -22 12 -8 22 0 30 C 8 22 22 12 22 0 C 22 -12 14 -22 0 -22 Z"
              fill="#85c285"
              stroke="#5a8f5a"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="-2" r="12" fill="#f9f9f9" />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#5a8f5a"
              fontSize="16"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              P
            </text>
          </g>

          <text
            x="200"
            y="180"
            textAnchor="middle"
            fill="#4a5a4a"
            fontSize="11"
            fontFamily="MapoGoldenPier"
            fontWeight="bold"
          >
            영천시청 주차장
          </text>
        </g>
      </svg>
    </div>
  )
}
