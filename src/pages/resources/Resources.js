import React, { useEffect, useState } from "react";
import { Container, Stack, CircularProgress } from "@mui/material";
import AutoCompleteSearchBar from "../../components/searchBar/AutoCompleteSearchBar";
import ResourceSection from "./ResourceSection";
import HeadingPrimary from "../../components/UI/typography/HeadingPrimary";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/FirebaseConfig";
import Paragraph from "../../components/UI/typography/Paragraph";


const Resources = () => {

	useEffect(() => {
		document.title = "TekTool - Resources for Developers"
	}, [])


	// Getting resource data
	const [resourcesData, setReourcesData] = useState([])
	const [resourceDataLoading, setResourceDataLoading] = useState(true)

	async function getData() {
		const querySnapshot = await getDocs(collection(database, "resources"));
		let groupsArr = []
		querySnapshot.forEach((doc) => {
			let group = {}
			group[doc.id] = doc.data().categories;
			groupsArr.push(group)
		});
		setReourcesData(groupsArr)
		setResourceDataLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])




	// resourcesData.map((group, index) => {
	// 	const groupNames = Object.keys(group)[0];
	// 	const groupItems = Object.values(group)[0];
	// 	// const itemHeading = item.replace(/-/g, ' ')
	// 	console.log(groupNames, groupItems);
	// 	console.log([{ title: groupItems[index], category: groupNames[index] }]);

	// })

	let searchList = []
	resourcesData.map((data) => {
		const groupName = Object.keys(data)[0];
		data[groupName].map((item) => {
			const itemName = item.replace(/-/g, ' ');
			searchList.push({ title: itemName, category: groupName })
		})
	})



	// const searchList = [
	// 	{ title: "Free Stock Images and Videos", category: 'Media' },
	// 	{ title: "Free vector graphics", category: 'Media' },
	// 	{ title: 'Free Icons', category: 'Media' }
	// ];

	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='main'>
			<AutoCompleteSearchBar
				searchList={searchList}
			/>
			{
				resourceDataLoading ?
					<Stack sx={{
						alignItems: 'center',
						justifyContent: 'center', minHeight: '60vh'
					}}>
						<CircularProgress
							sx={{
								width: '70px !important',
								height: '70px !important',
								m: 3,
							}} />
					</Stack>
					: resourcesData.map(group => {
						const groupName = Object.keys(group)[0];
						const groupItems = Object.values(group)[0];
						return (
							<Stack sx={{ my: 4, py: 3, borderTop: '2px solid #eee' }} component='section' key={groupName}>
								<HeadingPrimary sx={{ alignSelf: 'center', mb: 0 }}>
									{groupName}
								</HeadingPrimary>
								{groupItems ? groupItems.map(item => {
									const itemUrl = `resources/${groupName}/${item}`;
									const itemHeading = item.replace(/-/g, ' ')
									return <ResourceSection
										key={itemHeading}
										fetchUrl={itemUrl}
										heading={itemHeading}
									/>
								}) : <Paragraph sx={{ textAlign: 'center' }}>
									There is no resource in this section...!
								</Paragraph>}
							</Stack>
						)
					})
			}
		</Container>
	);
};

export default Resources;
