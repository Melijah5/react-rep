import React, { useState } from "react";

// class PopTartCard extends Component {

//     constructor (props){
//         super(props);
  
//         //inheritance
//         this.state = {
//           bites: 0
  
//         }


//       }

const PopTartCard = ({name, calories , isFrosted, img , chompIt}) => {
    const [bites, setBites] = useState(0);


const handleBite = () => {
    setBites(bites + 1);
    chompIt();
        // this.setState({bites:this.state.bites + 1})
        // this.props.chompIt();
    }

    return (

            <div className="card col-3 text-center">
                <img src={img} alt={name} className="card-img-top" />
                <div className="card-Body">
                    <h1 className="card-title">{name}</h1>
                    <p className="card-text">Calories: {calories}</p>
                    <p className="card-text">IsFrosted: { isFrosted ? "yes" : "no"}</p>
                    <p className="card-text">## of bites: {bites}</p>
                    <button onClick= {() => handleBite() } >Bite</button>
                </div>
            </div>
        );
        
    }


export default PopTartCard;
