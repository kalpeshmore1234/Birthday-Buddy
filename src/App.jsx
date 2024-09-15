import {data} from './data'
import { useState } from 'react';

const App = () => {

   const [people, setPeople] = useState(data)
 
   const clearAll = () => {
      setPeople([])
   }
  
  return(
    <div className='birthday-card'>
        <h1>{people.length} Birthdays today</h1>

        <div className='person-card'>
      {
        people.map((person) => {
            const {id, name, age, image} = person

            return(
              <div key={id} className='person'>
                 <div className='img-block'>
                   <img src={image} alt='person image' />
                 </div>
                    
                     <div className='name-age-block'>
                     <p className='name'>{name}</p>
                     <p className='age'>{age}</p>
                     </div>
              </div> 
            )
        })
      }
      </div>
      <button className='btn' onClick={() => clearAll()}>Clear All</button>
    </div>
  )
};
export default App;
