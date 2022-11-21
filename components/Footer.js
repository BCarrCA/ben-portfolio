import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <Link href="/">Home</Link>
        <Link href="/art">Art</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/about">About</Link>
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
