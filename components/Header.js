import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropdownModal from './DropdownModal';
import Icon from './Icon';

export default class Header extends React.Component {
  state = {
    modalShown: false
  }
  closeModal = () => {
    this.setState({ modalShown: false });
  }
  toggleModal = () => {
    this.setState(prevState => ({
      modalShown: !prevState.modalShown
    }));
  }
  render() {
    const { modalShown } = this.state;
    return (
      <View style={styles.container}>
        {modalShown &&
          <DropdownModal closeModal={this.closeModal} />
        }
        <View style={[styles.boxShadow, styles.leftNav]}>
          <Icon
            source={require('./../assets/icons8-GPS.png')}
            resizeMode="contain"
            style={{
              width: 23, height: 23
            }} />
        </View>
        <View style={[styles.boxShadow, styles.rightNav]}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              hitSlop={{
                top: 20,
                bottom: 20,
                left: 30,
                right: 30
              }}
              onPress={this.toggleModal}>
              <Icon
                source={require('./../assets/icons8-Search.png')}
                resizeMode="contain"
                style={{
                  width: 21, height: 21
                }} />
            </TouchableOpacity>
            {modalShown && <View style={styles.arrow} />}
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              source={require('./../assets/icons8-Calendar.png')}
              resizeMode="contain"
              style={{
                width: 23, height: 23
              }} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  },
  leftNav: {
    borderWidth: 1,
    borderColor: '#aaa',
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightNav: {
    height: 44,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginLeft: 10
  },
  arrow: {
    zIndex: 10000,
    position: 'absolute',
    top: 46,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFF',
    borderLeftColor: 'transparent',
  }
});