

import { IExchangeRate } from '@/types/type';
import React from 'react';
import ConverterForm from './ConverterForm';

const getCurrenct = async (): Promise<IExchangeRate> => {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    return data;
}

const CurrencyConverter = async () => {

    const data = await getCurrenct();
    return (
        <div className='py-10'>
            <ConverterForm data={data}></ConverterForm>
        </div>
    );
};

export default CurrencyConverter;