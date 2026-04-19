# 📋 Task Board (React 19 + Context API)

Select language:
- [🇬🇧 English](#en)
- [🇺🇦 Українська](#ua)

---

## <a name="en"></a> 🇬🇧 English Version

### 🚀 Overview
This is a high-performance, modern version of my Task Board application. It has been evolved from a simple Vanilla JS project into a professionally structured React 19 application using advanced state management and architectural patterns.

🔗 **Original Vanilla JS version:** [https://github.com/dino004/task-board](https://github.com/dino004/task-board)

### 🏗️ Architecture & Architecture Patterns
* **Provider Pattern:** Logic is fully encapsulated within a `TasksProvider`, keeping UI components clean and decoupled.
* **Context API:** Implemented a global state management system to avoid "prop drilling" and ensure data accessibility across the component tree.
* **Atomic Design Principles:** Reusable UI components like `Button` and `Field` for a consistent design system.
* **Module Separation:** Decoupled `TasksContext` and `TasksProvider` to comply with **React Fast Refresh** standards and improve modularity.

### 🌟 Technical Implementation
* **State Management:** Full CRUD cycle with optimized state updates.
* **Performance Optimization:** * `memo()`: Prevents unnecessary re-renders of list items.
    * `useCallback()`: Stabilizes function references passed through context.
    * `useMemo()`: Optimized derived data (e.g., task counters).
* **Data Persistence:** Automatic `localStorage` sync with robust `try...catch` error handling.
* **UX Features:** Manual focus management via `useRef`, semantic HTML, and responsive mobile-first design.

### 🛠️ Tech Stack
* **React 19** (Functional components, Hooks: useState, useEffect, useRef, useCallback, useMemo, useContext)
* **Vite** (Ultra-fast build tool)
* **CSS3** (Custom variables, Flexbox/Grid, smooth transitions)

---

## <a name="ua"></a> 🇺🇦 Українська версія

🚀 Огляд проєкту
Це високопродуктивна сучасна версія мого додатку Task Board. Проєкт еволюціонував від простого Vanilla JS до професійно структурованого додатка на React 19 із використанням просунутих патернів управління станом.

🔗 Оригінальна Vanilla JS версія: https://github.com/dino004/task-board

🏗️ Архітектура та патерни
Provider Pattern: Вся логіка інкапсульована в TasksProvider, що робить UI-компоненти "чистими" та незалежними.

Context API: Глобальне управління станом для уникнення "prop drilling" та зручного доступу до даних.

Atomic Design: Використання атомарних компонентів (Button, Field) для створення цілісної системи дизайну.

Розділення модулів: Окремі файли для TasksContext та TasksProvider для повної сумісності з React Fast Refresh.

🌟 Технічна реалізація
Оптимізація продуктивності:

memo(): Запобігає зайвим рендерам елементів списку.

useCallback(): Стабілізує посилання на функції, що передаються через контекст.

useMemo(): Оптимізація обчислювальних даних (лічильники завдань).

Збереження даних: Синхронізація з localStorage із обробкою помилок try...catch.

UX покращення: Керування фокусом через useRef, семантична верстка та Mobile-first підхід.

🛠️ Технологічний стек
React 19 (Hooks: useState, useEffect, useRef, useCallback, useMemo, useContext)

Vite (Блискавична збірка)

CSS3 (Змінні, Flexbox/Grid, адаптивність)

📦 Installation / Встановлення
git clone https://github.com/dino004/task-board-react

npm install

npm run dev