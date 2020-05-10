import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getTotalGlobal } from '../functions/getData'
import CardGlobal from '../components/CardGlobal'

export default class TotalGlobal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    async getData() {
        let data = await getTotalGlobal()
        this.setState({ data })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (

            <View>
                {
                    !this.state.data ? null :
                        <CardGlobal
                            newConfirmed={this.state.data.NewConfirmed}
                            newDeaths={this.state.data.NewDeaths}
                            newRecovered={this.state.data.NewRecovered}
                            totalConfirmed={this.state.data.TotalConfirmed}
                            totalRecovered={this.state.data.TotalRecovered}
                            totalDeaths={this.state.data.TotalDeaths}
                        />
                }

            </View>
        );
    }
}
