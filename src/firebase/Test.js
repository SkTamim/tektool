import { database } from "./FirebaseConfig";
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";

import React, { useEffect, useState } from "react";

const Test = () => {
	const [data, setData] = useState([]);

	// const getData = () => {
	// 	const ref = collection(database, "entities/html-entities/currency");
	// 	getDocs(ref)
	// 		.then((response) => {
	// 			let items = [];
	// 			response.docs.map((item) => {
	// 				let myData = item.data();
	// 				let finalData = { ...myData, id: item.id };
	// 				items.push(finalData);
	// 			});
	// 			setData(items);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	useEffect(() => {
		// getData();
	}, []);
	// console.log(data);

	const addData = async (
		category,
		emoji,
		html,
		name,
		order,
		shortname,
		unicode
	) => {
		await addDoc(collection(database, "entities/emoji-entities/vehicle"), {
			category: category,
			emoji: emoji,
			html: html,
			name: name,
			order: order,
			shortname: shortname,
			unicode: unicode,
		});
	};

	useEffect(() => {
		// fetch(
		// 	"https://tektool-e6931-default-rtdb.firebaseio.com/emoji-entities/vehicle.json"
		// )
		// 	.then((responce) => responce.json())
		// 	.then((result) => {
		// 		result.forEach((data) => {
		// 			let category = data.category;
		// 			let emoji = data.emoji;
		// 			let html = data.html;
		// 			let name = data.name;
		// 			let order = data.order;
		// 			let shortname = data.shortname;
		// 			let unicode = data.unicode;
		// 			addData(category, emoji, html, name, order, shortname, unicode);
		// 		});
		// 		})
		// 		.catch((err) => console.log(err));
	}, []);

	return null;
};

export default Test;
