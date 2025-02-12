const channelsData = [
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s160-c-k-c0x00ffffff-no-rj',
        name: 'Net Ninja',
        info: 'Black-belt your web development skills. Over 2000 free programming tutorial videos',
        details: {
            subs: '1.44M subs',
            vids: '2,346 vids'
        },
        link: 'https://www.youtube.com/@NetNinja/videos'
    },
    {
        topics: ['all', 'design', 'coding'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_kJqI0Cug625PL9yB10dRj3DxVfVWDaSbCX3U3hoXp3BwI=s160-c-k-c0x00ffffff-no-rj',
        name: 'DesignCourse',
        info: "Hi, I'm Gary. I've created close to 100 courses from graphic design to advanced frontend development. I teach full stack development, tutorials regarding UI/UX,  Graphic Design, Frontend Dev and more!",
        details: {
            subs: '1.1M subs',
            vids: '1,271 vids'
        },
        link: 'https://www.youtube.com/@DesignCourse/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mQczyuvnXgEq8fApoOXpG2Yw_JKYqRA7kVOhNFuHLz9Vc=s160-c-k-c0x00ffffff-no-rj',
        name: 'Kevin Powell',
        info: "Helping you learn how to make the web, and make it look good while you're at it.I'll be bringing you How Tos and Tutorials, as well as simple tips and tricks, with a big focus on helping people see how wonderful CSS is!",
        details: {
            subs: '907K subs',
            vids: '791 vids'
        },
        link: 'https://www.youtube.com/@KevinPowell/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s160-c-k-c0x00ffffff-no-rj',
        name: 'Traversy Media',
        info: 'Features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks',
        details: {
            subs: '2.23M subs',
            vids: '976 vids'
        },
        link: 'https://www.youtube.com/@TraversyMedia/videos'
    },
    {
        topics: ['all', 'entertainment'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_nKja8YHk1IoiGA0BtmeMrh0--kYPPel9UwYhAjB7un4A=s160-c-k-c0x00ffffff-no-rj',
        name: 'ArtosisCasts',
        info: "Hi, I'm Dan 'Artosis' Stemkoski, the Professional Commentator and Analyst. On this channel, I'll be uploading a new Cast of a Pro BroodWar game every day! I hope you enjoy!",
        details: {
            subs: '38.1K subs',
            vids: '1,116 vids'
        },
        link: 'https://www.youtube.com/@ArtosisCasts/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/LsV7kznIwsOqK3p5TyDJvyrJujx1a6d0V5K8nc_U5C7sx9F5idcsdQEgNRypxPZmhtsAxdLztSU=s160-c-k-c0x00ffffff-no-rj',
        name: 'Coding in Public',
        info: "My name is Chris Pennington. I’m a relative beginner to development and enjoy teaching what I’m learning to others. I mostly teach beginner to intermediate web dev on the channel through project and component builds.",
        details: {
            subs: '43.7K subs',
            vids: '354 vids'
        },
        link: 'https://www.youtube.com/@CodinginPublic/videos'
    },
    {
        topics: ['all', 'design'],
        image: 'https://yt3.googleusercontent.com/BogFk7DBtN-xg3R2qP3WZfWe0R0nofZp4UkFt7RGAeOWwwM6Lo6nAEVssGRT6nVEF6mvxRPhTg=s160-c-k-c0x00ffffff-no-rj',
        name: 'Satori Graphics',
        info: "It doesn't matter if you're a beginner designer or a more seasoned graphic designer, you can find something useful here for sure. There are awesome tutorials on graphic design theory, poster designing, logo designing, brand identity, and much much more.",
        details: {
            subs: '1.31M subs',
            vids: '1,096 vids'
        },
        link: 'https://www.youtube.com/@SatoriGraphics/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/0eIqxAMRNI9gnG0HXSBnpFCmV5E5UjsxzZ3HtvG9Q9PD8QxnZRE9QWvuoiDS8HFEgeFd1Hc4=s160-c-k-c0x00ffffff-no-rj',
        name: 'Dave Gray',
        info: "Web Development tutorials with full courses on HTML, CSS, JavaScript, React, Node.js and more! Keep striving for progress over perfection. And a little progress every day goes a very long way.",
        details: {
            subs: '306K subs',
            vids: '416 vids'
        },
        link: 'https://www.youtube.com/@DaveGrayTeachesCode/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/LnD0yL5NAb8yvZu2d25qLZ-oAehUISz9tfe3aN36syGqTKbs4irbPeVUJfNlmVFRzel7KHV3-uo=s160-c-k-c0x00ffffff-no-rj',
        name: 'Lun Dev Code',
        info: "HTML CSS Javascript code tutorial, learning HTML, learning CSS, learning Javascript, get code free HTML CSS JAVASCRIPT, animation code. reponsive code. Here we share HTML CSS Javascript code completely free. The videos focus on creating animation and responsive effects for the website.",
        details: {
            subs: '85.6K subs',
            vids: '197 vids'
        },
        link: 'https://www.youtube.com/@lundeveloper/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s160-c-k-c0x00ffffff-no-rj',
        name: 'Web Dev Simplified',
        info: "Web Dev Simplified is all about teaching web development skills and techniques in an efficient and practical manner. Web Dev Simplified also deep dives into advanced topics using the latest best practices for you seasoned web developers.",
        details: {
            subs: '1.56M subs',
            vids: '691 vids'
        },
        link: 'https://www.youtube.com/@WebDevSimplified/videos'
    },
    {
        topics: ['all', 'coding', 'design'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s160-c-k-c0x00ffffff-no-rj',
        name: 'freeCodeCamp.org',
        info: "Learn to code for free.",
        details: {
            subs: '9.48M subs',
            vids: '1,654 vids'
        },
        link: 'https://www.youtube.com/@freecodecamp/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/ir8U3eSuOwEa-9d4tE3l-61u4pttVRz9Wbm-dJ3kw9ivOUVz6rylK7IFgwOFoTsPVlzJkTTUi1A=s160-c-k-c0x00ffffff-no-rj',
        name: 'Steve Griffith - Prof3ssorSt3v3',
        info: "The videos on this channel are largely about web design & development with a good dose of mobile development thrown in just for fun. I hope that these videos help people learn to love JavaScript as much as I do.",
        details: {
            subs: '100K subs',
            vids: '928 vids'
        },
        link: 'https://www.youtube.com/@SteveGriffith-Prof3ssorSt3v3/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/s5Eex4ZIqBSe2y2k5aidi71WGkfEJORkY-Hn2QDVMJxnkpRB5FdlOiHC9V1yyLuxSaCv5JCVYmM=s160-c-k-c0x00ffffff-no-rj',
        name: 'dcode',
        info: "High quality web development tutorials. On my channel you can find HTML, CSS & JavaScript tutorials, PHP tutorials, Node.js tutorials and Rust tutorials, as well as many other topics covered in web development. I also enjoy building JavaScript projects every now and then",
        details: {
            subs: '131K subs',
            vids: '759 vids'
        },
        link: 'https://www.youtube.com/@dcode-software/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/lFaxJMueU41ahLoOf4eJClqPQ9VqUvb7lwEJuf1MOrKMWZmw-P2VI9wLTo2IIDbR4RcidDwNmQ=s160-c-k-c0x00ffffff-no-rj',
        name: 'Dmitry Mayorov',
        info: "Easy to follow web tutorials, and more!",
        details: {
            subs: '2.3K subs',
            vids: '20 vids'
        },
        link: 'https://www.youtube.com/@dmtrmrv/videos'
    },
    {
        topics: ['all', 'coding'],
        image: 'https://yt3.googleusercontent.com/6sy2xPMxXUUk3yXvpCoZrziuFs8sRD75NRZn-zSxkNHcbwpDCJ4wOKmw-WyEoP3GeIVWaTNzOg=s160-c-k-c0x00ffffff-no-rj',
        name: 'Joy of Code',
        info: "Sharing the joy of code.",
        details: {
            subs: '32.7K subs',
            vids: '172 vids'
        },
        link: 'https://www.youtube.com/@JoyofCodeDev/videos'
    },
    {
        topics: ['all', 'food&drinks', 'entertainment'],
        image: 'https://yt3.googleusercontent.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s160-c-k-c0x00ffffff-no-rj',
        name: 'Gordon Ramsay',
        info: "The home of Gordon Ramsay on YouTube. Recipe tutorials, tips, techniques and the best bits from the archives. New uploads every week - subscribe now to stay up to date!",
        details: {
            subs: '20.7M subs',
            vids: '1,715 vids'
        },
        link: 'https://www.youtube.com/@gordonramsay/videos'
    },
    {
        topics: ['all', 'calisthenics'],
        image: 'https://yt3.googleusercontent.com/qXC3TS-oiAMDgPuE3eucuP8BRGkmY-BCeO7wMAkXpU6ouMlFZ61CqLTmcUvFwgFvfeVzBaPN=s160-c-k-c0x00ffffff-no-rj',
        name: 'THENX',
        info: "ELITE FITNESS TRAINING BY CHRIS HERIA",
        details: {
            subs: '7.77M subs',
            vids: '423 vids'
        },
        link: 'https://www.youtube.com/@OFFICIALTHENXSTUDIOS/videos'
    },
    {
        topics: ['all', 'food&drinks'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mEq4ODx1eVQ3GUtCUOC6GG-cwZ3OgiZPy-R3HILvg_IA=s160-c-k-c0x00ffffff-no-rj',
        name: 'James Hoffmann',
        info: "Hi! My name is James, and I make videos about anything and everything to do with coffee, occasionally food and sometimes business/entrepreneurship. I create how-tos, guides, reviews, vlogs, video essays and mini-documentary films.",
        details: {
            subs: '2.09M subs',
            vids: '356 vids'
        },
        link: 'https://www.youtube.com/@jameshoffmann/videos'
    },
    {
        topics: ['all', 'calisthenics'],
        image: 'https://yt3.googleusercontent.com/ytc/AIdro_mG9pxSeROwFMpRXTUY4VDG8fi2Q_0tZcru_MY4DDxuWOk=s160-c-k-c0x00ffffff-no-rj',
        name: 'CHRIS HERIA',
        info: "WWW.CHRISHERIA.COM",
        details: {
            subs: '5M subs',
            vids: '317 vids'
        },
        link: 'https://www.youtube.com/@CHRISHERIA/videos'
    },    
    {
        topics: ['all', 'entertainment'],
        image: 'https://yt3.googleusercontent.com/08HfDUT54rSPU2tHruPVN45roDrYEmLl9rurnd4Ta6gu7Wbtu_jed9c3JVQLGUx28UIW_cR3=s160-c-k-c0x00ffffff-no-rj',
        name: 'ANATOLY',
        info: "Be Happy Stay Strong",
        details: {
            subs: '4.89M subs',
            vids: '105 vids'
        },
        link: 'https://www.youtube.com/@vladimirfitness/videos'
    },
    {
        topics: ['all', 'design'],
        image: 'https://yt3.googleusercontent.com/AIyllFLfT0MAYlBG_xeXJR-pC57rSNG2zKYs0WWN0UlvdrtpXNxRnJgTxgzRszfbM2AYHyr7iFM=s160-c-k-c0x00ffffff-no-rj',
        name: 'Malewicz',
        info: "Hello! I want to redefine and disrupt education. This channel is about design, building companies and having a happy life in the process. Sharing my over 23 years of experience with you.",
        details: {
            subs: '143K subs',
            vids: '392 vids'
        },
        link: 'https://www.youtube.com/@MalewiczHype/videos'
    },
    {
        topics: ['all', 'entertainment', 'food&drinks'],
        image: 'https://i.ytimg.com/vi/zu-OuG13UO4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCGR__PbNfPhJkYT2EoYFxn9q74Yw',
        name: 'Two Greedy Italians',
        info: "Chefs Antonio Carluccio and Gennaro Contaldo tour Italy to discover how their home country's culture has changed since they left more than 40 years ago, and how this has affected the way the population eats.",
        details: {
            subs: '9.08K subs',
            vids: '10 vids'
        },
        link: 'https://www.youtube.com/playlist?list=PLAUDZlFZH83vQ_rBvO7ODNIe5vQviadWI'
    }
];

export { channelsData };