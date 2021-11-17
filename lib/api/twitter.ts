import fs from 'fs';
import { join } from 'path';
import YAML from 'yaml';

const sourcePath = join(process.cwd(), 'data', 'twitter', 'mentions.yaml');

export type TwitterMention = {
  name: string;
  handle: string;
  text: string;
  date: string;
  avatar: string;
  url?: string;
};

export function getAllTwitterMentions() {
  const file = fs.readFileSync(sourcePath, 'utf8');
  const data = YAML.parse(file);

  // simple type assertion for mapping convenience in the view
  return data.mentions as TwitterMention[];
}
