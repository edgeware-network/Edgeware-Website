import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  colorStyle: 'primary' | 'black';
};

export const Button = ({ children, href, colorStyle }: ButtonProps) => {
  const classes = {
    base: 'inline-flex items-center justify-center rounded-md border border-transparent px-6 py-2 font-medium leading-6 transition duration-150 ease-in-out focus:outline-none',
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 hover:text-white active:bg-primary-700 active:text-white',
    black:
      'bg-grey-900 text-white hover:bg-grey-700 hover:text-white active:bg-grey-600 active:text-white',
  };

  return (
    <a
      href={href}
      className={classNames(classes.base, classes[colorStyle])}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
