import './App.css'
import Divider from './Atoms/divider';
import DropdownCard from './Atoms/dropdownCard';
import Lable from './Atoms/lable';
import Searchbar from './Molecules/Searchbar';

function App() {

  return (
    <div className='flex flex-col items-center h-screen' style={{backgroundColor: "#1f232B"}}>
      <div className='flex flex-col items-center w-1/2 m-2'>
        <DropdownCard text='CATCH MEDIA AS DIGITAL' color='white' isLeader >
          <Lable text="DESIGN" color='white' background={true} />
          <Lable text="MARKEDSFØRING" color='white' background={true} />
          <Divider color='#32363f' />
          <Searchbar placeholder="Søk..." color='white' />
          <Lable text="ANNEN BEDRIFT MED FLERE AVD" color='white' />
          <Lable text="AVDELING 1 (LEDER)" color='white' background={true} isLeader />
          <Lable text="AVDELING 2" color='white' background={true} />
          <Divider color='#32363f' />
          <Lable text="BEDRIFT ÉN AVD MEKANIKER" color='white' background={true} />
          <Divider color='#32363f' />
          <Lable text="BEDRIFT KUN DEFAULT" color='white' background={true} />
          
        </DropdownCard>
      </div>
    </div>
  )
}

export default App
