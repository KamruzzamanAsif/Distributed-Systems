import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <h1 className="title">
        Read <Link href="/home">this page!</Link>
      </h1>
    </>
  )
}
