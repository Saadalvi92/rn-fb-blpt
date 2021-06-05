import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  card: {
    top: 15,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    width: '45%',
  },
  image: {height: 200, borderRadius: 5, backgroundColor: colors.offWhite},
  detailsContainer: {paddingLeft: 20, paddingTop: 20},
  title: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: '700',
  },
  subTitle: {
    color: colors.secondary,
  },
});
export default styles;
