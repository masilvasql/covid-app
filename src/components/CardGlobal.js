import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-elements'
import { numberToReal } from '../functions/formatNumber'

export default class CardGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Card containerStyle={estilo.cardStyle} title={!this.props.country ? null : this.props.country + ' ' + this.props.countryCode}>
                    <View>
                        <View style={estilo.viewBad}>
                            <Text style={estilo.label}>New Confirmed:
                                <Text style={estilo.numbersBad}> {numberToReal(this.props.newConfirmed)}</Text>
                            </Text>
                            <Text style={estilo.label}>New Deaths:
                                <Text style={estilo.numbersBad}>{numberToReal(this.props.newDeaths)}</Text>
                            </Text>
                            <Text style={estilo.label}>New Recovered:
                                <Text style={estilo.numbersBad}> {numberToReal(this.props.newRecovered)}</Text>
                            </Text>
                        </View>
                        <Divider style={estilo.estiloDivider} />
                        <View style={estilo.viewGood}>
                            <Text style={estilo.label}>Total Confirmed:
                                <Text style={estilo.goodNumbers}> {numberToReal(this.props.totalConfirmed)}</Text>
                            </Text>
                            <Text style={estilo.label}>Total Deaths:
                                <Text style={estilo.goodNumbers}> {numberToReal(this.props.totalDeaths)}</Text>
                            </Text>
                            <Text style={estilo.label}>Total Recovered:
                            <Text style={estilo.goodNumbers}> {numberToReal(this.props.totalRecovered)}</Text></Text>
                        </View>
                    </View>
                </Card>
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