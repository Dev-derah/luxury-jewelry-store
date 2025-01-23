export function RingLogo() {
  return (
    <svg className="w-full h-full absolute left-0 right-0 top-0 bottom-0 m-auto" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4D4D4" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D4D4D4" />
        </linearGradient>
      </defs>
      <path
        d="M50,100 C50,72 72,50 100,50 C128,50 150,72 150,100 C150,128 128,150 100,150 C72,150 50,128 50,100 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="8"
      />
      <path
        d="M60,100 C60,77 77,60 100,60 C123,60 140,77 140,100 C140,123 123,140 100,140 C77,140 60,123 60,100 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="4"
        opacity="0.8"
      />
    </svg>
  );
}
