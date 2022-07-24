import {createMuiTheme, defaultTheme} from "react-admin";
import merge from "lodash/merge";

export const theme = createMuiTheme(
    merge({}, defaultTheme, {
        palette: {
            secondary: {
                main: "#282828",
                primary: '#EB00E1'
            },
        }
    })
);