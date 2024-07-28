import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import styles from '../components/styles';

const PatientaccountPage = () => {
  return (
    <View style={styles.container}>
      <View style={Newstyles.rowcontainer}>
        <View style={Newstyles.profileview}>
          <Text style={Newstyles.nametxt}>Salva Kolilov</Text>
          <Text style={Newstyles.emailtxt}>salvakolilov@gmail.com</Text>
        </View>
        <Image
          style={Newstyles.pfimage}
          source={require('../asset/doctorpfp4.png')}
        />
      </View>
      <View style={Newstyles.rowdiv}>
        <Text style={Newstyles.rowdivtxt}>Personal Data</Text>
      </View>
      {/* ---- */}
      <View style={Newstyles.rowdiv}>
        <Text style={Newstyles.rowdivtxt}>Plus Membership</Text>
      </View>
      {/* --- */}
      <View style={Newstyles.rowdiv}>
        <Text style={Newstyles.rowdivtxt}>Payment</Text>
      </View>
      {/* --- */}
      <View style={Newstyles.rowdiv}>
        <Text style={Newstyles.rowdivtxt}>Settings</Text>
      </View>
      {/* --- */}
      <View style={Newstyles.rowdiv}>
        <Text style={Newstyles.rowdivtxt}>Help & Support</Text>
      </View>
      <View style={Newstyles.logoutbtncontainer}>
        <TouchableOpacity style={Newstyles.logoutbtn}>
          <Text style={Newstyles.logouttext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Newstyles = StyleSheet.create({
  nametxt: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 33,
    color: '#000000',
  },
  emailtxt: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    color: '#646464',
  },
  rowcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 84,
    marginBottom: 64,
  },
  profileview: {
    paddingTop: 8,
  },
  pfimage: {
    width: 72,
    height: 72,
  },
  rowdiv: {
    marginBottom: 40,
  },
  rowdivtxt: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 25,
    color: '#000000',
  },
  logoutbtncontainer: {
    marginTop: 104,
  },
  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4F58DF',
    borderRadius: 5,
    height: 48,
  },
  logouttext: {
    fontFamily: 'NunitoSans-SemiBold',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22,
    color: '#4F58DF',
  },
});

export default PatientaccountPage;
