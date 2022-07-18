import Link from 'next/link';
import Head from 'next/head';

export default function Collectives() {
  return (
    <div>
      <p className="pt-24 text-center">
        This page was moved to a new location. <br />
        You will be automatically redirected in a few seconds.
        <br />
        <br />
        <Link href="/society">
          <a className="text-primary ml-2 underline">Click here to be redirected →</a>
        </Link>
      </p>
      <Head>
        <meta httpEquiv="refresh" content="5;url=/society" />
      </Head>
    </div>
  );
}
