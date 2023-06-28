// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { EventList } from './components';
import mockData from './mockData.json'
function App() {
  const [isSortedByEventDateAsc, setIsSortedByEventDateAsc] = useState(true)
	const sortingOptions = [
		{ label: 'Ascending', value: true },
		{ label: 'Descending', value: false }
	]

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
        <EventList events={mockData.data} isSortedByEventDateAsc={isSortedByEventDateAsc} />
      </div>
    </div>
  );
}

export default App;
