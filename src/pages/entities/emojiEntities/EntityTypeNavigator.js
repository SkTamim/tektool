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
					1300: {
						slidesPerView: 8,
					},
					1650: {
						slidesPerView: 10,
					},
				}}
				className={classes.swiper}
			>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Face' to='/emoji-entities/face' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Gesture' to='/emoji-entities/gesture' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='People' to='/emoji-entities/people' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Hart' to='/emoji-entities/hart' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Sport' to='/emoji-entities/sport' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Nature' to='/emoji-entities/nature' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Animal' to='/emoji-entities/animal' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Food & Drink' to='/emoji-entities/food-drink' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Objects' to='/emoji-entities/objects' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Symbol' to='/emoji-entities/symbol' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Vehicle' to='/emoji-entities/vehicle' />
				</SwiperSlide>

				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Flags' to='/emoji-entities/flags' />
				</SwiperSlide>
			</Swiper>
		</nav>
	);
};

export default EntityTypeNavigator;
