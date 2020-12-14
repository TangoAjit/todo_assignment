import './App.css';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RIghtSection/RightSection';
import Card from './components/common/Card/Card';

function App() {
  return (
    <div className="App">
      <Card Comp={LeftSection} />
      <Card Comp={RightSection} />
    </div>
  );
}

export default App;
