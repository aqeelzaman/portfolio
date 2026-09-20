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
    kicker: "Graphic Design & Video Editing Portfolio",
    tagline: "Posters, motion, and campaign work for student teams and clubs.",
    // Drop a square photo at assets/profile/avatar.jpg to replace the initials.
    avatar: "assets/profile/avatar.jpg",
    initials: "AZ",
    // Each string becomes its own paragraph.
    bio: [
      "I'm a current graduate student at Northeastern University. I'm a designer and video editor with a focus on posters, motion graphics, and campaign work for Social Media. I enjoy creating visually compelling content that communicates effectively and engages audiences.",
      "I primarily work with Adobe Creative Suite, and I have experience collaborating with diverse teams on various projects. Main tools include Photoshop, Illustrator, After Effects, and Premiere Pro."
    ],
    links: [
      //{ label: "Instagram", url: "https://instagram.com/yourhandle", icon: "instagram" },
      //{ label: "YouTube",   url: "https://youtube.com/@yourhandle",  icon: "youtube" },
      { label: "LinkedIn",  url: "https://linkedin.com/in/aqeel-zaman", icon: "linkedin" },
      { label: "Email",     url: "aqeelzaman8@gmail.com", icon: "mail" }
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
    description: "Some of my work which I consider my best, across different teams and projects.",
    ids: ["travel-reel-04", "travel-reel-09", "travel-reel-12", "film-society-witcher", "film-society-induction-2021", "infotainment-mockup", "eeea-tshirt-mockup"],
  },

  /* ── 4. Teams, in your folder order 1–10 ────────────────────────────── */
  teams: [

    {
      id: "personal",
      eyebrow: "01",
      name: "My Personal Works",
      role: "Instagram Reels",
      period: "2026 -",                 // add years here, e.g. "2021 — 2022"
      description: "Reels of my personal travels and experiences. Shortform content shot and edited on phone.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "travel-reel-01",
          title: "Blue Hills",
          description: "A short hike through the Blue Hills Skyline Trail during Fall.",
          tags: ["Video", "Travel"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/01.mp4",
              poster: "assets/teams/travel-reels/01-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-02",
          title: "White Mountains",
          description: "A 2 day camping trip with the Northeastern Outdoors Club (NUHOC) in the White Mountains of New Hampshire.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/02.mp4",
              poster: "assets/teams/travel-reels/02-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-03",
          title: "Subtronics Concert",
          description: "An EDM concert experience at the MGM Music Hall featuring Subtronics and William Black.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/03.mp4",
              poster: "assets/teams/travel-reels/03-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-04",
          title: "Car Meet at BU",
          description: "A gathering of car enthusiasts at Boston University to showcase their vehicles and network with fellow automobilists.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/04.mp4",
              poster: "assets/teams/travel-reels/04-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-05",
          title: "Day trip to Portland",
          description: "Quick drive to Portland, Maine for a day trip to explore the city and its scenic waterfront.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/05.mp4",
              poster: "assets/teams/travel-reels/05-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-06",
          title: "Monster Jam",
          description: "A thrilling experience at the Monster Jam event, featuring high-octane monster truck action and jaw-dropping stunts.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/06.mp4",
              poster: "assets/teams/travel-reels/06-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-07",
          title: "SneakerCon Shoe Exhibition",
          description: "An event celebrating hip hop culture and showcasing the latest trends in sneaker fashion.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/07.mp4",
              poster: "assets/teams/travel-reels/07-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-08",
          title: "FIFA '26 Watch Party",
          description: "A watch party for the FIFA '26 World Cup match between Qatar and Switzerland, at 'Mall of Qatar'.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/08.mp4",
              poster: "assets/teams/travel-reels/08-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-09",
          title: "5k Run at Lusail F1 Circuit",
          description: "A great opportunity to run the lap of the F1 circuit in Lusail, Qatar.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/09.mp4",
              poster: "assets/teams/travel-reels/09-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-10",
          title: "Onam at San Diego",
          description: "Celebrating the traditional festival of Onam with friends at San Diego, California.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/10.mp4",
              poster: "assets/teams/travel-reels/10-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-11",
          title: "Los Angeles Trip",
          description: "Exploring the vibrant city of Los Angeles. Reminiscing my GTA V gaming days.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/11.mp4",
              poster: "assets/teams/travel-reels/11-poster.jpg" },
          ],
          links: []
        },
        {
          id: "travel-reel-12",
          title: "San Diego Exploration",
          description: "Exploring the beautiful city of San Diego, California.",
          tags: ["Video"],
          media: [
            { type: "video", src: "assets/teams/travel-reels/12.mp4",
              poster: "assets/teams/travel-reels/12-poster.jpg" },
          ],
          links: []
        },
      ]
    },

    {
      id: "oneplus",
      eyebrow: "02",
      name: "OnePlus",
      role: "Campus Ambassador Program - Head of Design",
      period: "2019 - 2021",                 // add years here, e.g. "2021 — 2022"
      description: "OnePlus Student Campus Ambassador Program at National Institute of Technology Trichy (NITT) where I did my undergrad. Poster and promo work for OnePlus community events, including the artist announcement series for the OnePlus Music Festival.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "oneplus-music-festival",
          title: "OnePlus Music Festival — Artist Announcements",
          description: "The artist announcement set for the festival line-up: Dua Lipa, Katy Perry, Amit Trivedi, Ritviz, The Local Train and AWKS. One template, six artists.",
          tags: ["Poster", "Series", "Illustrator", "Photoshop"],
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
          title: "OnePlus 7T & TV Launch Poster",
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
          title: "Christmas Greetings",
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
          description: "Promo edit for Delta Winter of Code, an over-the-winter-break coding competition, in association with Delta coding club of NITT.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/oneplus/dwoc-promo/dwocpromo.mp4",
              poster: "assets/teams/oneplus/dwoc-promo/dwocpromo-poster.jpg" }
          ],
          links: []
        },
        {
          id: "oneplus-e-poster",
          title: "Engineer's Day",
          description: "Event announcement poster.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/e-poster/eposter.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-poster",
          title: "Campaign Poster",
          description: "Introducing Humans of NITT campaign, where we highlight the stories of our incredible community members.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/oneplus/poster/poster.jpg", alt: "" }
          ],
          links: []
        },
        {
          id: "oneplus-gigz-tripz",
          title: "GigaHertz Promo",
          description: "Promo edit for GigaHertz Battle of Bands event in association with Festember, annual cultural festival of NITT.",
          tags: ["Video", "Social"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/oneplus/gigz-tripz/gigztripz.mp4",
              poster: "assets/teams/oneplus/gigz-tripz/gigztripz-poster.jpg" }
          ],
          links: []
        },
        {
          id: "oneplus-gj-poster",
          title: "Gandhi Jayanti Poster",
          description: "Social awareness poster for the event of Gandhi Jayanti.",
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
      ]
    },

    {
      id: "film-society",
      eyebrow: "03",
      name: "Film Society",
      role: "Design & Editing",
      period: "2018 - 2022",                 // add years here, e.g. "2021 — 2022"
      description: "Posters, title studies and event promos for the Film Society of NITT — screenings, inductions and the society's recurring film columns.",
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
          description: "Convocation film for the graduating batch of 2019.",
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
          description: "Promo cut announcing a screening of 'Once Upon a Time in Hollywood'.",
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
          description: "Film poster study for the highly anticipated but cancelled movie by Quentin Tarantino.",
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
          description: "Feature artwork.",
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
      period: "2021 -",                 // add years here, e.g. "2021 — 2022"
      description: "My first try in motion graphics and animated shorts. I experimented with morphing shapes and abstract forms to create a visually engaging piece. Have only used my animation works in few editing projects but revisits as a hobby.",
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
      role: "Deputy Manager at Infotainment Team",
      period: "2019 — 2022",                 // add years here, e.g. "2021 — 2022"
      description: "Artist announcements, event promos and campaign graphics for the Infotainment team at Pragyan, the annual techno-managerial festival of NITT.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "infotainment-artist-announcements",
          title: "Artist Announcements",
          description: "Eighteen announcement cards covering the full line-up across multiple editions — music, comedy, fire and light acts. Built on one system so the set reads together.",
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
          id: "infotainment-gamezone",
          title: "Gamezone",
          description: "Gaming and arcade arena built by the Infotainment team for the festival. Poster graphics for the event.",
          tags: ["Poster", "Video", "Campaign"],
          media: [
            { type: "image", src: "assets/teams/infotainment/gamezone/gz1.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamezone/gz2.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamezone/gz3.png", alt: "" },
            { type: "image", src: "assets/teams/infotainment/gamezone/gz4.png", alt: "" },
          ],
          links: []
        },
        {
          id: "infotainment-gamescape",
          title: "Gamescape",
          description: "Gamezone plus Gaming Technical Exhibition announcement promo video.",
          tags: ["Poster", "Video", "Campaign"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/infotainment/gamescape/gamescape2.mp4",
              poster: "assets/teams/infotainment/gamescape/gamescape2-poster.jpg" }
          ],
          links: []
        },
        {
          id: "infotainment-pete-michels",
          title: "Pete Michels",
          description: "Announcing the Live Session with the Animation Director of The Simpsons, Family Guy and Rick & Morty for the festival.",
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
          title: "Wahid Ibn Reza",
          description: "Announcing the Live Session with the Production Manager at the Marvel Cinematic Universe.",
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
          description: "Infotainment event answering bizzare questions with scientific reasoning mixed in with fascinating performances on strange musical intruments. This is one of the projects which used some of my animation works.",
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
          title: "T-shirt Mockup",
          description: "T-shirt design mockup for the Infotainment team.",
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
      role: "Poster Designer",
      period: "2019",                 // add years here, e.g. "2021 — 2022"
      description: "A Days-To-Go countdown poster series for the NITT Kerala Association's events and celebrations.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "kerala-association-poster-1",
          title: "Poster 1",
          description: "#Maveli is a mythological figure whose return is celebrated during festival of Onam.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster1.jpg", alt: "" },
          ],
          links: []
        },
        {
          id: "kerala-association-poster-2",
          title: "Poster 2",
          description: "#Vadamvali is a traditional tug-of-war game played during the festival of Onam.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster2.jpg", alt: "" },
          ],
          links: []
        },
        {
          id: "kerala-association-poster-3",
          title: "Poster 3",
          description: "#Saree and #Mundu are traditional attire worn during the festival of Onam.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster3.jpg", alt: "" },
          ],
          links: []
        },
        {
          id: "kerala-association-poster-4",
          title: "Poster 4",
          description: "#Swing or #Oonjal is a traditional swing used during the festival of Onam.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster4.jpg", alt: "" },
          ],
          links: []
        },
        {
          id: "kerala-association-poster-5",
          title: "Poster 5",
          description: "#Pookalam is a traditional floral arrangement used during the festival of Onam.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster5.jpg", alt: "" },
          ],
          links: []
        },
        {
          id: "kerala-association-poster-6",
          title: "Poster 6",
          description: "Final day announcement for the on campus event of Onam celebrations by the Kerala Association at NITT.",
          tags: ["Poster", "Series"],
          media: [
            { type: "image", src: "assets/teams/kerala-association/poster-series/poster6.jpg", alt: "" },
          ],
          links: []
        },
      ]
    },

    {
      id: "eeea",
      eyebrow: "07",
      name: "EEE Association",
      role: "Head of Design & Editing",
      period: "2019-2022",                 // add years here, e.g. "2021 — 2022"
      description: "Branding, posters and promo videos for the Electrical and Electronics Engineering Association, including the Currents Symposium of the Department and Enigma campaigns.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "eeea-currents",
          title: "Currents Banners",
          description: "The Currents Symposium — The social banner set for Facebook and LinkedIn.",
          tags: ["Campaign", "Video", "Social"],
          media: [
            { type: "image", src: "assets/teams/eeea/currents/facebook-currents.png", alt: "" },
            { type: "image", src: "assets/teams/eeea/currents/linkedin-currents.png", alt: "" },
            { type: "image", src: "assets/teams/eeea/currents/linkedin-eeea.png", alt: "" }
          ],
          links: []
        },
        {
          id: "eeea-currents-video",
          title: "Currents Videos",
          description: "The Currents Symposium — reveal film, cut-down, and social edit for the event.",
          tags: ["Campaign", "Video", "Social"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/eeea/currents/currentsreveal.mp4",
              poster: "assets/teams/eeea/currents/currentsreveal-poster.jpg" },
            { type: "video", src: "assets/teams/eeea/currents/eeea-22-with-text.mp4",
              poster: "assets/teams/eeea/currents/eeea-22-with-text-poster.jpg" },
          ],
          links: []
        },
        {
          id: "eeea-enigma",
          title: "Enigma 2.0",
          description: "Identity and poster artwork for Enigma 2.0.",
          tags: ["Poster", "Branding"],
          media: [
            { type: "image", src: "assets/teams/eeea/enigma/enigma2.jpg", alt: "" },
            { type: "image", src: "assets/teams/eeea/enigma/enigma-2-0.png", alt: "" },
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
          title: "Energy Conservation Day Poster",
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
      role: "Head of Culturals",
      period: "2019-2022",                 // add years here, e.g. "2021 — 2022"
      description: "Festember is the annual cultural festival of NITT. The Culturals Team brought in celebrity artists and performers for the event and arrange the GigaHertz Battle of Bands.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "festember-culturals-team-poster",
          title: "Team Poster",
          description: "Team artwork of a poster of all members of the team when I was inducted.",
          tags: ["Poster"],
          media: [
            { type: "image", src: "assets/teams/festember-culturals/team-poster/team.png", alt: "" }
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
          id: "festember-culturals-fmt-induction-2020",
          title: "Marketing Team Induction Promo 2020",
          description: "Recruitment promo for the Festember Marketing Team. My volunteered project to help the team with their recruitment drive.",
          tags: ["Video"],
          wide: true,
          media: [
            { type: "video", src: "assets/teams/festember-culturals/fmt-induction-2020/fmtinduction2020comp2.mp4",
              poster: "assets/teams/festember-culturals/fmt-induction-2020/fmtinduction2020comp2-poster.jpg" }
          ],
          links: []
        },
      ]
    },

    {
      id: "aaveg",
      eyebrow: "09",
      name: "Aaveg",
      role: "Video Editing",
      period: "2018-2019",                 // add years here, e.g. "2021 — 2022"
      description: "Days-To-Go Event edits for Aaveg, the First Year Inter Hostel Competition of NITT.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "aaveg-dtg-final",
          title: "Believe",
          description: "Final Days-To-Go hype video for the event, with a focus on the theme of belief and perseverance.",
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
          description: "19 Days-To-Go hype video",
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
          title: "Teaser",
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
      role: "Freelance Designer & Editor",
      period: "",                 // add years here, e.g. "2021 — 2022"
      description: "Pro-bono posters, promos and merchandise design for outside clients.",
      links: [],                  // e.g. { label:"Instagram", url:"…", icon:"instagram" }
      projects: [
        {
          id: "freelancing-algos-promo",
          title: "Algos Promo",
          description: "Promo edit for Algos event by Spider, a coding club of NITT.",
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
          title: "CFGL Pragyan Tee",
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
