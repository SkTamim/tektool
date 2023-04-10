import {
	collection,
	getDocs,
	query,
	limit,
	orderBy,
	setDoc,
	doc,
	arrayUnion,
	updateDoc
} from "firebase/firestore";
import { database } from "../firebase/FirebaseConfig";
import { storage } from "../firebase/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Compressor from 'compressorjs';


export const getResourceData = (data, isSuccess) => {
	let url = `resources/${data.category}`;
	let mainData;

	// Add data to firebase
	const addData = async (dataObject) => {
		await setDoc(doc(database, url, dataObject.name), dataObject);

		// Adding categories List
		let categoriesUrl;
		categoriesUrl = url.split('/');
		categoriesUrl.pop();
		categoriesUrl = categoriesUrl.toString().replace(',', '/');
		await updateDoc(doc(database, categoriesUrl), { categories: arrayUnion(dataObject.name) });

		if (!data.resourceImage) {
			// Send Succsed massege
			isSuccess(true);
		}
	};

	// Add image to firebase storage function
	const addImage = (image) => {
		const filePathRef = ref(storage, `${url}/${image.name}`);
		uploadBytes(filePathRef, image).then(() => {
			console.log("image uploaded");

			// Getting image url form firebase strage and adding the url to the main data Object and Send data finally 🤩
			getDownloadURL(ref(storage, filePathRef))
				.then((url) => {

					// Add data to firestore
					mainData = { ...mainData, thumbnail: url };
					addData(mainData);

					// Send Succsed massege
					isSuccess(true);
				})
				.catch((error) => {
					console.log("Getting error form getDownloadURL function " + error);
					isSuccess(false);
				});
		});
	};

	// Get last document ID
	const databaseReference = collection(database, url);
	const getLastId = (queries) => {
		const initialQuery = query(databaseReference, ...queries);
		getDocs(initialQuery)
			.then((response) => {
				if (!response.empty) {
					let currentDataId = +response.docs[0].data().id + 1;
					currentDataId = String(currentDataId);
					let checkZero = currentDataId.includes(0) || currentDataId.length >= 2;
					if (!checkZero) {
						currentDataId = "0" + currentDataId;
					}

					mainData = { ...data, id: currentDataId };
					delete mainData.category;
					delete mainData.resourceImage;

					if (data.resourceImage) {
						// Compress the image=============
						new Compressor(data.resourceImage, {
							quality: 0.2,
							success(compressedImg) {
								// Add Compressed Image to firebase storage
								addImage(compressedImg);
							},
							error(err) {
								console.log("Getting error form Compressor Class " + err);
								isSuccess(false);
							},
						});
					} else {
						mainData = { ...data, id: currentDataId };
						delete mainData.category;
						addData(mainData);
					}
				} else {
					mainData = { ...data, id: '01' };
					delete mainData.category;
					delete mainData.resourceImage;

					if (data.resourceImage) {
						// Compress the image=============
						new Compressor(data.resourceImage, {
							quality: 0.2,
							success(compressedImg) {
								// Add Compressed Image to firebase storage
								addImage(compressedImg);
							},
							error(err) {
								console.log("Getting error form Compressor Class " + err);
								isSuccess(false);
							},
						});
					} else {
						mainData = { ...data, id: '01' };
						delete mainData.category;
						addData(mainData);
					}
				}
			})
			.catch((err) => {
				console.log("Getting error form getLastId function" + err);
				isSuccess(false);
			});
	};
	getLastId([limit(1), orderBy("id", "desc")]);
};


