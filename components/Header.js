import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';

export default class Header extends React.Component {
  state = {
    modalShown: this.props.modalShown
  }
  render() {
    const { modalShown, toggleModal } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.boxShadow, styles.leftNav]}>
          <Icon
            source={require('./../assets/icons8-GPS.png')}
            resizeMode="contain"
            style={{
              width: 23, height: 23
            }} />
        </View>
        <View style={[styles.boxShadow, styles.rightNav]}>
          <View style={[styles.menu, { borderRightWidth: 1, borderColor: '#eee' }]}>
            <TouchableOpacity
              hitSlop={{
                top: 20,
                bottom: 20,
                left: 30,
                right: 30
              }}
              onPress={toggleModal}>
              <Icon
                source={require('./../assets/icons8-Search.png')}
                resizeMode="contain"
                style={{
                  width: 21, height: 21
                }} />
            </TouchableOpacity>
          </View>
          <View style={[styles.menu, { borderRightWidth: 1, borderColor: '#eee' }]}>
            <Icon
              source={require('./../assets/icons8-Calendar.png')}
              resizeMode="contain"
              style={{
                width: 23, height: 23
              }} />
          </View>
          <View style={styles.menu}>
            <Icon
              source={require('./../assets/icons8-Filter.png')}
              resizeMode="contain"
              style={{
                width: 23, height: 23
              }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxShadow: {
    borderWidth: Platform.OS === 'android' ? 0 : 1,
    borderRadius: 20,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Platform.OS === 'android' ? 0 : 0.8,
    shadowRadius: Platform.OS === 'android' ? 0 : 1,
    elevation: Platform.OS === 'android' ? 0 : 1,
  },
  leftNav: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightNav: {
    padding: 5,
    height: 44,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});