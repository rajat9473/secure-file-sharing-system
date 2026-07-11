import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  Globe,
  Sun,
  ShieldCheck,
  Link2,
  LockKeyhole,
  Users,
  SlidersHorizontal,
  BarChart3,
  Download,
  ArrowRight,
  Plus,
  Minus,
  CloudUpload,
} from "lucide-react";

const faqs = [
  {
    question: "How do I share a file securely?",
    answer:
      "Upload your file, generate a secure sharing link and send the link to anyone you want. The recipient can access the shared file based on the permissions you select.",
  },
  {
    question: "Is there a file size limit for sharing?",
    answer:
      "File limits depend on your storage plan. The platform is designed to support both normal documents and large file transfers.",
  },
  {
    question: "Can I stop someone from accessing a shared link?",
    answer:
      "Yes. You can disable a shared link, add an expiry date or protect access using a password.",
  },
  {
    question: "How do I know if my shared link is secure?",
    answer:
      "Secure links use protected access controls and can be configured with passwords, expiry dates and download permissions.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#171c24] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#171c24]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f04438] font-black">
                S
              </div>

              <span className="text-xl font-bold">SFS</span>
            </Link>

            <div className="hidden items-center gap-9 text-sm font-semibold lg:flex">
              <a
                href="#features"
                className="flex items-center gap-1 transition hover:text-[#f0533a]"
              >
                Features
                <ChevronDown size={15} />
              </a>

              <a
                href="#security"
                className="flex items-center gap-1 transition hover:text-[#f0533a]"
              >
                Security
                <ChevronDown size={15} />
              </a>

              <a
                href="#business"
                className="transition hover:text-[#f0533a]"
              >
                Business
              </a>

              <a
                href="#pricing"
                className="transition hover:text-[#f0533a]"
              >
                Pricing
              </a>

              <a
                href="#faq"
                className="transition hover:text-[#f0533a]"
              >
                Resources
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Globe size={19} />

            <span className="hidden text-sm font-semibold sm:block">
              EN
            </span>

            <Sun size={19} />

            <Link
              to="/login"
              className="hidden rounded-lg border border-white px-5 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#171c24] sm:block"
            >
              Log in
            </Link>

            <Link
  to="/signup"
  style={{
    backgroundColor: "#ffffff",
    color: "#171c24",
  }}
  className="rounded-lg px-5 py-2 text-sm font-bold transition hover:opacity-90"
>
  Sign up
</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="mx-auto flex min-h-[850px] max-w-[1240px] flex-col items-center px-6 pt-28 text-center">
          <p className="mb-4 font-bold tracking-[0.15em] text-[#f0533a]">
            SHARE
          </p>

          <h1 className="max-w-[760px] text-5xl font-black leading-[1.05] md:text-7xl">
            Secure sharing with anyone, anywhere
          </h1>

          <p className="mt-7 max-w-[720px] text-lg leading-8 text-gray-300">
            Share folders and files with colleagues and friends to collaborate
            securely and easily, even with people who don't have an SFS
            account.
          </p>

          <Link
            to="/signup"
            className="mt-10 rounded-lg bg-[#e94735] px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-[#f0533a]"
          >
            Start sharing for free
          </Link>

          <div className="relative mt-24 w-full max-w-[900px] overflow-hidden rounded-[24px] border-[16px] border-[#4a5360] bg-[#f5f6f7] p-8 text-[#171c24] shadow-2xl">
            <div className="grid gap-6 md:grid-cols-[1.7fr_0.8fr]">
              <div className="rounded-2xl bg-white p-7 text-left shadow-lg">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold">
                      Secure Documents
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Last edited by Rajat, 09:11am
                    </p>
                  </div>

                  <ShieldCheck className="text-[#f0533a]" />
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {["PDF", "IMG", "DOC", "ZIP"].map((file) => (
                    <div
                      key={file}
                      className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 font-black text-gray-500"
                    >
                      {file}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {["RC", "AK", "JS"].map((user) => (
                    <div
                      key={user}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#f0533a] bg-[#171c24] text-xs font-bold text-white"
                    >
                      {user}
                    </div>
                  ))}

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-700">
                    <Plus size={20} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-7 text-left shadow-lg">
                <div className="mb-7 flex items-center gap-3">
                  <Users />

                  <p className="text-xl font-bold">
                    Contacts
                  </p>
                </div>

                {["Rajat", "Aman", "John", "Sara"].map((name) => (
                  <div
                    key={name}
                    className="mb-3 flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                  >
                    <div className="h-9 w-9 rounded-full bg-[#f0533a]" />

                    <div>
                      <p className="text-sm font-bold">
                        {name}
                      </p>

                      <div className="mt-1 h-2 w-20 rounded bg-gray-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto grid max-w-[1120px] items-center gap-20 px-6 py-32 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Share your files and folders with anyone
            </h2>

            <Feature
              icon={<Link2 />}
              title="Share files and folders with links"
              text="Share files and folders using a secure link. Anyone with the link can access files based on your sharing settings."
            />

            <Feature
              icon={<LockKeyhole />}
              title="Create encrypted links"
              text="Protect your private files using secure sharing links designed to keep your data safe."
            />

            <Feature
              icon={<ShieldCheck />}
              title="Ensure additional security"
              text="Create password-protected links and configure expiry dates for sensitive files."
            />

            <Link
              to="/signup"
              className="mt-9 inline-flex items-center gap-3 border-b font-bold"
            >
              Start sharing securely with SFS
              <ArrowRight size={18} />
            </Link>
          </div>

          <FileSharePreview />
        </section>

        <section
          id="security"
          className="mx-auto grid max-w-[1120px] items-center gap-20 px-6 py-32 lg:grid-cols-2"
        >
          <PermissionPreview />

          <div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Give users access to your folders
            </h2>

            <Feature
              icon={<Users />}
              title="Collaborate"
              text="Share folders with your contacts so your team can collaborate effectively."
            />

            <Feature
              icon={<SlidersHorizontal />}
              title="Set different permissions"
              text="Set full access, read and write, or read-only permissions to control access to your folders."
            />
          </div>
        </section>

        <section
          id="business"
          className="mx-auto grid max-w-[1120px] items-center gap-20 px-6 py-32 lg:grid-cols-2"
        >
          <AnalyticsPreview />

          <div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              New ways to share and manage your files
            </h2>

            <Feature
              icon={<BarChart3 />}
              title="Track engagement with link analytics"
              text="See how people are engaging with your shared links. Track views, downloads and recent access."
            />

            <Feature
              icon={<Download />}
              title="Import files from shared links"
              text="Save files from shared links directly to your secure cloud drive."
            />
          </div>
        </section>

        <section className="bg-[#30363e]">
          <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-12 px-6 py-16 lg:flex-row">
            <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-[#171c24]">
              <CloudUpload
                size={80}
                className="text-[#f0533a]"
              />
            </div>

            <div>
              <h2 className="text-4xl font-black">
                Send really large files with SFS Transfer
              </h2>

              <p className="mt-4 max-w-[760px] leading-7 text-gray-300">
                Transfer large files quickly using our secure file transfer
                system designed for modern teams and individuals.
              </p>

              <Link
                to="/signup"
                className="mt-7 inline-block rounded-lg bg-[#e94735] px-6 py-3 font-bold"
              >
                Go to SFS Transfer
              </Link>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-[800px] px-6 py-28"
        >
          <h2 className="mb-14 text-center text-5xl font-black">
            Frequently asked questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-white/15"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="flex w-full items-center justify-between py-7 text-left font-bold"
              >
                <span>{faq.question}</span>

                {openFaq === index ? (
                  <Minus />
                ) : (
                  <Plus />
                )}
              </button>

              {openFaq === index && (
                <p className="pb-7 leading-7 text-gray-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </section>

        <section
          id="pricing"
          className="bg-[#30363e]"
        >
          <div className="mx-auto max-w-[1120px] px-6 py-14">
            <h2 className="text-4xl font-black">
              Start sharing securely with SFS
            </h2>

            <p className="mt-4 text-gray-300">
              Experience secure cloud storage and protected file sharing.
            </p>

            <Link
              to="/signup"
              className="mt-7 inline-block rounded-lg bg-[#e94735] px-6 py-3 font-bold"
            >
              Sign up for free storage
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#171c24]">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-6 py-20 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f04438] text-xl font-black">
                S
              </div>

              <span className="text-2xl font-black">
                SFS
              </span>
            </div>

            <p className="mt-6 font-bold">
              The Secure Sharing Platform
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Secure cloud file sharing services.
            </p>
          </div>

          <FooterColumn
  title="Products"
  items={[
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Upload Files",
      link: "/dashboard",
    },
    {
      name: "Search Files",
      link: "/dashboard",
    },
    {
      name: "Share Files",
      link: "/dashboard",
    },
  ]}
/>

<FooterColumn
  title="Resources"
  items={[
    {
      name: "GitHub",
      link: "https://github.com/rajat9473",
      external: true,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rajat-chitransh95/",
      external: true,
    },
    {
      name: "Contact",
      link: "mailto:rajatchitransh02@gmail.com",
      external: true,
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ]}
/>

          <div>
            <p className="font-bold text-[#f0533a]">
              CREATED BY
            </p>

            <h3 className="mt-3 text-2xl font-black">
              RAJAT CHITRANSH
            </h3>

            <p className="mt-5 text-gray-400">
              Designed & Developed by Rajat Chitransh
            </p>

            <p className="mt-3 text-sm text-gray-500">
              © 2026 Rajat Chitransh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="mt-10">
      <div className="mb-4 text-[#f0533a]">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 max-w-[520px] leading-7 text-gray-300">
        {text}
      </p>
    </div>
  );
}

function FileSharePreview() {
  return (
    <div className="rounded-3xl bg-[#30363e] p-10">
      <div className="rounded-2xl bg-white p-7 text-[#171c24] shadow-2xl">
        <div className="h-64 rounded-xl bg-gradient-to-br from-gray-300 to-gray-500" />

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-bold">
              secure-file.pdf
            </p>

            <p className="text-sm text-gray-400">
              Encrypted file
            </p>
          </div>

          <ShieldCheck className="text-[#f0533a]" />
        </div>

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg border p-3 font-bold text-blue-600"
          >
            Copy link
          </button>

          <Link
            to="/signup"
            className="flex items-center rounded-lg bg-[#171c24] px-6 text-white"
          >
            Share
          </Link>
        </div>
      </div>
    </div>
  );
}

function PermissionPreview() {
  return (
    <div className="rounded-3xl bg-[#30363e] p-10">
      <div className="rounded-2xl bg-white p-7 text-[#171c24] shadow-2xl">
        <p className="text-xl font-black">
          Shared Folder
        </p>

        <p className="mt-1 text-sm text-gray-400">
          Project Documents
        </p>

        {[
          "Full access",
          "Read & write",
          "Read only",
        ].map((permission) => (
          <div
            key={permission}
            className="mt-5 flex items-center justify-between border-b pb-5"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gray-200" />

              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>

            <p className="text-sm text-gray-500">
              {permission}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const analytics = [
    ["124", "Views"],
    ["68", "Downloads"],
    ["32", "Shares"],
  ];

  const bars = [40, 70, 50, 100, 75, 120, 90];

  return (
    <div className="rounded-3xl bg-[#30363e] p-10">
      <div className="rounded-2xl bg-white p-7 text-[#171c24] shadow-2xl">
        <p className="text-xl font-black">
          Share Analytics
        </p>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {analytics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl bg-gray-100 p-5 text-center"
            >
              <p className="text-2xl font-black">
                {value}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex h-40 items-end gap-3">
          {bars.map((height, index) => (
            <div
              key={index}
              style={{ height: `${height}px` }}
              className="flex-1 rounded-t bg-[#f0533a]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>

      <div className="mt-6 space-y-4 text-sm">
        {items.map((item) => {
          if (item.external) {
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block text-gray-400 transition hover:text-[#f0533a]"
              >
                {item.name}
              </a>
            );
          }

          if (item.link.startsWith("#")) {
            return (
              <a
                key={item.name}
                href={item.link}
                className="block text-gray-400 transition hover:text-[#f0533a]"
              >
                {item.name}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.link}
              className="block text-gray-400 transition hover:text-[#f0533a]"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;