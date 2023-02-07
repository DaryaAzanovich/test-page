const navData = {
  careers: [
    {
      title: 'Business & Management',
      subtitles: [
        'Master of Business Administration (CMI)'
      ]
    },
    {
      title: 'Computing & IT',
    },
    {
      title: 'Fashion & Media',
    },
    {
      title: 'Finance & Accounting',
    },
    {
      title: 'Law & Criminology',
    },
    {
      title: 'Marketing & Communications',
    },
    {
      title: 'Psychology & Social Sciences',
      subtitles: [
        'Market Research Executive',
        'Child Psychologist',
        'Guidance Counsellor',
        'Behaviour Analyst',
        'Recreational Therapist',
      ]
    }
  ]
};

const cardsData = [
  {
    order: 1,
    logo: {
      src: "sources/img/icons/embratur-logo.svg",
      alt: 'Embratur',
    },
    label: 'Business & Management',
    header: 'Master of Business Administration (CMI)',
    btnText: 'More info',
    addsList: [
      {
        img: {
          src: 'sources/img/icons/students-hat.svg',
          alt: 'Studens Hat Icon'
        },
        text: 'Postgraduate'
      },
      {
        img: {
          src: 'sources/img/icons/calendar.svg',
          alt: 'Calender Icon'
        },
        text: 'Every 12 weeks'
      }
    ],
    cost: '£12,650',
    text_mob: 'Postgraduate',
  },
  {
    order: 3,
    logo: {
      src: "sources/img/icons/danisco-logo.svg",
      alt: 'Embratur',
    },
    label: 'Business & Management',
    header: 'Master of Business Administration (CMI)',
    btnText: 'More info',
    addsList: [
      {
        img: {
          src: 'sources/img/icons/students-hat.svg',
          alt: 'Studens Hat Icon'
        },
        text: 'Postgraduate'
      },
      {
        img: {
          src: 'sources/img/icons/calendar.svg',
          alt: 'Calender Icon'
        },
        text: 'Every 12 weeks'
      }
    ],
    cost: '£12,650',
    text_mob: 'Postgraduate',
  },
  {
    order: 5,
    logo: {
      src: "sources/img/icons/buffets-logo.svg",
      alt: 'Embratur',
    },
    label: 'Business & Management',
    header: 'Master of Business Administration (CMI)',
    btnText: 'More info',
    addsList: [
      {
        img: {
          src: 'sources/img/icons/students-hat.svg',
          alt: 'Studens Hat Icon'
        },
        text: 'Postgraduate'
      },
      {
        img: {
          src: 'sources/img/icons/calendar.svg',
          alt: 'Calender Icon'
        },
        text: 'Every 12 weeks'
      }
    ],
    cost: '£12,650',
    text_mob: 'Postgraduate',
  },
  {
    order: 6,
    logo: {
      src: "sources/img/icons/barco-logo.svg",
      alt: 'Embratur',
    },
    label: 'Business & Management',
    header: 'Master of Business Administration (CMI)',
    btnText: 'More info',
    addsList: [
      {
        img: {
          src: 'sources/img/icons/students-hat.svg',
          alt: 'Studens Hat Icon'
        },
        text: 'Postgraduate'
      },
      {
        img: {
          src: 'sources/img/icons/calendar.svg',
          alt: 'Calender Icon'
        },
        text: 'January, April, July, October, November'
      }
    ],
    cost: '£12,650',
    text_mob: 'Postgraduate',
  }
];

const greenCardsData = [
  {
    order: 2,
    header: `MSc Data Analytics 
    and Information 
    Systems Management`,
    btnText: 'More info',
    adds: {
      duration: {
        title: 'Duration:',
        min: 'Minimum: 18 months',
        max: 'Maximum: 36 months',
      },
      startDates: {
        title: 'Start Dates:',
        dates: 'January, April, July, October'
      },
    },
    cost: '£8,500'
  },
  {
    order: 4,
    header: `MSc Data Analytics 
    and Information 
    Systems Management`,
    btnText: 'More info',
    adds: {
      duration: {
        title: 'Duration:',
        min: 'Minimum: 18 months',
        max: 'Maximum: 36 months',
      },
      startDates: {
        title: 'Start Dates:',
        dates: 'January, April, July, October'
      },
    },
    cost: '£8,500'
  }
]

