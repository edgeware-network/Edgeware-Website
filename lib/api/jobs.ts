import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const jobsDir = join(process.cwd(), 'data', 'jobs');

export function getJobPostsSlugs() {
  return fs.readdirSync(jobsDir);
}

export function getJobBySlug(slug: string) {
  const fullPath = join(jobsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const jobItem = {
    content,
    data: {
      title: data.title as string,
      role: data.role as string,
      published: data.published as boolean,
      slug,
    },
  };

  return jobItem;
}

export function getAllJobs() {
  const jobSlugs = getJobPostsSlugs();
  const jobs = jobSlugs
    .map((jobSlug) => getJobBySlug(jobSlug.replace(/\.md/, '')))
    .filter((job) => job.data.published !== false);
  // TODO: sort?
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return jobs;
}
