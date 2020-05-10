import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import MenuPrincipal from './views/MenuPrincipal'
import TotalGlobal from './views/TotalGlobal'
import TotalCountries from './views/TotalCountries'

export default function Rotas() {
    return (
        <Router>
            <Stack hideNavBar={true}>
                <Scene key='menuPrincipal' component={MenuPrincipal} initial />
                <Scene key='totalGlobal' component={TotalGlobal} />
                <Scene key='totalCountries' component={TotalCountries} />
            </Stack>
        </Router>
    )
}