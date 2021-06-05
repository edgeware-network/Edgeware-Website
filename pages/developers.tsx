import * as React from 'react';

import IconSlash from 'remixicon/icons/Development/code-s-slash-line.svg';
import IconPrompt from 'remixicon/icons/Development/terminal-line.svg';
import IconTerminal from 'remixicon/icons/Development/terminal-window-line.svg';
import IconServer from 'remixicon/icons/Device/server-line.svg';

import IconGithub from 'remixicon/icons/Logos/github-fill.svg';

import { H1, H2, P } from '../components/common/typography/typography';
import { IconCard } from '../components/pages/developer/icon-card/icon-card';
import { IconCardList } from '../components/pages/developer/icon-card/icon-card-list';
import { Link } from '../components/common/link/link';
import { HeadlineSection } from '../components/common/headline-section/headline-section';
import { TechFeatures } from '../components/pages/developer/tech-features/tech-features';
import { IconBox } from '../components/pages/developer/icon-box/icon-box';
import { IconBoxList } from '../components/pages/developer/icon-box/icon-box-list';
import { Button } from '../components/common/button/button';
import { LinkBox } from '../components/pages/developer/link-box/link-box';
import { OvalIcon } from '../components/pages/developer/oval-icon/oval-icon';
import { MainPromo } from '../components/pages/developer/main-promo/main-promo';
import { Section } from '../components/common/section/section';
import { EdgewareNode } from '../components/pages/developer/edgeware-node/edgeware-node';
import { CodeIcon } from '../components/pages/developer/code-icon/code-icon';
import { Icon } from '../components/common/icon/icon';

