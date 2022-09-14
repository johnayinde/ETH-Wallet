import { IconButton, Typography, Avatar, Stack,  } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { Link as RouteLink } from "react-router-dom";
import defaults from "../utils/constants";
function AccountBalance() {
	return (
		<Stack
			sx={{
				display: "flex",
				textAlign: "center",
				bgcolor: "rgba(234, 243, 252, 0.8)",
				borderRadius: "6px",
				padding: "25px",
				cursor: "pointer",
				mt: "8px",
				mb: "8px",
			}}
		>
			<RouteLink
				style={{
					textDecoration: "none",
					color: "black",
					marginTop: "5px",
					fontSize: "16px",
					cursor: "pointer",
				}}
				to="/send"
			>
				<Typography
					sx={{
						fontSize: "30px",
						fontWeight: 700,
					}}
				>
					{defaults.accountBalance} ETH
				</Typography>
				<Typography
					sx={{
						color: "#949292",
						fontSize: "14px",
						fontWeight: 400,
					}}
				>
					${defaults.accountBalance * defaults.ethPrice} USD
				</Typography>
				<IconButton>
					<Avatar
						sx={{
							bgcolor: "#167eff",
						}}
					>
						<ArrowUpward />
					</Avatar>
				</IconButton>
				<a
					href="#"
					style={{
						display: "block",
						textDecoration: "none",
						color: "black",
						marginTop: "5px",
						fontSize: "15px",
						cursor: "pointer",
					}}
				>
					Send
				</a>
			</RouteLink>
		</Stack>
	);
}

export default AccountBalance;
