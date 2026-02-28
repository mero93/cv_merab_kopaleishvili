const body = document.body;

const certificates = [
  {
    name: 'PeopleCert for Angular',
    description:
      'Software development skills in Angular, Specialist Certificate Specialist Certificate',
    date: '24 Mar 2025',
  },
];

const trainings = [
  {
    name: 'RS School JS / Front-end:',
    description:
      'Main subjects of Training: Javascript, Typescript, Angular/NextJS framework, functional programming, object-oriented programming, design patterns,clean code principles,course project: interactive, AI-aided app for JS, TS training/preparing for interview',
    date: 'September 9th, 2025 - Mar 17th, 2026',
  },
  {
    name: 'EPAM [Fundamentals] Java, WCA #21:',
    description:
      'Main subjects of Training: Java, object-oriented programming, Spring framework, Spring Boot, different design patterns, designing MVC projects, RESTful API, course Project: Book Store App',
    date: 'Oct 17th, 2025 - Feb 23rd, 2026',
  },
  {
    name: 'GITA International Certification Program, New Horizons Bulgaria Angular Frontend Programming:',
    description:
      'Main subjects of Training: Javascript, Typescript, Angular framework, designing app with RESTful API and Angular client',
    date: 'Oct 2024 - Feb 2025',
  },
  {
    name: 'EPAM Full-Stack Web-Development Boot Camp:',
    description:
      'Main subjects of Training: C#, object-oriented programming, ASP.NET, different design patterns, designing MVC projects, RESTful API, designing app with ASP.NET api and Angular client',
    date: 'Feb 2022 - Aug 2023',
  },
];

const educations = [
  {
    name: 'Agricultural University of Georgia, Tbilisi, Georgia',
    date: 'Sept 2020 - Jul 2022',
  },
  {
    name: 'Agricultural University of Georgia, Tbilisi, Georgia',
    date: 'Oct 2012 - Jun 2017',
  },
  {
    name: 'Erasmus Mundus Education Program “Infinity”:',
    description: 'School of Architecture of University of Lisbon, Lisbon, Portugal',
    date: 'Sept 2014 - Jul 2015',
  },
];

const fullstackApps = [
  {
    name: 'E-Commerce app:',
    hostedLink: 'https://techno-eshop-d7f6c2d02709.herokuapp.com/',
    hostedLinkText: 'techno-eshop',
    description:
      'E-Commerce App with general products. Each product can have any set of attributes and to enforce uniformity admin role can use prototypes. <br><b>Stack:</b> ASP.NET, PostgreSQL, Angular, Angular Material',
    repoLink: 'https://github.com/mero93/technoEShop',
  },
  {
    name: 'Book Store app',
    description:
      'Catalog App for book store. Application is part of EPAM Java training course. <br><b>Stack:</b> Java, Spring Framework, H2 in-memory database, Angular, Angular Material',
    repoLink: 'https://github.com/mero93/java-angular-bookstore-app',
  },
];

const frontendApps = [
  {
    name: 'WebSocket-based chat app:',
    hostedLink: 'https://fun-chat-mero93.netlify.app/',
    hostedLinkText: 'Fun Chat',
    additionalResourceText: 'To run App locally host server:',
    additionalResourceLink: 'https://github.com/rolling-scopes-school/fun-chat-server/tree/main',
    videoDemo: 'https://www.youtube.com/watch?v=ITAYBL3gve8',
  },
  {
    name: 'Task-Tracking app:',
    hostedLink: 'https://momentum-mero93.netlify.app/',
    hostedLinkText: 'momentum-app',
    repoLink: 'https://github.com/mero93/momentum-project',
  },
  {
    name: 'Canvas Api Puzzle Game:',
    hostedLink: 'https://rolling-scopes-school.github.io/mero93-JSFE2025Q3/rss-puzzle/',
    hostedLinkText: 'RSS Puzzle',
    description:
      'App is made with a heavy use of Canvas API. Solve puzzle by placing correct pieces together or by solving a sentence',
  },
  {
    name: 'Logic Game:',
    hostedLink: 'https://rolling-scopes-school.github.io/mero93-JSFE2025Q3/pair-em-up/',
    hostedLinkText: 'Pick `Em Up',
    description:
      'Pair together equal numbers to gain 1 point, two numbers that equal 10 to gain 2 points, or two fives to gain 3 points! Race timer and reach your goal to win the game!',
  },
  {
    name: 'Portfolio app:',
    hostedLink: 'https://rolling-scopes-school.github.io/mero93-JSFE2025Q3/portfolio/',
    hostedLinkText: 'Portfolio',
  },
  {
    name: 'Virtual Music Kit app:',
    hostedLink: 'https://rolling-scopes-school.github.io/mero93-JSFE2025Q3/virtual-music-kit/',
    hostedLinkText: 'Music Kit',
  },
  {
    name: 'Coffee House app:',
    hostedLink: 'https://rolling-scopes-school.github.io/mero93-JSFEQS2025Q3/coffee-house/',
    hostedLinkText: 'Coffee House',
  },
];

