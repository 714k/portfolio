import type { NextPage } from "next";
import Head from "next/head";
import { Logo } from "../../components";
import ShareTools from "../../components/share-tools/ShareTools";

function AtFirst() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Victor Zamudio" />
        <meta name="copyright" content="2006 - 2022, Victor Zamudio" />
        <meta
          name="description"
          content="Portfolio of the Mexican Designer and Developer Victor Zamudio."
        />
        <meta
          name="keywords"
          content="Portfolio, Design, Designer, UX, Web, UI, Developer"
        />
        <link
          rel="shortcut icon"
          href="public/icons/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="public/icons/favicon.ico" type="image/x-icon" />
        <title>At first... - Victor Zamudio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content="https://www.victorzamudio.tech/al-principio/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="At first... - Victor Zamudio" />
        <meta
          property="og:description"
          content="Portfolio of the Mexican Designer and Developer Victor Zamudio."
        />
        <meta
          property="og:image"
          content="https://www.victorzamudio.tech/public/images/social/facebook/portada.jpg"
        />
        <meta property="fb:app_id" content="346428862148379" />
      </Head>
      <main className="main">
        {/*<Logo />*/}
        <header role="banner">
          <h1>Victor Zamudio</h1>
          <h2>UI Developer</h2>
        </header>

        <article role="main">
          <hr />
          <nav id="breadcrumb" data-testid="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/at-first/">At first...</a>
              </li>
            </ol>
          </nav>
          <h2>At first...</h2>

          <ShareTools />
        </article>
      </main>
    </>
  );
}

AtFirst.getInitialProps = async (ctx) => {
  return {};
};

export default AtFirst;
