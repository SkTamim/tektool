import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			dark: "#0072FF",
			main: "#008BFF",
			light: "#009AF6",
			text: "#E4F0FF",
		},
		secondary: {
			dark: "#008DA3",
			main: "#00A3BD",
			light: "#00C2E0",
			text: "#D2F9FF",
		},
		accent: {
			black: "#342C49",
			white: "#FCF7FF",
			darkGrey: "#494453",
			lightGrey: "#AFA8BA",
			text: "#E4F0FF",
		},
		spacial: {
			error: "#EF0F4F",
			success: "#00C897",
			warning: "#FFD365",
		},
		gradientBlue: {
			dark: "#5643FA",
			light: "#0072FF",
		},
		gradientGreen: {
			dark: "#008DA3",
			light: "#00C2E0",
		},
		darkBg: {
			bg: "#02155A",
			color: "#E4F0FF",
		},
	},
});

export default theme;
