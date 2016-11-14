// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	animalName = 'Zielone słonie',
	animalNameUpperCased = animalName.toUpperCase(),
	textChangedAnimal = text.replace('Papugi', animalNameUpperCased);

console.log(textChangedAnimal.slice(0, textChangedAnimal.length/2));