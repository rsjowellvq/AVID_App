/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
Added Stuff

*/
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { stringToBytes } from "convert-string";
 import * as React from 'react';
 import firebase, { initializeApp } from 'firebase/app';
 import 'firebase/auth';
 //import * as firebase from 'firebase';
 //import '@firebase/auth';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Image,
   Button,
   Text,
   TextInput,
   NativeModules,
   NativeEventEmitter,
   Platform,
   TextBase,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 
 
 import { NavigationContainer } from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';

 //https://github.com/dotintent/react-native-ble-plx
import { BleManager as PLX_BLE_MGR, Characteristic, Device } from 'react-native-ble-plx';
import BleManager, { read } from 'react-native-ble-manager';
//import BleManager from '../BleManager';
//const BleManagerModule = NativeModules.BleManager;
//const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

import base64 from 'react-native-base64';
import { debug } from 'react-native-reanimated';
import Buffer from 'buffer';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
export const BTManager = new  PLX_BLE_MGR();



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

console.log("Cheeseburger");

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const avidURL = 'https://avid.vqconnect.io/';
console.log("Cheeseburger10");
const bleManagerModule = NativeModules.BleManager;
console.log("Cheeseburger1 "+bleManagerModule);
const bleManagerEmitter = new NativeEventEmitter(bleManagerModule);
var BufferB = require('buffer/').Buffer;
const mostSig = (928 >> 8) & 0xFF;
console.log("choc");
const leastSig = 928 & 0xFF;
console.log("vanilla");
const valueLittleEndian = [leastSig,mostSig];
console.log("strawb");
const valueInbase64 = BufferB.from("0x000003A0").toString('base64');
console.log("cookies");
const firebaseConfig = {

  apiKey: 'AIzaSyCfNZ5HbTGXds1dU_19JpLF-2RCHrPzfQQ',
  authDomain: 'avid-8066e.firebaseapp.com',
  appId: '1:282500460976:ios:6e01635d6e3df213b8a675'

}


const MyApp = () =>
{
  
  /*<Stack.Navigator screenOptions={{cardStyle:{backgroundColor:'white'}}}>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
      <Stack.Screen name="Connection" component={ConnectionScreen} />
      
      
      <Stack.Screen name="Usage_Data_History" component={Usage_Data_History} options={{title: "Usage Data", headerRight: ()=>(<Button title="hello"/>)}} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Register_Device" component={Register_Device} />
        
        
        
        
        
      </Stack.Navigator>*/
  
      
     initializeApp(firebaseConfig);
     const auth = getAuth();
     let newUser = {
      "username": "test",
      "email":"test",
      "doctorEmail":"test",
      "additionalEmail":"test",
      "additionalEmail2":"test",
      "additionalEmail3":"test",
      "name":"test",
      "accountNumber":"test",
      "serialNumber":"test",
  };
    /* createUserWithEmailAndPassword(auth,"russ.jowell@gmail.com","zeldazelda").then(()=>{

        console.log("Success");}
     ).catch((error)=>{


        console.log("ERror "+error);

     }

     );

     console.log(avidURL+"nodejs/login");
     fetch(avidURL+"nodejs/login",{

      method: 'post',
      body: 'action=appsignUp&whereJson=' + JSON.stringify(newUser)+'&appversion=1.1.0',



      


     }).then((response)=> {console.log("Success "+response.json+response.data+" "+response.msg);}).catch((error)=>{console.log("Trans Error "+error)});*/


  return(
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Login"  screenOptions={{drawerActiveTintColor:'white',drawerInactiveTintColor:'white',  drawerStyle:{drawerActiveTintColor:'yellow',  backgroundColor: '#722080'}}}>
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="CONNECTION" component={ConnectionScreen}/>
        <Drawer.Screen name="USAGE DATA HISTORY" component={ConnectionScreen}/>
        <Drawer.Screen name="REGISTER DEVICE" component={Register_Device}/>
        <Drawer.Screen name="ABOUT" component={About}/>
        <Drawer.Screen name="LOGOUT" component={About}/>
      </Drawer.Navigator>
      
      
    </NavigationContainer>


  );
}




const SignupScreen = ({navigation}) => {

return(
  <View>
  <Text>Username</Text>
  <TextInput></TextInput>
  <Text>E-Mail</Text>
  <TextInput></TextInput>
  <Text>Name</Text>
  <TextInput></TextInput>
  <Text>Password</Text>
  <TextInput></TextInput>
  <Text>Confirm Password</Text>
  <TextInput></TextInput>
  <TouchableOpacity style={{ marginTop:30,marginBottom:20, backgroundColor: '#722053', width:"80%" }}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 25, margin:10, }}>Signup</Text></TouchableOpacity>

  </View>
);


}


