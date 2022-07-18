import * as React from 'react';

import Icon404 from '../../public/images/custom/404.svg';
import Icon500 from '../../public/images/custom/500.svg';

type ErrorIconProps = {
  code: '404' | '500';
};

export const ErrorIcon = ({ code }: ErrorIconProps) => {
  return (
    <div className="my-24 flex flex-row justify-center">
      {code === '404' ? <Icon404 className="h-48" /> : <Icon500 className="h-48" />}
    </div>
  );
};
