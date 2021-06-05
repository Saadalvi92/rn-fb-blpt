import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    marginTop: 10,
  },
  Icon: { marginRight: 10 },
  AppText: { marginTop: 2, flex: 1 },
  PlaceHolder: { flex: 1, color: colors.mediumGrey },
});
export default styles;
