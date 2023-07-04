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

  let messageText = 'Click to change direction';
  if (inProgress) {
    if (targetTransferType === 'withdrawal') {
      messageText = 'Withdrawal in progress. Make sure to confirm steps of the transaction.';
    } else {
      messageText = 'Deposit in progress...';
    }
  }

  return (
    <div className="relative grid h-24 grid-cols-2">
      <div className="mr-8 mt-10 p-2 text-center text-xl">EdgeWASM</div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="flex flex-col items-center">
          <span
            className={`w-72 text-center text-xs text-grey-500 ${
              inProgress ? 'animate-pulse' : ''
            }`}
          >
            {messageText}
          </span>
          <button
            className={`relative mt-2 w-20 grow-0 rounded-full bg-white p-4 transition-all hover:scale-110 ${
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
        </div>
      </div>
      <div className="ml-8 mt-10 p-2 text-center text-xl">EdgeEVM</div>
    </div>
  );
};
