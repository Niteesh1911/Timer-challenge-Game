import Player from './components/Player.jsx';
import Timerchallenge from './components/TimerChallenge.jsx';
import ResultModal from './components/ResultModal.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <Timerchallenge title="Easy" targetTime={1} />
      <Timerchallenge title="Not Easy" targetTime={5} />
      <Timerchallenge title="Getting tough" targetTime={10} />
      <Timerchallenge title="Pro" targetTime={15} />
    
      </div>
    </>
  );
}

export default App;
