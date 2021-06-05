import { StyleSheet } from "react-native";
import colors from "../../config/colors";
const styles = StyleSheet.create({
  Container: { flexDirection: "row", padding: 15 },
  image: { height: 70, width: 70, borderRadius: 35 },
  title: { fontWeight: "500" },
  subTitle: { color: colors.mediumGrey },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
});
export default styles;
