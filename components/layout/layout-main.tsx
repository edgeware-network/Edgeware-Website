type MainProps = {
  children: React.ReactNode;
};

export const LayoutMain = ({ children }: MainProps) => {
  return <main className="block">{children}</main>;
};
