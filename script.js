$.ajax({
    url: "datos.json",
    method: "GET",
    dataType: "JSON",
    success: function(data) {
        console.log(data);
    }
})

function cambio() {
    var valor = parseFloat($('#cantidad')[0].value);
    $('#valor')[0].innerHTML = "<b>" + valor + "</b>";
    var de = $('#de')[0].value;
    var a = $('#a')[0].value;


    var dolar = 170;
    var btc = 36500;
    var eth = 2200;
    var usdt = 170;
    var bnb = 310;
    var doge = 0.35;
    var ada = 1.77;
    var xrp = 1.02;
    var dot = 27.25;
    resulado = 0;
    //peso a dolar
    if (de == 1 && a == 2) {
        resultado = valor / dolar
    }
    //peso a btc
    else if (de == 1 && a == 3) {
        resultado = (valor / dolar) / btc
    }
    //dolar a peso
    else if (de == 2 && a == 1) {
        resultado = valor * dolar;
    }
    //dolar a btc
    else if (de == 2 && a == 3) {
        resultado = valor / btc;
    }
    //peso a eth
    else if (de == 1 && a == 4) {
        resultado = (valor / dolar) / eth
    }
    //dolar a eth
    else if (de == 2 && a == 4) {
        resultado = valor / eth;
    }
    //peso a usdt
    else if (de == 1 && a == 5) {
        resultado = valor / usdt
    }
    //peso a bnb
    else if (de == 1 && a == 6) {
        resultado = (valor / dolar) / bnb
    }
    //dolar a bnb
    else if (de == 2 && a == 6) {
        resultado = valor / bnb;
    }
    //peso a doge
    else if (de == 1 && a == 7) {
        resultado = (valor / dolar) / doge
    }
    //dolar a doge
    else if (de == 2 && a == 7) {
        resultado = valor / doge;
    }
    //peso a ada
    else if (de == 1 && a == 8) {
        resultado = (valor / dolar) / ada
    }
    //dolar a ada
    else if (de == 2 && a == 8) {
        resultado = valor / ada;
    }
    //peso a xrp
    else if (de == 1 && a == 9) {
        resultado = (valor / dolar) / xrp
    }
    //dolar a xrp
    else if (de == 2 && a == 9) {
        resultado = valor / xrp;
    } //peso a dot
    else if (de == 1 && a == 10) {
        resultado = (valor / dolar) / dot
    }
    //dolar a dot
    else if (de == 2 && a == 10) {
        resultado = valor / dot;
    }
    //btc a todo
    else if (de == 3 && a == 1) {
        resultado = (valor * btc) * dolar;
    } else if (de == 3 && a == 2) {
        resultado = (valor * btc) - btc + btc;
    } else if (de == 3 && a == 4) {
        resultado = (valor * btc) / eth;
    } else if (de == 3 && a == 5) {
        resultado = (valor * btc) - btc + btc;
    } else if (de == 3 && a == 6) {
        resultado = (valor * btc) / bnb;
    } else if (de == 3 && a == 7) {
        resultado = (valor * btc) / doge;
    } else if (de == 3 && a == 8) {
        resultado = (valor * btc) / ada;
    } else if (de == 3 && a == 9) {
        resultado = (valor * btc) / xrp;
    } else if (de == 3 && a == 10) {
        resultado = (valor * btc) / dot;
    } //eth a todo
    else if (de == 4 && a == 1) {
        resultado = (valor * eth) * dolar;
    } else if (de == 4 && a == 2) {
        resultado = (valor * eth) - eth + eth;
    } else if (de == 4 && a == 3) {
        resultado = (valor * eth) / btc;
    } else if (de == 4 && a == 5) {
        resultado = (valor * eth) - eth + eth;
    } else if (de == 4 && a == 6) {
        resultado = (valor * eth) / bnb;
    } else if (de == 4 && a == 7) {
        resultado = (valor * eth) / doge;
    } else if (de == 4 && a == 8) {
        resultado = (valor * eth) / ada;
    } else if (de == 4 && a == 9) {
        resultado = (valor * eth) / xrp;
    } else if (de == 4 && a == 10) {
        resultado = (valor * eth) / dot;
    } //bnb a todo
    else if (de == 6 && a == 1) {
        resultado = (valor * bnb) * dolar;
    } else if (de == 6 && a == 2) {
        resultado = (valor * bnb) - bnb + bnb;
    } else if (de == 6 && a == 3) {
        resultado = (valor * bnb) / btc;
    } else if (de == 6 && a == 4) {
        resultado = (valor * bnb) / eth;
    } else if (de == 6 && a == 5) {
        resultado = (valor * bnb) - bnb + bnb;
    } else if (de == 6 && a == 7) {
        resultado = (valor * bnb) / doge;
    } else if (de == 6 && a == 8) {
        resultado = (valor * bnb) / ada;
    } else if (de == 6 && a == 9) {
        resultado = (valor * bnb) / xrp;
    } else if (de == 6 && a == 10) {
        resultado = (valor * bnb) / dot;
    } //doge a todo
    else if (de == 7 && a == 1) {
        resultado = (valor * doge) * dolar;
    } else if (de == 7 && a == 2) {
        resultado = (valor * doge) - doge + doge;
    } else if (de == 7 && a == 3) {
        resultado = (valor * doge) / btc;
    } else if (de == 7 && a == 4) {
        resultado = (valor * doge) / eth;
    } else if (de == 7 && a == 5) {
        resultado = (valor * doge) - doge + doge;
    } else if (de == 7 && a == 6) {
        resultado = (valor * doge) / bnb;
    } else if (de == 7 && a == 8) {
        resultado = (valor * doge) / ada;
    } else if (de == 7 && a == 9) {
        resultado = (valor * doge) / xrp;
    } else if (de == 7 && a == 10) {
        resultado = (valor * doge) / dot;
    }
    //ada a todo
    else if (de == 8 && a == 1) {
        resultado = (valor * ada) * dolar;
    } else if (de == 8 && a == 2) {
        resultado = (valor * ada) - ada + ada;
    } else if (de == 8 && a == 3) {
        resultado = (valor * ada) / btc;
    } else if (de == 8 && a == 4) {
        resultado = (valor * ada) / eth;
    } else if (de == 8 && a == 5) {
        resultado = (valor * ada) - ada + ada;
    } else if (de == 8 && a == 6) {
        resultado = (valor * ada) / bnb;
    } else if (de == 8 && a == 7) {
        resultado = (valor * ada) / doge;
    } else if (de == 8 && a == 9) {
        resultado = (valor * ada) / xrp;
    } else if (de == 8 && a == 10) {
        resultado = (valor * ada) / dot;
    }
    //xrp a todo
    else if (de == 9 && a == 1) {
        resultado = (valor * xrp) * dolar;
    } else if (de == 9 && a == 2) {
        resultado = (valor * xrp) - xrp + xrp;
    } else if (de == 9 && a == 3) {
        resultado = (valor * xrp) / btc;
    } else if (de == 9 && a == 4) {
        resultado = (valor * xrp) / eth;
    } else if (de == 9 && a == 5) {
        resultado = (valor * xrp) - xrp + xrp;
    } else if (de == 9 && a == 6) {
        resultado = (valor * xrp) / bnb;
    } else if (de == 9 && a == 7) {
        resultado = (valor * xrp) / doge;
    } else if (de == 9 && a == 8) {
        resultado = (valor * xrp) / ada;
    } else if (de == 9 && a == 10) {
        resultado = (valor * xrp) / dot;
    } //dot a todo
    else if (de == 10 && a == 1) {
        resultado = (valor * dot) * dolar;
    } else if (de == 10 && a == 2) {
        resultado = (valor * dot) - dot + dot;
    } else if (de == 10 && a == 3) {
        resultado = (valor * dot) / btc;
    } else if (de == 10 && a == 4) {
        resultado = (valor * dot) / eth;
    } else if (de == 10 && a == 5) {
        resultado = (valor * dot) - dot + dot;
    } else if (de == 10 && a == 6) {
        resultado = (valor * dot) / bnb;
    } else if (de == 10 && a == 7) {
        resultado = (valor * dot) / doge;
    } else if (de == 10 && a == 8) {
        resultado = (valor * dot) / ada;
    } else if (de == 10 && a == 9) {
        resultado = (valor * dot) / xrp;
    }

    //pares a pares
    else {
        resultado = valor
    }

    //creado de sigla despues de resultado.
    if (a == 1) {
        sigla = " $ARS";
    } else if (a == 2) {
        sigla = " $USD";
    } else if (a == 3) {
        sigla = " BTC";
    } else if (a == 4) {
        sigla = " ETH";
    } else if (a == 5) {
        sigla = " USDT";
    } else if (a == 6) {
        sigla = " BNB";
    } else if (a == 7) {
        sigla = " DOGE";
    } else if (a == 8) {
        sigla = " ADA";
    } else if (a == 9) {
        sigla = " XRP";
    } else if (a == 10) {
        sigla = " DOT";
    }

    //creando signo $ en pesos/dolares
    if (a == 1) {
        signo = "$ ";
    } else if (a == 2) {
        signo = "$ ";
    } else { signo = "" };

    $('#resultado')[0].innerHTML = "Resultado: " + signo + resultado.toFixed(5) + sigla;

};