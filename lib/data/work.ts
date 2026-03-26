import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    slug: "sequoia-stitch",
    title: "Sequoia Stitch",
    date: "2025",
    cover: "/projects/sequoia/sequoia-logo.png",
    tags: ["projects"],
    content: [
      {
        type: "sideBySide",
        image: "/projects/sequoia/sequoia-logo.png",
        alt: "Sequoia Stitch logo",
        title: "Sequoia Stitch",
        description: "I built this project as a design engineering contractor for Sequoia Capital. Sequoia has a large and growing library of long-form podcast content packed with founder and investor insight, but it was locked inside multi-hour videos. Users had no way to find the most relevant moments without manually skimming. I built a semantic search tool for their 'Training Data' podcast that lets you ask any question and get back a curated playlist of timestamped clips that actually answer it.",
        imagePosition: "left"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "video",
        src: "/projects/sequoia/sequoia-demo.mov",
        caption: "Ask a question, get a stitch of clips that answer it",
        loop: false
      },
      {
        type: "link",
        text: "Try it!",
        url: "https://stitch.sequoiacap.com",
        size: "sm"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "sectionHeader",
        content: "How I Built It"
      },
      {
        type: "richText",
        content: "The key design decisions lived in two places: the **video processing pipeline** and the **search pipeline**.",
        size: "md"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "textColumns",
        columns: [
          {
            title: "Fetch & Segment",
            content: "The pipeline starts by pulling each podcast episode's YouTube transcript and normalizing the raw caption lines into timed entries with start and end seconds.\n\nFrom there, the full timestamped transcript is processed through an LLM-based segmentation layer that identifies 5 to 15 natural chapter boundaries — the moments where the conversation topic clearly shifts. Each chapter gets a title and a start timestamp, and the corresponding transcript text is extracted for that window. This gives us semantically coherent chunks that map to real discussion threads rather than arbitrary time slices."
          },
          {
            title: "Embed & Store",
            content: "Each chapter's text gets run through OpenAI's **text-embedding-3-small**, producing a 1536-dimension vector that captures the semantic meaning of that section of conversation.\n\nThe vector is stored in Postgres alongside the chapter title, start and end timestamps, and source video metadata, with the pgvector extension enabling cosine similarity search directly in the database.\n\nA daily cron job on Railway watches the YouTube playlist for new uploads and runs the full pipeline automatically, so the library stays current without any manual work."
          },
          {
            title: "Search Pipeline",
            content: "When a user submits a query, the same embedding model converts it into a vector and pgvector pulls the 40 most semantically similar segments from across the library.\n\nBefore hitting GPT, the backend checks for a cached result: if a previous query has a cosine similarity above 0.95 with the current one, the saved playlist is returned instantly.\n\nOtherwise, GPT takes the 40 candidates and selects and orders the best clips into a final playlist, reasoning about relevance and minimizing redundancy. That result gets saved so future similar searches are instant."
          }
        ]
      },
      {
        type: "spacer",
        size: "md"
      },
      {
        type: "text",
        content: "This was such a fun project and I loved the end-to-end design challenge. Figuring out how to make hours of dense content feel instantly navigable was a really satisfying problem to solve.",
        size: "md"
      },
      {
        type: "spacer",
        size: "md"
      },
      {
        type: "text",
        content: "React 19 · Vite · Tailwind CSS · FastAPI · OpenAI text-embedding-3-small · GPT · pgvector · Supabase · Railway · Vercel",
        size: "sm"
      }
    ]
  },{
    slug: "hullabaloo",
    title: "Hullabaloo",
    date: "2025",
    cover: "/projects/hullabaloo/hullabaloo-2.png",
    tags: ["projects"],
    content: [
      {
        type: "sideBySide",
        image: "/projects/hullabaloo/hullabaloo.png",
        alt: "Hullabaloo logo",
        title: "Hullabaloo",
        description: "Hullabaloo is a real-time multiplayer scavenger hunt where players race to find physical objects in their space and hold them up to their camera. No judges, no manual review. AI validates submissions on the spot and the first person to show the object wins the round.",
        imagePosition: "left"
      },
      {
        type: "video",
        src: "/projects/hullabaloo/hullabaloo.mov",
        loop: false
      },
      {
        type: "link",
        text: "Play a game!",
        url: "https://www.hullabaloo.online",
        size: "sm"
      },
      {
        type: "spacer",
        size: "md"
      },
      {
        type: "sideBySide",
        image: "/projects/hullabaloo/compass.jpeg",
        alt: "KP Hackathon",
        title: "KP Hackathon",
        description: "I got to build this with my good friend Anish, who I met through the KP Fellows program. We won the KP Fellows hackathon last summer with Compass, an interactive internet scavenger hunt using Browserbase where you could build hunts that guide players through real websites on any topic. We loved the mechanic enough to come back to it and rebuild from scratch, this time production-ready and physical.",
        imagePosition: "right"
      },
      {
        type: "sectionHeader",
        content: "The Model"
      },
      {
        type: "richText",
        content: "The part I was most excited to build around was **OpenAI's CLIP** (Contrastive Language-Image Pretraining). It's trained on 400 million image-text pairs from the internet, learning to understand images and language together in a shared space. Most vision models need labeled examples for every object class they detect. CLIP doesn't. You describe what you're looking for in plain English and it figures out if what it sees matches. Zero-shot recognition!",
        size: "md"
      },
      {
        type: "richText",
        content: "We used the **ViT-B/16 variant**, which cuts each image into 16x16 pixel patches and processes them like tokens in a language model. Before each round starts, we pre-compute text embeddings for a set of positive and negative descriptions and cache them. Then every 200ms, each player's frame gets encoded and checked against those vectors. A frame only registers as a win if the positive score clears a threshold and the gap between positive and negative scores is wide enough, which keeps false positives low.",
        size: "md"
      },
      {
        type: "richText",
        content: "**Backend** is FastAPI with Socket.io. The model runs on an NVIDIA T4 GPU on EC2, with Redis managing room state and atomic win claiming. We used NGINX and DuckDNS to handle traffic routing to the instance. \n\n **Frontend** is React 18 with Vite, Zustand for state, and Tailwind. The game screen streams live camera feeds between players, shows a confidence bar that updates in real time as you get closer to a match, and adapts the video grid layout based on how many people are in the room.",
        size: "md"
      },
      {
        type: "spacer",
        size: "md"
      },
      {
        type: "text",
        content: "React 18 · TypeScript · Vite · Zustand · Socket.io · Tailwind CSS · FastAPI · PyTorch · OpenAI CLIP (ViT-B/16) · Redis · NGINX · EC2 (NVIDIA T4) · DuckDNS",
        size: "sm"
      }
    ]
  },
  {
    slug: "figma-summer-2025",
    title: "AI @ Figma",
    date: "2025",
    cover: "/projects/figma/figma-logo.png",
    tags: ["projects"],
    content: [
      {
        type: "sideBySide",
        image: "/projects/figma/figma-logo.png",
        alt: "Figma logo",
        title: "Figma Summer 2025",
        description: "I spent this summer as a software engineering intern on the AI Productivity team at Figma in San Francisco. This truly has been my best summer so far. I met the coolest people, learned a ton, and I kept leaving the office more energized than when I came in.",
        imagePosition: "left"
      },
      {
        type: "link",
        text: "Learn about Figma AI",
        url: "https://www.figma.com/ai/",
        size: "sm"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "sectionHeader",
        content: "What I Shipped"
      },
      {
        type: "text",
        content: "Over the course of my internship, I worked on three major projects that shipped to production. Each one taught me something different about building AI-powered features, cross-team collaboration, and what it takes to ship delightful experiences to millions of users.",
        size: "md"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "subHeader",
        content: "Project #1: AI Text Suggestions in Figma Sites"
      },
      {
        type: "richText",
        content: "**The Challenge:** AI text suggestions was already one of our highest-usage AI features, and we wanted to extend that value into Sites. But, Sites has desktop, tablet, and mobile views, and each breakpoint has its own responsive design choices. The technical challenge was ensuring that suggestions would automatically propagate across all views while preserving what makes each breakpoint unique.",
        size: "md"
      },
      {
        type: "richText",
        content: "**What I Built:** I worked closely with fellow engineers and the Sites team to build out the entire feature. Within one week, I had it working in staging and led my first bug bash. This was my first big win: coordinating engineers to break my feature and then systematically closing out every issue they found.",
        size: "md"
      },
      {
        type: "text",
        content: "React • TypeScript • Responsive Design • AI Integration",
        size: "sm"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "quote",
        content: "Successfully launched to staging within one week → Led first bug bash, tightened UX polish, closed follow-ups → Shipped 100% to production → ~10k requests with 52% session success rate",
        align: "left"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "video",
        src: "/projects/figma/autosuggest.mov",
        caption: "AI text suggestions automatically adapting across desktop, tablet, and mobile breakpoints",
        loop: true
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "subHeader",
        content: "Project #2: Attach Reference Images for Image Generation"
      },
      {
        type: "richText",
        content: "**The Problem:** We noticed designers kept leaving Figma for image editing. The models we were using for make and edit image had the potential to support reference-guided generation, but we weren't utilizing it. This felt like a missed opportunity.",
        size: "md"
      },
      {
        type: "richText",
        content: "**What I Built:** This project stretched me across the full stack. I got to touch Cortex, the AI backend, for the first time, adding multi-reference support to our providers and writing integration tests. On the web side, I built out the entire flow — uploading images, supporting different models, building thumbnail viewers (building off Figma Make's codebase), and handling error states.",
        size: "md"
      },
      {
        type: "text",
        content: "Cortex • Multi-provider support • Integration Testing • Frontend orchestration • UX writing",
        size: "sm"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "quote",
        content: "Added multi-reference support in Cortex with integration tests for stable, end-to-end wiring → Built complete upload flow supporting different models with error states → Collaborated across Data Science, FPL, Design/UX, and Product Marketing → Component reuse from Figma Make — orchestrating IDS logging, FPL styling, and DesignOps",
        align: "left"
      },
      {
        type: "spacer",
        size: "sm"
      },
      {
        type: "richText",
        content: "**Key Learning:** Leading bug bash on my first project taught me so much about tightening UX polish. By project two, I was confidently orchestrating work across six different teams and thinking about launch strategy, not just code.",
        size: "md"
      },
      {
        type: "video",
        src: "/projects/figma/ref image.mp4",
        caption: "Attach reference images to guide AI generation — describe styles without words, generate in your brand style, add specific objects, or combine images",
        loop: true
      },
      {
        type: "link",
        text: "Check out the launch",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7374193551590699008/",
        size: "sm"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "subHeader",
        content: "Project #3: Backend for Expand Image Feature"
      },
      {
        type: "richText",
        content: "I also built the backend for generative expand, a feature that lets you drag the corner of an image and have AI fill in the expanded area such that your content fits any size. I connected the web client to the AI model and integrated third-party model providers. This feature is now launched as part of Figma's AI image editing tools in Design and Draw.",
        size: "md"
      },
      {
        type: "text",
        content: "Backend Engineering • Cortex Endpoint • 3rd Party Vendor Wiring • Model Integration",
        size: "sm"
      },
      {
        type: "video",
        src: "/projects/figma/figma expand demo.mov",
        caption: "Expand any image by dragging its edges — AI generates the missing areas to fit new aspect ratios, extend backgrounds, or repurpose content across platforms",
        loop: true
      },
      {
        type: "link",
        text: "Check out the launch",
        url: "https://x.com/figma/status/1998756770421027243?s=20",
        size: "sm"
      },
      
      {
        type: "spacer",
        size: "xl"
      },
      {
        type: "sectionHeader",
        content: "Beyond the Code"
      },
      {
        type: "text",
        content: "This summer wasn't just about shipping features. It was about discovering what it feels like to be part of something special.",
        size: "md"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "sideBySide",
        image: "/projects/figma/fignation.jpg",
        alt: "Presenting at FigNation",
        title: "Presenting at FigNation",
        description: "I got to present at FigNation in the intern spotlight. Standing in front of the company and sharing my work was both terrifying and exhilarating.",
        imagePosition: "left"
      },
      {
        type: "sideBySide",
        image: "/projects/figma/sf-standard.png",
        alt: "SF Standard article",
        title: "Featured in the SF Standard",
        description: "I was featured in the SF Standard in a piece about Figma's culture. It was wild to see my thoughts about the company in print.",
        imagePosition: "right",
        link: {
          text: "Read the article",
          url: "https://sfstandard.com/2025/08/18/inside-figma-ipo-public-san-francisco-tech-office-tour/"
        }
      },
      {
        type: "sideBySide",
        image: "/projects/figma/dylan.jpeg",
        alt: "Maker Week collaboration",
        title: "Maker Week",
        description: "Collaborated with the Make Video project team during maker week. I loved the energy of everyone building experimental features together!",
        imagePosition: "left"
      },
      {
        type: "sideBySide",
        image: "/projects/figma/team.jpeg",
        alt: "Team collaboration",
        title: "The Best Team Ever",
        description: "Meeting my team in person and working together all summer has been such a blast. Calisthenics corner, L-sit competitions, and Holy Nata runs became a ritual.",
        imagePosition: "right"
      },
      {
        type: "spacer",
        size: "lg"
      },
      {
        type: "sectionHeader",
        content: "This Summer Featured...",
        align: "center"
      },
      {
        type: "spacer",
        size: "md"
      },
      {
        type: "imageGrid",
        images: [
          {
            src: "/projects/figma/cafe.jpeg",
            alt: "apartment cafe",
            caption: "Cafe hopping and hosting my first apartment cafe"
          },
          {
            src: "/projects/figma/fam.jpeg",
            alt: "Cooking class with interns",
            caption: "Cooking class with the figterns"
          },
          {
            src: "/projects/figma/climbing.jpeg",
            alt: "Rock climbing",
            caption: "Fell for the SF climbing propaganda"
          },
          {
            src: "/projects/figma/ipo.jpeg",
            alt: "IPO",
            caption: "IPO!!!"
          },
          {
            src: "/projects/figma/interns.jpeg",
            alt: "Interns",
            caption: "Interns <3"
          },
          {
            src: "/projects/figma/kp.jpeg",
            alt: "Fellows",
            caption: "KP <3"
          },
        ],
        columns: 3,
        gap: "lg"
      },
      {
        type: "quote",
        content: "Huge thank-yous to my mentor Hannah and my manager Dan, the AIP team, my SF desk pod, the SF Figterns, the early career team, my intern buddy, and everyone who took 1:1s with me. I felt supported every step of the way. I felt very lucky to be part of such a special place. Thanks so much for making this my best summer ever! 🔥",
        align: "center"
      }
    ]
  },{
    "slug": "estimate",
    "title": "EstiMate",
    "date": "2024",
    "cover": "/projects/estimate/estimate-logo2.png",
    "tags": ["projects"],
    "content": [
      {
        "type": "text",
        "content": "We built EstiMate at TreeHacks 2024 after realizing how many friendly bets vanish into thin air—no receipts, no bragging rights. So we made an app that locks in those moments for good: tap to create a wager, AirDrop it to your friends, and let the blockchain play referee. Whether it's 'who'll ace the midterm' or 'who shows up late again,' EstiMate keeps the fun (and accountability) alive."
      },
      {
        "type": "text",
        "content": "Under the hood, we paired SwiftUI with a Bun/Express.js backend, Convex for data and key management, and Solidity smart contracts deployed on Caldera for secure, on-chain holds. I led backend and database integration, wiring frontend flows to contract logic through Ethers.js. Our working prototype earned three honors: Taisu Ventures' Amazing Web3 Gaming Award ($500), Caldera's Best Use of Caldera ($1K in ETH), and Ava Labs' Best Consumer Use Case for Blockchain ($1.5K)."
      },
      {
        type: "link",
        text: "Check out the DevPost",
        url: "https://devpost.com/software/estimate-0nqzfx/",
        size: "sm"
      },
      {
        "type": "image",
        "src": "/projects/estimate/estimate-flow.jpg",
        "alt": "EstiMate user flow",
        "size": "lg",
        "aspectRatio": "auto",
        "caption": "From friendly challenge setup to transparent on-chain settlement."
      },
      {
        "type": "image",
        "src": "/projects/estimate/estimate-stack.jpg",
        "alt": "EstiMate tech stack",
        "size": "lg",
        "aspectRatio": "auto",
        "caption": "Built with SwiftUI, Bun/Express, Convex, Caldera, and Solidity."
      }
    ]
  },  
  // {
  //   "slug": "box-of-balloons-platform",
  //   "title": "Box of Balloons",
  //   "date": "2024–2025",
  //   "cover": "/projects/bob/bob-logo 2.png",
  //   "tags": ["projects"],
  //   "content": [
  //     {
  //       "type": "text",
  //       "content": "As Product Manager and Technical Lead at Hack4Impact, I partnered with Box of Balloons -- a nonprofit that brings birthdays to children in homelessness and foster care --to reimagine how their 24+ chapters coordinate nationwide. I scoped pain points with chapter leaders drowning in Google Forms, then led a 15-person team to design and ship a centralized, permissioned MERN platform. Partner agencies now submit secure requests, chapters can toggle intake on or off, and national staff can view a live dashboard of impact metrics embedded directly on their Wix site."
  //     },
  //     {
  //       "type": "image",
  //       "src": "/projects/bob/bob-map.png",
  //       "alt": "Map of Box of Balloons chapters across the U.S.",
  //       "size": "lg",
  //       "aspectRatio": "auto",
  //       "caption": "Interactive chapter map showing 24+ locations nationwide."
  //     },
  //     {
  //       "type": "image",
  //       "src": "/projects/bob/bob-dashboard.png",
  //       "alt": "Chapter leader dashboard interface",
  //       "size": "lg",
  //       "aspectRatio": "auto",
  //       "caption": "Dashboard for chapter leaders to manage requests, toggle capacity, and track deliveries."
  //     },
  //     {
  //       "type": "image",
  //       "src": "/projects/bob/bob-admin.png",
  //       "alt": "National admin analytics dashboard",
  //       "size": "lg",
  //       "aspectRatio": "auto",
  //       "caption": "Admin view consolidating chapter-level data and real-time impact statistics for public display."
  //     }
  //   ]
  // },  
  {
    slug: "game-on",  
    title: "Game On",
    date: "2023",
    cover: "/projects/art/game-on.jpeg",
    tags: ["art"],
    content: [
      {
        type: "video",
        src: "/projects/art/game-on.mp4",
        caption: "Game On",
        loop: true,
        autoplay: false
      },
      {
        type: "text",
        content: "Game controller, spray paint, mixed vitamins, glue",
        size: "sm"
      },
      {
        type: "text",
        content: `In middle school, I got interested in how games could be used for more than entertainment. I came across Akili, a company making video games that improve cognitive function in ADHD patients through multitasking challenges. The idea stuck with me—that something we think of as purely recreational could actually be therapeutic. \n\n I took a game controller and hot glued vitamins all over it until it looked almost jewel-encrusted under the light. The vitamins felt like the right symbol—something associated with health, transformed into something playful. I photographed hands holding it mid-game to suggest this future where digital medicine is just part of everyday life, treating everything from attention issues to memory loss.`,
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/art/game-on.jpeg",
        alt: "Game On",
        size: "lg",
        aspectRatio: "wide",
        caption: "Game On"
      }
    ]
  },
  {
    slug: "dream-fragments",  
    title: "Dream Fragments",
    date: "2023",
    cover: "/projects/art/dream-fragments.jpeg",
   tags: ["art"],
    content: [
      {
        type: "video",
        src: "/projects/art/dream-fragments.mp4",
        caption: "Dream Fragments",
        loop: true,
        autoplay: false
      },
      {
        type: "text",
        content: "Wood skewers, vellum paper, LED lights, glue, wire",
        size: "sm"
      },
      {
        type: "image",
        src: "/projects/art/dream-fragments.jpeg",
        alt: "Dream Fragments",
        size: "lg",
        aspectRatio: "wide",
        caption: "Dream Fragments"
      }
    ]
  },
  {
    slug: "dangerous-bloom",  
    title: "Dangerous Bloom",
    date: "2023",
    cover: "/projects/art/shattered-cup.png",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/shattered-cup.png",
        alt: "Dangerous Bloom",
        size: "lg",
        aspectRatio: "wide",
        caption: "Dangerous Bloom"
      },
      {
        type: "text",
        content: "Shattered porcelain teacup, glue",
        size: "sm"
      },
      {
        type: "text",
        content: `During my busiest times, I find myself craving the simplicity of a tea ritual - the quiet act of pouring water, watching leaves steep, sitting still. But that kind of stillness feels increasingly out of reach.\n\nI shattered this teacup and reassembled it so it can no longer hold water. It's now ornamental, dysfunctional - a relic of slowness in a world that demands constant motion. We've traded rituals for efficiency, moments for transactions. Everything is designed to be consumed and discarded.\n\n This broken cup gestures toward what we've lost: time to linger, space to savor. Its sharp edges make it dangerous to handle, a reminder that our pace comes at a cost. It's both warning and longing -an object caught between what was and what I wish could be again.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "ubiquity",  
    title: "Ubiquity",
    date: "2023",
    cover: "/projects/art/ubiquity.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/ubiquity.jpeg",
        alt: "Ubiquity",
        size: "lg",
        aspectRatio: "wide",
        caption: "Ubiquity"
      },
      {
        type: "text",
        content: "Polymer clay, two phones, photo of self",
        size: "sm"
      },
      {
        type: "text",
        content: `I started thinking about how much of our lives we experience through screens now—documenting, filtering, performing. There's something strange about that constant loop of looking at ourselves looking at things.\n\nThe eye-phone came from my dad's broken phone. I used a toothpick and dry paintbrush to sculpt a polymer clay eyeball emerging from the screen and becoming one with the device. The eye has heart-shaped pupils—borrowed from Michelangelo's David—because I liked the idea of being in love with your own reflection, or maybe just being in love with the act of looking.\n\nI photographed it next to my actual eye. One's polished and idealized, the other is just what it is. It's more an observation than a statement—just noticing how we've become a little obsessed with curating how we're seen.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "parched",  
    title: "Parched",
    date: "2023",
    cover: "/projects/art/parched.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/parched.jpeg",
        alt: "Parched",
        size: "lg",
        aspectRatio: "wide",
        caption: "Parched"
      },
      {
        type: "text",
        content: "Cut styrofoam cups, LED lights, glue",
        size: "sm"
      },
      {
        type: "text",
        content: "Cut styrofoam cups form a delicate structure that can no longer hold water—a quiet meditation on California's historic drought.",
        size: "lg"
      },
    ]
  },
  {
    slug: "writers-block",  
    title: "Writer's Block",
    date: "2023",
    cover: "/projects/art/writers-block.jpg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/writers-block.jpg",
        alt: "Writer's Block",
        size: "lg",
        aspectRatio: "wide",
        caption: "Writer's Block"
      },
      {
        type: "text",
        content: "Keyboard, desktop, thumbtacks, spray paint, glue",
        size: "sm"
      },
      {
        type: "text",
        content: "Writer's block feels like typing on thumbtacks. This bright red keyboard transforms familiar frustration into physical dread, making the invisible pain of creative paralysis suddenly uncomfortably tangible.",
        size: "lg"
      },
    ]
  },
  {
    slug: "cola-wars",  
    title: "Cola Wars",
    date: "2023",
    cover: "/projects/art/cola-wars.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/cola-wars.jpeg",
        alt: "Cola Wars",
        size: "lg",
        aspectRatio: "wide",
        caption: "Cola Wars"
      },
      {
        type: "text",
        content: "Pepsi and Coke cans, bendy straws, keyboard, glue",
        size: "sm"
      },
    ]
  },
  {
    slug: "litter-bug",  
    title: "Litter Bug",
    date: "2023",
    cover: "/projects/art/litter-bug.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/litter-bug.jpeg",
        alt: "Litter Bug",
        size: "lg",
        aspectRatio: "wide",
        caption: "Litter Bug"
      },
      {
        type: "text",
        content: "Banana, kitty litter, mod podge",
        size: "sm"
      },
      {
        type: "text",
        content: `I recently read a research article about Toxoplasma gondii, a parasite excreted by cats. Not only does this behavior-altering parasite affect the brains of rats to make them more risk-averse and drawn to cats, it has been discovered that humans can also be affected. By altering the connections between our neurons, this parasite can contribute to schizophrenia, car crashes, and suicides, maybe killing a million people each year.\n\nI wanted something innocent turned unsettling, a double take that lingers. Kitty litter belongs in a box, not on food, yet here it clings to fruit we'd mindlessly peel and eat. The juxtaposition isn't just visual—it's a quiet alarm about invisible threats we've normalized. What looks harmless in one context becomes sinister in another, much like the parasite itself.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "in-memoriam",  
    title: "In Memoriam",
    date: "2023",
    cover: "/projects/art/in-memoriam.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/in-memoriam.jpeg",
        alt: "In Memoriam",
        size: "lg",
        aspectRatio: "wide",
        caption: "In Memoriam"
      },
      {
        type: "text",
        content: "Broken keyboard, spray paint, mini plastic figurines",
        size: "sm"
      },
      {
        type: "text",
        content: `Ninety percent of the world's languages will vanish by the end of the 21st century, each one carrying entire universes of thought, memory, and identity. I reimagined the Vietnam Memorial as a spray-painted keyboard with missing keys, replacing names of the dead with the gaps where words used to be. Miniature figures gather around it in mourning poses, reaching toward what can no longer be touched.\n\nBoth monuments honor irretrievable loss. Both ask what remains when voices disappear. The keyboard becomes a cenotaph for linguistic extinction, each absent key a culture we failed to preserve.`,
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/art/vietnam.webp",
        alt: "Vietnam Memorial",
        size: "lg",
        aspectRatio: "wide",
        caption: "Vietnam Memorial - VA.gov"
      },
    ]
  },
  {
    slug: "gumball-faces",  
    title: "Gumball Faces (Stop Motion)",
    date: "2023",
    cover: "/projects/art/gumball-faces.jpeg",
    tags: ["art"],
    content: [
      {
        type: "video",
        src: "/projects/art/gumball-faces.mov",
        caption: "Gumball Faces",
        loop: true,
        autoplay: false
      },
      {
        type: "text",
        content: "Glass head, gumball machine, ping pong balls, acrylic paint, stop motion",
        size: "sm"
      },
      {
        type: "text",
        content: `I filled a gumball machine with painted ping pong balls, each one a different feature: noses, lips, eyes in shifting colors. Turn the dial and a new face tumbles out. In the stop motion, features assemble and dissolve, cycling through combinations as casually as choosing candy.\n\nGrowing up meant learning my face was negotiable. Beauty became a vending machine transaction, features as interchangeable as currency. I wanted to see what happens when self-modification becomes that frictionless, that mundane. The machine dispenses identities with the same mechanical indifference it once dispensed gum.`,
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/art/gumball-faces.jpeg",
        alt: "Gumball Faces (Stills)",
        size: "lg",
        aspectRatio: "wide",
        caption: "Gumball Faces (Stills)"
      },
    ]
  },
  {
    slug: "timestamp",  
    title: "Timestamp",
    date: "2023",
    cover: "/projects/art/timestamp.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/timestamp.jpeg",
        alt: "Timestamp",
        size: "lg",
        aspectRatio: "wide",
        caption: "Timestamp"
      },
      {
        type: "text",
        content: "Mixed concrete, alarm clock, hammer",
        size: "sm"
      },
    ]
  },
  {
    slug: "unequal-access",  
    title: "Unequal Access",
    date: "2023",
    cover: "/projects/art/unequal-access.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/unequal-access.jpeg",
        alt: "Unequal Access",
        size: "lg",
        aspectRatio: "wide",
        caption: "Unequal Access"
      },
      {
        type: "text",
        content: "Combination lock, hasp, toilet seat, LED lights",
        size: "sm"
      },
    ]
  },
  {
    slug: "end-of-innocence",  
    title: "End of Innocence",
    date: "2023",
    cover: "/projects/art/end-of-innocence.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/end-of-innocence.jpeg",
        alt: "End of Innocence",
        size: "lg",
        aspectRatio: "wide",
        caption: "End of Innocence"
      },
      {
        type: "text",
        content: "Hello Kitty purse, prescription bottles, LED lights",
        size: "sm"
      },
    ]
  },
  {
    slug: "masquerade-filtration",  
    title: "Masquerade Filtration",
    date: "2023",
    cover: "/projects/art/masquerade-filtration.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/masquerade-filtration.jpeg",
        alt: "Masquerade Filtration",
        size: "lg",
        aspectRatio: "wide",
        caption: "Masquerade Filtration"
      },
      {
        type: "text",
        content: "Knitted face sculpture, wire",
        size: "sm"
      },
    ]
  },
  {
    slug: "disconnect",  
    title: "Disconnect",
    date: "2023",
    cover: "/projects/art/disconnect.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/disconnect.jpeg",
        alt: "Disconnect",
        size: "lg",
        aspectRatio: "wide",
        caption: "Disconnect"
      },
      {
        type: "text",
        content: "Wire mesh, mixed yarn, LED lights",
        size: "sm"
      },
    ]
  },
  {
    slug: "appealing-to-the-core",  
    title: "Appealing to the Core",
    date: "2023",
    cover: "/projects/art/appealing-to-the-core.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/appealing-to-the-core.jpeg",
        alt: "Appealing to the Core",
        size: "lg",
        aspectRatio: "tall",
        caption: "Appealing to the Core"
      },
      {
        type: "text",
        content: "Peeled apple, iPhone",
        size: "sm"
      },
    ]
  },
  {
    slug: "dissenting-perspectives",  
    title: "Dissenting Perspectives",
    date: "2023",
    cover: "/projects/art/dissenting-perspectives.jpeg",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/dissenting-perspectives.jpeg",
        alt: "Dissenting Perspectives",
        size: "lg",
        aspectRatio: "wide",
        caption: "Dissenting Perspectives"
      },
      {
        type: "text",
        content: "Mixed concrete, eyeglasses",
        size: "sm"
      },
    ]
  },
  {
    slug: "lilyloop",
    title: "LilyLoop",
    date: "2023-2024",
    cover: "/projects/lilyloop/lilyloop-logo-2.png",
    tags: ["projects"],
    content: [
      {
        type: "text",
        size: "lg",
        content:
          "What started as a late-night conversation about why we still estimate menstrual flow quickly spiraled into a deep dive across women's health - from quantifying blood loss to better diagnose heavy menstrual bleeding, to postpartum hemorrhage, perimenopause, and early indicators of PCOS. I met my two co-founders and closest friends at Penn, and together we went on to win the Y-Prize ($10k) and the Venture Lab Startup Challenge ($25k) to solve these problems."
      },
      {
        type: "link",
        text: "Read the article",
        url: "https://mackinstitute.wharton.upenn.edu/2024/lilyloop-wins-2024-y-prize-competition/",
        size: "sm"
      },
      {
        type: "image",
        src: "/projects/lilyloop/lilyloop-yprize.png",
        alt: "Y-Prize team photo",
        aspectRatio: "auto",
      },
      {
        type: "text",
        content:
          "We went all in that first summer to prototype smart menstrual products using biodegradable soil moisture sensors. At the Turner Lab @ Penn, I spent long days screen-printing silver traces on cellulose nanofibrils and testing moisture levels in soil - work that would later inspire our early sensing architecture. With guidance from Penn CHOP mentors and women's health researchers worldwide, we validated our approach through the NSF I-Corps program and early customer interviews."
      },
      {
        type: "image",
        src: "/projects/lilyloop/turner lab.jpg",
        alt: "Turner Lab research setup",
        aspectRatio: "auto",
      },
      {
        type: "text",
        content:
          "After a few pivots, we've returned to what motivated us from the start: building tools that translate cycle signals into real insight. Our renewed goal is to create instant hormone and flow feedback, helping people understand their stress, energy, and overall cycle health in real time. [to be continued...]"
      }
    ]
  },  
  {
    "slug": "forget-me-not",
    "title": "Forget Me Not",
    "date": "2022",
    "cover": "/projects/forget-me-not/forget me not logo 3.png",
    "tags": ["projects"],
    "content": [
      {
        "type": "text",
        "content": "During Penn’s Management & Technology Summer Institute, our team explored how technology can make emotional connection tangible. We built Forget Me Not, a “social garden” where you can nurture relationships by tending to a loved one’s plant remotely. Each interaction—watering, light, care—translates into movement or growth in a shared flower pot, turning affection into something you can literally see bloom. Inspired by IDEO’s design culture, we filled the Lauder lounge with Post-its and laughter before wiring up sensors, a Feather Huzzah, and a companion app. Watching our first flower respond felt like proof that empathy can be engineered."
      },
      {
        type: "image",
        src: "/projects/forget-me-not/forget me not logo 2.png",
        alt: "Forget Me Not logo",
        size: "sm",
        aspectRatio: "auto"
      },
      {
        "type": "video",
        "src": "/projects/forget-me-not/Forget Me Not Final Vid.mp4",
        "caption": "Final product & demo"
      },
      
    ]
  },
  {
    "slug": "fiona-chatbot",
    "title": "FIONA",
    "date": "2020–2021",
    "cover": "/projects/fiona/fiona-logo-2.png",
    "tags": ["projects"],
    "content": [
      {
        "type": "text",
        "content":
          "FIONA, short for Foodbank Inquiry OperatioN Assistant, was my very first technical project, and the one that showed me how code could solve real problems. It started with a simple question: how could we help food banks keep up when phone lines were overflowing during COVID? Partnering with the Ecumenical Hunger Program (EHP), I joined three other students to build a chatbot that could answer common questions and route donation requests, giving staff more time to focus on delivering food to families."
      },
      {
        "type": "text",
        "content":
          "We held weekly syncs with EHP managers to understand their workflows and refine intents—from 'What are your hours?' to 'How can I donate?' Using JavaScript and Google Cloud Fulfillment, FIONA connects user inputs to a webhook and database, delivering tailored responses specific to each food bank's needs. After rounds of debugging and iteration, we integrated FIONA directly into EHP's website—streamlining communication, handling hundreds of interactions daily, and helping EHP distribute a record number of Thanksgiving dinners."
      },
      {
        "type": "image",
        "src": "/projects/fiona/fiona-tweets.png",
        "alt": "Tweets highlighting FIONA's launch and impact",
        "size": "md",
        "aspectRatio": "auto",
        "caption": "FIONA's debut: helping EHP handle hundreds of requests a day during the holidays."
      },
      {
        "type": "quote",
        "content":
          "We turned an idea into an impact—one turkey at a time."
      }
    ]
  },
  {
    "slug": "cookies4agoodcause",
    "title": "Cookies4aGoodCause",
    "date": "2020–2021",
    "cover": "/projects/cookies/cookies-logo-2.png",
    "tags": ["misc"],
    "content": [
      {
        type: "image",
        src: "/projects/cookies/pic.jpeg",
        alt: "Cookies4aGoodCause pic",
        size: "lg",
        aspectRatio: "wide"
      },
      {
        "type": "text",
        "content":
          "Cookies4aGoodCause started as a small lockdown experiment and grew into my nonprofit bakery with a simple mission: to spread warmth, both literally and figuratively. Instead of cranking out store-bought mixes, my friend and I poured our creativity into every batch—from gooey s’mores cookies to matcha-rose pastries."
      },
      {
        type: "image",
        src: "/projects/cookies/grid.png",
        alt: "Cookies4aGoodCause grid",
        size: "md",
        aspectRatio: "auto"
      },
      {
        "type": "text",
        "content":
          "Proceeds went to UNICEF, but what meant more was the joy each cookie sparked. Those smiles reminded me that craft—whether in baking, design, or code—can be its own quiet form of kindness."
      }
    ]
  },
  {
    slug: "barber",
    title: "Barber",
    date: "2020–present",
    cover: "/projects/hair/scissors-logo.png",
    tags: ["misc"],
    content: [
      {
        type: "text",
        content:
          "My brief stint as the school barber. It's design thinking with clippers."
      }, 
      {
        type: "image",
        src: "/projects/hair/grid.png",
        alt: "Dorm Barber",
        size: "md",
        aspectRatio: "auto",
        caption: "I'm not that good"
      }
    ]
  },
  {
    slug: "rooster",  
    title: "Rooster",
    date: "2019",
    cover: "/projects/art/rooster-painting.png",
    tags: ["art"],
    content: [
      {
        type: "image",
        src: "/projects/art/rooster-painting.png",
        alt: "Rooster",
        size: "lg",
        aspectRatio: "tall",
        caption: "Rooster"
      },
      {
        type: "text",
        content: "Acrylic on cardboard, magazines, feathers, leaves, glue",
        size: "sm"
      },
      {
        type: "text",
        content: "Featured in SF MOMA.",
        size: "lg"
      }
    ]
  }
];