import { useRef, useState } from 'react';
import { RefreshCcw, UserPlus, CirclePlus, EllipsisVertical } from 'lucide-react';
import ConfirmDialog from './ConfirmDialog.tsx';
import AddPlayerDialog from './AddPlayerDialog.tsx';
import InputScoreDialog from './InputScoreDialog.tsx';
import OptionsMenu from './OptionsMenu.tsx';
import SwapDealerDialog from './SwapDealerDialog.tsx';

interface ActionBarProps {
  players: string[];
  dealerIndex: number;
  onReset: () => void;
  onAddPlayer: (name: string) => void;
  onAddScore: (scores: number[]) => void;
  onSwapDealer: (index: number) => void;
}

const ActionBar = ({ players, dealerIndex, onReset, onAddPlayer, onAddScore, onSwapDealer }: ActionBarProps) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showAddPlayer, setShowAddPlayer] = useState<boolean>(false);
  const [showInputScore, setShowInputScore] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showSwapDealer, setShowSwapDealer] = useState<boolean>(false);
  const optionsBtnRef = useRef<HTMLButtonElement>(null);

  const handleConfirmReset = (): void => {
    onReset();
    setShowConfirm(false);
  };

  const handleAddPlayer = (name: string): void => {
    onAddPlayer(name);
    setShowAddPlayer(false);
  };

  const handleConfirmScore = (scores: number[]): void => {
    onAddScore(scores);
    setShowInputScore(false);
  };

  const handleConfirmSwapDealer = (index: number): void => {
    onSwapDealer(index);
    setShowSwapDealer(false);
  };

  return (
    <>
      <div className="action-bar">
        <button className="btn" title="Chơi lại" onClick={() => setShowConfirm(true)}>
          <RefreshCcw size={20} />
        </button>
        <button className="btn" title="Thêm người chơi" onClick={() => setShowAddPlayer(true)}>
          <UserPlus size={20} />
        </button>
        <button
          className="btn"
          title="Nhập điểm"
          onClick={() => setShowInputScore(true)}
          disabled={players.length === 0}
        >
          <CirclePlus size={20} />
        </button>
        <div className="options-anchor">
          <button
            ref={optionsBtnRef}
            className="btn"
            title="Tùy chọn"
            onClick={() => setShowOptions((v) => !v)}
          >
            <EllipsisVertical size={20} />
          </button>
          {showOptions && (
            <OptionsMenu
              onSwapDealer={() => setShowSwapDealer(true)}
              onClose={() => setShowOptions(false)}
            />
          )}
        </div>
      </div>

      {showConfirm && (
        <ConfirmDialog
          message="Bạn có chắc muốn chơi lại từ đầu không?"
          onConfirm={handleConfirmReset}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {showAddPlayer && (
        <AddPlayerDialog
          onConfirm={handleAddPlayer}
          onCancel={() => setShowAddPlayer(false)}
        />
      )}

      {showInputScore && (
        <InputScoreDialog
          players={players}
          dealerIndex={dealerIndex}
          onConfirm={handleConfirmScore}
          onCancel={() => setShowInputScore(false)}
        />
      )}

      {showSwapDealer && (
        <SwapDealerDialog
          players={players}
          dealerIndex={dealerIndex}
          onConfirm={handleConfirmSwapDealer}
          onCancel={() => setShowSwapDealer(false)}
        />
      )}
    </>
  );
};

export default ActionBar;
