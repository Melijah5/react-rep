import './App.css';
//import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
// abstraction
import PopTartCard from './components/PopTartCard/PopTartCard'
// import ash from './assets/images/bigMac.jpg'
// import brown from './assets/images/brown.jpg'
import budLight from './assets/images/budLight.jpg'
//import {Component} from 'react'
import { useState } from 'react'
import PopTartForm from './components/PopTartForm/PopTartForm';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       chomps:0
//     }

//     this.chomp = this.chomp.bind(this);
//   }

const App = (props) => {

//   const [chomps, setChomps] = useState(0);


 
// const chomp = () => {
//   setChomps(chomps + 1);
//}


const [popTart, setPopTart] = useState({
  name : "",
  calories:0
})

const handleChange = (e) => {
  setPopTart({
      ...popTart,
      [e.target.name] : e.target.value
  })

}


const handleSubmit = (e) => {
  e.preventDefault();
//  console.log({
//      name: name,
//      calories: calories
//  })
// reset the forms
console.log(popTart);
//   setName("");
//  setCalories(0);

}
  return (
    
    <div className="jumbotron">
    {/* <h2 className="text-center text-danger">Total Bites {chomps}</h2>
    <div className="d-flex flex-wrap justify-content-evenly">
      <PopTartCard 
      name="Brown sugar & cinnamon" 
      calories={3000} 
      isFrosted= {true} 
      img={brown}
      chompIt={chomp}
      
      />
      <PopTartCard name="BigMac" 
      calories={1000} 
      isFrosted= {false} 
      img={ash}
      chompIt={chomp}
      />

<PopTartCard name="budLight" 
      calories={45} 
      isFrosted= {true} 
      img={budLight}
      chompIt={chomp}
      />
    </div>
    </div>
     </>
  );
 
} */}

<PopTartForm
  inputs = {popTart}
  handleInputChange={handleChange}
  handleFormSubmit={handleSubmit}
  />

<PopTartCard name = {popTart.name} 
      calories={popTart.calories} 
      isFrosted= {true} 
      img={budLight}
      bites= {4}
      
      />
</div>
  );
}



export default App;
