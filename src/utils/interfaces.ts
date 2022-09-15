export interface TransactionData {
	sent?: boolean;
	received?: boolean;
	date: String;
	ethAmount: Number;
	usdAmount: Number;
}

export interface Data {
	data: TransactionData;
	hideTopBar?: boolean;
}
