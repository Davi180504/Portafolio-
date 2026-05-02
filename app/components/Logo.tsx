import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <Image
        src="/logo.png"
        alt="David Ortiz Logo"
        width={400}
        height={400}
        className="object-contain"
      />

    </div>
  );
}