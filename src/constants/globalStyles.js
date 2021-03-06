import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.APP_BLACK_THEME,
        padding: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})