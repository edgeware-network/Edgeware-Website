import { config } from 'data/config';
import Link from 'next/link';
import FileList3LineIcon from 'remixicon/icons/Document/file-list-3-line.svg';
import DiscordFillIcon from 'remixicon/icons/Logos/discord-fill.svg';

export const HomepageBuild = () => {
  return (
    <section id="build-on-edgeware-system" className="my-24 py-24">
      {/* Intro */}
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-medium">Want to build on the Edgeware ecosystem?</h2>
        <p className="m-auto my-4 max-w-xl text-2xl">
          The go-to resource for developers to start building with Edgeware.
        </p>
      </div>

      {/* Docs links */}
      <div className="container mx-auto my-8 max-w-4xl">
        <ul className="flex flex-row space-x-4">
          <li className="w-1/2">
            <a
              href="https://docs.edgeware.wiki/"
              className="flex flex-row space-x-4 rounded-md border border-grey-800 bg-grey-900 p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block rounded-3xl border-8 border-grey-800 bg-black p-3 pt-3">
                <FileList3LineIcon className="h-6 w-6 fill-white" />
              </span>
              <div>
                <span className="block">Documentation</span>
                <p className="text-sm text-grey-300">
                  Learn about the technology and start building on the Edgeware blockchain.
                </p>
              </div>
            </a>
          </li>
          <li className="w-1/2">
            <a
              href={config.discordUrl}
              className="flex flex-row space-x-4 rounded-md border border-grey-800 bg-grey-900 p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block rounded-3xl border-8 border-grey-800 bg-black p-3 pt-3">
                <DiscordFillIcon className="h-6 w-6 fill-white" />
              </span>
              <div>
                <span className="block">Community</span>
                <p className="text-sm text-grey-300">
                  Join our growing community and help shape the future of Edgeware and the
                  ecosystem.
                </p>
              </div>
            </a>
          </li>
        </ul>

        <div className="my-8 text-center">
          <Link href="/developers">
            <a className="inline-block rounded bg-primary-500 py-2.5 px-6">Start Building</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
