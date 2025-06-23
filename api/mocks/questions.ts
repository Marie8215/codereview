import { Question } from "../models/questions";

export const mockQuestions: Question[] = [
  {
    id: 1,
    stack: "JavaScript",
    question: "В чем разница передачи параметров по ссылке и значению?",
    position: "Frontend Developer",
    freq: 5,
    answer: `contentHtml": "<div>\n  <p>В Java все аргументы метода передаются по значению, то есть копируется значение переменной (даже если она ссылочного типа). Однако у ссылочных переменных копируется лишь значение ссылки, а не объекта, на который она ссылается. Поэтому, если происходит изменение состояния объекта, на который ссылается переданная ссылка, то эти изменения будут отражены на объекте, на который ссылается исходная переменная.</p>\n  <p>Таким образом, то, что большинство людей называют &quot;передачей по ссылке&quot;, на самом деле называется &quot;передачей значения ссылки&quot;.</p>\n\n  <h3>Пример</h3>\n  <pre><code class=\"language-java\">public class Test {\n    public static void main(String[] args) {\n        StringBuffer str = new StringBuffer(&quot;hello&quot;);\n        change(str);\n        System.out.println(str);\n    }\n\n    public static void change(StringBuffer newStr) {\n        newStr.append(&quot; world&quot;);\n    }\n}</code></pre>\n\n  <p>В этом примере метод <code>change()</code> принимает ссылку на объект <code>StringBuffer</code> и модифицирует его, добавляя к нему строку &quot; world&quot;. В методе <code>main()</code> переменная <code>str</code> также ссылается на этот же самый объект <code>StringBuffer</code>, поэтому после вызова метода <code>change()</code> будет выведена строка &quot;hello world&quot;.</p>\n\n  <h3>Дополнительный пример, который отражает js</h3>\n  <pre><code class=\"language-js\">&quot;use strict&quot;;\n\ndocument.addEventListener(&quot;DOMContentLoaded&quot;, function () {\n  if (window.restaurants && window.restaurants.length &gt; 0) {\n    // Условия для загрузки API Яндекс.Карт\n    if (typeof ymaps === &quot;undefined&quot;) {\n      let script = document.createElement(&quot;script&quot;);\n      script.src = &quot;https://api-maps.yandex.ru/2.1/?lang=ru_RU&quot;;\n      script.async = true;\n      script.onload = initMap;\n      document.head.appendChild(script);\n    } else {\n      ymaps.ready(initMap);\n    }\n  }\n});</code></pre>\n</div>`,
    tags: "как отвечать на вопрос; пример собеседования; фреймворки на собеседовании; типичные вопросы junior; интервью вопросы и ответы",
  },
  {
    id: 2,
    stack: "JavaScript",
    question: "Объясните Event Loop в JavaScript",
    position: "Frontend Developer",
    freq: 5,
    answer: `contentHtml": "<div>\n  <p>Event Loop - это механизм в JavaScript, который обеспечивает асинхронное выполнение кода. Он постоянно проверяет call stack и очередь задач (task queue), перемещая задачи из очереди в стек, когда он пуст.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-javascript\">console.log('Start');\n\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\n\nconsole.log('End');</code></pre>\n  <p>Вывод будет:</p>\n  <pre>Start\nEnd\nPromise\nTimeout</pre>\n</div>`,
    tags: "event loop; асинхронность; javascript основы; собеседование frontend; микротаски",
  },
  {
    id: 3,
    stack: "React",
    question: "В чем разница между useState и useRef?",
    position: "React Developer",
    freq: 4,
    answer: `contentHtml": "<div>\n  <p>useState и useRef служат разным целям в React:</p>\n  <ul>\n    <li>useState вызывает ререндер компонента при изменении значения</li>\n    <li>useRef сохраняет значение между рендерами без вызова ререндера</li>\n  </ul>\n  <h3>Пример</h3>\n  <pre><code class=\"language-jsx\">function Counter() {\n  const [count, setCount] = useState(0);\n  const refCount = useRef(0);\n  \n  const handleClick = () => {\n    setCount(count + 1);    // Вызовет ререндер\n    refCount.current += 1;   // Не вызовет ререндер\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}</code></pre>\n</div>`,
    tags: "react hooks; useState; useRef; react основы; хуки",
  },
  {
    id: 4,
    stack: "TypeScript",
    question: "Что такое Generic Types в TypeScript?",
    position: "TypeScript Developer",
    freq: 4,
    answer: `contentHtml": "<div>\n  <p>Generics позволяют создавать компоненты, которые могут работать с различными типами данных, сохраняя при этом типобезопасность.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-typescript\">function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst str = identity('hello');    // тип: string\nconst num = identity(42);         // тип: number\n\ninterface Box<T> {\n  value: T;\n}</code></pre>\n</div>`,
    tags: "typescript; дженерики; типизация; собеседование typescript",
  },
  {
    id: 5,
    stack: "JavaScript",
    question: "Что такое замыкания (Closures)?",
    position: "Frontend Developer",
    freq: 5,
    answer: `contentHtml": "<div>\n  <p>Замыкание - это комбинация функции и лексического окружения, в котором эта функция была определена. Это позволяет функции иметь доступ к переменным из внешней области видимости.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-javascript\">function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.getCount());  // 0\ncounter.increment();\nconsole.log(counter.getCount());  // 1</code></pre>\n</div>`,
    tags: "closures; javascript; область видимости; собеседование javascript",
  },
  {
    id: 6,
    stack: "React",
    question: "Объясните принцип Virtual DOM",
    position: "React Developer",
    freq: 4,
    answer: `contentHtml": "<div>\n  <p>Virtual DOM - это легковесная копия реального DOM, которую React использует для оптимизации обновлений интерфейса. React сравнивает Virtual DOM с реальным DOM и обновляет только изменившиеся элементы.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-jsx\">function App() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}</code></pre>\n</div>`,
    tags: "react; virtual dom; оптимизация; react основы",
  },
  {
    id: 7,
    stack: "CSS",
    question: "Разница между Flexbox и Grid",
    position: "Frontend Developer",
    freq: 3,
    answer: `contentHtml": "<div>\n  <p>Flexbox предназначен для одномерной компоновки (строки или столбцы), в то время как Grid создан для двумерной компоновки (строки и столбцы одновременно).</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-css\">.flex-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}</code></pre>\n</div>`,
    tags: "css; верстка; flexbox; grid; layout",
  },
  {
    id: 8,
    stack: "JavaScript",
    question: "Что такое прототипное наследование?",
    position: "JavaScript Developer",
    freq: 4,
    answer: `contentHtml": "<div>\n  <p>Прототипное наследование - это механизм в JavaScript, который позволяет объектам наследовать свойства и методы от других объектов через цепочку прототипов.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-javascript\">function Animal(name) {\n  this.name = name;\n}\n\nAnimal.prototype.speak = function() {\n  console.log(this.name + ' makes a sound.');\n}\n\nfunction Dog(name) {\n  Animal.call(this, name);\n}\n\nDog.prototype = Object.create(Animal.prototype);</code></pre>\n</div>`,
    tags: "javascript; ООП; прототипы; наследование",
  },
  {
    id: 9,
    stack: "React",
    question: "Что такое React.memo и когда его использовать?",
    position: "React Developer",
    freq: 3,
    answer: `contentHtml": "<div>\n  <p>React.memo - это компонент высшего порядка, который может быть использован для оптимизации производительности путём пропуска ненужных ререндеров компонента.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-jsx\">const MyComponent = React.memo(function MyComponent(props) {\n  return (\n    <div>\n      {/* Компонент будет перерендерен только при изменении props */}\n      {props.name}\n    </div>\n  );\n});</code></pre>\n</div>`,
    tags: "react; оптимизация; memoization; производительность",
  },
  {
    id: 10,
    stack: "JavaScript",
    question: "Асинхронность в JavaScript: Promise vs async/await",
    position: "Frontend Developer",
    freq: 5,
    answer: `contentHtml": "<div>\n  <p>Promise и async/await - это способы работы с асинхронным кодом в JavaScript. async/await - это синтаксический сахар над Promise, делающий код более читаемым.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-javascript\">// Promise
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
  // async/await
  async function getData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}</code></pre>\n</div>`,
    tags: "javascript; асинхронность; промисы; async/await",
  },
  {
    id: 11,
    stack: "CSS",
    question: "Что такое CSS-препроцессоры и их преимущества?",
    position: "Frontend Developer",
    freq: 3,
    answer: `contentHtml": "<div>\n  <p>CSS-препроцессоры (SASS, LESS, Stylus) расширяют возможности CSS, добавляя переменные, миксины, вложенные селекторы и другие функции.</p>\n  <h3>Пример</h3>\n  <pre><code class=\"language-scss\">$primary-color: #333;\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  @include flex-center;\n  background-color: $primary-color;\n  \n  &:hover {\n    background-color: lighten($primary-color, 10%);\n  }\n}</code></pre>\n</div>`,
    tags: "css; препроцессоры; sass; less; стилизация",
  },
];
