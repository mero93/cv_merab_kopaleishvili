const body = document.body;

const certificates = [
  {
    name: 'PeopleCert for Angular',
    description:
      'Software development skills in Angular, Specialist Certificate Specialist Certificate',
    date: '24 Mar 2025',
  },
];

const educationAndTraining = [
  {
    name: 'RS School JS / Frontend',
    description: 'Vanilla JavaScript, HTML, CSS, Typescript, NextJS',
    date: 'September 9th, 2025 - Mar 17th, 2026',
  },
  {
    name: 'EPAM [Fundamentals] Java, WCA #21',
    description: 'OOP, Java, Spring Framework, MVC, Database',
    date: 'Oct 17th, 2025 - Feb 23rd, 2026',
  },
  {
    name: 'GITA International Certification Program',
    description: 'Angular, Angular Material',
    date: 'Oct 2024 - Feb 2025',
  },
  {
    name: 'EPAM Full-Stack Web-Development Boot Camp',
    description: 'C#, .NET, ASP.NET, MVC, API, Angular',
    date: 'Feb 2022 - Aug 2023',
  },
  {
    name: 'Agricultural University of Georgia, Tbilisi, Georgia',
    description: 'Masters Degree in Civil Engineering',
    date: 'Sept 2020 - Jul 2022',
  },
  {
    name: 'Agricultural University of Georgia, Tbilisi, Georgia',
    description: 'Bachelors Degree in Civil Engineering',
    date: 'Oct 2012 - Jun 2017',
  },
  {
    name: 'Erasmus Mundus Education Program “Infinity”',
    date: 'Sept 2014 - Jul 2015',
  },
];

const highlightApps = [
  {
    name: 'JS Interview Trainer',
    hostedLink: 'https://rs-tandem.vercel.app/',
    description:
      'Interactive learning platform for JavaScript and TypeScript interview preparation.',
    stack: ['Angular', 'TypeScript', 'Supabase'],
    workDone: [
      'Implemented Supabase-based authentication and admin CRUD functionality',
      'Added localization features for the Angular application',
      'Developed admin panel functionality for content and data management',
    ],
    repoLink: 'https://github.com/tosigaeva/rs-tandem',
    videoDemo: 'https://www.loom.com/share/548ae3da518b487daa0bce12a91a9d49',
  },
  {
    name: 'E-Commerce App (Techno-Eshop)',
    hostedLink: 'https://techno-eshop-d7f6c2d02709.herokuapp.com/',
    description:
      'Full-stack e-commerce application with flexible product attributes and admin-side prototypes.',
    stack: ['ASP.NET', 'PostgreSQL', 'Angular', 'Angular Material'],
    workDone: [
      'Built full-stack e-commerce features using Angular, ASP.NET, and PostgreSQL',
      'Implemented product and attribute management functionality',
      'Integrated Angular frontend with backend REST APIs',
    ],
    repoLink: 'https://github.com/mero93/technoEShop',
  },
  {
    name: 'Book Store App',
    hostedLink: '',
    description: 'Catalog application created as part of Java training course.',
    stack: ['Java', 'Spring Framework', 'Angular', 'Angular Material', 'H2'],
    workDone: [
      'Built bookstore catalog features using Java Spring and Angular',
      'Integrated Angular client with backend REST APIs',
      'Contributed to backend and frontend application modules',
    ],
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

const skillData = [
  {
    name: 'Frontend',
    icon: 'fa-code',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Angular',
      'RxJS',
      'Angular Material',
      'React',
      'Next.js',
    ],
  },
  {
    name: 'Backend',
    icon: 'fa-laptop-code',
    skills: ['C#', 'Java', 'ASP.NET', 'Spring', 'Spring Boot', 'Express.js', 'NestJS', 'REST API'],
  },
  {
    name: 'Database',
    icon: 'fa-database',
    skills: ['PostgreSQL', 'H2'],
  },
  {
    name: 'Tools',
    icon: 'fa-screwdriver-wrench',
    skills: [
      'Git',
      'EF Core',
      'TypeORM',
      'AutoMapper',
      'Microsoft Identity',
      'Supabase',
      'WebSocket',
    ],
  },
];

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Russian', level: 'Advanced' },
];

