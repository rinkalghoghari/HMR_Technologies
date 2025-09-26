import logoPath from "@assets/LogoWithName.png";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center scale-90 ${className}`}>
      <img
        src={logoPath}
        alt="HMR Technologies"
        className="h-full w-auto object-contain scale-90"
      />
    </div>
  );
}
