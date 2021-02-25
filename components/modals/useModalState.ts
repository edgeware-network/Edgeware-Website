import * as React from 'react';

export const setBodyOverlay = (flag: boolean) => {
  if (flag) {
    document.querySelector('html').classList.add('hasOverlay');
  } else {
    document.querySelector('html').classList.remove('hasOverlay');
  }
};

export const useModalState = () => {
  const [isOpen, toggleOpen] = React.useState(false);

  const toggleModal = React.useCallback(() => {
    if (isOpen) {
      toggleOpen(false);
      setBodyOverlay(false);
    } else {
      toggleOpen(true);
      setBodyOverlay(true);
    }
  }, [isOpen]);

  return {
    isOpen,
    toggleModal,
  };
};