const skillData = {
  frontEnd: {
    sectionName: 'Front-End',
    sectionIcon: 'fa-code',
    skills: [
      { name: 'HTML', progress: 'progress-100' },
      { name: 'CSS', progress: 'progress-100' },
      { name: 'JavaScript', progress: 'progress-100' },
      { name: 'Typescript', progress: 'progress-100' },
      { name: 'Angular', progress: 'progress-80' },
      { name: 'Angular Material', progress: 'progress-60' },
      { name: 'RxJS', progress: 'progress-60' },
      { name: 'React', progress: 'progress-40' },
      { name: 'NextJS', progress: 'progress-40' },
    ],
  },
  backEnd: {
    sectionName: 'Back-End',
    sectionIcon: 'fa-code',
    skills: [
      { name: 'C#', progress: 'progress-80' },
      { name: 'ASP.NET', progress: 'progress-60' },
      { name: 'EF Core', progress: 'progress-80' },
      { name: 'AutoMapper', progress: 'progress-80' },
      { name: 'Microsoft Identity', progress: 'progress-60' },
      { name: 'PostgreSQL', progress: 'progress-60' },
      { name: 'Restful API', progress: 'progress-80' },
      { name: 'ExpressJS', progress: 'progress-40' },
      { name: 'NestJS', progress: 'progress-40' },
      { name: 'TypeORM', progress: 'progress-40' },
      { name: 'Java', progress: 'progress-60' },
      { name: 'Spring', progress: 'progress-40' },
    ],
  },
  languages: {
    sectionName: 'Languages',
    sectionIcon: 'fa-language',
    skills: [
      { name: 'Georgian', progress: 'progress-100' },
      { name: 'English', progress: 'progress-80' },
      { name: 'Russian', progress: 'progress-60' },
    ],
  },
};

function initializePage() {
  createHeader();
  createMain();
  createFooter();
}

initializePage();

function createHeader() {
  const header = document.createElement('header');

  const avatarContainer = createAvatar();

  const name = document.createElement('h1');
  name.innerText = 'Merab Kopaleishvili';

  const occupation = document.createElement('p');
  occupation.innerText = 'Full-Stack Web Developer';
  occupation.classList.add('occupation');

  const contactInfo = createContactInfo();

  header.append(avatarContainer, name, occupation, contactInfo);

  body.appendChild(header);
}

function createAvatar() {
  const avatarContainer = document.createElement('div');
  avatarContainer.classList.add('avatar-container');

  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.src = 'public/avatar.jpg';

  avatarContainer.appendChild(avatar);

  return avatarContainer;
}

