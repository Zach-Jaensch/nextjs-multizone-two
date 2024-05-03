import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Internal page for app 1</h1>
      <Link href="/">Home page for app 1</Link>
      <Link href="/internal">Internal page for app 1</Link>
      <Link href="/other">Home page for app 2</Link>
      <Link href="/other/internal">Internal page for app 2</Link>
    </main>
  );
}
