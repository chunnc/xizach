interface SwapDealerDialogProps {
  players: string[];
  dealerIndex: number;
  onConfirm: (index: number) => void;
  onCancel: () => void;
}

const SwapDealerDialog = ({ players, dealerIndex, onConfirm, onCancel }: SwapDealerDialogProps) => {
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <p className="dialog-message">Chọn nhà cái mới</p>
        <div className="player-select-list">
          {players.map((player, idx) => (
            <button
              key={idx}
              className={`player-select-item ${idx === dealerIndex ? 'player-select-item--active' : ''}`}
              onClick={() => onConfirm(idx)}
            >
              {player}
              {idx === dealerIndex && <span className="dealer-badge-inline">Nhà cái</span>}
            </button>
          ))}
        </div>
        <div className="dialog-actions">
          <button className="btn btn-ghost" onClick={onCancel}>Huỷ</button>
        </div>
      </div>
    </div>
  );
};

export default SwapDealerDialog;

