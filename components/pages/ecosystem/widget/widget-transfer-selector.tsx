import IconArrow from 'remixicon/icons/System/arrow-right-line.svg';

type WidgetTransferSelectorProps = {
  targetTransferType: 'deposit' | 'withdrawal';
  onTargetTransferTypeChange: (type: 'deposit' | 'withdrawal') => void;
  inProgress?: boolean;
};

export const WidgetTransferSelector = ({
  targetTransferType,
  onTargetTransferTypeChange,
  inProgress,
}: WidgetTransferSelectorProps) => {
  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault();

    if (inProgress) {
      return;
    }

    if (targetTransferType === 'deposit') {
      onTargetTransferTypeChange('withdrawal');
    } else {
      onTargetTransferTypeChange('deposit');
    }
  };

  return (
    <div className="space-between relative flex w-full flex-row items-center justify-around">
      <span className="w-48 shrink-0 p-2 text-xl">EdgeWASM</span>
      <div className="flex flex-col items-center">
        <button
          className={`relative mb-2 w-20 grow-0 rounded-full bg-white p-4 ${
            inProgress ? 'animate-pulse' : ''
          }`}
          onClick={handleChange}
        >
          <IconArrow
            className={`h-12 w-12 fill-primary-600 ${
              targetTransferType === 'deposit' ? 'rotate-0' : 'rotate-180'
            } transition-transform`}
          />
        </button>
        <span
          className={`w-48 text-center text-xs text-grey-500 ${inProgress ? 'animate-pulse' : ''}`}
        >
          {inProgress ? 'Transfer in progress...' : 'Click to change direction'}
        </span>
      </div>
      <span className="w-48 shrink-0 p-2 text-xl">EdgeEVM</span>
    </div>
  );
};
