import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const url = "https://jsonplaceholder.typicode.com/photos#";
  const [data, setData] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');


  async function fetchData() {

    try {
      const output = await fetch(`${url}`)
      const val = await output.json();
      setData(val);
    }
    catch (error) {
      console.log("Error aa gai bhaiiiiiiiiiiiii..")
    }
  }
  // console.log(data)
  useEffect(() => {
    fetchData();
  }, [])

  const filteredData = data.filter(photo => photo.title.toLowerCase().includes(searchTerm));
  return (
    <div className="flexbanao">
        <form>
          <input className='inputField' type="text" name="Text" placeholder='Search' id="search"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}/>
        </form>
        <div className='box'>
        
          {
            filteredData?.map((item)=>{
              return (<Card key={item.id} item={item}/>)
            })
          }
          </div>
    </div>
  );
}

export default App;
