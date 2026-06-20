import Link from "next/link";
import Image from "next/image";

type LogoVariant = "navbar" | "footer";

export default function Logo({ variant = "navbar", className = "" }: { variant?: LogoVariant; className?: string }) {
  const isNavbar = variant === "navbar";

  return (
    <Link href="/" className={`block shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="Rooted Life Foundation"
        width={700}
        height={356}
        className={isNavbar ? "h-28 w-auto" : "h-32 w-auto"}
        priority
      />
    </Link>
  );
}
