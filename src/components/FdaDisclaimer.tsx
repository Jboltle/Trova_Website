import { FDA_DISCLAIMER } from "@/lib/constants";

interface FdaDisclaimerProps {
  className?: string;
}

export function FdaDisclaimer({ className = "" }: FdaDisclaimerProps) {
  return (
    <p
      className={`text-trova-muted text-xs leading-relaxed ${className}`.trim()}
    >
      {FDA_DISCLAIMER}
    </p>
  );
}
