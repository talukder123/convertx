import React from 'react';

const BannerSection = () => {
    return (
        <div>
            <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50 to-indigo-50">
                <div className="container mx-auto grid items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-14">
                    {/* LEFT */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900">
                            Convert<span className="text-indigo-600">X</span>
                        </h2>
                        <p className="text-sm text-slate-500">Smart Currency Converter</p>

                        <h1 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                            Real Exchange Rates
                            <br />
                            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Fast &amp; Simple
                            </span>
                        </h1>

                        <p className="mt-3 max-w-sm text-base text-slate-500">
                            Convert between USD, EUR, BDT and more, all in one place
                        </p>

                        <div className="mt-6 flex flex-wrap gap-6">
                            <div>
                                <p className="text-sm font-semibold text-slate-800">Live Rates</p>
                                <p className="text-xs text-slate-500">Up to date</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">Accurate</p>
                                <p className="text-xs text-slate-500">Trusted sources</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-800">Global Currencies</p>
                                <p className="text-xs text-slate-500">Worldwide Coverage</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative mx-auto h-65 w-75 max-w-full">
                        <div className="absolute left-25 top-0 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-linear-to-b from-sky-400 to-blue-600 text-white shadow-xl">
                            <span className="text-4xl font-bold leading-none">$</span>
                            <span className="mt-1 text-sm font-bold">USD</span>
                        </div>

                        <div className="absolute left-0 top-35 flex h-24 w-24 -rotate-6 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-purple-400 to-indigo-500 text-white shadow-xl">
                            <span className="text-4xl font-bold leading-none">€</span>
                            <span className="mt-1 text-sm font-bold">EUR</span>
                        </div>

                        <div className="absolute left-47.5 top-35 flex h-24 w-24 rotate-6 flex-col items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-emerald-600 text-white shadow-xl">
                            <span className="text-4xl font-bold leading-none">৳</span>
                            <span className="mt-1 text-sm font-bold">BDT</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BannerSection;