import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/udocs.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image 
        src={logo} 
        alt="Logo" // It's a good practice to include an alt attribute for accessibility
        width={150}  // Set the desired width
        height={150} // Set the desired height
        // sizes="(max-width: 600px) 50px, 60px" // Optional: adjust sizes based on screen width
      />
    </Link>
  );
}
