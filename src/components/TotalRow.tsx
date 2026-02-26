interface TotalRowProps {
  players: string[];
  rounds: number[][];
}

const TotalRow = ({ players, rounds }: TotalRowProps) => {
  const totals: number[] = players.map((_, pIdx) =>
    rounds.reduce((sum, round) => sum + (round[pIdx] ?? 0), 0)
  );

  const maxTotal = Math.max(...totals);

  return (
    <tfoot>
      <tr>
        <td className="col-round total-label">Tổng</td>
        {totals.map((total, idx) => (
          <td
            key={idx}
            className={`col-score total-score ${total === maxTotal ? 'top-score' : ''}`}
          >
            {total}
          </td>
        ))}
      </tr>
    </tfoot>
  );
};

export default TotalRow;
