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

	return null;
};

export default Test;
