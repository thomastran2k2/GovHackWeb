import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation — GovAsk",
  description: "How to install and use the GovAsk chatbot",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="text-lg md:text-xl text-neutral-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Code({
  children,
  lang = "bash",
}: {
  children: React.ReactNode;
  lang?: string;
}) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl border bg-neutral-50 p-5 text-base md:text-lg">
      <code className="whitespace-pre">{children}</code>
    </pre>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-sm md:text-base font-medium text-neutral-700">
      {children}
    </span>
  );
}

export default function InstallationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Install & Use GovAsk
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-700 max-w-3xl">
          A quick guide to getting the GovAsk chatbot running locally or in your
          environment. .....
        </p>

        <div className="mt-5 flex gap-3">
          <Pill>Next.js</Pill>
          <Pill>TypeScript</Pill>
          <Pill>Tailwind</Pill>
          <Pill>API-ready</Pill>
        </div>
      </div>

      {/* Layout: sticky nav + content */}
      <div className="grid gap-12 md:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside className="md:sticky md:top-20 h-max">
          <nav className="rounded-2xl border p-4">
            <ol className="space-y-3 text-base md:text-lg">
              <li><a className="hover:underline" href="#prereqs">Prerequisites</a></li>
              <li><a className="hover:underline" href="#install">Install</a></li>
              <li><a className="hover:underline" href="#configure">Configure</a></li>
              <li><a className="hover:underline" href="#run">Run Locally</a></li>
              <li><a className="hover:underline" href="#use">How to Use</a></li>
              <li><a className="hover:underline" href="#deploy">Deploy</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
            </ol>
          </nav>
        </aside>

        {/* Main content */}
        <div className="space-y-16">
          <Section id="prereqs" title="Prerequisites">
            <ul className="list-disc pl-6 space-y-3">
              <li>.... is installed.</li>
              <li>Git access to your repo...</li>
            </ul>
          </Section>

          <Section id="install" title="Install">
            <p>Install dependencies:</p>
            <Code>{`heello`}</Code>
            <p className="mt-4">
              If you’re adding GovAsk UI to an existing Next.js app, copy the
              components and pages into your project structure and run the same
              install command.
            </p>
          </Section>

          <Section id="configure" title="Configure">
            <p>
              Create a <code>.env.local</code> file for secrets and runtime
              settings. Add your keys and endpoints later:
            </p>
            <Code lang="ini">{`# .env.local
GOVASK_API_BASE=http://localhost:4000
GOVASK_API_KEY=REPLACE_ME
ALLOW_DATASETS=aus_tender,pbs,aps_census`}</Code>
            <p className="mt-4">
              You can also configure dataset scopes, role-based access, logging
              level, and trust-score thresholds here. Keep this section short for
              now — fill in with your real values later.
            </p>
          </Section>

          <Section id="run" title="Run Locally">
            <p>Start the development server:</p>
            <Code>{`....`}</Code>
            <p className="mt-4">For a production build:</p>
            <Code>{`npm run build
npm start`}</Code>
          </Section>

          <Section id="use" title="How to Use">
            <ol className="list-decimal pl-6 space-y-3">
              <li>Open the app and connect an approved dataset.</li>
              <li>Ask a question in plain English (e.g., “Show vendor payment outliers”).</li>
              <li>Review the answer and the audit trail (source, query, rows).</li>
              <li>Use the trust score to determine if escalation or review is needed.</li>
            </ol>
            <p className="mt-4 text-neutral-700">
              add anh vao.......
            </p>
          </Section>

          <Section id="deploy" title="Deploy">
            <p>Typical options:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Vercel (recommended for Next.js).</li>
              <li>Containerised (Docker/Kubernetes) for internal hosting.</li>
              <li>Any Node-compatible hosting with environment variables set.</li>
            </ul>
            <p className="mt-4">Basic Dockerfile example:</p>
            <Code lang="docker">{`# Dockerfile (example)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`}</Code>
          </Section>

          <Section id="faq" title="FAQ (Short placeholders)">
            <div className="space-y-5">
              <details className="rounded-xl border p-5 text-lg">
                <summary className="cursor-pointer font-semibold">
                  How do I add a new dataset?
                </summary>
                <p className="mt-3 text-neutral-700">Short placeholder — add your steps later.</p>
              </details>
              <details className="rounded-xl border p-5 text-lg">
                <summary className="cursor-pointer font-semibold">
                  Where is the audit trail stored?
                </summary>
                <p className="mt-3 text-neutral-700">Short placeholder — add storage details later.</p>
              </details>
              <details className="rounded-xl border p-5 text-lg">
                <summary className="cursor-pointer font-semibold">
                  How is the trust score calculated?
                </summary>
                <p className="mt-3 text-neutral-700">Short placeholder — add formula/weights later.</p>
              </details>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
