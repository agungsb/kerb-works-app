import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';
import Icon from './Icon';
import { debounce } from './../utils/DebounceThrottle';

export default class DropdownModal extends React.Component {
  state = {
    keyword: '',
    cities: [
      "Brisbane, Australia",
      "Sydney, Australia",
      "Perth, Australia",
      "Wellington, New Zealand"
    ],
    results: []
  }
  componentWillMount() {
    const { keyword } = this.state;
    this.getSearchResultsDebounced = debounce(500, keyword => {
      this.getSearchResults(keyword);
    });
  }
  componentDidMount() {
    this._search.focus();
  }
  componentWillUnmount() {
    this._search.blur();
  }
  clearSearchBox = () => {
    this.setState({ keyword: '', results: [] });
  }
  getSearchResults = keyword => {
    if (keyword === '') {
      this.setState({ results: [] });
    } else {
      this.setState({ results: this.state.cities.filter(city => city.toLowerCase().indexOf(keyword.toLowerCase()) > -1) });
    }
  }
  onChangeText = keyword => {
    this.getSearchResultsDebounced(keyword);
    this.setState({ keyword });
  }
  keyExtractor = (item, index) => item + '' + index;
  renderItem = ({ item, index }) => (
    <View style={{ padding: 15, flex: 1, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: index < this.state.cities.length - 1 ? 1 : 0, borderColor: '#eee' }}>
      <Text style={{ justifyContent: 'flex-start' }}>{item}</Text>
      <View style={{ justifyContent: 'flex-end' }}>
        <Icon
          source={require('./../assets/icons8-Collapse-Arrow-Filled.png')}
          resizeMode="contain"
          style={{
            width: 18,
            height: 18,
          }} />
      </View>
    </View>
  );
  render() {
    const { keyword } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.props.closeModal}>
        <View style={styles.modalContainer}>
          <View style={{ paddingHorizontal: 10, flex: 1, position: 'absolute', top: 45, flexDirection: 'row' }}>
            <View style={styles.leftNav} />
            <View style={styles.rightNav}>
              <View style={styles.arrowWrapper}>
                <View style={styles.arrow} />
              </View>
              <View style={styles.arrowWrapper} />
              <View style={styles.arrowWrapper} />
            </View>
          </View>
          <View style={[styles.modalContent, styles.boxShadow]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                underlineColorAndroid="transparent"
                ref={ref => this._search = ref}
                placeholder="Search..."
                style={styles.textInput}
                onChangeText={this.onChangeText}
                value={this.state.keyword}
              />
              <TouchableOpacity
                onPress={this.clearSearchBox}
                style={{
                  position: 'absolute',
                  top: 12.5,
                  right: 15
                }}>
                <Icon
                  source={require('./../assets/icons8-PlusMath-2.png')}
                  resizeMode="contain"
                  style={{
                    width: 18,
                    height: 18
                  }} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: this.state.results.length > 0 ? 10 : 0 }}>
              <FlatList
                data={this.state.results}
                extraData={this.state}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    zIndex: 1000,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height
  },
  modalContent: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 18,
    top: 70,
    left: 10,
    right: 10,
  },
  textInput: {
    width: '100%',
    height: 45,
    backgroundColor: '#eee',
    paddingLeft: 15,
    fontWeight: Platform.OS === 'android' ? '200' : '500',
    fontSize: 18,
    borderRadius: 25,
    padding: 10
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
  arrow: {
    zIndex: 10000,
    position: 'absolute',
    top: 17,
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    transform: [
      { rotate: '45deg' },
      { translateY: -7 },
    ]
  },
  arrowWrapper: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftNav: {
    height: 44,
    width: 44,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightNav: {
    padding: 5,
    height: 44,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginLeft: 10,
    justifyContent: 'space-between'
  },
})