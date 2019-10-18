import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions';
import {languages} from '../languages';

class LanguageSelector extends Component {
  render() {
    const {hello} = this.props.selectedLanguage;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{hello}</Text>
        </View>
        <View style={{padding: 20}}>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.english)}>
            <Text>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.japanese)}>
            <Text>Japanese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.french)}>
            <Text>French</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.australian)}>
            <Text>Australian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.indian)}>
            <Text>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.arabic)}>
            <Text>Arabic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.russian)}>
            <Text>Russian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.chinese)}>
            <Text>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.selectLanguage(languages.gujarati)}>
            <Text>Gujarati</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedLanguage: state.language,
  };
};

const styles = StyleSheet.create({});

export default connect(
  mapStateToProps,
  {selectLanguage},
)(LanguageSelector);
