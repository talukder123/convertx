import React from 'react';

const getCurrenct =  async () => {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = res.json();
    return data;
}

const CurrencyConverter = async () => {

    const data = await getCurrenct();
    console.log(data);
    return (
        <div>
            DATA FETCHED
        </div>
    );
};

export default CurrencyConverter;