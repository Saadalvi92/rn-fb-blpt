import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

import TagInput from 'react-native-tags-input';
import colors from '../../config/colors';

const mainColor = colors.white;

export default class AppTagInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: [],
      },
      tagsColor: mainColor,
      tagsText: '#fff',
    };
  }

  updateTagState = state => {
    this.setState({
      tags: state,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="Tags..."
          label="Press comma & space to add a tag"
          labelStyle={{color: colors.black}}
          leftElement={
            <Icon
              name={'tag-multiple'}
              type={'material-community'}
              color={colors.green}
            />
          }
          leftElementContainerStyle={{marginLeft: 3}}
          containerStyle={{width: Dimensions.get('window').width - 40}}
          inputContainerStyle={[
            styles.textInput,
            {backgroundColor: this.state.tagsColor},
          ]}
          inputStyle={{color: colors.black}}
          onFocus={() =>
            this.setState({tagsColor: '#fff', tagsText: mainColor})
          }
          onBlur={() => this.setState({tagsColor: mainColor, tagsText: '#fff'})}
          autoCorrect={false}
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          keysForTag={', '}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: colors.green,
  },
  tagText: {
    color: mainColor,
  },
});
