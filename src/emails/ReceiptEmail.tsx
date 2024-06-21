import { ShippingAddress } from "@prisma/client";
import {
	Body,
	Container,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const ReceiptEmail = ({
	userName,
	productImage,
	productName,
	productSize,
	orderNumber,
	orderDate,
	shippingAddress,
}: {
	userName: string;
	productImage: string;
	productName: string;
	productSize: string;
	orderNumber: string;
	orderDate: Date;
	shippingAddress: ShippingAddress;
}) => (
	<Html>
		<Head />
		<Preview>Get your order summary, estimated delivery date and more</Preview>
		<Body style={main}>
			<Container style={container}>
				<Section style={track.container}>
					<Row>
						<Column>
							<Text style={global.paragraphWithBold}>Order Number</Text>
							<Text style={track.number}>{orderNumber}</Text>
						</Column>
					</Row>
				</Section>
				<Hr style={global.hr} />
				<Section style={message}>
					<Img
						src={`${BASE_URL}/email-logo.png`}
						// src={"https://i.ibb.co/zRQ6qcJ/email-logo.png"}
						width='120'
						height='80'
						alt='Nike'
						style={{ margin: "auto" }}
					/>
					<Heading style={global.heading}>It's On Its Way.</Heading>

					<Text style={{ ...global.text, marginTop: 24 }}>
						Your order is on its way. Your payment has been processed and your items are being prepared for
						shipment.
					</Text>
				</Section>
				<Hr style={global.hr} />
				<Section style={global.defaultPadding}>
					<Text style={adressTitle}>Shipping to: {userName}</Text>
					<Text style={{ ...global.text, fontSize: 14 }}>
						{shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode},{" "}
						{shippingAddress.country}
					</Text>
				</Section>
				<Hr style={global.hr} />
				<Section style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}>
					<Row>
						<Column>
							<Img src={productImage} alt='Product Image' style={{ float: "left" }} width='260px' />
						</Column>
						<Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
							<Text style={{ ...paragraph, fontWeight: "500" }}>{productName}</Text>
							<Text style={global.text}>Size: {productSize}</Text>
						</Column>
					</Row>
				</Section>
				<Hr style={global.hr} />
				<Section style={global.defaultPadding}>
					<Row style={{ display: "inline-flex", marginBottom: 40 }}>
						<Column style={{ width: "170px" }}>
							<Text style={global.paragraphWithBold}>Order Number</Text>
							<Text style={track.number}>{orderNumber}</Text>
						</Column>
						<Column style={{ paddingLeft: 10 }}>
							<Text style={global.paragraphWithBold}>Order Date</Text>
							<Text style={track.number}>
								{orderDate.toLocaleDateString()} {orderDate.toLocaleTimeString()}
							</Text>
						</Column>
					</Row>
				</Section>
				<Hr style={global.hr} />

				<Section style={paddingY}>
					<Row>
						<Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
							Please contact us if you have any questions. (If you reply to this email, we won't be able
							to see it.)
						</Text>
					</Row>
					<Row>
						<Text style={footer.text}>
							© {new Date().getFullYear()} OnlyHorse, Inc. All Rights Reserved.
						</Text>
					</Row>
				</Section>
			</Container>
		</Body>
	</Html>
);

export default ReceiptEmail;

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
	paragraphWithBold: { ...paragraph, fontWeight: "bold" },
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

const track = {
	container: {
		padding: "22px 40px",
		backgroundColor: "#F7F7F7",
	},
	number: {
		margin: "12px 0 0 0",
		fontWeight: 500,
		lineHeight: "1.4",
		color: "#6F6F6F",
	},
};

const message = {
	padding: "40px 74px",
	textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
	...paragraph,
	fontSize: "15px",
	fontWeight: "bold",
};

const footer = {
	policy: {
		width: "166px",
		margin: "auto",
	},
	text: {
		margin: "0",
		color: "#AFAFAF",
		fontSize: "13px",
		textAlign: "center",
	} as React.CSSProperties,
};
