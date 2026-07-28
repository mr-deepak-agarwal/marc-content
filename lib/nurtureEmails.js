// lib/nurtureEmails.js
//
// The 4-email nurture sequence promised in Week 3 of the growth programme,
// triggered by a completed India Market Entry & Feasibility Scorecard.
//
//   Day 0  — sent immediately on submit (asset delivery + intro)
//   Day 3  — sent by the cron job (see app/api/cron/nurture/route.js)
//   Day 7  — sent by the cron job
//   Day 14 — sent by the cron job
//
// Each function returns { subject, html } so the caller (immediate send on
// day 0, or the cron job for day 3/7/14) can pass it straight to Resend.
// Copy is written to be genuinely useful even skimmed, not just a pitch —
// that's what makes a nurture sequence work instead of reading as spam.

const BRAND = {
  green: '#4E9141',
  dark: '#1D342F',
  muted: '#47635D',
  bg: '#F7FFF5',
}

function wrap(innerHtml) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
      ${innerHtml}
      <p style="margin-top: 28px; font-size: 12px; color: #aaa; text-align: center;">
        MARC Glocal — marcglocal.com<br/>
        You're receiving this because you completed the India Market Entry &amp; Feasibility Scorecard.
      </p>
    </div>
  `
}

export function day0Email({ name, score, category, industry }) {
  return {
    subject: `${name}, here's your India Market Entry & Feasibility Scorecard result`,
    html: wrap(`
      <h2 style="color:${BRAND.dark}; border-bottom: 2px solid ${BRAND.green}; padding-bottom: 12px; margin-top: 0;">
        Your Scorecard Result: ${category}
      </h2>
      <p style="color:${BRAND.dark}; line-height:1.6;">Hi ${name},</p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        Thanks for completing the India Market Entry &amp; Feasibility Scorecard. Your overall
        readiness score is <strong>${score}/100</strong> — placing you in the
        <strong>${category}</strong> band.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        Your full breakdown (with the specific dimensions pulling your score up or down) is
        available on the results page you just saw — bookmark it, or reply to this email and
        we'll resend the link.
      </p>
      <div style="margin: 20px 0; padding: 14px 18px; background:${BRAND.bg}; border-left: 4px solid ${BRAND.green}; border-radius: 4px;">
        <p style="margin:0; font-size: 14px; color:${BRAND.muted};">
          Over the next two weeks we'll send a short, genuinely useful email — a relevant case
          study, then the most common mistake we see at your stage — before ever asking for a
          call. No spam, unsubscribe any time.
        </p>
      </div>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        In the meantime, if something in your result raises a question, just reply — a real
        person reads these.
      </p>
      <p style="color:${BRAND.dark}; margin-top: 24px;">
        Warm regards,<br/><strong>MARC Glocal Team</strong>
      </p>
    `),
  }
}

export function day3Email({ name, industry }) {
  return {
    subject: `How a business like yours approached market entry`,
    html: wrap(`
      <h2 style="color:${BRAND.dark}; border-bottom: 2px solid ${BRAND.green}; padding-bottom: 12px; margin-top: 0;">
        A quick example, not a pitch
      </h2>
      <p style="color:${BRAND.dark}; line-height:1.6;">Hi ${name},</p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        Following up on your Scorecard result — one of the more common patterns we see at your
        stage is treating "market entry" as one decision, when it's really three: whether the
        demand is real, whether the numbers work at the price point the market will bear, and
        whether the operating model can actually be executed locally.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        We've written up how we work through that with clients in our case studies —
        <a href="https://marcglocal.com/case-studies" style="color:${BRAND.green};">worth a look</a>
        if you want to see the shape of the analysis before you'd ever need to commission one.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        Next email in a few days: the single most common mistake we see businesses make at the
        market-entry stage — genuinely useful whether or not you ever work with us.
      </p>
      <p style="color:${BRAND.dark}; margin-top: 24px;">
        Best,<br/><strong>MARC Glocal Team</strong>
      </p>
    `),
  }
}

export function day7Email({ name }) {
  return {
    subject: `The most common mistake we see in market entry`,
    html: wrap(`
      <h2 style="color:${BRAND.dark}; border-bottom: 2px solid ${BRAND.green}; padding-bottom: 12px; margin-top: 0;">
        The mistake that costs the most later
      </h2>
      <p style="color:${BRAND.dark}; line-height:1.6;">Hi ${name},</p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        The single most common mistake we see: businesses validate demand and skip technical
        and regulatory feasibility, because it feels like the "boring" part. It's usually the
        part that actually derails a launch — licensing timelines, compliance costs, or
        location-level constraints that a market-sizing exercise alone won't surface.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        A proper feasibility study covers all three legs — market, technical, financial —
        together, specifically so nothing gets left as an afterthought until it's expensive to
        fix.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        No ask here — just flagging it in case it's useful. Next email is the last in this
        series.
      </p>
      <p style="color:${BRAND.dark}; margin-top: 24px;">
        Best,<br/><strong>MARC Glocal Team</strong>
      </p>
    `),
  }
}

export function day14Email({ name }) {
  return {
    subject: `Ready to talk it through, ${name}?`,
    html: wrap(`
      <h2 style="color:${BRAND.dark}; border-bottom: 2px solid ${BRAND.green}; padding-bottom: 12px; margin-top: 0;">
        Here's how we typically start
      </h2>
      <p style="color:${BRAND.dark}; line-height:1.6;">Hi ${name},</p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        Last note in this series. If your Scorecard result raised more questions than it
        answered, the usual next step is a short, no-obligation scoping call — 20-30 minutes to
        walk through your specific situation and tell you honestly whether a full feasibility
        study makes sense yet, or whether you're not there.
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6;">
        <a href="https://marcglocal.com/contact-us" style="display:inline-block; margin-top:8px; padding:12px 24px; background:${BRAND.green}; color:#fff; text-decoration:none; border-radius:24px; font-weight:600;">
          Book a Free Scope Call
        </a>
      </p>
      <p style="color:${BRAND.dark}; line-height:1.6; margin-top:20px;">
        No pressure either way — you won't hear from us again after this unless you reach out.
      </p>
      <p style="color:${BRAND.dark}; margin-top: 24px;">
        Best,<br/><strong>MARC Glocal Team</strong>
      </p>
    `),
  }
}
