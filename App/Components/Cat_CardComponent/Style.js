import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    marginTop: 10,
    marginBottom: 10,

    height: 140,
    width: 100,
    borderRadius: 5,
    backgroundColor: colors.offWhite,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  detailsContainer: {
    paddingLeft: '10%',
    paddingTop: '10%',
    flex: 1,
    flexDirection: 'column',
  },
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
