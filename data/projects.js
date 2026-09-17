/* ===========================================================================
   YOUR CONTENT LIVES HERE — this is the only file you normally need to edit.
   ---------------------------------------------------------------------------
   Generated from "My Project Files" on 2026-09-17, in your folder order 1-10.

   TITLES AND DESCRIPTIONS ARE DRAFTS. They were inferred from file and folder
   names, so several are guesses — rewrite anything that reads wrong. The paths
   and groupings underneath them are correct and do not need touching.

   Rules of thumb:
     • Every `id` must be unique across the whole file (used for anchors).
     • Teams render top-to-bottom in the order listed below.
     • Delete any optional field you don't need — nothing breaks.
     • After editing, just refresh the browser. There is no build step.

   MEDIA TYPES you can put in a project's `media` array:

     { type:"image", src:"assets/teams/x/y/poster.jpg", alt:"..." }
     { type:"video", src:"assets/teams/x/y/reel.mp4",
       poster:"assets/teams/x/y/thumb.jpg" }          // self-hosted, <100 MB
     { type:"youtube", id:"dQw4w9WgXcQ" }             // the ?v= part of the URL
     { type:"vimeo",   id:"76979871" }

   LINK ICONS you can use: instagram · youtube · linkedin · behance ·
                           dribbble · mail · link (default)
   =========================================================================== */

