/* ===========================================================================
   YOUR CONTENT LIVES HERE — this is the only file you normally need to edit.
   ---------------------------------------------------------------------------
   Rules of thumb:
     • Every `id` must be unique across the whole file (used for anchors).
     • Teams render top-to-bottom in the order listed below. Newest first is
       the usual choice; reverse the array if you prefer oldest first.
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
     Just list project ids from section 4. They get pulled to the top of the
     page automatically; the originals stay in their team sections too.     */
  favorites: {
    title: "My Personal Favorites",
    description: "A short line about why these are the ones you'd show first.",
    ids: ["fest-main-poster", "fest-aftermovie", "club-rebrand"]
  },

  /* ── 4. Teams, in timeline order ────────────────────────────────────── */
  teams: [
    {
      id: "design-club",
      name: "Campus Design Collective",
      role: "Design Lead",
      period: "2024 — Present",
      description:
        "One or two sentences on what this team does and what you were responsible for. Mention the scale if it's impressive — number of events, audience size, how long you led it.",
      links: [
        { label: "Team Instagram", url: "https://instagram.com/team", icon: "instagram" }
      ],
      projects: [
        {
          id: "club-rebrand",
          title: "Club Rebrand",
          description:
            "What the project was, the problem you were solving, and one interesting decision you made. Two sentences is plenty.",
          tags: ["Branding", "Illustrator"],
          media: [
            { type: "image", src: "assets/teams/design-club/rebrand/01.jpg", alt: "Logo lockup" },
            { type: "image", src: "assets/teams/design-club/rebrand/02.jpg", alt: "Colour system" },
            { type: "image", src: "assets/teams/design-club/rebrand/03.jpg", alt: "Applied to merch" }
          ],
          links: [
            { label: "On Instagram", url: "https://instagram.com/p/xxxx", icon: "instagram" }
          ]
        },
        {
          id: "recruitment-reel",
          title: "Recruitment Reel",
          description: "A 40-second cut used to open the recruitment drive.",
          tags: ["Video", "Premiere Pro"],
          // `wide: true` makes a card span the full row — good for landscape video.
          wide: true,
          media: [
            { type: "video", src: "assets/teams/design-club/recruitment/reel.mp4",
              poster: "assets/teams/design-club/recruitment/thumb.jpg" }
          ],
          links: [
            { label: "Watch on YouTube", url: "https://youtube.com/watch?v=xxxx", icon: "youtube" }
          ]
        }
      ]
    },

    {
      id: "annual-fest",
      name: "Annual Cultural Fest",
      role: "Creative & Media Team",
      period: "2022 — 2023",
      description:
        "Context for this team — what the event was, how big, and the role you played across the campaign.",
      links: [
        { label: "Fest Instagram", url: "https://instagram.com/fest", icon: "instagram" },
        { label: "Fest YouTube",   url: "https://youtube.com/@fest",  icon: "youtube" }
      ],
      projects: [
        {
          id: "fest-main-poster",
          title: "Main Campaign Posters",
          description:
            "The poster set that ran across campus and social. Same event, so they sit in one carousel — use the arrows or swipe.",
          tags: ["Poster", "Photoshop"],
          media: [
            { type: "image", src: "assets/teams/annual-fest/posters/01.jpg", alt: "Announcement poster" },
            { type: "image", src: "assets/teams/annual-fest/posters/02.jpg", alt: "Line-up poster" },
            { type: "image", src: "assets/teams/annual-fest/posters/03.jpg", alt: "Day-of poster" },
            { type: "image", src: "assets/teams/annual-fest/posters/04.jpg", alt: "Thank-you post" }
          ],
          links: [
            { label: "On Instagram", url: "https://instagram.com/p/xxxx", icon: "instagram" }
          ]
        },
        {
          id: "fest-aftermovie",
          title: "Fest Aftermovie",
          description: "Three-minute recap cut from two days of footage.",
          tags: ["Video", "Colour", "Premiere Pro"],
          wide: true,
          media: [
            { type: "youtube", id: "dQw4w9WgXcQ" }
          ],
          links: [
            { label: "Watch on YouTube", url: "https://youtube.com/watch?v=dQw4w9WgXcQ", icon: "youtube" }
          ]
        }
      ]
    },

    {
      id: "undergrad-magazine",
      name: "Undergrad Magazine",
      role: "Layout & Cover Design",
      period: "2020 — 2022",
      description: "Where it started. Short note on what you learned here.",
      links: [],
      projects: [
        {
          id: "mag-covers",
          title: "Issue Covers",
          description: "Four covers across two years.",
          tags: ["Editorial", "InDesign"],
          media: [
            { type: "image", src: "assets/teams/undergrad-magazine/covers/01.jpg", alt: "Issue 1" },
            { type: "image", src: "assets/teams/undergrad-magazine/covers/02.jpg", alt: "Issue 2" }
          ],
          links: []
        }
      ]
    }
  ],

  /* ── 5. Footer line ─────────────────────────────────────────────────── */
  footer: "Designed and built by Aqeel Zaman."
};
