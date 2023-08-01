

import "./App.css";

function App() {
  return (
   <div className="App">
        <div className="body_container">
          <div className="search-container">
          
          <input type="search"placeholder="Search..." />
         
          
          </div>
       <br></br>
          <div className="Booking_group">
           
            <div className="Booking1_group">
             <p1>Booking id - #123<br></br><br></br>
             Customer Details--<br></br>
             Pickup Address-</p1>
             </div>
             <div className="Booking2_group">
          <div className="select">
            <select id ="select">
            <option value="Action">Action</option>
            <option value="Accept">Accept</option>
            <option value="Decline">Decline</option>
            
            </select>
            
            </div>
            <div className="Booking3_group">
            <button id="button">Upadte</button>
          </div>
          </div>
          
          </div>

          <br></br><br></br>

          <div className="Booking_group">
           
            <div className="Booking1_group">
             <p1>Booking id - #123<br></br><br></br>
             Customer Details--<br></br>
             Pickup Address-</p1>
             </div>
             <div className="Booking2_group">
          <div className="select">
            <select id ="select">
            <option value="Action">Action</option>
            <option value="Accept">Accept</option>
            <option value="Decline">Decline</option>
            
            </select>
            
            </div>
            <div className="Booking3_group">
            <button id="button">Upadte</button>
          </div>
          </div>
          
          </div>
          
        </div>
        
   </div>
  );
}

export default App;
