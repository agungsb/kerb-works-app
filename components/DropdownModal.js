import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
        <View style={{ zIndex: 1000, backgroundColor: 'transparent', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: Dimensions.get('window').height }}>
          <View style={[styles.container, styles.boxShadow]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                ref={ref => this._search = ref}
                style={{ width: '100%', height: 45, backgroundColor: '#eee', paddingLeft: 15, fontWeight: '600', fontSize: 18, borderRadius: 25, padding: 10 }}
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
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 18,
    top: 70,
    left: 10,
    right: 10,
  },
  boxShadow: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
  }
})