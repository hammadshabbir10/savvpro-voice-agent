import Link from "next/link";
import { PhoneIcon } from "@/components/layout/SiteHeader";

const PIPELINE = [
  { step: "01", title: "Caller speaks", body: "The browser's microphone picks up the caller. You can also type." },
  { step: "02", title: "Speech to text", body: "The browser's built-in speech recognition turns it into words. No keys, no cloud bill." },
  { step: "03", title: "The brain", body: "Python rules clean the text, find the intent and details, and pick one next step." },
  { step: "04", title: "Text to speech", body: "The reply is read aloud by the browser's voice, then the mic opens again." },
];

const HANDLES = [
  { title: "Changing their mind", body: "“Actually, make it 2 PM.” The new time replaces the old one and the reason is logged." },
  { title: "Taken or closed slots", body: "Sundays, lunch hour and booked slots get the two nearest free times instead." },
  { title: "Vague times", body: "“At 3” means 3 PM at a clinic. “Tomorrow afternoon” offers the free afternoon slots." },
  { title: "Questions mid-booking", body: "Hours, address or insurance get answered, then the call goes back to the open question." },
  { title: "Emergencies", body: "Pain or swelling jumps to the earliest visit, with a 911 note for severe cases." },
  { title: "Getting lost", body: "Three turns it can't use, or a request for a person, hands the call to the front desk." },
  { title: "Move or cancel", body: "Finds the booking by phone number, reads it back, and confirms before changing it." },
  { title: "Saying too much at once", body: "“A checkup tomorrow at 10, I'm Sam, 555 222 3333” fills every detail in one turn." },
];

const SAMPLE = [
  { who: "agent", text: "Thanks for calling Brightside Dental. How can I help you today?" },
  { who: "caller", text: "Hi, I'd like a cleaning next Tuesday at 3." },
  { who: "agent", text: "Great, that time is free. What's your full name?" },
  { who: "caller", text: "Jane Doe. Actually, can we make it 4?" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-200">
        <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="chip bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-900" /> Voice assistant · dental clinic
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              The clinic phone,
              <br />
              <span className="text-ink-400">answered by rules you can read.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              Brightside Voice picks up, books, moves and cancels appointments, and handles the messy parts of real
              calls. Every turn shows what it heard, what it understood and why it chose its reply.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/call" className="btn-primary px-6 py-3 text-[15px]">
                <PhoneIcon /> Start a call
              </Link>
              <a href="#how" className="btn-ghost px-6 py-3 text-[15px]">
                How it works
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-200 pt-6">
              {[
                ["0", "AI models deciding"],
                ["85+", "automated tests"],
                ["3", "jobs, start to end"],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-semibold text-ink-900">{n}</dt>
                  <dd className="mt-1 text-xs text-ink-500">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Phone-style preview of a call */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="mx-auto max-w-md animate-float rounded-[2rem] border border-ink-200 bg-ink-50 p-3 shadow-lift">
              <div className="rounded-[1.6rem] border border-ink-200 bg-white p-5">
                <div className="flex items-center justify-between border-b border-ink-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white">
                      <span className="absolute inset-0 animate-ring rounded-full bg-ink-900" />
                      <PhoneIcon />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">Brightside Dental</p>
                      <p className="text-xs text-ink-500">On a call · 00:42</p>
                    </div>
                  </div>
                  <Bars />
                </div>
                <ul className="mt-4 space-y-3">
                  {SAMPLE.map((m, i) => (
                    <li key={i} className={`flex ${m.who === "caller" ? "justify-end" : ""}`}>
                      <p
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                          m.who === "caller" ? "rounded-br-md bg-ink-900 text-white" : "rounded-bl-md bg-ink-100 text-ink-800"
                        }`}
                      >
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl border border-dashed border-ink-300 bg-ink-50 p-3 font-mono text-[11px] leading-relaxed text-ink-600">
                  <p><span className="text-ink-400">intent</span> book · <span className="text-ink-400">conf</span> 0.90</p>
                  <p><span className="text-ink-400">changed</span> time 3 PM → 4 PM</p>
                  <p><span className="text-ink-400">next</span> ask_phone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section id="how" className="scroll-mt-20 py-20 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            One loop, every turn, until the call ends.
          </h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {PIPELINE.map((p, i) => (
              <li key={p.step} className="card relative p-6">
                <span className="font-mono text-xs text-ink-400">{p.step}</span>
                <h3 className="mt-3 font-semibold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.body}</p>
                {i < PIPELINE.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-ink-300 md:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Messy calls */}
      <section id="handles" className="scroll-mt-20 border-y border-ink-200 bg-ink-50 py-20 lg:py-24">
        <div className="container-page">
          <p className="eyebrow">What it handles</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Real callers are messy. Each of these has a test.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HANDLES.map((h) => (
              <div key={h.title} className="rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-card">
                <h3 className="font-semibold text-ink-900">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The brain */}
      <section id="brain" className="scroll-mt-20 py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">The brain</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              No model guesses what happens next.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600">
              The brain is a small Python state machine. Weighted patterns find the intent, parsers pull out the day,
              time, name and phone, and a fixed order of checks picks one action. Same words in, same reply out, so it
              can be tested like any other code.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {[
                "Requests that apply anywhere first: repeat, start over, a person, goodbye.",
                "Then the job: book, move or cancel, and what the caller just said.",
                "Then the first missing or invalid detail, checked against the real calendar.",
                "Nothing is booked until the caller hears it read back and says yes.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-900" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <pre className="overflow-x-auto rounded-2xl bg-ink-950 p-6 font-mono text-[12.5px] leading-relaxed text-ink-200 shadow-lift">
{`caller  "no wait, make it friday"

normalized  no wait make it friday
intent      deny        conf 0.90
correction  yes
extracted   date = Fri, Oct 30

reasons
  · Caller changed day: Thu → Fri
action      confirm
reply       "To confirm: a whitening for
             Pat Lee on Friday, October 30
             at 9 AM ... Shall I book it?"`}
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-14">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-20 invert" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">Give it a call.</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-ink-300">
              Works best in Chrome or Edge with a microphone. Typing works everywhere.
            </p>
            <Link href="/call" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-ink-900 transition hover:bg-ink-100">
              <PhoneIcon /> Start a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Bars() {
  return (
    <span className="flex h-5 items-center gap-[3px]" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="h-full w-[3px] origin-center animate-wave rounded-full bg-ink-800" style={{ animationDelay: `${i * 0.12}s` }} />
      ))}
    </span>
  );
}
