import axios from 'axios'

export function getTotalGlobal() {
    return new Promise(result => {
        axios.get('https://api.covid19api.com/summary')
            .then(resp => {
                result(resp.data.Global)
            })
    })
}


export function getTotalCountries() {
    return new Promise(result => {
        axios.get('https://api.covid19api.com/summary')
            .then(resp => {
                result(resp.data.Countries)
            })
    })
}
