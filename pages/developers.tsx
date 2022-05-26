import * as React from 'react';

import IconSlash from 'remixicon/icons/Development/code-s-slash-line.svg';
import IconPrompt from 'remixicon/icons/Development/terminal-line.svg';
import IconTerminal from 'remixicon/icons/Development/terminal-window-line.svg';
import IconServer from 'remixicon/icons/Device/server-line.svg';

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
import { Section } from '../components/common/section/section';
import { EdgewareNode } from '../components/pages/developer/edgeware-node/edgeware-node';
import { CodeIcon } from '../components/pages/developer/code-icon/code-icon';

import { DevelopersHero } from 'components/pages/developers/developers-hero';
import { DevelopersQuotes } from 'components/pages/developers/developers-quotes';
import { DevelopersGetStarted } from 'components/pages/developers/developers-get-started';
import { DevelopersBuilders } from 'components/pages/developers/developers-builders';
import { DevelopersTechFeatures } from 'components/pages/developers/developers-tech-features';

export default function Developer() {
  return (
    <>
      <DevelopersHero />
      <DevelopersQuotes />
      <DevelopersGetStarted />
      <DevelopersBuilders />
      <DevelopersTechFeatures />

      <Section id="resources" width="narrow">
        <div className="p-md-5">
          <div className="row">
            <div className="col-lg">
              <div className="mt-md-5 pt-md-4">
                <HeadlineSection center>
                  <OvalIcon />
                  <H2 size="1" margin="none">
                    Resources
                  </H2>
                  <div className="px-md-5">
                    <P>
                      Jump straight into our developer tutorials and easy to follow documentation.
                    </P>
                    <Button style="white" href="https://github.com/Edgeware-Network">
                      Follow us on Github
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
