import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styles from '../components/styles';

const CaserecordPage = () => {
  return (
    <View style={styles.container}>
      <View style={Newstyles.headview}>
        <Text style={Newstyles.headtext}>My case records</Text>
      </View>
      <View>
        <View style={styles.casereccard}>
          <Image source={require('../asset/doctorpfp1.png')} />
          <View style={styles.cardnameview}>
            <Text style={styles.docname}>Dr.Salva Kolilov</Text>
            <Text style={styles.symptom}>Fever and headche</Text>
          </View>
          <View style={styles.cardendview}>
            <Text style={styles.cardendtxt}>In clinic</Text>
            <Text style={styles.cardendtxt}>02 Jan 2021</Text>
          </View>
        </View>
        <View style={styles.casereccard}>
          <Image source={require('../asset/doctorpfp2.png')} />
          <View style={styles.cardnameview}>
            <Text style={styles.docname}>Dr.Salva Kolilov</Text>
            <Text style={styles.symptom}>Fever and headche</Text>
          </View>
          <View style={styles.cardendview}>
            <Text style={styles.cardendtxt}>In clinic</Text>
            <Text style={styles.cardendtxt}>02 Jan 2021</Text>
          </View>
        </View>
        <View style={styles.casereccard}>
          <Image source={require('../asset/doctorpfp3.png')} />
          <View style={styles.cardnameview}>
            <Text style={styles.docname}>Dr.Salva Kolilov</Text>
            <Text style={styles.symptom}>Fever and headche</Text>
          </View>
          <View style={styles.cardendview}>
            <Text style={styles.cardendtxt}>In clinic</Text>
            <Text style={styles.cardendtxt}>02 Jan 2021</Text>
          </View>
        </View>
        <View style={styles.casereccard}>
          <Image source={require('../asset/doctorpfp4.png')} />
          <View style={styles.cardnameview}>
            <Text style={styles.docname}>Dr.Salva Kolilov</Text>
            <Text style={styles.symptom}>Fever and headche</Text>
          </View>
          <View style={styles.cardendview}>
            <Text style={styles.cardendtxt}>In clinic</Text>
            <Text style={styles.cardendtxt}>02 Jan 2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Newstyles = StyleSheet.create({
  headview: {
    marginTop: 103,
    marginBottom: 32,
  },
  headtext: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 24,
    color: '#000000',
    lineHeight: 33,
  },
});

export default CaserecordPage;
