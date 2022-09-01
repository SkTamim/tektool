import { database } from "./FirebaseConfig";
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";

// const addData = async (character, css, dec, entity, hex, name, unicode) => {
// 	await addDoc(collection(database, "entities/html-entities/currency"), {
// 		character: character,
// 		css: css,
// 		dec: dec,
// 		entity: entity,
// 		hex: hex,
// 		name: name,
// 		unicode: unicode,
// 	});
// };

const Test = () => {
	// useEffect(() => {
	// 	fetch(
	// 		"https://tektool-e6931-default-rtdb.firebaseio.com/entity-codes/currency.json"
	// 	)
	// 		.then((responce) => responce.json())
	// 		.then((result) => {
	// 			result.forEach((data) => {
	// 				let character = data.character;
	// 				let css = data.css;
	// 				let dec = data.dec;
	// 				let entity = data.entity;
	// 				let hex = data.hex;
	// 				let name = data.name;
	// 				let unicode = data.unicode;
	// 				addData(character, css, dec, entity, hex, name, unicode);
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	const [data, setData] = useState([]);

	const getData = () => {
		const ref = collection(database, "entities/html-entities/currency");
		getDocs(ref)
			.then((response) => {
				let items = [];
				response.docs.map((item) => {
					// items.push(item.data());
					let myData = item.data();
					let finalData = { ...myData, id: item.id };
					items.push(finalData);
				});
				setData(items);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		// getData();
	}, []);
	console.log(data);

	return null;
};

export default Test;
