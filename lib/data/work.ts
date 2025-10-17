import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    slug: "lilyloop",
    title: "LilyLoop",
    date: "2023–present",
    cover: "/projects/placeholder-lilyloop.jpg",
    description:
      "Co-founding LilyLoop to bring quantified care to cycle health. We're integrating biodegradable moisture sensors into smart menstrual products to measure flow precisely—turning an untracked experience into actionable data. Y-Prize Finale Winner ($10k) and Venture Lab Startup Challenge Finalist (top 8; Ashton & Blank Awards $25k).",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "What started as a late-night conversation about why we still *estimate* menstrual flow became LilyLoop. I draw on my research in IoT for precision agriculture—designing experiments to print biodegradable moisture sensors on cellulose nanofibers—and translate that rigor to women's health. Our goal: instant hormone and flow insights that help people understand stress, energy, and cycle health in real time.",
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/placeholder-lilyloop.jpg",
        alt: "Early LilyLoop prototype sketch",
        size: "full",
        aspectRatio: "wide",
        caption: "Prototyping loops: materials, signal, and product experience."
      },
      {
        type: "text",
        content:
          "Winning the Y-Prize gave us our first real validation; the Startup Challenge put us in rooms with operators who pressed us on manufacturability, cleaning up our experiments and our roadmap. I'm proud of how we grew the idea without losing empathy for the user."
      }
    ]
  },
  {
    slug: "box-of-balloons-platform",
    title: "Box of Balloons — Chapter Platform",
    date: "2024–2025",
    cover: "/projects/placeholder-bob.jpg",
    description:
      "Led product + tech for a MERN web platform used by 50+ chapter leads to intake requests, manage capacity, and power national reporting for a nonprofit delivering birthday boxes to kids in foster care and homelessness.",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "As PM/tech lead at Hack4Impact, I scoped pain points with chapter leaders drowning in Google Forms, then rallied a 15-person team to ship a centralized, permissioned system. Agencies submit secure requests; chapters toggle intake on/off; national staff see a consolidated dashboard and live stats embedded on their public Wix site."
      },
      {
        type: "image",
        src: "/projects/placeholder-bob.jpg",
        alt: "Chapter dashboard mock",
        size: "lg",
        aspectRatio: "video",
        caption: "Capacity toggles, delivery confirmations, and exportable reports."
      },
      {
        type: "text",
        content:
          "My favorite part was translating field constraints into crisp user stories and an MVP we could actually deliver on a semester timeline—shipping something that saved volunteers time and gave the org real visibility."
      }
    ]
  },
  {
    slug: "fiona-chatbot",
    title: "FIONA — Foodbank Chatbot",
    date: "2020–2022",
    cover: "/projects/placeholder-fiona.jpg",
    description:
      "I led a team of five to build FIONA (Foodbank Inquiry OperatioN Assistant) on Google Cloud—handling 100+ inquiries/day so staff could focus on getting food to families. 1st place at Google Pitch Night; finalist for Google Pitch Day.",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "We partnered closely with the Ecumenical Hunger Program—weekly syncs to map their workflow and prioritize intents from \"What are your hours?\" to \"How can I donate?\" Launching before the holidays helped free phone lines—one tiny assist that scaled into hundreds of conversations a day."
      },
      {
        type: "quote",
        content:
          "We turned an idea into an impact—one turkey at a time.",
        author: "from my reflection"
      }
    ]
  },
  {
    slug: "estimate",
    title: "EstiMate — Social Betting, Reimagined",
    date: "2024",
    cover: "/projects/placeholder-estimate.jpg",
    description:
      "iOS app that turns casual bets into secure, transparent memories—Caldera chain, Solidity contracts, Convex DB, and Apple Sign-In. Won three prizes at TreeHacks 2024.",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "We started from a simple pain: friendly wagers vanish. I led design and backend/database, wiring SwiftUI to a Bun/Express API, Convex for data + key storage, and on-chain holds via Ethers. AirDrop or link to invite, pick sides, pick stakes, and let the contract keep everyone honest."
      },
      {
        type: "text",
        content:
          "The hardest part was orchestrating iOS, backend, and chain cleanly. The most valuable part was talking to students and shaping the product around how bets *actually* happen in groups."
      },
      {
        type: "image",
        src: "/projects/placeholder-estimate.jpg",
        alt: "EstiMate flows",
        size: "lg",
        aspectRatio: "video",
        caption: "From dashboard to dispute-free settlement."
      }
    ]
  },
  {
    slug: "forget-me-not",
    title: "Forget Me Not — Social Garden",
    date: "2022",
    cover: "/projects/placeholder-forgetmenot.jpg",
    description:
      "An IoT plant pot + app that lets you nurture relationships at a distance—remotely caring for a loved one's plant as a physical reminder of connection. Built during Penn's M&TSI.",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "We asked a universal question: how do we show we're thinking of each other between sporadic texts? Our blue-flower demo made parents smile—and admit their kids didn't call nearly enough. Lectures on IDEO's culture nudged us to make brainstorming playful and prolific; the Lauder lounge windows vanished under Post-its."
      },
      {
        type: "image",
        src: "/projects/placeholder-forgetmenot.jpg",
        alt: "Smart pot prototype",
        size: "lg",
        aspectRatio: "video",
        caption: "Feather Huzzah, sensors, and a companion app—seed to sprout."
      }
    ]
  },
  {
    slug: "conceptual-art-vscoop",
    title: "Conceptual Art → V.Scoop",
    date: "2023",
    cover: "/projects/placeholder-vscoop.jpg",
    description:
      "From casting an analog clock inside a 30-lb concrete block to building V.Scoop, a virtual art museum where people process current events through shared artwork.",
    tags: ["build"],
    content: [
      {
        type: "text",
        content:
          "Conceptual art gave me a way to think through hard topics—turning skewers, pins, and glue into ideas. V.Scoop extends that impulse to a community space: rooms themed on events like COVID-19 or Ukraine where users share, view, and discuss work. It's about dialogue as much as display."
      }
    ]
  },
  {
    slug: "cookies4agoodcause",
    title: "Cookies4aGoodCause",
    date: "2020–2021",
    cover: "/projects/placeholder-cookies.jpg",
    description:
      "A nonprofit bakery I started in lockdown to spread warmth—literally and figuratively. I handcrafted pastries, delivered smiles, and donated proceeds to UNICEF.",
    tags: ["misc"],
    content: [
      {
        type: "text",
        content:
          "This project taught me how small, beautiful things can still move a community. I obsessed over recipes—from s'mores cookies to matcha-rose pastries—and my apple-pie cookie with a hand-latticed crust became a crowd favorite. Beyond fundraising, every delivery felt like a tiny act of care."
      },
      {
        type: "quote",
        content:
          "Beyond the effort put into baking the cookie, my customer saw the effort put into them.",
        author: "from my essay"
      },
      {
        type: "text",
        content:
          "That same instinct—to brighten and beautify—shows up in my tech work too: craft matters when the goal is human."
      }
    ]
  },
  {
    slug: "public-art-club-murals",
    title: "Public Art Club — Campus Murals",
    date: "2022",
    cover: "/projects/placeholder-murals.jpg",
    description:
      "Revived a pandemic-era club with a 100-ft mural project that brought color—and a sense of normal—back to campus.",
    tags: ["2d art"],
    content: [
      {
        type: "text",
        content:
          "We went from at-home crafts to painting together at lunch—music, laughter, paint everywhere. Seeing classmates stop to take selfies in front of our work made me realize how much beauty can reset the mood of a place."
      },
      {
        type: "image",
        src: "/projects/placeholder-murals.jpg",
        alt: "Bulletin board murals",
        size: "lg",
        aspectRatio: "wide",
        caption: "Hills, waterfalls, clouds—pinned up with sore thumbs and big grins."
      }
    ]
  },
  {
    slug: "chinese-dance",
    title: "Chinese Dance",
    date: "Ongoing",
    cover: "/projects/placeholder-dance.jpg",
    description:
      "Story-first movement has been my constant—an art I once hid, now celebrate. From Tang-dynasty tales to bamboo-in-the-wind pieces, I learned to speak with eyes, breath, and detail.",
    tags: ["misc"],
    content: [
      {
        type: "text",
        content:
          "I chased every genre—ballet, tap, jazz, hip-hop—before realizing the style I grew up with was already mine. At Penn, I bring that pride to the Asian Dance Team, blending tradition with experimentation."
      }
    ]
  },
  {
    slug: "haircutting",
    title: "Dorm Barber",
    date: "2020–present",
    cover: "/projects/placeholder-hair.jpg",
    description:
      "Pandemic necessity turned into a mini-practice in craft and care—matching face shape, preference, and style to make friends feel most like themselves.",
    tags: ["misc"],
    content: [
      {
        type: "text",
        content:
          "My first self-cut ended at the chin after chasing symmetry. From there: dad, brother, then a brave friend with craft scissors and a trash can. These days I set up a chair and cape, do the consultation, and get to work. It's design thinking with clippers."
      }
    ]
  }
];