function initializePage() {
  createHeader();
  createMain();
  createFooter();
}

initializePage();

function createHeader() {
  console.log('creating header');
  const header = document.createElement('header');

  const name = document.createElement('h1');
  name.innerText = 'Merab Kopaleishvili';

  const occupation = document.createElement('p');
  occupation.innerText = 'Junior Full-Stack Developer';
  occupation.classList.add('occupation');

  const contactInfo = createContactInfo();

  header.append(name, occupation, contactInfo);

  body.appendChild(header);
}

function createContactInfo() {
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('delimited-list');

  const infoData = [
    { pretext: 'Tbilisi, Georgia' },
    { link: 'tel:+995577442859', text: '+995 577 44 28 59' },
    {
      link: 'mailto:merabkopaleishvili1993@gmail.com/',
      text: 'merabkopaleishvili1993@gmail.com',
    },
    { link: 'https://github.com/mero93/', pretext: 'GitHub:', text: 'mero93' },

    {
      link: 'https://www.linkedin.com/in/m-kopaleishvili/',
      pretext: 'LinkedIn:',
      text: 'linkedin.com/in/m-kopaleishvili',
    },
  ];

  for (const info of infoData) {
    const infoPiece = createContactInfoPiece(info);
    contactInfo.appendChild(infoPiece);
  }

  return contactInfo;
}

function createContactInfoPiece({ link, pretext, text }) {
  console.log(link, pretext, text);
  let infoLink;
  if (link && text) {
    infoLink = document.createElement('a');
    infoLink.href = link ?? '';

    const infoText = document.createElement('h4');
    infoText.innerText = text ?? '';
    infoLink.append(infoText);
  }

  let pretextElement;
  if (pretext) {
    pretextElement = document.createElement('span');
    pretextElement.innerText = pretext ?? '';
  }

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  if (pretextElement) contactInfo.append(pretextElement);
  if (infoLink) contactInfo.append(infoLink);

  return contactInfo;
}

function createMain() {
  const main = document.createElement('main');

  body.appendChild(main);

  const summarySection = createSummarySection();
  const skillSection = createSkillSection();
  const projectHighlights = createProjectHighlights();
  const educationAndTrainingSection = createEducationAndTraining();
  const languageSection = createLanguages();

  main.append(
    summarySection,
    skillSection,
    projectHighlights,
    educationAndTrainingSection,
    languageSection,
  );
}

function createSummarySection() {
  const about = document.createElement('section');

  const header = document.createElement('h2');
  header.innerText = 'Summary';

  const text = document.createElement('p');
  text.innerHTML = `Junior Full-Stack Developer with hands-on experience in Angular, TypeScript, ASP.NET, Java Spring, and PostgreSQL
through technical training and project work. Built web applications with authentication, localization, CRUD functionality,
REST API integration, and admin workflows. Seeking an entry-level software development role focused on modern web
applications.`;

  about.append(header, text);

  return about;
}

function createEducationAndTraining() {
  const educationSection = document.createElement('section');

  const header = document.createElement('h2');
  header.innerText = 'Education and Training';
  educationSection.appendChild(header);

  for (const education of educationAndTraining) {
    const trainingElement = createEducation(education);
    educationSection.appendChild(trainingElement);
  }

  return educationSection;
}

function createEducation({ name, description, date }) {
  const entry = document.createElement('span');

  const nameText = `<b>${name}</b> - `;
  const descriptionText = description ? `${description} - ` : '';
  const dateText = `<i>${date}</i>`;

  entry.innerHTML = nameText + descriptionText + dateText;

  return entry;
}

function createProjectHighlights() {
  const highlightAppSection = document.createElement('section');

  const header = document.createElement('h2');
  header.innerText = 'Project Highlights';
  highlightAppSection.appendChild(header);

  for (const app of highlightApps) {
    const appElement = createApp(app);
    highlightAppSection.appendChild(appElement);
  }

  return highlightAppSection;
}

