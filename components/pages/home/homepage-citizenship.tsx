import FileList3LineIcon from 'remixicon/icons/Document/file-list-3-line.svg';
import FundsLineIcon from 'remixicon/icons/Finance/funds-line.svg';
import BubbleChartLineIcon from 'remixicon/icons/Business/bubble-chart-line.svg';
import GovernmentLineIcon from 'remixicon/icons/Buildings/government-line.svg';
import { socialMediaUrls } from 'data/config';
import Link from 'next/link';

export const HomepageCitizenship = () => {
  return (
    <section id="edge-citizenship" className="my-24 py-24">
      {/* Intro */}
      <div className="container mx-auto max-w-xl px-4 text-center">
        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">Edge Citizenship</h2>
        <p className="my-4 text-lg">
          In Edgeware, users are not merely consumers but shareholders in a cooperative and
          experimental political economy built through blockchain. With 'citizenship' comes
          obligations and benefits that set us apart.
        </p>
      </div>

      {/* 4 column benefits */}
      <div className="container mx-auto my-12 max-w-6xl px-4">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Events */}
          <div className="flex w-full overflow-hidden rounded-xl md:w-1/4">
            <div className="bg-[url('/images/home/citizenship/events-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-stretch justify-center px-4 py-8 text-center md:py-16">
                <FileList3LineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-2xl font-medium md:text-4xl">Events</h3>
                <p className="my-2 text-center">
                  We collectively support the development of character and knowledge through
                  conversations, presentations, funding and opportunities.
                </p>
                <a
                  href={socialMediaUrls.discordUrl}
                  className="text-primary-500 hover:text-primary-400"
                  rel="external noopener noreferrer"
                  target="_blank"
                >
                  Join #events-hall on our Discord channel →
                </a>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div className="flex w-full overflow-hidden rounded-xl md:w-1/4">
            <div className="bg-[url('/images/home/citizenship/funding-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-stretch justify-center px-4 py-8 text-center md:py-16">
                <FundsLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-2xl font-medium md:text-4xl">Funding</h3>
                <p className="my-2 text-center">
                  Our community wealth is open to proposals from all and includes a variety of
                  investments, token grants, or network share allocations designed to enhance and
                  upgrade the network and ecosystem.
                </p>
                <a
                  href="https://commonwealth.im/edgeware/discussion/1132-edgeware-proposal-process-and-template"
                  className="text-primary-500 hover:text-primary-400"
                  rel="external noopener noreferrer"
                  target="_blank"
                >
                  Learn more about Edgeware Proposal process →
                </a>
              </div>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex w-full overflow-hidden rounded-xl md:w-1/4">
            <div className="bg-[url('/images/home/citizenship/ecosystem-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-stretch justify-center px-4 py-8 text-center md:py-16">
                <BubbleChartLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-2xl font-medium md:text-4xl">Ecosystem</h3>
                <p className="my-2 text-center">
                  The democratization of tooling, programs, chains and economic opportunities help
                  us produce a robust and experimental economy.
                </p>
                <Link href="/ecosystem">
                  <a className="text-primary-500 hover:text-primary-400">
                    Check out Edgeware Ecosystem →
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="flex w-full overflow-hidden rounded-xl md:w-1/4">
            <div className="bg-[url('/images/home/citizenship/governance-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-stretch justify-center px-4 py-8 text-center md:py-16">
                <GovernmentLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-2xl font-medium md:text-4xl">Governance</h3>
                <p className="my-2 text-center">
                  The management of our community wealth and infrastructure is the primary way we
                  express the values of Edgeware. Liquid democracy, public referenda and
                  permissionless proposals are the start.
                </p>
                <a
                  href="https://gov.edgewa.re/"
                  className="text-primary-500 hover:text-primary-400"
                  rel="external noopener noreferrer"
                  target="_blank"
                >
                  Take part in governance →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
