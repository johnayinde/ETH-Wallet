import {  styled, Card ,Box} from "@mui/material";

const StyledContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "100vh",
	backgroundColor: "hsl(217, 54%, 11%)",
}));

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: "white",
	borderRadius: theme.spacing(1),
	height: "630px",
	width: "400px",
	padding: theme.spacing(3),
}));
function BackroundContainer({ children }:any) {
	return (
		<StyledContainer  >
			<StyledCard>{children}</StyledCard>
		</StyledContainer>
	);
}

export default BackroundContainer;
