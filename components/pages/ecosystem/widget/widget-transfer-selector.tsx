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

    if (targetTransferType === 'deposit') {
      onTargetTransferTypeChange('withdrawal');
    } else {
      onTargetTransferTypeChange('deposit');
    }
  };

  return (
    <div className="space-between flex w-full flex-row items-center justify-around">
      <span className="w-48 p-2 text-xl">EdgeWASM</span>
      <button
        className={`rounded-full bg-white p-4 ${inProgress ? 'animate-pulse' : ''}`}
        onClick={handleChange}
      >
        <IconArrow
          className={`h-12 w-12 fill-primary-600 ${
            targetTransferType === 'deposit' ? 'rotate-0' : 'rotate-180'
          } transition-transform`}
        />
      </button>
      <span className="w-48 p-2 text-xl">EdgeEVM</span>
    </div>
  );
};
