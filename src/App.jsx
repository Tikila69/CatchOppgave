import './App.css'
import Button from './Atoms/button.tsx';
import Divider from './Atoms/divider.tsx';
import Lable from './Atoms/Lable.tsx';

function App() {

  return (
	  <div className='flex flex-col self-center w-1/2 border-2'>
		  <Lable text="CATCH MEDIA AS DIGITAL" textColor='red' />
          <Divider  thickness='2px' color='gray' />
          <Button text="Click me" />
      </div>
  )
}

export default App
