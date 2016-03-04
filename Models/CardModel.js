var CardModel = {
	_id: '',
	name: '',
	status: '',
	description: '',
	code: '',
	help: '',
	businessId: '',
	messages: [],
	cardElements: {
		background: {
			imagePath: '',
			type: 'tile/fill/zoom etc.',
			style: {
				left: '',
				top: '',
				zIndex: '',
				height: '',
				width: '',
				backgroundImage: '',
				backgroundColor: '',
				backgroundSize: '',
				backgroundRepeat: ''
			}
		},
		texts: [{
			index: 0,
			content: '',
			url: '',
			style: {
				left: '',
				top: '',
				zIndex: '',
				height: '',
				width: '',
				fontFamily: '',
				fontSize: '',
				color: ''			
			}
		}],
		images: [{
			index: 0,
			imagePath: '',
			url: '',
			style: {
				left: '',
				top: '',
				zIndex: '',
				height: '',
				width: ''				
			}
		}],
		variables: [{
			index: 0,
			name: '',
			placeholder: '',
			type: 'consumerDetails/vendorDetails/shopDetails etc.',
			url: '',
			style: {
				left: '',
				top: '',
				zIndex: '',
				height: '',
				width: '',
				fontFamily: '',
				fontSize: '',
				color: ''			
			}
		}],
		rules: [
			// rule for stamps
			{
				type: 'stamps',
				// array of all stamp objects with their positional properties
				items: [{
					index: 0,
					redeemed: 'boolean',
					name: '',
					imagePath: '',
					placeholderImage: '',
					style: {
						left: '',
						top: '',
						zIndex: '',
						height: '',
						width: ''
					}
				}]
			},
			// rule for gifts
			{
				type: 'gifts',
				// array of all gift objects with their individual properties
				items: [{
					index: 0,
					redeemed: 'boolean',
					requiredStamps: 'number',
					name: '',
					imagePath: '',
					placeholderImage: '',
					style: {
						left: '',
						top: '',
						zIndex: '',
						height: '',
						width: ''
					}				
				}]				
			}
		]
	}
}

/*

1. all the style related fields on the JSON object must be the same as standard CSS, 
e.g. left, top, z-index, url, font-size, let's not invent a language of our own. 
Use the international standard if it exists. and it should also be easier to convert them into css+html easier later. 

2. rules are the most complicated, the rules is an array not an objects, you can have many rules in one card Model

3. gift is not an element on the card, gift should be put within a rule. 

4. please remove "hot-spot" for now, let put it in release 2.0. 
and it is not an element, it is part of an <image>, it is the <map>.

*/

