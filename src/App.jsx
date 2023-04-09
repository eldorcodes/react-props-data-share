import { useState } from 'react';
import './App.css';
import Child from './components/Child';
import SIbling from './components/SIbling';

function App() {
  const [data,setData] = useState([])

  function onChangeData(item){
    setData([...data,item])
    data.reverse()
  }
  function updateData(t){
    setData([...data,t])
  }

  return (
    <div>
      <div className='parent'>
        <h1>Parent</h1>
        <input onChange={(e) => updateData(e.target.value)} type="text" placeholder='Add item' />
        <div className="wrap">
        {
            data?.map((item,index) => (
                <div key={index}>
                    <h1>{item}</h1>
                </div>
            ))
        }
        </div>
      </div>
      <div className="App">
      <Child 
      data={data} 
      onChangeData={onChangeData}
      />
      <SIbling 
      data={data} 
      onChangeData={onChangeData}
      />
      </div>
    </div>
  );
}

export default App;
