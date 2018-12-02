import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import pf from "petfinder-client";
import Results from "./Results";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import Searchparams from "./SearchParams";

const petfinder = pf({
  key: '2d9632620d9266d22f49bdc124743276',
  secret: process.env.API_SECRET
});

class App extends React.Component{
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     pets: []
  //   };
  // }

  // componentDidMount() {
  //   petfinder.pet
  //     .find({ location: "Seattle, WA", output: "full" })
  //     .then(data => {
  //       let pets;
  //       if (data.petfinder.pets && data.petfinder.pets.pet) {
  //         if (Array.isArray(data.petfinder.pets.pet)) {
  //           pets = data.petfinder.pets.pet;
  //         } else {
  //           pets = [data.petfinder.pets.pet];
  //         }
  //       } else {
  //         pets = []
  //       }
  //       this.setState({
  //         pets
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <Searchparams path="/search-params" />
        </Router>
      </div>
    );
  }

  // handleTitlClick(){
  //   alert("you clicked the title");
  // }
  // render(){
  //   return React.createElement("div", {}, [
  //       React.createElement("h1", { onClick : this.handleTitlClick}, "Adopt Me!"),
  //       React.createElement(Pet, {
  //         name: "Luna",
  //         animal: "Dog",
  //         breed: "Havanese"
  //       }),
  //       React.createElement(Pet, {
  //         name: "Pepper",
  //         animal: "Bird",
  //         breed: "Cockatiel"
  //       }),
  //       React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  //     ]);
  // }
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))

export default App;