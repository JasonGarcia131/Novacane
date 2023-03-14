import './App.css';
import { useEffect, useState } from 'react';
import { draftBeer } from './data';
import { bottledCanned } from './data';
import MenuCard from './MenuCard';

function App() {

  const [isSelected, setIsSelected] = useState({
    draftBeer: false,
    bottledBeer: false,
  });

  const mappedDraft = draftBeer.map((item, index) => <div key={index}><MenuCard itemName={item.itemName} price={item.price} description={item.description} /></div>)
  const mappedBottled = bottledCanned.map((item, index) => <div key={index}><MenuCard itemName={item.itemName} price={item.price} description={item.description} /></div>)


  return (
    <div className="App">
      <nav>
        <h1>
          Novacane logo
        </h1>
        <p>?</p>
      </nav>
      <main className='menuContainer'>
        <h2 onClick={() => setIsSelected(prevData => ({ ...prevData, draftBeer: !isSelected.draftBeer }))}>Draft Beer {isSelected.draftBeer ? <span>&uarr;</span> : <span>&#8595;</span>}</h2>
        <div className='flex pink'>
          {isSelected.draftBeer ? mappedDraft : ""}
        </div>
        <br />
          <h2 onClick={() => setIsSelected(prevData => ({ ...prevData, bottledBeer: !isSelected.bottledBeer }))}>Bottled & Canned Beer {isSelected.bottledBeer ? <span>&uarr;</span> : <span>&#8595;</span>}</h2>
          <div className='flex pink'>
            {isSelected.bottledBeer ? mappedBottled : ""}
          </div>
        <br/>
          <h2>Food</h2>
      </main>

    </div>
  );
}

export default App;
