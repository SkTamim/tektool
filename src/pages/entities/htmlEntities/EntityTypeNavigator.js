import React from "react";
import { makeStyles } from "@mui/styles";
import MyChip from "../../../components/UI/chip/MyChip";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const useStyles = makeStyles({
	root: {
		padding: "2rem .5rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
	},
	swiperSlide: {
		display: "flex",
		justifyContent: "center",
	},
});

const EntityTypeNavigator = () => {
	const classes = useStyles();
	return (
		<nav className={classes.root}>
			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					326: {
						slidesPerView: 2,
					},
					420: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 4,
					},
					843: {
						slidesPerView: 5,
					},
					1100: {
						slidesPerView: 7,
					},
				}}
				className={classes.swiper}
			>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Symbols' to='/symbols' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Arrows' to='/arrows' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Currency' to='/currency' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Punctuation' to='/punctuation' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Math' to='/math' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Numbers' to='/numbers' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Letters' to='/letters' />
				</SwiperSlide>
			</Swiper>
		</nav>
	);
};

export default EntityTypeNavigator;
