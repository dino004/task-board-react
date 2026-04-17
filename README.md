# 📋 Task Board (React 19 Version)

Select language:
- [🇬🇧 English](#en)
- [🇺🇦 Українська](#ua)

---

## <a name="en"></a> 🇬🇧 Task Board (EN Version)

📋 Task Board (React 19 Version)
This is a modern React-powered version of my Task Board application. It represents a transition from imperative DOM manipulation to a declarative, component-based architecture.

🔗 Original Vanilla JS version: https://github.com/dino004/task-board

🌟 Key Features & Implementation
State Management: Full CRUD (Create, Read, Update, Delete) cycle using useState.

Data Persistence: Automatic synchronization with localStorage via useEffect.

Performance: Used Lazy Initializer for state to ensure expensive localStorage reads happen only on the initial mount.

Enhanced UX: * Auto-focus: Managed input focus using useRef for a seamless "add-and-type" experience.

Empty States: Friendly UI feedback when the task list is empty.

Accessibility: Proper use of ARIA attributes and semantic HTML.

Responsive Design: Mobile-first approach with CSS Grid/Flexbox and CSS Variables.

🛠️ Tech Stack
React 19 (Functional components, Hooks: useState, useEffect, useRef)

Vite (Build tool for fast HMR)

Vanilla CSS (Custom variables, transitions, and responsive grid)

🚀 What I Learned During This Rewrite
Declarative UI: Instead of manually appending/removing elements, I now describe what the UI should look like based on the state.

Prop Drilling: Understanding how to pass data and functions through component levels.

Stability: Handling JSON parsing errors with try...catch in the initial state.

📦 Installation
Clone the repo: git clone ...

Install dependencies: npm install

Start dev server: npm run dev

---


## <a name="ua"></a> 🇺🇦 Task Board (UA Version)

📋 Task Board (React 19 Version)
Це сучасна версія мого додатку Task Board, переписана на React. Проєкт став результатом переходу від маніпуляцій з DOM (Imperative JS) до декларативної компонентної архітектури.

🔗 Оригінальна версія на Vanilla JS: https://github.com/dino004/task-board

🌟 Ключові особливості та реалізація
Управління станом: Реалізовано повний цикл CRUD (створення, читання, оновлення, видалення) за допомогою useState.

Збереження даних: Автоматична синхронізація з localStorage через useEffect.

Оптимізація продуктивності: Використано Lazy Initializer для стейту, що забезпечує зчитування з localStorage лише під час першого рендерингу.

Покращений UX:

Автофокус: Керування фокусом інпуту за допомогою useRef для безперервного введення завдань.

Обробка порожніх станів: Зручний інтерфейс з візуальним фідбеком, коли список завдань порожній.

Доступність (Accessibility): Використання ARIA-атрибутів та семантичної верстки.

Адаптивний дизайн: Mobile-first підхід з використанням CSS Grid/Flexbox та CSS Variables.

🛠️ Технологічний стек
React 19 (Функціональні компоненти, хуки: useState, useEffect, useRef)

Vite (Швидка збірка та HMR)

Vanilla CSS (Власні змінні, транзішн-ефекти та адаптивна сітка)

🚀 Чого я навчився під час рефакторингу
Декларативний UI: Замість ручного додавання/видалення елементів, я описую стан інтерфейсу, а React дбає про оновлення.

Prop Drilling: Робота з передачею даних та функцій через рівні компонентів.

Надійність: Обробка помилок парсингу JSON за допомогою try...catch при ініціалізації даних.

📦 Встановлення та запуск
Клонувати репозиторій: git clone ...

Встановити залежності: npm install

Запустити сервер для розробки: npm run dev