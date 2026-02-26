interface ScoreRowProps {
  roundIndex: number;
  scores: number[];
}

const ScoreRow = ({ roundIndex, scores }: ScoreRowProps) => {
  return (
    <tr>
      <td className="col-round">{roundIndex + 1}</td>
      {scores.map((score, idx) => (
        <td key={idx} className="col-score">
          {score > 0 ? `+${score}` : score}
        </td>
      ))}
    </tr>
  );
};

export default ScoreRow;
