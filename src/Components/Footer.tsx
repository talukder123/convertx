import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-8 text-center">
  <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
    <div className="flex items-center gap-2">
      <span className="text-2xl">💱</span>
      <h3 className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
        CurrencyConverter
      </h3>
    </div>

    <p className="max-w-md text-sm leading-relaxed text-slate-400">
      Fast, simple conversions between currencies around the world.
      Exchange rates are indicative and may differ from actual market rates.
    </p>

    <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />

    <p className="text-xs text-slate-500">
      © {new Date().getFullYear()} CurrencyConverter. All rights reserved.
    </p>
  </div>
</footer>
    );
};

export default Footer;