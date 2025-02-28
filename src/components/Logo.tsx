
const Logo = () => {
  return (
    <div className="relative w-16 h-16 animate-float">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#7953A9" strokeWidth="2" />
        <path 
          d="M25 35 C35 25, 65 25, 75 35 C85 45, 85 55, 75 65 C65 75, 35 75, 25 65 C15 55, 15 45, 25 35 Z" 
          fill="#7953A9" 
          stroke="white" 
          strokeWidth="1" 
        />
        <circle cx="50" cy="50" r="15" fill="black" stroke="white" strokeWidth="1" />
        <path 
          d="M40 40 L60 40 L50 60 Z" 
          fill="white" 
        />
      </svg>
    </div>
  );
};

export default Logo;
