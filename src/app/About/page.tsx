import React from 'react';

const page = () => {
    return (
         <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
          About ConvertX
        </p>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Currency conversion, made simple.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-gray-600">
          ConvertX helps you convert currencies quickly and easily.
          Check exchange rates, compare global currencies, and get
          the information you need—all in one place.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Simple & Fast
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Convert currencies with just a few clicks.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Global Currencies
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore currencies from around the world.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">
              Live Exchange Rates
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Check the latest available exchange rates.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default page;