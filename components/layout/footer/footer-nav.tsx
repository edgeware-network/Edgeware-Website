import Link from 'next/link';

const isExternal = (link: string) => link.match(/http/);

type FooterNavProps = {
  items: Record<string, string>;
};

export const FooterNav = ({ items }: FooterNavProps) => {
  const entries = Object.entries(items);

  return (
    <nav className="flex flex-col space-y-2 md:space-y-4">
      {entries.map((linkItem) => {
        const [label, href] = linkItem;

        if (isExternal(href)) {
          return (
            <a
              href={href}
              key={`link-${label}`}
              className="text-normal text-grey-500 hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }

        return (
          <Link href={href} key={`link-${label}`}>
            <a className="text-normal text-grey-500 hover:text-green-500">{label}</a>
          </Link>
        );
      })}
    </nav>
  );
};
