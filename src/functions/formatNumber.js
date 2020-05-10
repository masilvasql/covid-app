export function numberToReal(numero) {
    if (numero.toString().length > 3) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    } else {
        return numero
    }

}
