import {
	collection,
	getDocs,
	query,
	limit,
	orderBy,
	setDoc,
	doc,
} from "firebase/firestore";
import { database } from "../firebase/FirebaseConfig";
export const getResourceData = (data, isSuccess) => {
	let url = "";

	if (data.category == "Free images and videos") {
		url = "resources/media/images-videos";
	} else if (data.category == "Free vector graphics") {
		url = "resources/media/vector-graphics";
	} else if (data.category == "Free icons") {
		url = "resources/media/icons";
	}

	// Add data to firebase
	const addData = async (dataObject) => {
		await setDoc(doc(database, url, dataObject.name), dataObject);
	};

	// Get last document ID
	const databaseReference = collection(database, url);
	const getLastId = (queries) => {
		const initialQuery = query(databaseReference, ...queries);
		getDocs(initialQuery)
			.then((response) => {
				let currentDataId = +response.docs[0].data().id + 1;
				currentDataId = String(currentDataId);
				let checkZero = currentDataId.includes(0) || currentDataId.length >= 2;
				if (!checkZero) {
					currentDataId = "0" + currentDataId;
				}

				const mainData = { ...data, id: currentDataId };
				delete mainData.category;
				delete mainData.resourceImage;
				addData(mainData);
				isSuccess(true)
			})
			.catch((err) => {
				console.log("Getting error form getLastId function" + err);
			});
	};
	getLastId([limit(1), orderBy("id", "desc")]);
};


