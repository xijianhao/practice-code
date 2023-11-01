import Link from 'next/link'

export default function Page() {
  return <div>
    <h1>Hello, Next.js!</h1>
    <Link href="/dashboard">go dashboard</Link>
    <div>
      <Link href="/blog/picture">go blog pucture</Link>
    </div>
  </div>
}