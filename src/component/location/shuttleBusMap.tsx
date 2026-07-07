export const ShuttleBusMap = () => {
  return (
    <div className="shuttle-map">
      <svg
        className="shuttle-map-svg"
        viewBox="0 0 400 280"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#faf7f0" />
            <stop offset="100%" stopColor="#efe8d8" />
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
          {/* Paper background */}
          <rect x="10" y="15" width="380" height="250" rx="2" fill="url(#paperGrad)" />

          {/* Subtle paper fold lines */}
          <rect x="199" y="15" width="2" height="250" fill="url(#foldShade)" opacity="0.35" />
          <rect x="10" y="139" width="380" height="2" fill="url(#foldShade)" opacity="0.25" />

          {/* Main road (west, vertical, orange-ish) */}
          <path
            d="M 45 25 L 50 255"
            stroke="#e5c99a"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 45 25 L 50 255"
            stroke="#f0dcb4"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Top horizontal road */}
          <path
            d="M 25 55 L 385 55"
            stroke="#d9ccb0"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Bottom horizontal road */}
          <path
            d="M 60 235 L 385 235"
            stroke="#d9ccb0"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* East vertical minor road */}
          <path
            d="M 290 60 L 295 230"
            stroke="#dcd0b8"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* City hall building */}
          <rect
            x="90"
            y="75"
            width="185"
            height="55"
            rx="5"
            fill="#a3c19d"
            opacity="0.85"
          />
          <rect
            x="90"
            y="75"
            width="185"
            height="55"
            rx="5"
            fill="none"
            stroke="#7ba07a"
            strokeWidth="1.2"
            opacity="0.6"
          />
          <text
            x="182"
            y="109"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="14"
            fontWeight="bold"
            fontFamily="MapoGoldenPier"
            letterSpacing="0.05em"
          >
            영천시청
          </text>

          {/* Parking area (below city hall) */}
          <rect
            x="90"
            y="140"
            width="185"
            height="80"
            rx="5"
            fill="#e0ead8"
            opacity="0.9"
          />
          <rect
            x="90"
            y="140"
            width="185"
            height="80"
            rx="5"
            fill="none"
            stroke="#b4c9ac"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Parking stripes for illustration effect */}
          <g stroke="#c8d7bc" strokeWidth="1" opacity="0.5">
            <line x1="115" y1="150" x2="115" y2="210" />
            <line x1="140" y1="150" x2="140" y2="210" />
            <line x1="165" y1="150" x2="165" y2="210" />
            <line x1="205" y1="150" x2="205" y2="210" />
            <line x1="230" y1="150" x2="230" y2="210" />
            <line x1="255" y1="150" x2="255" y2="210" />
          </g>

          {/* 영천시의회 (east small building, no label) */}
          <rect
            x="305"
            y="150"
            width="60"
            height="40"
            rx="4"
            fill="#b8b8a8"
            opacity="0.65"
          />
          <rect
            x="305"
            y="150"
            width="60"
            height="40"
            rx="4"
            fill="none"
            stroke="#8a8a78"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* 만남의광장 tree area (SW, no label) */}
          <circle cx="80" cy="245" r="12" fill="#b6d0a8" opacity="0.7" />
          <g transform="translate(80, 245)">
            <path
              d="M 0 -8 L -6 2 L -3 2 L -6 8 L 6 8 L 3 2 L 6 2 Z"
              fill="#7ba080"
              opacity="0.9"
            />
            <rect x="-1" y="7" width="2" height="4" fill="#8a6a4a" />
          </g>

          {/* Parking P marker (destination) - larger, prominent */}
          <g transform="translate(182, 172)">
            {/* Marker shadow */}
            <ellipse cx="0" cy="28" rx="16" ry="4" fill="rgba(0,0,0,0.2)" />
            {/* Marker pin shape */}
            <path
              d="M 0 -22 C -15 -22 -24 -12 -24 0 C -24 12 -8 24 0 32 C 8 24 24 12 24 0 C 24 -12 15 -22 0 -22 Z"
              fill="#e88a5c"
              stroke="#c56a3c"
              strokeWidth="1.5"
            />
            {/* Inner white circle */}
            <circle cx="0" cy="-4" r="13" fill="#f9f9f9" />
            {/* P letter */}
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fill="#c56a3c"
              fontSize="18"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              P
            </text>
          </g>

          {/* Parking label */}
          <text
            x="182"
            y="220"
            textAnchor="middle"
            fill="#4a5a4a"
            fontSize="11"
            fontWeight="bold"
            fontFamily="MapoGoldenPier"
          >
            영천시청 주차장
          </text>
        </g>
      </svg>
    </div>
  )
}