const About = ({navigation}) => {

  return(
    <View style={{alignItems: 'center',marginTop:'10%'}}>
      <Image style={{width: '70%', resizeMode:'contain'}} source={require("./images/AVID.jpg")} />
      <Text>Version 1.0.0</Text>
      <Text>Username: TestUser</Text>
      <Text>User Permission: Permission</Text>
      <Text>Contact Information:</Text>
      <Text>VQ OrthoCare</Text>
      <Text>18011 Mitchell St.</Text>
      <Text>Phone: 1-800-266-6969</Text>
      <Text>E-Mail: AvidIF2@vqorthocare.com</Text>
    </View>
    


  );


};

var styles = StyleSheet.create({

  textFields:{
    backgroundColor: 'lightgray',
    height: 40
  },

  loginLabels:
  {
    fontSize: 25,
    fontFamily: "Verdana-Bold",
    color: 'grey'
  },

  forgotLabels:
  {
    color: 'lightgray'
  }


});

/*

0000180a-0000-1000-8000-00805f9b34fb 10739592256 
2022-10-11 13:00:18.766006-0400 AVID_App[694:61776] [javascript] f0001110-0451-4000-b000-000000000000 - 10739591936
2022-10-11 13:00:18.766089-0400 AVID_App[694:61776] [javascript] f0001120-0451-4000-b000-000000000000 - 10739591744
2022-10-11 13:00:18.766180-0400 AVID_App[694:61776] [javascript] f0001130-0451-4000-b000-000000000000 - 10739591872

2022-10-11 13:01:36.494119-0400 AVID_App[700:62716] [connection] nw_socket_connect [C12.2:1] connectx(34, [srcif=0, srcaddr=<NULL>, dstaddr=127.0.0.1:9089], SAE_ASSOCID_ANY, 0, NULL, 0, NULL, SAE_CONNID_ANY) failed: [61: Connection refused]
2022-10-11 13:01:36.496592-0400 AVID_App[700:62714] [javascript] 
2022-10-11 13:01:36.496631-0400 AVID_App[700:62716] [connection] nw_socket_connect [C12.2:1] connectx failed (fd 34) [61: Connection refused]
2022-10-11 13:01:36.496673-0400 AVID_App[700:62714] [javascript] 10739591744
2022-10-11 13:01:36.496676-0400 AVID_App[700:62716] [] nw_socket_connect connectx failed [61: Connection refused]
2022-10-11 13:01:36.496742-0400 AVID_App[700:62714] [javascript] 10739591872

*/



function hexStringToByteArray(hexString) {
  if (hexString.length % 2 !== 0) {
      throw "Must have an even number of hex digits to convert to bytes";
  }/* w w w.  jav  a2 s .  c o  m*/
  var numBytes = hexString.length / 2;
  var byteArray = new Uint8Array(numBytes);
  for (var i=0; i<numBytes; i++) {
      byteArray[i] = parseInt(hexString.substr(i*2, 2), 16);
  }
  return byteArray;
}

const handleDiscoverDevice = (peripheral) => {

  console.log("Peripheral Discovered");
  const currentDevice=null;
  if(peripheral.name != null)
  {
    console.log("Name is "+peripheral.name.substring(0,4));
  }
  //console.log(peripheral.name.substring(0,3) == "Avid");
  if(peripheral.name != null && peripheral.name.substring(0,4) == "Avid")
  {
    console.log("Milkshake");
    //currentDevice = peripheral;

    bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic',({value,peripheral,characteristic,service})=>{

      console.log("The Return Value Is "+value);

    });

    BleManager.stopScan().then(()=>{

      console.log("Device Is "+peripheral.name);
    
    BleManager.connect(peripheral.id).then(()=>{

      console.log("Connected");

      BleManager.retrieveServices(peripheral.id,["F0001130-0451-4000-B000-000000000000"]).then((peripheralInfo)=>{

        

          let command = ['03','A0'];
          let data = command.map(x=>{return parseInt(x,16);});
       
          
          
          
          BleManager.write(peripheral.id,"F0001130-0451-4000-B000-000000000000","F0001131-0451-4000-B000-000000000000", data).then(()=>{

            console.log("Write Success");
            
  
          }).catch((error)=>{
  
            console.log("Write Error "+error);
  
          });

          BleManager.read(peripheral.id,"F0001130-0451-4000-B000-000000000000","F0001131-0451-4000-B000-000000000000").then((readData)=>{
  
            console.log("Data From Device A "+readData);
  
  
          });
          
          BleManager.read(peripheral.id,"F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((readData)=>{
  
            console.log("Data From Device 1 "+readData.bytes);

            const buffer = Buffer.Buffer.from(readData); //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
            const sensorData = buffer.readUInt8(1, true);
            console.log("Buffer Data 1 "+sensorData);
  
  
          });

          BleManager.read(peripheral.id,"F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((readData)=>{
  
            console.log("Data From Device 2 "+readData);

            //const buffer = Buffer.Buffer.from(readData); //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
            //const sensorData = buffer.readUInt8(, true);
            //console.log("Buffer Data 2 "+sensorData);
  
  
          });

          BleManager.read(peripheral.id,"F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((readData)=>{
  
            console.log("Data From Device 3 "+readData.data);

            const buffer = Buffer.Buffer.from(readData); //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
            const sensorData = buffer.readUInt8(7, true);
            console.log("Buffer Data 3 "+sensorData);
  
  
          });




       
        
        
        
        
        
        
        
        
        
        


      });


    }).catch((error)=>{

      console.log("Connect Error "+error)

    });



    });
    
  }

}

