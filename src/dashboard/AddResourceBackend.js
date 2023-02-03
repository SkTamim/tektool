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
import { storage } from "../firebase/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Compressor from 'compressorjs';


export const getResourceData = (data, isSuccess) => {
	let url = "";
	let mainData;

	if (data.category === "Free images and videos") {
		url = "resources/media/images-videos";
	} else if (data.category === "Free vector graphics") {
		url = "resources/media/vector-graphics";
	} else if (data.category === "Free icons") {
		url = "resources/media/icons";
	}

	// Add data to firebase
	const addData = async (dataObject) => {
		await setDoc(doc(database, url, dataObject.name), dataObject);
	};

	// Add image to firebase storage function
	const addImage = (image) => {
		const filePathRef = ref(storage, `${url}/${image.name}`)
		uploadBytes(filePathRef, image).then(() => {
			console.log("image uploaded");

			// Getting image url form firebase strage and adding the url to the main data Object and Send data finally 🤩
			getDownloadURL(ref(storage, filePathRef))
				.then((url) => {

					// Add data to firestore
					mainData = { ...mainData, thumbnail: url }
					addData(mainData);

					// Send Succsedd massege
					isSuccess(true)
				})
				.catch((error) => {
					console.log("Getting error form getDownloadURL function " + error);
				});
		})
	}

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

				mainData = { ...data, id: currentDataId };
				delete mainData.category;
				delete mainData.resourceImage;

				// Compress the image=============
				new Compressor(data.resourceImage, {
					quality: 0.2,
					success(compressedImg) {
						// Add Compressed Image to firebase storage
						addImage(compressedImg)
					},
					error(err) {
						console.log("Getting error form Compressor Class " + err);
					},
				});
			})
			.catch((err) => {
				console.log("Getting error form getLastId function" + err);
			});
	};
	getLastId([limit(1), orderBy("id", "desc")]);
};


