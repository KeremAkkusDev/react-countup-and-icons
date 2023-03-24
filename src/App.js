import logo from './logo.svg';
import './App.css';
import Sayac from './Sayac';
import {IoFishOutline} from 'react-icons/io5' 
import { IconContext } from 'react-icons/lib';
import {GiVillage} from 'react-icons/gi'
import {GiVikingHead} from 'react-icons/gi'
import {GoCalendar} from 'react-icons/go'

function App() {
  return (
    <div className="App">
      <IoFishOutline size="50px" color="red"/>
      <IconContext.Provider value={{color:"purple", size:"50px"}}>
        <GiVikingHead/>
        <GiVillage/>
        <GoCalendar/>
      </IconContext.Provider>
      <Sayac/>
    </div>
  );
}

export default App;
