import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import { numberToReal } from '../functions/formatNumber'
export default class CardCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    componentesLista = ({ item }) => (
        <Card containerStyle={estilo.cardStyle} title={item.Country + ' ' + item.CountryCode}>
            <View>
                <View style={estilo.viewBad}>
                    <Text style={estilo.label}>New Confirmed:
                                <Text style={estilo.numbersBad}> {numberToReal(item.NewConfirmed)}</Text>
                    </Text>
                    <Text style={estilo.label}>New Deaths:
                                <Text style={estilo.numbersBad}>{numberToReal(item.NewDeaths)}</Text>
                    </Text>
                    <Text style={estilo.label}>New Recovered:
                                <Text style={estilo.numbersBad}> {numberToReal(item.NewRecovered)}</Text>
                    </Text>
                </View>
                <Divider style={estilo.estiloDivider} />
                <View style={estilo.viewGood}>
                    <Text style={estilo.label}>Total Confirmed:
                                <Text style={estilo.goodNumbers}> {numberToReal(item.TotalConfirmed)}</Text>
                    </Text>
                    <Text style={estilo.label}>Total Deaths:
                                <Text style={estilo.goodNumbers}> {numberToReal(item.TotalDeaths)}</Text>
                    </Text>
                    <Text style={estilo.label}>Total Recovered:
                            <Text style={estilo.goodNumbers}> {numberToReal(item.TotalRecovered)}</Text></Text>
                </View>
            </View>
        </Card>
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    renderItem={this.componentesLista}
                    data={this.props.data}
                />
            </View>
        );
    }
}


const estilo = StyleSheet.create({
    estiloDivider: {
        paddingVertical: 5,
        backgroundColor: '#81ecec',
        borderRadius: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18
    },
    numbersBad: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#e17055'
    },
    goodNumbers: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#00b894'
    },
    viewGood: {
        marginTop: 15
    },
    viewBad: {
        marginBottom: 15
    },
    cardStyle: {
        borderRadius: 10,
        elevation: 5,
        borderColor: '#b2bec3',
    }
})