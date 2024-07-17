import { TestButton } from 'trip-recommender';
import './App.css'
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    console.log('dddd')
  },[])
  
  const onClick = () => {
    console.log('TEST BUTTON CLICK!!!');
  }
  const label = 'TEST BUTTON';
  
  return (
    <>
      <TestButton label={label} onClick={onClick}/>
    </>
  )
}

export default App