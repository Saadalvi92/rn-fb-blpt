import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
