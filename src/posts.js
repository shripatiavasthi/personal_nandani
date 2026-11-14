import cover from './assets/blog/cover.webp'
import searchChanged from './assets/blog/search-changed.webp'
import aiSignals from './assets/blog/ai-signals.webp'
import playbook from './assets/blog/ai-visibility-playbook.webp'
import trackVisibility from './assets/blog/track-ai-visibility.webp'
import audit from './assets/blog/ai-visibility-audit.webp'

// Each post body is a list of blocks: ['p', text], ['h2', text], ['ul' | 'ol', items], ['img', src, alt], ['table', head, rows].
// Inside text, **bold** is rendered as <strong>.
export const posts = [
  {
    slug: 'get-brand-seen-in-chatgpt-google-ai-overviews',
    title: 'How to Get Your Brand Seen in ChatGPT and Google AI Overviews: A B2B Guide for 2026',
    seoTitle: 'How to Get Your Brand Seen in ChatGPT & Google AI Overviews | Revenue Growth',
    description: 'A practical B2B guide to AI visibility: how ChatGPT, Gemini, Perplexity and Google AI Overviews choose brands, an 8-step playbook, and how to measure results.',
    category: 'AI & Innovation',
    author: 'Nandni Verma',
    date: '2026-11-14',
    cover,
    coverAlt: 'How to get your brand seen in ChatGPT and Google AI Overviews',
    body: [
      ['p', 'Your next client may never visit page one of Google. More and more B2B buyers now ask ChatGPT, Gemini, Perplexity or Google\'s AI Overviews questions like "best B2B marketing agency for startups in India" and get a short answer that names just a few brands. If your brand is not in that answer, you are not on the shortlist.'],
      ['img', searchChanged, 'Search has changed from ten links to one AI answer that names a few brands'],
      ['p', 'This guide explains how AI engines decide which brands to mention. It also gives you a practical, step-by-step playbook to make sure yours is one of them.'],
      ['h2', 'How AI engines choose which brands to mention'],
      ['p', 'AI answer engines do not rank ten blue links. They put together one answer from sources they trust and name the brands that come up again and again. Four signals matter most:'],
      ['ul', [
        '**Clear entity signals.** The engine needs to know exactly who you are, what you do and who you serve. Vague or inconsistent descriptions across the web make you easy to ignore.',
        '**Third-party mentions.** Reviews, directories, industry articles, podcasts and Reddit or LinkedIn discussions tell the model that others vouch for you.',
        '**Answer-ready content.** Pages that answer a specific question directly, with clear structure and real data, are easier to pull from and cite.',
        '**Freshness and crawlability.** AI Overviews draw on Google\'s index, and tools like ChatGPT search use live web results. If your pages are slow, blocked or outdated, they will not be picked.',
      ]],
      ['img', aiSignals, 'Four signals AI engines use to pick brands: entity signals, third-party mentions, answer-ready content, freshness and crawlability'],
      ['h2', 'The 8-step playbook for AI visibility'],
      ['img', playbook, 'The 8-step playbook for AI visibility, from defining your entity to keeping pages fresh'],
      ['ol', [
        '**Define your entity in one sentence.** Write a single, consistent line: who you are, what you do, for whom and where. Use it on your homepage, About page, LinkedIn, Google Business Profile and every directory listing.',
        '**Find the questions your buyers ask AI.** List 20–30 prompts a prospect might type, such as "how to generate B2B leads with AI" or "top growth marketing agencies in Delhi". Run them in ChatGPT, Gemini, Perplexity and Google, and note which brands appear.',
        '**Write answer-first content.** Open each article or service page with a direct two- or three-sentence answer, then expand. Use clear H2 questions, short paragraphs, lists and comparison tables.',
        '**Publish original data and proof.** AI engines favour information they cannot find elsewhere. Share client results, benchmarks, mini-surveys and detailed case studies with real numbers.',
        '**Add structured data.** Use schema markup (Organization, Service, FAQ, Article and Review) so machines can read your business details without guessing.',
        '**Earn mentions beyond your website.** Get listed on Clutch, GoodFirms and industry directories. Pitch guest articles, join podcasts and answer questions on LinkedIn, Quora and Reddit. Every credible mention strengthens your brand.',
        '**Build founder authority.** Publish regularly under the founder\'s name on LinkedIn and your blog. Named experts with a consistent point of view are more likely to be cited.',
        '**Keep it technically clean and fresh.** Make sure pages load fast, are indexable and are not blocking AI crawlers such as GPTBot or Google-Extended unless you mean to. Update key pages every quarter with new dates, data and examples.',
      ]],
      ['h2', 'How to measure your AI visibility'],
      ['p', 'Traditional rankings do not tell the full story anymore. Track these every month:'],
      ['table', ['Metric', 'What it tells you', 'How to track it'], [
        ['Brand mention rate', 'How often AI answers name you for your target prompts', 'Run your prompt list monthly and log results'],
        ['Share of voice', 'Your mentions compared with competitors', 'Same prompt log, counted by brand'],
        ['Citations to your site', 'Whether AI links to your pages as a source', 'Check cited links in Perplexity, ChatGPT and AI Overviews'],
        ['AI referral traffic', 'Visits from chatgpt.com, perplexity.ai and similar', 'Google Analytics referral reports'],
        ['Branded search growth', 'Whether people search for you after seeing you in AI', 'Google Search Console'],
      ]],
      ['img', trackVisibility, 'Track brand mention rate, share of voice and AI referral traffic every month'],
      ['h2', 'Common mistakes to avoid'],
      ['ul', [
        'Chasing keywords and ignoring the questions buyers actually ask.',
        'Describing your business differently on every platform.',
        'Publishing thin, generic articles with no original insight.',
        'Relying only on your own website and never earning outside mentions.',
        'Blocking AI crawlers by accident in robots.txt.',
      ]],
      ['h2', 'Conclusion: start before your competitors do'],
      ['p', 'AI search is quickly becoming the first place B2B buyers look, and the brands that build visibility now will be the ones AI recommends later. Start small: define your entity, test your top prompts and publish one strong, answer-first article this month.'],
      ['img', audit, 'AI visibility audit: is AI recommending your brand?'],
      ['p', 'Want to know whether ChatGPT and Google AI Overviews recommend your brand today? Revenue Growth runs AI visibility audits for B2B startups and enterprises. Schedule a call and we will show you where you stand and how to get found.'],
    ],
  },
]
