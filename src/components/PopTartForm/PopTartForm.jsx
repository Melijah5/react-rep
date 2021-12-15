//import {useState} from 'react'

const PopTartForm = ({inputs, handleInputChange, handleFormSubmit}) => {

    // const [name, setName] = useState("");
    // const [calories, setCalories] = useState(0);

    // const [popTart, setPopTart] = useState({
    //     name : "",
    //     calories:0
    // })

    // const handleChange = (e) => {
    //     setPopTart({
    //         ...popTart,
    //         [e.target.name] : e.target.value
    //     })

    // }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//       //  console.log({
//       //      name: name,
//       //      calories: calories
//       //  })
// // reset the forms
//     console.log(popTart);
//      //   setName("");
//       //  setCalories(0);
//  }

        return (
            <form className="col-5" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    onChange= {handleInputChange}
                    value= {inputs.name}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="calories">Calories:</label>
                    <input type="number" className="form-control" name="calories" 
                    onChange= {handleInputChange}
                    value= {inputs.calories}
                    />

                </div>
                <input type="submit" value="submit" className="btn btn-warning btn-outline-dark"/>

            </form>

        )
}

export default PopTartForm;