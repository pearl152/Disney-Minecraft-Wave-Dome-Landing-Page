interface BadgeProps {
  children: React.ReactNode;
  variant?: "ocean" | "teal" | "gold" | "jungle" | "sand" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "ocean",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantClasses: Record<string, string> = {
    ocean: "bg-[#1B6CA8]/10 text-[#1B6CA8] border border-[#1B6CA8]/20",
    teal: "bg-[#00B5C5]/10 text-[#00B5C5] border border-[#00B5C5]/20",
    gold: "bg-[#F6C90E]/10 text-[#C9A40B] border border-[#F6C90E]/30",
    jungle: "bg-[#2D7A4F]/10 text-[#2D7A4F] border border-[#2D7A4F]/20",
    sand: "bg-[#E8D5A3]/40 text-[#8B6914] border border-[#E8D5A3]",
    dark: "bg-[#0A1628]/10 text-[#0A1628] border border-[#0A1628]/20",
  };

  const sizeClasses: Record<string, string> = {
    sm: "text-xs px-2 py-0.5 rounded-md",
    md: "text-sm px-3 py-1 rounded-lg",
  };

  return (
    <span
      className={`inline-flex items-center font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
