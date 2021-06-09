import React from 'react';
import {View} from 'react-native';
import CreaterComp from './CreaterComp';
import AppButton from '../../Components/AppButton';
import {Navigation} from 'react-native-navigation';
import colors from '../../config/colors';
function CreateContent(props) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '100%',
          justifyContent: 'space-evenly',
        }}>
        <CreaterComp
          title="Add Title"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'AddTitle',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'AddTitle',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Add Text"
          onPress={() => {
            console.log('react');
            Navigation.push(props.componentId, {
              component: {
                name: 'AddText',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Add Text',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Set Location"
          onPress={() => {
            console.log('react');
            Navigation.push(props.componentId, {
              component: {
                name: 'SetLocation',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Set Location',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Add Photos"
          onPress={() => {
            Navigation.push(props.componentId, {
              component: {
                name: 'AddPhotos',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Add Photos',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Add Videos"
          onPress={() => {
            console.log('react');
            Navigation.push(props.componentId, {
              component: {
                name: 'AddVideos',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Add Videos',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Pick Categories"
          onPress={() => {
            console.log('react');
            Navigation.push(props.componentId, {
              component: {
                name: 'PickCategories',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'Pick Categories',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <CreaterComp
          title="Add Tags"
          onPress={() => {
            console.log('react');
            Navigation.push(props.componentId, {
              component: {
                name: 'AddTags',
                options: {
                  topBar: {
                    //     visible: false,
                    animate: true,
                    title: {
                      text: 'AddTags',
                      fontSize: 25,
                      alignment: 'center',
                      color: colors.white,
                    },
                    backButton: {color: colors.white},
                    background: {color: colors.green},
                  },
                },
              },
            });
          }}
        />
        <AppButton title="Preview" color="green" />
      </View>
    </View>
  );
}

export default CreateContent;
