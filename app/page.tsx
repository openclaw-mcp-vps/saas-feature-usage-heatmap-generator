export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Product Managers &amp; Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visualize Which Features<br />
          <span className="text-[#58a6ff]">Customers Actually Use</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect Mixpanel, Amplitude, or PostHog and generate interactive heatmaps showing feature adoption, user flows, and dead zones — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["3 Integrations", "Mixpanel, Amplitude, PostHog"],
            ["Live Heatmaps", "D3.js interactive charts"],
            ["Instant Insights", "Unused features flagged automatically"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect up to 3 analytics sources",
              "Unlimited heatmap generations",
              "Feature adoption scoring",
              "User flow visualization",
              "Dead feature detection",
              "CSV &amp; PNG export",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which analytics platforms are supported?",
              "We currently support Mixpanel, Amplitude, and PostHog. You connect via API key — no code changes needed in your product."
            ],
            [
              "How are heatmaps generated?",
              "We pull your event data via the analytics API, aggregate it by feature/screen, and render interactive D3.js heatmaps you can filter by date range, cohort, or plan tier."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Your subscription is managed through Lemon Squeezy. Cancel from your billing portal at any time — no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold text-sm mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} HeatMap SaaS. All rights reserved.
      </footer>
    </main>
  )
}
