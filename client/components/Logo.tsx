export function Logo({ className = "w-10 h-10 mt-1 bg-white" }: { className?: string }) {
  return (
    <img
      src="/assets/hs-logo-png.PNG"
      alt="Home Sniper Real Estate Logo"
      className={className}
    />
  );
}
