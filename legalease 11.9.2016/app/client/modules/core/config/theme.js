import { 
	indigo900, 
	indigo800, 
	indigo100, 
	redA200, 
	blueGrey700, 
	grey300, 
	darkBlack, 
	fullBlack, 
	white 
} from 'material-ui/styles/colors'

import { fade } from 'material-ui/utils/colorManipulator'

const theme = {
	palette: {
		primary1Color: indigo800,
		primary2Color: indigo900,
		accent1Color: redA200,
		accent2Color: indigo100,
		accent3Color: blueGrey700,
		textColor: darkBlack,
		alternativeTextColor: white,
		canvasColor: white,
		borderColor: grey300,
		disabledColor: fade(darkBlack, 0.3),
		pickerHeaderColor: indigo800,
		clockCirleColor: fade(darkBlack, 0.07),
		shadowColor: fullBlack
	},
}

export default theme;