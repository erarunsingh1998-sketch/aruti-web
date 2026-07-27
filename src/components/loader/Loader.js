export default function Loader({ size = "w-50" }) {
  return (
    <div className="relative inline-block overflow-hidden p-2">
      {/* Logos */}
      <img src="/logo-light.png" alt="logo" className={`${size} dark:hidden`} />
      <img src="/logo-dark.png" alt="logo" className={`${size} hidden dark:block`} />

      {/* Glowing Scanner Bar */}
      <div className="scanner-line absolute left-0 right-0 h-0.5 scanner-animation" />
    </div>
  );
}