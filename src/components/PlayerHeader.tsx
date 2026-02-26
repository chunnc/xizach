interface PlayerHeaderProps {
  players: string[];
  dealerIndex: number;
}

const PlayerHeader = ({ players, dealerIndex }: PlayerHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className="col-round">Lượt</th>
        {players.map((player, idx) => (
          <th key={idx} className={`col-player ${idx === dealerIndex ? 'col-dealer' : ''}`}>
            {idx === dealerIndex && <span className="dealer-badge">Nhà cái</span>}
            {player}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default PlayerHeader;
