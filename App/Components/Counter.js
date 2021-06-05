import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';
function Counter({style}) {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={[{flexDirection: 'row'}, style]}>
      {counter > 0 ? (
        <>
          <Button
            color={colors.mediumGrey}
            title="+"
            onPress={handleIncrement}
            style={styles.button}
          />
          <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
            {counter}
          </Text>
          <Button
            color={colors.mediumGrey}
            title="-"
            onPress={handleDecrement}
            style={styles.button}
          />
        </>
      ) : (
        <>
          <Button
            color={colors.mediumGrey}
            title="+"
            onPress={handleIncrement}
            style={styles.button}
          />
          <Text style={{fontSize: 18, marginLeft: 10, marginRight: 10}}>
            {counter}
          </Text>
          <Button
            color={colors.mediumGrey}
            title="-"
            onPress={handleDecrement}
            style={styles.button}
            disabled
          />
        </>
      )}
    </View>
  );
}

export default Counter;
const styles = StyleSheet.create({});
