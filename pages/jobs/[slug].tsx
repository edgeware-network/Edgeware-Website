import * as React from 'react';

import Link from 'next/link';

import { H1, P } from '../../components/common/typography/typography';
import { Section } from '../../components/common/section/section';
import { JobContent } from '../../components/pages/jobs/job-content/job-content';
import { Button } from '../../components/common/button/button';

import { getAllJobs, getJobBySlug } from '../../lib/api';
import { markdownToHtml } from '../../lib/markdown';

export default function Job({ job }) {
  return (
    <>
      <Section id="content" width="narrow">
        <H1 size="1">{job.data.title}</H1>
        <P>All roles with Edgeware are globally remote based. We encourage you to apply regardless of your location.</P>

        <JobContent content={job.content} />

        <div className="py-4">
          <Button href={`mailto:ops@edgeware.agency?subject=${job.data.title} at Edgeware`}>Apply for this position</Button>
          <P secondary>
            Or email us at <a href={`mailto:ops@edgeware.agency?subject=${job.data.title}  at Edgeware`} className="link">ops@edgeware.agency</a><br/>
          </P>
          <P secondary>
            <Link href="/jobs">
              <a className="link-secondary">Back to Jobs</a>
            </Link>
          </P>
        </div>
      </Section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const job = getJobBySlug(params.slug)
  const content = await markdownToHtml(job.content || '')

  return {
    props: {
      meta: {
        title: `${job.data.title}`,
        description: 'The latest jobs at Edgeware - We\'re a growing open source community looking for talents!',
      },
      job: {
        ...job,
        content
      }
    },
  };
}

export async function getStaticPaths() {
  const jobs = getAllJobs()

  return {
    paths: jobs.map((job) => {
      return {
        params: {
          slug: job.data.slug,
        },
      }
    }),
    fallback: false,
  }

}
