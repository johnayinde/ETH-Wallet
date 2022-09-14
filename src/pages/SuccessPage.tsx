import { ArrowForward } from "@mui/icons-material";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SuccessPage() {
	const navigate = useNavigate();
	return (
		<Box sx={{ height: "100%", mt: 15 }}>
			<Stack
				gap={18}
				sx={{
					mt: 2,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Stack spacing={2} alignItems="center">
					<CardMedia
						component="img"
						sx={{
							display: "block",
							width: "50%",
						}}
						image="/images/success.png"
					/>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "700",
							fontSize: "30px",
						}}
					>
						Success.
					</Typography>
					<Typography
						sx={{
							opacity: "0.5",
						}}
					>
						You have successfully sent your funds
					</Typography>
					<Button variant="text" endIcon={<ArrowForward />}>
						View on Etherscan
					</Button>
				</Stack>

				<Stack spacing={2} justifyContent="space-between">
					<Button
						fullWidth
						sx={{
							borderColor: "black",
							borderWidth: "2px",
							color: "black",
							fontWeight: 600,
							fontSize: "14px",
							textTransform: "capitalize",
						}}
						size="large"
						variant="outlined"
						onClick={() => navigate("/", { replace: true })}
					>
						Done
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
}

export default SuccessPage;
