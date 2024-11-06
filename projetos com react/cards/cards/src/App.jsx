
import './App.css'

import Comp2 from './componentes/Comp2'


function App() {
  return (
    <>
      <div className="container">
      <div className="row offset-2">
        {Array.from({ length: 8 }, (_, i) => (
          <div className="col-3" key={i}>
            <Comp2 />
          </div>
        ))}
      </div>
    </div>
      
    </>
  );
}

export default App
