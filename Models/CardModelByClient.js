var CardModel = {
	_id: '',
	name: '',
	status: 'active/inactive', 				// we can also change this to a boolean value 'active' = t/f
	description: '',
	code: '', 								// this field was present in the original SQL ERD, if it's not requried we can remove it
	help: '',
	businessId: '',
	cardElements: {
		background: {
			style: {
				'background-color': '#FFFFFF',
				'background-image': "url('smiley.gif')",
				'background-repeat': 'no-repeat',
				'background-attachment': 'fixed',
				'background-position': '30% 20%',
			}
		},
		texts: [{
			id: 0,
			content: '',
			url: '',
			style: {
				left: '%', 					// all the size, position related values should be in percentage % so that the card can be auto resize in different screen-sizes
				top: '%',
				'z-index': '',
				height: '%',
				width: '%',
				'font-family': 'Arial',
				'font-size': '%',
				color: '#000000',
				'font-weight': 'bold',
				'font-style': 'normal'
			}
		}],
		images: [{
			id: 0,
			url: '',
			style: {
				left: '',
				top: '',
				'z-index': '',
				height: '',
				width: ''
			}
		}],
		fields: [{							// rename variable to fields
			id: 0,
			name: '',
			placeholder: '',
			field: 'collection_name.fieldName',
			url: '',
			style: {
				left: '',
				top: '',
				'z-index': '',
				height: '',
				width: '',
				'font-family': '',
				'font-size': '',
				color: ''
				'font-weight': 'bold',
				'font-style': 'normal'
			}
		}],
		rules: [
			{
				name: 'stamp-gift', 		// array of all stamp objects with their positional properties
				description: '',
				stamps: { 					// this is a visible area on the card model showing a matrix of stamps. this is the only visible part of the 'stamp-gift' rule.
					rows: 2, 				//rows of the matrix
					columns: 4, 			//columns of the matrix
					image: '', 				// all stamps should have the same image & place holder
					placeholderImage: '',
					style: { 				//this defines the size and position of the area. 
						left: '',
						top: '',
						'z-index': '',
						height: '',
						width: ''
					}
				},
				gifts: [{
					id: 0,
					stampsRequired: 4,
					name: '',
					description: '',
					image: '',
					placeholderImage: '',
				}, {
					id: 0,
					stampsRequired: 8,
					name: '',
					description: '',
					image: '',
					placeholderImage: ''
				}],
				transactionData: [ 			// these fields are transaction data that will be kept in Cards since they are issued to customers.
					{
						name: "stampsAttained",
						defaultValue: 0,
						editable: false
					} 						// fieldname and default value, default value may or may not be editable during card model creation. if it's not editable, should not appear in the card rule edit dialog'
					{
						name: "stampsUsed",
						defaultValue: 0,
						editable: false
					}, {
						name: "giftsClaimed",
						defaultValue: 0,
						editable: false
					},
				],
				transactions: [{ 					
						name: "issue-stamp",
						permission: "issue-stamp",
						logic: "stampsAttained+=1"	// logic is pure javascript, if the logic becomes to complicated, can use a function(). logic can reference the dataFields
					}, 						
					{								
						name: "revoke-stamp",
						permission: "revoke-stamp", // permissions will be used in transaction, to verify if the employee has the permission or not to do this transaction. will be insert into the "permission" collection once this rule is added into the card model. 
						logic: "stampsAttained-=1"
					}, 
					{								
						name: "issue-gift",			// transaction name will be used in a few places, e.g. the transaction collection and transaction history collection.
						permission: "issue-gift",
						logic: "giftsClaimed+=1"
					}, 
					{
						name: "revoke-gift",
						permission: "revoke-gift",
						logic: "giftsClaimed-=1"
					},
				],
			}, 								//the start date and end date rules must exist on every card model
			{
				name: "start-date", 		// the start date rule defines the in effective date of the card after it's issued', it creates an visible area of the date, it adds a start date to the card.
				style: {
					left: '%', 				//all the size, position related values should be in percentage % so that the card can be auto resize in different screen-sizes
					top: '%',
					'z-index': '',
					height: '%',
					width: '%',
					'font-family': 'Arial',
					'font-size': '%',
					color: '#000000',
					'font-weight': 'bold',
					'font-style': 'normal'
				},
				'date-format': 'yyyy-mm-dd', // provide 3 types of long date format: ymd, mdy, dmy (Will use Angular Date filter for this)
				transactionData: [{
					name: "startDate",
					defaultValue: "today" | "2016-1-1" | "after X days",	// can be a string or javascript date object
					editable: true
				}] 							//the date can be a fixed date in future or today, or after x number of days|weeks|months|years,

			}, 								
			{
				name: "end-date", 			// the end date rule defines the out effective date of the card after it's issued', it creates an visible area of the date, it adds a expiration date to the card. when a card expires, all rules are disabled. 
				style: {
					left: '%', 				// all the size, position related values should be in percentage % so that the card can be auto resize in different screen-sizes
					top: '%',
					'z-index': '',
					height: '%',
					width: '%',
					'font-family': 'Arial',
					'font-size': '%',
					color: '#000000',
					'font-weight': 'bold',
					'font-style': 'normal'
				},
				'date-format': 'yyyy-mm-dd', // provide 3 types of long date format: ymd, mdy, dmy (Will use Angular Date filter for this)
				dataFields: [{
					name: "endDate",
					defaultValue: "today" | "2016-1-1" | "after X days",	// can be a string or javascript date object
					editable: true
				}] 								
				//the date can be a fixed date in future or today, or after x number of days|weeks|months|years or 1980-1-1, if it set to 1980-1-1, it means the card will never expire. 
			}
		]
	}
}