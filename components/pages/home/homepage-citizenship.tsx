import FileList3LineIcon from 'remixicon/icons/Document/file-list-3-line.svg';
import FundsLineIcon from 'remixicon/icons/Finance/funds-line.svg';
import BubbleChartLineIcon from 'remixicon/icons/Business/bubble-chart-line.svg';
import GovernmentLineIcon from 'remixicon/icons/Buildings/government-line.svg';

export const HomepageCitizenship = () => {
  return (
    <section id="edge-citizenship" className="my-24 py-24">
      {/* Intro */}
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-5xl font-medium">Edge Citizenship</h2>
        <p className="my-4 text-lg">
          In Edgeware, users are not merely consumers but shareholders in a cooperative and
          experimental political economy built through blockchain. With 'citizenship' comes
          obligations and benefits that set us apart.
        </p>
      </div>

      {/* 4 column benefits */}
      <div className="container mx-auto my-12 max-w-6xl">
        <div className="flex space-x-4">
          {/* Events */}
          <div className="flex w-1/4 overflow-hidden rounded-xl">
            <div className="bg-[url('/images/home/citizenship/events-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-center justify-center px-4 py-16">
                <FileList3LineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-4xl font-medium">Events</h3>
                <p>
                  We collectively support the development of character and knowledge through
                  conversations, presentations, funding and opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div className="flex w-1/4 overflow-hidden rounded-xl">
            <div className="bg-[url('/images/home/citizenship/funding-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-center justify-center px-4 py-16">
                <FundsLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-4xl font-medium">Funding</h3>
                <p>
                  Our community wealth is open to proposals from all and includes a variety of
                  investments, token grants, or network share allocations designed to enhance and
                  upgrade the network and ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Ecosystem */}
          <div className="flex w-1/4 overflow-hidden rounded-xl">
            <div className="bg-[url('/images/home/citizenship/ecosystem-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-center justify-center px-4 py-16">
                <BubbleChartLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-4xl font-medium">Ecosystem</h3>
                <p>
                  The democratization of tooling, programs, chains and economic opportunities help
                  us produce a robust and experimental economy.
                </p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="flex w-1/4 overflow-hidden rounded-xl">
            <div className="bg-[url('/images/home/citizenship/governance-box@2x.png')] bg-cover bg-center">
              <div className="flex flex-col items-center justify-center px-4 py-16">
                <GovernmentLineIcon className="mx-auto h-8 w-8 fill-primary-500" />
                <h3 className="my-2 text-4xl font-medium">Governance</h3>
                <p>
                  The management of our community wealth and infrastructure is the primary way we
                  express the values of Edgeware. Liquid democracy, public referenda and
                  permissionless proposals are the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
