import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

import DropdownModal from './components/DropdownModal';
import Header from './components/Header';

export default class App extends React.Component {
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
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        {modalShown && <DropdownModal closeModal={this.closeModal} />}
        <Header modalShown={modalShown} toggleModal={this.toggleModal} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
  },
});
