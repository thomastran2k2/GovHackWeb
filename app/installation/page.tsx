import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Installation — GovAsk",
  description: "How to install and use the GovAsk chatbot",
};

function Section({
  id,
  title,
  children,
}: Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
}>) {
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
}: Readonly<{
  children: React.ReactNode;
  lang?: string;
}>) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-xl border bg-neutral-50 p-5 text-base md:text-lg">
      <code className="whitespace-pre">{children}</code>
    </pre>
  );
}

function Pill({ children }: Readonly<{ children: React.ReactNode }>) {
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
          <Pill>TailwindCSS</Pill>
          <Pill>LLM</Pill>
          <Pill>Python backend</Pill>
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
              <li><a className="hover:underline" href="https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct">Llama 3</a> is installed.</li>
              <li>Clone this <a className="hover:underline" href="https://github.com/thomastran2k2/GovAsk">repo</a>.</li>
              <li>Python installed</li>
            </ul>
          </Section>

          <Section id="install" title="Install">
            <p>Install dependencies:</p>
            <Code>{`pip install -r requirements.txt`}</Code>
            <p className="mt-4">
              If you’re adding GovAsk UI to an existing Next.js app, copy the
              components and pages into your project structure and run the same
              install command.
            </p>
          </Section>

          <Section id="configure" title="Configure">
            <p>
              Inside app.py file, insert your local path to the LLM model (Llama 3)
            </p>
            <Code lang="ini">{`MODEL_PATH = r"YOUR_MODEL_PATH"`}</Code>

          </Section>

          <Section id="run" title="Run Locally">
            <p>Start the development server:</p>
            <Code>{`streamlit run app.py`}</Code>
            
          </Section>

          <Section id="use" title="How to Use">
            <ol className="list-decimal pl-6 space-y-3">
              <li>Open the app and connect an approved dataset.</li>
              <Image src="/step1.png" alt="GovAsk Logo" width={700} height={700} className="mx-auto" />
              <li>Ask a question in plain English (e.g., “What is my forecast for 2027-28”).</li>
              <Image src="/step2.png" alt="Step 2" width={700} height={700} className="mx-auto" />
              <li>Review the answer and the audit trail (source, query, rows).</li>
              <Image src="/step3.png" alt="Step 3" width={700} height={700} className="mx-auto" />
            </ol>
            

          </Section>

          <Section id="deploy" title="Deploy">
            <p>Typical options:</p>
            <ul className="list-disc pl-6 space-y-3">
              
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

          <Section id="faq" title="FAQ (Frequently Asked Questions)">
            <div className="space-y-5">
              <details className="rounded-xl border p-5 text-lg">
                <summary className="cursor-pointer font-semibold">
                  How do I add a new dataset?
                </summary>
                <p className="mt-3 text-neutral-700">New datasets can be added by uploading a CSV file through the app interface.</p>
              </details>
              <details className="rounded-xl border p-5 text-lg">
                <summary className="cursor-pointer font-semibold">
                  Where is the audit trail stored?
                </summary>
                <p className="mt-3 text-neutral-700">Audit trail is shown in the answer, the bot is programmed to always show its step.</p>
              </details>
              
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
