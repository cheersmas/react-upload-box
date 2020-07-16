import React, {useState, useEffect, useCallback, useRef} from 'react';
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);
  let timer = useRef();
  const update = useCallback(
    () => {
      if (timer.current) clearInterval(timer.current);
      setPercentage(prev => prev + 1);
    },[]);

  const pause = useCallback(
    () => {
      clearInterval(timer.current);
    },[]);

  const cancel = useCallback(
    () => {
      setPercentage(0);
      clearInterval(timer.current);
    },[]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (percentage === 100) {
        clearInterval(timer.current);
        return
      }
      update();
    }, 100);
    return () => clearInterval(timer.current); 
  }, [percentage, update]);

  return (
    <div className="App">
      <button onClick={update}>Update</button>
      <button onClick={pause}>Pause Upload</button>
      <button onClick={cancel}>Cancel Upload</button>
      <span>{percentage}</span>
    </div>
  );
}

export default App;
