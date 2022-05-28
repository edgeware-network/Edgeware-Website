import * as React from 'react';
import cn from 'classnames';
import Link from 'next/link';

export type LinkItem = {
  label: string;
  icon: any;
  href: string;
};

export type LinksListProps = {
  headline: string;
  items: LinkItem[];
  highlight?: boolean;
};

export const LinksList = ({ headline, items, highlight }: LinksListProps) => {
  return (
    <div className="container mx-auto max-w-7xl">
      <h2 className="border-b border-b-grey-800 py-2 text-xl text-primary-500">{headline}</h2>
      <ul className="flex flex-row flex-wrap py-4">
        {items.map((item, index) => {
          const isExternal = item.href.match(/https/);
          const Icon = item.icon;

          const linkClasses = {
            base: 'group block min-w-[15rem] rounded border border-grey-800 p-4 text-white transition-all duration-300',
            hover: 'hover:text-green-500 hover:border-green-500',
            regular: 'flex flex-row items-center',
            highlight:
              'flex flex-col items-center bg-[url("/images/common/blocks-pattern.jpg")] bg-center bg-[length:auto_200%] hover:bg-[length:auto_150%]',
          };

          const linkClass = cn(
            linkClasses.base,
            linkClasses.hover,
            highlight ? linkClasses.highlight : linkClasses.regular
          );

          return (
            <li className="mb-4 mr-4" key={`ll-${index}`}>
              {isExternal ? (
                <a className={linkClass} href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon
                    className={`${
                      highlight ? 'h-8 w-8' : 'mr-2 h-6 w-6'
                    } fill-white transition-all duration-300 group-hover:fill-green-500`}
                  />
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>
                  <a className={linkClass}>
                    <Icon
                      className={`${
                        highlight ? 'h-8 w-8' : 'mr-2 h-6 w-6'
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
