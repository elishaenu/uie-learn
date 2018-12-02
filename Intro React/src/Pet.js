// import React from "react";

// const Pet = props => {
//   // return React.createElement("div", {}, [
//   //   React.createElement("h1", {}, props.name),
//   //   React.createElement("h2", {}, props.animal),
//   //   React.createElement("h2", {}, props.breed)
//   // ]);

//   	return(
//   		<div>
// 	  		<h1>Name : {props.name}</h1>
// 	  		<h2>Animal : {props.animal}</h2>
// 	  		<h2>Breed : {props.breed}</h2>
// 	  		<h2>Age : {props.age}</h2>
//   		</div>
//   	);

// 	// return(
// 	// 	<div>
// 	// 		<h1>Adopt Me!</h1>
// 	// 		{this.state.pets.map(pet => {
// 	// 			let breed;
// 	// 			if(Array.isArray(pet.breeds.breed)){
// 	// 				breed=pet.breeds.breed;
// 	// 			}
// 	// 			else
// 	// 			{
// 	// 				breed = pet.breeds.breed;
// 	// 			}
// 	// 			return(
// 	// 				<Pet
// 	// 					animal={pet.animal}
// 	// 					key={pet.id}
// 	// 					name={pet.name}
// 	// 					breed={breed}
// 	// 				/>
// 	// 			);
// 	// 		})}
// 	// 	</div>
// 	// );
// };


// export default Pet;

import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location,id} = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return (
    	<Link to={`/details/${id}`} className="pet">
    		<div className="image-container">
	          	<img src={photos[0].value} alt={name} />
	        </div>
	        <div className="info">
	          	<h1>{name}</h1>
	          	<h2>{`${animal} — ${breed} — ${location} - ${id}`}</h2>
	        </div>
    	</Link>
    );
  }
}

export default Pet;