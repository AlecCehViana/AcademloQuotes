import QuotesBox from './components/QuotesBox';
import './App.css';
import Presentation from './components/Presentation';
import {Typewriter}  from 'react-simple-typewriter'



function App() {
  return (
    <div className="App">
    <Presentation/>
    
            <Typewriter style={{ color: 'white', fontWeight: 'bold' }}
        
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={1000}
            words={['Developer', 'Designer', 'Animator' ]}     
                    
            />  
      
     <QuotesBox />
    </div>
  );
}

export default App;
