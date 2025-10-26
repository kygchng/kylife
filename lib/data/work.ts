import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    slug: "lilyloop",
    title: "LilyLoop",
    date: "2023–present",
    cover: "/projects/lilyloop/lilyloop-logo.png",
    tags: ["build"],
    content: [
      {
        type: "text",
        size: "lg",
        content:
          "What started as a late-night conversation about why we still estimate menstrual flow quickly spiraled into a deep dive across women's health - from quantifying blood loss to better diagnose heavy menstrual bleeding, to postpartum hemorrhage, perimenopause, and early indicators of PCOS. I met my two co-founders and closest friends at Penn, and together we went on to win the Y-Prize ($10k) and the Venture Lab Startup Challenge ($25k) to solve these problems."
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
    "slug": "box-of-balloons-platform",
    "title": "Box of Balloons",
    "date": "2024–2025",
    "cover": "/projects/bob/bob-logo.png",
    "tags": ["build"],
    "content": [
      {
        "type": "text",
        "content": "As Product Manager and Technical Lead at Hack4Impact, I partnered with Box of Balloons -- a nonprofit that brings birthdays to children in homelessness and foster care --to reimagine how their 24+ chapters coordinate nationwide. I scoped pain points with chapter leaders drowning in Google Forms, then led a 15-person team to design and ship a centralized, permissioned MERN platform. Partner agencies now submit secure requests, chapters can toggle intake on or off, and national staff can view a live dashboard of impact metrics embedded directly on their Wix site."
      },
      {
        "type": "image",
        "src": "/projects/bob/bob-map.png",
        "alt": "Map of Box of Balloons chapters across the U.S.",
        "size": "lg",
        "aspectRatio": "auto",
        "caption": "Interactive chapter map showing 24+ locations nationwide."
      },
      {
        "type": "image",
        "src": "/projects/bob/bob-dashboard.png",
        "alt": "Chapter leader dashboard interface",
        "size": "lg",
        "aspectRatio": "auto",
        "caption": "Dashboard for chapter leaders to manage requests, toggle capacity, and track deliveries."
      },
      {
        "type": "image",
        "src": "/projects/bob/bob-admin.png",
        "alt": "National admin analytics dashboard",
        "size": "lg",
        "aspectRatio": "auto",
        "caption": "Admin view consolidating chapter-level data and real-time impact statistics for public display."
      }
    ]
  },  
  {
    "slug": "fiona-chatbot",
    "title": "FIONA",
    "date": "2020–2022",
    "cover": "/projects/fiona/fiona-logo.png",
    "tags": ["build"],
    "content": [
      {
        "type": "text",
        "content":
          "FIONA, short for Foodbank Inquiry OperatioN Assistant, was born out of a simple question: how could we help food banks keep up when call lines were overflowing during COVID? Partnering with the Ecumenical Hunger Program (EHP), I led a four-person team to design a chatbot that could field common questions and donation requests, freeing up staff to focus on distributing food to families in need."
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
    "slug": "estimate",
    "title": "EstiMate",
    "date": "2024",
    "cover": "/projects/estimate/estimate-logo.png",
    "tags": ["build"],
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
  {
    slug: "forget-me-not",
    title: "Forget Me Not — Social Garden",
    date: "2022",
    cover: "/projects/placeholder-forgetmenot.jpg",
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
    slug: "chinese-dance",
    title: "Chinese Dance",
    date: "Ongoing",
    cover: "/projects/placeholder-dance.jpg",
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
    tags: ["misc"],
    content: [
      {
        type: "text",
        content:
          "My first self-cut ended at the chin after chasing symmetry. From there: dad, brother, then a brave friend with craft scissors and a trash can. These days I set up a chair and cape, do the consultation, and get to work. It's design thinking with clippers."
      }
    ]
  },
  {
    slug: "rooster",  
    title: "Rooster",
    date: "2019",
    cover: "/projects/art/rooster.PNG",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/rooster.PNG",
        alt: "Rooster",
        size: "lg",
        aspectRatio: "tall",
        caption: "Rooster"
      },
      {
        type: "text",
        content: "Featured in SF MOMA.",
        size: "lg"
      }
    ]
  },
  {
    slug: "game-on",  
    title: "Game On",
    date: "2023",
    cover: "/projects/art/110_Rx-Game On_7x5x2.5_mixed media, mixed pills, remote game controller.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "video",
        src: "/projects/art/0_Game On_game controller, mixed pills.mp4",
        caption: "Game On",
        loop: true,
        autoplay: false
      },
      {
        type: "text",
        content: `My interest in medical applications of game design reaches back to middle school. While exploring computer science, I eventually came across Akili, a startup utilizing video games to combat mental impairment by challenging players to constantly multitask, resulting in improved cognitive functions such as sustained attention and memory, especially in ADHD patients. I began to imagine a world where video games are more widely known as a tool for healing all ages rather than just a fun pastime for children. \n\n Starting with an ordinary video game controller, I hot glued a variety of different vitamins to create a final product that reflects light to look bejeweled from afar. The action shot of a pair of hands interacting with the game controller reflects how widespread I imagine digital medicine becoming in the future, from healing ADHD to restoring geriatric memory loss. By combining my interest in both design and technology, I hope to help make this dream a reality.`,
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/art/110_Rx-Game On_7x5x2.5_mixed media, mixed pills, remote game controller.jpeg",
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
    cover: "/projects/art/04_Dream Fragments_82x28x23_mixed media, wood skewers, vellum, LEDs.jpeg",
   tags: ["art"], 
    content: [
      {
        type: "video",
        src: "/projects/art/01_Dream Fragments_84x31x28_mixed media, wood skewers, vellum, LEDs.mp4",
        caption: "Dream Fragments",
        loop: true,
        autoplay: false
      },
      {
        type: "text",
        content: `To hope is to be human. Whether it be waking up earlier or working out harder, we set ambitious goals every New Year’s Eve  with the purpose to improve our lives. No matter the failures or dire news from the year before, we promise ourselves things will be different if we just try a little harder. I created this precarious tower that, despite its many twists and turns, makes it to the top in order to pay homage to the human spirit that is never extinguishing. In contrast to the rigid nature of wooden skewers, they have been connected together to form a serpent-like vertical architecture with a lyrical flow, enticing the viewer with unexpected materials. Lastly, inspired by the phrase “reach for the stars,” I incorporated LED lights and vellum to illuminate both the tower and its surroundings. In spite of our social pendulum swinging towards destruction and divisive chaos in society today, I hope this work will provide a similar sense of hope and empowerment for the viewer as it has for me.`,
        size: "lg"
      },
      {
        type: "image",
        src: "/projects/art/04_Dream Fragments_82x28x23_mixed media, wood skewers, vellum, LEDs.jpeg",
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
    cover: "/projects/art/01_Shattered Cup.png",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/01_Shattered Cup.png",
        alt: "Dangerous Bloom",
        size: "lg",
        aspectRatio: "wide",
        caption: "Dangerous Bloom"
      },

      {
        type: "text",
        content: `When did we become reliant on our calendars? Assignments to turn in, events to attend, errands to run – it seems like we are sprinting a marathon that never ends. During my busiest times, I’m drawn to the idea of a tea party. The idle ritual of pouring steaming water into a cup, letting the leaves steep, and savoring  the ceremony gives me comfort. But today, with each new smartphone, each social media post, we are being constantly distracted. I imagine our attention span is shorter than any previous generation.\n\n By shattering the porcelain teacup, I reconstructed it so that it is unable to hold water. In this new reality, everything must be introduced and immediately completed. Everything is disposable; nothing is permanent. This cup represents another time where we had the luxury to enjoy the moment rather than lining up at the drive-thru window to eat in our cars. The dual nature of this beautiful yet dangerous teacup represents both a cautionary tale, as well as my idealistic wish. `,
        size: "lg"
      },
    ]
  },
  {
    slug: "ubiquity",  
    title: "Ubiquity",
    date: "2023",
    cover: "/projects/art/02_Ubiquity_7x8x1.25_polymer clay on phone screen, two iPhones, photo of self.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/02_Ubiquity_7x8x1.25_polymer clay on phone screen, two iPhones, photo of self.jpeg",
        alt: "Ubiquity",
        size: "lg",
        aspectRatio: "wide",
        caption: "Ubiquity"
      },

      {
        type: "text",
        content: `When eating with friends, I often hear the phrase, “phone eats first!” as they take pictures of their aesthetic meal to post on Instagram. While social media was initially created for users to share photos and videos to communicate with their connections, it has evolved into a competition for the most likes, views, and followers. The eye-phone reflects our increasing dependence on the beautifying lens of social media, which often gives way to toxic comparison. \n\nAfter digging out my dad’s broken phone, I used a toothpick and dry paintbrush to sculpt a polymer clay eyeball emerging from the screen and becoming one with the device. To convey how social media has become a vehicle to perpetuate a perfect life, I replicated the classic heart pupil in the eye of Michelangelo’s David. By photographing the product side by side with a photo of my own eye, I created a stark contrast between reality and the illusion of perfection perpetuated by social media. `,
        size: "lg"
      },
    ]
  },
  {
    slug: "accesory-series",  
    title: "Accessory Series - iHuman & Beautiful Restraint",
    date: "2023",
    cover: "/projects/art/03_Accessories Series-iHuman_14x1x5_mixed media, nylon dog collars, computer chips & Beautiful Restraint_9x8x1_mixed media, handcuff, feathers.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/03_Accessories Series-iHuman_14x1x5_mixed media, nylon dog collars, computer chips & Beautiful Restraint_9x8x1_mixed media, handcuff, feathers.jpeg",
        alt: "Accessory Series - iHuman & Beautiful Restraint",
        size: "lg",
        aspectRatio: "wide",
        caption: "Accessory Series - iHuman & Beautiful Restraint"
      },

      {
        type: "text",
        content: `Through accessories, this series conveys my thoughts on difficult societal topics. The first piece was influenced by the tendency for children to be ‘sacrificed’ by pressures of society. First, I altered the dog collars to feature a large computer chip. Then, I scouted students passing by in the school quad and photographed them with their heads together and eyes closed, representing the loss of innocence. Finally, the pop of color in the black and white photo draws the viewer’s attention to the dog collars hanging around their necks.\n\nMy inspiration for the second piece came from the sacred symbolism of birds in ancient civilizations. Considered spiritual creatures representing the will of God, birds represented freedom and divinity. By juxtaposing the contrast between the rigid restraints of handcuffs and beautiful feathers in this surreal earring sculpture, I want to illustrate how a lack of freedom (physical, emotional, psychological) can ‘imprison’ each of us in today’s society.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "parched",  
    title: "Parched",
    date: "2023",
    cover: "/projects/art/05_Parched - Climate Change_23x12x4_cut styrofaom cups, LEDs.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/05_Parched - Climate Change_23x12x4_cut styrofaom cups, LEDs.jpeg",
        alt: "Parched",
        size: "lg",
        aspectRatio: "wide",
        caption: "Parched"
      },

      {
        type: "text",
        content: `Growing up in the Bay Area, the drought became a permanent part of my childhood. I remember my home always had a yellow patchy front lawn, thanks to my parents’ efforts to conserve water. Now, this drought has become the worst in the past 1,200 years. My intention in this piece is to ultimately initiate a dialogue within and between my viewers about the urgency of this situation.\n\nFirst, I wanted to entice the viewer with a beautiful, lyrical-looking structure – ironically made out of a mundane material. I purposely chose styrofoam cups to cut in a way that renders them unable to perform its only function of holding liquid. Planting the seed that I ultimately hope to grow into an alarm, this piece serves as a warning not only to Californians, but viewers from around the globe, about the unassailable fact that the environment is changing. By drawing their attention to this curious sculpture, my narrative will begin an active and urgent dialogue about human caused changes on Earth.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "writers-block",  
    title: "Writer's Block",
    date: "2023",
    cover: "/projects/art/10_Writer_s Block_18s21x10_mixed media, monitor, thumb tacks, acrylic spray, After Effects.jpg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/10_Writer_s Block_18s21x10_mixed media, monitor, thumb tacks, acrylic spray, After Effects.jpg",
        alt: "Writer's Block",
        size: "lg",
        aspectRatio: "wide",
        caption: "Writer's Block"
      },

      {
        type: "text",
        content: `Whether it’s with professional writing or a simple greeting card, most people have experienced writer’s block. My most recent example happens to be while I was writing a college application. In an attempt to find the perfect wording to portray my thoughts, I found myself frequently hitting backspace. Ironically, my temporary block became the inspiration for another expression, as I created this piece shortly after. Contrasting the intense visuals with a lighthearted message, this work is a witty way of poking fun at myself and this universal frustration.\n\nThrough the use of red, a color associated with danger and blood, this piece draws the viewer’s attention while calling for a double-take. By connecting the keyboard in a familiar monitor setup, I invite the viewer to subconsciously imagine themselves typing on the keys that have been replaced with face-up thumbtacks – a sensation that would be extremely painful. Drawing on a corporeal effect, my message goes from visual to visceral. `,
        size: "lg"
      },
    ]
  },
  {
    slug: "cola-wars",  
    title: "Cola Wars",
    date: "2023",
    cover: "/projects/art/12_Cola Wars_17x6x7_mixed media, cola can labels, straws, keyboard, acrylic spray.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/12_Cola Wars_17x6x7_mixed media, cola can labels, straws, keyboard, acrylic spray.jpeg",
        alt: "Cola Wars",
        size: "lg",
        aspectRatio: "wide",
        caption: "Cola Wars"
      },

      {
        type: "text",
        content: `One of the most common icebreakers I hear on the first day of school is, “Do you prefer Coca-Cola or Pepsi?” As I began to study business, this long-time rivalry fascinated me. Just how far was each company willing to go to increase their market share?\n\nUsing a keyboard to represent how each brand continuously seeks to expand through technology, I replaced various keys with a jumble of plastic straws melded together – forming a tangle of connections. Where the number pad is supposed to be, I replaced the key pads with cut up Coke and Pepsi cans. The viewer naturally expects the wording to be right side up, but I purposely placed the logos upside down and rotated to create something askew that would throw off the viewer — conveying the complexities and dynamics that continue to shift in the ongoing globalization of advertisement. Through this piece, I hope to invite the viewer to ponder how the proliferation of technology has contributed to the rise of market saturation and consumerism.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "litter-bug",  
    title: "Litter Bug",
    date: "2023",
    cover: "/projects/art/13_Litter Bug - Bacterial Contamination_7x4x1.5_mixed media, bannaqn, kitty litter.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/13_Litter Bug - Bacterial Contamination_7x4x1.5_mixed media, bannaqn, kitty litter.jpeg",
        alt: "Litter Bug",
        size: "lg",
        aspectRatio: "wide",
        caption: "Litter Bug"
      },

      {
        type: "text",
        content: `I recently read a research article about Toxoplasma gondii, a parasite excreted by cats. Not only does this behavior-altering parasite affect the brains of rats to make them more risk-averse and drawn to cats, it has been discovered that humans can also be affected. By altering the connections between our neurons, this parasite can contribute to schizophrenia, car crashes, and suicides, maybe killing a million people each year.\n\nTo illustrate the unknown danger of a seemingly harmless material like kitty litter, I wanted to create an unexpected composition prompting viewers to do a double take. By gluing kitty litter on something people would innocently consume, i.e., a banana, my intention was to raise awareness that people can inadvertently be affected by this parasite. By combining art with science, I hope to engage each viewer using a unique vehicle to inform and educate.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "in-memoriam",  
    title: "In Memoriam",
    date: "2023",
    cover: "/projects/art/14_Tech Series-In Memoriam - Language Death_7x16x8_mixed media, mixed media, acrylic spray, keyboard, plastic figures.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/14_Tech Series-In Memoriam - Language Death_7x16x8_mixed media, mixed media, acrylic spray, keyboard, plastic figures.jpeg",
        alt: "In Memoriam",
        size: "lg",
        aspectRatio: "wide",
        caption: "In Memoriam"
      },

      {
        type: "text",
        content: `Language death is a phenomenon occurring when a language loses all of its native speakers. Due to cultural assimilation, 90% of current languages are predicted to be extinct within the next fifty years. If we continue to ignore this trend, our world will continue to lose the inherent richness of  diverse communities and cultures.\n\nI was inspired and moved by the creation of the Vietnam Memorial as an homage to lives lost in the war. By replacing the iconic gray memorial with a spray-painted keyboard with missing keys, I want to call attention to words lost as society continues to progress. Using reference photos of viewers at the Vietnam Memorial, I placed mini figurines around the keyboard in a variety of poses, whether it be admiring from afar or reaching up to touch the sculpture. Through this piece, my goal is to prompt the viewer to ponder how we can save the culture and memories lost with the extinction of a language.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "gumball-faces",  
    title: "Gumball Faces (Stop Motion)",
    date: "2023",
    cover: "/projects/art/118b_Gumball Faces_16x6x8_mixed media, gumball machine, glass head, painted ping pong balls.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "video",
        src: "/projects/art/15_Gumball Faces_stop motion, glass head, gumball machine, ping pong balls - HD 720p.mov4",
        caption: "Gumball Faces",
        loop: true,
        autoplay: false
      },
      {
        type: "image",
        src: "/projects/art/118b_Gumball Faces_16x6x8_mixed media, gumball machine, glass head, painted ping pong balls.jpeg",
        alt: "Gumball Faces (Stills)",
        size: "lg",
        aspectRatio: "wide",
        caption: "Gumball Faces (Stills)"
      },

      {
        type: "text",
        content: `As a girl constantly bombarded with images of unrealistic beauty standards, it’s easy to find the flaws in my appearance. This piece reflects my struggle with fighting the urge to change my appearance, ultimately finding confidence in my own skin.\n\nTo convey how teenagers are sacrificing their childhood innocence for superficial desires like plastic surgery in order to conform to society’s standards, I replaced the candies inside a traditional gumball machine with painted ping pong balls representing diverse facial features. With just a turn of the coin slot, one can purchase brand new features, almost as easy as buying a piece of candy. The stop motion animation shows how as the ping pong balls are dispensed, they form a face that quickly changes to different colored eyes, nose shapes, and lip sizes, highlighting the ease at which we can now change our appearances. I created this piece as a warning that if we continue down this path, we may lose our true selves in the process.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "hema-fraud",  
    title: "Hema Fraud",
    date: "2023",
    cover: "/projects/art/16_Hema-Fraud - Elizabeth Holmes_3x12_glass vails, blood, drops of blood in water and food coloring, self.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/16_Hema-Fraud - Elizabeth Holmes_3x12_glass vails, blood, drops of blood in water and food coloring, self.jpeg",
        alt: "Hema Fraud",
        size: "lg",
        aspectRatio: "wide",
        caption: "Hema Fraud"
      },

      {
        type: "text",
        content: `Growing up in the heart of innovation, I am surrounded by stories of college dropouts who started multimillion-dollar companies using cutting-edge technology. Those success stories have shaped the mindsets of young students by attributing money and fame to success. Students live in a state of perpetual anxiety while always striving to be better than the competition to achieve tangible results for self-validation. Despite the ambition-fostering environment in Silicon Valley, we should temper our high expectations with the potential pitfalls of great success. The story of Elizabeth Holmes, a fairytale turned nightmare, illustrates the inevitable downfall when the desire for success becomes entangled with greed. I wanted to replicate the iconic photo of Holmes including the black turtleneck. To add more creative depth to the pose, each one of the blood vials (filled with water and food coloring) includes a drop of my own blood.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "timestamp",  
    title: "Timestamp",
    date: "2023",
    cover: "/projects/art/17_Timestamp_10x5x4_analog clock cast in concrete.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/17_Timestamp_10x5x4_analog clock cast in concrete.jpeg",
        alt: "Timestamp",
        size: "lg",
        aspectRatio: "wide",
        caption: "Timestamp"
      },
      {
        type: "text",
        content: `It comes as no surprise that as a typical teenager, I enjoy a shopping spree at my favorite go-to store. But for me, it’s not Hollister, Urban Outfitters, or Forever 21 – It’s Home Depot. Through my art, I explored how I could manipulate concrete, a material meant for heavy construction, for delicate creative expression.\n\nWith this project, my initial inspiration was to convey my struggle with constantly striving to be productive and fully scheduled. We have often been taught to equate being busy with success, leading us to overwork until we ultimately crack from the pressure – just like the shattered screen of the clock. \n\nBut, just as I was about to place the analog clock inside the prepared concrete mixture, I realized I could use my sculpture to resonate with more people. I quickly set the time to 9:59, the moment the South Tower collapsed in the 9/11 attack. Now, this tower of concrete stands tall with the clock signifying how the moment is stuck in time forever, turning my message from personal to universal.`,
        size: "lg"
      },
    ]
  },
  {
    slug: "unequal-access",  
    title: "Unequal Access",
    date: "2023",
    cover: "/projects/art/04_Unequal Access_18x15x3_mixed media, combination lock, hasp, toilet seat, LEDs.jeg.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/04_Unequal Access_18x15x3_mixed media, combination lock, hasp, toilet seat, LEDs.jeg.jpeg",
        alt: "Unequal Access",
        size: "lg",
        aspectRatio: "wide",
        caption: "Unequal Access"
      },
    ]
  },
  {
    slug: "end-of-innocence",  
    title: "End of Innocence",
    date: "2023",
    cover: "/projects/art/06_End of Innocence_22x14x6_mixed media, Hello Kitty purse, prescription bottles, LEDs.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/06_End of Innocence_22x14x6_mixed media, Hello Kitty purse, prescription bottles, LEDs.jpeg",
        alt: "End of Innocence",
        size: "lg",
        aspectRatio: "wide",
        caption: "End of Innocence"
      },
    ]
  },
  {
    slug: "masquerade-filtration",  
    title: "Masquerade Filtration",
    date: "2023",
    cover: "/projects/art/09_Masquerade Filtration_10x6x9_knitted face sculpture.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/09_Masquerade Filtration_10x6x9_knitted face sculpture.jpeg",
        alt: "Masquerade Filtration",
        size: "lg",
        aspectRatio: "wide",
        caption: "Masquerade Filtration"
      },
    ]
  },
  {
    slug: "disconnect",  
    title: "Disconnect",
    date: "2023",
    cover: "/projects/art/07_Disconnect_34x30x13_mixed media, wire mesh, yarn, LEDs.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/07_Disconnect_34x30x13_mixed media, wire mesh, yarn, LEDs.jpeg",
        alt: "Disconnect",
        size: "lg",
        aspectRatio: "wide",
        caption: "Disconnect"
      },
    ]
  },
  {
    slug: "appealing-to-the-core",  
    title: "Appealing to the Core",
    date: "2023",
    cover: "/projects/art/08_.Appealing to the Core_7x6x5_mixed media, peeled spple, iPhone.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/08_.Appealing to the Core_7x6x5_mixed media, peeled spple, iPhone.jpeg",
        alt: "Appealing to the Core",
        size: "lg",
        aspectRatio: "wide",
        caption: "Appealing to the Core"
      },
    ]
  },
  {
    slug: "dissenting-perspectives",  
    title: "Dissenting Perspectives",
    date: "2023",
    cover: "/projects/art/11_Dissenting Perspectives_20x18x4_mixed media, poured concrete, eyeglasses.jpeg",
    tags: ["art"], 
    content: [
      {
        type: "image",
        src: "/projects/art/11_Dissenting Perspectives_20x18x4_mixed media, poured concrete, eyeglasses.jpeg",
        alt: "Dissenting Perspectives",
        size: "lg",
        aspectRatio: "wide",
        caption: "Dissenting Perspectives"
      },
    ]
  },
  {
    slug: "public-art-club-murals",
    title: "Public Art Club — Campus Murals",
    date: "2022",
    cover: "/projects/art/placeholder-murals.jpg",
    tags: ["art"],
    content: [
      {
        type: "text",
        content:
          "We went from at-home crafts to painting together at lunch—music, laughter, paint everywhere. Seeing classmates stop to take selfies in front of our work made me realize how much beauty can reset the mood of a place."
      },
      {
        type: "image",
        src: "/projects/art/placeholder-murals.jpg",
        alt: "Bulletin board murals",
        size: "lg",
        aspectRatio: "wide",
        caption: "Hills, waterfalls, clouds—pinned up with sore thumbs and big grins."
      }
    ]
  },
];