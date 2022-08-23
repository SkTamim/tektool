import { makeStyles } from "@mui/styles";
import React from "react";
import MyChip from "../../../components/UI/chip/MyChip";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const useStyles = makeStyles({
	root: {
		padding: "1rem 0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	swiper: {
		maxWidth: "785px",
	},
	swiperSlide: {
		display: "flex",
		justifyContent: "center",
	},
});

const ShadowTypeNavigator = () => {
	const classes = useStyles();
	return (
		<nav className={classes.root}>
			<Swiper
				spaceBetween={10}
				slidesPerView={1}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					420: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 3,
					},
					843: {
						slidesPerView: 4,
					},
				}}
				className={classes.swiper}
			>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Light Shadows' to='/box-shadows/light' />
				</SwiperSlide>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Dark Shadows' to='dark' />
				</SwiperSlide>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Inset Shadows' to='inset' />
				</SwiperSlide>
				<SwiperSlide className={classes.swiperSlide}>
					<MyChip label='Colored Shadows' to='colored' />
				</SwiperSlide>
			</Swiper>
		</nav>
	);
};

export default ShadowTypeNavigator;
