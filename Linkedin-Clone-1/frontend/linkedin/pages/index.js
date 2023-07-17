import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p>My first page</p>

      <h1 className="title">
        Read <Link href="/home">this page!</Link>
      </h1>
    </>
  )
}
