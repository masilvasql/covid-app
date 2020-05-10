import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTotalCountries } from '../functions/getData'
import CardCountries from '../components/CardCountries'
import { Container, Header, Item, Icon, Button, Input } from 'native-base';

export default class TotalCountries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataOriginal: null
        };
    }

    async getData() {
        let data = await getTotalCountries()
        this.setState({ data })
        this.setState({ dataOriginal: data })
    }

    pesquisa(texto) {
        let filtro = this.state.data
        if (texto) {
            filtro = filtro.filter(f => f.Country.toLowerCase() == texto.toLowerCase() || f.CountryCode.toLowerCase() == texto.toLowerCase())
            if (filtro.length > 0) {
                this.setState({ data: filtro })
            }
        } else {
            this.setState({ data: this.state.dataOriginal })
        }
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <View>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Pesquise por País ou Silga" onChangeText={(e) => this.pesquisa(e)} />
                            <Icon name="ios-flag" />
                        </Item>
                    </Header>

                </View>
                {
                    !this.state.data ? null :

                        <CardCountries
                            data={this.state.data}
                        />
                }

            </View>
        );
    }
}
