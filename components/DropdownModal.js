import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from './Icon';

export default class DropdownModal extends React.Component {
  state = {
    keyword: 'Brisbane'
  }
  onChangeText = keyword => {
    this.setState({ keyword });
  }
  render() {
    const { keyword } = this.state;
    return (
      <View style={[styles.container, styles.boxShadow]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{ width: '100%', height: 45, backgroundColor: '#eee', paddingLeft: 15, fontWeight: '600', fontSize: 18, borderRadius: 25, padding: 10, borderColor: 'gray' }}
            onChangeText={this.onChangeText}
            value={this.state.keyword}
          />
          <Icon
            source={require('./../assets/icons8-PlusMath-2.png')}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              top: 12.5,
              right: 15
            }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 18,
    top: 70,
    left: 20,
    right: 20
  },
  boxShadow: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    borderBottomWidth: 0,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  }
})