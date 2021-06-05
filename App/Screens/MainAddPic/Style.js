import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: 20,
  },
  buttonsContainer: {
    paddingTop: '10%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },

  logo: {marginTop: '10%', marginRight: '20%'},
  logoContainer: {position: 'relative', alignItems: 'flex-end'},
  Textstyle: {
    marginLeft: 16,
    fontSize: 17,
    fontWeight: '700',
    color: colors.lightGrey,
  },
});
export default styles;
