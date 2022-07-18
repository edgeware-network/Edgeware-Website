import * as React from 'react';

const logoPath = (type: string, color: string, format: string) =>
  `/assets/press/edgeware-${color}-${type}.${format}`;

type BrandAssetProps = {
  type: 'logotype' | 'logomark';
  name: string;
  color: 'main' | 'solid-main' | 'dark' | 'solid-dark' | 'white' | 'solid-white';
};

export const BrandAsset = ({ type, name, color }: BrandAssetProps) => {
  return (
    <div className="">
      <div
        className={`rounded-lg border border-grey-700 px-8 py-12 ${
          color.includes('dark') ? 'bg-white' : 'bg-grey-900'
        }`}
      >
        <img
          src={logoPath(type, color, 'svg')}
          alt={`Logo asset ${name}`}
          loading="lazy"
          className="mx-auto h-16"
        />
      </div>
      <div className="flex flex-row items-center justify-between py-2">
        <span className="font-semibold">{name}</span>
        <span className="text-xs">
          <a
            href={logoPath(type, color, 'png')}
            target="_blank"
            rel="noreferrer"
            download
            className="hov mx-2 text-grey-500 hover:text-primary-500"
          >
            PNG
          </a>
          <a
            href={logoPath(type, color, 'svg')}
            target="_blank"
            rel="noreferrer"
            download
            className="mx-2 text-grey-500 hover:text-primary-500"
          >
            SVG
          </a>
        </span>
      </div>
    </div>
  );
};

type BrandAssetListProps = {
  children: React.ReactNode;
};

export const BrandAssetList = ({ children }: BrandAssetListProps) => {
  return <div className="my-8 grid grid-cols-3 gap-4">{children}</div>;
};
