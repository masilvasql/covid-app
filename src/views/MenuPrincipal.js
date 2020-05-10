import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
export default class MenuPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => Actions.jump('totalGlobal')}>
                        <Card
                            containerStyle={estilo.estiloCard}
                            title='Total Global'
                        >
                            <Image source={require('../img/earth.jpg')} style={Platform.OS === 'web' ? estilo.estiloImgWeb : estilo.estiloImg} resizeMode='cover' />
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.jump('totalCountries')}>
                        <Card
                            containerStyle={estilo.estiloCard}
                            title='Total Por País'
                        >
                            <Image source={require('../img/countries.jpg')} style={Platform.OS === 'web' ? estilo.estiloImgWeb : estilo.estiloImg} resizeMode='stretch' />
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    estiloCard: {
        marginVertical: 30,
        maxHeight: 400,
        borderRadius: 10,
        elevation: 5,
        borderColor: '#b2bec3',
        borderWidth: 2,
        alignItems: 'center'
    },
    estiloImg: {
        width: "100%",
        height: "80%",
    },
    estiloImgWeb: {
        width: 500,
        height: 200,
    }
})