function createContactInfo() {
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  const infoData = [
    { icon: ['fa-phone'], link: 'tel:+995577442859', text: '+995 57 744 2859' },
    {
      icon: ['fa-envelope'],
      link: 'mailto:merabkopaleishvili1993@gmail.com/',
      text: 'merabkopaleishvili1993@gmail.com',
    },
    { icon: ['fa-brands', 'fa-github'], link: 'https://github.com/mero93/', text: 'mero93' },

    {
      icon: ['fa-brands', 'fa-linkedin'],
      link: 'https://www.linkedin.com/in/m-kopaleishvili/',
      text: 'linkedin.com/in/m-kopaleishvili',
    },
  ];

  for (const info in infoData) {
    const infoPiece = createContactInfoPiece(
      infoData[info].icon,
      infoData[info].link,
      infoData[info].text,
    );
    contactInfo.appendChild(infoPiece);
  }

  return contactInfo;
}

function createContactInfoPiece(icons, link, text) {
  const infoLink = document.createElement('a');
  infoLink.href = link;

  const infoIcon = document.createElement('i');
  infoIcon.classList.add('fa-solid');

  for (const icon of icons) {
    infoIcon.classList.add(icon);
  }

  const infoText = document.createElement('h4');
  infoText.innerText = text;

  infoLink.append(infoIcon, infoText);

  return infoLink;
}

function createMain() {
  const main = document.createElement('main');

  const mainSection = createMainSection();
  const sidebar = createSidebar();

  main.append(mainSection, sidebar);

  body.appendChild(main);
}

function createMainSection() {
  const mainSection = document.createElement('aside');
  mainSection.classList.add('main-section');

  const aboutSection = createAboutMeSection();
  const certificationSection = createCertificateSection();
  const trainingSection = createTrainingCodingExperience();
  const generalEducationSection = createGeneralEducation();
  const fullstackAppSection = createFullstackApps();
  const frontendAppSection = createFrontendApps();

  mainSection.append(
    aboutSection,
    certificationSection,
    trainingSection,
    fullstackAppSection,
    frontendAppSection,
    generalEducationSection,
  );

  return mainSection;
}

function createAboutMeSection() {
  const about = document.createElement('section');

  const header = createHeaderWithIcon('fa-user', 'About Me:');

  const text = document.createElement('p');
  text.innerHTML = `I'm a beginner <b>Full Stack Developer</b> focused on building
                    practical experience. Eager to learn and contribute!`;

  about.append(header, text);

  return about;
}

function createCertificateSection() {
  const certificateSection = document.createElement('section');

  const header = createHeaderWithIcon('fa-certificate', 'Certification:');
  certificateSection.appendChild(header);

  for (const certificate in certificates) {
    const certificateElement = createCertificate(
      certificates[certificate].name,
      certificates[certificate].description,
      certificates[certificate].date,
    );
    certificateSection.appendChild(certificateElement);
  }

  return certificateSection;
}

function createTrainingCodingExperience() {
  const trainingSection = document.createElement('section');

  const header = createHeaderWithIcon('fa-book-open', ' Trainings and Coding Experience:');
  trainingSection.appendChild(header);

  for (const training in trainings) {
    const trainingElement = createCertificate(
      trainings[training].name,
      trainings[training].description,
      trainings[training].date,
    );
    trainingSection.appendChild(trainingElement);
  }

  return trainingSection;
}

function createGeneralEducation() {
  const educationSection = document.createElement('section');

  const header = createHeaderWithIcon('fa-graduation-cap', 'General Education:');
  educationSection.appendChild(header);

  for (const education in educations) {
    const educationElement = createCertificate(
      educations[education].name,
      educations[education].description,
      educations[education].date,
    );
    educationSection.appendChild(educationElement);
  }

  return educationSection;
}

function createFullstackApps() {
  const fullstackAppSection = document.createElement('section');

  const header = createHeaderWithIcon('fa-globe', 'Full Stack Apps:');
  fullstackAppSection.appendChild(header);

  for (const app in fullstackApps) {
    const appElement = createApp(fullstackApps[app]);
    fullstackAppSection.appendChild(appElement);
  }

  return fullstackAppSection;
}

function createFrontendApps() {
  const frontendAppSection = document.createElement('section');

  const header = createHeaderWithIcon('fa-file-code', ' Front-end Apps:');
  frontendAppSection.appendChild(header);

  for (const app in frontendApps) {
    const appElement = createApp(frontendApps[app]);
    frontendAppSection.appendChild(appElement);
  }

  return frontendAppSection;
}

