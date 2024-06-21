import React from "react";
import { Html, Head, Preview, Body, Container, Section, Img, Heading, Text, Hr, Link } from "@react-email/components";

const WelcomeEmail = ({
	userName = "User",
	userEmail = "example@gmail.com",
	subscriptionStartDate = new Date(),
	subscriptionEndDate = new Date(),
}: {
	userName: string;
	userEmail: string;
	subscriptionStartDate: Date;
	subscriptionEndDate: Date;
}) => {
	// TODO=> ADD THE PROD URL
	const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

	return (
		<Html>
			<Head />
			<Preview>Welcome to OnlyHorse!</Preview>
			<Body style={main}>
				<Container style={container}>
					<Section style={message}>
						<Img
							src={`${BASE_URL}/horse-1.png`}
							// todo => delete this one below
							// src={`https://i.ibb.co/CV1mKKY/horse-1.jpg`}
							width='600'
							height='400'
							alt='welcome icon'
							style={{ margin: "auto", borderRadius: 10 }}
						/>
						<Heading style={{ ...global.heading }}>Welcome to OnlyHorse!</Heading>
						<Text style={global.text}>Hello {userName},</Text>
						<Text style={global.text}>
							We're really happy to see you on our platform. We hope you have a great experience and enjoy
							all the features we offer.
						</Text>
						<Hr style={global.hr} />

						<Text style={{ ...global.text, marginTop: 24 }}>User Details:</Text>
						<Text style={{ ...global.text }}>
							Email: {userEmail}
							<br />
							Name: {userName}
						</Text>
						<Hr style={global.hr} />

						<Text style={{ ...global.text, marginTop: 24 }}>Subscription Details:</Text>
						<Text style={{ ...global.text }}>
							Your subscription starts on: {subscriptionStartDate.toDateString()}
							<br />
							Your subscription ends on: {subscriptionEndDate.toDateString()}
						</Text>
						<Hr style={global.hr} />

						<Text style={{ ...global.text, marginTop: 24 }}>
							Thanks for subscribing! We will see you in the platform. 🙂❤
						</Text>
						<Link href={BASE_URL} style={{ ...global.button, margin: "10px auto" }}>
							Visit OnlyHorse
						</Link>
					</Section>
					<Hr style={global.hr} />
					<Section style={global.defaultPadding}>
						<Text style={footer.text}>
							© {new Date().getFullYear()} OnlyHorse, Inc. All Rights Reserved.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default WelcomeEmail;

const paddingX = {
	paddingLeft: "40px",
	paddingRight: "40px",
};

const paddingY = {
	paddingTop: "22px",
	paddingBottom: "22px",
};

const paragraph = {
	margin: "0",
	lineHeight: "2",
};

const global = {
	paddingX,
	paddingY,
	defaultPadding: {
		...paddingX,
		...paddingY,
	},
	heading: {
		fontSize: "32px",
		lineHeight: "1.3",
		fontWeight: "700",
		textAlign: "center",
		letterSpacing: "-1px",
	} as React.CSSProperties,
	text: {
		...paragraph,
		color: "#747474",
		fontWeight: "500",
		textAlign: "center" as "center",
	},
	button: {
		border: "1px solid #929292",
		fontSize: "16px",
		textDecoration: "none",
		padding: "10px 0px",
		width: "220px",
		display: "block",
		textAlign: "center",
		fontWeight: 500,
		color: "#000",
	} as React.CSSProperties,
	hr: {
		borderColor: "#E5E5E5",
		margin: "0",
	},
};

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "10px auto",
	width: "600px",
	maxWidth: "100%",
	border: "1px solid #E5E5E5",
};

const message = {
	padding: "40px 74px",
	textAlign: "center",
} as React.CSSProperties;

const footer = {
	text: {
		margin: "0",
		color: "#AFAFAF",
		fontSize: "13px",
		textAlign: "center",
	} as React.CSSProperties,
};

// STARTER CODE:
// import React from "react";
// import { Html, Head, Preview, Body, Container, Section, Img, Heading, Text, Hr, Link } from "@react-email/components";

// const WelcomeEmail = ({
// 	userName = "User",
// 	userEmail = "example@gmail.com",
// 	subscriptionStartDate = new Date(),
// 	subscriptionEndDate = new Date(),
// }: {
// 	userName: string;
// 	userEmail: string;
// 	subscriptionStartDate: Date;
// 	subscriptionEndDate: Date;
// }) => {
// 	const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

// 	return (
// 		<Html>
// 			<Head />
// 			<Preview>Welcome to OnlyHorse!</Preview>
// 			<Body style={main}>
// 				<Container style={container}>
// 					<Section style={message}>
// 						<Img
// 							// src={`${BASE_URL}/horse-1.png`}
// 							src={`https://i.ibb.co/CV1mKKY/horse-1.jpg`}
// 							width='600'
// 							height='400'
// 							alt='welcome icon'
// 							style={{ margin: "auto", borderRadius: 10 }}
// 						/>
// 						<Heading style={{ ...global.heading }}>Welcome to OnlyHorse!</Heading>
// 						<Text style={global.text}>Hello {userName},</Text>
// 						<Text style={global.text}>
// 							We're really happy to see you on our platform. We hope you have a great experience and enjoy
// 							all the features we offer.
// 						</Text>
// 						<Hr style={global.hr} />

// 						<Text style={{ ...global.text, marginTop: 24 }}>User Details:</Text>
// 						<Text style={{ ...global.text }}>
// 							Email: {userEmail}
// 							<br />
// 							Name: {userName}
// 						</Text>
// 						<Hr style={global.hr} />

// 						<Text style={{ ...global.text, marginTop: 24 }}>Subscription Details:</Text>
// 						<Text style={{ ...global.text }}>
// 							Your subscription starts on: {subscriptionStartDate.toDateString()}
// 							<br />
// 							Your subscription ends on: {subscriptionEndDate.toDateString()}
// 						</Text>
// 						<Hr style={global.hr} />

// 						<Text style={{ ...global.text, marginTop: 24 }}>
// 							Thanks for subscribing! We will see you in the platform. 🙂❤
// 						</Text>
// 						<Link href={BASE_URL} style={{ ...global.button, margin: "10px auto" }}>
// 							Visit OnlyHorse
// 						</Link>
// 					</Section>
// 					<Hr style={global.hr} />
// 					<Section style={global.defaultPadding}>
// 						<Text style={footer.text}>
// 							© {new Date().getFullYear()} OnlyHorse, Inc. All Rights Reserved.
// 						</Text>
// 					</Section>
// 				</Container>
// 			</Body>
// 		</Html>
// 	);
// };

// export default WelcomeEmail;

// const paddingX = {
// 	paddingLeft: "40px",
// 	paddingRight: "40px",
// };

// const paddingY = {
// 	paddingTop: "22px",
// 	paddingBottom: "22px",
// };

// const paragraph = {
// 	margin: "0",
// 	lineHeight: "2",
// };

// const global = {
// 	paddingX,
// 	paddingY,
// 	defaultPadding: {
// 		...paddingX,
// 		...paddingY,
// 	},
// 	heading: {
// 		fontSize: "32px",
// 		lineHeight: "1.3",
// 		fontWeight: "700",
// 		textAlign: "center",
// 		letterSpacing: "-1px",
// 	} as React.CSSProperties,
// 	text: {
// 		...paragraph,
// 		color: "#747474",
// 		fontWeight: "500",
// 		textAlign: "center" as "center",
// 	},
// 	button: {
// 		border: "1px solid #929292",
// 		fontSize: "16px",
// 		textDecoration: "none",
// 		padding: "10px 0px",
// 		width: "220px",
// 		display: "block",
// 		textAlign: "center",
// 		fontWeight: 500,
// 		color: "#000",
// 	} as React.CSSProperties,
// 	hr: {
// 		borderColor: "#E5E5E5",
// 		margin: "0",
// 	},
// };

// const main = {
// 	backgroundColor: "#ffffff",
// 	fontFamily:
// 		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
// };

// const container = {
// 	margin: "10px auto",
// 	width: "600px",
// 	maxWidth: "100%",
// 	border: "1px solid #E5E5E5",
// };

// const message = {
// 	padding: "40px 74px",
// 	textAlign: "center",
// } as React.CSSProperties;

// const footer = {
// 	text: {
// 		margin: "0",
// 		color: "#AFAFAF",
// 		fontSize: "13px",
// 		textAlign: "center",
// 	} as React.CSSProperties,
// };
