import { useEffect, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface OptionsMenuProps {
  onSwapDealer: () => void;
  onClose: () => void;
}

const OptionsMenu = ({ onSwapDealer, onClose }: OptionsMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div className="options-menu" ref={ref}>
      <button
        className="options-menu-item"
        onClick={() => {
          onClose();
          onSwapDealer();
        }}
      >
        <ArrowLeftRight size={15} />
        Đổi cái
      </button>
    </div>
  );
};

export default OptionsMenu;

