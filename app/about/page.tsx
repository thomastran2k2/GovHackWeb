import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — GovAsk",
  description: "Learn more about the GovAsk team and our vision for the future",
};

function Section({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="text-lg md:text-xl text-neutral-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
          GovAsk was built to help government agencies ask natural questions of their
          datasets, trust the answers, and make evidence-based decisions.  
          This page is a short overview of who we are and where we’re going.
        </p>
      </header>

      {/* Team / Background */}
      <Section title="Who We Are">
        <p>
          We are a multidisciplinary team of developers, data scientists, and policy
          thinkers passionate about making public sector data more usable and
          trustworthy.  
          
        </p>
      </Section>

      {/* Vision */}
      <Section title="Our Vision">
        <p>
          GovAsk aims to become the go-to interface for government decision-making,
          where every answer is transparent, auditable, and accurate.  
          Our long-term vision is to embed trust and accountability into every
          interaction with government datasets.
        </p>
      </Section>

      {/* Roadmap */}
      <Section title="Roadmap">
        <ul className="list-disc pl-6 space-y-3">
          <li><b>Short term:</b> Improve dataset connectors and add more pre-built queries.</li>
          <li><b>Medium term:</b> Introduce customizable trust scoring and role-based access control.</li>
          <li><b>Long term:</b> Position GovAsk as a secure AI data layer across multiple government departments.</li>
        </ul>
      </Section>

      {/* Values */}
      <Section title="Our Values">
        <ul className="list-disc pl-6 space-y-3">
          <li><b>Accuracy:</b> 90% is not enough — answers must be exact.</li>
          <li><b>Transparency:</b> every answer comes with an audit trail.</li>
          <li><b>Ethics:</b> strong commitment to privacy, bias prevention, and accountability.</li>
          <li><b>Collaboration:</b> built to work across departments, not in silos.</li>
        </ul>
      </Section>
    </main>
  );
}
