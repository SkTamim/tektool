import React from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

import Logo from "../../layout/navbar/Logo";

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.darkBg.bg,
		color: theme.palette.darkBg.text,
	},
	gridItem: {
		[theme.breakpoints.down("md")]: {
			marginBottom: "40px",
		},
	},
	socialIcons: {
		transition: ".2s",
		"&:hover ,&:active": {
			filter: "brightness(0.85)",
		},
	},
	footerHeading: {
		textTransform: "uppercase",
		fontWeight: 500,
		fontSize: "1.5rem",
		marginBottom: ".5rem",
	},
	copyright: {
		backgroundColor: theme.palette.accent.black,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: ".5rem",
	},
}));

const sitemaps = [
	{ text: "Home", to: "/" },
	{ text: "Resources", to: "/resources" },
	{ text: "Shadows", to: "/shadows" },
	{ text: "Entities", to: "/entities" },
	{ text: "Learn", to: "/learn" },
];

export const Footer = () => {
	const classes = useStyle();
	return (
		<footer className={classes.root}>
			<Container maxWidth='xl' sx={{ py: 3 }}>
				<Grid container>
					<Grid
						item
						className={classes.gridItem}
						xs={12}
						sm={6}
						md={3}
						sx={{ px: 3 }}
					>
						<Logo color='blue' style={{ height: "80px" }} />
						<Link
							href='mailto:sktamim225@gmail.com'
							underline='hover'
							sx={{
								display: "flex",
								alignItems: "center",
								color: "inherit",
								mb: 3,
							}}
						>
							<EmailIcon sx={{ mr: 1 }} />
							sktamim225@gmail.com
						</Link>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								maxWidth: "220px",
							}}
						>
							<Link
								href='https://www.linkedin.com/in/sktamim/'
								target='_blank'
								color='inherit'
								className={classes.socialIcons}
							>
								<LinkedInIcon sx={{ fontSize: "2rem" }} />
							</Link>
							<Link
								href='https://www.github.com/SkTamim/'
								target='_blank'
								color='inherit'
								className={classes.socialIcons}
							>
								<GitHubIcon sx={{ fontSize: "2rem" }} />
							</Link>
							<Link
								href='https://twitter.com/sktamim_01'
								target='_blank'
								color='inherit'
								className={classes.socialIcons}
							>
								<TwitterIcon sx={{ fontSize: "2rem" }} />
							</Link>
							<Link
								href='https://www.facebook.com/SkTamim.0001'
								target='_blank'
								color='inherit'
								className={classes.socialIcons}
							>
								<FacebookIcon sx={{ fontSize: "2rem" }} />
							</Link>
							<Link
								href='https://www.instagram.com/sktamim_01/'
								target='_blank'
								color='inherit'
								className={classes.socialIcons}
							>
								<InstagramIcon sx={{ fontSize: "2rem" }} />
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						className={classes.gridItem}
						xs={12}
						sm={6}
						md={3}
						sx={{
							px: 3,
						}}
					>
						<h4 className={classes.footerHeading}>Sitemap</h4>
						<ul style={{ listStyle: "inside" }}>
							{sitemaps.map((sitemap) => (
								<li key={sitemap.text}>
									<Link
										underline='hover'
										color='inherit'
										component={NavLink}
										to={sitemap.to}
									>
										{sitemap.text}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
					<Grid
						item
						className={classes.gridItem}
						xs={12}
						sm={6}
						md={3}
						sx={{ px: 3 }}
					>
						<h4 className={classes.footerHeading}>Credit</h4>
						<ul style={{ listStyle: "inside" }}>
							<li>
								<Link
									underline='hover'
									color='inherit'
									href='https://storyset.com/'
									target='_blank'
								>
									SVGs by storyset
								</Link>
							</li>
							<li>
								Box shadows by <br />
								<Link
									underline='hover'
									color='inherit'
									href='https://getcssscan.com/css-box-shadow-examples'
									target='_blank'
								>
									css scan
								</Link>
								&nbsp; and &nbsp;
								<Link
									underline='hover'
									color='inherit'
									href='https://copy-paste-css.com/box-shadows'
									target='_blank'
								>
									copy paste css
								</Link>
							</li>
						</ul>
					</Grid>
					<Grid
						item
						className={classes.gridItem}
						xs={12}
						sm={6}
						md={3}
						sx={{ px: 3 }}
					>
						<h4 className={classes.footerHeading}>Contribute</h4>
						<Box>
							<Link
								underline='hover'
								href='https://github.com/SkTamim/web-tools'
								target='_blank'
								sx={{
									display: "flex",
									alignItems: "center",
									color: "inherit",
									my: 2,
								}}
							>
								<GitHubIcon sx={{ mr: 1 }} />
								GitHub
							</Link>
							<Link
								underline='hover'
								href='https://forms.gle/rD1jPw7x9c52pw6s6'
								target='_blank'
								sx={{
									display: "flex",
									alignItems: "center",
									color: "inherit",
									my: 2,
								}}
							>
								<SendIcon sx={{ mr: 1 }} />
								Send suggestion / resources
							</Link>
							<Link
								underline='hover'
								href='https://github.com/SkTamim/web-tools'
								target='_blank'
								sx={{
									display: "flex",
									alignItems: "center",
									color: "inherit",
									my: 2,
								}}
							>
								<InfoIcon sx={{ mr: 1 }} />
								About the Project
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Typography className={classes.copyright}>
				<CopyrightIcon sx={{ mx: 1 }} /> Made with
				<FavoriteIcon sx={{ color: "#EF0F4F", mx: 1 }} />
				by SK.
			</Typography>
		</footer>
	);
};

export default Footer;
