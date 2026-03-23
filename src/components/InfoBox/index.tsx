import { cx } from '@jod/design-system';
import { JodInfo } from '@jod/design-system/icons';

export interface InfoboxItem {
  label: string;
  content: React.ReactNode;
}

export interface InfoBoxProps {
  items: InfoboxItem[];
  className?: string;
}

export const InfoBox = ({ items, className = '' }: InfoBoxProps) => {
  return (
    <div
      className={cx(
        'mt-8 flex flex-row gap-4 rounded bg-bg-gray-2 p-4 font-poppins text-heading-4-mobile text-primary-gray sm:text-heading-4',
        className,
      )}
    >
      <JodInfo className="text-secondary-1-dark-2" />
      <div className="flex flex-1 flex-col">
        {items.map((item) => (
          <div key={item.label} className="flex gap-2">
            <span>{item.label}</span>
            <span className="text-secondary-1-dark-2">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
