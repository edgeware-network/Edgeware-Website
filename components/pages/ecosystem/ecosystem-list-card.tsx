import * as React from 'react';
import slugify from 'slugify';
import FundsLineIcon from 'remixicon/icons/Finance/funds-line.svg';

const getImagePathFromName = (name: string) => {
  const filename = slugify(name, { lower: true });
  return `/images/ecosystem/partners/${filename}.png`;
};

export type PartnerCardProps = {
  name: string;
  description: string;
  link: string;
  funded?: boolean;
};

export const PartnerCard = ({ name, description, link, funded = false }: PartnerCardProps) => {
  const iconHref = getImagePathFromName(name);

  return (
    <div
      className="relative m-6 flex min-h-[16rem] w-80 flex-col rounded-md border border-grey-800 px-6 py-8"
      data-name={name}
    >
      <span>
        <img src={iconHref} alt={name} loading="lazy" className="h-6 w-auto" />
      </span>
      <h4 className="my-2 text-lg font-medium">{name}</h4>
      <p className="text-sm text-grey-500">{description}</p>
      {funded && (
        <span className="absolute right-0 top-0 flex flex-row rounded-bl-md bg-green-200 p-1 text-xs text-green-800">
          <FundsLineIcon className="mr-2 h-4 w-4" />
          Funded by the Edgeware Treasury
        </span>
      )}

      <div className="mt-auto">
        <a href={link} className="text-primary-500 hover:text-primary-400">
          Learn more
        </a>
      </div>
    </div>
  );
};
