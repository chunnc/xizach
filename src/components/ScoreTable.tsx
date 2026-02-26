import PlayerHeader from './PlayerHeader.tsx';
import ScoreRow from './ScoreRow.tsx';
import TotalRow from './TotalRow.tsx';

interface ScoreTableProps {
  players: string[];
  rounds: number[][];
  dealerIndex: number;
}

const ScoreTable = ({ players, rounds, dealerIndex }: ScoreTableProps) => {
  if (players.length === 0) {
    return (
      <div className="table-wrapper">
        <p className="empty-state">Chưa có người chơi. Hãy thêm người chơi để bắt đầu!</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="score-table">
        <PlayerHeader players={players} dealerIndex={dealerIndex} />
        <tbody>
          {rounds.length === 0 ? (
            <tr>
              <td className="empty-state" colSpan={players.length + 1}>
                Chưa có lượt nào. Hãy nhập điểm để bắt đầu!
              </td>
            </tr>
          ) : (
            rounds.map((round, idx) => (
              <ScoreRow key={idx} roundIndex={idx} scores={round} />
            ))
          )}
        </tbody>
        {rounds.length > 0 && <TotalRow players={players} rounds={rounds} />}
      </table>
    </div>
  );
};

export default ScoreTable;