function createApp({ name, hostedLink, description, stack, workDone, repoLink, videoDemo }) {
  const app = document.createElement('div');
  app.classList.add('app-container');

  const appHeader = document.createElement('div');
  const titleElement = document.createElement('h3');
  titleElement.innerText = name;

  if (hostedLink) {
    const titleLink = document.createElement('a');
    titleLink.href = hostedLink;
    titleLink.target = '_blank';
    titleLink.appendChild(titleElement);
    appHeader.appendChild(titleLink);
  } else {
    appHeader.appendChild(titleElement);
  }
  app.appendChild(appHeader);

  if (description) {
    const appDescription = document.createElement('p');
    appDescription.innerHTML = description;
    app.appendChild(appDescription);
  }

  if (workDone && workDone.length > 0 && workDone[0] !== '') {
    const ul = document.createElement('ul');
    ul.classList.add('work-done-list');

    workDone.forEach((point) => {
      const li = document.createElement('li');
      li.innerText = point;
      ul.appendChild(li);
    });
    app.appendChild(ul);
  }

  if (stack && stack.length > 0) {
    const stackContainer = document.createElement('div');
    stackContainer.classList.add('app-line');

    const stackLabel = document.createElement('b');
    stackLabel.innerText = 'Stack:';

    const stackList = document.createElement('span');
    stackList.classList.add('delimited-list');

    stack.forEach((tech) => {
      const item = document.createElement('span');
      item.innerText = tech;
      stackList.appendChild(item);
    });

    stackContainer.append(stackLabel, stackList);
    app.appendChild(stackContainer);
  }

  if (repoLink || videoDemo) {
    const linksRow = document.createElement('div');
    linksRow.classList.add('app-line');
    linksRow.style.display = 'flex';
    linksRow.style.gap = '5px';

    const linksLabel = document.createElement('b');
    linksLabel.innerText = 'Links: ';
    linksRow.appendChild(linksLabel);

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('delimited-list');

    if (repoLink) {
      const repoA = document.createElement('a');
      repoA.href = repoLink;
      repoA.innerText = 'GitHub';
      repoA.target = '_blank';
      linksContainer.appendChild(repoA);
    }

    if (videoDemo) {
      const demoA = document.createElement('a');
      demoA.href = videoDemo;
      demoA.innerText = 'Demo';
      demoA.target = '_blank';
      linksContainer.appendChild(demoA);
    }

    linksRow.appendChild(linksContainer);
    app.appendChild(linksRow);
  }

  return app;
}

function createSkillSection() {
  const section = document.createElement('section');

  const header = document.createElement('h2');
  header.innerText = 'Technical Skills';

  const skillSection = document.createElement('div');
  skillSection.classList.add('skill-section');

  for (const data of skillData) {
    const skillList = createSkillList(data);
    skillSection.append(skillList);
  }

  section.append(header, skillSection);

  return section;
}

function createSkillList({ icon, name, skills }) {
  const entry = document.createElement('div');
  entry.classList.add('skill-list');

  const header = createHeaderWithIcon(icon, name);
  entry.append(header);

  const skillList = document.createElement('p');
  skillList.innerText = skills.join(', ');
  entry.append(skillList);

  return entry;
}

function createFooter() {
  const footer = document.createElement('footer');

  return footer;
}

function createHeaderWithIcon(icon, text) {
  const headerWithIcon = document.createElement('div');
  headerWithIcon.classList.add('header-with-icon');

  const iconElement = document.createElement('i');
  iconElement.classList.add('fa-solid', 'filled-icon', icon);

  const header = document.createElement('h3');
  header.innerText = text;

  headerWithIcon.append(iconElement, header);

  return headerWithIcon;
}

function createLanguages() {
  const section = document.createElement('section');

  const header = document.createElement('h2');
  header.innerText = 'Languages';

  const languageContainer = document.createElement('div');
  languageContainer.classList.add('delimited-list');

  for (let language of languages) {
    const languageDisplay = document.createElement('span');
    languageDisplay.innerText = `${language.name} - ${language.level}`;
    languageContainer.append(languageDisplay);
  }

  section.append(header, languageContainer);

  return section;
}
