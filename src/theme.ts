import {
    responsiveFontSizes,
    createMuiTheme
} from '@material-ui/core/styles'

type Direction = 'ltr' | 'rtl';
const uiDirection = (process.env.UI_DIRECTION || 'ltr') as Direction;
const appFont = process.env.APP_FONT || 'Roboto';

const theme = responsiveFontSizes(
    createMuiTheme({
        direction: uiDirection,
        typography: {
            fontFamily: appFont
        }
    })
);

export { theme };