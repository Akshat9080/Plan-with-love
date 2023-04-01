import React,{useState} from "react";
import data from './data';
import Tours from './components/Tours';


const App = () => {

  const[tours,setTours] = useState(data);

  //function for removing tour from the card 
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id); //after removing tour id then it filter
    setTours(newTours); //now it update the UI by setTours with the help of useState
  }

  //function for refresh button
  function refreshHandler(){
    setTours(data); //after clicking on refreshing button it update the UI i.e. it shows all the data again
  }

  //another UI if the no tour then it will be render
  if(tours.length===0){
    return (
      <div className="page2">
        <h1 className="title2">No Tours Left</h1>
        <button className="btn-refresh" onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }

  return <div>
    {/* make a Tours component and passing the data by using props and also removetour function is calling in another component thats why we have to pass another props of removetour component. */}
    <Tours tours={tours} removeTour = {removeTour}></Tours> 
  </div>;
};

export default App;
