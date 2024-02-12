export const headerNavLinks = [
  { href: "/", title: "Главная" },
  { href: "/catalogue/", title: "Каталог" },
  { href: "/company/", title: "О Компании" },
  { href: "/delivery/", title: "Доставка" },
  { href: "/montage/", title: "Монтаж" },
  { href: "/service/", title: "Обслуживание" },
  { href: "/warranty/", title: "Гарантия" },
] as const;

export const heroData = [
  {
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.35266 17.0548L13.0248 15.7026C13.4869 15.6089 13.8877 15.324 14.1279 14.9183L18.5665 7.42201C19.2119 6.33199 20.7893 6.33199 21.4347 7.42201L25.8733 14.9183C26.1135 15.324 26.5143 15.6089 26.9764 15.7026L33.6485 17.0548C34.9464 17.3178 35.4339 18.9164 34.5038 19.8589L28.9536 25.4831C28.5659 25.8759 28.3979 26.4351 28.5047 26.9765L29.7551 33.3115C30.024 34.6743 28.6058 35.7488 27.3667 35.121L20.7539 31.7705C20.2803 31.5306 19.7208 31.5306 19.2473 31.7705L12.6345 35.121C11.3954 35.7488 9.97714 34.6743 10.2461 33.3115L11.4964 26.9765C11.6033 26.4351 11.4352 25.8759 11.0476 25.4831L5.49742 19.8589C4.56726 18.9164 5.05481 17.3178 6.35266 17.0548Z" fill="#45B2EA"/>
    </svg>`,
    title: "Гарантия 3 года",
    description: "Гарантия на кондиционеры и установку 3 года",
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C21.742 0 28 6.272 28 14C28 21.742 21.742 28 14 28C6.272 28 0 21.742 0 14C0 6.272 6.272 0 14 0ZM13.51 6.902C12.936 6.902 12.46 7.364 12.46 7.952V15.022C12.46 15.386 12.656 15.722 12.978 15.918L18.466 19.194C18.634 19.292 18.816 19.348 19.012 19.348C19.362 19.348 19.712 19.166 19.908 18.83C20.202 18.34 20.048 17.696 19.544 17.388L15.0483 14.7108C14.7455 14.5305 14.56 14.2041 14.56 13.8516V7.952C14.56 7.364 14.084 6.902 13.51 6.902Z" fill="#45B2EA"/>
    </svg>
    `,
    title: "Работа в 1 день",
    description: "Доставим и установим кондиционер за 1 день",
  },
  {
    icon: `<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6214_1663)">
    <path d="M26.9272 4.55182H22.9566C22.4043 4.55182 21.9566 4.1041 21.9566 3.55182V1.05042C21.9566 0.469188 21.4774 0 20.8838 0H3.39719C1.5198 0 0 1.4881 0 3.32633V21.6737C0 23.5119 1.5198 25 3.39719 25H26.9272C27.5208 25 28 24.5308 28 23.9496V5.60224C28 5.02101 27.5208 4.55182 26.9272 4.55182ZM2.10983 3.32633C2.10983 2.65056 2.67126 2.10084 3.36143 2.10084H18.811C19.3633 2.10084 19.811 2.54856 19.811 3.10084V3.55182C19.811 4.10411 19.3633 4.55182 18.811 4.55182H3.39719C2.70702 4.57283 2.13129 4.03711 2.10983 3.36134C2.10983 3.35084 2.10983 3.33683 2.10983 3.32633ZM21.1341 16.9818C19.7502 16.9818 18.6309 15.8859 18.6309 14.5308C18.6309 13.1758 19.7502 12.0798 21.1341 12.0798C22.518 12.0798 23.6373 13.1758 23.6373 14.5308C23.6373 15.8859 22.518 16.9818 21.1341 16.9818Z" fill="#45B2EA"/>
    </g>
    <defs>
    <clipPath id="clip0_6214_1663">
    <rect width="28" height="25" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
    title: "Оплата после",
    description:
      "Вы оплачиваете всю сумму после доставки и монтажа, если довольны результатом",
  },
  {
    icon: `<svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_6214_1163)">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.02344 18.9541C1.47115 18.9541 1.01861 19.4026 1.06464 19.953C1.18711 21.417 1.58257 22.7451 2.25103 23.3308C2.5079 23.5558 2.78071 23.8077 2.8806 24.1343C7.31291 38.6251 20.8338 38.6086 25.1371 24.0849C25.2259 23.7853 25.4587 23.5449 25.6955 23.3409C26.3947 22.7387 26.8075 21.4328 26.9338 19.953C26.9808 19.4027 26.5279 18.9541 25.9756 18.9541H2.02344ZM6.30385 21.5607C5.64305 21.5607 5.16348 22.1909 5.36585 22.8199C9.45209 35.522 19.0065 36.1629 22.9785 21.6729C22.9962 21.6084 23.0556 21.5607 23.1224 21.5607H6.30385Z" fill="#45B2EA"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.909086 14.0259C1.32358 13.7644 1.70752 13.3796 1.74204 12.8908C2.06545 8.31067 4.23426 5.15831 7.11073 3.29983C7.67314 2.93646 8.39267 3.29835 8.50784 3.95796L9.52343 9.77456C9.75009 10.9078 11.5633 10.5679 11.3367 9.43457L9.9968 2.06522C9.98347 1.99191 9.97684 1.91581 9.98665 1.84195C10.3128 -0.613982 17.687 -0.613983 18.0131 1.84195C18.023 1.91581 18.0163 1.99191 18.003 2.06522L16.6631 9.43457C16.4365 10.5679 18.2497 10.9078 18.363 9.77456L19.3815 3.94125C19.4958 3.28665 20.2066 2.92346 20.7693 3.27697C23.7263 5.13481 25.8459 8.3 26.2437 12.9086C26.2852 13.3893 26.6656 13.7631 27.0761 14.0167C28.6079 14.9631 28.2345 17.8209 25.956 17.8209H2.04377C-0.227457 17.8209 -0.605686 14.9814 0.909086 14.0259Z" fill="#45B2EA"/>
    </g>
    <defs>
    <clipPath id="clip0_6214_1163">
    <rect width="28" height="34.9901" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
    title: "Лучшие монтажники",
    description: "Работают самые опытные монтажники Бреста",
  },
] as const;

