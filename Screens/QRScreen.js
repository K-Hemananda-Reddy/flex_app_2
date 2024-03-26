import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios'
import { useUser } from "@clerk/clerk-expo";

export default function QRScreen() {

  const { isLoaded, isSignedIn, user } = useUser();
  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }
  const [hasPermission, setHasPermission] = useState(null);
  const [loading,setLoading]=useState(false)
  const [scanned, setScanned] = useState(false);
  // const [data,setData]=useState('')

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setLoading(true)
    const res=await axios.post('https://flex-cap-api.vercel.app/api/device',{
      Phone:user.phoneNumbers[0].phoneNumber,
      MacAddress:data
    })
    setLoading(false)
    console.log(res.data)
    alert(res.data.message)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
  

    
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