const LoginScreen = ({navigation}) => {

  const [avidSerialNumber,getSerialNumber] = React.useState("No Devices Found!");
  
   
  

  /*async function GetUsageData(device)
  {
    await device.writeCharacteristicWithoutResponseForService("F0001130-0451-4000-B000-000000000000","F0001131-0451-4000-B000-000000000000", BufferB.from("03A0").toString('base64'));
    device.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((value)=>{

      console.log("The Value Is 1");
      console.log(value);

    });
    device.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((value)=>{

      console.log("The Value Is 2");
      console.log(value);

    });
    device.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((value)=>{

      console.log("The Value Is 3");
      console.log(value);

    });

  }*/
    console.log("teaaa");
    //BleManager.retrieveServices("5F5B4627-6EC8-171C-2F2D-718C2536CF17","F0001130-0451-4000-B000-000000000000");
    console.log("juice");


    React.useEffect(()=>{

      BleManager.start();

      bleManagerEmitter.addListener('BleManagerDiscoverPeripheral',handleDiscoverDevice);

      BleManager.scan([],30,false).then(()=>{

        console.log("Scan Started");

      });


    },[]);
    
    
    //BLE-PLX
    /*React.useEffect(()=>{

      const subscription = BTManager.onStateChange((state)=>{

        if(state == 'PoweredOn')
        {
          BTManager.startDeviceScan(null,null,(error,device)=>{

            if(error)
            {
              console.log(error);
              getSerialNumber("No Device Detected");
            }

            BTManager.connectToDevice();
            if(device != null)
            {
              if(device.localName != null && device.localName.substring(0,4) == "Avid")
              {
                console.log("Dogs "+device.id);


                async function GetUsageData(deviceInput)
                {
                  console.log("Step 11");
                  await deviceInput.writeCharacteristicWithResponseForService("F0001130-0451-4000-B000-000000000000","F0001131-0451-4000-B000-000000000000");
                  console.log("Step 22");
                  deviceInput.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((value)=>{
                    console.log("Step 33");
                    console.log("The Value Is 1");
                    console.log(value);
              
                  });
                }
                BleManager.retrieveServices(device.id).then(()=>{

                  console.log("Prop Success");
                  console.log("Properties Success ");

                }).catch((error)=>{

                  console.log("Bogs");
                  console.log("read error ");

                });
                console.log("Cats");
                
                device.connect().then((device)=>{

                  console.log("pissy");
                  //retrieveServices(device.id);
                  console.log("poopy");
                  BTManager.stopDeviceScan();
                  
                  device.discoverAllServicesAndCharacteristics().then((device)=>{

                                         
                    
                      console.log("cheesecake sucks "+device.id+" "+valueInbase64);
                      
                      device.writeCharacteristicWithResponseForService("F0001130-0451-4000-B000-000000000000","F0001131-0451-4000-B000-000000000000","A6A=").then((theCharac)=>{

                        device.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((res)=>{

                          console.log("boobs");
                          console.log(res.value+" ");

                        });
                       

                      });
                      
                      

                      return device;
                    
                    
                   


                  }).then((device)=>{


                    device.readCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000").then((response)=>{
                      return response;

                      /*console.log("Your Prize Is "+response.value);
                      BTManager.monitorCharacteristicForDevice(device.id,"F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000",(error,character)=>{

                        console.log("Cheese "+character.value);


                      });
                      device.monitorCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000",(error,charact)=>{

                        console.log(charact.value);

                      });

                    });
                    
                    
                   


                  }).then((characteristicInput)=>{

                    
                    device.monitorCharacteristicForService("F0001130-0451-4000-B000-000000000000","F0001132-0451-4000-B000-000000000000",(error,charact)=>{

                      console.log(charact.value);

                    });
                    


                  });


                }).catch((error)=>{


                    console.log("There was an error");
                    console.log(error);

                });
              }
            }
            else
            {
              getSerialNumber("There's no device!");
            }


          });
        }


      },true);


      return () => subscription.remove();
    },[BTManager]);*/



  
    /*React.useEffect(()=>{

      
      
      
      
      const subscription = BTManager.onStateChange((state)=>{
        
        console.log(state);
        if(state === 'PoweredOn')
        {
          BTManager.startDeviceScan(null,null,(error,device)=>{
  
            
            
            if(error)
            {
              console.log(error);
              getSerialNumber("No Device Detected");
            }
            BTManager.connectToDevice()
            if(device != null)
            {
              console.log("Device is "+device);
              if(device.localName != null && device.localName.substring(0,4) == "Avid")
              {
                
                
                console.log("WE Found Ittt!! "+stringToBytes("03a0")+" "+stringToBytes("AQA="));
                device.connect().then((device)=>{
                  BTManager.stopDeviceScan();
                  console.log("One");
                  device.retrieveServices().then(()=>{

                    console.log("Services Read ");
                    return true;

                  });
                  BTManager.retrieveServices(device.id).then((deviceInfo)=>{

                    console.log("Servcices Success");
                    console.log(deviceInfo);

                  });
                  console.log("Services Retrieved");
                  return device.discoverAllServicesAndCharacteristics()

                }).then((device)=>{
                  
                  
                  //retrieveServices(device.id);
                  console.log("success services");
                  
                 GetUsageData(device);
                    
                    console.log("Write Success");
                  }).catch((error)=>{
                    console.log("error iss "+error);

                  });
                  


                  device.services().then((service)=>{

                    console.log("Services "+service.length)
                    for(const ser of service)
                    {
                      console.log("New Service")
                      console.log(ser.uuid)
                      ser.characteristics().then((character)=>{

                        for(const ch of character)
                        {
                          
                          console.log(ch.uuid)
                          if(ch.uuid == "f0001131-0451-4000-b000-000000000000")
                          {
                            ch.writeWithoutResponse("BA==");

                          }
                          if(ch.uuid == "f0001132-0451-4000-b000-000000000000")
                          {
                            ch.read().then((value)=>{

                              console.log("Value is");
                              console.log(value);

                            });
                          }
                          ch.read().then((value)=>{

                            ch.descriptors().then((descValue)=>{

                              for(const desc of descValue)
                              {
                                console.log("Descriptor Value "+desc.value)
                              }




                            })
                            
                            
                            //console.log(value.value)
                            //console.log("New Characteristic "+ch.uuid+" "+value.value)
                            //console.log(ch.uuid)
                            //console.log(value.value)

                          })*/
                          /*if(ch.uuid == 'f0001111-0451-4000-b000-000000000000' || ch.uuid == 'f0001112-0451-4000-b000-000000000000')
                          {
                            ch.read().then((value)=>{

                              console.log("Charac Value 11 "+value.value)
                              console.log("Value One "+base64.decode(value.value))
                              console.log("Value Two "+Buffer.from(value.value,'base64'))
  
                            })
                          }
                          
                        }

                      })
                    }


                  })
                  
                  
                  
                  
                  
                  console.log("jimmy buffet")
                  device.characteristicsForService('f0001130-0451-4000-b000-000000000000').then((charac)=>{


                    console.log("Dairy Queen")
                    for(const characs of charac)
                    {
                      console.log(characs.uuid+" "+characs.id+" "+characs.value+" "+characs)
                      

                      characs.read().then((value)=>{

                        console.log("Charac Value")
                        console.log(value)

                      })


                      characs.descriptors().then((descript)=>{

                        for(const descr of descript)
                        {
                          console.log("Descriptor Info "+descr.id+" "+descr.value+" "+descr.uuid)

                        }
                        for(const value of descript.values())
                        {
                          
                          value.read().then((values)=>{

                            console.log(values.value)

                          })
                        }
                        
                        
                        console.log(descript.values())

                      })
                    }

                  })*/
                  /*device.services().then((service)=>{

                    for(const serr of service)
                    {
                      console.log("Service NAme "+serr.uuid+" "+serr.id);
                      return(device.readCharacteristicForService(serr.uuid))
                    }

                  })

                 

                    
                  
                 
                  
                  
                  console.log("Services Is Here"+device.services());
                  //return device.readCharacteristicForService('f0001110-0451-4000-b000-000000000000')

                }).then(()=>{

                     


                });


                
                BTManager.connectToDevice(device.id).then(async device =>{

                  await device.discoverAllServicesAndCharacteristics();

                  device.services().then(service=>{

                      for(const ser of service)
                      {
                        
                        console.log("Service Name "+ser.uuid);
                        ser.characteristics().then(characteristic=>{

                          console.log("ice cream");
                          
                          //characteristic.des
                          

                        });
                      }

                  });


                });
                //console.log(deviceData);
                //scanAndConnect(device);

                //console.log(

                

                alert("Found Device: "+device.localName);
                getSerialNumber(device.localName);
                
                //console.log(deviceProperties);
                BTManager.stopDeviceScan();
                
              }
              else
              {
                console.log("Nope");
                //getSerialNumber("No Device Found!!");
              }
            }
            else
            {
              getSerialNumber("There's no device!")
            }
  
            
              //console.log("Device "+device.manufacturerData+" "+device.id+" "+device.localName+" "+device.mtu+" "+device.serviceData);
            
  
  
          });
        }
    
    
      },true);
    
      return () => subscription.remove();
    
    
    },[BTManager]);*/
  
  
  
  
  
  
  return(
    <View style={{justifyContent: 'center', alignItems: 'center',marginTop: '20%'}}>
    
      <Image style={{width: '70%', resizeMode:'contain'}} source={require("./images/AVID.jpg")} />
    
    <View style={{width: '80%'}}>
    <Text style={styles.loginLabels}>Username</Text>
    <TextInput style={styles.textFields}></TextInput>
    <Text style={styles.loginLabels}>Password</Text>
    <TextInput style={styles.textFields}></TextInput>
    <View style={{flexDirection: "row",marginTop: 10, width:'100%'}}>
    <Button color='gray' title="Forgot Username?"/>
    <Button color='gray' title="Forgot Password?"/>
    </View>
    </View>
    
    <TouchableOpacity style={{ marginTop:30,marginBottom:20, backgroundColor: '#722053', width:"80%" }}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 25, margin:10, }}>Login</Text></TouchableOpacity>
    <Button color='gray' title="Signup"/>
    <Text>Your Device ID Is:</Text>
    <Text>{avidSerialNumber}</Text>
    </View>



  );


};