export const sizeRect = ["20", "25", "35", "50"];

export const productData = [
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
  {
    url: "/assets/images/product-example.png",
    title: "SAMSUNG LG MITSUBISHI GR-9999",
    descriptionList: [
      "Ионизатор",
      "Биофильтр",
      "Фильтр с ионами серебра",
      "Авторестарт",
      "Самодиагностика",
    ],
    description: "Габариты (ШхВхГ): 75x25x19.8 см",
    size:
      sizeRect[Math.floor(Math.random() * sizeRect.length)] ?? ("20" as const),
    price: 1600,
  },
];

export const quizData = [
  {
    step: 1,
    title: "Рассчитать стоимость кондиционера с установкой",
    buttonText: "Далее",
    quiz: [
      { text: "Квартира", url: "/assets/images/quiz-step-1-1.png" },
      { text: "Дом", url: "/assets/images/quiz-step-1-2.png" },
      { text: "Офис", url: "/assets/images/quiz-step-1-3.png" },
      { text: "Магазин", url: "/assets/images/quiz-step-1-4.png" },
    ],
  },
  {
    step: 2,
    title: "На какую площадь подбираете кондиционер?",
    buttonText: "Далее",
    quiz: [
      { text: "до 20 м.кв.", url: null },
      { text: "до 25 м.кв.", url: null },
      { text: "до 35 м.кв.", url: null },
      { text: "до 50 м.кв.", url: null },
    ],
  },
  {
    step: 3,
    title: "Какое оборудование Вы выбираете?",
    buttonText: "Далее",
    quiz: [
      { text: "Бюджетное", url: null },
      { text: "Среднее", url: null },
      { text: "Премиум", url: null },
    ],
  },
  {
    step: 4,
    title: "Помещение на стадии ремонта?",
    buttonText: "Далее",
    quiz: [
      { text: "Да", url: null },
      { text: "Нет", url: null },
    ],
  },
  {
    step: 5,
    title: "Получите Персональную скидку!",
    buttonText: "Получить",
    quiz: [{ text: "Введите номер телефона", url: null }],
  },
  {
    step: 6,
    title:
      "Спасибо, Ваша заявка принята! Мы свяжемся с вами в ближайшее время.",
    buttonText: "Получить",
    quiz: [{ text: "Введите номер телефона", url: null }],
  },
] as const;

export const dataMontage = [
  "Доставка оборудования к заказчику",
  "Установка внешнего блока кондиционера под окном на несущую стену",
  "Прокладывание коммуникаций (5 метров входит в стандартный монтаж)",
  "Подключение внутреннего блока",
  "Вакуумирование трассы и запуск системы",
  "Проверяете как работает оборудование и оплачиваете",
];
