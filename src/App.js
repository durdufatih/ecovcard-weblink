import './App.css';
import BusinessCard from './components/businesscard/BusinessCard';
import backgroundImage from './images/backgroung.jpg';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="card">
    <div className="card-content">
    <BusinessCard
        backgroundImage={backgroundImage}
        logo={logo}
        name="John Doe"
        title="Founder & CEO"
      />
    </div>
  </div>
    
    </div>
  );
}

export default App;
