// import logo from './logo.svg'; // oildel
import { useEffect, useState } from 'react';
import './App.css';
import { EventList } from './components';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])
  const [isSortedByEventDateAsc, setIsSortedByEventDateAsc] = useState(true)
  
	const sortingOptions = [
		{ label: 'Ascending', value: true },
		{ label: 'Descending', value: false }
	]

  const getData = async () => {
    const res = await axios.get('https://dev-26t476807dsa2ns.api.raw-labs.com/test')
    setData(res.data.data)
  }

  useEffect(()=>{
    getData()
  }, [])

  getData()

  return (
    <div className="App">
      <div className='eventlist-container'>
        <div className='sorter-container'>
          <div className='dropdown-label'>Sorted by event dates </div>
          <select
            className='select'
            value={isSortedByEventDateAsc}
            onChange={e => setIsSortedByEventDateAsc(e.target.value === 'true')}>
            {sortingOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <EventList events={data} isSortedByEventDateAsc={isSortedByEventDateAsc} />
      </div>
    </div>
  );
}

export default App;
