import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
    </Head>
     <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span className="main-title">Hacker News</span>
          </a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>{`
      .container {
        max-width: 800px;
        background-color: lightgrey;
        margin: 0 auto;
      }
      nav {
        background-color: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      `}</style>
    <style global jsx>{`
      body {
        background-color: white;
        font-family: Verdana, Geneva, sans-serif;
      }
      `}</style>
  </div>
 
);
export default Layout;
