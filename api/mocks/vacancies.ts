import { Vacancy } from "../models/vacancy";

export const mockVacancies: Vacancy[] = [
  {
    id: 1,
    active: true,
    external_id: "vac1",
    company_name: "Tech Corp",
    title:
      "Тестировщик Java/QA инженер по автоматизированному тестированию Java с нуля (стажер)",
    salary: "от 50 000 Р",
    location: "Remote",
    speciality: "Frontend",
    internship: false,
    remote: true,
    url: "https://example.com/job1",
    description: `<div>\n  <p><strong>Компания IT_ONE запускает стажировку для будущих Java разработчиков</strong>, целью которой является подготовка специалистов уровня от Junior+ до Middle-.</p>\n  <p>Наши стажеры смогут получить опыт работы в профессиональной среде, развить свои навыки под руководством высококвалифицированных специалистов и открыть новые возможности для своей карьеры в IT-индустрии.</p>\n\n  <h3>О программе:</h3>\n  <ul>\n    <li>Период стажировки: июнь-август 2025;</li>\n    <li>Продолжительность 3 месяца;</li>\n    <li>Онлайн формат;</li>\n    <li>До 30 часов в неделю;</li>\n    <li>Обучение с тренером soft skills;</li>\n    <li>Работа над собственным проектом с ментором. Встречи раз в неделю по 2 часа;</li>\n    <li>Материалы для изучения + домашние задания + контрольные работы;</li>\n    <li>Этапы отбора: отправка резюме → заполнение анкеты → собеседование с рекрутером → собеседование с техническим специалистом.</li>\n  </ul>\n\n  <h3>Ожидания от кандидата:</h3>\n  <ul>\n    <li>Мы ищем выпускников технических вузов, которые имеют базовые знания Java Core, Spring Framework, SQL.</li>\n    <li>Будет плюсом наличие опыта работы в технической сфере, а также в IT в целом и в разработке в частности.</li>\n  </ul>\n\n  <h3>Дополнительное преимущество:</h3>\n  <ul>\n    <li>Понимание ООП</li>\n    <li>Понимание микросервисной архитектуры и многопоточности</li>\n  </ul>\n\n  <h3>Что мы предлагаем после успешного прохождения стажировки:</h3>\n  <ul>\n    <li>Официальное трудоустройство по ТК РФ в аккредитованную IT-компанию;</li>\n    <li>Возможность удаленной работы из любого города;</li>\n    <li>ДМС после прохождения испытательного срока;</li>\n    <li>Работа в команде высококвалифицированных профессионалов;</li>\n    <li>Дополнительное обучение, билеты, возможность посещения конференций, тренингов, митапов;</li>\n    <li>Корпоративные скидки от партнеров;</li>\n    <li>Насыщенная корпоративная культура.</li>\n  </ul>\n</div>`,
    source: "LinkedIn",
    image: null,
    date_publication: "2025-06-20T10:00:00Z",
  },
  {
    id: 2,
    active: true,
    external_id: "dev2",
    company_name: "DataArt",
    title: "Senior Python Developer (Big Data/AI)",
    salary: "от 300 000 Р",
    location: "Москва/Гибрид",
    speciality: "Backend",
    internship: false,
    remote: false,
    url: "https://dataart.ru/careers/python-dev",
    description: `<div>
          <h2>О проекте:</h2>
          <p>Мы разрабатываем масштабируемую платформу для обработки больших данных в реальном времени с элементами искусственного интеллекта для одного из крупнейших европейских банков. В команде уже 15+ опытных разработчиков, и мы расширяемся.</p>
          
          <h3>Технологический стек:</h3>
          <ul>
            <li>Python 3.10+ (asyncio, FastAPI, Django)</li>
            <li>Apache Spark, Kafka</li>
            <li>PostgreSQL, ClickHouse</li>
            <li>Docker, Kubernetes</li>
            <li>Airflow, MLflow</li>
            <li>Prometheus, Grafana</li>
          </ul>
          
          <h3>Обязанности:</h3>
          <ul>
            <li>Разработка и оптимизация ETL-процессов обработки данных</li>
            <li>Создание и поддержка микросервисной архитектуры</li>
            <li>Реализация алгоритмов машинного обучения в production</li>
            <li>Участие в проектировании архитектуры решения</li>
            <li>Code review, наставничество для junior-разработчиков</li>
            <li>Работа по методологии Scrum (ежедневные стендапы, спринты по 2 недели)</li>
          </ul>
          
          <h3>Требования:</h3>
          <ul>
            <li>5+ лет коммерческого опыта разработки на Python</li>
            <li>Глубокие знания алгоритмов и структур данных</li>
            <li>Опыт работы с распределенными системами</li>
            <li>Понимание принципов CI/CD (GitLab CI)</li>
            <li>Английский язык — Upper Intermediate (общение с заказчиком)</li>
            <li>Высшее техническое образование (желательно)</li>
          </ul>
          
          <h3>Условия:</h3>
          <ul>
            <li>Гибкий график (начало дня с 9 до 11)</li>
            <li>Медицинская страховка + стоматология</li>
            <li>Компенсация обучения (курсы, конференции)</li>
            <li>Спортивные мероприятия (корпоративная футбольная команда)</li>
            <li>Бонусы за публикации и выступления</li>
            <li>Офис в центре Москвы с зонами отдыха</li>
          </ul>
          
          <p><strong>Процесс отбора:</strong> техническое собеседование → тестовое задание → интервью с тимлидом → финальное интервью с HRD.</p>
        </div>`,
    source: "hh.ru",
    image: "https://dataart.ru/logo.png",
    date_publication: "2025-06-21T09:15:00Z",
  },
  {
    id: 3,
    active: true,
    external_id: "fe3",
    company_name: "Yandex",
    title: "Lead Frontend Developer (React/TypeScript)",
    salary: "от 350 000 Р",
    location: "Москва",
    speciality: "Frontend",
    internship: false,
    remote: true,
    url: "https://yandex.ru/jobs/fe-lead",
    description: `<div>
          <h2>О команде:</h2>
          <p>Мы — команда Яндекс.Маркета, разрабатывающая пользовательские интерфейсы для миллионов покупателей. В этом году мы полностью переосмысливаем UX платформы и ищем опытного лида для руководства командой из 6 фронтенд-разработчиков.</p>
          
          <h3>Что предстоит делать:</h3>
          <ul>
            <li>Архитектура и разработка сложных SPA-приложений</li>
            <li>Оптимизация производительности (сейчас Lighthouse ~75)</li>
            <li>Внедрение новых технологий (WebAssembly, Web Components)</li>
            <li>Управление командой: планирование, распределение задач</li>
            <li>Тесное взаимодействие с UX/UI дизайнерами</li>
            <li>Участие в принятии продуктовых решений</li>
          </ul>
          
          <h3>Технологии:</h3>
          <ul>
            <li>React 18+ (hooks, concurrent features)</li>
            <li>TypeScript 5.0+</li>
            <li>Redux Toolkit, RTK Query</li>
            <li>Webpack 5, Vite</li>
            <li>Jest, Cypress</li>
            <li>Node.js (Express для SSR)</li>
          </ul>
          
          <h3>Мы ждем:</h3>
          <ul>
            <li>7+ лет опыта во фронтенд-разработке</li>
            <li>3+ года в роли тимлида/техлида</li>
            <li>Портфолио сложных проектов</li>
            <li>Опыт проектирования архитектуры</li>
            <li>Знание паттернов проектирования</li>
            <li>Понимание принципов доступности (a11y)</li>
          </ul>
          
          <h3>Почему у нас круто:</h3>
          <ul>
            <li>Возможность влиять на продукт с 50M+ пользователей</li>
            <li>Гибкий график и удаленная работа</li>
            <li>Ежегодный бюджет на оборудование (до 300к)</li>
            <li>20% времени на R&D проекты</li>
            <li>Релокация в любую страну с сохранением ЗП</li>
            <li>Корпоративный детский сад</li>
          </ul>
          
          <p><em>Процесс включает: HR-интервью → техническое собеседование → кейс-интервью → встреча с продуктовой командой.</em></p>
        </div>`,
    source: "Яндекс.Карьера",
    image: "https://yandex.ru/logo.svg",
    date_publication: "2025-06-20T14:30:00Z",
  },
  {
    id: 4,
    active: true,
    external_id: "intern4",
    company_name: "SberTech",
    title: "Стажировка для Android-разработчиков (Kotlin)",
    salary: "от 70 000 Р",
    location: "Москва",
    speciality: "Mobile",
    internship: true,
    remote: false,
    url: "https://sber.ru/careers/internship/android",
    description: `<div>
          <h2>О программе стажировки:</h2>
          <p>SberTech запускает 6-месячную программу подготовки Android-разработчиков с возможностью последующего трудоустройства. Программа сочетает обучение с работой над реальными проектами Сбера под руководством опытных наставников.</p>
          
          <h3>Формат:</h3>
          <ul>
            <li>Длительность: 6 месяцев (сентябрь 2025 — февраль 2026)</li>
            <li>График: гибкий, 30 часов в неделю</li>
            <li>Форма: гибридная (2 дня в офисе, 3 дня удаленно)</li>
            <li>Структура: 30% обучение, 70% практика</li>
          </ul>
          
          <h3>Чему научим:</h3>
          <ul>
            <li>Kotlin (корутины, Flow, KSP)</li>
            <li>Android SDK (Compose, ViewModel, Room)</li>
            <li>Архитектура (Clean Architecture, MVI)</li>
            <li>Тестирование (Unit tests, UI tests)</li>
            <li>CI/CD (GitLab, Firebase App Distribution)</li>
            <li>Работа в команде (Git flow, code review)</li>
          </ul>
          
          <h3>Требования к кандидатам:</h3>
          <ul>
            <li>Базовые знания Java/Kotlin</li>
            <li>Понимание ООП</li>
            <li>Опыт самостоятельных проектов (можно учебные)</li>
            <li>Готовность учиться 6+ часов ежедневно</li>
            <li>Студенты последних курсов или выпускники</li>
          </ul>
          
          <h3>Этапы отбора:</h3>
          <ol>
            <li>Онлайн-заявка с резюме</li>
            <li>Тестовое задание (2 недели на выполнение)</li>
            <li>Техническое собеседование (алгоритмы + базовый Android)</li>
            <li>Собеседование с ментором</li>
          </ol>
          
          <h3>Преимущества:</h3>
          <ul>
            <li>Заработная плата с первого дня</li>
            <li>Оборудованный MacBook Pro M3</li>
            <li>Доступ к курсам SberUniversity</li>
            <li>Возможность попасть в кадровый резерв</li>
            <li>Корпоративные льготы (медицина, скидки)</li>
          </ul>
          
          <p><strong>После стажировки:</strong> лучшие стажеры получат офферы на позиции Junior Android Developer в команды SberMarket, SberBank или SberHealth.</p>
        </div>`,
    source: "Sber Career Portal",
    image: "https://sber.ru/logo.jpg",
    date_publication: "2025-06-19T11:45:00Z",
  },
  {
    id: 5,
    active: true,
    external_id: "devops5",
    company_name: "Tinkoff",
    title: "DevOps Engineer (Kubernetes/AWS)",
    salary: "от 400 000 Р",
    location: "Москва/Санкт-Петербург/Remote",
    speciality: "DevOps",
    internship: false,
    remote: true,
    url: "https://tinkoff.ru/career/devops",
    description: `<div>
          <h2>О подразделении:</h2>
          <p>Команда Cloud Platform отвечает за инфраструктурные сервисы Тинькофф: Kubernetes-кластеры, системы мониторинга, CI/CD платформы и внутренние DevTools. Мы поддерживаем 5000+ микросервисов и 100+ продуктивных кластеров.</p>
          
          <h3>Основные задачи:</h3>
          <ul>
            <li>Развитие внутренней Kubernetes-платформы</li>
            <li>Автоматизация развертывания и масштабирования инфраструктуры</li>
            <li>Оптимизация затрат на облачные ресурсы (AWS + OpenStack)</li>
            <li>Внедрение GitOps подходов (ArgoCD, Flux)</li>
            <li>Разработка внутренних инструментов для разработчиков</li>
            <li>Обеспечение безопасности инфраструктуры</li>
          </ul>
          
          <h3>Технологический стек:</h3>
          <ul>
            <li>Kubernetes (EKS, собственные дистрибутивы)</li>
            <li>Terraform, Pulumi</li>
            <li>AWS (EC2, S3, RDS, Lambda)</li>
            <li>Prometheus, Thanos, Grafana</li>
            <li>GitLab CI, Argo Workflows</li>
            <li>Python/Go для автоматизации</li>
          </ul>
          
          <h3>Ключевые требования:</h3>
          <ul>
            <li>Опыт работы DevOps/SRE 4+ года</li>
            <li>Глубокие знания Kubernetes (operators, CRDs)</li>
            <li>Опыт работы с облачными провайдерами</li>
            <li>Знание сетевых технологий (CNI, service mesh)</li>
            <li>Умение писать код на скриптовых языках</li>
            <li>Понимание принципов SRE</li>
          </ul>
          
          <h3>Условия работы:</h3>
          <ul>
            <li>Гибкий график и возможность полностью удаленной работы</li>
            <li>Компенсация профессиональных сертификаций</li>
            <li>Ежегодный бюджет на оборудование до 500к</li>
            <li>Бонусы за участие в конференциях</li>
            <li>Современный офис с лабораторией для экспериментов</li>
            <li>Корпоративный трейдинг и инвестиции</li>
          </ul>
          
          <p><em>Процесс найма: скрининг → техническое интервью → практический кейс → собеседование с CTO.</em></p>
        </div>`,
    source: "LinkedIn",
    image: "https://tinkoff.ru/logo.png",
    date_publication: "2025-06-18T16:20:00Z",
  },
  {
    id: 6,
    active: true,
    external_id: "ds6",
    company_name: "Ozon",
    title: "Data Scientist (Recommendation Systems)",
    salary: "от 280 000 Р",
    location: "Москва",
    speciality: "Data Science",
    internship: false,
    remote: false,
    url: "https://ozon.ru/jobs/ds-recommendations",
    description: `<div>
          <h2>О проекте:</h2>
          <p>Наша команда Recommendation Systems отвечает за персонализацию в маркетплейсе Ozon: системы рекомендаций товаров, персональные скидки, email- и push-уведомления. Наши алгоритмы обрабатывают 10M+ событий ежедневно и напрямую влияют на выручку компании.</p>
          
          <h3>Основные задачи:</h3>
          <ul>
            <li>Разработка и улучшение рекомендательных алгоритмов</li>
            <li>Анализ поведения пользователей (clickstream data)</li>
            <li>Feature engineering для ML моделей</li>
            <li>A/B тестирование новых подходов</li>
            <li>Оптимизация производительности prediction pipeline</li>
            <li>Исследование новых методов (LLM for recommendations)</li>
          </ul>
          
          <h3>Технологии и методы:</h3>
          <ul>
            <li>Python (pandas, numpy, scikit-learn)</li>
            <li>Spark (PySpark для обработки больших данных)</li>
            <li>ML: LightFM, TensorFlow Recommenders</li>
            <li>Фреймворки для A/B тестов (внутренняя платформа)</li>
            <li>SQL (ClickHouse, PostgreSQL)</li>
            <li>Airflow для оркестрации</li>
          </ul>
          
          <h3>Мы ищем:</h3>
          <ul>
            <li>Опыт в Data Science 3+ года</li>
            <li>Глубокое понимание ML алгоритмов</li>
            <li>Опыт работы с рекомендательными системами</li>
            <li>Знание статистики и методов тестирования</li>
            <li>Умение визуализировать данные (Matplotlib, Seaborn)</li>
            <li>Базовые знания software engineering</li>
          </ul>
          
          <h3>Что мы предлагаем:</h3>
          <ul>
            <li>Работа с реальными big data (Petabyte-scale)</li>
            <li>Доступ к мощным GPU-кластерам</li>
            <li>Команда из 10+ опытных Data Scientists</li>
            <li>Бюджет на конференции и курсы</li>
            <li>Современный офис в Москва-Сити</li>
            <li>Скидки на товары Ozon</li>
          </ul>
          
          <h3>Процесс отбора:</h3>
          <ol>
            <li>Знакомство с рекрутером</li>
            <li>Техническое собеседование (алгоритмы + ML)</li>
            <li>Разбор case study</li>
            <li>Собеседование с менеджером продукта</li>
          </ol>
        </div>`,
    source: "hh.ru",
    image: "https://ozon.ru/logo.svg",
    date_publication: "2025-06-17T13:10:00Z",
  },
  {
    id: 7,
    active: true,
    external_id: "ds6",
    company_name: "Ozon",
    title: "Data Scientist (Recommendation Systems)",
    salary: "от 280 000 Р",
    location: "Москва",
    speciality: "Data Science",
    internship: false,
    remote: false,
    url: "https://ozon.ru/jobs/ds-recommendations",
    description: `<div>
          <h2>О проекте:</h2>
          <p>Наша команда Recommendation Systems отвечает за персонализацию в маркетплейсе Ozon: системы рекомендаций товаров, персональные скидки, email- и push-уведомления. Наши алгоритмы обрабатывают 10M+ событий ежедневно и напрямую влияют на выручку компании.</p>
          
          <h3>Основные задачи:</h3>
          <ul>
            <li>Разработка и улучшение рекомендательных алгоритмов</li>
            <li>Анализ поведения пользователей (clickstream data)</li>
            <li>Feature engineering для ML моделей</li>
            <li>A/B тестирование новых подходов</li>
            <li>Оптимизация производительности prediction pipeline</li>
            <li>Исследование новых методов (LLM for recommendations)</li>
          </ul>
          
          <h3>Технологии и методы:</h3>
          <ul>
            <li>Python (pandas, numpy, scikit-learn)</li>
            <li>Spark (PySpark для обработки больших данных)</li>
            <li>ML: LightFM, TensorFlow Recommenders</li>
            <li>Фреймворки для A/B тестов (внутренняя платформа)</li>
            <li>SQL (ClickHouse, PostgreSQL)</li>
            <li>Airflow для оркестрации</li>
          </ul>
          
          <h3>Мы ищем:</h3>
          <ul>
            <li>Опыт в Data Science 3+ года</li>
            <li>Глубокое понимание ML алгоритмов</li>
            <li>Опыт работы с рекомендательными системами</li>
            <li>Знание статистики и методов тестирования</li>
            <li>Умение визуализировать данные (Matplotlib, Seaborn)</li>
            <li>Базовые знания software engineering</li>
          </ul>
          
          <h3>Что мы предлагаем:</h3>
          <ul>
            <li>Работа с реальными big data (Petabyte-scale)</li>
            <li>Доступ к мощным GPU-кластерам</li>
            <li>Команда из 10+ опытных Data Scientists</li>
            <li>Бюджет на конференции и курсы</li>
            <li>Современный офис в Москва-Сити</li>
            <li>Скидки на товары Ozon</li>
          </ul>
          
          <h3>Процесс отбора:</h3>
          <ol>
            <li>Знакомство с рекрутером</li>
            <li>Техническое собеседование (алгоритмы + ML)</li>
            <li>Разбор case study</li>
            <li>Собеседование с менеджером продукта</li>
          </ol>
        </div>`,
    source: "hh.ru",
    image: "https://ozon.ru/logo.svg",
    date_publication: "2025-06-17T13:10:00Z",
  },
  {
    id: 8,
    active: true,
    external_id: "ds6",
    company_name: "Ozon",
    title: "Data Scientist (Recommendation Systems)",
    salary: "от 280 000 Р",
    location: "Москва",
    speciality: "Data Science",
    internship: false,
    remote: false,
    url: "https://ozon.ru/jobs/ds-recommendations",
    description: `<div>
          <h2>О проекте:</h2>
          <p>Наша команда Recommendation Systems отвечает за персонализацию в маркетплейсе Ozon: системы рекомендаций товаров, персональные скидки, email- и push-уведомления. Наши алгоритмы обрабатывают 10M+ событий ежедневно и напрямую влияют на выручку компании.</p>
          
          <h3>Основные задачи:</h3>
          <ul>
            <li>Разработка и улучшение рекомендательных алгоритмов</li>
            <li>Анализ поведения пользователей (clickstream data)</li>
            <li>Feature engineering для ML моделей</li>
            <li>A/B тестирование новых подходов</li>
            <li>Оптимизация производительности prediction pipeline</li>
            <li>Исследование новых методов (LLM for recommendations)</li>
          </ul>
          
          <h3>Технологии и методы:</h3>
          <ul>
            <li>Python (pandas, numpy, scikit-learn)</li>
            <li>Spark (PySpark для обработки больших данных)</li>
            <li>ML: LightFM, TensorFlow Recommenders</li>
            <li>Фреймворки для A/B тестов (внутренняя платформа)</li>
            <li>SQL (ClickHouse, PostgreSQL)</li>
            <li>Airflow для оркестрации</li>
          </ul>
          
          <h3>Мы ищем:</h3>
          <ul>
            <li>Опыт в Data Science 3+ года</li>
            <li>Глубокое понимание ML алгоритмов</li>
            <li>Опыт работы с рекомендательными системами</li>
            <li>Знание статистики и методов тестирования</li>
            <li>Умение визуализировать данные (Matplotlib, Seaborn)</li>
            <li>Базовые знания software engineering</li>
          </ul>
          
          <h3>Что мы предлагаем:</h3>
          <ul>
            <li>Работа с реальными big data (Petabyte-scale)</li>
            <li>Доступ к мощным GPU-кластерам</li>
            <li>Команда из 10+ опытных Data Scientists</li>
            <li>Бюджет на конференции и курсы</li>
            <li>Современный офис в Москва-Сити</li>
            <li>Скидки на товары Ozon</li>
          </ul>
          
          <h3>Процесс отбора:</h3>
          <ol>
            <li>Знакомство с рекрутером</li>
            <li>Техническое собеседование (алгоритмы + ML)</li>
            <li>Разбор case study</li>
            <li>Собеседование с менеджером продукта</li>
          </ol>
        </div>`,
    source: "hh.ru",
    image: "https://ozon.ru/logo.svg",
    date_publication: "2025-06-17T13:10:00Z",
  },
];
