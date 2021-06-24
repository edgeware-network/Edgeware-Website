import * as React from 'react';

import { H2, P } from '../../components/common/typography/typography';
import { Section } from '../../components/common/section/section';
import { JobsCardList, JobsCard } from '../../components/pages/jobs/jobs-card/jobs-card';
import { StaticHero } from '../../components/common/static-hero/static-hero';

import { getAllJobs } from '../../lib/api';

export default function Jobs({ allJobs }) {
  const hasJobs = allJobs.length > 0;

  return (
    <>
      <StaticHero>
        We're a growing open source community looking for talent. <em>Join Edgeware</em>
      </StaticHero>

      <Section id="roles" width="narrow">
        <div className="text-center">
          <H2 size="2">Open Roles</H2>
        </div>

        {hasJobs && (
          <JobsCardList>
            {allJobs.map((job) => (
              <JobsCard
                title={job.data.title}
                role={job.data.role}
                buttonHref={`/jobs/${job.data.slug}`}
                key={job.data.slug}
              ></JobsCard>
            ))}
          </JobsCardList>
        )}

        <div className="text-center">
          <P style="lead" bold>
            Is your role not listed?{' '}
            <a href="mailto:ops@edgware.agency" className="link">
              Message us
            </a>
            .
          </P>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  const allJobs = await getAllJobs();
  return {
    props: {
      meta: {
        title: 'Jobs at Edgeware',
        description:
          "The latest jobs at Edgeware - We're a growing open source community looking for talents!",
      },
      allJobs,
    },
  };
}
