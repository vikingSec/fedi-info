import * as React from 'react';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

import BodyStyle from './style'
function App() {
  return (
    <div className="App" style={BodyStyle}>
      <header className="App-header">
        </header>
        <div>

            <Header />
            <Footer/>

        </div>
    </div>
  );
}

export default App;
