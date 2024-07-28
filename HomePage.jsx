import React from 'react';
import {Image, View, Text, StyleSheet, TextInput} from 'react-native';
import styles from '../components/styles';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={Newstyles.nameview}>
        <Text style={Newstyles.nametxt}>Hello paul</Text>
        <Text style={styles.mainhead}>Find your doctor</Text>
      </View>
      <View style={Newstyles.searchboxview}>
        <TextInput style={Newstyles.input} placeholder="Search doctor" />
      </View>
      <View style={Newstyles.appoinmentview}>
        <Text style={styles.subhead}>My appoinments</Text>
      </View>
      <View style={Newstyles.caserecord}></View>
      <Text style={styles.subhead}>Nearby availaible doctors</Text>
      {/* --- */}
      <View style={Newstyles.cardcontainer}>
        <View style={Newstyles.casereccard}>
          <Image source={require('../asset/doctorpfp3.png')} />
          <View style={Newstyles.cardnameview}>
            <Text style={Newstyles.docname}>Dr.Salva Kolilov</Text>
            <Text style={Newstyles.symptom}>Fever and headche</Text>
          </View>
          <View style={Newstyles.cardendview}>
            <Text style={Newstyles.cardendtxt}>In clinic</Text>
            <Text style={Newstyles.cardendtxt}>3.5kms</Text>
          </View>
        </View>
        {/* --- */}
        <View style={Newstyles.casereccard}>
          <Image source={require('../asset/doctorpfp2.png')} />
          <View style={Newstyles.cardnameview}>
            <Text style={Newstyles.docname}>Dr.Salva Kolilov</Text>
            <Text style={Newstyles.symptom}>Fever and headche</Text>
          </View>
          <View style={Newstyles.cardendview}>
            <Text style={Newstyles.cardendtxt}>In clinic</Text>
            <Text style={Newstyles.cardendtxt}>3.5kms</Text>
          </View>
        </View>
        {/* --- */}
        <View style={Newstyles.casereccard}>
          <Image source={require('../asset/doctorpfp4.png')} />
          <View style={Newstyles.cardnameview}>
            <Text style={Newstyles.docname}>Dr.Salva Kolilov</Text>
            <Text style={Newstyles.symptom}>Fever and headche</Text>
          </View>
          <View style={Newstyles.cardendview}>
            <Text style={Newstyles.cardendtxt}>In clinic</Text>
            <Text style={Newstyles.cardendtxt}>3.5kms</Text>
          </View>
        </View>
      </View>
      {/* --- */}
    </View>
  );
};

const Newstyles = StyleSheet.create({
  nameview: {
    marginTop: 118,
  },
  nametxt: {
    marginBottom: 4,
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 25,
    color: '#000000',
  },
  searchboxview: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  input: {
    height: 48,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#CDCDCD',
  },
  appoinmentview: {
    paddingTop: 19,
    paddingLeft: 16,
    height: 109,
    backgroundColor: '#4F58DF',
    borderRadius: 10,
  },
  caserecord: {
    height: 60,
    marginTop: 16,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 4,
    borderColor: '#EFEFEF',
  },

  //bottom card styles
  cardcontainer: {
    marginTop: 12,
  },
  casereccard: {
    display: 'flex',
    flexDirection: 'row',
    height: 65,
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 8,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  cardnameview: {
    paddingTop: 4,
    paddignBottom: 4,
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  docname: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 14,
    color: '#000000',
    lineHeight: 19,
  },
  symptom: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 10,
    color: '#646464',
    lineHeight: 14,
  },
  cardendview: {
    flex: 1,
    justifyContent: 'space-around',
  },
  cardendtxt: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 10,
    color: '#646464',
    lineHeight: 14,
    textAlign: 'right',
  },
});

export default HomePage;
