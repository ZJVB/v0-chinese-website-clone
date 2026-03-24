export function SectionDivider() {
  return (
    <div className="relative h-16 lg:h-20 overflow-hidden">
      {/* Left side - Dark navy */}
      <div className="absolute inset-0 bg-[#2d3a4f]" />
      {/* Right side - Orange with diagonal cut */}
      <div 
        className="absolute inset-0 bg-primary"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 45% 100%)'
        }}
      />
    </div>
  );
}
