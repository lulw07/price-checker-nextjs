import { useEffect, useState } from 'react';
import Nightmare from 'nightmare';
import electron from 'electron';

export async function checkPrice() {
    const nightmare = Nightmare({
        show: false,
        electronPath: electron,
        waitTimeout: 5000,
    });

    const priceString = await nightmare
        .goto('https://www.otto.de/p/swing-harmonie-sitzgruppe-poly-rattan-sitzgarnitur-sydney-esstisch-lounge-gartenmoebel-garten-garnitur-set-1x-tisch-plus-2x-stuehle-plus-1x-sitzbank-plus-2x-hocker-S0Q3V0AW/#variationId=S0Q3V0AWKQHX')
        .wait('span.pl_headline300')
        .evaluate(() => document.querySelector('span.pl_headline300').innerText)
        .end();

    const priceNumber = parseFloat(priceString.replace('€', '').replace(',', '.'));

    console.log(priceNumber);

    return priceNumber;
}