const Register_Device = ({navigation}) => {

  return(
    <View style={{justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{color:'grey',fontSize:20,fontWeight:'bold'}}>Please scan the device barcode for registering</Text>
    
    <TouchableOpacity style={{marginTop:30,marginBottom:20, borderColor: '#722053',borderWidth:2, width:"80%" }}><Text style={{ fontFamily: "Verdana-Bold",color: '#aaa', textAlign: 'center', fontSize: 20, margin:5, }}>Scan</Text></TouchableOpacity>
    <TouchableOpacity style={{marginTop:30,marginBottom:20, backgroundColor: '#722053'}}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 18, marginHorizontal: 10, marginVertical:5 }}>Registering Device</Text></TouchableOpacity>
    

    </View>
    


  );


};



const ConnectionScreen = ({navigation}) => {

  return(
    <View style={{flex:1}}>
      <Text style={styles.loginLabels}>Paired</Text>
      <TextInput></TextInput>
      <Text style={styles.loginLabels}>Available</Text>
      <View style={{justifyContent: 'flex-end',flex:1,marginBottom: 30}}>
      <View style={{justifyContent: 'space-evenly',  flexDirection: "row",marginTop: 10, width:'100%'}}>
      <TouchableOpacity style={{ marginTop:30,marginBottom:20, backgroundColor: '#722053' }}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 15, margin:10 }}>New</Text></TouchableOpacity>

      <TouchableOpacity style={{ marginTop:30,marginBottom:20, backgroundColor: '#722053' }}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 15, margin:10 }}>Continue</Text></TouchableOpacity>

      <TouchableOpacity style={{ marginTop:30,marginBottom:20, backgroundColor: '#722053' }}><Text style={{ fontFamily: "Verdana-Bold",color: '#fff', textAlign: 'center', fontSize: 15, margin:10 }}>Edit</Text></TouchableOpacity>

    </View>
    </View>
    </View>


  );

};

const Usage_Data_History = ({navigation}) => {

  return(
    <Text>Usage Data Screen</Text>


  );

};



async function scanAndConnect(device)
{
  device.discoverAllServicesAndCharacteristics().then(console.log("tada!!"));
  //const deviceProperties = await getServicesAndCharacteristics(deviceCharacteristics);
  //console.log("Properties");
  //console.log(deviceProperties);
}




export default MyApp;
