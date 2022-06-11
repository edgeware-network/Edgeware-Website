import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

export type LinkItem = {
  label: string;
  icon: any;
  href: string;
};

export type LinksListProps = {
  headline?: string;
  items: LinkItem[];
  highlight?: boolean;
};

export const LinksList = ({ headline, items, highlight }: LinksListProps) => {
  return (
    <div className="container mx-auto max-w-7xl">
      {headline && (
        <h2 className="border-b border-b-grey-800 py-2 text-xl text-primary-500">{headline}</h2>
      )}
      <ul className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, index) => {
          const isExternal = item.href.match(/https/);
          const Icon = item.icon;

          const linkClasses = {
            base: 'group block min-w-[14rem] rounded border border-grey-800 p-4 text-white transition-all duration-300',
            hover: 'hover:text-green-500 hover:border-green-500',
            regular: 'flex flex-row items-center',
            highlight:
              'text-lg flex flex-col items-center bg-[url("/images/common/blocks-pattern.jpg")] bg-center bg-[length:auto_200%] hover:bg-[length:auto_150%]',
          };

          const linkClass = classNames(
            linkClasses.base,
            linkClasses.hover,
            highlight ? linkClasses.highlight : linkClasses.regular
          );

          return (
            <li key={`ll-${index}`}>
              {isExternal ? (
                <a className={linkClass} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon
                    className={`${
                      highlight ? 'mb-2 h-10 w-10' : 'mr-2 h-6 w-6'
                    } fill-white transition-all duration-300 group-hover:fill-green-500`}
                  />
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>
                  <a className={linkClass}>
                    <Icon
                      className={`${
                        highlight ? 'mb-2 h-10 w-10' : 'mr-2 h-6 w-6'
                      } fill-white transition-all duration-300 group-hover:fill-green-500`}
                    />{' '}
                    {item.label}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
