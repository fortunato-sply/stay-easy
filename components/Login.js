import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import {  } from 'react-native-web';
const logo = require('../assets/logo.png');

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='Email or username'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        secureTextEntry
                        placeholder='Password'
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => navigation.navigate("cadastro")}
                >
                    <Text 
                        style={{
                            fontFamily: 'Poppins', 
                            fontWeight: '600', 
                            fontSize: '1.24rem'}}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080708',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF902B',
        borderRadius: '12px',
        width: '180px',
        maxHeight: '50px',
        marginTop: '7rem'
    },
    box: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        padding: '24px',
        borderRadius: '24px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        width: '100vw',
        height: '75vh',
        backgroundColor: '#786452'

    },
    logo: {
        marginTop: '20px',
        width: '114px',
        height: '58px',
        resizeMode: 'contain',
        
    },
    inputs: {
        width: "80%",
        maxHeight: '12rem',
        flex: 1,
        justifyContent: 'center',
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#080708",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    }
});