export default function Developer() {
  return (
    <>
      <Section id="main-info" width="normal">
        <MainPromo>
          <H1 size="1">Build governance focused smart contracts with Edgeware</H1>
          <br />
          <P>
            Edgeware aims to solve the scalability problem by adopting a fundamentally different
            architecture. Edgeware token holders can vote to upgrade the network using on-chain
            voting, after which nodes automatically download a new version of the runtime. Critical
            decisions are made on-chain, creating a system with lower coordination overhead and a
            transparent process for deciding upon improvements.
          </P>
        </MainPromo>

        <IconCardList>
          <IconCard headline="Gaming" iconSrc="/images/developer/gaming.png">
            Develop, design, and experiment with games and game theory while working to promote an
            infrastructure for game designers and users.
          </IconCard>
          <IconCard headline="DeFi" iconSrc="/images/developer/defi.png">
            Edgeware aims to connect existing DeFi ecosystems and to facilitate the designing of
            next-gen cross-chain DeFi protocols through bridges and EVM+WASM compatibility.
          </IconCard>
          <IconCard headline="DAOs" iconSrc="/images/developer/dao.png">
            Edgeware provides foundations for a network of DAOs that help coordinate and scale the
            contributions of the community.
          </IconCard>
        </IconCardList>
      </Section>

      <Section id="builders-guild" width="narrow">
        <div className="mb-5">
          <div className="row">
            <div className="col-lg">
              <CodeIcon />
            </div>
            <div className="col-lg text-center text-md-start">
              <div className="mt-md-3 p-md-5">
                <H2 size="1">Builders Guild</H2>
                <P secondary>
                  In Edgeware, working groups function as mission-based development orgs that are
                  composed of members who share interests, needs, and passions. Where an Ambassador
                  team is largely formed to promote a network in a variety of ways, Working Groups
                  are intended to solve issues specific to a community while also growing community.
                </P>
                <Link href="https://t.me/edg_developers">Learn more about the builders guild</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="tech-features" background="waves-middle" width="narrow">
        <div className="mb-5">
          <div className="row">
            <div className="col-lg d-flex align-items-center">
              <div className="ps-md-4 ms-md-4 me-md-3">
                <H2 size="1">Technical features</H2>
                <P secondary>
                  Edgeware is a smart contract blockchain that compiles to a client runtime, a blob
                  of <strong>WebAssembly (Wasm)</strong> code that may be built and run natively or
                  executed within a Wasm virtual machine. Either way, when an Edgeware native binary
                  is compiled, it includes a Wasm virtual machine which can be used to execute later
                  versions of the client runtime downloaded from the network.
                </P>
                <P secondary>
                  The client runtime interfaces with networking code and other components provided
                  by <strong>Parity Substrate</strong>. Substrate includes{' '}
                  <strong>
                    libp2p networking, PBFT consensus, proof-of-stake block validation and finality
                    [substrate]
                  </strong>
                  . Ultimately, the client is only responsible for downloading, executing, and
                  validating blocks from the network.
                </P>
              </div>
            </div>
            <div className="col-lg">
              <div className="pe-md-4 me-md-4">
                <TechFeatures />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="get-started" width="normal">
        <div className="mb-5">
          <HeadlineSection center>
            <H2 size="1">Get Started on Edgeware</H2>
            <P>
              This is your launchpad to find what you need to integrate Edgeware.
              <br />
              Unsure of where to start?{' '}
              <Link href="https://t.me/edg_developers">Join the Developer Chat</Link>
            </P>
          </HeadlineSection>

          <IconBoxList>
            <IconBox headline="Run a Node" headlineSeparator iconComponent={IconServer}>
              Easily run your own node and start supporting the Edgeware network.
            </IconBox>
            <IconBox headline="Build Dapp" headlineSeparator iconComponent={IconSlash}>
              Write Smart Contracts on Edgeware using Ink!
            </IconBox>
            <IconBox headline="Build Runtime" headlineSeparator iconComponent={IconPrompt}>
              Execute infrastructure through reusable builds and containers.
            </IconBox>
            <IconBox headline="Build a Pallet" headlineSeparator iconComponent={IconTerminal}>
              Bundle core essentials into modules that are easily deployed.
            </IconBox>
          </IconBoxList>
        </div>
      </Section>

      {/* DAPS */}
      <Section id="edgeware-dapps" width="normal">
        <HeadlineSection center>
          <H2 size="1">DAPPs developed on Edgeware</H2>
          <P>
            Learn more about the latest launched applications
            <br />
            developed on Edgeware ecosystem.
          </P>
        </HeadlineSection>

        <IconBoxList>
          <IconBox
            headline="MailChain"
            imageUrl="/images/developer/dapps-mailchain.png"
            imageWidth="48"
            imageHeight="48"
            targetButton="https://mailchain.xyz/"
          >
            Send and receive messages between blockchain addresses through a simple, email-like
            interface.
          </IconBox>
          <IconBox
            headline="Sublime Finance"
            imageUrl="/images/developer/dapps-sublime.png"
            imageWidth="128"
            imageHeight="26"
            targetButton="https://commonwealth.im/edgeware/proposal/discussion/636-announcing-sublim"
          >
            Sublime is a new lending protocol aimed at providing a more diversified and robust
            lending experience.
          </IconBox>
          <IconBox
            headline="dTrade"
            imageUrl="/images/developer/dapps-dtrade.svg"
            imageWidth="111"
            imageHeight="28"
            targetButton="https://dtrade.org/"
          >
            Decentralised Synthetic Options &amp; Futures - derivatives trading powered by
            Substrate.
            <br />
            Community run.
          </IconBox>
        </IconBoxList>
      </Section>

      <Section id="resources" width="narrow">
        <div className="p-md-5">
          <div className="row">
            <div className="col-lg">
              <div className="mt-md-5 pt-md-4">
                <HeadlineSection center>
                  <OvalIcon />
                  <H2 size="1">Resources</H2>
                  <div className="px-md-5">
                    <P>
                      Jump straight into our developer tutorials and easy to follow documentation.
                    </P>
                    <br />
                    <Button style="white" href="https://github.com/Edgeware-Network">
                      Follow us on Github
                      <Icon component={IconGithub} />
                    </Button>
                  </div>
                </HeadlineSection>
              </div>
            </div>
            <div className="col-lg">
              <div className="p-md-5 me-md-5">
                <LinkBox />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="node" width="narrow">
        <EdgewareNode />
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Build governance focused smart contracts',
        description:
          'Edgeware gives blockchain developers an easy-to-use framework to build governance focused smart contracts.',
      },
    },
  };
}