// ********************** 
createCareerTitle_mob();
createTitlesList(navData);
createCardsList();
// ********************** 

const careerItems = document.querySelectorAll('.nav-titles__item');
const careerTitles = document.querySelector('.nav-titles');
const careerSubtitles = document.querySelectorAll('.nav-subtitles-list');
const cardsWrap = document.querySelector('.cards-wrap');
const circleBtns = document.querySelectorAll('.circle-btn');

// ********************** eventListeners **********************

circleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('circle-btn-clicked');
    const greenCard = btn.parentElement;
    greenCard.querySelector('.green-card-details-btn').classList.toggle('green-card-chosen');
  })
});

careerItems.forEach((careerItem) =>
  careerItem.addEventListener('click', (event) => {

    careerItem.classList.toggle('selected-title');

    const subtitlesList = careerItem.querySelector('.nav-subtitles-list');

    if (subtitlesList) {
      subtitlesList.classList.toggle('display');

      if (!subtitlesList.classList.contains('display')) {
        const selected = subtitlesList.querySelector('.selected-subt');
        if (selected) {
          selected.classList.remove('selected-subt');
        }
      }
    }
  })
);

careerSubtitles.forEach(careerSubtitle => {
  careerSubtitle.addEventListener('click', (event) => {
    event.stopPropagation();

    singleSelect(event.target, careerSubtitle, 'selected-subt');
  })
});

// ********************** Functions ********************** 

function singleSelect(li, ul, className) {
  let selected = ul.querySelectorAll(`.${className}`);

  for (let elem of selected) {
    elem.classList.remove(className);
  }
  li.classList.add(className);
};

function createTitlesList(data) {
  const titlesUl = document.querySelector('.nav-titles');

  data.careers.forEach(career => {
    const titleItem = createTitlesItem(career);

    titlesUl.appendChild(titleItem);
  });
};

function createTitlesItem(careerData) {
  const navItem = createElem('li', 'nav-titles__item');
  const navTitle = createElem('span', 'nav-title', { textContent: careerData.title });
  const titleChevron = createElem('i', 'gg-chevron-right chevron');

  navTitle.appendChild(titleChevron);
  navItem.appendChild(navTitle);

  if (careerData.subtitles) {
    const subtitles = createSubtitlesList(careerData.subtitles);

    navItem.appendChild(subtitles);
  }

  return navItem;
}

function createSubtitlesList(subData) {
  const subtitlesUl = createElem('ul', 'nav-subtitles-list');

  subData.forEach(subtitle => {
    const subtitleItem = createElem('li', 'nav-subtitles__item', { textContent: subtitle });

    subtitlesUl.appendChild(subtitleItem);
  })

  return subtitlesUl;
}

function createCard(cardData) {
  const card = createElem('div', 'card');
  const greenLine = createElem('div', 'green-line');
  const cardLogo = createElem('img', 'card-logo', { src: cardData.logo.src, alt: cardData.logo.alt });
  const cardLabel = createElem('p', 'card-label', { textContent: cardData.label });
  const cardHeader = createElem('h3', 'card-header', { textContent: cardData.header });
  const cardText_mob = createElem('p', 'card-text__mob', { textContent: cardData.text_mob });
  const cardCost_mob = createElem('p', 'card-cost__mob', { textContent: cardData.cost });
  const circleBtn = createCircleBtn('green-one');

  const cardBtn = createElem('button', 'card-details-btn', { textContent: cardData.btnText });

  const cardAddsList = createCardAddsList(cardData.addsList);

  card.appendChild(greenLine);
  card.appendChild(cardLogo);
  card.appendChild(cardLabel);
  card.appendChild(cardHeader);
  card.appendChild(cardText_mob);
  card.appendChild(cardCost_mob);
  card.appendChild(cardAddsList);
  card.appendChild(cardBtn);
  card.appendChild(circleBtn);


  card.style = `order: ${cardData.order};`;

  return card;
};

