import { useEffect, useState } from 'react';
import './App.css';
import { EventList } from './components';
import axios from 'axios';
import mockData from './mockData.json'

const App = () => {
  const [data, setData] = useState([])
  const [isSortedByEventDateAsc, setIsSortedByEventDateAsc] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

	const sortingOptions = [
		{ label: 'Ascending', value: true },
		{ label: 'Descending', value: false }
	]

  const getData = async () => {
    try{
      setIsLoading(true)
      const res = await axios.get('https://dev-26t476807dsa2ns.api.raw-labs.com/test')
      setData(res.data.data)
      setIsLoading(false)
    }catch(err){
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div className="App">
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
      <div className='eventlist-container'>
        <p>Case: with JSON mock data</p>
        <EventList events={mockData.data} isSortedByEventDateAsc={isSortedByEventDateAsc} isLoading={false} />
      </div>

      <div className='eventlist-container'>
        <p>Case: with mock api</p>
        <EventList events={data} isSortedByEventDateAsc={isSortedByEventDateAsc} isLoading={isLoading}/>
      </div>

      <div className='eventlist-container'>
        <p>Case: empty data</p>
        <EventList events={[]} isSortedByEventDateAsc={isSortedByEventDateAsc} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
