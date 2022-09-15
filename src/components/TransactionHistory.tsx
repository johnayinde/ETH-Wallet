import {
	List,
} from "@mui/material";
import { Data } from "../utils/interfaces";
import HistoryItem from "./HistoryItem";


function TransactionHistory({data}: Data) {

	return (
		<List sx={{ width: "100%" }}  >
			<HistoryItem data={data}/>
		</List>
	);
}

export default TransactionHistory;
