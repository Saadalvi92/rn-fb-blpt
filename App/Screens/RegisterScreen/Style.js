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
  },

  logo: {marginTop: '10%', marginRight: '20%'},
  logoContainer: {position: 'relative', alignItems: 'flex-end'},
  BottomText: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: '600',
    fontSize: 18,
  },
  BottomView: {marginTop: 20, marginBottom: 20},
});
export default styles;
