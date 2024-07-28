import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import styles from '../components/styles';

const AppointmentBooked = () => {
  return (
    <View style={styles.container}>
      <Image
        style={Newstyles.logostyle}
        source={require('../asset/pjlogo.png')}
      />
      <View style={Newstyles.container}>
        <Text style={Newstyles.headtext}>Appointment Booked</Text>
        <Text style={Newstyles.subtext}>
          Your slot booked successfully. Please carry necessary records with you
          for doctor's reference.
        </Text>
        <Text style={Newstyles.subtext2}>November 09</Text>
      </View>
      <TouchableOpacity style={styles.nxtbutton}>
        <Text style={styles.nxttext}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={Newstyles.backbtn}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const Newstyles = StyleSheet.create({
  logostyle: {
    marginTop: 116,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: 58,
  },
  headtext: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: 700,
    fontSize: 18,
    color: '#000000',
  },
  subtext: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
    marginTop: 13,
    marginBottom: 24,
    marginLeft: 13,
    marginRight: 19,
    textAlign: 'center',
    color: '#646464',
  },
  subtext2: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 16,
    color: '#000000',
    lineHeight: 22,
    marginBottom: 144,
  },
  backbtn: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default AppointmentBooked;
