import {
	CloseOutlined,
} from "@mui/icons-material";
import {
	Box,
	Button,
	CardHeader,
	Divider,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from './../context/background/AppContext';
import defaults from './../utils/constants';
import moment from 'moment'


function SendETH() {
	    const { state, setState, addTransaction } = useContext(AppContext);
    const [address, setaddress] = useState('')
	const [amount, setamount] = useState('')
	const navigate = useNavigate();

	const createTranscation = () => {
        const newTransaction = {
            id: state.transactions.length,
            to: address,
            from: defaults.publicAddress,
            value: Number(amount),
            date: moment(new Date()).format('DD-MM-YYYY hh:mm')
        }
		addTransaction(newTransaction)
		navigate("/success",{replace:true})
    }
	return (
		<Box sx={{ height: "100%" }}>
			<CardHeader
				title={
					<Typography
						sx={{
							display: "block",
							fontWeight: "700",
						}}
						component="span"
						variant="body1"
					>
						Send Ether
					</Typography>
				}
				action={
					<IconButton onClick={()=> navigate('/',{replace:true})}>
						<CloseOutlined sx={{ color: "black" }} />
					</IconButton>
				}
			/>
			<Divider light sx={{ bgcolor: "#949292" }} />

			<Stack
				gap={45}
				sx={{
					mt: 2,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Stack spacing={3}>
					<Box flexDirection="column">
						<Typography
							sx={{
								mb: 2,
								fontWeight: "400",
								fontSize: "14px",
							}}
							component="p"
							variant="body1"
						>
							Add Recipient
						</Typography>

						<TextField
							
							fullWidth
							sx={{ borderBottom: "1px solid #000" }}
							variant="standard"
							placeholder="Enter Public Address"
							value={address}
							onChange={(e)=> setaddress(e.target.value)}

						/>
					</Box>
					<Box>
						<Typography
							sx={{
								mb: 1,
								fontWeight: "400",
								fontSize: "14px",
							}}
							component="p"
							variant="body1"
						>
							Send Ether
						</Typography>

						<TextField
							fullWidth
							sx={{ borderBottom: "1px solid #000" }}
							variant="standard"
							placeholder="Enter the Amount of Ether"
							value={amount}
							onChange={(e)=> setamount(e.target.value)}

						/>
					</Box>
				</Stack>

				<Stack spacing={2} direction="row" justifyContent="space-between">
					<Button
						fullWidth
						sx={{
							borderColor: "black",
							borderWidth: "2px",
							color: "black",
							fontWeight: 600,
							fontSize: "14px",
							textTransform: "capitalize",
							padding: "",
						}}
						size="large"
						variant="outlined"
						onClick={()=> navigate('/',{replace:true})}
					>
						Cancel
					</Button>
					<Button
						fullWidth
						sx={{
							borderColor: "color.primary",
							fontWeight: 600,
							fontSize: "14px",
							textTransform: "capitalize",
						}}
						size="large"
						variant="contained"
						onClick={createTranscation}
					>
						Next
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
}

export default SendETH;
