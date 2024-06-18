import {useState} from 'react';
import './App.css'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  const handleClick = () => {
    
  }
  const featuredPup = puppies.find(pup => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <div>
        {puppies.map(puppy => {
          return <p onClick={() => {
            console.log("Puppy id: " + puppy.id);
            setFeatPupId(puppy.id);
            handleClick();
          }} key={puppy.id}>{puppy.name}</p>
        })}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