function createApp(data) {
  const app = document.createElement('div');
  app.classList.add('app-container');

  const appHeader = document.createElement('div');
  appHeader.classList.add('app-line');

  const appTitle = document.createElement('h4');
  appTitle.innerText = data.name;
  appHeader.appendChild(appTitle);

  if (data.hostedLink) {
    const appLink = document.createElement('a');
    appLink.href = data.hostedLink;
    appLink.innerText = data.hostedLinkText ?? 'Link';
    appHeader.appendChild(appLink);
  }

  app.append(appHeader);

  if (data.description) {
    const appDescription = document.createElement('p');
    appDescription.innerHTML = data.description;
    app.appendChild(appDescription);
  }

  if (data.additionalResourceLink) {
    const resourceLine = document.createElement('div');
    resourceLine.classList.add('app-line');
    const appAdditionalResource = document.createElement('p');
    appAdditionalResource.innerText = data.additionalResourceText ?? 'Additional Resources: ';

    const appAdditionalResourceLink = document.createElement('a');
    appAdditionalResourceLink.href = data.additionalResourceLink;
    appAdditionalResourceLink.innerText = 'Link';

    resourceLine.append(appAdditionalResource, appAdditionalResourceLink);
    app.appendChild(resourceLine);
  }

  if (data.videoDemo) {
    const videoDemoLine = document.createElement('div');
    videoDemoLine.classList.add('app-line');
    const appVideoDemo = document.createElement('p');
    appVideoDemo.innerText = 'Video Demo: ';

    const appVideoDemoLink = document.createElement('a');
    appVideoDemoLink.href = data.videoDemo;
    appVideoDemoLink.innerText = 'video';

    videoDemoLine.append(appVideoDemo, appVideoDemoLink);
    app.appendChild(videoDemoLine);
  }

  if (data.repoLink) {
    const appRepoLink = document.createElement('a');
    appRepoLink.href = data.repoLink;
    appRepoLink.innerText = 'Repo link';
    app.appendChild(appRepoLink);
  }

  return app;
}

function createCertificate(name, description, date) {
  const certificate = document.createElement('div');

  const certificateName = document.createElement('h4');
  certificateName.innerText = name;
  certificate.appendChild(certificateName);

  if (description) {
    const certificateDescription = document.createElement('p');
    certificateDescription.innerText = description;
    certificate.appendChild(certificateDescription);
  }

  const certificateDate = document.createElement('p');
  certificateDate.classList.add('date');
  certificateDate.innerText = date;

  certificate.appendChild(certificateDate);

  return certificate;
}

function createSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');

  for (const key in skillData) {
    const skillList = createSkillList(
      skillData[key].sectionIcon,
      skillData[key].sectionName,
      skillData[key].skills,
    );
    sidebar.append(skillList);
  }

  return sidebar;
}

function createSkillList(icon, text, skills) {
  const section = document.createElement('section');

  const header = createHeaderWithIcon(icon, text);
  section.append(header);

  for (const skill in skills) {
    const skillWrapper = createSkill(skills[skill]);
    section.append(skillWrapper);
  }

  return section;
}

function createSkill(skill) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('skill-wrapper');

  const skillName = document.createElement('h4');
  skillName.innerText = skill.name;

  const skillProgress = document.createElement('span');
  skillProgress.classList.add('skill-progress');
  skillProgress.classList.add(skill.progress);

  wrapper.append(skillName, skillProgress);

  return wrapper;
}

function createFooter() {
  const footer = document.createElement('footer');
}

function createHeaderWithIcon(icon, text) {
  const headerWithIcon = document.createElement('div');
  headerWithIcon.classList.add('header-with-icon');

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'filled-icon');
  iconElement.classList.add(icon);

  const header = document.createElement('h2');
  header.innerText = text;

  const divider = document.createElement('span');
  divider.classList.add('inline-divider');

  headerWithIcon.append(iconElement, header, divider);

  return headerWithIcon;
}
