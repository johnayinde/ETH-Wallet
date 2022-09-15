import {
	ListItem,
	ListItemAvatar,
	ListItemText,
	Box,
	Typography,
	Avatar,
} from "@mui/material";
import { Data } from "../utils/interfaces";


function HistoryItem({data}: Data) {
  return (
   <ListItem divider>
				<ListItemAvatar>
					<Avatar
						sx={{
							border: "1px solid gray",
							width: "30px",
							height: "30px",
							padding: "5px",
						}}
						src="/images/eth-logo.png"
					/>
				</ListItemAvatar>

				<ListItemText
					primary={
						<Typography
							sx={{
								display: "block",
								fontWeight: "600",
								fontSize: "14px",
							}}
							component="span"
							variant="body1"
						>
							Send Ether
						</Typography>
					}
					secondary={
						<Typography
							sx={{
								display: "inline",
								fontWeight: "400",
								fontSize: "12px",
							}}
							component="span"
							variant="body1"
							color="#949292"
						>
							{data.date}
						</Typography>
					}
				/>
				<Box mr="auto" display="flex" flexDirection="column" gap="2px">
					<Typography
						sx={{
							fontWeight: "600",
							fontSize: "14px",
						}}
						component="span"
							variant="body1"
					>
					{data.ethAmount.toString()} ETH
					</Typography>
					<Typography
						sx={{
							display: "inline",
							fontWeight: "400",
							fontSize: "12px",
						}}
						component="span"
							variant="body1"
						color="#949292"
					>
						{data.usdAmount.toString()} USD
					</Typography>
				</Box>
			</ListItem>
  )
}

export default HistoryItem