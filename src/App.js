import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import LandingScreen from './screens/LandingScreen/LandingSreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
     <LandingScreen/>
     <LoginScreen />
    </div>
  );
}

export default App;