function createCircleBtn(additionalClassName = '') {
  const btn = createElem('div', `circle-btn ${additionalClassName}`);
  const horizontalLine = createElem('div', 'before');
  const verticalLine = createElem('div', 'after');

  btn.appendChild(horizontalLine);
  btn.appendChild(verticalLine);

  return btn;
}

function createGreenCard(greenCardData) {
  const card = createElem('div', 'green-card');
  const circleBtn = createCircleBtn();
  const cardTitle = createElem('p', 'green-card-title', { textContent: greenCardData.header });

  const cardSubtitle = {
    dur: createElem('p', 'green-card-subtitle', { textContent: greenCardData.adds.duration.title }),
    dates: createElem('p', 'green-card-subtitle', { textContent: greenCardData.adds.startDates.title })
  };
  const cardText = {
    dur: [
      createElem('span', 'green-card-text', { textContent: greenCardData.adds.duration.min }),
      createElem('span', 'green-card-text', { textContent: greenCardData.adds.duration.max })
    ],
    dates: [
      createElem('span', 'green-card-text', { textContent: greenCardData.adds.startDates.dates })
    ]
  };
  const cardBigText = createElem('p', 'green-card-big-text', { textContent: greenCardData.cost });
  const cardBtn = createElem('button', 'green-card-details-btn', { textContent: greenCardData.btnText });

  cardText.dur.forEach(text => {
    cardSubtitle.dur.appendChild(text);
  })
  cardSubtitle.dates.appendChild(cardText.dates[0]);

  card.style = `order: ${greenCardData.order};`;

  card.appendChild(circleBtn);
  card.appendChild(cardTitle);
  card.appendChild(cardSubtitle.dur);
  card.appendChild(cardSubtitle.dates);
  card.appendChild(cardBigText);
  card.appendChild(cardBtn);

  return card;
}


function createCardsList() {
  const cardsWrap = document.querySelector('.cards-wrap');

  cardsData.forEach(cardData => {
    const card = createCard(cardData);


    cardsWrap.appendChild(card);
  });

  greenCardsData.forEach(cardData => {
    const card = createGreenCard(cardData);

    cardsWrap.appendChild(card);
  })

  cardsWrap.appendChild(createMoreProgBtn());
}

function createMoreProgBtn() {
  const btnadds = {
    textContent: 'More programmes',
  };
  const btnArrowAdds = {
    src: 'sources/img/icons/ouroboros-arrow.svg'
  };

  const btn = createElem('button', 'more-btn', btnadds);
  const btnArrow = createElem('img', '', btnArrowAdds);

  btn.appendChild(btnArrow);

  return btn;
}

function createCardAddsList(cardAddsData) {
  const cardList = createElem('ul', 'card-list');

  cardAddsData.forEach(data => {
    const cardItem = createElem('li', 'card-item');
    const cardItemImg = createElem('img', 'card-item__img', { src: data.img.src, alt: data.img.alt });
    const cardItemText = createElem('p', 'card-item__text', { textContent: data.text });


    cardItem.appendChild(cardItemImg);
    cardItem.appendChild(cardItemText);

    cardList.appendChild(cardItem);
  });

  return cardList;
}


function createElem(tag, elemClassName, adds) {
  const elem = document.createElement(tag);
  elem.className = elemClassName;

  if (adds !== undefined && adds !== null) {
    Object.keys(adds).forEach(prop => {
      elem[prop] = adds[prop];
    })
  }


  return elem;
}

function createCareerTitle_mob() {
  const navHeader = document.querySelector('.nav-header');

  const navHaderText = createElem('span', 'nav-header-text__mob', { textContent: 'Choose your career' });
  const titleChevron = createElem('i', 'gg-chevron-right chevron');

  navHaderText.appendChild(titleChevron);

  navHaderText.addEventListener('click', (event) => {
    navHaderText.classList.toggle('dropdown-opened');

    if (!navHaderText.classList.contains('dropdown-opened')) {
      const selectedTitles = document.querySelectorAll('.selected-title');
      selectedTitles.forEach(selected => selected.click());
    }

    const dropdown = document.querySelector('.nav-dropdown');
    dropdown.classList.toggle('display');
  });

  navHeader.appendChild(navHaderText);
}