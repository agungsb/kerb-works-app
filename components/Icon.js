import React from 'react';
import { Image } from 'react-native';

export default class Icon extends React.PureComponent {
  render() {
    const { source, ...rest } = this.props;
    return <Image source={source} {...rest} />
  }
}