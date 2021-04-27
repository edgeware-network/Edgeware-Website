import * as React from 'react';

import { H1, P } from '../../components/common/typography/typography';
import { Section } from '../../components/common/section/section';

import { getAllJobs, getJobBySlug } from '../../lib/api';
import { JobContent } from '../../components/pages/jobs/job-content/job-content';
import { markdownToHtml } from '../../lib/markdown';
import { Button } from '../../components/common/button/button';

export default function Job({ job }) {
  return (
    <>
      <Section id="content" width="narrow">
        <H1 size="1">{job.data.title}</H1>
        <P>All roles with Edgeware are globally remote based. We encourage you to apply regardless of your location.</P>

        <JobContent content={job.content} />

        <div className="py-4">
          <Button href="https://commonwealth.im/">Apply for this position</Button>
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
