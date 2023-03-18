import Nightmare from 'nightmare';
import electron from 'electron';
const nightmare = require('nightmare')()

export async function checkPrice() {

    const priceString = await nightmare.goto("https://www.otto.de/p/steadyrack-fahrradhalter-steadyrack-fahrrad-wandhalter-mtb-road-rack-S0Z0J03H/#variationId=S0Z0J03HZMMQ")
        .wait("span.pl_headline300")
        .evaluate(() => document.querySelector("span.pl_headline300").innerText)
        .end()

    const priceNumber = parseFloat(priceString.replace('€', '').replace(',', '.'))

    console.log(priceNumber)

    return priceNumber
}


