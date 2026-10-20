'use client';

import { IExchangeRate } from '@/types/type';
import React, { useState } from 'react';

interface IdataType {
    data: IExchangeRate;
}

const ConverterForm = ({ data }: IdataType) => {
    const rates = data.rates;
    const currencies = Object.keys(rates);

    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('BDT');
    const [error, setError] = useState('');
    const [result, setResult] = useState<{
        amount: number;
        from: string;
        to: string;
        value: number;
        rate: number;
    } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = parseFloat(amount);
        if (isNaN(value) || value <= 0) {
            setError('Enter an amount greater than 0');
            setResult(null);
            return;
        }

        setError('');
        const rate = rates[to] / rates[from];
        setResult({ amount: value, from, to, value: value * rate, rate });
    };

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
        setResult(null);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-indigo-200/50 backdrop-blur-xl sm:p-8"
        >
            {/* Amount */}
            <label htmlFor="amount" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Amount
            </label>
            <div
                className={`mt-2 flex items-center rounded-2xl border bg-slate-50 px-4 transition focus-within:bg-white focus-within:ring-4 ${error
                        ? 'border-red-300 focus-within:ring-red-100'
                        : 'border-slate-200 focus-within:border-indigo-400 focus-within:ring-indigo-100'
                    }`}
            >
                <span className="mr-2 text-lg font-semibold text-slate-400">{from}</span>
                <input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-transparent py-4 text-2xl font-bold text-slate-900 outline-none placeholder:text-slate-300"
                />
            </div>
            {error && <p className="mt-2 text-sm font-medium text-red-500">{error}</p>}

            {/* From / Swap / To */}
            <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-end gap-3">
                <div>
                    <label htmlFor="from" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        From
                    </label>
                    <select
                        id="from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="mt-2 w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    >
                        {currencies.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <button
                    type="button"
                    onClick={handleSwap}
                    aria-label="Swap currencies"
                    className="mb-0.5 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-lg text-indigo-600 transition hover:rotate-180 hover:bg-indigo-100 active:scale-90"
                >
                    ⇄
                </button>

                <div>
                    <label htmlFor="to" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        To
                    </label>
                    <select
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="mt-2 w-full cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    >
                        {currencies.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Button */}
            <button
                type="submit"
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-4 font-bold text-white shadow-lg shadow-indigo-300/50 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
            >
                Convert
            </button>

            {/* Result */}
            {result && (
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 p-5 text-center ring-1 ring-indigo-100">
                    <p className="text-sm font-medium text-slate-500">
                        {result.amount.toLocaleString()} {result.from} =
                    </p>
                    <p className="mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                        {result.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        <span className="ml-2 text-2xl">{result.to}</span>
                    </p>
                    <p className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
                        1 {result.from} = {result.rate.toFixed(4)} {result.to}
                    </p>
                </div>
            )}
        </form>
    );
};

export default ConverterForm;