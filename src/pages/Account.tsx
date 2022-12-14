import { Avatar, Box, CardHeader, styled } from "@mui/material";
import AccountBalance from "../components/AccountBalance";
import TransactionHistory from "../components/TransactionHistory";

import { useContext } from "react";
import AppContext from "../context/background/AppContext";
import { Transaction } from "../services/TransactionsService";
import defaults from "../utils/constants";

function Account() {
	const { state } = useContext(AppContext);

	const formatData = (data: Array<Transaction>) => {
		let formatedData: Array<any> = [];
		data.forEach((element: Transaction) => {
			formatedData.push({
				sent: true,
				date: element.date,
				ethAmount: element.value,
				usdAmount: defaults.ethPrice * element.value,
			});
		});
		return formatedData;
	};

	const data = formatData(state.transactions).reverse();

	const StyledHistoryBox = styled(Box)(() => ({
		overflowY: 'scroll',
		height: "fit-content",
		maxHeight: '375px'
	}))
	return (
		<Box >
			<CardHeader
				avatar={
					<Avatar
						sx={{							bgcolor: "black"						}}					>						A					</Avatar>
				}
				title="Account 1"
				subheader="0xb93c...68aa"
			/>
			<AccountBalance />

			<StyledHistoryBox>
				{data.map((element, index)=>(
					<TransactionHistory data={element} key={index}/>
				))}
				
				</StyledHistoryBox>
		</Box>
	);
}

export default Account;
