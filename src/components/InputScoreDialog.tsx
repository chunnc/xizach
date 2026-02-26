import { useState } from 'react';

interface InputScoreDialogProps {
  players: string[];
  dealerIndex: number;
  onConfirm: (scores: number[]) => void;
  onCancel: () => void;
}

const InputScoreDialog = ({ players, dealerIndex, onConfirm, onCancel }: InputScoreDialogProps) => {
  // scores for non-dealer players only; dealer is derived
  const [scores, setScores] = useState<number[]>(players.map(() => 0));

  const adjust = (playerIdx: number, delta: number): void => {
    if (playerIdx === dealerIndex) return;
    setScores((prev) =>
      prev.map((s, i) => (i === playerIdx ? s + delta : s))
    );
  };

  // dealer score = 0 - sum of all other players
  const dealerScore = -scores.reduce((sum, s, i) => (i === dealerIndex ? sum : sum + s), 0);

  const getFinalScores = (): number[] =>
    scores.map((s, i) => (i === dealerIndex ? dealerScore : s));

  const handleConfirm = (): void => {
    onConfirm(getFinalScores());
  };

  const displayScore = (idx: number): number =>
    idx === dealerIndex ? dealerScore : scores[idx];

  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-box input-score-dialog" onClick={(e) => e.stopPropagation()}>
        <p className="dialog-message">Nhập điểm lượt mới</p>

        <div className="score-input-list">
          {players.map((player, idx) => {
            const isDealer = idx === dealerIndex;
            const value = displayScore(idx);
            return (
              <div key={idx} className={`score-input-row ${isDealer ? 'score-input-row--dealer' : ''}`}>
                <span className="score-input-name">
                  {player}
                  {isDealer && <span className="dealer-badge-inline">Nhà cái</span>}
                </span>
                <div className="score-input-controls">
                  <button
                    className="score-step-btn step-minus"
                    onClick={() => adjust(idx, -1)}
                    disabled={isDealer}
                  >−</button>
                  <span className="score-input-value">{value > 0 ? `+${value}` : value}</span>
                  <button
                    className="score-step-btn step-plus"
                    onClick={() => adjust(idx, 1)}
                    disabled={isDealer}
                  >+</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="dialog-actions">
          <button className="btn btn-ghost" onClick={onCancel}>Huỷ</button>
          <button className="btn btn-primary" onClick={handleConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
};

export default InputScoreDialog;
