function DancingCat({ isDancing }) {
  return (
    <svg
      className={`dancing-cat ${isDancing ? 'is-dancing' : 'is-paused'}`}
      viewBox="0 0 200 220"
      role="img"
      aria-label={isDancing ? '신나게 춤추는 고양이' : '쉬고 있는 고양이'}
    >
      <g className="cat-whole">
        <path
          className="cat-tail"
          d="M152,168 C190,168 196,110 168,88"
          fill="none"
          stroke="#f6a35c"
          strokeWidth="16"
          strokeLinecap="round"
        />

        <g className="cat-body">
          <ellipse cx="100" cy="150" rx="58" ry="48" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
          <ellipse cx="100" cy="166" rx="32" ry="26" fill="#fbd9ad" />
          <path d="M78,118 q6,12 0,22" fill="none" stroke="#d9863f" strokeWidth="4" strokeLinecap="round" />
          <path d="M122,118 q-6,12 0,22" fill="none" stroke="#d9863f" strokeWidth="4" strokeLinecap="round" />

          <g className="cat-leg cat-leg-left">
            <ellipse cx="78" cy="195" rx="14" ry="11" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
            <circle cx="78" cy="198" r="5" fill="#fbd9ad" />
          </g>
          <g className="cat-leg cat-leg-right">
            <ellipse cx="122" cy="195" rx="14" ry="11" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
            <circle cx="122" cy="198" r="5" fill="#fbd9ad" />
          </g>
        </g>

        <g className="cat-head">
          <circle cx="100" cy="85" r="46" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
          <path d="M84,46 q5,10 0,20" fill="none" stroke="#d9863f" strokeWidth="4" strokeLinecap="round" />
          <path d="M116,46 q-5,10 0,20" fill="none" stroke="#d9863f" strokeWidth="4" strokeLinecap="round" />

          <g className="cat-ear cat-ear-left">
            <polygon points="62,55 45,10 88,48" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
            <polygon points="64,50 54,22 82,46" fill="#ffc2d1" />
          </g>
          <g className="cat-ear cat-ear-right">
            <polygon points="138,55 155,10 112,48" fill="#f6a35c" stroke="#d9863f" strokeWidth="2" />
            <polygon points="136,50 146,22 118,46" fill="#ffc2d1" />
          </g>

          <g className="cat-whiskers cat-whiskers-left">
            <line x1="55" y1="92" x2="25" y2="88" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
            <line x1="55" y1="98" x2="24" y2="98" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
            <line x1="55" y1="104" x2="26" y2="109" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="cat-whiskers cat-whiskers-right">
            <line x1="145" y1="92" x2="175" y2="88" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
            <line x1="145" y1="98" x2="176" y2="98" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
            <line x1="145" y1="104" x2="174" y2="109" stroke="#d9863f" strokeWidth="2" strokeLinecap="round" />
          </g>

          <g className="cat-face">
            <ellipse className="cat-eye cat-eye-left" cx="82" cy="82" rx="7" ry="9" fill="#2b2b2b" />
            <ellipse className="cat-eye cat-eye-right" cx="118" cy="82" rx="7" ry="9" fill="#2b2b2b" />
            <circle cx="84" cy="78" r="2" fill="#ffffff" />
            <circle cx="120" cy="78" r="2" fill="#ffffff" />
            <polygon points="95,98 105,98 100,105" fill="#ff8aa8" />
            <path d="M100,105 Q100,112 92,113" fill="none" stroke="#6b4226" strokeWidth="2" strokeLinecap="round" />
            <path d="M100,105 Q100,112 108,113" fill="none" stroke="#6b4226" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default DancingCat
