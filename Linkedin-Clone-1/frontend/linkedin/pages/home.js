import Link from "next/link"

export default function Home(){
    return (
    <>
    <h1>home page</h1>
    <p>home paragraph</p>

    <h2>
        <Link href="/">Back to home</Link>
    </h2>
    </>
    )
    
}