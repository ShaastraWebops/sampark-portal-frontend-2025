import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Subhead from './Components/Subhead';
import Container from './Components/Container';
import Container2 from './Components/Container2';
import Container3 from './Components/Container3';
import Container4 from './Components/Container4';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div className="App min-h-screen flex flex-col justify-between bg-[#7DF9FF]">
      <Navbar/>
     <Home/>
     <Subhead/>
     <Container/>
     <Container2/>
     <Container3/>
     <Container4/>
     <Footer/>
    </div>
  );
};

export default App;
