import officeImg1 from '../assets/images/office1.jpg';
import officeImg2 from '../assets/images/office2.jpg';
import officeImg3 from '../assets/images/office3.jpg';
import education1 from '../assets/images/ed1.jpg';
import education2 from '../assets/images/ed2.jpg';
import education3 from '../assets/images/ed3.jpg';


export const WORK_TIMELINE = {
  heading: 'WORK',
  timelineItems: [
    {
      title: 'FLYNOTE',
      duration: "Jan'19 - CURRENT",
      body: 'Building websites, internal tools, landing pages, mobile applications and developing solutions for new challenges. This period had boosted my knowledge over  ReactJs,  HTML/CSS, Angular, React Native.',
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg1
    },
    {
      title: 'Rentickle',
      duration: "July'18 - Dec'18",
      body: 'Worked on building an internal dashboard on MEAN stack to increase the workflow efficiency of the company by providing a single tool for all departments (salesforce, support, operations and others). ',
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg2
    },
    {
      title: 'Couch Fashion',
      duration: "Jan'18 - Mar'18",
      body: 'In this short intern term, I worked on building prototypes of mobile application based on React Native and  alongside, writing tools to automate scraping of useful data for the company.',
      height: {
        mobile: 175,
        desktop: 200
      },
      image: officeImg3
    }
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
  resume: 'https://drive.google.com/file/d/1BoyvGzg3-jg_vpr23BzVQYy1ODpxPsJx/view'
}