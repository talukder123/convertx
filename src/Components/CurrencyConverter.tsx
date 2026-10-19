import { IExchangeRate } from '@/types/type';
import React from 'react';

const getCurrenct = async (): Promise<IExchangeRate> => {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    return data;
}

const CurrencyConverter = async () => {

    const data = await getCurrenct();
    return (
        <div>
            DATA FETCHED

            <p>1 USD = {data.rates.EUR} EUR</p>
            <p>1 USD = {data.rates.BDT} BDT</p>
        </div>
    );
};

export default CurrencyConverter;