import Link from 'next/link';

const isExternal = (link: string) => link.match(/http/);

type FooterNavProps = {
  items: Record<string, string>;
};

export const FooterNav = ({ items }: FooterNavProps) => {
  const entries = Object.entries(items);

  return (
    <nav>
      {entries.map((linkItem) => {
        const [label, href] = linkItem;

        if (isExternal(href)) {
          return (
            <a
              href={href}
              key={`link-${label}`}
              className="block text-zinc-500 text-normal py-1 md:my-1 py-2 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }

        return (
          <Link href={href} key={`link-${label}`}>
            <a className="block text-zinc-500 text-normal py-1 md:my-1 py-2 hover:text-white">
              {label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
