import React from "react";
import pf, {ANIMALS} from 'petfinder-client';

const petfinder = pf({
  key: '2d9632620d9266d22f49bdc124743276',
  secret: process.env.API_SECRET
});

class Search extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds:[]
  };
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    },
    this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  getBreeds() {
    if (this.state.animal) { //KALAU ANIMALNYA SUDAH DIPILIH
      petfinder.breed.list({ animal: this.state.animal }).then(data => { //DPTKAN SEMUA BREED LIST, YANG ANIMALNYA TELAH DIPILIH
          if (data.petfinder && data.petfinder.breeds && Array.isArray(data.petfinder.breeds.breed)) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input id="location" onChange={this.handleLocationChange} value={this.state.location} /*bikin gak bisa diganti value nya*/
            placeholder="Location"/>
        </label>

        <label htmlFor="animal">
          Animal
          <select id="animal" value={this.state.animal} onChange={this.handleAnimalChange} onBlur={this.handleAnimalChange}>
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" value={this.state.breed} onChange={this.handleBreedChange} onBlur={this.handleBreedChange} disabled={!this.state.breeds.length}>
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default Search;