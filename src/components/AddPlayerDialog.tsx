import { useState } from 'react';

interface AddPlayerDialogProps {
  onConfirm: (name: string) => void;
  onCancel: () => void;
}

const AddPlayerDialog = ({ onConfirm, onCancel }: AddPlayerDialogProps) => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (): void => {
    const trimmed = name.trim();
    if (trimmed) {
      onConfirm(trimmed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') onCancel();
  };

  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <p className="dialog-message">Nhập tên người chơi mới</p>
        <input
          className="dialog-input"
          type="text"
          placeholder="Tên người chơi..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className="dialog-actions">
          <button className="btn btn-ghost" onClick={onCancel}>
            Huỷ
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlayerDialog;

