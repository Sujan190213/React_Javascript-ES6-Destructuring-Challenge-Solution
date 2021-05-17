// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./pactice";
// import animals from "./data";

// One way

// const [cat, dog] = animals;
// console.log("Animal Name : " + cat.name + " & Sound: " + cat.sound);
// console.log("Animal Name : " + dog.name + " & Sound: " + dog.sound);

// Problems

// const [cat, dog] = animals;
// const {cName, cSound} = cat;  // cName & cSound returns undefined because here cat is an object so the property of cat object must be matched accordingly
// const {dName, dSound} = dog;  // dName & dSound returns undefined because here cat is an object so the property of cat object must be matched accordingly
// // This things are only restricted for object propertise only. It is not restricted for array propertise
// console.log("Animal Name : " + cName + " & Sound: " + cSound);
// console.log("Animal Name : " + dName + " & Sound: " + dSound);

// const [cat, dog] = animals;
// const { name, sound } = cat; // cName & cSound returns undefined because here cat is an object so the property of cat object must be matched accordingly
// Identifier 'name' has already been declared (21:7)
// const { name, sound } = dog; // Identifier 'name' has already been declared (21:7)
// // This things are only restricted for object propertise only. It is not restricted for array propertise
// console.log("Animal Name : " + name + " & Sound: " + sound);
// console.log("Animal Name : " + name + " & Sound: " + sound);

// Solution

// const [cat, dog] = animals;
// const { name: catName, sound: catSound } = cat; // 'name' rename with 'cName' & 'sound' renamed with 'cSound'
// const { name: dogName, sound: dogSound } = dog; // 'name' renamed with 'dName' & 'sound' renamed with 'dSound'
// // This things are only restricted for object propertise only. It is not restricted for array propertise
// console.log("Animal Name : " + catName + " & Sound: " + catSound);
// console.log("Animal Name : " + dogName + " & Sound: " + dogSound);

// Demo

// const [honda, tesla] = cars;
// console.log(honda.model);
// console.log(honda.speedStats.topSpeed)
// console.log(honda.coloursByPopularity[0]);

// --------------------------------------------------------------
// Final Try
// const [honda, tesla] = cars;

// // First Object

// // console.log(honda);
// const { model, coloursByPopularity, speedStats } = honda;
// // console.log(model);
// // console.log(coloursByPopularity);
// // console.log(speedStats);

// const [colour1, colour2] = coloursByPopularity;
// // console.log(colour1);
// // console.log(colour2);

// const { topSpeed, zeroToSixty } = speedStats;
// console.log(topSpeed);
// console.log(zeroToSixty);

// Second Object

// console.log(tesla);
// Identifier 'name' has already been declared (21:7)
// const { model, coloursByPopularity, speedStats } = tesla;

// #############################################################

const [honda, tesla] = cars;
// console.log(honda);
// Console Output

// {model: "Honda Civic", coloursByPopularity: Array(2), speedStats: Object}
// model: "Honda Civic"
// coloursByPopularity: Array(2)
// 0: "black"
// 1: "silver"
// speedStats: Object
// topSpeed: 140
// zeroToSixty: 8.5

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
