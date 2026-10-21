# ConvertX 💱

ConvertX is a simple and responsive currency converter built with Next.js and TypeScript. It helps users convert currencies, explore exchange rates, and learn about global currencies through a clean and user-friendly interface.

## 🌐 Live Demo

**[Visit ConvertX](https://convertx-two.vercel.app/)**

## ✨ Features

- **Currency Conversion** — Convert amounts between supported currencies.
- **Multiple Currencies** — Convert between USD, EUR, BDT, and other supported currencies.
- **Exchange Rate Data** — Retrieve the latest available exchange rates from an external API.
- **Currency Swap** — Switch between source and target currencies easily.
- **Responsive Design** — Optimized for mobile, tablet, and desktop devices.
- **Blog Page** — Explore articles about currencies, exchange rates, and financial tips.
- **About Page** — Learn more about ConvertX.
- **Contact Page** — Access contact information.
- **Error Handling** — Handle failed API requests and unavailable exchange rate data.

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- ExchangeRate API

## 🔌 API Integration

ConvertX uses the ExchangeRate API to retrieve currency exchange rate data.

**API endpoint:**

`https://open.er-api.com/v6/latest/USD`

This endpoint provides exchange rates relative to the US Dollar (USD). These rates can be used to calculate conversions between supported currencies.

*Note: Exchange rates may update periodically, and actual rates offered by banks or financial institutions may differ.*

## 🚀 Getting Started

You can use ConvertX directly through the live website without installing anything.

1. Visit the [ConvertX Live Demo](https://convertx-two.vercel.app/).
2. Select your source currency.
3. Select your target currency.
4. Enter the amount you want to convert.
5. View the converted amount using the available exchange rate data.

## 📁 Project Structure

```text
convertx/
├── public/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   └── types/
├── package.json
├── tsconfig.json
└── README.md
```

*This structure is illustrative. Update it to reflect your actual project files and folders.*

## 🔮 Future Improvements

- Add currency search and filtering.
- Display popular currency pairs.
- Integrate historical exchange rate charts.
- Add currency conversion history.
- Expand the currency education blog.
- Improve accessibility and user experience.

## 👨‍💻 Author

**Abdus Salam Talukder**

- GitHub: [@talukder123](https://github.com/talukder123)

