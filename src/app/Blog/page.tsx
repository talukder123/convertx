
const blogs = [
  {
    category: "Currency Guide",
    title: "Understanding Exchange Rates: A Beginner's Guide",
    description:
      "Exchange rates determine how much one currency is worth compared to another. They fluctuate based on supply and demand, inflation, interest rates, and global economic conditions.",
    date: "Oct 20, 2026",
    readTime: "5 min read",
  },
  {
    category: "Travel",
    title: "How to Save Money When Exchanging Currency",
    description:
      "Planning an international trip? Compare exchange rates, check transaction fees, avoid unnecessary conversions, and understand your bank's foreign transaction charges before exchanging money.",
    date: "Oct 15, 2026",
    readTime: "4 min read",
  },
  {
    category: "Finance",
    title: "USD, EUR, and BDT: What You Should Know",
    description:
      "The US Dollar, Euro, and Bangladeshi Taka play important roles in global and regional transactions. Learn how these currencies are used and what factors influence their exchange values.",
    date: "Oct 10, 2026",
    readTime: "6 min read",
  },
  {
    category: "Market Insights",
    title: "Why Currency Values Change Every Day",
    description:
      "Currency values respond to economic reports, central bank decisions, political events, trade balances, and investor confidence. Understanding these factors helps explain daily exchange rate movements.",
    date: "Oct 5, 2026",
    readTime: "5 min read",
  },
  {
    category: "Money Tips",
    title: "A Beginner's Guide to International Payments",
    description:
      "International payments can involve conversion fees and different exchange rates. Compare providers, review the final amount before confirming, and check the fees associated with each transaction.",
    date: "Sep 28, 2026",
    readTime: "4 min read",
  },
  {
    category: "Technology",
    title: "How Currency Converter Apps Work",
    description:
      "Currency converters use exchange rate data from APIs to calculate values between currencies. Discover how rates are retrieved, conversion formulas work, and why displayed rates may differ from bank rates.",
    date: "Sep 20, 2026",
    readTime: "6 min read",
  },
];

const BlogPage = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
      {/* Heading */}
      <section className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
          The ConvertX Journal
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Insights Beyond{" "}
          <span className="text-cyan-600">Currencies.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
          Explore currency guides, financial insights, and practical
          tips to understand exchange rates and make informed decisions.
        </p>
      </section>

      {/* Blog Grid */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Articles
          </h2>

          <span className="text-sm text-gray-500">
            {blogs.length} articles
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <span className="w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                {blog.category}
              </span>

              <h3 className="mt-5 text-xl font-bold leading-snug text-gray-900">
                {blog.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                {blog.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
