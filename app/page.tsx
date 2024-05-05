import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Home page for app 2</h1>
      <a href="/">Home page for app 1</a>
      <a href="/internal">Internal page for app 1</a>
      <Link href="/">Home page for app 2</Link>
      <Link href="/internal">Internal page for app 2</Link>
    </main>
  );
}
