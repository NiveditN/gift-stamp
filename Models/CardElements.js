var CardElements = {
	_id: '',
	name: '',
	description: '',
	code: '',
	unique: '',
	help: '',
	parameters: {
		background: {
			imagePath: '',
			style: {
				xPos: '',
				yPos: '',
				zPos: '',
				height: '',
				width: '',
				type: 'tile/fill/zoom etc.'
			},
		},
		texts: [{
			index: 0,
			content: '',
			url: '',
			style: {
				fontStyle: '',
				fontSize: '',
				fontColor: '',
				xPos: '',
				yPos: '',
				zPos: '',
				height: '',
				width: ''
			}
		}],
		images: [{
			index: 0,
			imagePath: '',
			url: '',
			style: {
				xPos: '',
				yPos: '',
				zPos: '',
				height: '',
				width: ''				
			},
		}],
		hotspots: [{
			index: 0,
			imagePath: '',
			url: '',
			shape: 'square/circle/rectangle etc.',
			style: {
				xPos: '',
				yPos: '',
				zPos: '',
				height: '',
				width: ''
			},
		}],
		variables: [{
			index: 0,
			name: '',
			placeholder: '',
			type: 'consumerDetails/vendorDetails/shopDetails etc.',
			url: '',
			style: {
				fontStyle: '',
				fontSize: '',
				fontColor: '',
				xPos: '',
				yPos: '',
				zPos: '',
				height: '',
				width: ''
			}
		}],
		rules: {
			totalGifts: '',
			totalStamps: '',
			redeemedStamps: 0,
			redeemedGifts: 0,
			stamps: [{
				index: 0,
				redeemed: 'boolean',
				stampImage: '',
				stampPlaceholderImage: '',
				style: {
					xPos: '',
					yPos: '',
					zPos: '',
					height: '',
					width: ''
				}
			}],
			gifts: [{
				index: 0,
				redeemed: 'boolean',
				giftName: '',
				giftImage: '',
				requiredStamps: ''				
			}]
		}
	}
}
