import Image from "next/image";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 text-center">
          <div className="mx-auto mb-4">
            <Image
              src="/GovAskLogo.png"
              alt="GovGPT logo"
              width={256}   // px
              height={256}  // px
              className="mx-auto"
            />
          </div>

          <h1 className="text-5xl sm:text-5xl font-bold tracking-tight">
            GovGPT — Accurate & Trustworthy Data Chatbot
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-700 leading-relaxed">
            Ask natural questions across your government datasets. GovAsk keeps answers
            grounded in data, shows its working (audit trail), and avoids hallucinations.
            Built for decisions where 90% is not enough.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href="#how-it-works"
              className="rounded-xl bg-black text-white px-6 py-3 text-base md:text-lg font-semibold"
            >
              See how it works
            </a>
            <a
              href="#try"
              className="rounded-xl border px-6 py-3 text-base md:text-lg font-semibold"
            >
              Try sample queries
            </a>
          </div>
        </div>
      </section>

      {/* Banner (gradient, accessible on white sites) */}
      <Banner />

      <section id="how-it-works" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How GovAsk Works</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <div className="relative w-20 h-20 mb-4 mx-auto">
                <Image src="/GovAskLogo.png" alt="Connect data" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Step 1 — Connect Data
              </h3>
              <p className="text-base md:text-lg text-neutral-700 text-center">
                Securely connect approved datasets (e.g., AusTender, PBS, APS Census). Data
                stays within scope and is versioned.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <div className="relative w-20 h-20 mb-4 mx-auto">
                <Image src="/GovAskLogo.png" alt="Ask a question" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Step 2 — Ask a Question
              </h3>
              <p className="text-base md:text-lg text-neutral-700 text-center">
                Type your question in plain English. GovAsk builds a dataset-bound query plan
                and validates it before execution.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border p-6 bg-white shadow-sm">
              <div className="relative w-20 h-20 mb-4 mx-auto">
                <Image src="/GovAskLogo.png" alt="Trust the answer" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Step 3 — Trust the Answer
              </h3>
              <p className="text-base md:text-lg text-neutral-700 text-center">
                Get an exact answer plus an audit trail: dataset, version/timestamp, query,
                referenced rows, and a trust score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy, Auditability, and Safety */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="rounded-2xl border p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">Accuracy, Auditability, and Safety</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-neutral-700">
              <li><b className="text-neutral-900">Grounded only:</b> responses are limited to connected datasets.</li>
              <li><b className="text-neutral-900">Audit trail:</b> dataset name, version/timestamp, query, and row/sample links.</li>
              <li><b className="text-neutral-900">Trust score:</b> confidence from exact match, coverage, and validation checks.</li>
              <li><b className="text-neutral-900">Ethics &amp; privacy:</b> PII handling, redaction, role-based access, bias checks.</li>
              <li><b className="text-neutral-900">Transferable:</b> plug-in framework across Finance, HR, Operations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Try Sample Questions */}
      <section id="try" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="text-3xl font-bold mb-6">Try Sample Questions</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Finance</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                “Am I on track to meet this year’s budget?”<br />
                “Show vendor payment outliers in the last 12 months.”
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">HR</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                “What’s happening with leave patterns in my team?”<br />
                “Which divisions had the highest sick leave in 2024?”
              </p>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2">Operations</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                “Any red flags in procurement for Agency X?”<br />
                “Vendors with anomalies &gt; 20% over 3 years.”
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#"
              className="inline-block rounded-xl bg-black text-white px-6 py-3 text-lg font-medium"
            >
              Open GovAsk
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
