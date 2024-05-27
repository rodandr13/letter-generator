import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="#">
      <Image src="/logo.svg" alt="Logo" width={179} height={48} />
    </Link>
  )
}
