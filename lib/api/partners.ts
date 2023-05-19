import fs from 'fs';
import { join } from 'path';
import YAML from 'yaml';

const sourcePath = join(process.cwd(), 'data', 'partners', 'partners.yaml');

type Partner = {
  name: string;
  description: string;
  link: string;
  funded?: boolean;
  deployedOn?: string;
};

type PartnersCategory = {
  category: string;
  partners: Partner[];
};

export type AllPartnersData = PartnersCategory[];

export function getAllPartners() {
  const file = fs.readFileSync(sourcePath, 'utf8');
  const data = YAML.parse(file);

  // simple type assertion for mapping convenience in the view
  return data.partners as AllPartnersData;
}
