
import './App.css';
import ClockiFyCard from './components/clockifycard/ClockiFyCard';
import Dashboard from './components/dashboard/Dashboard';
import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navBar/Navbar';
import Management from './components/statics/Management';
import Reports from './components/statics/Reports';
import SeeMore from './components/statics/SeeMore';
import Statics from './components/statics/Statics';
import TimeTracking from './components/timeTrackingApps/TimeTracking';
import TimeManage from './components/timemanage/TimeManage';


function App() {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />
        <Dashboard />
        <TimeManage />
        <Statics />
        <Reports />
        <Management />
        <SeeMore/>
        <TimeTracking/>
        <ClockiFyCard/>
      </div>
    </>
  );
}

export default App;
