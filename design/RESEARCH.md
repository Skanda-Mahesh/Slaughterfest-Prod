# Research: metal-festival websites, posters and online presence

Background research for the SlaughterFest 2026 website and online presence. Compiled 18-19 Nov 2026 by a seven-slice research sweep (European majors, underground/extreme, Americas/Asia/India, posters/type/colour, web UX, social presence, the SLAUGHTER name), merged into one brief and then fact-checked by two independent checkers. Corrections are applied in the text below; the full log is in Appendix A. Hex values are approximate screenshot samples.

Contents: 1 Executive summary · 2 Archetypes · 3 Visual language · 4 Posters and lineup craft · 5 Website anatomy · 6 Online presence playbook · 7 India and small-to-mid notes · 8 The SLAUGHTER name · 9 Standout ideas · 10 Design principles · 11 Key references · Appendices A-G

Synthesis of seven research slices (European majors, underground/extreme, Americas/Asia/India, posters/type/colour, web UX, social presence, the SLAUGHTER name), captured around 18 Nov 2026 from 60+ festivals plus band, label and artist sites. Hexes are approximate screenshot samples. Where slices disagreed, visual evidence wins and the resolution is stated.

## 1. Executive summary

- **Layout is solved; identity is not.** The shared skeleton: near-black textured ground, one accent, a masthead of dates, place and countdown, an ever-present TICKETS button, a CMS status strip and a lineup shown as poster plus filterable grid. Leaders win on edition identity and world-building (Download XXIV, Hellfest's 'Absolute Edition', Alcatraz's prison).
- **Red is the crowded default** (Hellfest, Bloodstock, Resurrection, Copenhell, Brutal Assault, MDF, Inferno). Memorable sites own another colour: Download acid green, Sweden Rock yellow, Tuska mint, Alcatraz orange, Mystic copper, Motocultor amber, Bangalore Open Air teal and gold.
- **Motocultor is the template to beat:** a typed HTML lineup with day pills, cream ticket stubs listing every early-bird tier (sold-out struck, current 'almost gone', next labelled), a built-in accessibility panel and a marquee with a pause button.
- **The lineup is data, not a JPEG.** Store tier, day, stage, home city and debut/special-set flags once; render poster, list, cards, timetable, social cards and JSON-LD from it. Image-only lineups (EMM, Rockville, BOA) fail on phones, in search and for screen readers.
- **Credibility comes from commissioned, credited human art** that changes each edition (Roadburn's rotating artists, EMM by De Vriesch Originals, MDF's credited illustrators such as Mark Riddick); AI-art backlash in heavy music is fast and public.
- **Conversion runs on honest urgency:** full price ladders with sold-out tiers left visible, all-in prices, the next price, instalments as a second CTA, a refundable 'Flex' add-on, an under-26 tier and a collectible with every ticket.
- **The commonest failure is the black void:** video/JS heroes that paint black or spin (Graspop, Tuska, Sweden Rock, Mystic, Hellfest mobile), 130-partner consent walls and Times-fallback fonts. Server-render a poster-first hero.
- **Planning is an open gap:** schedules live in native apps or the fan-made Clashfinder, so an installable web planner (favourites, clashes, .ics, offline map, share card) would set a first edition apart.
- **Social is a year-round ritual on rigid templates** (MDF's crimson footer bar, Graspop's day cartouche). Majors sell next year blind; a newcomer must earn trust with a locked venue, a refund policy, anchor names and numbered founder passes.
- **India is under-served online.** Bangalore Open Air is the only metal festival found leading with its own site; the rest run on Instagram plus BookMyShow, District or SkillBox, and none uses Devanagari. Price anchors: ₹550 club nights to ₹5,499 for BOA.
- **SLAUGHTER works if menace lives in the art and welcome in the words.** Google bars gore and violent ad language (landing pages included), Meta bars innards and weapons aimed at the viewer and can reject anything 'shocking', and India rules out meat, animal, religious and occult imagery. Strongest territories: KILL FLOOR, FINAL CUT, PRIME CUTS (meat-free), SPLATTER CLUB, HOUSEFULL HORROR; SOFT KILL for sponsors. Check collisions with Trendslaughter Fest (a Bengaluru underground series with editions documented 2014-2018) and the band Slaughter To Prevail.
- **Welfare, accessibility and a code of conduct are now navigation** (Hellfest's CSR menu and Hellcare, Download's Accessibility link, Dekmantel's footer), and the best reassurance a violent-sounding newcomer can give.

## 2. The landscape: seven archetypes

**A. Myth / world-builder** (Hellfest, Alcatraz, Wacken's 'Holy Ground', Midgardsblot, Kilkim Žaibu): a destination you belong to. Strong: physical-object UI (stone texture, tilted burnt-edge photo cards, ticket stubs with SOLD OUT / COMING SOON sashes), a private vocabulary ('Hellbangers'; Alcatraz's 'Characters' and 'Values and norms' pages), deep welfare content. Weak: heavy media, little information above the fold, no lineup between editions, French strings on Hellfest's English pages.

**B. Institutional mega-portal** (Wacken, Download, the Danny Wimmer Presents template behind Aftershock and Rockville, Knotfest): scale and reliability. Strong: conversion furniture (BUY twice above the fold, a hotel CTA in the hero, quick-route cards, pricing cards, memberships, loyalty points) and year-round media (WackenTV, Knotfest editorial). Weak: ~40-item menus, 130-partner consent walls, raster lineup posters.

**C. Edition as campaign** (Download XXIV / #DLXXIV, Graspop XXX, Brutal Assault BA30, Resurrection 'Chapter X', Kill-Town's sequel subtitles): momentum and collectability. Strong: one numeral threads logo, hashtag, poster, header, highlights and 404. Weak: the look resets yearly, so the wordmark must stay fixed.

**D. Best-practice mid-size** (Motocultor, Sweden Rock, Mystic, Tuska, Copenhell): modern and legible. Strong: typed, filterable lineups (Sweden Rock's day and stage filters, country codes, '?' cards), one artist card shared by Instagram and site (Mystic), one colour everywhere (Tuska), a fixed date marquee and a video pause button (Copenhell). Weak: amber-on-brown small tiers, spinner heroes, no homepage lineup (Copenhell, Tuska).

**E. Underground poster-first / curatorial** (Roadburn, Maryland Deathfest, Eindhoven Metal Meeting, Northwest Terror Fest, Party.San, Inferno): scene credibility and rarity. Strong: commissioned art, rarity annotations ('Old School Set', album-in-full, 'exclusive fly-in show'), two-colour screenprints, plain sites kept current. Weak: image-only lineups, stale dates (Beyond the Gates still showed 2026 dates in November 2026), blank JS grids, stock copy (Inferno).

**F. Fanzine maximalism** (Bloodstock, Obscene Extreme, Sound and Fury, Louder Than Life's zine skin): 'by the fans, for the fans', humour. Strong: community programmes (Bloodstock TV, the Metal 2 the Masses band battle, Winter Gathering) and voice. Weak: clutter, in-page ads, fixed ~1100px layouts that overflow on phones, white on light grey (Sound and Fury).

**G. Social-first / platform-dependent** (most of the Indian scene, Outbreak, Chaos Descends, Hell's Heroes): scene-native, low overhead. Strong: Instagram drops plus a ticket platform. Weak: no owned archive, dead ends at presale (Outbreak's under-construction page on presale day), lapsed domains (metaldays.net now redirects to a finance site).

## 3. Visual language

### Colour

Black (or bone) plus one owned signal colour per direction; red only with a distinct partner colour or texture.

- **Stone and blood** (Hellfest): #121212 #2A2A2A #E3141B #9E0F14 #E8DCC8
- **Toxic glitch** (Download XXIV): #000000 #39E81C #FF2BD1 #19C3D6
- **Hell ticker** (Copenhell): #000000 #FFFFFF #E3000B #6F7F86
- **Signal yellow** (Sweden Rock): #0B0B0B #FDC300 #FFFFFF
- **Mint** (Tuska): #6FBF7A #A8DCC0 #000000
- **Ember ritual** (Motocultor): #2B120C #4A1B0F #EAA338 #FBE2AD #D9412B
- **Baltic gold** (Kilkim Žaibu): #0F0E0D #1C1A17 #C9A36A #ECE4D6
- **Acid screenprint** (Northwest Terror Fest): #101010 #82BB55 #A7A2C3
- **Deathfest crimson** (Maryland Deathfest): #000000 #FFFFFF #CA0030 #515151
- **Grind carnival** (Obscene Extreme): #44178C #331169 #00FF70
- **Temple teal and gold** (Bangalore Open Air): #0E1A16 #2EE6A6 #0F5E52 #D9A441 #F2E6C9
- **Acid-wash** (Furnace Fest): #BFE6F2 #8ED3E8 #8C3A24

Slices disagree on Obscene's green (#00FF70 vs #00AA4A) and Copenhell's red (#E3000B vs #FF1A1A); re-sample before reuse.

**Contrast floor** (against #0B0B0C): red text #E30613 is 4.03:1 (fails AA body), #C8102E 3.34:1 (large text only), #8A0303 1.96:1 (decorative only); use #FF2A2A or lighter (5.26:1). White on a #C8102E button is 5.88:1. Secondary grey needs #8C8C8C (5.85:1) or lighter; #6B6B6B fails (3.69:1). Set long text in #F2EEE6 (17:1), not pure white.

### Typography

One condensed workhorse, one expressive display face for wordmark, edition and dates, an italic serif for annotations, a mono for data and an Indic companion.

- **Hero and lineup:** Anton, Big Shoulders, League Gothic, Barlow Condensed, Archivo (narrow). Bebas Neue or Oswald alone reads generic.
- **Nav, pills, bilingual UI:** Barlow Condensed, Teko, Khand, Rajdhani (the last three carry Devanagari).
- **Blackletter wordmark or date:** UnifrakturCook, Manufacturing Consent, Pirata One, Grenze Gotisch. Mixed case at 28px+ (Pirata reads to ~18px); never body, buttons or all caps.
- **Edition titles:** Marcellus SC, Forum, Cormorant SC; Cinzel drifts into power-metal cliché.
- **Set annotations:** Cormorant Italic, Libre Caslon Text, IM Fell English at 11-14px (MDF style).
- **Wide statements:** Unbounded, Syncopate, Michroma, sparingly.
- **Countdown and data:** JetBrains Mono, Space Mono, IBM Plex Mono (tabular digits stop jitter).
- **Body:** Inter, IBM Plex Sans, Barlow; Mukta or Hind for Hindi. Never the display voice.
- **Devanagari display:** Rozha One, Jaini, Gajraj One, Anek Devanagari; unclaimed in Indian metal.
- **Avoid as identity:** Nosifer, Creepster, Eater, Butcherman, Metal Mania, New Rocker, Fruktur, MedievalSharp (Halloween or Renaissance fair).

Commission the logotype; check diacritics (real bills include Mgła, Ruïm, Queensrÿche); self-host and preload fonts with metric-matched fallbacks (Summer Breeze and Brutal Assault rendered in Times).

### Illustration, imagery, texture, motifs

- Commission a scene illustrator each edition and credit them (Roadburn, EMM, Inferno). Painted or engraved menace (Eliran Kantor's oils, Mark Riddick's stipple, MDF's grey ink) beats vector skulls, stock flames and Photoshop bevel (Damnation).
- An evolving mascot or sigil gives fans something to collect: Bloodstock's annual crest, Graspop's Skully, Mystic's creature, Kilkim's edition roundel.
- Real crowd photography proves community (Copenhell's crowd loop, Humans of Download); duotone in brand colours unifies uneven gig photos (Inkcarceration).
- Texture is often the identity: xerox halftone (Louder Than Life), torn paper (Aftershock), creased flyer (Copenhell 2026), parchment monoprint (Hellfest 2025), embers (Motocultor), acid-wash (Furnace Fest). Scanned texture at 6-15% opacity, crisp type on top.
- Motifs: edition numerals, ticket stubs with sashes, tilted trading cards, double-rule borders (NWTF, EMM), a festival glyph as section bullet (Into the Grave's coffins) or inside the date (Inferno's '20✷27'), chrome on the wordmark only (Wacken 2025).

### Motion

Muted autoplay with a visible pause control, captions and a static poster frame (Copenhell, Sweden Rock; Alcatraz adds subtitles and 'Sound on'). Marquees and rotating badges pause on hover or focus and stop under prefers-reduced-motion; glitch stays under three flashes a second. Pick one signature moment: MUTEK's Awwwards-winning GSAP/Three.js site scored 6.33/10 for accessibility.

## 4. Posters and lineup craft

**Choose the system by scale:** tiered logo wall (Wacken, Bloodstock), day × stage matrix with vertical stage names (Hellfest, Mystic, Copenhell), US day columns with tier bands (Aftershock, Sonic Temple), flat alphabetical billing (Roadburn, Brutal Assault cards), or a hybrid of 2-6 headliner logos over typed tiers (Download, Inferno). A first edition should use hybrid or flat billing; a matrix pays off only at 3+ stages and 60+ bands.

**Hierarchy rules**

1. One ink: recolour every band logo to one brand colour (Hellfest red, then acid green; Mystic orange; BOA gold). On the web, tint single-colour SVGs with CSS mask-image and currentColor.
2. Four type steps of roughly 100/70/50/35% (web: 64/44/30/20px desktop, 40/28/20/15px mobile); billing order on top, alphabetical inside lower tiers (Download).
3. Annotate value, not size: italic serif set notes (MDF), ribbon tags (Mystic), 'performing [album]' (Roadburn), 'exclusive' and 'album in full' badges (Good Things), home-city tags (BOA 2015: 'Gutslit - Mumbai').
4. Sell the gap: blurred, logo-sized mystery slots (Copenhell 2026), '?' cards (Sweden Rock), '+ more to be announced' in the accent.
5. A fixed commerce zone: URL, QR (Inferno), status line (Bloodstock printed early-bird and instalment-plan lines) and one monochrome sponsor strip. No sponsor inside the wordmark (Resurrection's beer roundel; BOA 2018's 'G-SHOCK BANGALORE OPEN AIR').
6. One grid, many crops: 1:1, 4:5, 9:16 and A2 from one data source, with key information inside a centred 3:4 safe area for Instagram grids. Landscape-only posters (Hellfest 2026) and rotated titles (Louder Than Life) fail as thumbnails.
7. Always publish the typed web version.

**Key-visual practice:** one commissioned artist per edition; art revealed in panels with the lineup waves (Roadburn's 2026 and 2027 triptychs); one artwork recoloured for sub-events (EMM's rust warm-up); numbered screenprints and a 'Download poster' button (Prophecy Fest); process shots as proof of human work. Cheapest credible formula (NWTF): two colours, double-rule border, blackletter wordmark, a local place symbol fused with a subgenre glyph, typed lineup with mid-dots.

**Sourced attributions only:** Roadburn (checked against roadburn.com): Malleus (2009; 2027 triptych), Arik Roper (2015), Becky Cloonan (2016), Douwe Dijkstra (2020; 2026 triptych), Lucile Lejoly (2021 Redux), Valreza Collective (2022), William Lacalmontie (2023), David Fitt (2024), Nona Limmen (2025); Maarten Donders (2012 band posters) comes from one slice only. MDF credits its site illustrations to Bite Radius, Lucas Ruggieri, Mark Riddick, Misanthropic-Art and Misha T; Deathfest Lager can: Mark Riddick. Obscene Extreme 2022: Dan Seagrave. EMM: De Vriesch Originals. Inferno: design by Asgeir Mickelson (per its Design Elements page). Metalmania 2018: Zbigniew M. Bielak. Kill-Town London 2024: Zezeah and Steven of Ash Graphic Decay. Decibel Denver 2023: Sébastien Luc Butler. Psycho Las Vegas 2017/2018: Dirty Donny Gillies. Unverified: Costin Chioreanu as Roadburn's 2013-14 artist, the Roadburn 2017 artist (John Dyer Baizley curated that year), the MDF 2027 key-art author, and the Hellfest, Wacken and Brutal Assault key-art authors; Kantor has exhibited at Wacken, Copenhell and Bloodstock, but no poster commission was found.

## 5. Website anatomy

**IA:** Lineup, Tickets, Plan (my schedule, map, getting there, stay, FAQ and festival A–Z), Experience (stages, food, market, art), Community (WhatsApp/Discord, band battle, 'Presents' gigs), plus a filled TICKETS button. Footer: Safety and Welfare, Accessibility, Code of conduct, News, Editions archive, Merch, Press, Partners, credits. Mobile: a ≤56px floating bottom bar (Tickets, Lineup, My Schedule, Info), as on Tuska. No Wacken-scale mega-menu.

**Homepage order:** status strip, sticky header (logo, nav, countdown chip, TICKETS), hero (key-art poster frame, edition title, dates, city, two CTAs), typed lineup with day pills and 'enlarge poster', ticket stubs with prices, quick-route cards (Tickets, Lineup, Travel and Stay, Merch), three news cards, aftermovie, WhatsApp and email sign-up, one partner strip, footer.

**Phase states from one CMS switch:** announce, blind on-sale, lineup waves, festival week (schedule-first, like Unsound's date chips), live now/next, thank-you with aftermovie and next date, off-season ('Presents' calendar, waitlist). Never a dead page (Outbreak's placeholder, Furnace Fest's empty grid).

**Must-haves for v1:** lineup views (Poster, Cards, Timetable, A–Z) filtered by day, stage-as-genre (Hellfest maps Altar to death/grind, Temple to black/pagan), home-grown and 'first time in India'; band pages with genre and country chips, day/stage/time, embeds loaded on tap, 'add to my schedule', .ics and a share card; the web planner; an info hub with category tiles (Hellfest) and a Roadburn-style FAQ including 'coming alone'; a named welfare page with reporting channels and a festival-time phone/WhatsApp line; an accessibility page in Hellfest's order (audience, services, commitments, contact) with ISL interpreters; the code of conduct in the footer and at checkout; official-resale messaging; an editions archive; a themed 404.

**Conversion:** ticket stubs with six states (coming soon, on sale, low stock from real inventory only, sold out, resale open, upgrade); the whole ladder with sold-out tiers struck (Motocultor, Wacken); an all-in INR headline with base, GST and fee beneath (India's 2023 dark-pattern guidelines name false urgency and drip pricing); next-phase price and date; 'or from ₹X/month' only where the platform offers EMI; a refundable Flex add-on with a hard cutoff (Sónar); an under-26 tier (Wacken's YOUNGER); a free pin or patch per ticket (Wacken); buyer routing 'India (₹, UPI)' vs 'International' (Sleep Token's regional pills); deep-linked platform checkout with UTMs; a waiting room for on-sale (Hell & Heaven 2022's 6-9 hour queues and rising fees wrecked trust).

**Mobile and performance:** server-render the first view (preloaded AVIF poster of ~150KB or less, headline, dates, CTA, typed lineup); LCP within 2.5s on a mid-range Android over 4G; video only after load and never under Save-Data; self-hosted subset fonts with font-display: swap; width and height on every image; clamp() type tested at 360-390px; one persistent element per breakpoint; consent as a slim bar, not a modal.

**Accessibility:** the contrast floor; pause controls (WCAG 2.2.2); reduced motion; a typed name behind every logo; clean aria-labels under any glitch nav (BMTH's 'INDX.01'). Resolving two slices: a native preferences panel (text size, contrast, reduced motion, as Motocultor ships) is good; a third-party overlay claiming to fix accessibility (Hellfest's widget) is not.

**SEO and structured data:** one Festival/Event per edition (startDate, endDate, location.address, organizer, eventStatus, offers with the lowest all-in price, priceCurrency INR, availability, validFrom and a url straight to purchase); separate Events for separately ticketed days; MusicEvent with superEvent for sets. Evergreen /lineup and /tickets with the year in titles; hreflang en-IN and hi-IN; 1200×630 OG cards per band and phase; allow verified bots (Roskilde and Berlin Atonal blocked our tools); register .com/.in, misspellings and handles; monitor SSL (Milwaukee Metal Fest served a mismatched certificate).

## 6. Online presence playbook

**Channels:** Instagram first; YouTube for aftermovies and full sets; a WhatsApp Channel and support line (Bangers' floating button, Hammersonic's purchase notices); Discord with channels named after festival zones (Hellfest's forum: Cathedrale, Metal Corner, Hellcity Square); a Facebook group for urgent updates (MDF); TikTok for discovery (Parookaville beats Wacken there); X/Threads only if staffed (Download's Threads: 65.4K followers, 6-45 likes a post). The website news page is canonical because Instagram, TikTok and Reddit wall off logged-out users.

**Cadence:** concept teaser, wave poster, single-band cards with the day baked in, day splits, stage splits, running order, daily highlights, then a day-after thank-you, photo dump and lost-and-found; aftermovie at ~8 weeks and full sets at ~12 (Brutal Assault).

**Formats:** one locked template per edition with a persistent footer bar (MDF's crimson DEATHFESTS.COM); hype-number tiles ('66,6% festival capacity sold', '100 bands announced'); 'NEW / ALREADY CONFIRMED' cards (Brutal Assault); artist greeting videos (BOA, Bloodstock); vox pops ('What does metal mean to you?'); fan portraits (Humans of Download); crew spotlights (Hellfest's 'Inside Hell'); memes cut from our own b-roll within 24 hours (Bloodstock's and Graspop's GTA parodies).

**Tone and community:** one primary voice: gore-comic (Obscene Extreme), solemn ritual (Inferno, Kilkim), curatorial (Roadburn's newsletter) or family/tribe (Bloodstock, Download Family). Name the community and zones; humour for operations, solemnity for art; never stock event copy (Inferno's 'Experience the ultimate extreme metal festival'). Run polls in the owned hub and meet fans offline (Brutal Assault's promoter Q&A in a Prague metal bar).

**Six-month launch timeline**

- **M-6 (T-26 to T-22 weeks):** secure domains and handles; site v1 with news and email/WhatsApp opt-in; manifesto teaser Reel; city/date/venue card; numbered founder passes with a refund policy; ~3 posts a week plus daily Stories.
- **M-5 (T-22 to T-18):** headliner #1 card with the day, plus artist greeting; press to Rolling Stone India, Time Out India and Esquire India; band battle and 'Humans' nominations open; first warm-up gig.
- **M-4 to M-3 (T-18 to T-12):** wave poster with day split; weekly single-band drip with special-set lines; '% sold' tiles; wish-list poll; community hub opens; merch drop #1.
- **M-2 (T-12 to T-8):** final poster; day tickets; price-step countdowns; loyalty presale; code of conduct, safety, accessibility, 18+/ID and sustainability posts; crew spotlights.
- **M-1 (T-8 to T-4):** stage splits, running order and planner live; travel and stay guides; merch drop #2; playlist; meetups.
- **Final month:** daily countdown Stories, first-timer guide, scam warnings, weather and monsoon plan, set-time reminders.
- **Festival days:** a highlight per day, same-night photo dump, 2-3 Reels a day; changes posted at once on site, WhatsApp, Stories and the Facebook group.
- **After:** thank-you with stats, lost and found, next date in bio the same day, Edition II early bird within 24-72 hours, survey; aftermovie at ~8 weeks, full sets at ~12.

## 7. India and small-to-mid notes

- **Benchmark:** Bangalore Open Air (14th edition per Time Out) leads with its own site: 'Powered by W:O:A', BookMyShow exclusive from ₹5,499, one GA tier, cashless wristband (₹100 activation), a box office taking UPI, travel packages, a 2012-2025 lineup archive. Weak spots: a dated build, a small ticket button, English only, no WhatsApp and conflicting age messages (press reported 18+; the festival's own site says all ages, with under-18s accompanied and under-10s free).
- **Platforms:** SkillBox, District (in Aug 2024 Zomato agreed to buy Paytm's ticketing business, Insider and TicketNew, for ₹2,048 crore; insider.in now redirects to District) and BookMyShow own checkout, and their listings block bots, expire or error. Keep tiers, prices and policies on our site and say which app holds the QR.
- **Price anchors:** Spectral Decay ₹550 online / ₹699 at the gate; Independence Rock 2024 sold 500 tickets at ₹30 for its 30th edition, plus a ₹1,030 tier with a ₹1,000 food-and-drink coupon; Lollapalooza India 2026 from ₹6,999.
- **Feeder scene:** Spectral Decay, Phantom Pulse, Domination: The Deathfest, Scarfest 'Freshblood', Shillong Open Air (a Wacken Metal Battle leg in Feb 2026), Trendslaughter Fest and Wacken Metal Battle India. Indian acts travel: Bloodywood were on the 2026 Download and Hellfest bills; Godless is on Kilkim Žaibu 2027.
- **Bilingual is open ground:** pair Anton or Barlow Condensed with Teko or Khand; Rozha One, Jaini or Gajraj One for display.
- **Founder-pass numbers:** the social slice proposed 'first 666'; the India slice warns against 666 stunts. Resolution: public tiers use shagun-style ₹101/₹501 numbers or the edition numeral; 666 jokes stay inside owned community channels.
- **Small-to-mid tactics:** launch as 'Edition I'; run a 'Presents' club calendar across metros months ahead (Sound and Fury, HEAVY MTL); hold a band battle with city heats (Wacken Metal Battle, Bloodstock's Metal 2 the Masses); build a web planner, not a native app; sell heritage add-ons such as city scene walks (Beyond the Gates' landmarks tour, Inferno's 'Black Metal Bus Sightseeing'); give premium tiers non-alcohol perks for mixed-age crowds (Loud Park's GOLD ticket).

## 8. The SLAUGHTER name

**Lesson from violent-named brands:** name, logo and illustration carry the menace; copy, IA and policies carry the welcome. MDF calls itself 'America's biggest annual metal party'; Bloodstock ('by the fans, for the fans') still has Red Bull, Westons and ESP as partners; Brutal Assault's motto is 'Against violence and intolerance'; Obscene Extreme pairs goregrind with free under-14 entry, a kids' corner, charity and veg-only food. Former slaughterhouses (Schlachthof Wiesbaden, Matadero Madrid) show the word can read as heritage.

**Territories** (risk 1-5 for ads/India/veg/cliché/sponsor):

- **KILL FLOOR → THE PLANT:** machinery without meat; steel, hazard stripes, ISO 7010 signage, shift rosters ('clock in' to build your timetable). Risk 1-2/2/2/2/1.
- **FINAL CUT:** slasher one-sheet and VHS; stacked question taglines, rental stickers, an on-screen-display countdown. Risk 3/2/1/3/3 (2 if implied).
- **PRIME CUTS (meat-free):** butcher-counter craft with zero animals; 'NOW SERVING' queue, receipt e-tickets, a cut-chart lineup on a skull. Risk 2/2/1/1/3; literal 4/5/5/1/4.
- **SPLATTER CLUB:** Repka-style cartoon gore, an evolving mascot, goregrind slapstick (slime, not blood). Risk 3/2/1/3/3.
- **HOUSEFULL HORROR:** Ramsay-era hand-painted posters, Sivakasi print, trilingual titles, a HOUSEFULL sold-out stamp. Risk 2/3/1/2/2.
- **SOFT KILL:** brutal word, gentle voice; refined serif, white space, fan portraits. Risk 1/1/1/1/1, but core credibility 4.
- **WAR BANNER:** fictional heraldry, Dürer and Holbein woodcuts, a crest generator. Risk 2/3/1/3/3, extremism coding 3.
- **RITE OF THE PIT:** secular sigils generated from band names, concentric seals. Risk 2/5/1/5/4.

**Hard constraints.** Meta's current ad standards explicitly ban visible innards and weapons pointed at the viewer (the poster exception covers only photorealistic fiction, not a festival); blood, dead bodies and animals with blood were dropped from the explicit list after May 2025, but reviewers can still reject anything 'shocking, sensational or excessively violent'. Google's Shocking-content policy covers violent language and gore and judges landing pages; YouTube ads disallow jump-scares and animated gore. In India, 39% of adults self-identify as vegetarian (Pew 2021), cow slaughter is restricted in most states, and Behemoth's 3 March 2026 Bengaluru show was cancelled in February after threats from Christian groups, and in February 2026 Istanbul authorities cancelled Slaughter To Prevail and Behemoth shows after 'Satanist' accusations. Avoid far-right coding (Totenkopf, runes, eagle with Fraktur) and misogynist slasher tropes.

**Operating rules.** Every key visual ships as UNCUT (organic, merch, 18+ gallery) and BROADCAST (ads, landing pages, sponsors, press). The name is the only violent word in ad copy. A rating-box advisory ('18+ · contains blast beats, strobe, pyro, circle pits · earplugs advised') carries menace and safety at once, never styled like an official CBFC or MPA mark. Adopt an inverted motto ('we butcher riffs, not animals') and prepare an authority and sponsor one-pager. Recommended set: KILL FLOOR, FINAL CUT, HOUSEFULL HORROR and PRIME CUTS as full directions; SOFT KILL as the sponsor register; SPLATTER CLUB as the mascot layer; WAR BANNER and RITE OF THE PIT only as accents.

## 9. Standout ideas worth adapting

1. The poster rebuilt as live HTML with day pills and 'enlarge poster' (Motocultor).
2. A ticket-stub ladder with sashes and struck sold-out tiers (Motocultor, Hellfest, Wacken).
3. One artist-card template for Instagram and site (Mystic; MDF's footer bar).
4. An 'Edition I' numeral sigil in logo, hashtag, poster and 404 (Download XXIV, Kilkim's roundel).
5. Triptych key art revealed with the lineup waves (Roadburn).
6. Blurred mystery slots and '?' cards (Copenhell, Sweden Rock).
7. 'First time in India', 'only India show' and home-city chips (Kilkim, Graspop, Good Things, BOA 2015).
8. A Hindi or Hinglish battle cry set huge over real crowd footage (Copenhell's 'VI SES I HELVEDE').
9. A fixed date marquee with a pause button (Copenhell, Motocultor).
10. A web planner with clash warnings and a shareable running-order card (the gap left by apps and Clashfinder).
11. Motto-named tiers plus a free collectible per ticket (Wacken's Louder/Faster/Harder and patch).
12. A homepage ticket rail with scene add-ons: day pass, full pass, stay, city scene walk (Inferno).
13. A named welfare programme with its own page and reporting line (Hellfest's Hellcare).
14. 'Humans of SLAUGHTER' and crew-spotlight series (Download, Hellfest).
15. A year-round 'Presents' gig calendar plus a city-heat band battle (Sound and Fury, Wacken Metal Battle India).

## 10. Design principles for our directions

1. Menace in the art, welcome in the words.
2. One accent, one texture, one display face per direction; red only with a partner.
3. Poster-first, text-always: every logo has a typed name behind it.
4. One lineup dataset drives web, poster, social and JSON-LD.
5. Honest urgency: real inventory, all-in INR, the next price in view.
6. Fast black: first paint is a static poster, dates and a ticket button; video is a garnish.
7. Credit the humans; no AI art.
8. Build the ritual: edition numerals, a named community and zones, collectibles.
9. India-native, not India-cliché: bilingual lockups, city tags, local print vernacular; no deities, cattle or occult symbols.
10. Every key visual has UNCUT and BROADCAST cuts.
11. Never a dead page: off-season mode, archive, 'Presents' calendar.
12. Accessible by construction: contrast floor, pause controls, reduced motion, no overlays.

## 11. References

- **Motocultor** https://www.motocultor-festival.com/ (typed lineup, ticket ladder, accessibility panel)
- **Hellfest** https://hellfest.fr/en/ (world-building, ticket stubs, CSR menu; black-hero warning)
- **Download** https://downloadfestival.co.uk/ (edition numeral, header countdown, Family membership, 404)
- **Wacken** https://www.wacken.com/en/ (motto tiers, patch, loyalty points; menu overload)
- **Copenhell** https://www.copenhell.dk/en (battle-cry hero, date marquee, pause control, program grid)
- **Sweden Rock line-up** https://www.swedenrock.com/line-up (day and stage filters, country codes, '?' cards)
- **Graspop line-up** https://www.graspop.be/en/line-up ('First time' and 'By country' views)
- **Mystic artists** https://www.mysticfestival.pl/en/artists (one card for site and Instagram)
- **Roadburn** https://roadburn.com/ (rotating commissioned artists, contextual filters)
- **Maryland Deathfest** https://www.deathfests.com/ (editorial menace; logo wall vs annotated list)
- **Eindhoven Metal Meeting** https://www.eindhovenmetalmeeting.com/ (poster-as-homepage, credited art)
- **Northwest Terror Fest** https://northwestterrorfest.com/ (two-colour screenprint formula)
- **Kilkim Žaibu** https://kilkimzaibu.com/en (premium underground system, edition sigil)
- **Inferno** https://infernofestival.no/ (homepage ticket rail with scene add-ons)
- **Obscene Extreme** https://obsceneextreme.cz/en (humour and ethics defuse an extreme name)
- **Bangalore Open Air** https://www.bangaloreopenair.com/ (Indian benchmark and its gaps)
- **Welcome to Rockville passes** https://welcometorockville.com/passes/ (all-in pricing cards, next price level)
- **MDF Instagram** https://www.instagram.com/deathfests/ (most disciplined reveal template)
- **Google event structured data** https://developers.google.com/search/docs/appearance/structured-data/event (JSON-LD rules)
- **Meta violent-content ad standards** https://transparency.meta.com/policies/ad-standards/objectionable-content/violent-graphic-content/ (BROADCAST limits)
- **Google Ads shocking content** https://support.google.com/adspolicy/answer/6015406 (violent language, landing pages)
- **Veerana (1988) poster** https://bollywoodmovieposters.com/shop/old-indian-movie-posters-for-sale/veerana-2 (HOUSEFULL HORROR source)

---

## Appendix A. Fact-check log

Sixteen high-stakes claims were sent to two independent checkers. Result: 8 confirmed, 5 partly true, 3 unverified, 0 refuted. Partly-true and unverified items are corrected or qualified in the text above.

| ID | Claim (as first written) | Verdict | Correction or note |
|---|---|---|---|
| C01 | Meta's ad standards on violent and graphic content prohibit ads showing visible innards, blood, uncovered dead bodies, weapons pointed at the viewer (with an exception only for motion-picture posters) and real animals with blood, and restrict cartoon violence when the violent act is the focus. | partly-true | The claim describes the 14 May 2025 version. As of Nov 2026 the explicit ad list covers only visible innards and weapons pointed directly at the viewer. The motion-picture-poster exception applies only to photorealistic fictional imagery, never to real people. Blood, uncovered dead bodies, animals with blood and the cartoon rule were removed from the list. Ads must still avoid 'shocking, sensational or excessively violent' content and anything the Community Standards remove, restrict or put behind a warning screen. Stylised blood is therefore no longer explicitly banned, but reviewers can still reject it as shocking. |
| C02 | Google Ads' Shocking content policy covers violent language, gruesome imagery, blood/guts/gore and promotions likely to shock or scare, and is assessed on ad destinations (landing pages) as well as the ads. | confirmed | - |
| C03 | Google's YouTube/Discover ad policy disallows intentional scares or jump-scares and dramatised or animated gore, and advises implication over depiction. | confirmed | - |
| C04 | Pew (2021): 39% of Indian adults self-identify as vegetarian and 44% of Hindus; the slice also cites 71% of northern Hindus vs 18% in the East and 81% restricting meat in some way (the regional figures especially need checking). | confirmed | - |
| C05 | Behemoth's 3 Mar 2026 Bengaluru show (Phoenix Marketcity, promoted by SkillBox) was cancelled after threats from religious Christian groups, with automatic refunds. | confirmed | - |
| C06 | Istanbul authorities cancelled Slaughter To Prevail's 10 Feb 2026 show and a Behemoth show as incompatible with social values after 'Satanist' accusations. | confirmed | - |
| C07 | Trendslaughter Fest is an existing underground metal festival in Bengaluru (Rolling Stone India covered edition V), a potential name-confusion or trademark issue for a SLAUGHTER-based name; the article fetch failed, so details are unverified. | partly-true | Trendslaughter Fest is a real Bengaluru underground metal gig series or festival. Rolling Stone India covered edition IV (2014), V (10 Oct 2015) and VI (3 Mar 2018), and the article details are now confirmed. Whether it is still running in 2026, and whether its name is a registered trademark, is unverified. The name-confusion risk is a judgement call, not a documented fact. |
| C08 | Roadburn's official visual artists include Malleus (2009; 2027 triptych), Costin Chioreanu (2013), Arik Roper (2015), Becky Cloonan (2016), John Dyer Baizley (2017), Douwe Dijkstra (2020; 2026 triptych), Lucile Lejoly (2021 Redux), Valreza Collective (2022), David Fitt (2024) and Nona Limmen (2025). | partly-true | Confirmed: Malleus (2009 poster; 2027 triptych), Arik Roper (2015), Becky Cloonan (2016), Douwe Dijkstra (2020; 2026 triptych), Lucile Lejoly (2021 Redux), Valreza Collective (2022), David Fitt (2024) and Nona Limmen (2025). William Lacalmontie (2023) should be added. Unverified: Costin Chioreanu as the 2013 artist; his only documented 2013 link is a film screening. John Dyer Baizley was the Roadburn 2017 curator, and no source shows he made the official 2017 artwork, so the list probably mixes up his curator role with the artist role. The 2017 artist is unconfirmed, though one reviewer guessed Chioreanu. |
| C09 | Maryland Deathfest 2027's key art is by Jacob Kuddes (credited by Metal Injection). | unverified | Unsupported as sourced. The cited Metal Injection article names no artist for the MDF 2027 artwork. MDF's own site credits promotional media to DAWWWG Digital and site illustrations to Bite Radius, Lucas Ruggieri, Mark Riddick, Misanthropic-Art and Misha T. No checked source attributes the 2027 key art to Jacob Kuddes, so don't state that attribution. |
| C10 | Inferno Metal Festival's 2026 guide credits logos, design and layout to Asgeir Mickelson and the Inferno logo illustration to Nick Morte. | unverified | Only partly supported. The festival's site credits its design material to Asgeir Mickelson. The guide's exact credit wording ('logos, design and layout') and the Nick Morte logo-illustration credit could not be verified. |
| C11 | Bangalore Open Air 2026: press reported BookMyShow tickets from ₹5,499, 18+ entry and Carcass as headliner, while the festival's own pages state 12+ or all-ages entry and the site banner shows Dismember as the largest logo. | partly-true | The press details (BookMyShow from ₹5,499, 18+, Carcass headlining) and the Dismember banner are confirmed. The festival's own site says 'all-ages' (under-18s accompanied, under-10s free) and does not state '12+'. That '12+' figure is unverified and does not come from the festival's own pages. Carcass does not appear on the current site banner. |
| C12 | Wacken 2027 tickets: LOUDER €366 + €2 fee, THE PIT €1,399, YOUNGER (under 26) €281, sold-out LOYALTY/FASTER/HARDER at €349 shown struck through, a free exclusive 2027 patch with every ticket and 333/666 'The Core' loyalty points. | confirmed | Minor clarification: Louder earns 333 points, while The Pit and Younger each earn 666. The €2 fee applies to Louder and Younger only; The Pit has no ticket fee. |
| C13 | Download 2027 sales sequence: early birds the day after DL2026 with no names, a 12 Nov launch event, then a PayPal presale (Thursday 9pm to Saturday 9:59am) before the Download Family presale (Saturday) and general sale (Sunday 10am). | unverified | Confirmed: early birds on sale 15 June 2026 with no acts named, a lineup launch event at Alexandra Palace on Thursday 12 Nov 2026, and a PayPal presale running at launch. Unverified: the Thursday 9pm to Saturday 9:59am window, the Saturday Download Family presale and the Sunday 10am general sale. The cited Official Charts article does not contain these details. |
| C14 | Zomato acquired Paytm's event-ticketing businesses Insider and TicketNew for ₹2,048 crore in August 2024 and folded them into the District app. | partly-true | In August 2024 (announced 21 Aug), Paytm agreed to sell Zomato its entertainment ticketing business for ₹2,048 crore. That covers TicketNew (mainly movie ticketing, via Orbgen Technologies) and Insider (events, via Wasteland Entertainment). Insider has since been folded into District (insider.in redirects to district.in). TicketNew still operates as its own movie-ticketing site on District infrastructure. |
| C15 | Graspop's lineup offers 'First time' and 'By country' views, and band pages link to past GMM appearances (seen only in fetched HTML because the pages rendered black in headless browsers). | confirmed | - |
| C16 | Google's Event structured-data guidance asks for one event per URL, offers.url pointing directly to ticket purchase and eventStatus, and lists India among supported regions for event results. | confirmed | - |

## Appendix B. Palette library

| Palette | Hexes | Mood | Seen in |
|---|---|---|---|
| Hellfest stone and blood | #121212 #2A2A2A #E3141B #9E0F14 #E8DCC8 | Sacred, gothic, monumental; red for large display only (about 4:1 on black), bone for text | hellfest.fr (two slices' samples merged) |
| Download XXIV toxic glitch | #000000 #05070D #39E81C #FF2BD1 #19C3D6 #FFFFFF | Electric, digital, youthful; acid green carries CTAs, magenta and cyan only in glitch | downloadfestival.co.uk header, hero, poster and tickets |
| Copenhell hell ticker | #000000 #FFFFFF #E3000B #6F7F86 | Raw documentary restraint with one signal red for the marquee (another slice sampled #FF1A1A) | copenhell.dk |
| Sweden Rock signal yellow | #0B0B0B #FDC300 #FFFFFF #2A2A2A | Heritage rock, confident, highly legible | swedenrock.com |
| Tuska mint | #6FBF7A #A8DCC0 #000000 #222222 | Unexpected, fresh, urban Nordic; proof a metal brand can be non-red | tuska.fi |
| Motocultor ember ritual | #2B120C #4A1B0F #EAA338 #FBE2AD #D9412B | Warm occult-folk: amber gold on oxblood with embers and cream ticket stubs (watch small amber text) | motocultor-festival.com |
| Mystic copper | #1B1B1B #3D1C0E #C4682B #E8862A #FFD04A | Illustrated, cinematic, modern; keep button text large and bold on mid-orange | mysticfestival.pl |
| Alcatraz prison orange | #000000 #F26A21 #0D2033 #FFFFFF | Industrial concept world: jumpsuit orange, barbed wire, navy smoke | alcatraz.be |
| Kilkim Baltic gold | #0F0E0D #1C1A17 #C9A36A #ECE4D6 | Premium underground pagan: warm black, cream type, one gold accent | kilkimzaibu.com |
| NWTF acid screenprint | #101010 #82BB55 #78BE20 #A7A2C3 #FFFFFF | Two-colour DIY screenprint, toxic and cheap to print | northwestterrorfest.com poster, buttons and nav |
| Deathfest crimson | #000000 #FFFFFF #CA0030 #515151 | Brutal but editorial: grey ink texture, white condensed type, crimson brushed year | deathfests.com hero and Instagram footer bar |
| Inferno oxblood | #060606 #2A0000 #971813 #B10805 | Smouldering Nordic black metal | infernofestival.no header, ticket rail and poster |
| EMM blood-moon one-ink | #E40302 #000000 #FFFFFF #B45131 #201408 | Single-ink ritual red; rust and dark-brown recolour of the same art for the warm-up event | eindhovenmetalmeeting.com posters |
| Obscene Extreme grind carnival | #44178C #331169 #00FF70 #FFFFFF | Deliberately anti-serious freak-show humour (another slice sampled the green as #00AA4A) | obsceneextreme.cz |
| BOA temple teal and gold | #0E1A16 #2EE6A6 #0F5E52 #D9A441 #F2E6C9 | India-rooted, occult, tattoo-flash; escapes the red/black cliché | bangaloreopenair.com 2026 banner, wordmark and nav |
| Roadburn dusk | #3B2A5A #E0662A #F2A541 #F2D06B #1A1424 #100C23 | Psychedelic doom; a neutral ink frame lets the commissioned art lead | Roadburn 2026 poster (Douwe Dijkstra) and roadburn.com line-up page |
| Sulphur warning | #F5C400 #FFC20E #111111 #1C1C1C #FFFFFF | Hazard-level contrast, punk energy, legible as a thumbnail | Aftershock 2026 poster; Brutal Assault 2026 social cards |
| Parchment and blood one-ink | #E9D6CC #B3262B #7A1A1E #2A1A1A | Printed relic; an inverted light edition that stands out in dark feeds (low contrast at small sizes) | Hellfest 2025 lineup poster |
| Furnace acid-wash | #BFE6F2 #8ED3E8 #8C3A24 #FFFFFF | Warm, nostalgic, sun-bleached; heavy music does not have to be grim | furnacefest.us |
| Ritual gilt | #141A17 #A8925A #8E2A45 #050505 #C9A86A | Luxury occult: antique gold hairlines on green-black and marble | sleep-token.com; behemoth.pl |
| KILL FLOOR industrial (territory) | #0B0B0B #8A9097 #B9B6AE #F2C200 #D2232A #005BAA #00843D #E70C57 | Steel, concrete and ISO safety-sign colours plus one rebel pink | ISO 7010 signage; schlachthof-wiesbaden.de (pink sampled, rest approximate) |
| FINAL CUT video nasty (territory) | #0B0B0B #EAE7E4 #18140E #D2391B #00E5FF #FF2E88 | Slasher one-sheet paper and vermilion with sparing VHS chroma accents | The Texas Chain Saw Massacre (1974) poster; VHS vernacular |
| PRIME CUTS meat-free butcher (territory) | #FBF9EF #F4F3EE #8F221D #E9C9B9 #5B2A86 #1F2A44 | Tile, butcher paper, oxblood, stamp-ink violet, enamel navy | thevegetarianbutcher.co.uk (cream and oxblood sampled); butcher-shop vernacular |
| HOUSEFULL HORROR Ramsay red (territory) | #C71E17 #EFCC31 #621812 #00A6D6 #111111 | Indian B-horror poster heat and Sivakasi print | Veerana (1988) poster (red, yellow and maroon sampled) |
| WAR BANNER woodcut heraldry (territory) | #EFE6D2 #1B1A17 #9E1B1B #B8892B #3E7B6E | Parchment, iron-gall ink, gules, or, verdigris | Dürer woodcuts and heraldic tinctures (approximate) |
| Pyre (RITE OF THE PIT territory) | #0A0A0A #441C03 #7A3401 #E29B0B #E8E0CC | Ritual fire; warm menace without blood | slaughtertoprevail.com bonfire section (sampled) |
| SOFT KILL (territory) | #F4F1EA #111111 #F2C7C1 #CA0030 | Bone, ink, blush and one crimson accent: the brutal word in a gentle voice | Name-territories slice (MDF crimson sampled) |
| SPLATTER CLUB (territory) | #44178C #00AA4A #7CFF2E #FF4FA3 #E30F1E #111111 | Gleeful cartoon gore and slime humour | Obscene Extreme purple and green; comic vernacular (approximate) |

## Appendix C. Typography map

| Style | Google Fonts | Verdict |
|---|---|---|
| Ultra-condensed heavy grotesque, all caps (hero lines, edition titles, lineup tiers, CTAs) | Anton, Big Shoulders, League Gothic, Barlow Condensed, Antonio, Six Caps | The category workhorse and the most legible choice over video and on phones (Copenhell, MDF, Download, Inferno). Set it tight. Bebas Neue or Oswald used alone looks generic; let colour, art and one display face carry the identity. Six Caps only at very large sizes. |
| Condensed semi-bold sans for nav, buttons, filter pills and bilingual UI | Barlow Condensed, Oswald, Teko, Khand, Rajdhani | Teko, Khand and Rajdhani (Indian Type Foundry) cover Devanagari, so English and Hindi can share one condensed system; use 20px or more for UI. |
| Heavy blackletter (textura/fraktur) for the wordmark, year or edition name | UnifrakturCook, Manufacturing Consent, UnifrakturMaguntia | The strongest black/death-metal signal (Beyond the Gates, NWTF, Kill-Town, EMM dates, Sweden Rock's hero date). Mixed case at 28px+, never body, buttons, prices or all caps. Hand-drawn lettering beats any font. Combined with eagles or runes it reads far-right, so keep it on warm, non-militaristic layouts. |
| Readable blackletter for short headings and labels | Pirata One, Grenze Gotisch | The practical blackletters: Pirata One still reads at 18-20px and Grenze Gotisch is variable (100-900) so it can cover H1-H3. Credible next to a clean grotesque. |
| Flared or engraved Roman capitals for edition titles ('Edition I', 'Chapter I') | Marcellus SC, Forum, Cormorant SC, Cinzel | Epic, ritual tone as in Hellfest's 'Absolute Edition' and Resurrection's chrome 'Chapter X'. Titles only. Cinzel reads as epic fantasy or power metal, so prefer Marcellus SC, Forum, Cormorant SC or custom lettering. |
| Italic serif micro-annotations under band names | Cormorant, Libre Caslon Text, EB Garamond, IM Fell English | MDF's signature detail ('Old School Set', album titles) at 11-14px; editorial and collectable. Playfair Display risks a lifestyle or wedding look. |
| Wide or extended geometric caps for statements and festival-name lockups | Unbounded, Syncopate, Michroma, Krona One, Archivo | A modern counterweight to gothic (Kilkim, Inferno's wordmark, Brutal Assault's 'NEW BANDS', ArcTanGent). One-line statements only; very wide on mobile. Archivo's width axis also gives a narrow cut for long band names. |
| Monospace for countdowns, set times, prices and data | JetBrains Mono, Space Mono, IBM Plex Mono, DM Mono, VT323 | Tabular digits stop countdowns jittering (Tuska) and signal an underground or data feel (Unsound). VT323 only for CRT/VHS accents. |
| Neutral body sans for practical info, FAQs and policies | Inter, IBM Plex Sans, Barlow, Manrope, Mukta, Hind | 16-18px, line-height 1.5-1.6, off-white #F2EEE6 on near-black; Mukta and Hind cover Devanagari. Never the primary display voice: an all-Montserrat or all-Inter site reads as a template (Prophecy Fest, Inferno). |
| High-contrast Didone for luxury-occult titles | Bodoni Moda, Gloock, Italiana, Playfair Display SC | Beautiful at 64px+ (Sleep Token's album title); hairlines break down at small sizes, in red and on low-DPI Android screens. |
| Devanagari and Indic display for bilingual lockups | Rozha One, Jaini, Gajraj One, Anek Devanagari, Tiro Devanagari Hindi, Kalam, Anek Kannada, Noto Sans Kannada | Unclaimed by Indian metal sites (BOA is English-only). Rozha One brings film-title drama, Jaini is the closest 'Indian blackletter', Gajraj One is loud truck-art (sparingly), Kalam suits hand-written lines; choose regional scripts by host city and test conjuncts at small sizes. |
| Distressed or grunge display | Rubik Dirt, Rubik Distressed, Special Elite | Acceptable for 1-3 word headings or zine-style info blocks; better to mask real scanned print texture over a clean condensed face. Rubik Wet Paint, Burned, Glitch and Spray Paint read as gimmicks. |
| Hand-brushed scrawl numerals and lines | Permanent Marker, Rock Salt, Caveat Brush | MDF's crimson brushed '2027' and BOA's brush headings show the impact, but fonts look fake; commission hand-lettering each edition and use these only as placeholders. |
| Shop-front slab and gilded serif (PRIME CUTS territory) | Alfa Slab One, Ultra, Abril Fatface, Playfair Display SC, Staatliches | Fresh in metal; powers enamel-sign ticket tiers and price tags. Display only. |
| Industrial stencil and signage grotesques (KILL FLOOR territory) | Big Shoulders Stencil, Big Shoulders Inline, Saira Stencil One, Chakra Petch, Black Ops One | Authority-friendly and strong for wayfinding; the Big Shoulders family is Chicago's municipal typeface. |
| 1980s slasher title effects: chrome, extrusion, neon outline (FINAL CUT territory) | Bungee Shade, Rubik 80s Fade, Tilt Prism, Monoton | One word per layout, always paired with a condensed grotesque; real chrome belongs on the wordmark as an SVG treatment, never on UI text. |
| Cartoon and comic heavy display (SPLATTER CLUB territory) | Bowlby One SC, Bangers, Luckiest Guy, Titan One, Rammetto One | Mascot, merch and reveal panels only; never body text; reads juvenile if it spreads. |
| Horror novelty and stock 'metal' fonts | Nosifer, Creepster, Eater, Butcherman, Metal Mania, New Rocker, Fruktur, Germania One, MedievalSharp | Avoid as identity: they read as Halloween party, beer hall or Renaissance fair, and Butcherman's M and A are near-illegible. At most an ironic one-off accent; commission the logotype instead. |

## Appendix D. Standout ideas and how we would adapt them

1. **The lineup as the poster rebuilt in live HTML** (seen at Motocultor (motocultor-festival.com)). A typed tiered lineup (one headliner, then two then three per line, then small rows) in our condensed workhorse with day pills and an 'enlarge poster' thumbnail, generated from the same dataset that exports poster PNGs and social cards.
2. **Ticket-stub price ladder with state sashes** (seen at Motocultor ticket cards; Hellfest's SOLDOUT / COMING SOON sashes; Wacken's struck sold-out tiers). Perforated stub cards in INR: a Founders ₹101/₹501 batch, Phases 1-3, Regular; sold-out struck through, the current tier marked 'almost gone' from real inventory, the next tier labelled with price and date; the same stub becomes the 'phase sold out' social post.
3. **One artist-card template for Instagram and the site** (seen at Mystic Festival artist cards; MDF's crimson footer bar; Graspop's day cartouche). One locked card per edition: festival header, band photo and name, day + stage cartouche, special-set line and an accent footer bar with URL and dates inside the 3:4 safe area; each reveal post auto-creates the site card.
4. **Edition numeral as identity** (seen at Download XXIV (#DLXXIV, also on its 404); Kilkim Žaibu's '27' roundel; Resurrection's 'Chapter X'). Launch as 'Edition I' with a numeral sigil in the logo lockup, hashtag, story highlights, poster and 404; re-letter it yearly while the wordmark stays fixed.
5. **Commissioned key art revealed as a triptych with the lineup waves** (seen at Roadburn 2026 (Douwe Dijkstra) and 2027 (Malleus)). Commission one illustrator per edition; panel 1 with wave 1, panel 2 with wave 2, the full poster with the final lineup; a 'meet the artist' page with process shots and numbered screenprints.
6. **Mystery slots that sell the next announcement** (seen at Copenhell 2026's blurred logo-sized slots; Sweden Rock's '?' cards). Frosted logo-sized blobs on poster and site that unblur with a short animation on announcement day; never an empty '0 bands announced' state (Alcatraz).
7. **Rarity and origin chips** (seen at Kilkim 'First time at KŽ'; Graspop 'First time' and 'By country' views; Good Things 'exclusive' badges; MDF italic set notes; BOA 2015 city tags). Chips for 'INDIA DEBUT', 'ONLY INDIA SHOW' and 'ALBUM IN FULL', a home-city tag for each Indian band and a 'Home-grown' filter.
8. **Local-language battle cry over real crowd footage** (seen at Copenhell's 'VI SES I HELVEDE' ('see you in hell')). A short Hindi or Hinglish line set huge in condensed caps (Teko or Khand beside Anton) over a muted crowd loop with a visible pause button and a static poster frame.
9. **Fixed date marquee** (seen at Copenhell's red bottom ticker; Motocultor's tilted ribbon with its own pause button). A ticker of dates, city and edition glyph that pauses on hover and focus, stops under reduced motion and doubles as a lower-third in social video; never stacked with a cookie bar and a bottom nav.
10. **Own the planner on the web** (seen at Gap left by native apps (Graspop/Appmiral, Hellfest/Fragolabs, Wacken) and fan-made Clashfinder). An installable PWA: favourites without login, clash warnings, .ics export, offline timetable and map, and a shareable 'my running order' Story image.
11. **Motto-named tiers and a collectible with every ticket** (seen at Wacken (Louder/Faster/Harder tiers, free exclusive patch, 333/666 loyalty points)). Tiers named in our territory's language (shift names for KILL FLOOR, PRIME/CHOICE/SELECT for PRIME CUTS) plus an enamel pin or patch collected on site; 666 jokes stay inside community channels.
12. **Homepage ticket rail with scene add-ons** (seen at Inferno (day tickets, festival hotel, 'Black Metal Bus Sightseeing'); Beyond the Gates' Black Metal Landmarks tour). Horizontal INR cards for day pass, full pass, stay partner, a city scene walk or record-store crawl and a veg food credit, scrolling sideways on mobile.
13. **A named welfare programme** (seen at Hellfest Hellcare (4 on-site spaces, about 150 staff, zero tolerance, festival-time emergency line); Dekmantel's footer code of conduct). A named programme page with locations, team and reporting by WhatsApp and phone, linked from the footer and checkout and designed in the same template family as the band cards.
14. **People as content** (seen at Humans of Download; Hellfest's 'Inside Hell' crew spotlights; BOA's vox pops). 'Humans of SLAUGHTER' portraits shot at warm-up gigs, crew spotlights and 'What does metal mean to you?' Reels, with a website gallery.
15. **A year-round programme before Edition I** (seen at Sound and Fury's 'SAF Presents'; HEAVY MTL; Wacken Metal Battle India; Bloodstock's Metal 2 the Masses). A 'SLAUGHTER Presents' club calendar across metros with On Sale / Sold Out pills, plus a band battle with city heats whose winner opens the festival.

## Appendix E. Name territories in full

### KILL FLOOR → THE PLANT

Industrial machine, not meat: the festival as a plant with halls, lines and shifts. Cold, precise, brutalist and authority-friendly; ex-slaughterhouse venues (Schlachthof Wiesbaden, Matadero Madrid) show the word read as heritage and regeneration. Strongest for wayfinding, house rules, safety comms and sponsor/authority decks. Recommended as a full direction.

- **Visual vocabulary:** Stainless and galvanised steel, overhead rails with empty hooks or hanging ID tags, conveyors, hazard stripes, stencil bay numbers (HALL 01, LINE 3), shift rosters and punch cards ('clock in' to build your timetable), cold-store doors, water-tower lettering (Matadero), ISO 7010 shape/colour grammar for real wayfinding plus parody pictograms for social, holographic status stickers (Schlachthof); lineup as a conveyor marquee; merch as workwear, hi-vis and enamel ID badges. Colours #0B0B0B, #8A9097, #B9B6AE, #F2C200, #D2232A, #005BAA, #00843D with rebel pink #E70C57. Type: Big Shoulders (Display/Stencil/Inline), Barlow Condensed, Saira Stencil One, Chakra Petch, Space Mono or IBM Plex Mono.
- **Risks:** Risk 1-2/2/2/2/1 (ads/India/veg/cliché/sponsor). 'Kill floor' literally names a slaughterhouse floor, so no carcasses, meat on hooks or dehumanising 'human meat' visuals; can read as techno or corporate; parody signs must never sit near real emergency signage, which stays standard.

### FINAL CUT

1970s-90s slasher one-sheet meets the VHS rental shelf: midnight-movie dread with a wink, menace by implication. Recommended as a full direction.

- **Visual vocabulary:** A giant stacked question tagline above the title (Texas Chain Saw Massacre poster structure: question, sensational claim, title, truth claim), chrome/extruded or slashed title lettering, an ultra-condensed billing block (STARRING headliners, WITH, AND INTRODUCING local openers), masked silhouettes, empty corridors, keyholes and torch beams instead of weapons, VHS clamshell spines, rental stickers (NEW RELEASE, BE KIND REWIND), tracking lines and chroma bleed, a VCR on-screen-display countdown (PLAY -142:12:09), an 'UNCUT' badge, scroll as fast-forward, band cards as sliding VHS spines, teaser trailers that rewind to reveal names, horror-sequel edition subtitles (Kill-Town precedent). Colours #0B0B0B, #EAE7E4, #18140E, #D2391B, #F2F2F2 with sparing #00E5FF and #FF2E88. Type: Anton, League Gothic, Six Caps; Bungee Shade, Rubik 80s Fade, Tilt Prism for title effects; VT323 for the OSD.
- **Risks:** Risk 3/2/1/3/3, or 2 on ads if strictly implied. Gore fails Google, weapons aimed at the viewer fail Meta, and Meta reviewers can still reject blood or corpses as shocking; female-victim tropes; copying real posters, MPA rating boxes or PAL marks. Use an invented studio ident and a generic advisory box; no weapons in paid assets.

### PRIME CUTS (meat-free)

The butcher counter with zero animals: deadpan, crafty, cheeky and retail-friendly, the festival as a neighbourhood shop that cuts riffs. The best ticketing story of any territory. Recommended as a full direction only in its meat-free form.

- **Visual vocabulary:** White subway-tile grids, riveted enamel sign plates, gilded-glass and chalkboard lettering, cut-chart diagrams applied to a skull, guitar, amp stack or the site map (days as zones), price spikes and tags, a deli 'NOW SERVING #0457' presale queue, PRIME/CHOICE/SELECT tiers, thermal-receipt e-tickets and shareable 'my lineup' receipts, butcher paper and twine, an invented violet inspection stamp, striped aprons, a '100% veg counter' food pledge. Colours #FBF9EF, #F4F3EE, #8F221D, #E9C9B9, #5B2A86, #1F2A44. Type: Alfa Slab One, Ultra, Playfair Display SC, Abril Fatface, Big Shoulders or Staatliches for tags, Courier Prime or Rubik Broken Fax for receipts, Special Elite for stamps.
- **Risks:** Meat-free risk 2/2/1/1/3; a literal butcher version scores 4/5/5/1/4. Cattle or pig imagery is religious-political dynamite in India; vegans in the scene object; animals with blood or raw-meat photos invite 'shocking' rejections on Meta and Google; never mimic official USDA, FSSAI or EU inspection marks. Invert slaughter into care, as The Vegetarian Butcher does.

### SPLATTER CLUB

Thrash-cartoon gore and goregrind slapstick: gleeful, self-aware, party-first, horror as comedy. Best used as the mascot and merch layer across directions rather than as the master brand.

- **Visual vocabulary:** Ed Repka-style painted cartoon ghouls in saturated red, purple and toxic green, EC-comic splash panels and halftone, an evolving mascot (toy, plush, AR filter, sticker pack; Bloodstock sells a mascot figure), goregrind props (Gutalax's hazmat suits, toilet-paper storms, inflatables), Obscene Extreme's costume culture and 'time remaining to unleash hell' countdown, comic-panel lineup reveals, slime-drip loaders, a toilet-paper confetti easter egg, a costume contest and a kids' corner. Colours #44178C, #00AA4A, #7CFF2E, #FF4FA3, #E30F1E, #111111. Type: Bowlby One SC, Bangers, Luckiest Guy, Titan One, Rammetto One, with Rubik Wet Paint as a drip accent.
- **Risks:** Risk 3/2/1/3/3. YouTube and Discover ads reject animated gore, and Meta reviewers can still flag cartoon violence as shocking; reads juvenile to sponsors; explicit goregrind band names are unusable in paid media. Show the gag, not the act (green slime, a bandaged mascot); keep an 18+ UNCUT gallery on the site only; the mascot is never a cow, bull, goat or pig.

### HOUSEFULL HORROR

India-native single-screen B-horror and street print: loud, nostalgic, desi camp and locally rooted; the most differentiated direction for an Indian festival. Recommended as a full direction.

- **Visual vocabulary:** Ramsay-era hand-painted and photo-collage posters (Veerana 1988: red ground, yellow extruded slab title on a diagonal, condensed slab credits, Devanagari title), trilingual title lockups (English, Hindi, Urdu), a stylised circle-A adults-only badge that doubles as the anarchy A, a HOUSEFULL board as the sold-out stamp, Sivakasi print texture (misregistration, halftone, foil, matchbox and fireworks-label borders), local sign-painter lettering, band 'matchbox labels' as swipeable mobile cards and collectibles, painter process videos as social content, per-city script lockups; Pakistan's Zibahkhana (Urdu for slaughterhouse) as a regional precedent. Colours #C71E17, #EFCC31, #621812, #00A6D6, #111111. Type: Rozha One, Modak, Yatra One, Teko, Sarpanch, Khand, Anek Kannada / Baloo Tamma 2 / Noto Sans Kannada for Bengaluru, Alfa Slab One for Latin, plus commissioned hand-lettering.
- **Risks:** Risk 2/3/1/2/2. The vernacular often carries deities and temples (Purana Mandir means 'old temple'); can read as kitsch or a Bollywood party; pastiche of real film posters; a badge resembling an official CBFC certificate. No religious motifs, black-ground metal discipline, pay and credit local painters, stylised never official badges.

### SOFT KILL

The brutal word in a gentle voice: ironic, art-school, fashion-forward and very welcoming, menace through restraint. The sponsor, authority and press register rather than a stand-alone direction.

- **Visual vocabulary:** A refined serif or clean grotesque wordmark with one raw element (as MDF's crimson brushed year over a clean grotesque), white space, a Swiss grid, documentary fan portraits, polite microcopy, holographic stickers, fashion merch, a calm, fast, accessibility-first site; the word is already domesticated by venues (Schlachthof, Matadero). Colours #F4F1EA, #111111, #F2C7C1, #CA0030. Type: Instrument Serif, DM Serif Display or Bodoni Moda with Bricolage Grotesque or Darker Grotesque.
- **Risks:** Risk 1/1/1/1/1, but core-fan credibility risk 4: it can feel toothless or cynical. Pair it with an authentic underground logo, a real lineup and an UNCUT poster and merch layer.

### WAR BANNER

Heraldic horde and woodcut epic: monumental, ceremonial and collective, the crowd as an army that marches together, framed as anti-war and egalitarian. Use only as an accent.

- **Visual vocabulary:** Blazon tinctures (gules, sable, argent, or), shields as band crests, swallowtail pennants and gonfalons as stage flags, wax seals, muster rolls, Dürer-style dense hatching (the Four Horsemen stampede), Holbein's Dance of Death satire (death levels the powerful), Bayeux-style friezes, siege-map site plans, a horizontal tapestry scroll of the running order, a crest generator for fan crews; Brutal Assault's fortress venue and anti-violence motto as precedent. Colours #EFE6D2, #1B1A17, #9E1B1B, #B8892B, #3E7B6E. Type: IM Fell English / IM Fell DW Pica and Cinzel, with Texturina, Grenze Gotisch, Jacquard 24 or UnifrakturMaguntia as accents.
- **Risks:** Risk 2/3/1/3/3 plus extremism-coding risk 3. Glorifying real wars, massacres or communal violence (live wounds in South Asia); far-right coding (SS Totenkopf per ADL, runes, eagle + Fraktur); Viking cliché; weapons aimed at the viewer in ads. Fictional heraldry and beasts only, public-domain woodcuts, no real flags, nations or religions.

### RITE OF THE PIT

Ritual without religion: hypnotic, ceremonial communal catharsis in which the rite belongs to the crowd (headbang, circle pit, wall of death). The highest-risk territory; accents only.

- **Visual vocabulary:** Circular seals with rim lettering, line glyphs, magic-square grids, candle and smoke light, concentric circles as the circle pit, generative band 'sigils' made by condensing each band name's letters (Austin Osman Spare's method), personal sigil share-cards from a buyer's name, SVG stroke-draw animation, one seal per stage or day, embroidered patches; Slaughter To Prevail's bonfire-and-silhouette scene shows ritual menace without gore. Colours #0A0A0A, #441C03, #7A3401, #E29B0B, #E8E0CC. Type: Cinzel, Libre Caslon Display, Bodoni Moda, Instrument Serif, with Space Mono for data.
- **Risks:** Risk 2/5/1/5/4, the highest in South Asia (Behemoth Bengaluru 2026, the Istanbul bans, Krisiun and NervoChaos held at Dhaka airport in 2017); 'sacrifice' evokes real practices; goats and inverted crosses read as anti-religious; Indian religious-sentiment law. Pure geometry and type only, no Goetia seals or pentagrams, avoid the words 'satanic' and 'sacrifice', keep a stakeholder FAQ ready.

## Appendix F. Known gaps

1. The shared web-search quota ran out in every slice, and several sites were never seen visually: Graspop (black render), Tons of Rock (bot wall), Leyendas del Rock (official URL unconfirmed), Roskilde and Berlin Atonal (Cloudflare), 70000 Tons (bot wall), Hammersonic (consent wall), Loud Park (blank render), Milwaukee Metal Fest (TLS error), Kill-Town, Matadero, parts of Brutal Assault, and Obscene Extreme's Instagram.
2. Mobile evidence is approximate: the capture tool's minimum window (~500px) was cropped to 390px, so right-edge clipping (for example MDF's hero, whose button sits centred on a ~500px layout) is probably an artefact; real 360-390px behaviour is unverified for most sites.
3. Platform analytics are thin: only Instagram follower counts and Threads like counts were captured; TikTok and YouTube channel pages rendered blank and Reddit blocked access, so there are no engagement rates, reach or ad-performance numbers.
4. India first-hand data is missing: Indian promoters' WhatsApp practice, Android and mobile-network statistics, BookMyShow/District/SkillBox checkout UX (BookMyShow blocked the browser), EMI/UPI support at checkout, and GST/convenience-fee display norms.
5. Indian legal and regulatory points (2023 dark-pattern guidelines, DPDP Act 2023, surrogate liquor advertising, ASCI Chapter II, BNS s.299, state drinking ages, the 2022 'Kaali' poster FIRs) come from secondary sources or background knowledge and need counsel review.
6. Hex values are approximate screenshot samples, some taken through consent overlays (Wacken) or conflicting between slices (Obscene green #00FF70 vs #00AA4A; Copenhell red #E3000B vs #FF1A1A); re-sample before building tokens.
7. Artist attributions are incomplete: the makers of Hellfest, Wacken, Brutal Assault and Graspop key art are unknown; no Indian illustrators or sign painters were researched; festival commissions by Seagrave (beyond OEF), Repka, Szpajdel, Kantor or Valnoir were not found.
8. The award-site sweep (Godly, FWA, CSSDA, Siteinspire) was not completed and a Gojira capture timed out, so high-craft motion references are limited to MUTEK, Santa Teresa and WHOLE Festival listings.
9. No audience research: Indian metal-fan personas, gender balance, travel patterns and price sensitivity beyond a handful of anchors (₹550 to ₹6,999).
10. Our festival's scale, dates, city and venue are unknown, so lineup-system, IA and pricing recommendations are conditional (for example a day × stage matrix only at 3+ stages and 60+ bands; camping pages only for a greenfield site).
11. No trademark, domain or social-handle search has been done for SLAUGHTER names; Trendslaughter Fest's details and possible confusion with the band Slaughter To Prevail need a naming and legal check.
12. Bangalore Open Air facts conflict (press named Carcass as headliner while the site banner shows Dismember largest; press said 18+ while the site says all ages), and the outcome of its October 2026 edition was not researched.
13. Performance targets (LCP within 2.5s, hero of ~150KB or less) are recommended budgets, not measurements on Indian networks; no field data or audits were run.
14. Accessibility findings (MUTEK's 6.33/10 developer score, criticism of overlay widgets) come from secondary sources; no accessibility audits were run on any site.
15. Screenshot evidence lives in the temporary session scratchpad (shots/<slice>/ folders) and may be cleared; copy it into the project before the design phase.

## Appendix G. All references

- **Motocultor Festival** https://www.motocultor-festival.com/ - Best mid-size template: typed tiered lineup with day pills, ticket-stub price ladder, accessibility panel, marquee with pause.
- **Hellfest** https://hellfest.fr/en/ - World-building with physical-object UI, ticket stubs with sashes and CSR/welfare navigation; also the black-hero and locale-leak warnings.
- **Hellfest accessibility (PRM/PWD)** https://www.hellfest.fr/en/accessibility-prm-pwd - Model accessibility page: audience, services, commitments, contact.
- **Hellfest prevention (Hellcare)** https://www.hellfest.fr/en/prevention-1 - Named welfare programme to adapt.
- **Download Festival** https://downloadfestival.co.uk/ - Edition-numeral identity (XXIV), header countdown, Download Family membership, on-brand 404.
- **Humans of Download** https://downloadfestival.co.uk/news-features/humans-of-dl - People-as-content series model.
- **Wacken Open Air** https://www.wacken.com/en/ - Motto-named tiers, free patch, loyalty points, ecosystem; warning on menu overload and consent walls.
- **Copenhell** https://www.copenhell.dk/en - Battle-cry hero over crowd video, fixed date marquee, video pause control, clean program grid.
- **Sweden Rock line-up** https://www.swedenrock.com/line-up - Day and stage filters, country codes, '?' placeholder cards, alt text.
- **Graspop Metal Meeting line-up** https://www.graspop.be/en/line-up - 'First time' and 'By country' views and history links (text-only evidence).
- **Mystic Festival artists** https://www.mysticfestival.pl/en/artists - One artist-card template shared by site and Instagram; copper non-red accent.
- **Tuska** https://www.tuska.fi/en - Single non-red colour system, mono countdown, floating bottom nav on mobile.
- **Alcatraz** https://www.alcatraz.be/ - Concept world carried into the IA; subtitled video with a sound toggle.
- **Bloodstock Open Air** https://www.bloodstock.uk.com/ - Fan ecosystem (TV, band battle, winter event); cautionary clutter and non-responsive layout.
- **Roadburn** https://roadburn.com/ - Rotating commissioned artists, triptych reveals, contextual lineup filters.
- **Roadburn FAQ** https://roadburn.com/faq/ - FAQ model that welcomes solo attendees and first-timers.
- **Maryland Deathfest** https://www.deathfests.com/ - Editorial menace (condensed wordmark plus brushed year); logo wall on desktop, annotated typed list on mobile.
- **Maryland Deathfest on Instagram** https://www.instagram.com/deathfests/ - The most disciplined per-edition reveal template (crimson footer bar).
- **Graspop on Instagram** https://www.instagram.com/graspopmetalmeeting/ - Day cartouche baked into every headliner card.
- **Eindhoven Metal Meeting** https://www.eindhovenmetalmeeting.com/ - Poster-as-homepage with credited artist and a recoloured sub-event poster; cautionary image-only lineup.
- **Northwest Terror Fest** https://northwestterrorfest.com/ - Two-colour screenprint poster formula and place-plus-subgenre mark.
- **Kilkim Žaibu** https://kilkimzaibu.com/en - Premium underground system: one gold accent, B&W photos, edition sigil, 'first time' chips; lists the Indian band Godless.
- **Inferno Metal Festival** https://infernofestival.no/ - Homepage ticket rail with prices and scene-tourism add-ons; QR codes on the artwork.
- **Obscene Extreme** https://obsceneextreme.cz/en - Humour plus ethics (kids, charity, veg food) defusing an extreme name.
- **Brutal Assault news** https://brutalassault.cz/en/c/news - Capacity-percentage hype, price-step deadlines, aftermovie and full-set cadence.
- **Bangalore Open Air** https://www.bangaloreopenair.com/ - Indian benchmark: Wacken co-brand, legacy posters, teal and gold; contradictions to avoid.
- **Welcome to Rockville passes** https://welcometorockville.com/passes/ - All-in pricing cards, next price level, $1-down payment plan, add-ons.
- **Sónar tickets** https://sonar.es/en/tickets - In-page ticket selector and refundable Flex add-on.
- **ArcTanGent** https://arctangent.co.uk/ - Instalments as a second primary CTA (and a warning about intrusive interstitials).
- **Unsound** https://www.unsound.pl/en/ - Schedule-first festival-week homepage with per-event ticket buttons.
- **Clashfinder** https://clashfinder.com/ - Benchmark for what fans expect from a running-order planner.
- **Sound and Fury** https://www.soundandfury.la - Year-round 'Presents' gig calendar with On Sale / Sold Out pills; scene-voice FAQ.
- **Knotfest** https://knotfest.com - Localised key art (México) on a global brand; year-round editorial and store.
- **Google Search: Event structured data** https://developers.google.com/search/docs/appearance/structured-data/event - Event JSON-LD requirements for rich results.
- **Meta ad standards: violent and graphic content** https://transparency.meta.com/policies/ad-standards/objectionable-content/violent-graphic-content/ - Defines what BROADCAST assets must avoid.
- **Google Ads: shocking content** https://support.google.com/adspolicy/answer/6015406 - Violent language and gore rules that also apply to landing pages.
- **Kulturzentrum Schlachthof Wiesbaden** https://www.schlachthof-wiesbaden.de/ - The slaughterhouse word domesticated as a venue brand; holographic status stickers.
- **The Vegetarian Butcher** https://www.thevegetarianbutcher.co.uk/ - Butcher and slaughter vocabulary inverted into meat-free positivity (PRIME CUTS precedent).
- **Veerana (1988) poster** https://bollywoodmovieposters.com/shop/old-indian-movie-posters-for-sale/veerana-2 - Ramsay-era Indian horror-poster vernacular for HOUSEFULL HORROR.
- **Pew Research: religion and food in India** https://www.pewresearch.org/religion/2021/06/29/religion-and-food/ - Vegetarianism context for imagery decisions.
- **Blabbermouth: Behemoth cancels Bangalore show** https://blabbermouth.net/news/behemoth-cancels-concert-in-bangalore-india-following-threats-from-religious-christian-groups - Moral-panic precedent for occult imagery in India.
