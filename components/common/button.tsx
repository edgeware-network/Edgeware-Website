import classNames from 'classnames';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  colorStyle: 'primary' | 'grey' | 'black';
  sizing: 'normal' | 'large';
};

export const Button = ({ children, href, colorStyle, sizing }: ButtonProps) => {
  const classes = {
    base: 'inline-flex items-center justify-center rounded-md border border-transparent transition duration-150 ease-in-out focus:outline-none',
    sizing: {
      normal: 'font-medium leading-6 px-6 py-2',
      large: 'text-lg font-medium leading-6 px-8 py-4',
    },
    colorStyles: {
      primary:
        'bg-primary-500 text-white hover:bg-primary-600 hover:text-white active:bg-primary-700 active:text-white',
      grey: 'bg-grey-800 text-white hover:bg-grey-700 hover:text-white active:bg-grey-700 active:text-white',
      black:
        'bg-grey-900 text-white hover:bg-grey-700 hover:text-white active:bg-grey-600 active:text-white',
    },
  };

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        className={classNames(
          classes.base,
          classes.sizing[sizing],
          classes.colorStyles[colorStyle]
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a
          className={classNames(
            classes.base,
            classes.sizing[sizing],
            classes.colorStyles[colorStyle]
          )}
        >
          {children}
        </a>
      </Link>
    );
  }
};
