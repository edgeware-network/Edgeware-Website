import * as React from 'react';

type IconLogoProps = {
  className?: string;
};

export const IconLogo = ({ className }: IconLogoProps) => {
  return (
    <img
      src="/images/logo/edg-profile-image-magenta@2x.png"
      width="196"
      height="196"
      alt="Edgeware"
      className={className}
    />
  );
};