window.PORTFOLIO = {

  /* ── 1. Who you are ─────────────────────────────────────────────────── */
  profile: {
    name: "Aqeel Zaman",
    kicker: "Graphic Design & Video Editing",
    tagline: "Posters, motion, and campaign work for student teams and clubs.",
    // Drop a square photo at assets/profile/avatar.jpg to replace the initials.
    avatar: "assets/profile/avatar.jpg",
    initials: "AZ",
    // Each string becomes its own paragraph.
    bio: [
      "Write two or three sentences here about who you are and how you got into design. Mention what you like making — posters, title sequences, event reels — and what you care about in the work.",
      "A second short paragraph is a good place for the practical stuff: the tools you use, the kinds of teams you've worked with, and what you're looking for next."
    ],
    links: [
      { label: "Instagram", url: "https://instagram.com/yourhandle", icon: "instagram" },
      { label: "YouTube",   url: "https://youtube.com/@yourhandle",  icon: "youtube" },
      { label: "LinkedIn",  url: "https://linkedin.com/in/yourhandle", icon: "linkedin" },
      { label: "Email",     url: "mailto:you@example.com",           icon: "mail" }
    ]
  },

  /* ── 2. Background image (optional) ─────────────────────────────────────
     Leave this exactly as-is and just drop a file into assets/background/:
        background-dark.jpg   (shown in dark mode)
        background-light.jpg  (shown in light mode)
     .png / .jpeg / .webp work too — the site tries each extension.
     If no file is there, the site quietly uses its normal gradient.        */
  background: {
    dark:  "assets/background/background-dark",
    light: "assets/background/background-light",
    blur: 0,        // px of blur over the image; try 3–8 for busy photos
    enabled: true
  },

  /* ── 3. Favorites — pick your best work ─────────────────────────────────
     List project ids from section 4 below. They get pulled to the top of the
     page; the originals stay in their own sections too. Swap these freely —
     any id from section 4 works.                                           */
  favorites: {
    title: "My Personal Favorites",
    description: "A short line about why these are the ones you'd show first.",
    ids: ["oneplus-music-festival", "aaveg-dtg-final", "infotainment-artist-announcements"]
  },

  /* ── 4. Teams, in your folder order 1–10 ────────────────────────────── */
  teams: [

    {
      id: "my-travels",
      eyebrow: "01",
      name: "My Travels",
      role: "Travel Reels",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Vertical travel edits cut for social — pacing, music sync and colour on phone-shot footage.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "my-travels-travel-reels",
          title: "Travel Reels",
          description: "Thirteen vertical edits from trips, cut for Instagram. Swipe through the set.",
          tags: ["Video", "Vertical", "Travel"],
          media: [
            { type: "video", src: "assets/teams/my-travels/travel-reels/01.mp4",
              poster: "assets/teams/my-travels/travel-reels/01-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/02.mp4",
              poster: "assets/teams/my-travels/travel-reels/02-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/03.mp4",
              poster: "assets/teams/my-travels/travel-reels/03-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/04.mp4",
              poster: "assets/teams/my-travels/travel-reels/04-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/05.mp4",
              poster: "assets/teams/my-travels/travel-reels/05-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/06.mp4",
              poster: "assets/teams/my-travels/travel-reels/06-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/07.mp4",
              poster: "assets/teams/my-travels/travel-reels/07-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/08.mp4",
              poster: "assets/teams/my-travels/travel-reels/08-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/09.mp4",
              poster: "assets/teams/my-travels/travel-reels/09-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/10.mp4",
              poster: "assets/teams/my-travels/travel-reels/10-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/11.mp4",
              poster: "assets/teams/my-travels/travel-reels/11-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/12.mp4",
              poster: "assets/teams/my-travels/travel-reels/12-poster.jpg" },
            { type: "video", src: "assets/teams/my-travels/travel-reels/13.mp4",
              poster: "assets/teams/my-travels/travel-reels/13-poster.jpg" }
          ],
          links: []
        }
      ]
    },

    {
      id: "oneplus",
      eyebrow: "02",
      name: "OnePlus",
      role: "Community Design",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Poster and promo work for OnePlus community events, including the artist announcement series for the OnePlus Music Festival.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "oneplus-music-festival",
          title: "OnePlus Music Festival — Artist Announcements",
          description: "The artist announcement set for the festival line-up: Dua Lipa, Katy Perry, Amit Trivedi, Ritviz, The Local Train and AWKS. One template, six artists.",
          tags: ["Poster", "Series", "Photoshop"],
          media: [
            { type: "image", src: "assets/teams/oneplus/music-festival/awks.jpg", alt: "" },
            { type: "image", src: "assets/teams/oneplus/music-festival/amittrivedi.jpg", alt: "" },
            { type: "image", src: "assets/teams/oneplus/music-festival/dualipa.jpg", alt: "" },
            { type: "image", src: "assets/teams/oneplus/music-festival/katyperry.jpg", alt: "" },
            { type: "image", src: "assets/teams/oneplus/music-festival/ritviz.jpg", alt: "" },
            { type: "image", src: "assets/teams/oneplus/music-festival/thelocaltrain.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-launch-poster",
          title: "Launch Poster",
          description: "Launch announcement poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/launch-poster/launchposter.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-cover-art-challenge",
          title: "Cover Art Challenge",
          description: "Entry artwork for the community cover art challenge.",
          tags: ["Cover Art"],
          media: [
            { type: "image", src: "assets/teams/oneplus/cover-art-challenge/coverartchallenge.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-christmas-gif",
          title: "Christmas Animation",
          description: "Animated seasonal greeting for the community.",
          tags: ["Animation", "GIF"],
          media: [
            { type: "image", src: "assets/teams/oneplus/christmas-gif/christmasgif.gif", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-dwoc-promo",
          title: "DWoC Promo",
          description: "Promo edit for DWoC.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/oneplus/dwoc-promo/dwocpromo.mp4",
              poster: "assets/teams/oneplus/dwoc-promo/dwocpromo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "oneplus-gigz-tripz",
          title: "Gigz & Tripz",
          description: "Square promo edit.",
          tags: ["Video", "Social"],
          media: [
            { type: "video", src: "assets/teams/oneplus/gigz-tripz/gigztripz.mp4",
              poster: "assets/teams/oneplus/gigz-tripz/gigztripz-poster.jpg" }
          ],
          links: []
        },
        {
          id: "oneplus-e-poster",
          title: "Event Poster",
          description: "Event announcement poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/e-poster/eposter.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-gj-poster",
          title: "GJ Poster",
          description: "Campaign poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/gj-poster/gjposter.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-meet",
          title: "Community Meet",
          description: "Poster for a community meet-up.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/meet/meet.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-poster",
          title: "Campaign Poster",
          description: "Campaign poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/poster/poster.jpg", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "film-society",
      eyebrow: "03",
      name: "Film Society",
      role: "Design & Editing",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Posters, title studies and event promos for the college Film Society — screenings, inductions and the society's recurring film columns.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "film-society-witcher",
          title: "The Witcher",
          description: "A three-part poster study for the society's film column.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/film-society/witcher/at-witcher.jpg", alt: "" },
            { type: "image", src: "assets/teams/film-society/witcher/at-witcher1.jpg", alt: "" },
            { type: "image", src: "assets/teams/film-society/witcher/at-witcher2.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-marriage-story",
          title: "Marriage Story",
          description: "A two-part poster study.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/film-society/marriage-story/at-marriagestory.jpg", alt: "" },
            { type: "image", src: "assets/teams/film-society/marriage-story/at-marriagestory1.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-being-cyrus",
          title: "Being Cyrus",
          description: "A three-part poster study.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/film-society/being-cyrus/utr-beingcyrus.jpg", alt: "" },
            { type: "image", src: "assets/teams/film-society/being-cyrus/utr-beingcyrus1.jpg", alt: "" },
            { type: "image", src: "assets/teams/film-society/being-cyrus/utr-beingcyrus2.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-convocation-19",
          title: "Convocation 2019",
          description: "Convocation film for the graduating batch.",
          tags: ["Video", "Event"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/film-society/convocation-19/convo19.mp4",
              poster: "assets/teams/film-society/convocation-19/convo19-poster.jpg" }
          ],
          links: []
        },
        {
          id: "film-society-movie-screening",
          title: "Movie Screening Promo",
          description: "Promo cut announcing a screening.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/film-society/movie-screening/moviescreeningpromo.mp4",
              poster: "assets/teams/film-society/movie-screening/moviescreeningpromo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "film-society-induction-promo",
          title: "Induction Promo 2020",
          description: "Recruitment promo for the society's 2020 induction.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/film-society/induction-promo/fsinductionpromo2020rep2.mp4",
              poster: "assets/teams/film-society/induction-promo/fsinductionpromo2020rep2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "film-society-induction-2020",
          title: "Induction Poster",
          description: "Recruitment poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/film-society/induction-2020/induction.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-induction-2021",
          title: "Induction Poster 2021",
          description: "Recruitment poster for the 2021 intake.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/film-society/induction-2021/induction21.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-kill-bill",
          title: "Kill Bill",
          description: "Film poster study.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/film-society/kill-bill/killbill.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-alumni-pick",
          title: "Alumni Pick",
          description: "Artwork for the society's alumni recommendation series.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/film-society/alumni-pick/alumnipickkou.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "film-society-womens-day",
          title: "Women's Day",
          description: "Women's Day feature artwork.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/film-society/womens-day/womensday.jpg", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "animation",
      eyebrow: "04",
      name: "Animation",
      role: "Motion Design",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Motion graphics and animated shorts.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "animation-shape-shift",
          title: "Shape Shift",
          description: "A short motion-graphics piece built on morphing geometry.",
          tags: ["Motion", "Animation", "After Effects"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/animation/shape-shift/shapeshift.mp4",
              poster: "assets/teams/animation/shape-shift/shapeshift-poster.jpg" }
          ],
          links: []
        }
      ]
    },

    {
      id: "infotainment",
      eyebrow: "05",
      name: "Infotainment",
      role: "Design & Editing",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Artist announcements, event promos and campaign graphics for the Infotainment team.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "infotainment-artist-announcements",
          title: "Artist Announcements",
          description: "Eighteen announcement cards covering the full line-up — music, comedy, fire and light acts. Built on one system so the set reads together.",
          tags: ["Poster", "Series", "Photoshop"],
          media: [
            { type: "image", src: "assets/teams/infotainment/artist-announcements/anne.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/antaagnifire.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/antaagnilight.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/arjun.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/azeem.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/biswa.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/chris.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/heimdall.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/lasershow.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/maxwell.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/parchai.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/ramod.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/shao.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/shawn.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/shivraj.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/sonic.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/suhani.jpg", alt: "" },
            { type: "image", src: "assets/teams/infotainment/artist-announcements/yanika.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "infotainment-gamescape",
          title: "Gamescape",
          description: "Campaign artwork and promo edit for the Gamescape event.",
          tags: ["Poster", "Video", "Campaign"],
          media: [
            { type: "image", src: "assets/teams/infotainment/gamescape/gz1.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamescape/gz2.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamescape/gz3.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamescape/gz4.png", alt: "" },
            { type: "video", src: "assets/teams/infotainment/gamescape/gamescape2.mp4",
              poster: "assets/teams/infotainment/gamescape/gamescape2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "infotainment-pete-michels",
          title: "Pete Michels Promo",
          description: "Promo edit announcing a guest session.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/infotainment/pete-michels/petemichelspromonitt.mp4",
              poster: "assets/teams/infotainment/pete-michels/petemichelspromonitt-poster.jpg" }
          ],
          links: []
        },
        {
          id: "infotainment-wahid-trailer",
          title: "Wahid — Trailer",
          description: "Trailer cut.",
          tags: ["Video", "Trailer"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/infotainment/wahid-trailer/wahidtrailer.mp4",
              poster: "assets/teams/infotainment/wahid-trailer/wahidtrailer-poster.jpg" }
          ],
          links: []
        },
        {
          id: "infotainment-what-if",
          title: "What If",
          description: "Short-form edit.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/infotainment/what-if/whatif.mp4",
              poster: "assets/teams/infotainment/what-if/whatif-poster.jpg" }
          ],
          links: []
        },
        {
          id: "infotainment-mockup",
          title: "Mockup",
          description: "Design mockup.",
          tags: ["Design"],
          media: [
            { type: "image", src: "assets/teams/infotainment/mockup/mockup.png", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "kerala-association",
      eyebrow: "06",
      name: "Kerala Association",
      role: "Poster Design",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "A poster series for the Kerala Association's events and celebrations.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "kerala-association-poster-series",
          title: "Poster Series",
          description: "A six-poster run for the association's events, sharing one visual language.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster1.jpg", alt: "" },
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster2.jpg", alt: "" },
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster3.jpg", alt: "" },
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster4.jpg", alt: "" },
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster5.jpg", alt: "" },
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster6.jpg", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "eeea",
      eyebrow: "07",
      name: "EEEA",
      role: "Design & Editing",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Branding, posters and promo videos for the Electrical and Electronics Engineering Association, including the Currents and Enigma campaigns.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "eeea-currents",
          title: "Currents",
          description: "The Currents campaign — reveal film, cut-down, and the social set for Facebook and LinkedIn.",
          tags: ["Campaign", "Video", "Social"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/eeea/currents/currentsreveal.mp4",
              poster: "assets/teams/eeea/currents/currentsreveal-poster.jpg" },
            { type: "video", src: "assets/teams/eeea/currents/eeea-22-with-text.mp4",
              poster: "assets/teams/eeea/currents/eeea-22-with-text-poster.jpg" },
            { type: "image", src: "assets/teams/eeea/currents/facebook-currents.png", alt: "" },
            { type: "image", src: "assets/teams/eeea/currents/linkedin-currents.png", alt: "" },
            { type: "image", src: "assets/teams/eeea/currents/linkedin-eeea.png", alt: "" }
          ],
          links: []
        },
        {
          id: "eeea-enigma",
          title: "Enigma 2.0",
          description: "Identity and poster artwork for Enigma 2.0.",
          tags: ["Poster", "Branding"],
          media: [
            { type: "image", src: "assets/teams/eeea/enigma/enigma-2-0.png", alt: "" },
            { type: "image", src: "assets/teams/eeea/enigma/enigma2.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "eeea-induction-promo",
          title: "Induction Promo",
          description: "Recruitment promo for the association.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/eeea/induction-promo/eeeainductionpromo.mp4",
              poster: "assets/teams/eeea/induction-promo/eeeainductionpromo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "eeea-eeea-week",
          title: "EEEA Week",
          description: "Promo edit for the association's flagship week.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/eeea/eeea-week/eeeaw-2.mp4",
              poster: "assets/teams/eeea/eeea-week/eeeaw-2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "eeea-tshirt-mockup",
          title: "T-shirt Design",
          description: "Merchandise design, shown on mockup.",
          tags: ["Merch", "Design"],
          media: [
            { type: "image", src: "assets/teams/eeea/tshirt-mockup/tshirtmock3.png", alt: "" }
          ],
          links: []
        },
        {
          id: "eeea-econ-poster",
          title: "Econ Poster",
          description: "Event poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/eeea/econ-poster/econposter.jpg", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "festember-culturals",
      eyebrow: "08",
      name: "Festember Culturals",
      role: "Design & Editing",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Induction promos and team graphics for Festember's culturals wing.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "festember-culturals-fmt-induction-2020",
          title: "FMT Induction Promo 2020",
          description: "Recruitment promo for the Festember culturals team.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/festember-culturals/fmt-induction-2020/fmtinduction2020comp2.mp4",
              poster: "assets/teams/festember-culturals/fmt-induction-2020/fmtinduction2020comp2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "festember-culturals-induction-2021",
          title: "Induction Promo 2021",
          description: "Recruitment promo for the 2021 intake.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/festember-culturals/induction-2021/festember-21-induction-promo.mp4",
              poster: "assets/teams/festember-culturals/induction-2021/festember-21-induction-promo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "festember-culturals-team-poster",
          title: "Team Poster",
          description: "Team announcement artwork.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/festember-culturals/team-poster/team.png", alt: "" }
          ],
          links: []
        }
      ]
    },

    {
      id: "aaveg",
      eyebrow: "09",
      name: "Aaveg",
      role: "Video Editing",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Dance films and event edits for Aaveg — the longest-form video work here.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "aaveg-dtg-final",
          title: "DTG — Final Cut",
          description: "The finished Down The Grind film.",
          tags: ["Video", "Dance", "Premiere Pro"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/aaveg/dtg-final/dtgfinalcomp.mp4",
              poster: "assets/teams/aaveg/dtg-final/dtgfinalcomp-poster.jpg" }
          ],
          links: []
        },
        {
          id: "aaveg-dtg-2019",
          title: "DTG 2019",
          description: "The 2019 edition.",
          tags: ["Video", "Dance"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/aaveg/dtg-2019/19dtgfinal2.mp4",
              poster: "assets/teams/aaveg/dtg-2019/19dtgfinal2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "aaveg-dtg-teaser",
          title: "DTG Teaser",
          description: "Short teaser cut.",
          tags: ["Video", "Teaser"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/aaveg/dtg-teaser/6dtg.mp4",
              poster: "assets/teams/aaveg/dtg-teaser/6dtg-poster.jpg" }
          ],
          links: []
        }
      ]
    },

    {
      id: "freelancing",
      eyebrow: "10",
      name: "Freelancing",
      role: "Client Work",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Commissioned posters, promos and merchandise design for outside clients.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "freelancing-algos-promo",
          title: "Algos Promo",
          description: "Promo edit for a client event.",
          tags: ["Video", "Client"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/freelancing/algos-promo/algospromo.mp4",
              poster: "assets/teams/freelancing/algos-promo/algospromo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "freelancing-coffee-reads",
          title: "Coffee Reads",
          description: "Pre-project concept edit for Coffee Reads.",
          tags: ["Video", "Client"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/freelancing/coffee-reads/coffeereadspreproject.mp4",
              poster: "assets/teams/freelancing/coffee-reads/coffeereadspreproject-poster.jpg" }
          ],
          links: []
        },
        {
          id: "freelancing-webinar-poster",
          title: "Webinar Poster",
          description: "Poster for a client webinar.",
          tags: ["Poster", "Client"],
          media: [
            { type: "image", src: "assets/teams/freelancing/webinar-poster/webinarposter1.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "freelancing-athletics-poster",
          title: "Athletics Poster",
          description: "Event poster for an athletics meet.",
          tags: ["Poster", "Client"],
          media: [
            { type: "image", src: "assets/teams/freelancing/athletics-poster/athleticsposter.png", alt: "" }
          ],
          links: []
        },
        {
          id: "freelancing-cfgl-tee",
          title: "CFGL Tee",
          description: "T-shirt design for a client.",
          tags: ["Merch", "Client"],
          media: [
            { type: "image", src: "assets/teams/freelancing/cfgl-tee/cfgltee.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "freelancing-lizan-poster",
          title: "Lizan Poster",
          description: "Poster commission.",
          tags: ["Poster", "Client"],
          media: [
            { type: "image", src: "assets/teams/freelancing/lizan-poster/lizanposter-2.jpg", alt: "" }
          ],
          links: []
        }
      ]
    },
  ],

  /* ── 5. Footer line ─────────────────────────────────────────────────── */
  footer: "Designed and built by Aqeel Zaman."
};
