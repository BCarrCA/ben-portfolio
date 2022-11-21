import Head from 'next/head'

import Footer from './Footer'

export default function Page({ title, children }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
        {children}
      </main>

      <Footer />
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          background: radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#dddddd 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #dddddd 2.2px, #ffffff 2.2px) -1.1px 0;
          background-size: 55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

