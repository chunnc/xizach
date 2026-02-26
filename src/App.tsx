import ScoreTable from './components/ScoreTable.tsx';
import ActionBar from './components/ActionBar.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import './App.css';

function App() {
  const [players, setPlayers] = useLocalStorage<string[]>('xizach_players', []);
  const [rounds, setRounds] = useLocalStorage<number[][]>('xizach_rounds', []);
  const [dealerIndex, setDealerIndex] = useLocalStorage<number>('xizach_dealer', 0);

  const handleReset = (): void => {
    setPlayers([]);
    setRounds([]);
    setDealerIndex(0);
  };

  const handleAddPlayer = (name: string): void => {
    setPlayers((prev) => [...prev, name]);
    setRounds((prev) => prev.map((round) => [...round, 0]));
  };

  const handleAddScore = (scores: number[]): void => {
    setRounds((prev) => [...prev, scores]);
  };

  const handleSwapDealer = (index: number): void => {
    setDealerIndex(index);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-title">
          <img src="/logo.png" alt="logo" className="app-logo" />
          <h1>Xì Dzách</h1>
        </div>
        <p className="app-subtitle">Theo dõi điểm số từng lượt chơi</p>
      </header>

      <main className="app-main">
        <ScoreTable players={players} rounds={rounds} dealerIndex={dealerIndex} />
      </main>

      <ActionBar
        players={players}
        dealerIndex={dealerIndex}
        onReset={handleReset}
        onAddPlayer={handleAddPlayer}
        onAddScore={handleAddScore}
        onSwapDealer={handleSwapDealer}
      />
    </div>
  );
}

export default App;
