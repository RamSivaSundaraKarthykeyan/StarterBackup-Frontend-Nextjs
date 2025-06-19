import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="flex gap-3">
        <Link href={"/invest"}>Invest</Link>
        <Link href={"/raise"}>Raise</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </nav>
  );
}
