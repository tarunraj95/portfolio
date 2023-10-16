import officeImg1 from '../assets/images/office1.jpg';
import officeImg2 from '../assets/images/office2.jpg';
import officeImg3 from '../assets/images/office3.jpg';
import education1 from '../assets/images/ed1.jpg';
import education2 from '../assets/images/ed2.jpg';
import education3 from '../assets/images/ed3.jpg';

const CAREER_FIRST_DAY = new Date(2018, 6, 1);
const TODAY = new Date();
const TOTAL_EXP_DIFF = TODAY.getTime() - CAREER_FIRST_DAY.getTime();
const MONTH = 1000 * 60 * 60 * 24 * 31;

export const TOTAL_EXP_YEARS = Math.floor(TOTAL_EXP_DIFF / (MONTH * 12));
export const EXP_MONTHS = Math.floor((TOTAL_EXP_DIFF % (MONTH * 12)) / (MONTH));

export const WORK_TIMELINE = {
  heading: 'WORK',
  timelineItems: [
    {
      title: 'Razorpay',
      duration: "Jan'22 - CURRENT",
      body: `Actively engaged in enhancing Razorpay's Checkout user experience through daily contributions. Additionally, leading a frontend team to internationalize Razorpay's product offerings.`,
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg1
    },
    {
      title: 'Airtel Digital (Wynk)',
      duration: "Apr'21 - Jan'22",
      body: 'Built new screens and features powered by React Native and ReactJs on Airtel Thanks app (Feed).  My work here involved refactoring the existing codebase, developing optimized new solutions and dealing extensively between native frameworks (Android / IOS) and React Native.',
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg1
    },
    {
      title: 'FLYNOTE',
      duration: "Jan'19 - Mar'21",
      body: 'Built websites, internal tools, landing pages, mobile applications and developing solutions for new challenges. This period has strengthened my knowledge over ReactJs,  HTML/CSS, Angular, React Native.',
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg2
    },
  ]
};

export const EDUCATION_TIMELINE = {
  heading: 'EDUCATION',
  timelineItems: [
    {
      title: 'Btech.',
      duration: '2014 - 2018',
      body: "With more resources now in my reach, I started diving and exploring more in this realm of advancing technology. In this Path, my knack of coding turned out to be a hobby and I developed websites and my second C/C++ game (Road Rage). In this period, I also took part in Hackathons and even got 1st with my team in SMART INDIA HACKATHON'17.",
      height: {
        mobile: 230,
        desktop: 240
      },
      image: education1
    },
    {
      title: '12th',
      duration: '2014',
      body: "After choosing Computer Science,  I started experimenting with the knowledge that I have gained and created my first game 'Who wants to be a millionaire.'",
      height: {
        mobile: 150,
        desktop: 160
      },
      image: education2
    },
    {
      title: '10th',
      duration: '2012',
      body: "The point where the passion for coding started and remained with me forever, where i made my mind to make compute science my career.",
      height: {
        mobile: 175,
        desktop: 160
      },
      image: education3
    }
  ]
};

export const LINKS = {
  facebook: 'https://www.facebook.com/tarun.khanna.184',
  instagram: 'https://www.instagram.com/tarun_raj_khanna/?hl=en',
  linkedin: 'https://www.linkedin.com/in/tarunraj95/',
  resume: 'https://bit.ly/2Y3hHnb',
  email: 'mailto:tarunrajkhanna@gmail.com'
}

export const TECH_STACK = {
  languages: [
    'Javascript',
    'HTML',
    'CSS',
    'C/C++'
  ],
  frameworks: [
    'React',
    'Svelte',
    'Angular',
    'React Native',
    'NodeJs',
    'Typescript'
  ],
  tools: [
    'Redux',
    'GTM',
    'NextJs',
    'Git',
    'Jest',
    'MongoDb',
    'AdobeXD'
  ]
}