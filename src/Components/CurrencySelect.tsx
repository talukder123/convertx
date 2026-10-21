'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

interface Props {
    id: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}

const CurrencySelect = ({ id, value, options, onChange }: Props) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    const filtered = useMemo(
        () => options.filter((c) => c.toLowerCase().includes(query.toLowerCase())),
        [options, query]
    );

    // close when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const select = (c: string) => {
        onChange(c);
        setOpen(false);
        setQuery('');
    };

    return (
        <div ref={ref} className="relative mt-2">
            <button
                id={id}
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            >
                {value}
                <span className="text-xs text-slate-400">▾</span>
            </button>

            {open && (
                <div className="absolute left-0 z-50 mt-2 w-full min-w-[180px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <input
                        autoFocus
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // don't submit the form
                                if (filtered[0]) select(filtered[0]);
                            }
                            if (e.key === 'Escape') setOpen(false);
                        }}
                        placeholder="Search currency..."
                        className="w-full border-b border-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
                    />
                    <ul className="max-h-56 overflow-y-auto py-1">
                        {filtered.length === 0 && (
                            <li className="px-4 py-3 text-sm text-slate-400">No results</li>
                        )}
                        {filtered.map((c) => (
                            <li
                                key={c}
                                onClick={() => select(c)}
                                className={`cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-indigo-50 ${
                                    c === value ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700'
                                }`}
                            >
                                {c}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CurrencySelect;