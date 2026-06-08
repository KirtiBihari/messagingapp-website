const AppIcon = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#10B981" />
      <path d="M14 30c2-4 6-8 10-8s8 4 10 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 20c2-2 6-4 10-4s8 2 10 4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default AppIcon;
