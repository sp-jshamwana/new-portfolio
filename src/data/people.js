const peopleData = [
    {
      name: 'James Baldwin',
      context: "Baldwin said 'I just want to be an honest man and a good writer.' Not only do I agree with this sentiment, but I love it when someone can distill their purpose and values succintly. He remains my favorite author.",
      questions: [
        'What inspired you to write "The Fire Next Time"?',
        'How do you see the role of the writer in society?'
      ],
      onlineWriter: false
    },
    {
      name: 'Haruki Murakami',
      context: "I'm a firm believer in reading your favorite books multiple times. I've done that with 3 Murakami books, from novels to non-fiction. His memoir on running and writing is dear to me.",
      questions: [
        'What is the meaning behind "Kafka on the Shore"?',
        'How do you develop your characters?'
      ],
      onlineWriter: false
    },
    {
      name: 'Marcus Aurelius',
      context: "I considered limiting this list to modern-aged people. But I just had to include Aurelius. His writings on discipline and stillness have transformed my life.",
      questions: [
        'What are your views on leadership?',
        'How can we apply stoicism in modern life?'
      ],
      onlineWriter: false
    },
    {
      name: 'Derek Sivers',
      context: "Derek sold his company for $30M and gave it all away. Now he's a successful author who still prioritizes raising his son and having conversations with his readers. That's pretty damn cool.",
      questions: [
        'What motivates you to create?',
        'How do you approach decision-making?'
      ],
      onlineWriter: false
    },
    {
      name: 'Noah Smith',
      context: "Noah's the most prolific writer on the internet. The rate at which he produces unique, well-researched and enterataining articles astounds me.",
      questions: [
        'What are your thoughts on the current economy?',
        'How can we achieve sustainable growth?'
      ],
      onlineWriter: false
    },
    {
      name: 'Sam Harris',
      context: "The book 'Lying' was a seminal read for me. It forced me to confront how I lie to myself and others, and the level of honesty I aspire to have with my future kids.",
      questions: [
        'What is the essence of your mindfulness practice?',
        'How do you approach controversial topics?'
      ],
      onlineWriter: false
    },
    {
      name: 'Shaan Puri',
      context: "I've been watching the MFM podcast for 4 years now. That's a lot of time with Sam and Shaan in my ears. A great entrepreneur and storyteller. Many aspects of his life that I'm trying to emulate.",
      questions: [
        'What are the key factors for a successful startup?',
        'How do you stay motivated?'
      ],
      onlineWriter: false
    },
    {
      name: 'Ryan Holiday',
      context: "Ryan introduced me to Marcus Aurelius, Seneca and the other Stoics. A profilic writer with an important job of translating ancient wisdom for us regular folk.",
      questions: [
        'How do you integrate stoicism into daily life?',
        'What inspired you to write "The Obstacle Is the Way"?'
      ],
      onlineWriter: false
    },
    {
      name: 'Paul Graham',
      context: "The norotious BIG? Nah, the notoious PG. In addition to co-founding the beheamoth that Y-Combinator is, PG writes about startup lessons and tech insights with such clarity and memorability, at scale.",
      questions: [
        "What's the most important insight from your 'How to do good work' essay?",
        'Boil down your most important startup advice into a sentence. '
      ],
      onlineWriter: false
    },
    {
      name: 'Jason Fried',
      context: "I'm a sucker for a great entrepreneur who can also write. Jason's a master of product, and has written literally 1000+ blog posts over the past two decades.",
      questions: [
        "What inspired you to write 'Founders' Letters,' and how have they impacted your relationship with your team and customers?",
        "What recent change at 37signals excites you the most, and how do you see it shaping the company's future?"
      ]
    },
    {
      name: "Seneca",
      context: "'We suffer more often in imagination than in reality.' - this mantra alone would warrant his place on this list. But several other lessons from his writings 'On The Shortness of Life' and 'Letters to Lucilius' have become pillars of my life.",
      questions: [

      ],
      onlineWriter: false
    },
    {
      name: "Rei Kawakubo",
      context: "Where to start. As perhaps the biggest contributor to androgenous fashion, Kawakubo is a big reason why I comfortably experiment with hand bags and skirts as a heterosexual man. Additionally, I'm astounded by her business acumen, longevity, refusal to conform, and enticing contrast between personal introversion and artstic extroversion.",
      questions: [
  
      ],
      onlineWriter: false
    },
    {
      name: "David Senra",
      context: "Technically not a writer, but David's 'Founders' podcast injects me with adrenaline and timeless lessons whenever I listen to it. Favorite eps: Jay-Z, Charlie Munger, Anna Wintour. David's the most prolific student and documentarian of entrepreneurs ever to live.",
      questions: [

      ],
      onlineWriter: true
    },
    {
      name: "Ben Thompson",
      context: "Ben says that he has an overall view of the world (this view is his machine), and when something in the tech world happens, he plugs it into the machine and 'out pops a conclusion'. But the machine is premised on years of scholarship and writing. This gave me a new perspective on knowledge acquisition, and how I can be consistent for a decade plus.",
      questions: [

      ],
      onlineWriter: true
    },
    {
      name: "David Perell",
      context: "A heuristic for finding awesome people: think of something you enjoy, then find the person most obsessed with that thing. David, as demonstrated in the How I Write podcast, is obsessed with great writing and studies it publicly in the most beautiful format! The episodes with The Cultural Tutor, Mark Andreesen, and Mark Forsyth are some of my favorites.",
      questions: [

      ],
      onlineWriter: true
    }
  ];
  
  export default peopleData;
  