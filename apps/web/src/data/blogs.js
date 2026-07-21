const blogs = [
  {
    id: 1,
    slug: "top-50-react-interview-questions-2026",
    title: "Top 50 React Interview Questions & Answers (2026 Edition)",
    description:
      "Master your next frontend interview with the top 50 React interview questions and answers, trusted by top tech companies like TCS, Infosys, Accenture, Deloitte, Capgemini, and Cognizant.",
    image: "/react-blog.jpg",
    author: "GotPlaced Team",
    category: "React",
    date: "16 July 2026",
    readTime: "14 min read",

    content: `
React remains the undisputed king of frontend JavaScript libraries, powering modern web applications across the globe. Whether you are aiming for product-based tech giants or service-based leaders like **TCS, Infosys, Accenture, Deloitte, Capgemini, and Cognizant**, solidifying your core React concepts is the ultimate key to cracking the interview.

In this comprehensive guide, we have curated the **Top 50 React Interview Questions and Answers**—divided neatly into Beginner, Intermediate, and Advanced sections—complete with short, crisp, production-ready answers that you can instantly use to ace your interviews.

---

### Part 1: Beginner Level (Q1–Q15)

**1. What is React?**
A component-based JavaScript library developed by Meta for building user interfaces and single-page applications efficiently.

**2. What is the Virtual DOM?**
A lightweight, in-memory copy of the real DOM. React uses it to calculate minimal updates (diffing and reconciliation) before modifying the real DOM.

**3. Real DOM vs. Virtual DOM?**
Real DOM is slow, heavy, and updates entire node trees. Virtual DOM is fast, lightweight, and updates only changed elements.

**4. What is JSX?**
JavaScript XML. It lets you write HTML inside JavaScript. Browsers can't read it natively, so tools like Babel transpile it into standard JS.

**5. Functional vs. Class Components?**
Functional components are simple JS functions using Hooks (\`useState\`). Class components use ES6 classes, \`this\`, and lifecycle methods.

**6. What are Props?**
Properties passed from parent to child components. **Props are immutable** (read-only) and cannot be modified by the child.

**7. What is State?**
An internal data store managed inside a component. Unlike props, state is mutable and triggers re-renders when updated.

**8. How do you handle events in React?**
Using camelCase syntax (e.g., \`onClick\`) and passing a function reference instead of a string.

**9. What is Conditional Rendering?**
Rendering elements dynamically based on conditions using JavaScript operators like ternary (\`? :\`), logical \`&&\`, or \`if/else\`.

**10. How do you render lists?**
Using the JavaScript \`map()\` method, paired with a unique \`key\` prop for each item.

**11. Why avoid array indexes as keys?**
Using indexes causes UI bugs and state issues when items are reordered, deleted, or inserted. Always use unique IDs.

**12. What are React Hooks?**
Functions introduced in React 16.8 that let functional components use state and lifecycle features without writing classes.

**13. What is \`useState\`?**
A hook that adds state to functional components. Syntax: \`const [state, setState] = useState(initialValue);\`.

**14. What is \`useEffect\`?**
A hook used for handling side effects like data fetching, subscriptions, or manual DOM manipulations.

**15. How does the dependency array work in \`useEffect\`?**
- No array: Runs on every render.
- Empty \`[]\`: Runs once on mount.
- \`[value]\`: Runs on mount and when \`value\` changes.

---

### Part 2: Intermediate Level (Q16–Q35)

**16. What is the Context API?**
A built-in feature to share global data (like themes or auth status) across the component tree without prop drilling.

**17. How do you use Context?**
Create it with \`createContext()\`, wrap components in \`<Context.Provider value="{}" />\`, and read it using \`useContext(Context)\`.

**18. What is Prop Drilling?**
Passing props through multiple intermediate components that don't need them just to reach a deeply nested child. Avoid using Context or Redux.

**19. What are Custom Hooks?**
Reusable JavaScript functions starting with \`"use"\` that extract and share component logic using other hooks.

**20. What is \`useRef\`?**
A hook returning a mutable \`.current\` object that persists across renders. Used to access DOM elements or store values without re-rendering.

**21. \`useMemo\` vs. \`useCallback\`?**
\`useMemo\` caches the **result** of an expensive calculation. \`useCallback\` caches a **function definition** to prevent child re-renders.

**22. Controlled vs. Uncontrolled Components?**
Controlled forms manage input data via React state. Uncontrolled forms manage data using the DOM itself via \`useRef\`.

**23. What are Higher-Order Components (HOCs)?**
Functions that take a component and return a new enhanced component with extra logic or props.

**24. What are React Portals?**
A way to render children into a DOM node outside the parent component's hierarchy (great for modals and tooltips).

**25. What is Code Splitting?**
Splitting code into smaller bundles loaded on demand using \`React.lazy()\` and \`Suspense\` to improve initial load times.

**26. What is Lazy Loading & Suspense?**
Lazy loading defers loading components until needed; Suspense shows fallback UI (like a spinner) while waiting.

**27. What are Error Boundaries?**
Class components that catch JavaScript errors anywhere in their child tree, preventing the entire app from crashing.

**28. What is React Router?**
A library enabling navigation and multi-page routing in single-page React apps without full page reloads.

**29. How do you pass data between siblings?**
By "Lifting State Up"—moving the shared state to their closest common parent component.

**30. CSR vs. SSR?**
- CSR (Client-Side): Browser loads raw HTML and executes JS locally.
- SSR (Server-Side): Server generates full HTML per request, improving SEO and initial speed.

**31. What is Next.js?**
A React framework providing server-side rendering, static generation, file-based routing, and built-in SEO.

**32. How do you optimize React performance?**
Use \`React.memo\`, \`useMemo\`, \`useCallback\`, code-splitting, list virtualization, and optimized asset sizes.

**33. What are Pure Components?**
Components (\`React.memo\` or \`PureComponent\`) that re-render only when their props or state change via shallow comparison.

**34. What is StrictMode?**
A development tool that activates extra checks, warnings, and double-invokes functions to spot potential bugs.

**35. How do you handle API calls?**
Inside \`useEffect\` hooks using async/await with native \`fetch\` or third-party tools like Axios.

---

### Part 3: Advanced Level & State Management (Q36–Q50)

**36. What is Redux?**
A predictable global state container governed by three principles: single source of truth, read-only state, and pure reducer functions.

**37. Why use Redux Toolkit (RTK)?**
It simplifies Redux setup, cuts down boilerplate code, includes built-in immutability, and provides \`createSlice\`.

**38. What is Redux Middleware?**
Extensions sitting between dispatching an action and reaching the reducer (used for logging or async logic).

**39. What is Redux Thunk?**
Middleware enabling action creators to return functions instead of objects, allowing async API calls inside actions.

**40. What is Zustand?**
A fast, lightweight, hook-based state management library with minimal boilerplate compared to Redux.

**41. What is React Fiber?**
React's core reconciliation engine that enables incremental rendering, pausing/resuming work, and priority-based updates.

**42. How do you prevent memory leaks with async requests?**
Use a cleanup flag or \`AbortController\` inside \`useEffect\` to avoid updating state on unmounted components.

**43. What are Render Props?**
A pattern where a component takes a function returning a React element as a prop to share logic.

**44. What is SyntheticEvent?**
React's cross-browser wrapper around native browser events ensuring consistent properties across all browsers.

**45. What are Server Components (RSC)?**
Components running exclusively on the backend that fetch data and send zero-bundle-size HTML to the client.

**46. How do you test React components?**
Using Jest as a test runner and React Testing Library (RTL) to test user-centric interactions.

**47. What is Lifting State Up?**
Moving shared state from sibling components up to their closest common parent.

**48. What is Hydration?**
The process where React attaches event listeners to server-rendered static HTML, making it interactive.

**49. How do you debounce/throttle in React?**
Using utility libraries like Lodash or custom hooks to limit how frequently event handlers run.

**50. Common security risks in React?**
XSS attacks (mitigated by default JSX escaping; avoid \`dangerouslySetInnerHTML\`) and unsafe token storage.

---

### Conclusion
Preparing these top 50 questions will give you a massive edge in technical interview rounds for companies like **TCS, Infosys, Accenture, Deloitte, Capgemini, and Cognizant**. Keep practicing, build small projects, and stay updated with modern React patterns to lock in your next big job offer!
`,
  },

  {
    id: 2,
    slug: "best-resume-format-for-freshers",
    title: "Best Resume Format for Freshers",
    description:
      "Create an ATS-friendly resume that helps you get interview calls.",
    image: "/resume-blog.jpg",
    author: "GotPlaced Team",
    category: "Resume",
    date: "16 July 2026",
    readTime: "8 min read",

    content: `
A resume is your first impression during placements.

In this guide you'll learn:

• ATS Friendly Resume Format

• Resume Sections

• Resume Projects

• Skills

• Certifications

• Common Resume Mistakes

More resume tips coming soon...
`,
  },
  {
  id: 3,
  slug: "tcs-nqt-preparation-guide-2026",
  title: "TCS NQT Preparation Guide 2026",
  description:
    "Complete TCS NQT preparation guide with syllabus, aptitude, coding questions and interview tips.",
  image: "/tcs-blog.jpg",
  author: "GotPlaced Team",
  category: "Placement",
  date: "16 July 2026",
  readTime: "12 min read",

  content: `
# TCS NQT Preparation Guide 2026

TCS National Qualifier Test (NQT) is one of the most popular hiring exams for freshers.

## Eligibility

• Final Year Students

• Fresh Graduates

## Exam Pattern

• Verbal Ability

• Numerical Ability

• Reasoning Ability

• Coding

## Preparation Tips

✔ Practice Aptitude Daily

✔ Solve Previous Year Papers

✔ Learn DSA Basics

✔ Practice Coding Questions

## Interview Tips

• Revise Resume

• Practice HR Questions

• Learn OOP Concepts

• Improve Communication

## Conclusion

Consistent preparation and mock tests can significantly improve your chances of clearing TCS NQT.
`,
},
{
  id: 4,
  slug: "top-50-javascript-interview-questions-2026",
  title: "Top 50 JavaScript Interview Questions and Answers (2026)",
  description: "Prepare for your next tech interview with top 50 carefully curated JavaScript interview questions and answers. Covers ES6+, Closures, Asynchronous JS, Event Loop, DOM, and Performance Optimization.",
  image: "/javascript-blog.jpg",
  author: "GotPlaced Team",
  category: "JavaScript",
  date: "16 July 2026",
  readTime: "18 min read",
  content: `Top 50 JavaScript Interview Questions and Answers (2026)

JavaScript continues to rule the web development ecosystem. Whether you are aiming for service-based giants like TCS, Infosys, and Wipro, or top product companies like Amazon and Flipkart, clearing technical rounds requires a rock-solid understanding of core concepts.

This comprehensive guide brings you the top 50 most frequently asked JavaScript interview questions, structured cleanly for freshers and experienced developers alike.

------------------------------------------------

Table of Contents

- Core JavaScript and Fundamentals (Q1 - Q10)
- Scope, Closures and Advanced Functions (Q11 - Q20)
- ES6+ Modern Features and Syntax (Q21 - Q30)
- Asynchronous JavaScript and The Event Loop (Q31 - Q40)
- DOM Manipulation, Browser APIs and Performance (Q41 - Q50)

------------------------------------------------

Core JavaScript and Fundamentals (Q1 - Q10)

1. What is JavaScript?
JavaScript is a high-level, interpreted, dynamic programming language primarily used to add interactivity and logic to web applications. It supports event-driven, functional, and object-oriented programming paradigms.

2. What is the difference between var, let, and const?
- var: Function-scoped, can be redeclared and updated, and is hoisted with an initial value of undefined.
- let: Block-scoped, can be updated but not redeclared in the same scope, and stays in the Temporal Dead Zone until initialized.
- const: Block-scoped, cannot be redeclared or reassigned. It must be initialized during declaration (though reference properties can still be mutated).

3. What is hoisting?
Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during the compilation phase before the actual code execution begins.

4. What is the difference between == and ===?
- == (Abstract Equality): Performs type coercion if the operands are of different types before comparing their values.
- === (Strict Equality): Compares both the value and the data type without performing any type conversion.

5. What is type coercion?
Type coercion is the automatic or implicit conversion of values from one data type to another (for example, combining a string and a number: "5" + 1 results in "51").

6. What is the difference between null and undefined?
- undefined: A variable has been declared but has not been assigned any value yet.
- null: An intentional assignment representing the intentional absence of any object value.

7. What is NaN?
NaN stands for Not-a-Number. It represents a computational value that is not a legal number, resulting from invalid or broken mathematical operations (for example, 0 / 0).

8. What are template literals?
Template literals are string literals enclosed by backticks that allow embedded expressions, multi-line strings, and string interpolation using expression placeholders.

9. What are default parameters?
Default parameters allow function parameters to be initialized with default values if no arguments or undefined are passed into the function.

10. Explain Arrow Functions.
Arrow functions provide a concise syntax for writing function expressions. They do not have their own this, arguments, or super, inheriting this lexically from their surrounding execution context.

------------------------------------------------

Scope, Closures and Advanced Functions (Q11 - Q20)

11. What is a closure?
A closure is a function bundled together with references to its surrounding lexical environment. It allows an inner function to access an outer function's variables even after the outer function has returned.

12. What is scope in JavaScript?
Scope defines the accessibility and visibility of variables. JavaScript has global scope, function scope, and block scope (introduced via let and const).

13. What is an IIFE (Immediately Invoked Function Expression)?
An IIFE is a JavaScript function that runs as soon as it is defined. It is commonly used to create a private scope and avoid polluting the global namespace.

14. What is currying?
Currying is an advanced technique of translating a function that takes multiple arguments into a sequence of functions, each taking a single argument.

15. What are call, apply, and bind?
These are methods used to set the context of the this keyword explicitly:
- call: Invokes the function immediately and passes arguments individually.
- apply: Invokes the function immediately and passes arguments as an array.
- bind: Returns a new bound function that can be invoked later.

16. What is memoization?
Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

17. What is a prototype and the prototype chain?
Every JavaScript object has a private property pointing to another object called its prototype. If a property is not found on an object, JavaScript looks up its prototype chain until it reaches null.

18. What is object inheritance in JavaScript?
Inheritance allows objects to inherit properties and methods from other objects. Modern JavaScript uses ES6 class syntax as syntactic sugar over prototype-based inheritance.

19. What is the difference between shallow copy and deep copy?
- Shallow Copy: Copies top-level properties; nested objects and arrays are still referenced by memory address.
- Deep Copy: Recursively copies all levels of an object, creating an entirely independent clone.

20. What is strict mode?
Strict mode opts into a restricted variant of JavaScript, turning silent errors into visible runtime exceptions and preventing unsafe actions like using undeclared variables.

------------------------------------------------

ES6+ Modern Features and Syntax (Q21 - Q30)

21. What is the spread operator?
The spread operator unpacks elements of an array or properties of an object into individual components.

22. What is the rest operator?
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

23. What is destructuring assignment?
Destructuring makes it possible to unpack values from arrays or properties from objects directly into distinct variables.

24. What are JavaScript Modules?
Modules (import and export) allow you to break up your codebase into separate, reusable files, keeping the global scope clean.

25. What is optional chaining?
Optional chaining lets you safely read the value of a property located deep within a chain of connected objects without checking if each reference is nullish.

26. What is nullish coalescing?
The nullish coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined, unlike the logical OR operator which checks for all falsy values.

27. What is BigInt?
BigInt is a built-in object that provides a way to represent whole numbers larger than the safe integer limit.

28. What is a Symbol?
A Symbol is a unique and immutable primitive data type often used as hidden or unique object property keys to avoid naming collisions.

29. What are Maps and Sets?
- Map: A collection of keyed data items where keys can be of any type.
- Set: A collection of unique values where duplicate entries are automatically discarded.

30. What are Generators?
Generators are special functions that can be paused and resumed using the yield keyword, returning an iterable object.

------------------------------------------------

Asynchronous JavaScript and The Event Loop (Q31 - Q40)

31. How does JavaScript handle asynchronous operations?
JavaScript is single-threaded, but it achieves asynchronous behavior using callbacks, promises, and the browser runtime environment.

32. What is a callback function?
A function passed as an argument to another function to be executed later once an asynchronous task completes.

33. What is Callback Hell?
Callback hell refers to deeply nested, unreadable callback functions tangled together, making code difficult to maintain and debug.

34. What is a Promise?
An object representing the eventual completion or failure of an asynchronous operation, existing in one of three states: pending, fulfilled, or rejected.

35. Explain Promise.all vs Promise.allSettled.
- Promise.all: Fails fast if any single promise rejects.
- Promise.allSettled: Waits for all promises to settle and returns an array of their status objects.

36. What is async/await?
Syntactic sugar built on top of Promises that allows asynchronous code to be written in a synchronous, cleaner, and more readable layout.

37. What is the Event Loop?
The Event Loop is a continuous monitoring mechanism that checks if the call stack is empty. If it is, it pushes tasks from the callback queue or microtask queue into the call stack.

38. What is the difference between Microtasks and Macrotasks?
- Microtasks: High priority queue like Promises, executed immediately after the current script stack clears.
- Macrotasks: Lower priority queue like setTimeout and setInterval, executed in subsequent loop iterations.

39. What is the Fetch API?
A modern, promise-based interface for making HTTP requests to servers from web browsers.

40. What is CORS (Cross-Origin Resource Sharing)?
A security mechanism implemented by browsers that restricts web pages from making requests to a different domain than the one that served the web page, unless permitted by headers.

------------------------------------------------

DOM Manipulation, Browser APIs and Performance (Q41 - Q50)

41. What is the DOM?
The Document Object Model is an object-oriented representation of the web page, allowing scripts to update document structure, style, and content dynamically.

42. What is event bubbling and capturing?
- Bubbling: Events trigger from the target element and propagate upward to ancestors.
- Capturing: Events travel downward from the root element to the target element.

43. What is event delegation?
A technique where a single event listener is attached to a parent element to handle events on its current and future child elements using event bubbling.

44. What is the difference between preventDefault() and stopPropagation()?
- preventDefault(): Stops the default browser action associated with the event.
- stopPropagation(): Stops the event from bubbling up or capturing down further through the DOM tree.

45. What is the difference between localStorage, sessionStorage, and Cookies?
- localStorage: Persistent key-value storage that survives browser restarts.
- sessionStorage: Cleared automatically when the page session ends.
- Cookies: Small data pieces sent with HTTP requests, supporting explicit expiration dates and secure flags.

46. What is debouncing?
A programming practice that ensures a function is only triggered after a specific amount of time has elapsed since the last time it was invoked.

47. What is throttling?
A technique that limits the rate at which a function can fire, ensuring it runs at most once in a specified time interval.

48. What is a memory leak?
Unintentional memory retention in an application where objects are no longer needed by the app, but garbage collection fails to clear them due to active references.

49. What is garbage collection?
An automated memory management mechanism where the engine frees up memory occupied by objects that are no longer reachable or referenced in the code.

50. What is tree shaking?
A build-time optimization technique used by modern bundlers to eliminate dead, unused code from the final production bundle.

------------------------------------------------

Top Companies Asking JavaScript Questions

- TCS
- Infosys
- Wipro
- Cognizant
- Accenture
- Capgemini
- Deloitte
- IBM
- Amazon
- Flipkart

------------------------------------------------

Preparation Tips

- Practice ES6+ syntax daily.
- Master asynchronous programming flow.
- Build real-world portfolio projects.
- Solve JavaScript coding questions regularly.
- Understand the Event Loop and memory management.

------------------------------------------------

Conclusion

Strong JavaScript fundamentals are essential for cracking frontend and full-stack interviews. Practice these questions regularly and build real-world projects to strengthen your concepts before placement season.

Happy Coding!

Team GotPlaced
`
},
{
  id: 5,
  slug: "top-50-sql-interview-questions-2026",
  title: "Top 50 SQL Interview Questions and Answers (2026)",
  description: "Prepare for your next tech interview with top 50 carefully curated SQL interview questions and answers. Covers Joins, Normalization, Indexes, Stored Procedures, Transactions, and Performance Tuning.",
  image: "/sql-blog.jpg",
  author: "GotPlaced Team",
  category: "SQL",
  date: "16 July 2026",
  readTime: "20 min read",
  content: `Top 50 SQL Interview Questions and Answers (2026)

SQL is one of the most frequently asked technologies in placement interviews. Whether you are preparing for TCS, Infosys, Accenture, Cognizant, Capgemini, Wipro, Deloitte, or product-based companies, mastering SQL is essential.

In this guide, you will learn the most important SQL interview questions with clear and professional answers.

------------------------------------------------

Table of Contents

- Database Basics and Constraints (Q1 - Q10)
- Joins and Aggregations (Q11 - Q20)
- Advanced Queries and Subqueries (Q21 - Q30)
- Indexing, Views and Performance (Q31 - Q40)
- Transactions, Procedures and Normalization (Q41 - Q50)

------------------------------------------------

Database Basics and Constraints (Q1 - Q10)

1. What is SQL?
SQL (Structured Query Language) is a standard programming language used to store, retrieve, update, and manage data in relational database management systems.

2. Difference between DELETE, TRUNCATE and DROP?
- DELETE: Removes selected rows based on a condition, can use WHERE clause, and changes can be rolled back.
- TRUNCATE: Removes all rows from a table quickly, cannot use WHERE clause, and resets identity columns.
- DROP: Deletes the entire table structure and data permanently from the database.

3. What is a Primary Key?
A Primary Key uniquely identifies every record in a table. It cannot accept NULL values and must contain unique values.

4. What is a Foreign Key?
A Foreign Key is a field (or collection of fields) in one table that uniquely identifies a row of another table, establishing a link and enforcing referential integrity.

5. What is a Composite Key?
A Composite Key is a combination of two or more columns in a table that together uniquely identify every row when no single column can serve as a unique primary key.

6. Difference between WHERE and HAVING clause?
- WHERE: Filters individual rows before any grouping or aggregation takes place.
- HAVING: Filters data after the grouping operation has been executed using GROUP BY.

7. What are constraints in SQL?
Constraints are rules used to limit the type of data that can go into a table, ensuring the accuracy and integrity of the data (e.g., NOT NULL, UNIQUE, CHECK, DEFAULT).

8. What is a Unique Constraint?
A Unique Constraint ensures that all values in a column are different across records, though unlike a primary key, it can accept a single NULL value.

9. What is the difference between UNION and UNION ALL?
- UNION: Combines the result sets of two or more queries and removes duplicate rows.
- UNION ALL: Combines result sets including all duplicates, making it faster than UNION.

10. What is a Default Constraint?
A Default Constraint provides a default value to a column when no value is explicitly specified during an INSERT operation.

------------------------------------------------

Joins and Aggregations (Q11 - Q20)

11. What are Joins in SQL?
Joins are used to combine rows from two or more tables based on a related column between them.

12. Explain INNER JOIN.
An INNER JOIN returns only the records that have matching values in both tables involved in the join.

13. Explain LEFT JOIN (or LEFT OUTER JOIN).
A LEFT JOIN returns all records from the left table, and the matched records from the right table. If there is no match, the result is NULL on the right side.

14. Explain RIGHT JOIN (or RIGHT OUTER JOIN).
A RIGHT JOIN returns all records from the right table, and the matched records from the left table. If there is no match, the result is NULL on the left side.

15. Explain FULL JOIN (or FULL OUTER JOIN).
A FULL JOIN returns all records when there is a match in either the left or the right table records, filling with NULLs where matches are absent.

16. What is a CROSS JOIN?
A CROSS JOIN produces a Cartesian product of the two tables, returning every possible combination of rows from the joined tables.

17. What is a SELF JOIN?
A SELF JOIN is a regular join where a table is joined with itself, commonly used to query hierarchical data or find relationships within the same table.

18. What are Aggregate Functions?
Aggregate functions perform calculations on a set of values and return a single scalar value (e.g., COUNT, SUM, AVG, MAX, MIN).

19. Explain the GROUP BY clause.
The GROUP BY statement groups rows that have the same values into summary rows, typically used alongside aggregate functions.

20. How do you find the second highest salary from an employee table?
Using a subquery or limit clause, such as: SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);

------------------------------------------------

Advanced Queries and Subqueries (Q21 - Q30)

21. What is a Subquery?
A Subquery is a query nested inside another SQL query, such as within a WHERE, SELECT, or FROM clause.

22. Difference between Correlated and Non-Correlated Subquery?
- Non-Correlated: Can be run independently of the outer query.
- Correlated: Depends on values from the outer query, meaning it executes repeatedly for each row evaluated by the outer query.

23. What is a CTE (Common Table Expression)?
A CTE is a temporary named result set defined within the execution scope of a single SELECT, INSERT, UPDATE, or DELETE statement, making complex queries more readable using the WITH clause.

24. What are Window Functions?
Window functions perform calculations across a set of table rows that are somehow related to the current row without collapsing the rows into a single output (e.g., ROW_NUMBER, RANK, DENSE_RANK).

25. Difference between RANK, DENSE_RANK, and ROW_NUMBER?
- ROW_NUMBER: Assigns a unique sequential integer to rows starting from 1.
- RANK: Assigns rankings with gaps in the sequence if there are ties.
- DENSE_RANK: Assigns rankings without gaps in the sequence even if there are ties.

26. What is a CASE statement?
A CASE statement is SQL's way of handling if-then-else logic within queries to return conditional values.

27. How do you find duplicate rows in a table?
Using GROUP BY and HAVING: SELECT column_name, COUNT(*) FROM table_name GROUP BY column_name HAVING COUNT(*) > 1;

28. What is NULL handling using COALESCE?
COALESCE evaluates arguments in order and returns the first non-null value found in the list.

29. What is pattern matching in SQL using LIKE?
The LIKE operator is used in a WHERE clause to search for a specified pattern in a column using wildcards like percentage and underscore.

30. How do you limit query results?
Using LIMIT in MySQL/PostgreSQL, TOP in SQL Server, or ROWNUM/FETCH FIRST in Oracle.

------------------------------------------------

Indexing, Views and Performance (Q31 - Q40)

31. What is an Index?
An Index is a database performance tuning method that speeds up data retrieval operations on a table at the cost of additional storage space and slower write operations.

32. Difference between Clustered and Non-Clustered Index?
- Clustered Index: Sorts and stores the data rows in the table based on their key values. A table can have only one clustered index.
- Non-Clustered Index: Creates a separate structure from the data rows that points back to the data table location. A table can have multiple non-clustered indexes.

33. What is a View?
A View is a virtual table based on the result-set of an SQL statement, containing rows and columns just like a real table but without storing data physically.

34. What is a Materialized View?
A Materialized View is a database object that contains the results of a query physically stored on disk, improving performance for heavy read operations.

35. What is Query Optimization?
Query optimization is the process of improving the performance and execution time of SQL queries by tuning indexes, rewriting logic, and analyzing execution plans.

36. What is an Execution Plan?
An Execution Plan is a roadmap showing how the database engine will execute an SQL query to retrieve data.

37. What is a Stored Procedure?
A Stored Procedure is a prepared SQL code that you can save and reuse repeatedly, enhancing performance, security, and modularity.

38. What is a Database Trigger?
A Trigger is a special type of stored procedure that automatically runs when an event (like INSERT, UPDATE, or DELETE) occurs on a database table.

39. What is the difference between a Function and a Stored Procedure?
- Function: Must return a value, cannot handle transactions, and can be called from inside queries.
- Stored Procedure: Can return multiple values via parameters, allows transaction management, and is executed using the EXEC keyword.

40. What is Database Connection Pooling?
Connection pooling maintains a cache of active database connections so they can be reused when future requests to the database are required.

------------------------------------------------

Transactions, Procedures and Normalization (Q41 - Q50)

41. What is a Transaction?
A transaction is a sequence of one or more SQL operations executed as a single logical unit of work.

42. What are ACID properties?
- Atomicity: Ensures all operations within a transaction complete successfully or none at all.
- Consistency: Ensures database constraints and rules remain valid after a transaction.
- Isolation: Ensures transactions execute independently without interference.
- Durability: Ensures changes made by committed transactions survive system failures.

43. Explain COMMIT and ROLLBACK.
- COMMIT: Permanently saves the changes made during the current transaction.
- ROLLBACK: Reverts the changes made during the current transaction back to its starting point or savepoint.

44. What is Normalization?
Normalization is the process of organizing data in a database to reduce data redundancy and improve data integrity.

45. Explain 1NF, 2NF, and 3NF.
- 1NF (First Normal Form): Eliminates duplicate columns and ensures atomic values in every column.
- 2NF (Second Normal Form): Must be in 1NF and have no partial dependencies on a composite primary key.
- 3NF (Third Normal Form): Must be in 2NF and have no transitive dependencies (non-key columns depending on other non-key columns).

46. What is Denormalization?
Denormalization is the practice of introducing redundancy into a normalized database to improve read performance for analytical queries.

47. What is a Deadlock?
A deadlock occurs when two or more transactions hold locks on resources the other transactions need, causing all of them to wait indefinitely.

48. What is Database Sharding?
Sharding is a horizontal partitioning technique where large databases are split into smaller, faster, and more easily managed pieces called shards across multiple servers.

49. What are Database Caching strategies?
Caching stores frequently accessed database query results in fast memory storage like Redis or Memcached to reduce database load.

50. What is SQL Injection?
SQL Injection is a security vulnerability where an attacker can execute malicious SQL statements by manipulating input fields in an application.

------------------------------------------------

Top Companies Asking SQL Questions

- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Amazon
- Flipkart

------------------------------------------------

Preparation Tips

- Practice SQL queries and complex joins daily.
- Master subqueries, CTEs, and window functions.
- Understand database normalization rules.
- Revise indexes and query optimization concepts.
- Practice regularly on MySQL or PostgreSQL.

------------------------------------------------

Conclusion

Strong SQL knowledge is essential for software development, data analytics, backend engineering, and placement interviews. Master these concepts and practice writing queries to improve your interview performance.

Happy Learning!

Team GotPlaced
`
},
{
  id: 6,

  slug: "top-100-java-interview-questions-2026",

  title: "Top 100 Java Interview Questions and Answers (2026)",

  description:
    "Prepare for Java interviews with the top 100 Java interview questions and answers for freshers and experienced developers. Covers OOP, Collections, Multithreading, JVM, Exception Handling, Streams, Java 8 Features, and more.",

  image: "/java-blog.jpg",

  author: "GotPlaced Team",

  category: "Java",

  date: "16 July 2026",

  readTime: "24 min read",

  content: `Top 100 Java Interview Questions and Answers (2026)

Java is one of the most demanded programming languages for placements and software development. Companies like TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Oracle, and Amazon frequently ask Java interview questions.

This guide covers the most important Java interview questions for freshers and experienced developers.

Topics Covered:
- Java Basics & Fundamentals
- OOPs Concepts
- String Handling
- Exception Handling
- Java Collections Framework
- Multithreading & Concurrency
- JVM Architecture & Memory Management
- Java 8+ Features
- Advanced Concepts & Miscellaneous

1. Java Basics & Fundamentals

Q1. What is Java?
Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.

Q2. What are the key features of Java?
Simple, Object-Oriented, Platform Independent, Portable, Robust, Secure, Multithreaded, Dynamic, and High Performance.

Q3. What is JVM?
JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed.

Q4. Difference between JDK, JRE, and JVM?
JDK (Java Development Kit): Tool for development (contains JRE + Development Tools).
JRE (Java Runtime Environment): Environment to execute programs (contains JVM + Libraries).
JVM (Java Virtual Machine): Executes the bytecode (.class files).

Q5. Why is Java platform independent?
Because the Java compiler converts source code into bytecode, which can run on any OS using the respective JVM ("Write Once, Run Anywhere").

Q6. What is the difference between C++ and Java?
Java does not support explicit pointers, multiple inheritance through classes, or operator overloading, and it handles garbage collection automatically.

Q7. What are primitive data types in Java?
byte, short, int, long, float, double, boolean, and char.

Q8. Why is Java not a 100% pure object-oriented language?
Because it supports primitive data types (like int, char, boolean) which are not objects.

Q9. What are Wrapper classes?
Wrapper classes convert primitives into objects (e.g., Integer for int, Double for double). Autoboxing and Unboxing automate this.

Q10. What is the main method signature in Java and why is it static?
public static void main(String[] args). It is static so the JVM can call it without creating an object of the class.

Q11. What is the difference between instance variable and local variable?
Instance variables are declared inside a class but outside methods and get default values. Local variables are declared inside methods/blocks and must be initialized before use.

Q12. What is the static keyword in Java?
Used for memory management. Applies to variables, methods, blocks, and nested classes, belonging to the class rather than instances.

Q13. Can we execute a Java program without the main() method?
Prior to Java 7, it was possible using a static block. From Java 7 onwards, the main() method is mandatory.

Q14. What is the final keyword?
Variable: Value cannot be modified (constant).
Method: Cannot be overridden.
Class: Cannot be inherited.

Q15. What is the difference between == and .equals()?
== checks for reference (memory location) equality, while .equals() checks for content equality.

2. Object-Oriented Programming (OOP)

Q16. What is OOP?
Object-Oriented Programming structures programs around objects and classes rather than actions and logic.

Q17. What are the four main pillars of OOP?
Encapsulation, Inheritance, Polymorphism, and Abstraction.

Q18. What is Inheritance?
Mechanism where one class acquires the properties and behaviors of a parent class using the extends keyword.

Q19. Why does Java not support multiple inheritance with classes?
To avoid the Diamond Problem (ambiguity in method resolution). It is achieved using Interfaces instead.

Q20. What is Polymorphism?
Ability of an object/method to take on multiple forms. Types: Compile-time (Method Overloading) and Runtime (Method Overriding).

Q21. Difference between Method Overloading and Method Overriding?
Overloading: Same method name, different parameter signature in the same class (Compile-time).
Overriding: Same method name and signature in subclass (Runtime).

Q22. What is Encapsulation?
Wrapping data (variables) and code (methods) into a single unit (class) and restricting direct access using private access modifiers with getters/setters.

Q23. What is Abstraction?
Hiding internal implementation details and showing only essential features to the user using Abstract Classes and Interfaces.

Q24. Difference between Abstract Class and Interface?
Abstract Class: Can have instance variables, constructors, concrete and abstract methods. Supports single inheritance.
Interface: Contains abstract methods (and default/static methods Java 8+). Supports multiple inheritance.

Q25. What is constructor overloading?
Having multiple constructors in the same class with different parameter lists.

Q26. Can we override private or static methods?
No. Private methods are not visible to subclasses, and static methods belong to the class (Method Hiding, not Overriding).

Q27. What is the super keyword?
Used to refer to the immediate parent class object (to call parent constructors, methods, or fields).

Q28. What is the this keyword?
Refers to the current class instance/object.

Q29. What is method hiding?
When a subclass defines a static method with the same signature as a static method in the superclass.

Q30. What is object cloning?
Creating an exact copy of an object using the clone() method of the Cloneable interface.

3. String Handling

Q31. Why are Strings immutable in Java?
For security, thread safety, caching in String Constant Pool (SCP), and performance optimization.

Q32. What is String Constant Pool (SCP)?
A special memory area inside the Heap where String literals are stored to prevent duplicate instances.

Q33. Difference between String, StringBuilder, and StringBuffer?
String: Immutable.
StringBuffer: Mutable and Thread-safe (synchronized, slower).
StringBuilder: Mutable and Non-thread-safe (faster).

Q34. How many objects are created by String s = new String("Hello")?
Two objects: One in Heap memory and one in the String Constant Pool (if not already present).

Q35. What does .intern() method do?
Searches the String Constant Pool for a matching string and returns its reference.

4. Exception Handling

Q36. What is Exception Handling?
A mechanism to handle runtime errors to maintain the normal flow of the application.

Q37. Difference between Checked and Unchecked Exceptions?
Checked: Checked at compile-time (e.g., IOException, SQLException).
Unchecked: Occur at runtime (e.g., NullPointerException, ArithmeticException).

Q38. Difference between Error and Exception?
Error: Irrecoverable conditions like OutOfMemoryError, StackOverflowError.
Exception: Conditions that can be caught and recovered from.

Q39. What is the purpose of try-catch-finally?
try: Contains code that might throw an exception.
catch: Handles the exception.
finally: Block that always executes for cleanup operations.

Q40. Difference between throw and throws?
throw: Used to explicitly throw an exception instance inside a method.
throws: Declared in the method signature to specify exceptions that may be thrown.

Q41. Can finally block be skipped from execution?
Yes, if System.exit(0) is invoked or if JVM crashes/terminates unexpectedly.

Q42. What is Try-with-Resources?
Introduced in Java 7, it automatically closes resources implementing AutoCloseable at the end of the block.

Q43. What is Custom Exception?
A user-defined exception created by extending Exception (checked) or RuntimeException (unchecked).

5. Java Collections Framework

Q44. What is the Java Collections Framework?
A unified architecture for representing and manipulating collections of objects (Lists, Sets, Maps, Queues).

Q45. Difference between Collection and Collections?
Collection: Root interface in the collection hierarchy.
Collections: Utility class containing static methods (e.g., sort(), reverse()).

Q46. Difference between ArrayList and LinkedList?
ArrayList: Uses a dynamic array; fast for random access, slow for insertions/deletions.
LinkedList: Uses a doubly linked list; fast for insertions/deletions, slow for random access.

Q47. Difference between List, Set, and Map?
List: Ordered collection, allows duplicates.
Set: Unordered collection, disallows duplicates.
Map: Key-Value pairs, unique keys.

Q48. How does HashMap work internally?
Uses an array of Nodes/Buckets. Converts Key via hashCode() to find bucket index. Uses equals() to handle collisions via LinkedList (converted to Red-Black Tree in Java 8 if size exceeds threshold).

Q49. Difference between HashMap and ConcurrentHashMap?
HashMap is non-thread-safe. ConcurrentHashMap provides thread safety by locking specific segments/buckets instead of the whole map.

Q50. Difference between HashSet and TreeSet?
HashSet is unordered and allows one null element. TreeSet is sorted (natural or custom ordering) and disallows nulls.

Q51. Difference between Comparable and Comparator?
Comparable: Provides single natural sorting via compareTo() inside the class.
Comparator: Provides multiple custom sorting strategies via compare() in a separate class or lambda.

Q52. What is Fail-Fast vs Fail-Safe Iterator?
Fail-Fast: Throws ConcurrentModificationException if collection is modified during iteration (e.g., ArrayList).
Fail-Safe: Works on a copy of the collection, no exception thrown (e.g., CopyOnWriteArrayList).

Q53. Difference between HashMap and Hashtable?
HashMap is non-synchronized and allows null keys/values. Hashtable is synchronized and disallows nulls.

Q54. How to make a Collection Unmodifiable?
Using Collections.unmodifiableList(), Collections.unmodifiableSet(), etc.

6. Multithreading & Concurrency

Q55. What is Multithreading?
Concurrent execution of two or more threads to maximize CPU utilization.

Q56. What are the ways to create a Thread in Java?
1. Extending Thread class.
2. Implementing Runnable interface.
3. Implementing Callable interface (with Future).

Q57. Difference between start() and run() method?
start(): Creates a new thread and executes run() asynchronously.
run(): Executes the method synchronously in the current thread like a normal function.

Q58. What is Synchronization?
Process of controlling resource access by multiple threads to prevent race conditions using synchronized keyword.

Q59. What is a Deadlock and how to avoid it?
A situation where two or more threads are blocked forever waiting for each other's locks. Avoided by ordering lock acquisition consistently.

Q60. Difference between wait(), notify(), and notifyAll()?
Methods of Object class used for inter-thread communication.
wait(): Releases lock and waits.
notify(): Wakes up one waiting thread.
notifyAll(): Wakes up all waiting threads.

Q61. What is volatile keyword?
Ensures thread reads variable directly from Main Memory rather than local thread cache.

Q62. What is Thread Pool / Executor Framework?
Manages a pool of worker threads to execute tasks efficiently instead of creating new threads repeatedly.

Q63. What is Thread Life Cycle states?
NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.

Q64. Difference between Runnable and Callable?
Runnable: run() method returns void and cannot throw checked exceptions.
Callable: call() method returns a result (V) and can throw checked exceptions.

7. JVM Architecture & Memory Management

Q65. Explain JVM Memory Model (Runtime Data Areas).
Heap: Stores objects.
Stack: Stores method calls, local variables, and primitive types.
Method Area / Metaspace: Stores class structures, metadata, static variables.
PC Register: Holds current executing instruction address.
Native Method Stack: Native C/C++ execution code.

Q66. What is Garbage Collection (GC)?
Automatic memory management process that identifies and deletes unused objects to free Heap space.

Q67. How does GC identify unused objects?
Through Reachability Analysis (tracing from GC Roots). Objects with no active references are eligible.

Q68. Difference between PermGen and Metaspace?
PermGen (pre-Java 8) had fixed size in JVM memory. Metaspace (Java 8+) uses native OS memory and auto-resizes dynamically.

Q69. What causes OutOfMemoryError (OOM)?
Occurs when the Heap is full and GC cannot free up enough space for new allocations.

Q70. What is System.gc()?
Requests JVM to run Garbage Collection, but does not guarantee immediate execution.

8. Java 8+ Features

Q71. What are the key features introduced in Java 8?
Lambda Expressions, Functional Interfaces, Streams API, Optional Class, Default & Static Interface Methods, Date & Time API (java.time).

Q72. What is a Lambda Expression?
An anonymous function (no name, return type, or access modifier) enabling concise code for functional interfaces.

Q73. What is a Functional Interface?
An interface with exactly one abstract method (annotated with @FunctionalInterface). Examples: Runnable, Comparable, Consumer, Supplier, Predicate, Function.

Q74. What is the Streams API?
A pipeline-based framework for processing collections of objects declaratively (filtering, mapping, reducing) sequentially or in parallel.

Q75. Difference between Intermediate and Terminal operations in Streams?
Intermediate: Returns a new Stream, lazy execution (e.g., filter(), map()).
Terminal: Produces result/side-effect, triggers execution (e.g., collect(), forEach(), reduce()).

Q76. Difference between map() and flatMap()?
map(): 1 to 1 transformation.
flatMap(): 1 to N transformation (flattens nested streams/collections).

Q77. What is Optional class and why is it used?
Container object used to represent non-null values cleanly and prevent NullPointerException.

Q78. What are Default and Static methods in interfaces?
Allows adding new methods with implementations to existing interfaces without breaking implementing classes.

Q79. What are Method References?
Compact syntax (Class::method) to refer to an existing method directly without executing it.

Q80. Difference between findFirst() and findAny() in Streams?
findFirst() returns the first element in encounter order; findAny() returns any element (useful in parallel streams).

9. Advanced Concepts & Miscellaneous

Q81. What is Serialization and Deserialization?
Serialization: Converting object state into a byte stream (ObjectOutputStream).
Deserialization: Reconstructing object from byte stream (ObjectInputStream).

Q82. What is transient keyword?
Prevents a variable field from being serialized.

Q83. What is Reflection API?
Allows inspecting and modifying classes, methods, fields, and constructors at runtime.

Q84. What is a Memory Leak in Java?
Occurs when unused objects remain referenced, preventing GC from reclaiming memory.

Q85. What is shallow copy vs deep copy?
Shallow Copy: Copies references of nested objects.
Deep Copy: Recursively duplicates nested objects creating independent copies.

Q86. What is ClassLoader in Java?
Subsystem of JVM used to load .class files into memory dynamically (Bootstrap, Extension/Platform, Application ClassLoaders).

Q87. What is a Singleton Class and how to create it?
Ensures only one instance of a class exists per JVM. Implemented using private constructors, static instances, and double-checked locking / Enum Singleton.

Q88. What is Marker Interface?
An interface with no methods or fields (e.g., Serializable, Cloneable). Serves as type metadata for JVM.

Q89. Difference between Comparable and Comparator usage in Streams?
sorted() uses natural order via Comparable; sorted(Comparator.comparing(...)) uses custom ordering via Comparator.

Q90. What is Varargs in Java?
Variable-length arguments (Type... name) allowing methods to accept 0 or more arguments of specified type.

Q91. What is the Java Module System (Project Jigsaw)?
Introduced in Java 9 to modularize the JDK and applications via module-info.java.

Q92. What are Records in Java (Java 14/16+)?
Immutable data carrier classes that automatically generate getters, equals(), hashCode(), and toString().

Q93. What are Sealed Classes (Java 17+)?
Classes that restrict which other classes can extend or implement them using permits keyword.

Q94. What are Pattern Matching for instanceof (Java 16+)?
Eliminates boilerplate explicit type casting after instanceof check.

Q95. What are Virtual Threads / Project Loom (Java 21+)?
Lightweight threads managed by JVM instead of OS threads, allowing high-throughput concurrent applications.

Q96. What is Garbage Collection G1 vs ZGC?
G1 GC: Region-based collector for multi-processor systems with large memory.
ZGC: Ultra-low latency garbage collector designed for terabyte-scale heaps.

Q97. Why should hashCode() and equals() be overridden together?
If two objects are equal according to equals(), they must return the same hashCode() value to function properly in hash-based collections (HashMap, HashSet).

Q98. What is AtomicInteger / Atomic Variables?
Lock-free, thread-safe variable operations using CPU CAS (Compare-And-Swap) instructions.

Q99. What is ForkJoinPool?
An implementation of ExecutorService designed for divide-and-conquer tasks using work-stealing algorithms.

Q100. Best practices for writing clean Java code?
Follow SOLID principles, use meaningful names, write unit tests (JUnit), handle exceptions gracefully, prefer immutability, minimize scope, and use modern features (Streams, Records, Optional).

Top Companies Asking Java Questions:
- TCS
- Infosys
- Accenture
- Cognizant
- Capgemini
- Wipro
- Deloitte
- IBM
- Oracle
- Amazon

Preparation Tips:
- Practice OOPs Fundamentals thoroughly with real-world examples.
- Master the Java Collections Framework and their internal algorithms.
- Practice solving Coding & Data Structures problems in Java.
- Understand JVM Architecture and Garbage Collection mechanisms.
- Focus on Java 8+ Features (Streams, Lambdas, Optional).
- Build and explain clean Real-World Projects.

Conclusion:
Java remains one of the most reliable and in-demand programming languages for placements and enterprise applications. Consistent coding practice, deep fundamental understanding, and hands-on projects will significantly boost your interview performance.

Happy Coding!
Team GotPlaced`
},
{
  id: 7,

  slug: "top-100-python-interview-questions-2026",

  title: "Top 100 Python Interview Questions and Answers (2026)",

  description:
    "Prepare for Python interviews with the top 100 Python interview questions and answers for freshers and experienced candidates. Covers Python Basics, OOP, Lists, Tuples, Dictionaries, Functions, File Handling, Exception Handling, Decorators, Generators, and more.",

  image: "/python-blog.jpg",

  author: "GotPlaced Team",

  category: "Python",

  date: "16 July 2026",

  readTime: "23 min read",

  content: `Top 100 Python Interview Questions and Answers (2026)

Python is one of the world's most popular programming languages and is widely used in software development, automation, data science, artificial intelligence, machine learning, cybersecurity, and web development.

This guide covers the most frequently asked Python interview questions for placements and software engineering interviews.

Topics Covered:
- Python Basics & Fundamentals
- Data Structures (Lists, Tuples, Sets, Dicts)
- Functions & Functional Programming
- Object-Oriented Programming (OOP)
- Exception Handling & File I/O
- Decorators, Generators & Iterators
- Memory Management & Built-in Modules
- Advanced Python Concepts
- Data Science Basics & Best Practices

1. Python Basics & Fundamentals

Q1. What is Python?
Python is a high-level, interpreted, dynamically typed, object-oriented programming language known for its simplicity and readability.

Q2. What are the key features of Python?
Easy to read and write, Interpreted, Dynamically Typed, Cross-Platform, Extensive Standard Library, Object-Oriented, and Open Source.

Q3. What is the difference between Compiled and Interpreted languages?
Compiled languages convert source code into machine code before execution (e.g., C++), whereas Interpreted languages execute source code line-by-line at runtime (e.g., Python).

Q4. Is Python statically typed or dynamically typed?
Python is dynamically typed, meaning variable data types are checked at runtime and do not need explicit declaration.

Q5. What is PEP 8?
PEP 8 is Python's official style guide for writing clean, readable, and standard code (e.g., 4-space indentation, naming conventions).

Q6. What is the difference between Python 2 and Python 3?
Python 3 is the modern standard with Unicode strings by default, modified print syntax print(), range() replacing xrange(), and better performance/security.

Q7. What are Python's built-in data types?
Numeric (int, float, complex), Sequence (str, list, tuple), Mapping (dict), Set (set, frozenset), Boolean (bool), and Binary (bytes, bytearray).

Q8. What are mutable and immutable data types in Python?
Mutable (can be modified): list, dict, set, bytearray.
Immutable (cannot be modified): int, float, str, tuple, frozenset, bool.

Q9. What is the difference between is and == operator?
== checks for equality of values, whereas is checks for identity (whether two references point to the exact same object in memory).

Q10. What is type casting in Python?
Converting a variable from one data type to another using functions like int(), float(), str(), list(), or tuple().

Q11. What is docstring in Python?
A string literal specified as the first statement in a module, function, class, or method, written using triple quotes to document code.

Q12. What is indentation in Python and why is it important?
Indentation defines code blocks and scope instead of curly braces or keywords, making Python code clean and structured.

Q13. How to take user input in Python?
Using the built-in input() function, which always returns data as a string.

Q14. What are scope resolution rules in Python (LEGB Rule)?
Python searches variables in order: Local, Enclosing, Global, Built-in (LEGB).

Q15. What are break, continue, and pass statements?
break: Exits the loop completely.
continue: Skips current iteration and moves to next.
pass: A placeholder statement that does nothing.

2. Data Structures (Lists, Tuples, Sets, Dictionaries)

Q16. What is the difference between List and Tuple?
List: Mutable, uses square brackets [], slower for read-only operations.
Tuple: Immutable, uses parentheses (), faster and uses less memory.

Q17. What is List Comprehension?
A concise way to create lists based on existing iterables (e.g., [x**2 for x in range(10)]).

Q18. What is a Dictionary in Python?
An unordered (ordered in Python 3.7+), mutable collection of key-value pairs where keys must be unique and immutable.

Q19. What is a Set in Python?
An unordered, mutable collection of unique elements that does not allow duplicates.

Q20. Difference between remove() and discard() in Set?
remove(): Deletes element but raises KeyError if element is not present.
discard(): Deletes element without raising an error if absent.

Q21. How to merge two dictionaries in Python?
In Python 3.9+, use dict1 | dict2. Earlier versions use dict1.update(dict2) or {**dict1, **dict2}.

Q22. What is a Frozenset?
An immutable version of a set that cannot be changed after creation and can be used as a dictionary key.

Q23. How does slicing work in Python?
Extracts parts of a sequence using syntax sequence[start:stop:step].

Q24. How to reverse a list or string in Python?
Using slicing list[::-1] or built-in reversed() function.

Q25. Difference between append() and extend() in List?
append(): Adds single element or nested object to the end.
extend(): Iterates over argument and adds each element individually.

Q26. Difference between pop() and remove() in List?
pop(): Removes and returns element at specified index (default last).
remove(): Removes first matching value from list without returning it.

Q27. How to remove duplicates from a List?
Convert list to a set list(set(my_list)) or use dict.fromkeys(my_list) to maintain order.

Q28. What is deepcopy vs shallow copy?
Shallow Copy (copy.copy()): Copies object structure but references nested objects.
Deep Copy (copy.deepcopy()): Recursively duplicates object and all nested objects independently.

Q29. What is Dictionary Comprehension?
A short syntax to construct dictionaries (e.g., {x: x**2 for x in range(5)}).

Q30. How to sort a dictionary by key or value?
Using sorted(d.items(), key=lambda item: item[1]) for values or sorted(d.items()) for keys.

3. Functions & Functional Programming

Q31. How to define a function in Python?
Using the def keyword followed by function name and parameters.

Q32. What are *args and **kwargs?
*args: Accepts variable number of non-keyword positional arguments as a tuple.
**kwargs: Accepts variable number of keyword arguments as a dictionary.

Q33. What are Lambda Functions?
Anonymous single-expression functions defined using lambda keyword (e.g., lambda x, y: x + y).

Q34. What is the map() function?
Applies a specified function to all items in an input iterable and returns a map object (e.g., map(func, iterable)).

Q35. What is the filter() function?
Filters elements from an iterable based on a condition returning True (e.g., filter(is_even, list)).

Q36. What is the reduce() function?
From functools module, applies a rolling computation to sequential pairs of values in a list to reduce it to a single value.

Q37. What are default arguments in Python functions?
Parameters that take default values if no argument is passed during function call.

Q38. Why should you avoid mutable default arguments in functions?
Because default arguments are evaluated once when function is defined, causing state to persist across calls.

Q39. What is recursion in Python?
A process where a function calls itself until a base terminating condition is met.

Q40. What is maximum recursion depth in Python?
Default limit is usually 1000 to prevent stack overflow. Can be checked or set using sys.getrecursionlimit() / sys.setrecursionlimit().

Q41. What is zip() function?
Combines elements from two or more iterables into tuples based on matching indexes.

Q42. What is enumerate() function?
Adds a counter to an iterable and returns it as an enumerate object containing index and value pairs.

Q43. What is global and nonlocal keyword?
global: Declares variable inside function belongs to global scope.
nonlocal: Refers to variable in nearest outer enclosing function scope.

4. Object-Oriented Programming (OOP)

Q44. What is Object-Oriented Programming in Python?
A programming paradigm based on classes and objects containing attributes (data) and methods (behavior).

Q45. What is a Class and an Object?
Class: A blueprint for creating objects.
Object: An instance of a class.

Q46. What is __init__() method?
The constructor method automatically executed when a new class instance is created to initialize attributes.

Q47. What is self in Python classes?
Represents the current instance of the class passed as first parameter to instance methods.

Q48. What are four pillars of OOP in Python?
Encapsulation, Inheritance, Polymorphism, and Abstraction.

Q49. What is Inheritance and its types in Python?
Mechanism where child class inherits attributes and methods from parent class. Types: Single, Multiple, Multilevel, Hierarchical, Hybrid.

Q50. How does Python handle multiple inheritance?
Python supports multiple inheritance directly and resolves ambiguity using Method Resolution Order (MRO) with C3 Linearization.

Q51. What is Method Resolution Order (MRO)?
Order in which Python looks for a method or attribute in parent classes. Viewed via Class.mro() or Class.__mro__.

Q52. What is Method Overriding vs Method Overloading?
Overriding: Child class redefines a method from parent class.
Overloading: Not natively supported by signature, but handled using default/args arguments or multipledispatch library.

Q53. What is Encapsulation in Python?
Restricting direct access to object variables using single underscore _ (protected) or double underscore __ (private / name mangling).

Q54. What is Abstraction in Python?
Hiding internal execution details using Abstract Base Classes (ABC module) and @abstractmethod decorator.

Q55. Difference between @staticmethod and @classmethod?
@classmethod: Takes cls as first parameter and can access/modify class state.
@staticmethod: Takes no implicit self/cls parameter and works like a isolated function bound to class.

Q56. What are Dunder / Magic Methods?
Special built-in methods starting and ending with double underscores like __str__, __len__, __eq__, __add__.

Q57. Difference between __str__() and __repr__()?
__str__: Informal printable string representation for end-users.
__repr__: Formal unambiguous string representation mainly for debugging and developers.

Q58. What is property decorator @property?
Allows defining getter, setter, and deleter methods to access class attributes like regular properties.

Q59. What is super() in Python?
Built-in function used to call methods or constructors of parent class cleanly.

5. Exception Handling & File I/O

Q60. What is Exception Handling in Python?
A mechanism to handle runtime errors gracefully using try, except, else, and finally blocks without crashing program.

Q61. What is the role of try, except, else, and finally?
try: Block where code is tested for errors.
except: Executes if exception occurs in try.
else: Executes if no exception occurs in try.
finally: Always executes regardless of exceptions (cleanup block).

Q62. How to create Custom Exception in Python?
By creating a new class that inherits from Python's built-in Exception class.

Q63. What is raise keyword?
Used to explicitly throw an exception instance or error in code.

Q64. What is assertion (assert) in Python?
A debugging helper that evaluates a condition and raises AssertionError if condition is False.

Q65. How to open and read files in Python?
Using built-in open() function with modes ('r', 'w', 'a', 'b') or using with statement.

Q66. Why is with open() statement preferred for file handling?
Because context manager automatically closes file after block execution, ensuring resource cleanup even if exceptions occur.

Q67. What is the difference between read(), readline(), and readlines()?
read(): Reads entire file content as a single string.
readline(): Reads file one line at a time.
readlines(): Reads all lines and returns them as a list of strings.

Q68. What are common file modes in Python?
r (read), w (write/truncate), a (append), r+ (read and write), b (binary mode).

6. Decorators, Generators & Iterators

Q69. What is an Iterator in Python?
An object implementing __iter__() and __next__() methods that allows traversal through all elements sequentially.

Q70. What is a Generator in Python?
A special function that yields values one at a time using yield keyword instead of return, maintaining state between calls.

Q71. Difference between Iterator and Generator?
Iterator: Requires explicit class implementation with __iter__ and __next__.
Generator: Written as a function using yield keyword, automatically handles iterator protocol.

Q72. What is a Decorator in Python?
A function that takes another function as an argument, adds extra functionality around it, and returns modified function.

Q73. How to chain multiple decorators in Python?
Apply multiple decorators stacked above function definition (@dec1 then @dec2); executed bottom-to-top.

Q74. What is functools.wraps and why is it used in decorators?
Decorator used inside custom decorators to preserve original function name, docstring, and metadata.

Q75. What is a Context Manager in Python?
An object that manages resource allocation and setup/teardown using __enter__() and __exit__() methods (or @contextmanager decorator).

7. Memory Management & Built-in Modules

Q76. How is Memory Managed in Python?
Managed automatically by Python Private Heap space containing objects and data structures, controlled by Python Memory Manager.

Q77. What is Garbage Collection in Python?
Automated mechanism that frees unused memory primarily using Reference Counting and a Cyclic Garbage Collector for reference cycles.

Q78. What is Global Interpreter Lock (GIL)?
A mutex lock in CPython ensuring only one native thread executes Python bytecode at a time, impacting CPU-bound multithreaded performance.

Q79. How to achieve concurrency in Python despite GIL?
Use Multiprocessing (separate process memory space), asyncio (event-driven async/await), or C-extensions.

Q80. Difference between threading and multiprocessing modules?
threading: Uses shared memory threads (ideal for I/O-bound tasks).
multiprocessing: Spawns independent processes with separate GILs (ideal for CPU-bound tasks).

Q81. What is sys module used for?
Provides access to system-specific parameters, interpreter variables, and functions (e.g., sys.argv, sys.path, sys.exit).

Q82. What is os module used for?
Provides functions to interact with operating system (directory manipulation, file paths, environment variables).

Q83. What is pickle module?
Used for serializing (pickling) Python objects into byte streams and deserializing (unpickling) them back into objects.

Q84. What is json module used for?
Used to parse JSON strings into Python dictionaries (json.loads) and dump dictionaries into JSON format (json.dumps).

Q85. What is math module?
Provides access to standard mathematical constants (pi, e) and functions (sqrt, sin, log, ceil, floor).

8. Advanced Python Concepts

Q86. What is __slots__ in Python classes?
Attribute that restricts dynamic attribute creation on instances, significantly saving memory by avoiding __dict__ dictionary creation.

Q87. What is a Metaclass in Python?
A class of a class that defines how classes are constructed (type is default metaclass in Python).

Q88. What are Type Hints in Python?
Annotations introduced in Python 3.5+ to explicitly declare expected data types for variables and function parameters.

Q89. What is asyncio module and async/await?
Provides framework for writing single-threaded concurrent code using coroutines, event loops, and non-blocking I/O operations.

Q90. What is Virtual Environment (venv) and why is it used?
An isolated Python environment allowing separate project-specific dependencies without global package conflicts.

Q91. What is pip in Python?
The standard package management system used to install and manage software packages from Python Package Index (PyPI).

Q92. What is wheels (.whl) in Python?
A pre-compiled package distribution format that speeds up installation compared to source distributions.

Q93. What is monkey patching in Python?
Dynamically updating or modifying module, class, or function behavior at runtime without changing original source code.

9. Data Science Basics & Best Practices

Q94. What is NumPy and why is it faster than Python Lists?
A library for numerical computing using multi-dimensional C-based arrays (ndarray) stored in contiguous memory blocks.

Q95. What is Pandas in Python?
A data manipulation library offering DataFrames and Series structures for handling structured data.

Q96. What is the difference between Series and DataFrame in Pandas?
Series: 1D labeled array holding single data type.
DataFrame: 2D tabular data structure with labeled axes (rows and columns).

Q97. What is PyTest in Python?
A popular testing framework used to write simple, scalable unit and integration tests.

Q98. What are generator expressions?
High-performance syntax similar to list comprehensions but uses parentheses () to yield items lazily without storing full list in memory.

Q99. What is difference between exec() and eval()?
eval(): Parses and evaluates single dynamic expression and returns result.
exec(): Executes dynamic Python code blocks (statements, loops, functions) without returning value.

Q100. Best practices for writing clean and efficient Python code?
Adhere to PEP 8 standards, leverage built-in functions, use list/dict comprehensions wisely, handle exceptions properly, write modular code, and use virtual environments.

Top Companies Asking Python Questions:
- TCS
- Infosys
- Accenture
- Cognizant
- Capgemini
- Wipro
- Deloitte
- IBM
- Amazon

Preparation Tips:
- Practice Python coding daily on real problems.
- Master Core Data Structures and OOP concepts.
- Get hands-on experience with File Handling and Exception Handling.
- Learn Decorators, Generators, and Memory Management concepts.
- Build clean, real-world Python automation or web projects.

Conclusion:
Python is one of the easiest, most powerful, and versatile programming languages. Mastering these top 100 interview questions along with regular coding practice will boost your interview confidence and placement success.

Happy Coding!
Team GotPlaced`
},
{
  id: 8,

  slug: "top-100-operating-system-interview-questions-2026",

  title: "Top 100 Operating System Interview Questions and Answers (2026)",

  description:
    "Prepare for Operating System interviews with the top 100 OS interview questions and answers. Learn Process vs Thread, Scheduling Algorithms, Deadlock, Paging, Virtual Memory, CPU Scheduling, Synchronization, and more.",

  image: "/operating-system-blog.jpg",

  author: "GotPlaced Team",

  category: "Operating System",

  date: "16 July 2026",

  readTime: "23 min read",

  content: `Top 100 Operating System Interview Questions and Answers (2026)

Operating System (OS) is one of the most important core computer science subjects asked in placement interviews. Companies like TCS, Infosys, Accenture, Cognizant, Capgemini, Deloitte, Amazon, and Microsoft frequently ask OS questions.

This guide covers the most important Operating System interview questions for freshers and experienced developers.

Topics Covered:
- OS Basics & Architecture
- Process Management & Threads
- CPU Scheduling Algorithms
- Process Synchronization & Concurrency
- Deadlocks & Prevention
- Memory Management & Paging
- Virtual Memory & Page Replacement
- File Systems & Disk Management
- I/O Management & Security

1. OS Basics & Architecture

Q1. What is an Operating System?
An Operating System is system software that manages computer hardware resources and provides common services for application programs.

Q2. What are the primary functions of an Operating System?
Process management, memory management, file system management, device/IO management, security, and user interface provision.

Q3. What is the Kernel?
The central core component of an OS that manages system resources and serves as a bridge between applications and hardware.

Q4. What is the difference between Monolithic and Microkernel?
Monolithic Kernel runs all OS services in a single kernel address space (faster, larger). Microkernel runs minimum services in kernel space and rest in user space (safer, modular).

Q5. What is System Call?
A mechanism used by application programs to request services from the operating system kernel.

Q6. Difference between Kernel Mode and User Mode?
User Mode: Restricted execution mode where application code runs without direct hardware access.
Kernel Mode: Unrestricted execution mode with full hardware access reserved for OS code.

Q7. What is Dual-Mode operation in OS?
A protection mechanism using a mode bit to distinguish between User Mode (mode bit = 1) and Kernel Mode (mode bit = 0).

Q8. What is Bootstrapping / Booting?
The process of loading the operating system kernel into main memory (RAM) when the computer is powered on.

Q9. What is Real-Time Operating System (RTOS)?
An OS designed to process data and events within strict, guaranteed time constraints (e.g., Hard RTOS and Soft RTOS).

Q10. What is Spooling vs Buffering?
Spooling: Storing data in a temporary disk area for slow devices (e.g., printer queue).
Buffering: Storing data in main memory temporarily during IO transfers.

Q11. What is Context Switching?
The process of saving the execution state of a running process/thread and loading the state of another process to resume execution.

Q12. What causes Context Switch overhead?
Saving CPU registers, updating PCB, clearing CPU cache, and updating MMU page tables.

2. Process Management & Threads

Q13. What is a Process?
A program in execution, consisting of program code, current activity, registers, and memory sections (text, data, heap, stack).

Q14. Explain Process States.
New, Ready, Running, Waiting/Blocked, and Terminated.

Q15. What is Process Control Block (PCB)?
A data structure maintained by the OS containing information about a specific process (PID, state, registers, memory pointers, IO status).

Q16. What is the difference between Process and Thread?
Process: Independent execution unit with its own memory space, heavy resource cost.
Thread: Lightweight execution unit within a process sharing memory and resources with sibling threads.

Q17. What is User-Level Thread vs Kernel-Level Thread?
User-Level Thread: Managed entirely in user space without kernel awareness (fast, non-preemptive).
Kernel-Level Thread: Managed directly by OS kernel (slower context switch, supports true parallelism).

Q18. What is Multithreading and its advantages?
Executing multiple threads concurrently within a process. Advantages: Responsiveness, resource sharing, cost-effectiveness, scalability.

Q19. What is Zombie Process?
A process that has finished execution but its entry remains in the process table because its parent hasn't read its exit status via wait().

Q20. What is Orphan Process?
A running process whose parent process has terminated or died. It is adopted by the init process (PID 1).

Q21. What is Inter-Process Communication (IPC)?
Mechanisms allowing processes to communicate and synchronize actions (e.g., Shared Memory, Message Passing, Pipes, Sockets).

Q22. Difference between Shared Memory and Message Passing?
Shared Memory: Processes share a common region of memory (faster, requires synchronization).
Message Passing: Processes exchange messages via OS primitives (slower, better for distributed systems).

3. CPU Scheduling Algorithms

Q23. What is CPU Scheduling?
The process of selecting a ready process from memory and allocating the CPU to it.

Q24. Difference between Preemptive and Non-Preemptive Scheduling?
Preemptive: OS can forcibly interrupt a running process (e.g., Round Robin, SRTF).
Non-Preemptive: Running process keeps CPU until it completes or enters wait state (e.g., FCFS, SJF).

Q25. What is First-Come, First-Served (FCFS) Scheduling?
A non-preemptive scheduling algorithm that executes processes in order of arrival. Subject to Convoy Effect.

Q26. What is Convoy Effect?
A situation where short processes wait for a long, CPU-bound process to finish, lowering CPU utilization.

Q27. What is Shortest Job First (SJF) Scheduling?
Selects process with shortest next CPU burst time. Optimal for minimizing average wait time, but prone to starvation.

Q28. What is Shortest Remaining Time First (SRTF)?
The preemptive version of SJF scheduling.

Q29. What is Round Robin (RR) Scheduling?
Preemptive algorithm where each process gets a fixed time slot (Time Quantum) in circular order.

Q30. What happens if Round Robin Time Quantum is too large or too small?
Too large: Behaves like FCFS.
Too small: Causes high overhead due to frequent context switching.

Q31. What is Priority Scheduling and Starvation?
Executes processes based on assigned priority. Starvation occurs when low-priority processes wait indefinitely.

Q32. How to solve Starvation?
Using Aging, which gradually increases the priority of processes waiting in the queue for long durations.

Q33. What is Multilevel Queue Scheduling?
Partitions ready queue into separate queues based on process type (e.g., foreground, background) with fixed scheduling per queue.

Q34. What is Multilevel Feedback Queue Scheduling?
Allows processes to move between queues based on their CPU execution history.

4. Process Synchronization & Concurrency

Q35. What is Race Condition?
A scenario where multiple processes access and manipulate shared data concurrently, and the outcome depends on execution order.

Q36. What is Critical Section?
A section of code accessing shared resources that must not be executed by more than one process at a time.

Q37. What are requirements for Critical Section Solution?
Mutual Exclusion, Progress, and Bounded Waiting.

Q38. What is Peterson's Solution?
A classic software-based solution to critical section problem for two processes using turn and flag variables.

Q39. What is a Semaphore?
An integer variable used to solve synchronization problems via atomic operations wait() (P) and signal() (V).

Q40. Difference between Counting Semaphore and Binary Semaphore?
Counting Semaphore: Integer value can range over an unrestricted domain (tracks resource instances).
Binary Semaphore: Value ranges between 0 and 1 (functions like a Mutex lock).

Q41. Difference between Mutex and Semaphore?
Mutex: Locking mechanism (only the thread acquiring lock can release it).
Semaphore: Signaling mechanism (any thread can release/signal).

Q42. What is Producer-Consumer Problem?
A classic synchronization problem where producer generates data into a bounded buffer and consumer consumes it without buffer underflow/overflow.

Q43. What is Readers-Writers Problem?
A concurrency problem balancing multiple readers reading shared data simultaneously while ensuring exclusive access for writers.

Q44. What is Dining Philosophers Problem?
A classic synchronization problem illustrating deadlock and starvation risks when allocating multiple limited resources.

Q45. What is Monitor in OS?
A high-level language synchronization construct containing procedures, variables, and data structures wrapped with mutual exclusion.

5. Deadlocks & Prevention

Q46. What is Deadlock?
A state where a set of processes are blocked because each process holds a resource and waits for another resource held by another process.

Q47. What are the 4 Necessary Conditions for Deadlock (Coffman Conditions)?
Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.

Q48. How to handle Deadlocks?
Deadlock Prevention, Deadlock Avoidance, Deadlock Detection & Recovery, or Ignoring Deadlock (Ostrich Algorithm).

Q49. How does Deadlock Prevention work?
Eliminating at least one of the four necessary Coffman conditions.

50. What is Banker's Algorithm?
A deadlock avoidance algorithm that checks if resource allocation leaves the system in a Safe State before granting requests.

Q51. What is a Safe State in Deadlock Avoidance?
A state where there exists a sequence of process executions such that all processes can finish without deadlock.

Q52. How to recover from Deadlock?
Process Termination (aborting processes) or Resource Preemption (rollback state).

Q53. What is Resource Allocation Graph (RAG)?
A directed graph representing process resource requests and assignments. A cycle indicates deadlock in single-instance resource systems.

6. Memory Management & Paging

Q54. Difference between Logical and Physical Address Space?
Logical Address: Generated by CPU during execution (Virtual Address).
Physical Address: Actual location in hardware memory unit (RAM).

Q55. What is Memory Management Unit (MMU)?
A hardware device that maps logical addresses to physical addresses at runtime.

Q56. What is Contiguous Memory Allocation?
Allocating single continuous physical memory blocks to each process (e.g., Single-partition, Multi-partition).

Q57. What are First Fit, Best Fit, and Worst Fit strategies?
First Fit: Allocates first hole big enough.
Best Fit: Allocates smallest hole big enough (leaves tiny left-overs).
Worst Fit: Allocates largest available hole.

Q58. What is Fragmentation?
Unused memory space that cannot be allocated to processes.

Q59. Difference between Internal and External Fragmentation?
Internal: Allocated memory block is larger than requested memory, leaving wasted space inside block.
External: Total free memory space is enough for a request, but it is not contiguous.

Q60. How to eliminate External Fragmentation?
Using Compaction or non-contiguous memory allocation techniques like Paging and Segmentation.

Q61. What is Paging?
A non-contiguous memory management scheme dividing physical memory into fixed-size Frames and logical memory into same-sized Pages.

Q62. What is a Page Table?
A data structure maintained by OS per process that maps logical page numbers to physical frame numbers.

Q63. What is Translation Lookaside Buffer (TLB)?
A high-speed hardware associative cache used to store recent page table translations to speed up address resolution.

Q64. What is Segmentation?
A memory management scheme that divides logical memory into variable-sized modules based on user view (functions, stack, arrays).

Q65. Difference between Paging and Segmentation?
Paging: Fixed-size blocks, physical view, invisible to programmer, causes internal fragmentation.
Segmentation: Variable-size blocks, logical view, visible to programmer, causes external fragmentation.

7. Virtual Memory & Page Replacement

Q66. What is Virtual Memory?
A memory management technique that gives an illusion of a large main memory by leveraging secondary storage (Disk).

Q67. What is Demand Paging?
Loading pages into physical memory only when they are referenced during execution.

Q68. What is a Page Fault?
An interrupt raised by hardware when a running process accesses a page not currently loaded in main memory RAM.

Q69. Steps taken when a Page Fault occurs?
Traps to OS, saves state, locates page on disk, finds free memory frame, reads page into frame, updates page table, resumes process instruction.

70. What is Page Replacement Algorithm?
An algorithm used by OS to decide which physical memory page to swap out when memory is full and a new page is needed.

Q71. What is FIFO Page Replacement Algorithm?
Replaces the oldest page loaded in memory. Subject to Belady's Anomaly.

Q72. What is Belady's Anomaly?
A phenomenon where increasing the number of physical memory frames results in an increase in page faults (seen in FIFO).

Q73. What is Optimal Page Replacement Algorithm?
Replaces the page that will not be used for the longest period in the future (theoretical benchmark).

Q74. What is Least Recently Used (LRU) Page Replacement?
Replaces the page that has not been referenced for the longest duration in the past. Free from Belady's Anomaly.

Q75. What is Thrashing?
A state where CPU spends more time swapping pages in and out of memory than executing actual process instructions.

Q76. How to prevent Thrashing?
Using Working-Set Model or Page Fault Frequency (PFF) control to allocate sufficient frames to active processes.

Q77. What is Swapping?
Moving an entire process temporarily out of main memory to secondary storage (backing store) and restoring it later.

8. File Systems & Disk Management

Q78. What is a File System?
A structured method and data structure used by OS to store, organize, retrieve, and manage files on storage media.

Q79. What is File Control Block (FCB) / Inode?
A storage structure containing file metadata (permissions, ownership, size, block locations).

Q80. What are Directory Structures?
Single-Level, Two-Level, Tree-Structured, Acyclic-Graph, and General Graph directories.

Q81. What are File Allocation Methods?
Contiguous Allocation, Linked Allocation, and Indexed Allocation (e.g., inode).

Q82. What is Disk Scheduling?
Algorithm used by OS to determine the order in which disk IO read/write requests are serviced to minimize seek time.

Q83. What is Seek Time vs Rotational Latency?
Seek Time: Time taken for disk arm to move read/write head to the desired track.
Rotational Latency: Time taken for desired disk sector to rotate under head.

Q84. Explain FCFS and SSTF Disk Scheduling.
FCFS: Services requests in arrival order.
SSTF (Shortest Seek Time First): Services request closest to current head position (can cause starvation).

Q85. Explain SCAN and C-SCAN Disk Scheduling.
SCAN (Elevator): Disk head moves back and forth servicing requests along the way.
C-SCAN (Circular SCAN): Services requests in one direction only, returning immediately to start without servicing on return.

Q86. Explain LOOK and C-LOOK Disk Scheduling.
Variations of SCAN/C-SCAN where head only travels as far as the last request in that direction instead of full disk end.

Q87. What is RAID?
Redundant Array of Independent Disks - technology combining multiple physical hard drives into a single logical unit for redundancy/performance.

Q88. Explain RAID 0, RAID 1, and RAID 5.
RAID 0: Striping (performance, no redundancy).
RAID 1: Mirroring (redundancy, no striping).
RAID 5: Striping with distributed parity (fault tolerance + performance).

9. I/O Management & Security

Q89. What is I/O Management?
OS subsystem managing input/output devices using drivers, buffers, caches, and interrupt handlers.

Q90. What is Polling vs Interrupt-Driven I/O?
Polling: CPU repeatedly checks device status (wastes CPU cycles).
Interrupt-Driven: Device sends hardware signal to CPU when ready.

Q91. What is Direct Memory Access (DMA)?
A feature allowing hardware controllers to transfer data directly to/from main memory without CPU intervention.

Q92. What is a Device Driver?
Specialized software program that acts as a translator between OS and hardware devices.

Q93. What is Authentication vs Authorization?
Authentication: Verifying identity of a user/system.
Authorization: Determining permissions and access rights of authenticated user.

Q94. What is Access Control Matrix?
A security model representing user permissions over system objects/resources.

Q95. What is a System Virus / Malware?
Malicious code designed to damage, exploit, or disrupt operating systems and data.

Q96. What is Thrashing vs Starvation?
Thrashing: High page-swapping activity degrading overall system performance.
Starvation: Indefinite delay experienced by low-priority process awaiting resources.

Q97. What is Cache Memory?
High-speed CPU memory storing frequently accessed data to reduce access latency.

Q98. What is Memory Mapped I/O vs Port Mapped I/O?
Memory Mapped: I/O devices share address space with main memory.
Port Mapped: I/O devices use separate dedicated address space and instructions.

Q99. What is OS Virtualization / Containerization?
Virtualization (VMs): Emulates hardware using Hypervisor to run full OS instances.
Containerization (Docker): Shares host kernel to isolate user-space applications efficiently.

Q100. Best practices for mastering Operating Systems for interviews?
Understand core concepts visually, solve numerical problems (CPU scheduling, Paging, Disk scheduling), practice synchronization code (Semaphores/Mutex), and analyze real OS architectures (Linux vs Windows).

Top Companies Asking OS Questions:
- TCS
- Infosys
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Amazon
- Microsoft

Preparation Tips:
- Revisit core CPU scheduling and Deadlock algorithms thoroughly.
- Practice solving numerical problems on Paging, Address Translation, and Disk Scheduling.
- Master Process vs Thread differences and synchronization mechanisms.
- Understand Linux kernel basics and command-line execution.
- Revise memory management models and Page Fault steps.

Conclusion:
Operating System fundamentals are essential for technical interviews and placement drives. Consistent revision and problem-solving practice will significantly improve your performance.

Happy Coding!
Team GotPlaced`
},
{
  id: 9,

  slug: "top-100-computer-networks-interview-questions-2026",

  title: "Top 100 Computer Networks Interview Questions and Answers (2026)",

  description:
    "Prepare for Computer Networks interviews with the top 100 interview questions and answers. Learn OSI Model, TCP/IP, HTTP, HTTPS, DNS, Routing, Switching, IPv4, IPv6, TCP vs UDP, and more.",

  image: "/computer-networks-blog.jpg",

  author: "GotPlaced Team",

  category: "Computer Networks",

  date: "16 July 2026",

  readTime: "22 min read",

  content: `Top 100 Computer Networks Interview Questions and Answers (2026)

Computer Networks is one of the most important core subjects for placement interviews. Companies like TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, and Amazon frequently ask networking questions.

This guide covers the most important Computer Networks interview questions for freshers and experienced developers.

Topics Covered:
- Network Fundamentals & Topologies
- OSI & TCP/IP Reference Models
- Application Layer Protocols (HTTP, DNS, DHCP, FTP, SMTP)
- Transport Layer Protocols (TCP vs UDP, Flow & Error Control)
- Network Layer & IP Addressing (IPv4, IPv6, Subnetting, NAT)
- Routing Protocols & Algorithms
- Data Link Layer & Switching (Ethernet, MAC, ARP, VLAN)
- Physical Layer & Transmission Media
- Network Security & Firewalls

1. Network Fundamentals & Topologies

Q1. What is a Computer Network?
A collection of interconnected computing devices that can communicate, share resources, and exchange data using standard protocols.

Q2. What are the key criteria for a good computer network?
Performance (response time, throughput), Reliability (fault tolerance, uptime), and Security (data protection).

Q3. What is Network Topology? Name its types.
The structural arrangement or layout of network nodes and connecting links. Types: Bus, Star, Ring, Mesh, Tree, and Hybrid.

Q4. What is Mesh Topology and why is it highly reliable?
A topology where every node is directly connected to every other node via dedicated point-to-point links. It is reliable because link failures do not disrupt the entire network.

Q5. What is the difference between Unicast, Multicast, and Broadcast?
Unicast: One-to-One transmission.
Multicast: One-to-Many transmission to a specific target group.
Broadcast: One-to-All transmission across the entire subnet.

Q6. What is the difference between LAN, MAN, and WAN?
LAN (Local Area Network): Small geographic area (office, home).
MAN (Metropolitan Area Network): City-wide coverage.
WAN (Wide Area Network): Global or country-wide coverage (e.g., Internet).

Q7. What is the difference between Point-to-Point and Multipoint connections?
Point-to-Point: Dedicated physical link between two devices.
Multipoint: Shared physical link among three or more devices.

Q8. What is a MAC Address?
A unique 48-bit (6-byte) physical hardware address assigned to a Network Interface Card (NIC) by the manufacturer.

Q9. What is an IP Address?
A unique logical address assigned to a device connected to a network using IP protocol for identification and routing.

Q10. Difference between Public and Private IP Addresses?
Public IP: Globally unique, routable over the internet, assigned by ISP.
Private IP: Used within local networks, non-routable over the internet (RFC 1918).

2. OSI & TCP/IP Reference Models

Q11. What is the OSI Model?
An abstract 7-layer framework developed by ISO to standardize network communication functions.

Q12. Name the 7 layers of the OSI Model in order.
1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application.

Q13. What is the main function of the Presentation Layer?
Handles data formatting, translation, data compression, and encryption/decryption (e.g., SSL/TLS, JPEG, ASCII).

Q14. What is the main function of the Session Layer?
Establishes, manages, synchronizes, and terminates communication sessions between applications.

Q15. What is the TCP/IP Model?
A practical 4-layer network model used by the Internet: 1. Network Access / Link, 2. Internet, 3. Transport, 4. Application.

Q16. Compare OSI Model and TCP/IP Model.
OSI Model: 7 layers, theoretical, clear separation of services/interfaces/protocols.
TCP/IP Model: 4-5 layers, practical standard, protocols evolved first before model definition.

Q17. What is Encapsulation and Decapsulation?
Encapsulation: Adding protocol control information (headers/trailers) as data moves down the layers.
Decapsulation: Stripping headers/trailers as data moves up the layers at destination.

Q18. What are Protocol Data Units (PDUs) at different OSI layers?
Application/Presentation/Session: Data.
Transport: Segment (TCP) / Datagram (UDP).
Network: Packet.
Data Link: Frame.
Physical: Bits.

3. Application Layer Protocols

Q19. What is HTTP and HTTPS?
HTTP (Hypertext Transfer Protocol): Unencrypted text protocol operating on port 80.
HTTPS (HTTP Secure): Encrypted protocol using SSL/TLS encryption operating on port 443.

Q20. What is DNS (Domain Name System)?
A distributed hierarchical database service that translates human-readable domain names (e.g., google.com) into IP addresses.

Q21. Explain the step-by-step DNS Lookup Process.
Browser Cache -> OS Cache -> Router Cache -> ISP Resolver -> Root DNS Server -> TLD DNS Server -> Authoritative DNS Server -> IP Returned.

Q22. What is DHCP (Dynamic Host Configuration Protocol)?
An application layer protocol that automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to network clients.

Q23. Explain the DORA Process in DHCP.
Discover (Client broadcasts to locate server), Offer (Server offers IP configuration), Request (Client requests offered IP), Acknowledge (Server confirms lease).

Q24. What is FTP and SFTP?
FTP (File Transfer Protocol): File transfer using separate control (port 21) and data (port 20) channels (unencrypted).
SFTP (SSH File Transfer Protocol): Secure file transfer over encrypted SSH tunnel (port 22).

Q25. Difference between SMTP, POP3, and IMAP?
SMTP: Sends emails from client to server or between servers (port 25/587).
POP3: Downloads emails from server to client and deletes from server (port 110/995).
IMAP: Syncs emails across devices while keeping copy on server (port 143/993).

Q26. What is a Cookie and Session in Web Applications?
Cookie: Small key-value data stored on client browser for state persistence.
Session: Server-side data storage identified by a unique Session ID sent via cookie.

Q27. What are Common Well-Known Port Numbers?
FTP: 20/21, SSH: 22, Telnet: 23, SMTP: 25, DNS: 53, DHCP: 67/68, HTTP: 80, HTTPS: 443.

4. Transport Layer Protocols

Q28. What is the primary role of the Transport Layer?
Provides end-to-end communication, segmentation, port addressing, flow control, error control, and congestion management.

Q29. What is the difference between TCP and UDP?
TCP: Connection-oriented, reliable, guarantees order, flow/error control, slower.
UDP: Connectionless, unreliable, no order guarantee, lightweight, faster (streaming/gaming).

Q30. Explain the TCP 3-Way Handshake process.
Connection establishment sequence:
1. Client sends SYN (Synchronize) packet.
2. Server responds with SYN-ACK (Synchronize-Acknowledge) packet.
3. Client sends ACK (Acknowledge) packet.

Q31. Explain TCP 4-Way Wavehand connection termination.
1. Active closer sends FIN packet.
2. Passive closer responds with ACK packet.
3. Passive closer sends its own FIN packet.
4. Active closer responds with final ACK packet.

Q32. What is Flow Control in TCP?
A mechanism to prevent a fast sender from overwhelming a slow receiver using Sliding Window Protocol.

Q33. What is Congestion Control in TCP?
Algorithms used to prevent network overload (e.g., Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery).

Q34. What is a Socket and Socket Address?
Socket: An endpoint for communication within a process.
Socket Address: Combination of IP Address and Port Number (e.g., 192.168.1.1:8080).

Q35. What is SYN Flood Attack?
A Denial-of-Service (DoS) attack where attacker sends floods of TCP SYN requests without completing the handshake, exhausting server resources.

5. Network Layer & IP Addressing

Q36. What is the primary function of the Network Layer?
Provides logical addressing, packet encapsulation, and routing of packets across disparate networks.

Q37. What is IPv4 and its structure?
32-bit logical address represented as 4 decimal octets separated by dots (e.g., 192.168.1.1), allowing roughly 4.3 billion unique addresses.

Q38. Explain IPv4 Classes.
Class A: 1.0.0.0 to 126.255.255.255 (/8)
Class B: 128.0.0.0 to 191.255.255.255 (/16)
Class C: 192.0.0.0 to 223.255.255.255 (/24)
Class D: 224.0.0.0 to 239.255.255.255 (Multicast)
Class E: 240.0.0.0 to 255.255.255.255 (Experimental)

Q39. What is Loopback IP Address?
127.0.0.1 (IPv4) or ::1 (IPv6), used by host to send network traffic to itself for local testing.

Q40. What is Subnet Mask and Subnetting?
Subnet Mask: A 32-bit mask separating network ID and host ID portions of an IP address.
Subnetting: Dividing a single large physical network into smaller logical subnetworks.

Q41. What is CIDR (Classless Inter-Domain Routing)?
A flexible IP allocation method replacing classful addressing using prefix notation (e.g., 192.168.1.0/24).

Q42. What is IPv6 and its advantages over IPv4?
128-bit address represented in hexadecimal format. Advantages: Massive address space, simpler header format, built-in IPsec security, no NAT required.

Q43. What is NAT (Network Address Translation)?
A method that remaps private local IP addresses to a single public IP address before transmitting traffic over the public internet.

Q44. What is PAT (Port Address Translation) / NAT Overload?
A variant of NAT where multiple private IPs share a single public IP by assigning unique port numbers to each connection.

Q45. What is ICMP (Internet Control Message Protocol)?
A network layer helper protocol used by network devices to send error messages and operational info (e.g., ping, traceroute).

6. Routing Protocols & Algorithms

Q46. What is Routing?
The process of selecting the optimal path in a network along which to send network packets.

Q47. What is a Routing Table?
A data structure stored on a router listing available routes, metrics, and next-hop interfaces.

Q48. Difference between Static and Dynamic Routing?
Static: Routes configured manually by network admin (simple, secure, non-adaptive).
Dynamic: Routes learned automatically using routing protocols (scalable, fault-tolerant).

Q49. Difference between Interior Gateway Protocols (IGP) and Exterior Gateway Protocols (EGP)?
IGP: Used for routing within a single Autonomous System (AS) (e.g., OSPF, RIP).
EGP: Used for routing between different Autonomous Systems (e.g., BGP).

Q50. Difference between Distance Vector and Link State Routing Protocols?
Distance Vector (RIP): Uses hop count metric, shares full table with neighbors periodically.
Link State (OSPF): Uses cost metric based on bandwidth, builds full topology map using Link State Advertisements.

Q51. Explain RIP (Routing Information Protocol).
Distance Vector protocol using Hop Count as metric (max 15 hops), updates every 30 seconds.

Q52. Explain OSPF (Open Shortest Path First).
Link-state routing protocol using Dijkstra's Shortest Path First algorithm based on bandwidth metrics.

Q53. Explain BGP (Border Gateway Protocol).
Path Vector EGP protocol that manages how packets are routed across the internet between different Autonomous Systems.

7. Data Link Layer & Switching

Q54. What is the primary role of Data Link Layer?
Handles physical node-to-node frame delivery, framing, physical addressing (MAC), flow control, and error detection.

Q55. What are the two sublayers of Data Link Layer?
LLC (Logical Link Control): Interfaces with Network layer and manages framing.
MAC (Media Access Control): Interfaces with Physical layer and controls medium access.

Q56. What is ARP (Address Resolution Protocol)?
Translates a known logical IPv4 address into a physical MAC address on a local area network.

Q57. What is RARP (Reverse Address Resolution Protocol)?
Translates a known physical MAC address into a logical IP address (superseded by DHCP).

Q58. What is a Switch?
A Data Link Layer (Layer 2) multiport device that forwards frames to specific ports based on destination MAC addresses stored in its MAC Address Table.

Q59. Difference between Hub, Switch, and Router?
Hub: Physical layer (Layer 1) device that broadcasts incoming data to all ports.
Switch: Data Link layer (Layer 2) device that unicasts frames based on MAC addresses.
Router: Network layer (Layer 3) device that routes packets between different subnets based on IP addresses.

Q60. What is Collision Domain vs Broadcast Domain?
Collision Domain: Network segment where simultaneous packet transmissions cause collisions. (Hub = 1 domain, Switch = per-port domain).
Broadcast Domain: Network segment where a broadcast frame reaches all connected nodes. (Router breaks broadcast domains).

Q61. What is CSMA/CD?
Carrier Sense Multiple Access with Collision Detection - media access control method used in legacy Ethernet to detect and handle collisions using random backoff times.

Q62. What is CSMA/CA?
Carrier Sense Multiple Access with Collision Avoidance - media access control method used in Wi-Fi (802.11) to avoid collisions using RTS/CTS signals.

Q63. What is VLAN (Virtual Local Area Network)?
A logical grouping of devices on one or more physical switches configured to act as an isolated broadcast domain.

Q64. What is Trunking and IEEE 802.1Q?
Trunking: Transporting traffic for multiple VLANs over a single physical link.
IEEE 802.1Q: Standard protocol for tagging Ethernet frames with VLAN IDs.

Q65. What is Spanning Tree Protocol (STP)?
A Layer 2 protocol (IEEE 802.1D) that prevents switching loops on redundant networks by placing redundant ports in a blocking state.

8. Physical Layer & Transmission Media

Q66. What is the primary function of the Physical Layer?
Transmitting raw, uninterpreted bitstreams over physical transmission media (cables, wireless signals).

Q67. Difference between Guided and Unguided Transmission Media?
Guided (Bounded): Physical wired cables (Twisted Pair, Coaxial, Fiber Optic).
Unguided (Unbounded): Wireless signals transmitted through air/space (Radio waves, Microwaves, Infrared).

Q68. Difference between Half-Duplex and Full-Duplex transmission?
Half-Duplex: Data can flow in both directions, but only one direction at a time (e.g., Walkie-Talkie).
Full-Duplex: Data can flow in both directions simultaneously (e.g., Telephone call).

Q69. Difference between Analog and Digital Signals?
Analog: Continuous wave signals representing data by varying amplitude/frequency.
Digital: Discrete binary signals representing data as 0s and 1s.

Q70. What is Modulation and Demodulation?
Modulation: Converting digital signals into analog signals for transmission over medium.
Demodulation: Reverting analog signals back to digital signals at receiver (done by Modem).

Q71. What is Bandwidth vs Throughput vs Latency?
Bandwidth: Maximum theoretical data capacity of a network link (e.g., 100 Mbps).
Throughput: Actual rate of successful data delivery over a link.
Latency: Total delay taken for data to travel from source to destination.

Q72. What is Fiber Optic Cable and its advantages?
Transmission cable carrying data as light pulses through glass fibers. Advantages: Immunity to electromagnetic interference, massive bandwidth, low attenuation.

9. Network Security & Firewalls

Q73. What is a Firewall?
A network security hardware/software device that monitors and filters incoming and outgoing network traffic based on configured security rules.

Q74. Difference between Packet Filtering and Stateful Inspection Firewalls?
Packet Filtering: Inspects individual packets independently against static rules (IP, Port).
Stateful Inspection: Tracks connection states and context of active network sessions.

Q75. What is a Proxy Server?
An intermediary server that forwards client requests to external servers, hiding client IP and providing caching/filtering.

Q76. What is VPN (Virtual Private Network)?
Creates a secure, encrypted tunnel over a public network (Internet) to protect network traffic and mask IP location.

Q77. What is SSL/TLS?
Cryptographic protocols providing security, privacy, and data integrity for internet communications (HTTPS).

Q78. What is Symmetric vs Asymmetric Encryption?
Symmetric: Uses the same secret key for both encryption and decryption (faster, e.g., AES).
Asymmetric: Uses a public key for encryption and a private key for decryption (e.g., RSA).

Q79. What is a Digital Signature?
A mathematical technique used to validate the authenticity and integrity of a message or digital document using asymmetric keys.

Q80. What is DDoS (Distributed Denial of Service) Attack?
An attack where multiple compromised systems (botnet) flood a target server with traffic to disrupt legitimate availability.

Q81. What is Man-in-the-Middle (MITM) Attack?
An attack where an adversary secretly intercepts and alters communications between two trusting parties.

Q82. What is IP Spoofing?
Creation of IP packets with a forged source IP address to impersonate another legitimate computer system.

Q83. What is ARP Spoofing / ARP Poisoning?
Attacker sends fake ARP messages onto a LAN to associate their MAC address with the IP address of a legitimate gateway.

Q84. What is DNS Spoofing / Cache Poisoning?
Corrupting a DNS resolver's cache to redirect traffic from legitimate websites to malicious IP addresses.

Q85. What is Port Scanning?
Probing a host's network ports to discover open services and potential security vulnerabilities (e.g., using Nmap).

Q86. What is IPsec (Internet Protocol Security)?
A suite of protocols that secures IP communications by authenticating and encrypting each IP packet in a session.

Q87. What is DMZ (Demilitarized Zone) in Networking?
A physical or logical subnetwork that exposes an organization's external-facing services (e.g., Web, Mail) to untrusted networks while protecting the internal network.

Q88. What is IDS vs IPS?
IDS (Intrusion Detection System): Passive system that monitors and alerts on suspicious traffic.
IPS (Intrusion Prevention System): Active system that detects and actively blocks malicious traffic.

Q89. What is SSH (Secure Shell)?
A cryptographic network protocol operating on port 22 for operating network services securely over an unsecured network.

Q90. What is Telnet and why is it insecure?
An unencrypted remote management protocol that transmits all credentials and commands in plain text across port 23.

Q91. What is Ping command?
A network administration utility that sends ICMP Echo Request packets to test host reachability and measure round-trip time.

Q92. What is Traceroute / Tracert?
A tool that traces the path and measures transit delays of packets across an IP network by incrementing IPv4 TTL fields.

Q93. What is Netstat command?
A command-line tool displaying active network connections, listening ports, routing tables, and interface statistics.

Q94. What is NSLookup / Dig command?
Command-line tools used to query DNS servers and obtain domain name or IP address mapping records.

Q95. What is Keep-Alive in HTTP?
A header allowing a single TCP connection to remain open for multiple HTTP requests/responses, reducing latency.

Q96. What is BGP Hijacking?
Malicious redirect of internet traffic by falsely advertising ownership of IP prefix blocks using BGP updates.

Q97. What is Broadcast Storm?
An accumulation of intense broadcast traffic caused by switching loops, crippling network performance.

Q98. What is Cross-Site Scripting (XSS) vs SQL Injection?
XSS: Injecting malicious client-side scripts into web pages viewed by users.
SQLi: Injecting malicious SQL statements into database queries via user input fields.

Q99. What is Wireshark?
A widely used open-source network packet analyzer tool used for troubleshooting and security analysis.

Q100. Best practices for mastering Computer Networks for technical interviews?
Master the 7 layers of the OSI model, thoroughly understand the TCP 3-way handshake and DNS resolution, practice calculating CIDR subnetting, and learn network troubleshooting commands (ping, traceroute, netstat, nslookup).

Top Companies Asking Computer Networks Questions:
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Amazon

Preparation Tips:
- Memorize the OSI and TCP/IP layers along with their respective protocols and PDUs.
- Understand the complete flow of web requests (DNS, HTTP/HTTPS, TCP connection setup).
- Practice IPv4 subnetting and CIDR calculations.
- Revisit fundamental concepts like ARP, DHCP, NAT, and Routing algorithms.
- Learn standard command-line tools for networking diagnostics.

Conclusion:
Computer Networks is a foundational core subject for technical placements and software engineering roles. A solid grasp of networking fundamentals helps tremendously in both written tests and system design interviews.

Happy Learning!
Team GotPlaced`
},
{
  id: 10,

  slug: "top-100-dsa-interview-questions-2026",

  title: "Top 100 DSA Interview Questions and Answers (2026)",

  description:
    "Prepare for coding interviews with the top 100 Data Structures and Algorithms interview questions. Learn Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Dynamic Programming, Recursion, Sorting, Searching, and more.",

  image: "/dsa-blog.jpg",

  author: "GotPlaced Team",

  category: "DSA",

  date: "16 July 2026",

  readTime: "28 min read",

  content: `Top 100 DSA Interview Questions and Answers (2026)

Data Structures and Algorithms (DSA) is one of the most important subjects for placement interviews. Product-based companies like Amazon, Microsoft, Google, Meta, Flipkart, and Adobe frequently ask DSA questions in coding rounds and technical interviews.

This guide covers the top 100 DSA interview questions for freshers and experienced developers.

Topics Covered:
- Fundamentals & Time/Space Complexity
- Arrays & Two-Pointer Concepts
- Strings & Sliding Window
- Linked Lists
- Stacks & Queues
- Recursion & Backtracking
- Trees, Binary Search Trees (BST) & Heaps
- Graphs & Graph Algorithms
- Searching & Sorting Algorithms
- Dynamic Programming & Greedy Algorithms

1. Fundamentals & Time/Space Complexity

Q1. What is a Data Structure?
A specialized format for organizing, processing, retrieving, and storing data efficiently in memory.

Q2. What is an Algorithm?
A step-by-step set of well-defined instructions designed to solve a specific problem.

Q3. What is Time Complexity and Space Complexity?
Time Complexity: Measure of the amount of time an algorithm takes to run as a function of input size N.
Space Complexity: Amount of extra memory space required by an algorithm to execute as a function of input size N.

Q4. What is Big O Notation?
A mathematical notation used to describe the upper bound (worst-case scenario) of an algorithm's execution time or memory space.

Q5. Arrange common time complexities from best to worst.
O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N) < O(N!).

Q6. Difference between Linear and Non-Linear Data Structures?
Linear: Data elements are arranged sequentially (e.g., Array, Linked List, Stack, Queue).
Non-Linear: Data elements are arranged hierarchically or interconnectedly (e.g., Tree, Graph).

Q7. Difference between Static and Dynamic Data Structures?
Static: Memory size is allocated at compile-time and fixed (e.g., Static Array).
Dynamic: Memory size grows or shrinks dynamically at runtime (e.g., Vector, Linked List).

Q8. What is In-place Algorithm?
An algorithm that transforms input without using an auxiliary data structure, requiring O(1) extra space.

Q9. What is Stable Sorting Algorithm?
A sorting algorithm that preserves the relative order of duplicate elements after sorting (e.g., Merge Sort, Insertion Sort).

Q10. What is Amortized Time Complexity?
The average time taken per operation over a worst-case sequence of operations (e.g., dynamic array push operation is O(1) amortized).

2. Arrays & Two-Pointer Concepts

Q11. What is an Array?
A linear collection of elements stored at contiguous memory locations accessed by integer indices.

Q12. Advantage and Disadvantage of Arrays?
Advantage: Fast random access in O(1) time using index.
Disadvantage: Fixed size and costly insertions/deletions requiring O(N) shifts.

Q13. How to find the Largest and Smallest element in an Array?
Iterate through the array maintaining min and max variables, updating them in a single pass (O(N) time, O(1) space).

Q14. What is Kadane's Algorithm?
An efficient algorithm to find the maximum sum contiguous subarray in O(N) time and O(1) space.

Q15. Explain Two-Pointer Technique.
Using two index pointers (e.g., start and end) to traverse an array/string simultaneously from opposite or same directions to solve problems in O(N) time.

Q16. How to find Duplicate Number in an Array of N+1 integers?
Use Floyd's Tortoise and Hare (Cycle Detection) algorithm or HashMap/HashSet approach.

Q17. How to Rotate an Array by K positions?
Reverse the entire array, then reverse first K elements, and reverse remaining N-K elements in O(N) time and O(1) space.

Q18. How to Find the Missing Number in an array from 1 to N?
Calculate expected sum N*(N+1)/2 and subtract the array sum, or use Bitwise XOR operations.

Q19. What is Dutch National Flag Algorithm?
An algorithm to sort an array containing 0s, 1s, and 2s in single pass (O(N) time, O(1) space) using low, mid, and high pointers.

Q20. How to merge two sorted arrays without extra space?
Compare elements from back of both arrays or use Gap Method (Shell Sort variant) to reorder elements in O(N log N) time.

3. Strings & Sliding Window

Q21. What is a String in DSA?
A sequence of characters, usually represented internally as an array of characters or immutable object.

Q22. How to check if a String is a Palindrome?
Use two pointers (one at start, one at end) moving inward and checking character equality in O(N) time.

Q23. How to check if two Strings are Anagrams?
Count character frequencies using a fixed array of size 26 or hash map and check if frequency counts match.

Q24. What is Sliding Window Technique?
An algorithmic pattern where a dynamic or fixed-size window slides across an array/string to convert O(N^2) brute force problems into O(N) solutions.

Q25. How to find the Longest Substring Without Repeating Characters?
Use Sliding Window with a HashSet or HashMap storing character indices to track duplicate window characters.

Q26. What is Rabin-Karp Algorithm?
A string matching algorithm using rolling hash technique to search pattern in text in average O(N+M) time.

Q27. What is KMP (Knuth-Morris-Pratt) Algorithm?
A string pattern matching algorithm using a Longest Prefix Suffix (LPS) array to avoid re-evaluating matched characters in O(N+M) time.

Q28. How to find all Permutations of a String?
Use recursion and backtracking by swapping characters at current index with subsequent indices.

Q29. How to compress a string (e.g., "aabbb" -> "a2b3")?
Traverse string with two pointers, count consecutive matching characters, and append character followed by count to result.

4. Linked Lists

Q30. What is a Linked List?
A linear data structure where elements (nodes) contain data and a pointer to the next node in memory.

Q31. Difference between Singly, Doubly, and Circular Linked Lists?
Singly: Node has data and next pointer.
Doubly: Node has data, next pointer, and prev pointer.
Circular: Last node's next pointer points back to head node.

Q32. Advantage of Linked List over Array?
Dynamic size and efficient insertions/deletions at known positions in O(1) time without shifting.

Q33. How to Reverse a Singly Linked List?
Iteratively using three pointers (prev, current, next) or recursively in O(N) time and O(1) auxiliary space.

Q34. How to detect a loop/cycle in a Linked List?
Use Floyd's Cycle Detection Algorithm (Fast pointer moving 2 steps, Slow pointer moving 1 step).

Q35. How to find the Middle Node of a Linked List?
Use fast and slow pointer approach; when fast pointer reaches end, slow pointer rests at middle.

Q36. How to find Intersection Point of two Linked Lists?
Find lengths of both lists, advance longer list pointer by length difference, then move both pointers together until node equality.

Q37. How to remove N-th node from end of a Linked List?
Use two pointers separated by N steps. Move both together until first reaches end; second pointer will point before target node.

Q38. How to Flatten a Multilevel Doubly Linked List?
Recursively or iteratively flatten child pointers into main next pointers using stack or tail tracking.

Q39. What is LRU Cache and how to implement it?
Least Recently Used Cache implemented using a Doubly Linked List (for fast O(1) node movement) combined with HashMap (for O(1) lookup).

5. Stacks & Queues

Q40. What is a Stack and its operations?
A LIFO (Last In First Out) data structure supporting push(), pop(), peek(), and isEmpty() operations in O(1) time.

Q41. What is a Queue and its operations?
A FIFO (First In First Out) data structure supporting enqueue(), dequeue(), peek(), and isEmpty() operations in O(1) time.

Q42. How to implement Stack using Queues and Queue using Stacks?
Stack using Queues: Use two queues and push into q2, transfer q1 elements, swap queues.
Queue using Stacks: Use two stacks (input stack and output stack).

Q43. What is Monotonic Stack?
A stack whose elements are kept in strictly increasing or decreasing order, used for Next Greater/Smaller Element problems in O(N) time.

Q44. How to solve Next Greater Element problem?
Traverse array from right to left using a Monotonic Decreasing Stack, popping smaller elements and picking stack top as answer.

Q45. How to evaluate Infix, Prefix, and Postfix expressions?
Infix: Operand Operator Operand (A + B).
Prefix: Operator Operand Operand (+ A B).
Postfix: Operand Operand Operator (A B +) evaluated using stack.

Q46. How to solve Valid Parentheses problem?
Push opening brackets onto stack; pop and match when encountering closing brackets. If stack empty at end, expression is valid.

Q47. What is Min Stack?
A specialized stack returning minimum element in O(1) time using an auxiliary stack or encoded values.

Q48. What is a Deque (Double-Ended Queue)?
A queue allowing insertion and deletion from both front and rear ends in O(1) time.

Q49. How to find Maximum in Sliding Window of size K?
Use a Monotonic Deque storing indices in decreasing element value order to query maximum in O(N) time.

6. Recursion & Backtracking

Q50. What is Recursion?
A function calling itself to solve smaller instances of the same subproblem until reaching a base condition.

Q51. What is Base Condition and Stack Overflow Error?
Base Condition: Terminating condition that stops recursive calls.
Stack Overflow: Occurs when recursive function lacks valid base case, exhausting call stack memory.

Q52. What is Tail Recursion?
A recursive call performed as the absolute final statement of a function, allowing compiler stack space optimizations.

Q53. What is Backtracking?
An algorithmic technique that searches incrementally for solutions, abandoning (backtracking) paths as soon as they violate constraints.

Q54. Explain N-Queens Problem.
Placing N chess queens on an N x N chessboard such that no two queens attack each other, solved using backtracking in O(N!) time.

Q55. Explain Sudoku Solver Algorithm.
A backtracking algorithm attempting numbers 1 to 9 in empty cells and recursively verifying row, column, and 3x3 grid constraints.

Q56. Explain Subset Sum / Subsets Generation Problem.
Generate all possible subsets (Power Set) using backtracking by deciding to include or exclude each element (2^N subsets).

7. Trees, BST & Heaps

Q57. What is a Tree and Binary Tree?
Tree: Non-linear hierarchical structure of connected nodes.
Binary Tree: Tree where each node has at most two children (left and right).

Q58. Explain Binary Tree Traversals.
Inorder: Left -> Root -> Right.
Preorder: Root -> Left -> Right.
Postorder: Left -> Right -> Root.
Level Order: Breadth-First Search (BFS) using Queue layer by layer.

Q59. What is a Binary Search Tree (BST)?
A Binary Tree where left child node value < root value, and right child node value > root value for all subtrees.

Q60. What is time complexity of Search/Insert/Delete in BST?
Average Case: O(log N). Worst Case (Skewed Tree): O(N).

Q61. What is Height of a Binary Tree?
The number of edges on the longest path from root node to a leaf node.

Q62. What is Diameter of a Binary Tree?
The length of the longest path between any two nodes in a tree (may or may not pass through root).

Q63. What is Lowest Common Ancestor (LCA) in a Binary Tree?
The deepest shared ancestor node of two given target nodes P and Q.

Q64. What is Balanced Binary Tree (e.g., AVL Tree)?
A binary tree where height difference between left and right subtrees (Balance Factor) of every node is at most 1.

Q65. How to convert Sorted Array to Balanced BST?
Pick middle element as root and recursively construct left subtree from left half and right subtree from right half in O(N) time.

Q66. What is a Heap (Max Heap / Min Heap)?
A complete binary tree stored as an array satisfying heap property.
Max Heap: Parent node >= Children nodes.
Min Heap: Parent node <= Children nodes.

Q67. What are Heapify and Priority Queue operations?
Heapify: Adjusting nodes to maintain heap property in O(log N) time.
Priority Queue: Abstract data type backed by heap supporting insertion and extraction in O(log N) time.

Q68. What is Trie (Prefix Tree)?
A tree-based search structure used to store associative keys (strings) efficiently for prefix matching operations in O(L) time.

8. Graphs & Graph Algorithms

Q69. What is a Graph?
A non-linear network structure comprising a set of Vertices (Nodes) connected by Edges.

Q70. Difference between Directed and Undirected, Weighted and Unweighted Graphs?
Directed: Edges have specified direction (A -> B).
Undirected: Edges are bidirectional (A <-> B).
Weighted: Edges carry associated numerical cost values.

Q71. Graph Representations: Adjacency Matrix vs Adjacency List?
Adjacency Matrix: 2D array of size V x V (Space: O(V^2), Fast edge check).
Adjacency List: Array of linked lists/vectors (Space: O(V + E), Efficient for sparse graphs).

Q72. Explain Breadth-First Search (BFS) in Graph.
Level-order graph traversal using Queue and Visited array to explore neighbor nodes in O(V + E) time.

Q73. Explain Depth-First Search (DFS) in Graph.
Depth-oriented graph traversal using Recursion/Stack and Visited array in O(V + E) time.

Q74. How to detect Cycle in Undirected Graph?
Use BFS/DFS with visited array tracking parent nodes, or Disjoint Set Union (DSU).

Q75. How to detect Cycle in Directed Graph?
Use DFS with visited array and recursion stack state array, or Kahn's Algorithm (BFS in-degree check).

76. What is Topological Sort?
Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge U -> V, vertex U comes before V.

Q77. What is Kahn's Algorithm?
A BFS-based Topological Sort algorithm utilizing in-degree counts of vertices.

Q78. What is Dijkstra's Algorithm?
Single-source shortest path algorithm for graphs with non-negative edge weights using Greedy strategy with Priority Queue in O((V + E) log V) time.

Q79. What is Bellman-Ford Algorithm?
Single-source shortest path algorithm that handles negative edge weights and detects negative cycles in O(V * E) time.

Q80. What is Floyd-Warshall Algorithm?
All-pairs shortest path dynamic programming algorithm in O(V^3) time.

Q81. What is Minimum Spanning Tree (MST)?
A subset of edges connecting all vertices in a weighted undirected graph with minimal total edge weight without cycles.

Q82. Explain Prim's and Kruskal's Algorithms for MST.
Prim's: Greedy algorithm growing tree from single vertex using Priority Queue.
Kruskal's: Greedy algorithm sorting all edges by weight and adding using Disjoint Set Union (DSU).

Q83. What is Disjoint Set Union (DSU)?
Data structure supporting find() and union() operations in near O(1) time using Path Compression and Union by Rank/Size.

9. Searching & Sorting Algorithms

Q84. What is Linear Search vs Binary Search?
Linear Search: Sequential scanning in O(N) time for unsorted/sorted arrays.
Binary Search: Divide-and-conquer on sorted array halving search space in O(log N) time.

Q85. Write Binary Search algorithm logic.
Low = 0, High = N - 1. While Low <= High, Mid = Low + (High - Low) / 2. If Target == Arr[Mid] return Mid; else adjust Low or High.

Q86. Explain Bubble Sort.
Repeatedly compares and swaps adjacent out-of-order elements in O(N^2) time.

Q87. Explain Selection Sort.
Repeatedly finds minimum element from unsorted segment and places at beginning in O(N^2) time.

Q88. Explain Insertion Sort.
Builds sorted array one element at a time by inserting current element into correct position in O(N^2) time (O(N) best case).

Q89. Explain Merge Sort.
Divide-and-conquer stable sorting algorithm splitting array into halves, sorting recursively, and merging in O(N log N) time and O(N) space.

Q90. Explain Quick Sort.
Divide-and-conquer algorithm partitioning array around a Pivot element. Time: O(N log N) average, O(N^2) worst case.

Q91. Explain Heap Sort.
Converts array into Max Heap and repeatedly extracts maximum element into sorted position in O(N log N) time and O(1) space.

Q92. What are Counting Sort and Radix Sort?
Non-comparison integer sorting algorithms operating in linear time O(N + K) based on frequency counting and digit positioning.

10. Dynamic Programming & Greedy Algorithms

Q93. What is Dynamic Programming (DP)?
An optimization technique that solves complex problems by breaking them into overlapping subproblems and storing subproblem answers.

Q94. What are Overlapping Subproblems and Optimal Substructure?
Overlapping Subproblems: Subproblems are solved repeatedly.
Optimal Substructure: Optimal solution to problem can be constructed from optimal solutions of subproblems.

Q95. Difference between Memoization (Top-Down) and Tabulation (Bottom-Up)?
Memoization: Recursive approach caching results in table/map.
Tabulation: Iterative approach filling DP table sequentially starting from base cases.

Q96. Explain 0/1 Knapsack Problem.
Given items with weights and values, maximize total value in capacity W choosing to take (1) or leave (0) each item. Time: O(N * W).

Q97. Explain Unbounded Knapsack / Coin Change Problem.
Variant where unlimited quantities of each item/coin denomination are available to construct target sum.

Q98. Explain Longest Common Subsequence (LCS) Problem.
Find length of longest subsequence common to two strings using 2D DP matrix in O(M * N) time.

Q99. What is Greedy Algorithm strategy?
An algorithmic paradigm that makes the locally optimal choice at each step hoping to find a global optimum (e.g., Fractional Knapsack, Activity Selection).

Q100. Best practices to master DSA for technical coding interviews?
Focus on pattern recognition over memorization, understand underlying data structures thoroughly, analyze time and space complexities accurately, code clean edge cases on whiteboard/paper, and practice consistently on platforms like LeetCode and GeeksforGeeks.

Top Companies Asking DSA Questions:
- Amazon
- Microsoft
- Google
- Meta
- Flipkart
- Adobe
- TCS
- Infosys
- Accenture

Preparation Tips:
- Solve core problems across Arrays, Strings, Trees, Graphs, and DP.
- Practice explaining your thought process out loud while coding.
- Master time and space complexity analysis.
- Understand tradeoffs between different data structures.
- Mock test yourself under timed interview constraints.

Conclusion:
Data Structures and Algorithms form the backbone of technical software engineering interviews. Mastering these fundamental 100 questions along with regular problem-solving practice will significantly improve your coding interview success rate.

Happy Coding!
Team GotPlaced`
},
{
  id: 11,

  slug: "top-100-oops-interview-questions-2026",

  title: "Top 100 OOPs Interview Questions and Answers (2026)",

  description:
    "Prepare for Object-Oriented Programming interviews with the top 100 OOPs interview questions and answers. Learn Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction, Interfaces, Constructors, and more.",

  image: "/oops-blog.jpg",

  author: "GotPlaced Team",

  category: "OOPs",

  date: "17 July 2026",

  readTime: "22 min read",

  content: `Top 100 OOPs Interview Questions and Answers (2026)

Object-Oriented Programming (OOPs) is one of the most important core programming paradigms asked in placement interviews across C++, Java, Python, and C#. Companies like TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, and Amazon frequently test candidates on OOPs fundamentals.

This guide covers the top 100 OOPs interview questions for freshers and experienced developers.

Topics Covered:
- OOPs Paradigm & Basics
- Classes & Objects
- Encapsulation & Data Hiding
- Inheritance & Reusability
- Polymorphism & Dynamic Binding
- Abstraction & Interfaces
- Constructors, Destructors & Memory
- Access Modifiers & Scope
- Advanced OOPs & Design Patterns

1. OOPs Paradigm & Basics

Q1. What is OOPs?
Object-Oriented Programming (OOPs) is a programming paradigm organized around objects (data) and methods (behavior) rather than functions and logic.

Q2. What are the four main pillars of OOPs?
Encapsulation, Inheritance, Polymorphism, and Abstraction.

Q3. What are the main advantages of OOPs over Procedural Programming?
Code reusability (Inheritance), modularity, enhanced security (Encapsulation), ease of maintenance, and ability to map real-world entities into software structures.

Q4. What is procedural programming vs object-oriented programming?
Procedural: Top-down approach centered on functions operating on global/local variables.
OOPs: Bottom-up approach centered on objects encapsulating both data and operations.

Q5. Is Java a pure object-oriented language?
No, because Java supports primitive data types (like int, char, boolean) which are not objects.

Q6. Name a pure object-oriented programming language.
Smalltalk is considered a pure object-oriented language where everything is an object.

Q7. What is an Entity in OOPs?
A real-world object or concept that possesses state (attributes) and behavior (methods).

Q8. What is Message Passing in OOPs?
The process by which an object invokes a method on another object to send data or request an action.

Q9. What is Coupling in software design?
The degree of direct dependency between two classes or modules. Loose coupling is preferred in OOPs.

Q10. What is Cohesion in software design?
The degree to which elements within a class belong together. High cohesion is preferred in OOPs.

2. Classes & Objects

Q11. What is a Class?
A user-defined blueprint or template that defines attributes (data) and methods (behavior) common to objects of that type.

Q12. What is an Object?
An active runtime instance of a class occupying physical memory space.

Q13. How does an Object differ from a Class?
Class is a logical/theoretical specification requiring no memory until instantiated. Object is a physical instance residing in memory.

Q14. How do you instantiate an object in Java / C++?
In Java: MyClass obj = new MyClass();
In C++: MyClass obj; or MyClass* obj = new MyClass();

Q15. Can a class exist without an object?
Yes, a class definition exists independently in code before any instances are created.

Q16. What is the size of an empty class in C++?
Usually 1 byte, allocated by the compiler to ensure unique memory addresses for instances.

Q17. What is an Anonymous Object?
An object created without an explicit reference variable name, often used for one-time method calls.

Q18. What is Garbage Collection in relation to Objects?
An automated memory management process that reclaims memory occupied by objects that are no longer referenced.

Q19. What is a Singleton Class?
A class designed to restrict instantiation to a single object across the runtime environment.

Q20. What is an Immutable Class?
A class whose object state cannot be modified after creation (e.g., String class in Java).

3. Encapsulation & Data Hiding

Q21. What is Encapsulation?
Wrapping variables (data) and methods (behavior) together into a single unit (class) while controlling direct access.

Q22. How is Encapsulation achieved in programming?
By declaring class variables as private and exposing public getter and setter methods.

Q23. What is Data Hiding?
A security technique preventing direct internal variable manipulation from outside the class scope.

Q24. Difference between Encapsulation and Data Hiding?
Encapsulation: Focuses on binding data and methods together into a package.
Data Hiding: Focuses on restricting access to internal implementation details.

Q25. What is a JavaBean / POJO?
A simple Java class that encapsulates objects with private fields, public getters/setters, and a no-arg constructor.

Q26. What are Getters and Setters?
Accessor (getter) and Mutator (setter) methods used to read and update private instance attributes safely.

Q27. Why should fields be kept private?
To validate input data, maintain object integrity, prevent unauthorized state modification, and decouple internal structure from client code.

Q28. Can encapsulation exist without data hiding?
Technically yes, if all fields in a class are public, data is encapsulated in a unit but not hidden.

4. Inheritance & Reusability

Q29. What is Inheritance?
A mechanism allowing a child (sub) class to inherit properties and behaviors from a parent (super) class.

Q30. What are the types of Inheritance?
Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance.

Q31. Explain Single Inheritance.
A child class derives directly from a single parent class.

Q32. Explain Multilevel Inheritance.
A class derives from a child class, forming a chain of inheritance (e.g., Class C inherits Class B, which inherits Class A).

Q33. Explain Hierarchical Inheritance.
Multiple child classes derive from a single common parent class.

Q34. Explain Multiple Inheritance and why Java avoids it for classes.
Deriving a class from multiple parent classes. Java avoids it for classes to prevent ambiguity known as the Diamond Problem.

Q35. What is the Diamond Problem?
Ambiguity occurring when a child inherits from two parent classes that both implement the exact same method signature from a common grandparent.

Q36. How is Multiple Inheritance achieved in Java?
Using Interfaces, since a class can implement multiple interfaces without method implementation collision.

Q37. What is Hybrid Inheritance?
A combination of two or more types of inheritance in a single hierarchy.

Q38. What is IS-A relationship?
An inheritance relationship where a child class is a specialized type of parent class (e.g., Dog IS-A Animal).

Q39. What is HAS-A relationship (Composition / Aggregation)?
A relationship where a class contains an instance of another class as an attribute (e.g., Car HAS-A Engine).

Q40. Difference between Composition and Aggregation?
Composition: Strong ownership (e.g., Engine cannot exist without Car).
Aggregation: Weak ownership (e.g., Teacher can exist without Department).

Q41. Can private members of a parent class be inherited?
Private members are inherited logically but cannot be accessed directly by child classes without public/protected getters.

Q42. What is super keyword in Java?
Refers to the immediate superclass instance to access parent constructors, methods, or hidden fields.

Q43. What is base and derived class?
Base Class: The parent class supplying attributes/methods.
Derived Class: The child class inheriting from base class.

5. Polymorphism & Dynamic Binding

Q44. What is Polymorphism?
The ability of an object or method to take on multiple forms depending on context.

Q45. What are the two main types of Polymorphism?
Compile-Time (Static) Polymorphism and Runtime (Dynamic) Polymorphism.

Q46. What is Compile-Time Polymorphism?
Method overloading or operator overloading resolved at compile time.

Q47. What is Runtime Polymorphism?
Method overriding resolved at execution time via Dynamic Method Dispatch.

Q48. What is Method Overloading?
Defining multiple methods in the same class with identical names but different parameter signatures.

Q49. What is Method Overriding?
A child class re-implementing a method declared in parent class with the exact same name, return type, and parameter list.

Q50. Difference between Method Overloading and Method Overriding?
Overloading: Same class, different parameters, compile-time binding.
Overriding: Child class, same parameters, runtime binding.

Q51. What is Operator Overloading?
Giving custom behavior to standard operators (+, -, *) when applied to user-defined class objects (supported in C++, not Java).

Q52. Can we overload the main() method in Java?
Yes, but the JVM executes only public static void main(String[] args) as the entry point.

Q53. What is Dynamic Method Dispatch?
A runtime mechanism where a call to an overridden method is resolved dynamically based on the actual object type rather than reference type.

Q54. Can static methods be overridden in Java?
No, static methods belong to the class level and are hidden (Method Hiding), not overridden dynamically.

Q55. Can private methods be overridden?
No, private methods are bound at compile time and invisible to subclasses.

Q56. What is Virtual Function in C++?
A parent class member function declared with virtual keyword to ensure dynamic overriding in derived classes.

Q57. What is Pure Virtual Function in C++?
A virtual function assigned = 0 that has no implementation in base class, making the class abstract.

Q58. What is vtable (Virtual Table) and vptr?
vtable: A compiler-generated lookup table storing addresses of virtual functions.
vptr: A pointer stored in each object pointing to its class vtable for dynamic dispatch.

6. Abstraction & Interfaces

Q59. What is Abstraction?
Hiding internal background implementation details and showing only key operational features to end users.

Q60. Difference between Abstraction and Encapsulation?
Abstraction: Focuses on WHAT an object does.
Encapsulation: Focuses on HOW data is protected and packaged.

Q61. What is an Abstract Class?
A class declared with abstract keyword that cannot be instantiated and may contain abstract methods.

Q62. What is an Abstract Method?
A method declared without an implementation body that must be overridden by concrete subclasses.

Q63. What is an Interface?
A fully abstract contract specifying methods a class must implement without holding state or instance implementation.

Q64. Difference between Abstract Class and Interface?
Abstract Class: Can have state, constructors, concrete methods, single inheritance.
Interface: Holds static final constants, default/static methods (Java 8+), supports multiple inheritance.

Q65. Can an Abstract Class have a Constructor?
Yes, abstract class constructors execute when concrete child classes are instantiated.

Q66. Can an Interface have constructors?
No, interfaces cannot hold instance variables or constructors.

Q67. Can an abstract class extend another concrete class?
Yes, an abstract class can extend a concrete class or another abstract class.

Q68. What are Default and Static methods in Java Interfaces?
Features introduced in Java 8 allowing interfaces to provide method implementations without breaking legacy implementers.

Q69. What is a Marker Interface?
An interface with no declared methods or constants (e.g., Serializable, Cloneable) serving as metadata to the runtime environment.

7. Constructors, Destructors & Memory

Q70. What is a Constructor?
A special block of code automatically invoked when an instance of a class is created to initialize fields.

Q71. What are key characteristics of Constructors?
Same name as class, no return type (not even void), invoked automatically via new operator.

Q72. What are the types of Constructors?
Default Constructor, Parameterized Constructor, and Copy Constructor.

Q73. What is a Default Constructor?
A no-argument constructor inserted automatically by compiler if no explicit constructors are defined.

Q74. What is a Parameterized Constructor?
A constructor taking arguments to initialize object attributes with custom values.

Q75. What is a Copy Constructor?
A constructor that initializes a new object using attributes of an existing object of the same class.

Q76. What is Constructor Overloading?
Defining multiple constructors in the same class with different parameter lists.

Q77. What is Constructor Chaining?
The process of calling one constructor from another in the same class (using this()) or parent class (using super()).

Q78. What is a Destructor?
A specialized method invoked when an object is destroyed to release allocated system resources (common in C++, handled by GC in Java).

Q79. Can a Constructor be Private?
Yes, private constructors prevent external class instantiation (used in Singleton Pattern and Utility Classes).

Q80. Can a Constructor be Virtual in C++?
No, constructor calls cannot be virtual because object runtime type is not fully constructed yet.

Q81. Can a Destructor be Virtual in C++?
Yes, virtual destructors ensure proper cleanup order when deleting derived objects through base class pointers.

Q82. What is Shallow Copy vs Deep Copy?
Shallow Copy: Duplicates object top-level fields, copying internal pointers/references.
Deep Copy: Recursively duplicates object and all referenced memory entities independently.

8. Access Modifiers & Scope

Q83. What are Access Modifiers?
Keywords controlling the visibility and accessibility of classes, methods, and variables.

Q84. Explain Public Access Modifier.
Accessible from any other class or package across the application.

Q85. Explain Private Access Modifier.
Accessible strictly within the declaring class scope only.

Q86. Explain Protected Access Modifier.
Accessible within the same package and by subclasses in foreign packages.

Q87. What is Default / Package-Private Access Modifier in Java?
Accessible only by classes located within the same package (when no keyword is specified).

Q88. What is static keyword?
Declares class-level attributes, methods, or blocks shared across all instances without requiring instantiation.

Q89. What is final keyword in Java?
Variable: Unmodifiable constant.
Method: Cannot be overridden.
Class: Cannot be inherited.

Q90. What is this keyword?
Refers to the current class instance variable or method invocation.

9. Advanced OOPs & Design Patterns

Q91. What is SOLID Principles in Object-Oriented Design?
Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.

Q92. What is Single Responsibility Principle (SRP)?
A class should have one, and only one, reason to change.

Q93. What is Open/Closed Principle (OCP)?
Software entities should be open for extension, but closed for modification.

Q94. What is Liskov Substitution Principle (LSP)?
Derived objects must be substitutable for parent objects without altering program correctness.

Q95. What is Interface Segregation Principle (ISP)?
Clients should not be forced to depend on interfaces they do not use.

Q96. What is Dependency Inversion Principle (DIP)?
High-level modules should depend on abstractions, not concrete low-level implementations.

Q97. What is Factory Design Pattern?
A creational design pattern providing an interface to instantiate objects without specifying exact concrete classes.

Q98. What is Observer Design Pattern?
A behavioral pattern where subject objects maintain dependent subscriber lists and notify them automatically of state changes.

Q99. What is Object Cloning in Java?
Creating an exact duplicate instance of an object implementing Cloneable interface via clone() method.

Q100. Best practices for writing clean Object-Oriented code?
Encapsulate fields properly, prefer composition over inheritance, follow SOLID principles, write small cohesive classes, and code to interfaces rather than implementations.

Top Companies Asking OOPs Questions:
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Amazon

Preparation Tips:
- Master the 4 main pillars (Encapsulation, Inheritance, Polymorphism, Abstraction) with code examples.
- Understand difference between Overloading vs Overriding and Abstract Class vs Interface.
- Practice drawing Class Diagrams and identifying IS-A vs HAS-A relationships.
- Learn memory concepts like vtable/vptr in C++ and JVM Heap object allocation in Java.
- Revise SOLID design principles for senior engineering rounds.

Conclusion:
Object-Oriented Programming forms the baseline of modern software architecture. Mastering these core 100 OOPs questions will help you tackle technical interviews across any major object-oriented language.

Happy Learning!
Team GotPlaced`
},
{
  id: 12,

  slug: "top-100-dbms-interview-questions-2026",

  title: "Top 100 DBMS Interview Questions and Answers (2026)",

  description:
    "Prepare for Database Management System interviews with the Top 100 DBMS Interview Questions and Answers (2026). Learn Database Fundamentals, SQL, Keys, Constraints, ER Model, Normalization, Transactions, ACID Properties, Joins, Indexing, Views, Triggers, Stored Procedures, Concurrency Control, Deadlocks, Database Security, and more.",

  image: "/dbms-blog.jpg",

  author: "GotPlaced Team",

  category: "DBMS",

  date: "17 July 2026",

  readTime: "24 min read",

  content: `Top 100 DBMS Interview Questions and Answers (2026)

Database Management System (DBMS) is one of the most important subjects for placement interviews. Almost every service-based and product-based company asks DBMS-related questions to evaluate a candidate's understanding of databases, SQL, transactions, normalization, and data management concepts.

Whether you're preparing for campus placements, off-campus drives, software engineering interviews, or backend development roles, mastering DBMS concepts is essential.

Topics Covered:
- DBMS Fundamentals & Architecture
- Data Models & ER Modeling
- Relational Model, Keys & Constraints
- Normalization (1NF to 5NF, BCNF)
- SQL & Relational Algebra
- SQL Joins, Subqueries & Views
- Transactions & ACID Properties
- Concurrency Control & Locking
- Indexing, Hashing & Performance Tuning
- Database Security & NoSQL Basics

1. DBMS Fundamentals & Architecture

Q1. What is DBMS?
A Database Management System (DBMS) is software used to create, store, retrieve, update, and manage data efficiently while maintaining security and consistency.

Q2. What are the main advantages of DBMS over File Systems?
Reduces data redundancy, eliminates data inconsistency, enforces security/integrity constraints, provides concurrent access, and offers backup/recovery mechanisms.

Q3. What is a Database?
An organized collection of structured data stored electronically for easy access, management, and updating.

Q4. What is the difference between DBMS and RDBMS?
DBMS: Stores data as files/tables, relationships are not mandatory, integrity rules not strictly enforced.
RDBMS: Stores data in tabular relations, enforces relationships using foreign keys, strictly adheres to ACID properties.

Q5. What is Three-Schema Architecture (ANSI/SPARC)?
Database abstraction model with 3 levels:
1. Physical/Internal Level (how data is physically stored).
2. Conceptual/Logical Level (what data is stored and relationships).
3. External/View Level (user-specific customized views).

Q6. What is Data Independence?
Ability to modify database schema at one level without affecting the schema at the next higher level. Types: Logical Data Independence and Physical Data Independence.

Q7. What is Database Administrator (DBA)?
A professional responsible for managing, configuring, securing, maintaining, and monitoring database environments.

Q8. What is Data Dictionary / System Catalog?
A system database storing metadata (data about data), such as schemas, table structures, constraints, user permissions, and indexes.

Q9. What is Instance and Schema in DBMS?
Schema: Overall logical structure/design of the database (fixed).
Instance: Collection of data stored in database at a specific point in time (dynamic).

Q10. What is Data Redundancy and Data Inconsistency?
Data Redundancy: Duplication of data in multiple database locations.
Data Inconsistency: Different copies of the same data showing conflicting values.

2. Data Models & ER Modeling

Q11. What is a Data Model?
A conceptual framework that defines how data is logically structured, connected, and stored (e.g., Relational, ER, Hierarchical, Network, Object-Oriented).

Q12. What is ER Model (Entity-Relationship Model)?
A high-level conceptual data model representing real-world entities and their relationships using Entity Sets, Attributes, and Relationships.

Q13. What is an Entity, Entity Set, and Weak Entity?
Entity: Real-world object distinguishable from others.
Entity Set: Collection of similar entities.
Weak Entity: Entity that lacks a primary key and depends on a Strong Entity via an identifying relationship.

Q14. What are the different types of Attributes in ER Diagram?
Simple, Composite, Single-Valued, Multi-Valued, Derived, and Key Attributes.

Q15. What are Cardinalities in Relationships?
Defines maximum number of relationship instances an entity can participate in: One-to-One (1:1), One-to-Many (1:N), Many-to-One (N:1), Many-to-Many (M:N).

Q16. What is Degree of a Relationship?
The number of entity sets participating in a relationship (Unary = 1, Binary = 2, Ternary = 3).

Q17. What is Generalization, Specialization, and Aggregation?
Generalization: Bottom-up approach combining low-level entity sets into higher-level set.
Specialization: Top-down approach breaking higher-level set into sub-entities.
Aggregation: Treating a relationship set as a high-level entity to relate it with another set.

3. Relational Model, Keys & Constraints

Q18. What is Relational Model?
A database model representing data in 2D tables called Relations consisting of Rows (Tuples) and Columns (Attributes).

Q19. What is a Tuple and an Attribute?
Tuple: A single row in a table representing a data record.
Attribute: A column in a table representing a data field/property.

Q20. What is Domain in Relational Model?
The set of permissible, atomic values allowed for a specific attribute.

Q21. What is a Super Key?
A set of one or more attributes that uniquely identifies a tuple within a relation.

Q22. What is a Candidate Key?
A minimal Super Key with no redundant attributes capable of uniquely identifying a tuple.

Q23. What is a Primary Key?
A candidate key selected by the database designer to uniquely identify records. Cannot contain NULL or duplicate values.

Q24. What is a Foreign Key?
An attribute in one table referencing the Primary Key of another table to establish relational links and enforce Referential Integrity.

Q25. What is a Alternate Key / Secondary Key?
A candidate key that was not chosen as the Primary Key.

Q26. What is a Composite Key?
A primary or candidate key composed of two or more attributes combined to uniquely identify a record.

Q27. What is Surrogate Key?
An artificially generated unique key (e.g., auto-increment ID) with no business meaning.

Q28. Explain Integrity Constraints in DBMS.
Rules enforced to maintain data correctness and consistency: Domain Constraint, Entity Integrity, Referential Integrity, and Key Constraint.

Q29. What is Entity Integrity Constraint?
Rule stating that Primary Key attribute values can never be NULL.

Q30. What is Referential Integrity Constraint?
Rule stating that Foreign Key values must either match an existing Primary Key value in the referenced table or be NULL.

4. Normalization (1NF to 5NF, BCNF)

Q31. What is Normalization?
Process of structuring relational tables to reduce data redundancy and eliminate update/insertion/deletion anomalies.

Q32. What are Database Anomalies?
Anomalies occurring in unnormalized tables:
- Insertion Anomaly: Inability to insert data without adding unrelated fields.
- Deletion Anomaly: Loss of essential data when deleting a record.
- Update Anomaly: Inconsistent data state resulting from partial updates.

Q33. What is Functional Dependency (FD)?
A constraint between two attributes X -> Y meaning value of X uniquely determines value of Y.

Q34. What is Trivial vs Non-Trivial Functional Dependency?
Trivial: X -> Y where Y is a subset of X (e.g., {Emp_ID, Name} -> Emp_ID).
Non-Trivial: X -> Y where Y is not a subset of X.

Q35. What is First Normal Form (1NF)?
A relation is in 1NF if every attribute contains only atomic (indivisible) values and no repeating groups.

Q36. What is Second Normal Form (2NF)?
A relation is in 2NF if it is in 1NF and contains no Partial Dependencies (non-prime attributes must depend fully on entire primary key).

Q37. What is Third Normal Form (3NF)?
A relation is in 3NF if it is in 2NF and contains no Transitive Dependencies (non-prime attributes must not depend on other non-prime attributes).

Q38. What is Boyce-Codd Normal Form (BCNF)?
A stricter version of 3NF where for every functional dependency X -> Y, X must be a Super Key.

Q39. Difference between 3NF and BCNF?
3NF allows X -> Y if Y is a prime attribute even if X is not a super key. BCNF strictly requires X to be a super key for all non-trivial FDs.

Q40. What is Fourth Normal Form (4NF)?
A relation is in 4NF if it is in BCNF and contains no Multi-Valued Dependencies (MVD).

Q41. What is Fifth Normal Form (5NF) / Join Normal Form?
A relation is in 5NF if it cannot be decomposed further without loss of data (handles Join Dependencies).

Q42. What is Denormalization?
Intentionally introducing redundancy into normalized tables to reduce joins and optimize read query performance.

5. SQL & Relational Algebra

Q43. What is SQL?
Structured Query Language - standard domain-specific language used to query, manage, and manipulate relational databases.

Q44. What are the main categories of SQL commands?
DDL (Data Definition Language), DML (Data Manipulation Language), DQL (Data Query Language), DCL (Data Control Language), TCL (Transaction Control Language).

Q45. Give examples of DDL, DML, DQL, DCL, TCL commands.
DDL: CREATE, ALTER, DROP, TRUNCATE, RENAME.
DML: INSERT, UPDATE, DELETE.
DQL: SELECT.
DCL: GRANT, REVOKE.
TCL: COMMIT, ROLLBACK, SAVEPOINT.

Q46. Difference between DELETE, TRUNCATE, and DROP?
DELETE: DML command, removes specific rows using WHERE clause, can be rolled back, slow.
TRUNCATE: DDL command, removes all rows instantly, resets auto-increment, cannot be easily rolled back.
DROP: DDL command, deletes entire table structure and data permanently from database.

Q47. What is Relational Algebra?
A procedural query language taking relations as input and producing new relations as output using operators (Selection, Projection, Union, Cartesian Product, Join).

Q48. Explain Selection (σ) and Projection (π) in Relational Algebra.
Selection (σ): Filters rows based on a given condition (horizontal subset).
Projection (π): Selects specified columns while removing duplicates (vertical subset).

Q49. Difference between WHERE and HAVING clause in SQL?
WHERE: Filters individual rows before grouping (cannot use aggregate functions).
HAVING: Filters aggregated groups after GROUP BY clause execution.

Q50. What is Pattern Matching in SQL (LIKE operator)?
Used with wildcard characters: % (matches zero or more characters) and _ (matches single character).

6. SQL Joins, Subqueries & Views

Q51. What is a SQL Join?
An operation combining columns from one or more tables based on a shared related column.

Q52. What are the main types of SQL Joins?
Inner Join, Left (Outer) Join, Right (Outer) Join, Full (Outer) Join, Cross Join, and Self Join.

Q53. Explain Inner Join vs Outer Join.
Inner Join: Returns only matching rows from both tables.
Outer Join: Returns matching rows plus unmatched rows from left, right, or both tables.

Q54. What is a Self Join?
Joining a table with itself using table aliases to evaluate hierarchical or recursive relationships within same table.

Q55. What is a Cross Join (Cartesian Product)?
Returns Cartesian product of two tables where each row of first table combines with every row of second table (N x M rows).

Q56. What is a Subquery (Nested Query)?
A query nested inside a SELECT, INSERT, UPDATE, or DELETE statement.

Q57. Difference between Correlated and Non-Correlated Subquery?
Non-Correlated: Inner query runs independently once and passes result to outer query.
Correlated: Inner query references columns from outer query and re-evaluates for every row processed by outer query.

Q58. What is a View in SQL?
A virtual table derived from a SQL SELECT query result that does not store data physically (except materialized views).

Q59. Difference between View and Materialized View?
View: Virtual table executing underlying query dynamically on every access.
Materialized View: Stores query output physically on disk and requires periodic refresh.

Q60. What is UNION vs UNION ALL?
UNION: Combines results of two SELECT queries and removes duplicate rows.
UNION ALL: Combines results keeping all rows including duplicates (faster execution).

7. Transactions & ACID Properties

Q61. What is a Transaction?
A single logical unit of database work consisting of one or more SQL operations executed completely or not at all.

Q62. What are ACID Properties in DBMS?
Atomicity, Consistency, Isolation, and Durability - set of properties guaranteeing reliable database transactions.

Q63. Explain Atomicity.
"All or Nothing" principle ensuring that either all operations in a transaction complete successfully or none take effect.

Q64. Explain Consistency.
Ensures a transaction transforms database from one valid state to another valid state obeying all schema rules and constraints.

Q65. Explain Isolation.
Ensures concurrently executing transactions do not interfere with each other's execution states.

Q66. Explain Durability.
Ensures committed transaction updates persist permanently in database even during system crashes or power failures.

Q67. What are Transaction States?
Active, Partially Committed, Committed, Failed, and Aborted.

Q68. What are Concurrency Read Phenomena (Concurrency Problems)?
Dirty Read, Non-Repeatable Read, Phantom Read, and Lost Update.

Q69. Explain Dirty Read, Non-Repeatable Read, and Phantom Read.
Dirty Read: Transaction reads uncommitted data modified by another concurrent transaction.
Non-Repeatable Read: Transaction re-reads same row and finds modified values committed by another transaction.
Phantom Read: Transaction re-runs query and finds new rows inserted/deleted by another committed transaction.

Q70. What are Transaction Isolation Levels?
Read Uncommitted, Read Committed, Repeatable Read, and Serializable (highest isolation, lowest concurrency).

8. Concurrency Control & Locking

Q71. What is Concurrency Control?
Management of simultaneous execution of concurrent transactions to ensure isolation and consistency without data corruption.

Q72. What is a Lock in DBMS?
A mechanism restricting access to a data item by concurrent transactions.

Q73. Difference between Shared Lock (S) and Exclusive Lock (X)?
Shared Lock (S): Acquired for read operations; multiple transactions can hold shared locks simultaneously.
Exclusive Lock (X): Acquired for write operations; no other transaction can read or write data item.

Q74. What is Two-Phase Locking Protocol (2PL)?
Locking protocol guaranteeing Serializability with two phases:
1. Growing Phase: Locks acquired, none released.
2. Shrinking Phase: Locks released, none acquired.

Q75. What is Strict 2PL vs Rigorous 2PL?
Strict 2PL: Holds all Exclusive (X) locks until transaction commits/aborts.
Rigorous 2PL: Holds both Shared (S) and Exclusive (X) locks until transaction commits/aborts.

Q76. What is a Deadlock in DBMS?
A situation where two or more transactions wait indefinitely for locks held by each other forming a cyclic dependency.

Q77. How to handle Deadlocks in DBMS?
Deadlock Prevention (Wait-Die, Wound-Wait schemes), Deadlock Avoidance, and Deadlock Detection & Recovery (Wait-For Graph).

78. Explain Wait-Die and Wound-Wait schemes.
Wait-Die (Non-preemptive): Older transaction waits for younger; younger transaction dies if requesting lock held by older.
Wound-Wait (Preemptive): Older transaction wounds (preempts) younger; younger waits for older.

Q79. What is Timestamp Ordering Protocol?
Concurrency control protocol assigning unique timestamps to transactions to execute operations in strict timestamp order.

Q80. What is Serializability?
Criterion ensuring concurrent transaction execution produces identical results to executing transactions sequentially in some serial order.

9. Indexing, Hashing & Performance Tuning

Q81. What is Indexing in DBMS?
A data structure technique (e.g., B-Tree, B+ Tree) used to quickly locate and access data without scanning every table row.

Q82. Difference between Clustered and Non-Clustered Index?
Clustered Index: Reorders physical storage of table rows according to index key (only 1 per table).
Non-Clustered Index: Logical index structure separate from table holding pointers to physical rows (multiple per table).

Q83. What is Primary Index, Secondary Index, and Dense/Sparse Index?
Primary Index: Created on primary key of ordered table.
Secondary Index: Created on non-ordering fields.
Dense Index: Index record exists for every search key value in table.
Sparse Index: Index records exist for only some data blocks.

Q84. Why are B-Trees and B+ Trees widely used for database indexing?
Balanced search trees maintaining sorted data with logarithmic search, insertion, and deletion times, optimized for disk block IO operations.

Q85. Difference between B-Tree and B+ Tree?
B-Tree: Data pointers stored in both internal and leaf nodes.
B+ Tree: Data pointers stored strictly in leaf nodes; leaf nodes linked sequentially for range queries.

Q86. What is Hashing in DBMS?
Direct data retrieval technique converting key values into bucket block addresses using a Hash Function.

Q87. Difference between Static and Dynamic Hashing?
Static Hashing: Bucket count remains fixed, leading to overflow issues.
Dynamic Hashing (Extendible): Hash buckets grow/shrink dynamically with data volume.

Q88. What is Query Optimization?
Process where query optimizer selects the most efficient execution plan (lowest cost/time) for executing a SQL query.

Q89. What is Stored Procedure?
Precompiled collection of SQL statements stored on server that can be executed repeatedly with input/output parameters.

Q90. What is a Database Trigger?
Special procedural code automatically executed (fired) in response to specific events (INSERT, UPDATE, DELETE) on a table.

10. Database Security & NoSQL Basics

Q91. What is Database Security?
Protections used to secure databases against unauthorized access, malicious attacks, data breaches, and corruption.

Q92. What is SQL Injection (SQLi)?
Security vulnerability where malicious SQL statements are injected into input fields to manipulate backend queries.

Q93. How to prevent SQL Injection?
Use Prepared Statements (Parameterized Queries), ORMs, input validation, and stored procedures.

Q94. What is Database Backup and Recovery?
Backup: Copying database state to secondary storage.
Recovery: Restoring database to correct state following hardware/software failures using Write-Ahead Logging (WAL).

Q95. What is Write-Ahead Logging (WAL)?
Technique requiring log records describing changes to be written to stable storage before data changes are applied to disk.

Q96. What is CAP Theorem in distributed databases?
States that a distributed system can simultaneously guarantee at most two of three properties: Consistency, Availability, Partition Tolerance.

Q97. What is NoSQL Database?
Non-relational database designed for unstructured/semi-structured data, high horizontal scalability, and flexible schemas.

Q98. What are the four main types of NoSQL Databases?
Document Databases (MongoDB), Key-Value Stores (Redis), Column-Family Stores (Cassandra), and Graph Databases (Neo4j).

Q99. Compare SQL vs NoSQL databases.
SQL: Relational, structured tables, predefined schema, vertical scaling, ACID compliant.
NoSQL: Non-relational, dynamic schema, horizontal scaling (sharding), BASE compliant (Basically Available, Soft state, Eventual consistency).

Q100. Best practices for mastering DBMS for technical interviews?
Understand core concepts like Normalization and ACID properties thoroughly, write complex SQL queries involving joins and group by, practice ER diagram conversions, and master indexing and transaction locking mechanisms.

Top Companies Asking DBMS Questions:
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Oracle
- Amazon
- Microsoft
- Google

Preparation Tips:
- Practice writing nested SQL queries and joins on real datasets.
- Revise Normalization (1NF to BCNF) with hands-on decomposition examples.
- Master ACID properties and transaction isolation levels.
- Learn differences between Clustered/Non-Clustered indexing and B+ Trees.
- Understand NoSQL basics and CAP theorem.

Conclusion:
Database Management Systems form a cornerstone of software engineering and technical placement interviews. Mastering these 100 core DBMS interview questions will help you clear database rounds with confidence.

Happy Learning!
Team GotPlaced`
},
{
  id: 13,

  slug: "top-100-c-programming-interview-questions-2026",

  title: "Top 100 C Programming Interview Questions and Answers (2026)",

  description:
    "Prepare for C Programming interviews with the Top 100 C Programming Interview Questions and Answers (2026). Learn C fundamentals, Variables, Data Types, Operators, Control Statements, Functions, Arrays, Strings, Pointers, Structures, Unions, Dynamic Memory Allocation, File Handling, Recursion, Storage Classes, Preprocessor Directives, and commonly asked coding interview questions. This comprehensive guide is ideal for students, freshers, and experienced professionals preparing for technical interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, HCL, Tech Mahindra, Amazon, Microsoft, Google, Adobe, Oracle, Zoho, and other leading companies.",

  image: "/c-programming-blog.jpg",

  author: "GotPlaced Team",

  category: "C Programming",

  date: "17 July 2026",

  readTime: "24 min read",

  content: `Top 100 C Programming Interview Questions and Answers (2026)

C Programming is one of the most fundamental programming languages and serves as the foundation for learning advanced languages like C++, Java, and Python. It is widely used in system programming, embedded systems, operating systems, and software development. Due to its importance, C Programming is one of the most frequently asked subjects in placement interviews.

Whether you're preparing for campus placements, coding interviews, or software engineering roles, mastering C Programming concepts will help you build strong programming fundamentals.

Topics Covered:
- Introduction & C Fundamentals
- Variables, Data Types & Operators
- Control Statements & Loops
- Functions & Recursion
- Arrays & Strings
- Pointers & Memory Addressing
- Structures, Unions & Enums
- Dynamic Memory Allocation (DMA)
- Storage Classes & Scope
- Preprocessor Directives, File Handling & Advanced C

1. Introduction & C Fundamentals

Q1. What is C Programming?
C is a general-purpose, procedural, middle-level programming language developed by Dennis Ritchie at Bell Labs in 1972.

Q2. Why is C called a middle-level language?
Because it combines low-level memory access features (like pointers and direct register access) with high-level structured programming constructs.

Q3. What are the main features of C language?
Simple syntax, structured programming, portability, fast execution speed, extensibility, rich standard library, and pointer-based memory access.

Q4. What is a Compiler and how does C compilation work?
A compiler translates C source code into machine-executable binary code. Steps: Preprocessing -> Compilation -> Assembly -> Linking.

Q5. What is the main() function in C?
The entry point of execution for every C program. Execution starts and ends within main().

Q6. What are Keywords in C? Name a few.
Reserved words with fixed predefined meanings that cannot be used as variable names (e.g., int, return, if, static, const - 32 standard keywords in C89).

Q7. What are Identifiers in C?
User-defined names given to variables, functions, arrays, and structures, consisting of letters, digits, and underscores.

Q8. What is the difference between C and C++?
C: Procedural programming language, top-down approach, no native OOPs support.
C++: Multi-paradigm language, supports both procedural and Object-Oriented Programming (OOPs).

Q9. What is header file in C?
A file containing function declarations, macro definitions, and data types (e.g., stdio.h, stdlib.h) included using #include.

Q10. What is a Syntax Error vs Runtime Error vs Logical Error?
Syntax Error: Code violates C language grammar rules (caught at compile-time).
Runtime Error: Program crashes during execution (e.g., division by zero, segmentation fault).
Logical Error: Program executes successfully but produces incorrect output.

2. Variables, Data Types & Operators

Q11. What are primitive data types in C?
int, char, float, double, and void.

Q12. What are data type modifiers in C?
Keywords modifying storage size or range of basic data types: short, long, signed, and unsigned.

Q13. Difference between float and double?
float: Single-precision floating point (4 bytes, ~6 decimal digits precision).
double: Double-precision floating point (8 bytes, ~15 decimal digits precision).

Q14. What is a Constant in C?
An immutable value defined using const keyword or #define preprocessor directive.

Q15. Difference between #define and const in C?
#define: Preprocessor macro replacement without type checking (no memory allocated).
const: Variable qualifier evaluated by compiler with type checking (memory allocated).

Q16. What are the different types of Operators in C?
Arithmetic, Relational, Logical, Bitwise, Assignment, Increment/Decrement, Conditional (Ternary), and Special Operators (sizeof, comma).

Q17. Difference between ++i (Pre-increment) and i++ (Post-increment)?
++i: Increments variable value first, then evaluates expression.
i++: Evaluates expression with current variable value first, then increments variable.

Q18. What is the sizeof operator?
A compile-time unary operator returning size of variable or data type in bytes.

Q19. What is Typecasting in C?
Converting a variable from one data type to another. Types: Implicit (Automatic by compiler) and Explicit (Manual type casting).

Q20. What is a Bitwise Operator?
Operators performing operations at bit-level: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>).

3. Control Statements & Loops

Q21. What are control statements in C?
Statements controlling execution flow: Decision making (if-else, switch-case) and Unconditional branching (goto, break, continue).

Q22. Difference between break and continue statements?
break: Exits innermost loop or switch block immediately.
continue: Skips remaining statements in current loop iteration and proceeds to next iteration.

Q23. What is switch-case statement and its limitations?
Conditional control structure evaluating an integer or character expression against matching case labels. Limitations: Cannot compare float values or complex relational expressions.

Q24. Why is default case used in switch-case?
Executes when none of the defined case values match the switch expression.

Q25. What happens if break statement is omitted in a switch case?
Execution falls through into subsequent case statements continuously until a break or end of switch is encountered (Fall-through behavior).

Q26. What are loop control structures in C?
for loop, while loop, and do-while loop.

Q27. Difference between Entry-Controlled and Exit-Controlled Loops?
Entry-Controlled (for, while): Condition checked before loop body execution.
Exit-Controlled (do-while): Condition checked after loop body execution (guarantees execution at least once).

Q28. What is an Infinite Loop and how to create one in C?
A loop executing indefinitely due to true condition or missing update statement (e.g., while(1) or for(;;)).

Q29. What is goto statement?
An unconditional jump statement transferring execution control to a labeled location in the same function (discouraged due to spaghetti code).

4. Functions & Recursion

Q30. What is a Function in C?
A self-contained block of code executing a specific task to achieve modularity and code reusability.

Q31. What is Function Prototype / Declaration?
Tells the compiler function name, return type, and parameters before actual function call.

Q32. Difference between Actual and Formal Parameters?
Actual Parameters: Arguments passed to function during function call.
Formal Parameters: Variables defined in function header receiving incoming argument values.

Q33. Difference between Call by Value and Call by Reference?
Call by Value: Pass copy of actual arguments; changes inside function do not affect original values.
Call by Reference: Pass memory addresses of actual arguments using pointers; changes inside function affect original values.

Q34. Can a function return multiple values in C?
Directly no, but indirectly yes by returning pointers, passing memory references, or returning structures.

Q35. What is Recursion?
A programming technique where a function calls itself directly or indirectly until reaching a base condition.

Q36. What is Base Case in Recursion?
A condition stopping recursive function calls to prevent infinite execution and stack overflow error.

Q37. What is Stack Overflow in Recursion?
Occurs when recursive function calls consume all call stack memory due to missing or invalid base condition.

Q38. Difference between Direct and Indirect Recursion?
Direct: Function A calls Function A.
Indirect: Function A calls Function B, which in turn calls Function A.

5. Arrays & Strings

Q39. What is an Array in C?
A collection of fixed-size homogeneous data elements stored in contiguous memory locations.

Q40. How is array element address calculated in memory?
Address = Base Address + (Index * Size of Data Type).

Q41. What is a 2D Array (Matrix)?
An array of arrays stored in memory in Row-Major order (C standard).

Q42. What happens if array index goes out of bounds in C?
C does not perform array bound checking, leading to undefined behavior or segmentation fault.

Q43. How to pass an array to a function?
Pass array name (which decays to pointer to first element) or pass array with explicit dimension.

Q44. What is a String in C?
A null-terminated array of characters ending with '\\0'.

Q45. Why is null character '\\0' important in C strings?
Marks the end of string in memory, allowing string handling functions (strlen, strcpy) to locate string boundary.

Q46. Difference between char str[] = "Hello" and char *str = "Hello"?
char str[]: Character array created on stack; elements mutable.
char *str: Pointer to string literal in read-only memory segment; contents immutable.

Q47. Name common string handling functions in <string.h>.
strlen(), strcpy(), strcat(), strcmp(), strchr(), strstr().

Q48. Difference between gets() and fgets()?
gets(): Insecure, doesn't check buffer length (deprecated in C99, removed in C11).
fgets(): Safe function requiring maximum buffer size limit parameter.

6. Pointers & Memory Addressing

Q49. What is a Pointer in C?
A variable storing the memory address of another variable.

Q50. What are Operators used with Pointers?
Address-of Operator (&): Returns memory address of variable.
Dereference Operator (*): Accesses value stored at referenced memory address.

Q51. What is Pointer Arithmetic?
Arithmetic operations on pointers where addition/subtraction increments/decrements address by multiples of data type size.

Q52. What is a NULL Pointer?
A pointer assigned NULL value (address 0) indicating it points to no valid memory location.

Q53. What is a Void Pointer (Generic Pointer)?
A pointer variable defined as void * capable of pointing to any data type without type conversion.

Q54. What is a Wild Pointer?
An uninitialized pointer pointing to an arbitrary/random memory location.

Q55. What is a Dangling Pointer?
A pointer pointing to a memory location that has been freed/deallocated.

Q56. What is Pointer to Pointer (Double Pointer)?
A pointer variable storing address of another pointer variable (declared as int **ptr).

57. Difference between const int *ptr, int * const ptr, and const int * const ptr?
const int *ptr: Pointer to constant integer (value constant, pointer variable mutable).
int * const ptr: Constant pointer to integer (pointer variable constant, value mutable).
const int * const ptr: Constant pointer to constant integer (both constant).

Q58. What is a Function Pointer?
A pointer storing memory address of executable function code, enabling callback functions.

7. Structures, Unions & Enums

Q59. What is a Structure (struct)?
A user-defined composite data type grouping heterogeneous data elements under a single variable name.

Q60. How to access Structure members?
Using dot operator (.) for standard structure variables and arrow operator (->) for structure pointers.

Q61. What is Structure Padding and Structure Packing?
Padding: Compiler inserts alignment bytes to align structure members to memory word boundaries (improves access speed).
Packing: Disables alignment bytes (e.g., #pragma pack(1)) to minimize memory footprint.

Q62. What is a Union?
A user-defined data type where all members share the exact same memory location, taking memory equal to largest member size.

Q63. Difference between Structure and Union?
Structure: Allocates separate memory for each member; all members can be accessed simultaneously.
Union: Shares single memory location among all members; only one member can hold valid data at any given time.

Q64. What is an Enumeration (enum)?
A user-defined data type consisting of named integer constants (e.g., enum Days {SUN, MON, TUE}).

Q65. What are Bit Fields in Structures?
Structure members with explicitly defined bit length, used to save memory in memory-constrained systems.

Q66. What is typedef keyword?
Used to create alias names for existing data types to improve code readability and maintainability.

8. Dynamic Memory Allocation (DMA)

Q67. What is Dynamic Memory Allocation?
Allocating memory explicitly at runtime from Heap segment using standard library functions.

Q68. Difference between Heap and Stack Memory?
Stack: Managed automatically by compiler, fast, fixed size, stores local variables and function calls.
Heap: Managed manually by programmer, flexible size, stores dynamically allocated blocks.

Q69. Explain malloc() function.
Allocates requested bytes of uninitialized memory block on heap and returns void * pointer (contains garbage values).

Q70. Explain calloc() function.
Allocates requested blocks of memory on heap, initializes all bits to zero, and returns void * pointer.

Q71. Difference between malloc() and calloc()?
malloc(): Takes 1 argument (total bytes), leaves memory uninitialized.
calloc(): Takes 2 arguments (num elements, element size), initializes memory to zero.

Q72. Explain realloc() function.
Resizes previously allocated dynamic memory block without losing existing data when possible.

Q73. Explain free() function.
Deallocates dynamic memory block previously allocated by malloc(), calloc(), or realloc() back to heap pool.

Q74. What is Memory Leak in C?
Occurs when dynamically allocated memory on heap is no longer needed but not released using free(), exhausting memory resources.

9. Storage Classes & Scope

Q75. What is a Storage Class in C?
Defines variable scope, visibility, lifetime, and initial default value in memory.

Q76. What are the four Storage Classes in C?
auto, register, static, and extern.

Q77. Explain auto storage class.
Default storage class for local variables, allocated on stack, local scope, local lifetime, garbage initial value.

Q78. Explain register storage class.
Requests compiler to store local variable in CPU register instead of RAM for faster access (address & operator cannot be applied).

Q79. Explain static storage class.
Preserves variable value across function calls, initialized once, default initial value zero. Global static limits variable scope to declaring file.

Q80. Explain extern storage class.
Declares global variable or function defined in another source file or external scope.

Q81. Difference between Local and Global variables?
Local: Declared inside function/block, stack memory, destroyed upon function exit.
Global: Declared outside all functions, data segment memory, exists throughout program lifetime.

10. Preprocessor Directives, File Handling & Advanced C

Q82. What is Preprocessor Directive?
Commands starting with # processed by preprocessor before actual compilation (e.g., #include, #define, #ifdef).

Q83. Difference between #include <filename> and #include "filename"?
<filename>: Searches standard system header directory path.
"filename": Searches current working project directory first, then standard system directories.

Q84. What are Conditional Compilation Directives?
Directives compiling specific code blocks based on conditions (#ifdef, #ifndef, #if, #else, #endif).

Q85. What are Predefined Macros in C?
__FILE__, __LINE__, __DATE__, __TIME__, __STDC__.

Q86. What is File Handling in C?
Performing operations on secondary storage files using FILE pointer structure.

Q87. What are basic file opening modes in C?
r (read), w (write/truncate), a (append), r+ (read/write), w+ (write/read/truncate), a+ (append/read), b (binary mode).

Q88. Name common File Handling functions.
fopen(), fclose(), fgetc(), fputc(), fgets(), fputs(), fprintf(), fscanf(), fread(), fwrite(), fseek(), ftell(), rewind().

Q89. What is EOF?
End-Of-File marker returned by file input functions when reaching file end or encountering read error.

Q90. Difference between Text File and Binary File?
Text File: Stores data as plain human-readable characters (ASCII/UTF).
Binary File: Stores raw data as exact bytes as held in memory.

Q91. What is fseek() and ftell()?
fseek(): Moves file position pointer to specified offset.
ftell(): Returns current position of file pointer in bytes from file beginning.

Q92. What is volatile keyword in C?
Informs compiler that variable value can be modified externally (e.g., hardware interrupt) to prevent unwanted compiler optimization.

Q93. What is Command Line Arguments in C?
Arguments passed to main() function from command line interface: main(int argc, char *argv[]).

Q94. What is argc and argv?
argc: Integer storing count of command line arguments.
argv: Array of string pointers holding actual command line argument strings.

Q95. What is Segmentation Fault and common causes?
A runtime memory access violation caused by dereferencing NULL/dangling pointers, out-of-bounds array access, or stack overflow.

Q96. How to swap two numbers without using a third variable?
Using Arithmetic (+ and -) or Bitwise XOR (a = a ^ b; b = a ^ b; a = a ^ b;).

Q97. How to reverse a string in-place in C?
Use two-pointer technique swapping characters at start and end indices moving inward until mid point.

Q98. How to detect palindrome string in C?
Compare characters from start and end moving inward; if all match until middle, string is palindrome.

Q99. What is Dangling Else problem?
Ambiguity occurring in nested if-else statements without explicit braces; solved by binding else to nearest preceding un-elsed if.

Q100. Best practices for writing clean C code?
Initialize pointers properly, free dynamic memory blocks, check function return status (e.g., malloc null check), use meaningful names, format code cleanly, and handle file pointers carefully.

Top Companies Asking C Programming Questions:
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- HCL
- Tech Mahindra
- Amazon
- Microsoft

Preparation Tips:
- Master pointer concepts, pointer arithmetic, and double pointers.
- Understand memory layout (Stack, Heap, Data Segment, Code Segment).
- Practice coding common array, string, and linked list problems.
- Learn dynamic memory allocation functions and check for memory leaks.
- Revise macro expansions and storage class scopes thoroughly.

Conclusion:
C Programming remains an essential foundation for computer science fundamentals, system design, and placement interviews. Mastering these 100 core C questions will significantly strengthen your coding confidence.

Happy Learning!
Team GotPlaced`
},
{
  id: 14,

  slug: "top-100-cpp-interview-questions-2026",

  title: "Top 100 C++ Interview Questions and Answers (2026)",

  description:
    "Prepare for C++ interviews with the Top 100 C++ Interview Questions and Answers (2026). Learn C++ fundamentals, Object-Oriented Programming (OOPs), Classes, Objects, Constructors, Destructors, Inheritance, Polymorphism, Abstraction, Encapsulation, Templates, STL, Exception Handling, File Handling, Memory Management, Virtual Functions, Pointers, References, and frequently asked C++ coding interview questions. This comprehensive guide is perfect for students, freshers, and experienced professionals preparing for technical interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, HCL, Tech Mahindra, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/cpp-blog.jpg",

  author: "GotPlaced Team",

  category: "C++",

  date: "17 July 2026",

  readTime: "25 min read",

  content: `Top 100 C++ Interview Questions and Answers (2026)

C++ is one of the most popular programming languages used in software development, competitive programming, game development, operating systems, embedded systems, and high-performance applications. It is widely asked in technical interviews because it tests a candidate's understanding of programming fundamentals, object-oriented programming, memory management, and problem-solving skills.

Whether you're preparing for campus placements, coding interviews, software engineering roles, or product-based company interviews, mastering C++ concepts is essential.

Topics Covered:
- C++ Basics & Fundamentals
- Object-Oriented Programming (OOPs)
- Classes, Objects & Access Specifiers
- Constructors & Destructors
- Inheritance & Polymorphism
- Virtual Functions & Abstraction
- Pointers, References & Memory Management
- Templates & Generic Programming
- Standard Template Library (STL)
- Exception Handling, Smart Pointers & Modern C++

1. C++ Basics & Fundamentals

Q1. What is C++?
C++ is a general-purpose, object-oriented, compiled programming language developed by Bjarne Stroustrup in 1979 at Bell Labs as an extension of the C language.

Q2. What are the key features of C++?
Fast performance, Object-Oriented, Platform-independent (portable), supports Templates, rich Standard Template Library (STL), Exception Handling, and low-level memory access via Pointers.

Q3. What is the difference between C and C++?
C is a procedural programming language with a top-down approach. C++ is a multi-paradigm language supporting both procedural and Object-Oriented Programming with a bottom-up approach.

Q4. What are namespaces in C++?
Namespaces prevent name collisions by grouping global identifiers (variables, functions, classes) under a distinct scope (e.g., using namespace std;).

Q5. What is cin, cout, and cerr in C++?
cout: Standard output stream object (instance of ostream).
cin: Standard input stream object (instance of istream).
cerr: Standard unbuffered error output stream object.

Q6. Difference between endl and '\n'?
endl inserts a newline character and flushes the output stream buffer (slower). '\n' simply inserts a newline character without flushing (faster).

Q7. What is Function Overloading?
Defining multiple functions in the same scope with the exact same name but different parameter signatures (type, number, or order of arguments).

Q8. What are Default Arguments in C++ functions?
Parameters provided with a default value in the function declaration that are used if no argument is passed during the function call.

Q9. What is Inline Function in C++?
A function keyword request (inline) asking the compiler to replace function calls directly with the function body to eliminate function call overhead.

Q10. What is Scope Resolution Operator (::)?
Used to access global variables when local variables have the same name, or to define member functions outside class scope.

2. Object-Oriented Programming (OOPs)

Q11. What is OOPs in C++?
Object-Oriented Programming structures programs around objects containing data fields (attributes) and member functions (methods).

Q12. What are the four pillars of OOPs in C++?
Encapsulation, Inheritance, Polymorphism, and Abstraction.

Q13. What is Encapsulation?
Wrapping variables (data) and functions (methods) into a single unit (class) while restricting direct access using access specifiers.

Q14. What is Abstraction?
Hiding complex internal implementation details and exposing only essential features through abstract classes and interfaces.

Q15. What is Inheritance?
A mechanism where a derived class inherits properties and behaviors from a base class.

Q16. What is Polymorphism?
The ability of a function or operator to take on multiple forms depending on the object context.

3. Classes, Objects & Access Specifiers

Q17. What is a Class and an Object in C++?
Class: A user-defined blueprint containing data members and member functions.
Object: A dynamic instance of a class that consumes physical memory.

Q18. What are Access Specifiers in C++?
Keywords controlling member accessibility:
private: Accessible only within the same class.
public: Accessible from anywhere in the program.
protected: Accessible within the class and its derived classes.

Q19. What is the default access specifier in C++ Class vs Struct?
Class: Default access specifier is private.
Struct: Default access specifier is public.

Q20. What is a Friend Function in C++?
A non-member function declared with friend keyword inside a class that is granted private and protected access.

Q21. What is a Friend Class?
A class declared as friend inside another class, allowing all its member functions access to the private and protected members of that class.

Q22. What is the this pointer in C++?
An implicit constant pointer pointing to the current object instance calling the member function.

Q23. What is Static Data Member and Static Member Function?
Static Data Member: Shared across all instances of a class (allocated once in static memory).
Static Member Function: Can be called without creating an object and accesses only static members.

Q24. What is a Const Member Function?
A member function declared with const keyword at the end that guarantees it will not modify any data members of the class.

4. Constructors & Destructors

Q25. What is a Constructor in C++?
A special member function with the same name as the class that automatically executes upon object instantiation to initialize members.

Q26. What are the different types of Constructors?
Default Constructor, Parameterized Constructor, and Copy Constructor.

Q27. What is a Copy Constructor?
A constructor that initializes a new object using another existing object of the same class (Syntax: ClassName(const ClassName &obj)).

Q28. What is Copy Initialization vs Direct Initialization?
Direct Initialization: ClassName obj(arg);
Copy Initialization: ClassName obj = arg;

Q29. What is Explicit Constructor?
A constructor declared with explicit keyword to prevent implicit type conversions during initialization.

Q30. What is a Destructor in C++?
A special member function (~ClassName()) automatically executed when an object goes out of scope or is deleted to release memory resources.

Q31. Can a Constructor or Destructor return a value?
No, constructors and destructors do not have return types, not even void.

Q32. Can a Class have multiple Constructors?
Yes, constructor overloading allows defining multiple constructors with different parameter signatures.

Q33. Can a Class have multiple Destructors?
No, a class can have only one destructor with no parameters.

Q34. What is Shallow Copy vs Deep Copy?
Shallow Copy: Copies data values directly (copies pointer addresses, causing dangling pointer issues during deletion).
Deep Copy: Allocates separate memory for dynamic fields and duplicates values independently.

5. Inheritance & Polymorphism

Q35. What are the different types of Inheritance in C++?
Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance.

Q36. What is Multiple Inheritance and the Diamond Problem in C++?
Multiple Inheritance occurs when a derived class inherits from two base classes. The Diamond Problem arises when both base classes inherit from a common grandparent class, creating duplicate instances.

Q37. How is the Diamond Problem solved in C++?
Using Virtual Inheritance (e.g., class Derived : virtual public Base).

Q38. What is Compile-Time vs Runtime Polymorphism?
Compile-Time (Static): Resolved during compilation (Function Overloading, Operator Overloading).
Runtime (Dynamic): Resolved at execution time (Virtual Functions, Method Overriding).

Q39. What is Operator Overloading?
Giving custom redefined behavior to standard C++ operators (+, -, *, <<) when used with user-defined class objects.

Q40. Which operators cannot be overloaded in C++?
Scope resolution (::), Sizeof (sizeof), Member selection (.), Member pointer selection (.*), and Ternary operator (?:).

Q41. What is Method Overriding?
A derived class re-implementing a member function already declared in its base class with the exact same signature.

6. Virtual Functions & Abstraction

Q42. What is a Virtual Function?
A member function declared with virtual keyword in a base class that is overridden in a derived class to enable runtime polymorphism.

Q43. What is a Pure Virtual Function?
A virtual function assigned = 0 with no implementation body in the base class (e.g., virtual void draw() = 0;).

Q44. What is an Abstract Class in C++?
A class containing at least one pure virtual function. Abstract classes cannot be instantiated.

Q45. What is a Interface in C++?
An abstract class containing only pure virtual functions and no data members.

Q46. What is vtable (Virtual Table) and vptr (Virtual Pointer)?
vtable: A compiler-generated static table for each class containing virtual function pointers.
vptr: A hidden pointer added to every object pointing to its class vtable for dynamic dispatch.

Q47. What is a Virtual Destructor and why is it necessary?
A destructor declared with virtual keyword in a base class. It ensures proper call order of derived and base destructors when deleting derived objects via base pointers.

Q48. Can a Constructor be Virtual in C++?
No, constructor calls cannot be virtual because object memory setup and runtime type are incomplete during construction.

7. Pointers, References & Memory Management

Q49. What is the difference between a Pointer and a Reference?
Pointer: Stores memory address, can be NULL, can be reassigned.
Reference: Alias for an existing variable, cannot be NULL, must be initialized, cannot be reassigned.

Q50. What are new and delete operators in C++?
new: Dynamically allocates heap memory and calls the constructor.
delete: Deallocates dynamically allocated memory and calls the destructor.

Q51. Difference between malloc()/free() and new/delete?
malloc()/free(): C standard library functions, allocate raw bytes, do not call constructors/destructors.
new/delete: C++ operators, allocate typed memory, automatically call constructors and destructors.

Q52. What happens if delete is called on a NULL pointer?
It is completely safe and does nothing.

Q53. Difference between delete and delete[]?
delete: Used to deallocate a single dynamically allocated object.
delete[]: Used to deallocate a dynamically allocated array of objects.

Q54. What is a Memory Leak in C++?
Occurs when dynamically allocated heap memory using new is not freed using delete, causing memory exhaustion.

Q55. What is a Dangling Pointer?
A pointer pointing to a memory location that has been deallocated or deleted.

Q56. What is a Null Pointer vs Wild Pointer?
Null Pointer: Explicitly assigned NULL or nullptr (points to address 0).
Wild Pointer: Uninitialized pointer pointing to an arbitrary memory address.

Q57. What is nullptr in C++11?
A strongly typed keyword representing a null pointer literal, replacing the ambiguous NULL macro/0 integer.

8. Templates & Generic Programming

Q58. What are Templates in C++?
A feature enabling generic programming by allowing functions and classes to operate with generic data types.

Q59. What is Function Template vs Class Template?
Function Template: Generates generic functions for different data types.
Class Template: Generates generic classes (e.g., template <typename T> class Stack).

Q60. What is Template Specialization?
Providing a customized implementation of a generic template for a specific data type.

Q61. What is the difference between typename and class in template declarations?
There is no practical difference in template parameter declarations (e.g., template <class T> vs template <typename T>).

9. Standard Template Library (STL)

Q62. What is the Standard Template Library (STL)?
A collection of C++ template classes providing standard data structures and algorithms (Containers, Iterators, Algorithms, Functors).

Q63. What are the main types of Containers in STL?
Sequence Containers (vector, list, deque), Associative Containers (set, map), Unordered Associative Containers (unordered_set, unordered_map), and Container Adapters (stack, queue, priority_queue).

Q64. Difference between std::vector and std::list?
std::vector: Dynamic array, fast random access in O(1), slow insertions in middle O(N).
std::list: Doubly linked list, slow random access O(N), fast insertions/deletions O(1).

Q65. Difference between std::map and std::unordered_map?
std::map: Implemented as Red-Black Tree, sorted keys, O(log N) lookup time.
std::unordered_map: Implemented as Hash Table, unsorted keys, O(1) average lookup time.

Q66. What is std::set vs std::multiset?
std::set: Stores unique sorted elements.
std::multiset: Stores duplicate sorted elements.

Q67. What is an Iterator in C++ STL?
A pointer-like object used to traverse through elements of an STL container.

Q68. Name the categories of Iterators in C++.
Input, Output, Forward, Bidirectional, and Random Access Iterators.

Q69. Difference between iterator and const_iterator?
iterator: Allows reading and modifying elements.
const_iterator: Allows reading elements only (read-only traversal).

Q70. What is std::pair and std::tuple?
std::pair: Stores two heterogeneous values together.
std::tuple: Stores a fixed-size collection of heterogeneous values (3 or more).

Q71. What is std::priority_queue?
A container adapter providing constant time lookup of the largest (Max-Heap by default) or smallest element.

Q72. What is std::sort and its time complexity?
An algorithm using IntroSort (combination of QuickSort, HeapSort, and InsertionSort) with O(N log N) time complexity.

10. Exception Handling, Smart Pointers & Modern C++

Q73. What is Exception Handling in C++?
A mechanism to handle runtime errors using try, catch, and throw keywords.

Q74. What is the try, catch, and throw block?
try: Contains code that may generate an exception.
throw: Explicitly signals an error/exception.
catch: Handles the thrown exception.

Q75. What happens if an exception is thrown but not caught?
The standard library calls std::terminate(), which aborts the program execution immediately.

Q76. What is RAII (Resource Acquisition Is Initialization)?
A C++ programming idiom where resource lifespan (memory, file handles, locks) is tied to object lifespan using constructors and destructors.

Q77. What are Smart Pointers in C++11?
Objects wrapping raw pointers to manage dynamic memory automatically using RAII, preventing memory leaks.

Q78. What is std::unique_ptr?
A smart pointer managing an exclusive owned object; cannot be copied, only moved.

Q79. What is std::shared_ptr?
A smart pointer managing a shared owned object using reference counting; destroyed when reference count reaches zero.

80. What is std::weak_ptr?
A non-owning smart pointer referencing an object managed by std::shared_ptr without increasing its reference count (prevents circular dependencies).

Q81. What is move semantics and rvalue reference (&&)?
Introduced in C++11 to avoid expensive deep copies by moving resources from temporary objects (rvalues) instead of copying.

Q82. What is std::move?
A standard function casting an lvalue expression into an rvalue reference to enable move semantics.

Q83. What is Lambda Expression in C++11?
An anonymous inline function syntax: [capture](parameters) -> return_type { body }.

Q84. What is auto keyword in C++11?
Enables automatic variable type deduction by the compiler at compile time based on initialization value.

Q85. What is decltype keyword?
Inspects and yields the declared type of an entity or expression at compile time.

Q86. What is constexpr keyword?
Specifies that a variable or function value can be evaluated at compile time rather than runtime.

Q87. What is std::thread in C++11?
A standard class providing multi-threading support to execute tasks concurrently.

Q88. What is std::mutex and std::lock_guard?
std::mutex: Mutual exclusion synchronization primitive to protect shared resources.
std::lock_guard: RAII wrapper managing a mutex lock automatically within a scope.

Q89. What is std::optional (C++17)?
A wrapper class representing a value that may or may not be present (replaces NULL/sentinel checks).

Q90. What is std::variant (C++17)?
A type-safe union that holds a value of one of several specified types.

Q91. What is std::vector::reserve() vs std::vector::resize()?
reserve(): Allocates memory capacity without changing vector size.
resize(): Changes vector size, initializing new elements if expanded.

Q92. What is Object Slicing in C++?
Occurs when a derived class object is assigned to a base class object by value, stripping away derived members.

Q93. How to prevent Object Slicing?
Pass objects by reference or pointer rather than by value.

Q94. What is RTTI (Run-Time Type Information)?
A mechanism providing object data type information at runtime using dynamic_cast and typeid operators.

Q95. Difference between static_cast and dynamic_cast?
static_cast: Performs compile-time conversion between compatible types.
dynamic_cast: Performs runtime type checking for polymorphic class pointer/reference conversions.

Q96. What is reinterpret_cast?
A low-level typecast reinterpreting underlying bit patterns directly between incompatible pointer types.

Q97. What is const_cast?
A cast used to add or remove the const modifier from a variable.

Q98. How to achieve fast I/O in C++ for competitive programming?
Include std::ios_base::sync_with_stdio(false); cin.tie(NULL); at the beginning of main().

Q99. What is Diamond Problem in Multiple Inheritance and how is it resolved?
Ambiguity occurring when two parent classes inherit from a common base class, resolved using virtual public inheritance.

Q100. Best practices for writing high-performance, clean C++ code?
Use RAII and smart pointers over raw pointers, pass large parameters by const reference, prefer pre-increment (++i), leverage STL containers, handle exceptions properly, and follow modern C++ standards (C++11/14/17/20).

Top Companies Asking C++ Questions:
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- Capgemini
- Deloitte
- IBM
- Amazon
- Microsoft
- Google
- Adobe
- Oracle
- Flipkart
- Zoho

Preparation Tips:
- Master core OOPs concepts with clear C++ code examples.
- Gain hands-on practice with STL containers (vector, map, set) and algorithms.
- Thoroughly understand pointers, references, and smart pointers.
- Learn memory management concepts (Heap, Stack, RAII, delete[]).
- Practice solving data structure and algorithm problems in C++.

Conclusion:
C++ is a powerful language for software development, system programming, and coding interviews. Mastering these top 100 C++ interview questions will help you build strong fundamentals and clear technical rounds with confidence.

Happy Learning!
Team GotPlaced`
},
{
  id: 15,

  slug: "top-100-html-css-javascript-interview-questions-2026",

  title: "Top 100 HTML, CSS & JavaScript Interview Questions and Answers (2026)",

  description:
    "Prepare for Frontend Developer interviews with the Top 100 HTML, CSS & JavaScript Interview Questions and Answers (2026). Learn HTML5, Semantic Tags, Forms, CSS Flexbox, Grid, Responsive Design, Media Queries, Animations, JavaScript ES6+, DOM Manipulation, Events, Closures, Hoisting, Promises, Async/Await, Event Loop, Local Storage, APIs, and frequently asked frontend interview questions. This comprehensive guide is perfect for students, freshers, and experienced professionals preparing for interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Zoho, Flipkart, and other leading product and service-based companies.",

  image: "/html-css-js-blog.jpg",

  author: "GotPlaced Team",

  category: "Frontend",

  date: "17 July 2026",

  readTime: "28 min read",

  content: `
# Top 100 HTML, CSS & JavaScript Interview Questions and Answers (2026)

HTML, CSS, and JavaScript form the foundation of modern web development. Every Frontend Developer interview includes questions on these three technologies. Whether you're preparing for campus placements, internships, or product-based companies, mastering these concepts is essential.

------------------------------------------------

Topics Covered

• HTML5

• Semantic Tags

• Forms

• CSS Selectors

• Flexbox

• CSS Grid

• Responsive Design

• Media Queries

• CSS Animations

• JavaScript Basics

• ES6 Features

• DOM Manipulation

• Event Handling

• Hoisting

• Closures

• Promises

• Async/Await

• Fetch API

• Local Storage

------------------------------------------------

Q1. What is HTML?

Answer:
HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages.

------------------------------------------------

Q2. What is the difference between HTML and HTML5?

Answer:

• HTML5 introduced semantic tags.

• Supports audio & video.

• Local Storage support.

• Better APIs.

------------------------------------------------

Q3. What is CSS?

Answer:
CSS (Cascading Style Sheets) is used to style and design HTML elements.

------------------------------------------------

Q4. What is Flexbox?

Answer:
Flexbox is a one-dimensional CSS layout model used for aligning and distributing elements efficiently.

------------------------------------------------

Q5. What is CSS Grid?

Answer:
CSS Grid is a two-dimensional layout system used for building responsive web layouts.

------------------------------------------------

Q6. What is JavaScript?

Answer:
JavaScript is a scripting language used to make web pages interactive.

------------------------------------------------

Q7. What is DOM?

Answer:
The Document Object Model (DOM) is a programming interface that represents HTML elements as objects.

------------------------------------------------

Q8. What is Hoisting?

Answer:
Hoisting is JavaScript's default behavior of moving declarations to the top before execution.

------------------------------------------------

Q9. What are Promises?

Answer:
Promises handle asynchronous operations and have three states: Pending, Fulfilled, and Rejected.

------------------------------------------------

Q10. What is Async/Await?

Answer:
Async/Await provides a cleaner way to write asynchronous JavaScript code.

------------------------------------------------

Top Companies

• TCS

• Infosys

• Wipro

• Accenture

• Cognizant

• Capgemini

• Deloitte

• IBM

• Amazon

• Microsoft

• Google

------------------------------------------------

Preparation Tips

✔ Practice HTML daily.

✔ Build responsive websites.

✔ Learn Flexbox & Grid.

✔ Master JavaScript ES6.

✔ Practice DOM manipulation.

✔ Build frontend projects.

✔ Revise interview questions regularly.

------------------------------------------------

Conclusion

HTML, CSS, and JavaScript are essential skills for every Frontend Developer. Mastering these technologies and building real-world projects will significantly improve your chances of cracking frontend interviews.

Happy Learning!

Team GotPlaced 🚀
`
},
{
  id: 16,

  slug: "top-100-nodejs-interview-questions-2026",

  title: "Top 100 Node.js Interview Questions and Answers (2026)",

  description:
    "Prepare for Node.js interviews with the Top 100 Node.js Interview Questions and Answers (2026). Learn Node.js Fundamentals, Event Loop, Modules, NPM, Express.js, Middleware, REST APIs, File System, Streams, Buffers, Event Emitters, Authentication, JWT, Error Handling, Async Programming, Promises, Async/Await, MongoDB Integration, Performance Optimization, and commonly asked Node.js interview questions. This complete guide is perfect for students, freshers, and experienced developers preparing for backend and full stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading companies.",

  image: "/nodejs-blog.jpg",

  author: "GotPlaced Team",

  category: "Node.js",

  date: "17 July 2026",

  readTime: "26 min read",

  content: `Top 100 Node.js Interview Questions and Answers (2026)

Node.js is one of the most popular JavaScript runtime environments used for building fast, scalable, and high-performance backend applications. It is widely used for REST APIs, real-time applications, microservices, and full-stack development.

Whether you're preparing for internships, campus placements, backend developer roles, or full-stack interviews, mastering Node.js concepts is essential.

Topics Covered:
- Node.js Architecture & V8 Engine
- Event Loop, Asynchronous I/O & Thread Pool
- Core Modules, NPM & Package Management
- Buffers, Streams & Event Emitters
- File System (fs) & Path Management
- Express.js, Routing & Middleware
- REST API Design & HTTP Operations
- Authentication, Security & JWT
- Database Integration (MongoDB & Mongoose)
- Error Handling, Performance Optimization & Testing

1. Node.js Architecture & V8 Engine

Q1. What is Node.js?
Node.js is an open-source, cross-platform, single-threaded runtime environment built on Google Chrome's V8 engine that executes JavaScript code outside web browsers.

Q2. Is Node.js single-threaded or multi-threaded?
Node.js operates on a single-threaded event loop for executing JavaScript code, but uses a multi-threaded C++ libuv thread pool under the hood for heavy I/O operations.

Q3. What is Google Chrome's V8 Engine?
A high-performance open-source JavaScript and WebAssembly engine developed in C++ that compiles JavaScript directly into native machine code.

Q4. What is libuv in Node.js?
A multi-platform C library that provides Node.js with asynchronous I/O capabilities, event loop execution, and thread pool management.

Q5. What is the difference between Node.js and Web Browsers?
Browsers manipulate DOM/UI and handle client events, whereas Node.js interacts with the operating system, handles file systems, network sockets, and database connections.

Q6. What is REPL in Node.js?
Read-Eval-Print-Loop - an interactive computer environment taking single user inputs, evaluating them, and returning results (launched by typing node in terminal).

Q7. Why is Node.js called Non-Blocking?
Node.js initiates I/O operations asynchronously and continues executing subsequent code without waiting for operations to finish.

Q8. What are common use cases for Node.js?
Real-time chat apps, streaming applications, microservices, REST APIs, single-page application backends, and command-line tools.

Q9. Where should Node.js NOT be used?
For CPU-heavy intensive computations (e.g., video encoding, heavy image processing) because long computations block the single thread.

Q10. What is process object in Node.js?
A global object providing information and control over the current running Node.js process (e.g., process.env, process.exit(), process.argv).

2. Event Loop, Asynchronous I/O & Thread Pool

Q11. What is the Event Loop in Node.js?
An infinite loop running inside libuv that monitors, offloads, and executes asynchronous callbacks when the call stack becomes empty.

Q12. What are the main phases of Node.js Event Loop?
1. Timers (setTimeout, setInterval).
2. Pending Callbacks (I/O callbacks).
3. Idle, Prepare (internal).
4. Poll (retrieve new I/O events).
5. Check (setImmediate).
6. Close Callbacks (socket.on('close')).

Q13. What is process.nextTick() vs setImmediate()?
process.nextTick(): Fires immediately after the current operation finishes before the event loop continues to next phase (highest microtask priority).
setImmediate(): Fires during the Check phase of the event loop.

Q14. Difference between Microtask Queue and Macrotask Queue in Node.js?
Microtask Queue: Processed immediately after current execution (Promises, process.nextTick).
Macrotask Queue: Processed in specific event loop phases (setTimeout, setInterval, setImmediate).

Q15. What is libuv Thread Pool size and how to change it?
Default size is 4 threads, used for file I/O, crypto, and zlib tasks. Can be changed using process.env.UV_THREADPOOL_SIZE = N.

Q16. What is Callback Hell and how to avoid it?
Pyramid of nested callbacks making code unreadable. Solved using Promises, Async/Await, or modularizing functions.

Q17. What is Non-Blocking I/O vs Asynchronous I/O?
Non-Blocking I/O: System returns immediately if data isn't ready.
Asynchronous I/O: Requests operation and notifies runtime via callback/promise when complete.

Q18. What happens when an unhandled exception occurs in Node.js?
The application process crashes by default unless handled using process.on('uncaughtException', listener).

3. Core Modules, NPM & Package Management

Q19. What are Core Modules in Node.js?
Built-in modules shipped with Node.js requiring no external installation (e.g., fs, http, path, os, events, stream).

Q20. Difference between CommonJS (CJS) and ES Modules (ESM)?
CommonJS: Uses require() and module.exports (synchronous, default in legacy Node).
ES Modules: Uses import and export statements (asynchronous static loading).

Q21. What is NPM?
Node Package Manager - default CLI tool and registry used to install, update, and manage third-party open-source packages.

Q22. Difference between package.json and package-lock.json?
package.json: Lists project dependencies with semantic version ranges (^, ~).
package-lock.json: Locks exact installed dependency versions to ensure consistent builds across environments.

Q23. What is the difference between dependencies and devDependencies?
dependencies: Packages required at runtime in production (e.g., express, mongoose).
devDependencies: Packages required strictly for development and testing (e.g., nodemon, jest).

Q24. What do Semantic Versioning symbols ^ and ~ mean in package.json?
^ (Caret): Allows updates to minor and patch versions without breaking changes (e.g., ^1.2.3 -> 1.x.x).
~ (Tilde): Allows updates strictly to patch releases (e.g., ~1.2.3 -> 1.2.x).

Q25. What is NPX?
Node Package Execute - CLI tool bundled with NPM used to execute Node packages directly without global installation (e.g., npx create-react-app).

Q26. What is Global Installation vs Local Installation in NPM?
Local (-S or -D): Package installed in local node_modules directory for current project.
Global (-g): Package installed system-wide for CLI command use across all projects.

4. Buffers, Streams & Event Emitters

Q27. What is a Buffer in Node.js?
A fixed-size chunk of memory allocated outside the V8 heap used to process raw binary data directly.

Q28. What are Streams in Node.js?
Collections of data processed sequentially in chunks without loading the entire dataset into memory.

Q29. What are the four main types of Streams?
1. Readable (e.g., fs.createReadStream).
2. Writable (e.g., fs.createWriteStream).
3. Duplex (Readable & Writable, e.g., net.Socket).
4. Transform (Duplex stream modifying data as it reads, e.g., zlib.createGzip).

Q30. What is stream.pipe() method?
Connects a Readable stream to a Writable stream, automatically managing data flow and backpressure.

Q31. What is Backpressure in Node.js Streams?
A condition where data read speed exceeds destination write speed; handled by buffering and pausing reading until buffer clears.

Q32. What is EventEmitter class in Node.js?
A core module class (events) enabling objects to publish and listen for custom asynchronous events using .on() and .emit().

Q33. What is eventEmitter.on() vs eventEmitter.once()?
.on(): Registers a listener executing every time the event fires.
.once(): Registers a listener executing only once for the first event occurrence.

Q34. How to prevent memory leaks in EventEmitters?
Remove listeners using removeListener() or set maximum listeners using emitter.setMaxListeners(n).

5. File System (fs) & Path Management

Q35. What is the fs module?
A built-in module providing file system I/O operations (file reading, writing, appending, deleting).

Q36. Difference between fs.readFile() and fs.readFileSync()?
fs.readFile(): Asynchronous non-blocking file read passing data to a callback.
fs.readFileSync(): Synchronous blocking file read halting thread execution until completion.

Q37. How to stream a large file in Node.js?
Using fs.createReadStream('largefile.txt').pipe(res) to stream chunks to HTTP response.

Q38. What is the path module in Node.js?
A built-in module providing utilities for joining, resolving, and normalizing file and directory paths.

Q39. Difference between path.join() and path.resolve()?
path.join(): Concatenates path segments together using platform delimiter.
path.resolve(): Resolves path segments into an absolute path starting from current working directory.

Q40. What are __dirname and __filename variables?
__dirname: Absolute path of directory containing current executing file.
__filename: Absolute path including filename of current executing file.

6. Express.js, Routing & Middleware

Q41. What is Express.js?
A minimal, flexible, fast web application framework for Node.js providing robust routing and middleware capabilities.

Q42. What is Middleware in Express.js?
Functions that have access to Request (req), Response (res), and Next (next) objects in the HTTP cycle to perform tasks, modify requests, or end responses.

Q43. What are different types of Middleware in Express?
Application-level, Router-level, Built-in (express.json), Error-handling, and Third-party (cors, morgan).

Q44. What is express.json() middleware?
A built-in middleware parsing incoming JSON request payloads into req.body.

Q45. What is Express Router?
An isolated instance of middleware and routes used to modularize application routing into separate files.

Q46. How does error-handling middleware work in Express?
Defined with four parameters (err, req, res, next) and invoked automatically when next(err) is called.

Q47. What is the role of next() function in Express middleware?
Passes execution control to the next middleware function in the application stack.

Q48. What is CORS and how to enable it in Express?
Cross-Origin Resource Sharing - security header mechanism. Enabled in Express using third-party cors middleware app.use(cors()).

Q49. How to serve static files in Express?
Using built-in middleware express.static (e.g., app.use(express.static('public'))).

Q50. How to handle 404 Route Not Found in Express?
Add a catch-all middleware function at the absolute bottom of all route definitions.

7. REST API Design & HTTP Operations

Q51. What is a REST API?
Representational State Transfer - architectural style for designing networked applications using standard HTTP methods and stateless communication.

Q52. What are primary HTTP methods used in REST APIs?
GET (read), POST (create), PUT (update whole resource), PATCH (partial update), DELETE (remove).

Q53. Difference between req.params, req.query, and req.body?
req.params: Route URL path variables (/users/:id -> req.params.id).
req.query: URL query string parameters (/users?age=20 -> req.query.age).
req.body: Data payload submitted in HTTP request body.

Q54. What are common HTTP Status Codes?
200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error).

Q55. What is Idempotency in HTTP methods?
An HTTP method is idempotent if making identical multiple requests produces the exact same server state as a single request (e.g., GET, PUT, DELETE are idempotent; POST is not).

Q56. What is API Rate Limiting and why is it used?
Limiting client request counts per timeframe to prevent DoS attacks and resource overuse (e.g., express-rate-limit).

Q57. What is API Versioning?
Managing API changes without breaking existing client applications (e.g., /api/v1/users vs /api/v2/users).

Q58. How to handle File Uploads in Express?
Using middleware like multer to process multipart/form-data requests.

8. Authentication, Security & JWT

Q59. What is JWT (JSON Web Token)?
An open standard (RFC 7519) defining a compact, URL-safe token format for securely transmitting information between parties.

Q60. What are the three parts of a JWT?
1. Header (algorithm & token type).
2. Payload (claims/user data).
3. Signature (verifies integrity using secret key).

Q61. Difference between Authentication and Authorization?
Authentication: Verifying WHO a user is (login).
Authorization: Verifying WHAT permissions a user has (access rights).

Q62. Where should JWT be stored on client-side?
HTTP-only, Secure, SameSite cookies (protects against XSS attacks) rather than LocalStorage.

Q63. What is Access Token vs Refresh Token?
Access Token: Short-lived token used to authenticate API requests.
Refresh Token: Long-lived token used to issue new access tokens when expired.

Q64. How to hash passwords securely in Node.js?
Using bcrypt or argon2 libraries with random salt rounds before storing in database.

Q65. What is Helmet.js in Express?
A security middleware setting various HTTP response headers to protect against common web vulnerabilities (XSS, clickjacking).

Q66. How to prevent SQL/NoSQL Injection in Node.js?
Use parameterized queries, ORMs (Sequelize, Prisma), or ODMs (Mongoose) with strict schema validation.

Q67. What is Environment Variable management in Node.js?
Storing secrets and configurations outside source code using .env files loaded via dotenv package.

9. Database Integration (MongoDB & Mongoose)

Q68. How to connect Node.js with MongoDB?
Using official mongodb driver or Mongoose ODM library via mongoose.connect(URI).

Q69. What is Mongoose in Node.js?
An Object Data Modeling (ODM) library for MongoDB providing schema validation, middleware hooks, and query building.

Q70. What is a Mongoose Schema vs Model?
Schema: Defines structure, fields, defaults, and validations of a MongoDB collection document.
Model: Wrapper created from schema providing interface to query, insert, update, delete documents.

Q71. What are Mongoose Middleware (Hooks)?
Functions executed during document lifecycle events (e.g., pre('save'), post('remove')).

Q72. What is Population in Mongoose?
Replacing referenced object IDs in a document with actual referenced documents from another collection (.populate()).

Q73. What is Connection Pooling in Node.js databases?
Reusing a pool of open database connections rather than establishing new connections per HTTP request.

10. Error Handling, Performance Optimization & Testing

Q74. How to handle asynchronous errors in Express?
Pass errors to next(err) in promises or wrap routes using express-async-errors package / custom try-catch wrappers.

Q75. What is Node.js Cluster Module?
A built-in module enabling creation of child processes (workers) sharing server ports to leverage multi-core CPUs.

Q76. What is PM2 in Node.js?
A production process manager providing load balancing, auto-restarts, zero-downtime reloads, and performance monitoring.

Q77. What is Memory Leak in Node.js and how to detect it?
Unreferenced objects retained in memory preventing Garbage Collection. Detected using heap dumps, Chrome DevTools, or clinic.js.

Q78. What is Worker Threads module in Node.js?
Module enabling parallel execution of CPU-bound JavaScript tasks on background threads without blocking main event loop.

Q79. What is Garbage Collection in V8 Engine?
Automated memory management identifying unreferenced objects using Generational Mark-Sweep-Compact algorithms.

Q80. Difference between Cluster and Worker Threads?
Cluster: Spawns independent Node processes with separate memory spaces (best for scaling HTTP servers).
Worker Threads: Runs multiple JS threads within same process sharing memory (best for CPU-heavy tasks).

Q81. How to scale a Node.js Application?
Horizontal scaling (load balancing across instances/containers), vertical scaling (clustering), caching (Redis), and database indexing.

Q82. What is Redis and why is it used with Node.js?
An in-memory data store used for high-speed caching, session management, and pub/sub messaging.

Q83. How to implement Caching in Node.js?
Store database query results in Redis; check cache before querying database on subsequent requests.

Q84. What is Microservices Architecture in Node.js?
Breaking a monolithic application into small, independent, specialized services communicating via HTTP/REST or Message Brokers (RabbitMQ/Kafka).

Q85. What is Graceful Shutdown in Node.js?
Handling process signals (SIGTERM, SIGINT) to finish active HTTP requests, close database connections, and release resources before exiting.

Q86. What is Compression middleware in Express?
Compresses HTTP response bodies using Gzip/Brotli to reduce payload size and speed up transmission.

Q87. How to run tests in Node.js?
Using testing frameworks like Jest, Mocha, Chai, or Supertest for API endpoint testing.

Q88. What is Supertest library?
A library used for testing Node.js HTTP servers and Express endpoints programmatically.

Q89. What is Nodemon?
A developer utility that monitors file changes and automatically restarts the Node server.

Q90. Difference between process.env.NODE_ENV values?
'development' (verbose logging, hot reloading) vs 'production' (optimized performance, disabled debugging).

Q91. What is WebSockets and how to use them in Node.js?
A protocol providing full-duplex persistent communication channels over a single TCP connection (e.g., socket.io).

Q92. Difference between HTTP Long Polling and WebSockets?
Long Polling: Client sends request; server holds connection until data is available, then closes.
WebSockets: Single persistent bidirectional TCP connection.

Q93. How to send emails in Node.js?
Using nodemailer library with SMTP credentials or transactional email APIs (SendGrid, Mailgun).

Q94. What is Streams vs Buffers memory impact?
Buffers load complete files into RAM (high memory footprint); Streams process data in small chunks (minimal memory usage).

Q95. What is child_process module?
Enables executing system terminal commands and spawning child OS processes (exec, spawn, fork).

Q96. Difference between spawn() and exec() in child_process?
spawn(): Streams data output in chunks (best for large data).
exec(): Buffers complete command output into memory callback (best for small outputs).

Q97. What is child_process.fork()?
Specialized variant of spawn() specifically executing new Node.js processes with built-in IPC communication channels.

Q98. How to measure function performance in Node.js?
Using performance.now() or console.time() and console.timeEnd().

Q99. What is REPL / Debugging tools for Node.js?
Node Inspector (node --inspect), Chrome DevTools, and VS Code Debugger.

Q100. Best practices for building production-ready Node.js applications?
Use environment variables, implement structured error handling, enforce security headers (Helmet), implement rate limiting, handle graceful shutdown, use PM2/Docker, log structured JSON, monitor event loop lag, and write automated tests.

Top Companies Asking Node.js Questions:
- Amazon
- Microsoft
- Google
- Meta
- Netflix
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant

Preparation Tips:
- Master the Event Loop, libuv architecture, and thread pool execution.
- Build RESTful APIs using Express.js and integrate JWT authentication.
- Practice handling asynchronous operations cleanly using Async/Await.
- Understand database connection pooling and indexing using MongoDB/Mongoose.
- Learn performance tuning, caching with Redis, and scaling using PM2/Docker.

Conclusion:
Node.js is a cornerstone of modern backend and full-stack software development. Mastering these top 100 interview questions along with practical backend project experience will help you clear backend engineering interviews with confidence.

Happy Learning!
Team GotPlaced
`
},
{
  id: 17,

  slug: "top-100-mongodb-interview-questions-2026",

  title: "Top 100 MongoDB Interview Questions and Answers (2026)",

  description:
    "Prepare for MongoDB interviews with the Top 100 MongoDB Interview Questions and Answers (2026). Learn MongoDB fundamentals, NoSQL databases, Documents, Collections, CRUD Operations, Aggregation Pipeline, Indexing, Replication, Sharding, Data Modeling, BSON, Transactions, Schema Design, Mongoose, Performance Optimization, and commonly asked MongoDB interview questions. This comprehensive guide is ideal for students, freshers, and experienced developers preparing for backend and full-stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, HCL, Tech Mahindra, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/mongodb-blog.jpg",

  author: "GotPlaced Team",

  category: "MongoDB",

  date: "17 July 2026",

  readTime: "25 min read",

  content: `Top 100 MongoDB Interview Questions and Answers (2026)

MongoDB is one of the most popular NoSQL databases used in modern web development. It stores data in flexible JSON-like BSON documents instead of traditional tables, making it highly scalable and ideal for modern applications. MongoDB is widely used in the MERN stack and is frequently asked in backend and full-stack developer interviews.

Whether you're preparing for campus placements, internships, backend development, or full-stack developer roles, mastering MongoDB concepts is essential.

Topics Covered:
- Introduction to MongoDB & NoSQL
- Documents, Collections & BSON
- Data Types & CRUD Operations
- Querying, Filtering & Projection
- Indexing & Performance Optimization
- Aggregation Pipeline & Framework
- Data Modeling & Schema Design
- Replication & High Availability
- Sharding & Horizontal Scaling
- Mongoose ODM, Security & Transactions

1. Introduction to MongoDB & NoSQL

Q1. What is MongoDB?
MongoDB is an open-source, document-oriented NoSQL database that stores data as flexible, schema-less BSON documents.

Q2. What is NoSQL and its main types?
NoSQL refers to non-tabular databases built for high performance, dynamic schemas, and horizontal scalability. Types: Document (MongoDB), Key-Value (Redis), Column-Family (Cassandra), Graph (Neo4j).

Q3. Compare Relational Database (RDBMS) vs MongoDB.
RDBMS: Structured tables, rigid predefined schemas, SQL queries, vertical scaling, foreign key relations.
MongoDB: Dynamic BSON documents, flexible schema, MongoDB Query Language (MQL), horizontal scaling (sharding), embedded/referenced relationships.

Q4. What is CAP Theorem in the context of MongoDB?
CAP Theorem states a distributed database can guarantee at most two of: Consistency, Availability, Partition Tolerance. MongoDB is primarily a CP (Consistency and Partition Tolerance) system.

Q5. What are the key features of MongoDB?
Schema-less document structure, high availability (replication), horizontal scalability (sharding), rich aggregation framework, geospatial indexes, and full-text search.

Q6. What is _id field in MongoDB?
A mandatory 12-byte unique primary key field automatically added to every document in a collection if not provided manually.

Q7. What is ObjectId and its composition?
A 12-byte hexadecimal identifier composed of: 4-byte timestamp, 5-byte random value (unique per machine/process), and 3-byte incrementing counter.

Q8. What is GridFS in MongoDB?
A specification for storing and retrieving large files exceeding the 16MB document size limit by splitting them into smaller chunks.

Q9. What is WiredTiger Storage Engine?
The default pluggable storage engine in MongoDB offering document-level concurrency control, checkpointing, and memory caching.

Q10. What is Capped Collection in MongoDB?
Fixed-size, high-performance circular collections that maintain insertion order and automatically overwrite oldest documents when maximum allocation is reached.

2. Documents, Collections & BSON

Q11. What is a Document in MongoDB?
A single data record stored in BSON format, composed of field-value pairs similar to JSON objects.

Q12. What is a Collection in MongoDB?
A logical grouping of MongoDB documents, equivalent to a table in relational databases.

Q13. What is BSON and why does MongoDB use it instead of JSON?
Binary JSON - a binary-encoded serialization format extending JSON. It supports additional data types (e.g., Date, ObjectId, Binary, Decimal128) and enables faster traversal/parsing.

Q14. What is the maximum size limit of a single MongoDB document?
16 Megabytes (16MB), which helps prevent excessive RAM usage during query transfers.

Q15. What are the advantages of dynamic schema in collections?
Fields can vary across documents within the same collection, allowing easy iterative development and seamless data migration without schema alteration downtime.

3. Data Types & CRUD Operations

Q16. What are common data types supported in MongoDB?
String, Integer, Double, Boolean, Array, Timestamp, Date, Object (Embedded Document), Null, ObjectId, Binary, Decimal128.

Q17. What are CRUD operations in MongoDB?
Create (insert), Read (find), Update (update/replace), and Delete (delete/remove).

Q18. How to insert documents in MongoDB?
db.collection.insertOne({ ... }) for a single document, or db.collection.insertMany([ { ... }, { ... } ]) for multiple documents.

Q19. Difference between insertOne(), insertMany(), and save()?
insertOne(): Inserts one document.
insertMany(): Inserts array of documents.
save(): Inserts new document or updates existing document if _id matches.

Q20. How to query documents using find()?
db.collection.find(filter, projection) - returns a cursor to matching documents.

Q21. Difference between find() and findOne()?
find(): Returns a query cursor iterating over all matching documents.
findOne(): Returns the first matching document directly as an object or null.

Q22. How to update documents in MongoDB?
db.collection.updateOne(filter, update, options) or db.collection.updateMany(filter, update, options).

Q23. What is the upsert option in update operations?
If set to true (upsert: true), MongoDB creates a new document if no document matches the search filter.

Q24. How do update operators like $set, $unset, $inc work?
$set: Replaces or adds field values.
$unset: Removes specified fields.
$inc: Increments field values by a specified number.

Q25. How to delete documents in MongoDB?
db.collection.deleteOne(filter) or db.collection.deleteMany(filter).

4. Querying, Filtering & Projection

Q26. What is Projection in MongoDB queries?
Selecting or excluding specific fields returned in result documents using 1 (include) or 0 (exclude) (e.g., db.users.find({}, { name: 1, _id: 0 })).

Q27. What are comparison operators in MongoDB?
$eq (equal), $ne (not equal), $gt (greater than), $gte (greater/equal), $lt (less than), $lte (less/equal), $in (in array), $nin (not in array).

Q28. What are logical operators in MongoDB?
$and, $or, $not, $nor.

Q29. What are array query operators like $all, $elemMatch, $size?
$all: Matches arrays containing all specified elements.
$elemMatch: Matches documents where an array field satisfies all specified criteria inside a single array element.
$size: Matches arrays with a specified number of elements.

Q30. How to sort query results using sort()?
db.collection.find().sort({ fieldName: 1 }) for ascending order, or -1 for descending order.

Q31. How to implement Pagination in MongoDB?
Using limit() and skip() methods (e.g., db.collection.find().skip((page - 1) * pageSize).limit(pageSize)).

Q32. What is a Cursor in MongoDB?
A pointer to the result set of a query that allows client applications to iterate through results lazily in batches.

Q33. What is $regex operator?
Provides regular expression capabilities for pattern matching in queries (e.g., db.users.find({ email: { $regex: /@gmail\\.com$/ } })).

Q34. How to count matching documents in a collection?
db.collection.countDocuments(filter) or db.collection.estimatedDocumentCount().

5. Indexing & Performance Optimization

Q35. What is an Index in MongoDB and why is it important?
A data structure (B-Tree) that stores a small portion of the collection's data set to resolve queries quickly without performing expensive full collection scans (COLLSCAN).

Q36. What is a Single Field Index vs Compound Index?
Single Field: Index created on one attribute.
Compound Index: Index created on multiple fields combined (order of fields matters due to prefix rule).

Q37. What is the ESR Rule for Compound Indexes?
Rule of thumb for ordering compound index fields: Equality fields first, Sort fields second, Range fields last.

Q38. What is a Multikey Index?
An index created on array fields where MongoDB creates separate index entries for each element in the array.

Q39. What is a Text Index?
Specialized index supporting full-text search queries on string content using $text and $search operators.

Q40. What is a Geospatial Index?
Indexes (2dsphere, 2d) supporting queries on coordinate data (GeoJSON) for distance and location searches ($near, $geoWithin).

Q41. What is a Unique Index?
Enforces uniqueness for indexed fields, preventing duplicate key values across collection documents.

Q42. What is a TTL (Time-To-Live) Index?
A single-field index used to automatically remove documents from a collection after a specified amount of time.

Q43. What is a Covered Query?
A query resolved entirely using index entries without reading actual documents from disk (IXSCAN only, zero document fetches).

Q44. How to analyze query execution using explain()?
db.collection.find().explain("executionStats") - reveals winning query execution plan, stage details (COLLSCAN vs IXSCAN), scanned document counts, and execution time.

Q45. What is a Sparse Index?
An index containing entries only for documents that actually possess the indexed field, saving storage space.

6. Aggregation Pipeline & Framework

Q46. What is the Aggregation Pipeline in MongoDB?
A framework for data processing and transformation where documents pass through multi-stage pipelines to return computed results.

Q47. What are common Aggregation Pipeline stages?
$match (filters), $project (reshapes), $group (aggregates), $sort (orders), $limit (restricts), $skip (offsets), $unwind (deconstructs arrays), $lookup (joins).

Q48. Explain the $match stage.
Filters documents to pass only those matching specified conditions to the next pipeline stage (similar to find()).

Q49. Explain the $group stage.
Groups input documents by a specified identifier expression (_id) and applies accumulator operators ($sum, $avg, $max, $min, $push).

Q50. Explain the $unwind stage.
Deconstructs an array field from input documents to output a new document for each element in the array.

Q51. What is $lookup stage and how does it mimic SQL Joins?
Performs a left outer join to another collection in the same database to combine matching fields into an array.

Q52. Difference between find() with MapReduce and Aggregation Pipeline?
MapReduce uses JavaScript functions (slower, deprecated in modern MongoDB). Aggregation Pipeline uses native C++ code execution (faster, optimized).

Q53. What is $facet stage?
Processes multiple aggregation pipelines simultaneously on the same set of input documents within a single stage (useful for faceted search).

Q54. What is $out and $merge stages?
$out: Writes pipeline output documents to a new target collection (overwrites existing).
$merge: Merges pipeline output documents into an existing target collection (updates/inserts).

7. Data Modeling & Schema Design

Q55. What are the two primary patterns for modeling relationships in MongoDB?
Embedded Data Model (Denormalized) and Referenced Data Model (Normalized).

Q56. When should you choose Embedding over Referencing?
Choose Embedding for "One-to-Few" or "One-to-Many" relationships where data is accessed together frequently and atomic updates are needed.

Q57. When should you choose Referencing over Embedding?
Choose Referencing for "One-to-Squillions" (massive scale), "Many-to-Many" relationships, or when embedding exceeds the 16MB document limit.

Q58. What is the 1:1, 1:N, and N:M relationship design approach in MongoDB?
1:1: Embed fields into single document.
1:N: Embed array of sub-documents (small N) or store parent references (large N).
N:M: Store array of reference IDs in documents on both sides.

Q59. What is Schema Validation in MongoDB?
JSON Schema rules enforced on collections using $jsonSchema validation level to reject invalid inserts/updates.

Q60. What is Polymorphic Pattern in schema design?
Structuring collection documents with varied fields while sharing common query attributes.

8. Replication & High Availability

Q61. What is Replication in MongoDB?
Redundancy mechanism that synchronizes data across multiple database servers (Replica Set) to ensure high availability and disaster recovery.

Q62. What is a Replica Set?
A cluster of MongoDB nodes consisting of one Primary node and multiple Secondary nodes.

Q63. What is the role of Primary and Secondary nodes in a Replica Set?
Primary: Receives all write operations and records changes in its oplog.
Secondary: Replicates Primary's oplog and applies operations to maintain data synchronization.

Q64. What is Oplog (Operations Log)?
A capped collection on primary nodes recording all data modification operations used by secondary nodes for replication.

Q65. How does Automatic Failover work during primary node failure?
Secondary nodes detect primary failure via heartbeat signals, conduct an election using Raft-like consensus, and elect a new Primary node.

Q66. What is an Arbiter node in Replica Sets?
A lightweight node participating strictly in elections to break tie votes without holding data or syncing oplogs.

Q67. What is Read Preference in MongoDB?
Specifies where client read queries are routed: primary, primaryPreferred, secondary, secondaryPreferred, nearest.

Q68. What is Write Concern in MongoDB?
Specifies the level of write acknowledgment requested from MongoDB before reporting success (e.g., w: 1, w: "majority").

9. Sharding & Horizontal Scaling

Q69. What is Sharding in MongoDB?
A method for distributing datasets across multiple physical servers (Shards) to achieve horizontal scaling and partition large volumes.

Q70. What are the main components of a Sharded Cluster?
Shards (data storage), Query Routers (mongos), and Config Servers (cluster metadata).

Q71. What is a Shard Key?
A field or combination of fields determining the distribution of collection documents across cluster shards.

Q72. Difference between Ranged Sharding and Hashed Sharding?
Ranged Sharding: Divides data into contiguous ranges based on shard key values (good for range queries, risk of hot spots).
Hashed Sharding: Computes MD5 hash of shard key to distribute data uniformly across shards.

Q73. What is mongos?
A routing service that acts as an interface between client applications and the sharded cluster, routing requests to correct shards.

Q74. What is a Chunk in Sharding?
A contiguous subset of sharded data within a shard that splits and balances across shards automatically when reaching maximum size limit.

10. Mongoose ODM, Security & Transactions

Q75. What is Mongoose?
An Object Data Modeling (ODM) library for Node.js and MongoDB providing strict schema mapping, middleware, and query building.

Q76. Difference between Native MongoDB Driver and Mongoose?
Native Driver: Low-level API offering raw performance without schema enforcement.
Mongoose: High-level abstraction providing schemas, validations, hooks, and virtuals.

Q77. What is a Mongoose Schema vs Model?
Schema: Defines structure, fields, defaults, and validators of documents.
Model: Constructor compiled from schema used to interact with MongoDB collection (create, query, update, delete).

Q78. What are Mongoose Middleware (Hooks)?
Pre and Post hooks executing before/after lifecycle events like save, validate, remove, or find.

Q79. What is Population in Mongoose?
Automatically replacing reference ObjectIDs in a document with actual documents from another collection (.populate()).

Q80. What are Virtuals in Mongoose?
Properties not stored in MongoDB disk documents but computed dynamically on the fly (e.g., combining firstName and lastName into fullName).

Q81. Does MongoDB support ACID Transactions?
Yes, MongoDB supports multi-document ACID transactions across collections, replica sets, and sharded clusters.

Q82. How to execute a Session Transaction in MongoDB / Mongoose?
Start session via client.startSession(), call session.startTransaction(), execute operations passing session, and invoke session.commitTransaction().

Q83. How to secure a MongoDB production instance?
Enable authentication (auth: true), enforce TLS/SSL encryption, restrict IP bind addresses, implement Role-Based Access Control (RBAC), and enable audit logging.

Q84. What is Role-Based Access Control (RBAC) in MongoDB?
Assigning users specific predefined roles (e.g., read, readWrite, dbAdmin) to restrict unauthorized operations.

Q85. What is MongoDB Atlas?
A fully managed cloud database service hosted on AWS, Azure, or GCP offering automated backups, monitoring, auto-scaling, and security.

Q86. What is $setWindowFields stage in Aggregation?
Allows performing window operations (like cumulative sums, moving averages, lead, lag) across documents without grouping.

Q87. What is Change Streams in MongoDB?
A feature allowing applications to access real-time data changes in collections, databases, or clusters without polling.

Q88. What is DBRef in MongoDB?
A convention for representing document references using embedded sub-documents containing $ref, $id, and optionally $db fields.

Q89. How to back up and restore MongoDB databases?
mongodump (creates binary BSON export) and mongorestore (restores binary BSON) or mongoexport/mongoimport (JSON/CSV formats).

Q90. Difference between mongodump and mongoexport?
mongodump: Binary backup preserving full data types and indexes (ideal for backups).
mongoexport: Human-readable JSON/CSV export (ideal for data inspection/migration).

Q91. What is In-Memory Storage Engine?
A storage engine keeping data entirely in RAM for ultra-fast response times without disk I/O persistence.

Q92. What is Projection in Mongoose queries?
Restricting fields using select() method (e.g., User.find().select('name email -_id')).

Q93. What is Write Conflict in Transactions?
Occurs when two concurrent transactions attempt to modify the same document simultaneously; one aborts and must retry.

Q94. What is $expr operator in MongoDB queries?
Allows using aggregation expressions directly within standard query filters (e.g., comparing two fields in the same document).

Q95. How to perform Case-Insensitive search in MongoDB?
Using collation options (e.g., { collation: { locale: 'en', strength: 2 } }) or regular expressions with 'i' flag.

Q96. What is Compaction / Defragmentation in MongoDB?
Using compact command to release empty unallocated space back to OS storage.

Q97. What is $mergeObjects aggregation operator?
Combines multiple sub-documents into a single consolidated document.

Q98. Difference between primaryPreferred and secondaryPreferred Read Preferences?
primaryPreferred: Reads from Primary if available, falls back to Secondary.
secondaryPreferred: Reads from Secondary if available, falls back to Primary.

Q99. What is Connection Pooling in MongoDB drivers?
Reusing a pool of open socket connections to execute commands concurrently without network handshake overhead per query.

Q100. Best practices for MongoDB development and performance tuning?
Index fields used in queries and sorts, follow the ESR rule, avoid unbounded array growth, embed data for read efficiency, leverage aggregation pipelines over client-side loops, use projection to limit payload sizes, and monitor explain() execution plans.

Top Companies Asking MongoDB Questions:
- Amazon
- Microsoft
- Google
- Meta
- Netflix
- Oracle
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master core CRUD operations and query operators ($in, $elemMatch, $regex).
- Learn the Aggregation Pipeline stages ($match, $group, $unwind, $lookup).
- Thoroughly understand Indexing types and query profiling via explain().
- Learn schema design trade-offs (Embedding vs Referencing).
- Gain hands-on experience using Mongoose ODM in Node.js applications.

Conclusion:
MongoDB is a vital NoSQL database powering scalable web backends and microservices. Mastering these top 100 interview questions along with hands-on MERN stack database design will help you clear backend and full-stack technical rounds with ease.

Happy Learning!
Team GotPlaced
`
},
{
  id: 18,

  slug: "top-100-expressjs-interview-questions-2026",

  title: "Top 100 Express.js Interview Questions and Answers (2026)",

  description:
    "Prepare for Express.js interviews with the Top 100 Express.js Interview Questions and Answers (2026). Learn Express.js fundamentals, Routing, Middleware, REST APIs, Request & Response Objects, Error Handling, Authentication, JWT, Sessions, Cookies, File Uploads, Express Router, CORS, Security Best Practices, Performance Optimization, and commonly asked Express.js interview questions. This complete guide is perfect for students, freshers, and experienced developers preparing for backend and full-stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, HCL, Tech Mahindra, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/expressjs-blog.jpg",

  author: "GotPlaced Team",

  category: "Express.js",

  date: "17 July 2026",

  readTime: "25 min read",

  content: `
# Top 100 Express.js Interview Questions and Answers (2026)

Express.js is one of the most popular Node.js frameworks used for building fast, scalable, and secure web applications and REST APIs. It simplifies backend development by providing routing, middleware, request handling, and many powerful features.

Whether you're preparing for campus placements, internships, backend developer roles, or full-stack interviews, mastering Express.js is essential.

------------------------------------------------

Topics Covered

• Introduction to Express.js

• Installation

• Routing

• Middleware

• Request & Response

• REST APIs

• Express Router

• Error Handling

• Authentication

• JWT

• Cookies & Sessions

• File Uploads

• CORS

• Security Best Practices

• Performance Optimization

------------------------------------------------

Q1. What is Express.js?

Answer:
Express.js is a lightweight and flexible web application framework built on Node.js that simplifies server-side development.

------------------------------------------------

Q2. What are the advantages of Express.js?

Answer:

• Fast Development

• Lightweight

• Middleware Support

• Easy Routing

• REST API Development

• Large Community

------------------------------------------------

Q3. What is Middleware?

Answer:
Middleware is a function that executes during the request-response cycle and can modify requests, responses, or terminate the request.

------------------------------------------------

Q4. What is Routing?

Answer:
Routing determines how an application responds to client requests for different URLs and HTTP methods.

------------------------------------------------

Q5. What is Express Router?

Answer:
Express Router is used to organize routes into separate modules for better code structure.

------------------------------------------------

Q6. What is CORS?

Answer:
CORS (Cross-Origin Resource Sharing) allows resources to be requested from different domains securely.

------------------------------------------------

Q7. What is JWT Authentication?

Answer:
JWT (JSON Web Token) is a secure token-based authentication method commonly used in Express.js applications.

------------------------------------------------

Q8. What is req and res?

Answer:

req → Represents the client's HTTP request.

res → Represents the server's HTTP response.

------------------------------------------------

Q9. What is express.json()?

Answer:
express.json() is middleware used to parse incoming JSON request bodies.

------------------------------------------------

Q10. How do you handle errors in Express.js?

Answer:
Errors are handled using custom error-handling middleware with four parameters:
(err, req, res, next)

------------------------------------------------

Top Companies

• Amazon

• Microsoft

• Google

• Meta

• Netflix

• TCS

• Infosys

• Wipro

• Accenture

• Cognizant

------------------------------------------------

Preparation Tips

✔ Practice REST API development.

✔ Learn Middleware deeply.

✔ Build Express.js projects.

✔ Master JWT Authentication.

✔ Practice CRUD APIs.

✔ Learn Error Handling.

✔ Revise Routing concepts.

------------------------------------------------

Conclusion

Express.js is one of the most widely used backend frameworks for Node.js. A strong understanding of routing, middleware, REST APIs, authentication, and error handling will help you confidently crack backend and full-stack developer interviews.

Happy Learning!

Team GotPlaced 🚀
`
},
{
  id: 19,

  slug: "top-100-git-github-interview-questions-2026",

  title: "Top 100 Git & GitHub Interview Questions and Answers (2026)",

  description:
    "Prepare for Git & GitHub interviews with the Top 100 Git & GitHub Interview Questions and Answers (2026). Learn Version Control, Git Basics, GitHub Workflow, Branching, Merging, Rebasing, Cherry-pick, Stash, Pull Requests, Git Fetch, Git Pull, Git Push, Git Reset, Git Revert, Git Ignore, Merge Conflicts, Forks, GitHub Actions, and commonly asked Git interview questions. This complete guide is perfect for students, freshers, and experienced developers preparing for software development interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/git-github-blog.jpg",

  author: "GotPlaced Team",

  category: "Git & GitHub",

  date: "17 July 2026",

  readTime: "24 min read",

  content: `Top 100 Git & GitHub Interview Questions and Answers (2026)

Git and GitHub are essential tools for every software developer. Almost every company expects candidates to understand version control, collaboration, branching strategies, repositories, and Git workflows. Whether you're applying for internships, campus placements, or experienced software engineering roles, Git knowledge is considered a must-have skill.

Topics Covered:
- Introduction to Version Control & Git Basics
- Local Repository Operations & File States
- Branching, Merging & Rebase Strategies
- Remote Repositories & GitHub Workflow
- Git Stash, Reset, Revert & Undo Operations
- Advanced Commands (Cherry-pick, Bisect, Reflog, Submodules)
- Merge Conflicts & Resolution Techniques
- GitHub Features, Pull Requests & Code Reviews
- GitHub Actions, CI/CD & Security
- Git Best Practices & Troubleshooting

1. Introduction to Version Control & Git Basics

Q1. What is a Version Control System (VCS)?
A software tool that tracks changes made to files over time, allowing developers to review history, revert to previous states, and collaborate on shared codebases.

Q2. What is the difference between Centralized (CVCS) and Distributed VCS (DVCS)?
Centralized (e.g., SVN): Relies on a single central server storing code history. If the server goes down, collaboration halts.
Distributed (e.g., Git): Every developer keeps a full local copy of the repository and its history on their machine.

Q3. What is Git?
Git is a free, open-source distributed version control system designed to handle projects with speed, integrity, and efficiency.

Q4. What is GitHub?
A cloud-based platform that hosts Git repositories, providing a graphical web interface, collaboration tools, issue tracking, and CI/CD features.

Q5. What is the difference between Git and GitHub?
Git is the local command-line version control tool. GitHub is a remote cloud hosting service for Git repositories.

Q6. How do you configure user credentials in Git?
git config --global user.name "Your Name"
git config --global user.value "your.email@example.com"

Q7. What are the three main areas/states of a file in Git?
1. Working Directory (modified files).
2. Staging Area / Index (files prepped for commit).
3. Repository / .git directory (committed snapshots).

Q8. What is the .git directory?
A hidden directory created inside the root folder containing all repository metadata, history objects, references, and configuration files.

Q9. How do you initialize a new Git repository?
Run git init inside the target directory.

Q10. How do you check the current status of files in a Git repository?
Run git status to view modified, staged, and untracked files.

2. Local Repository Operations & File States

Q11. What is the Staging Area (Index) in Git?
An intermediate buffer area where file changes are staged using git add before committing them to history.

Q12. What does git add do?
Adds file changes from the working directory to the staging area (e.g., git add file.txt or git add .).

Q13. What is a Git Commit?
A saved snapshot of the staged changes in the repository history, identified by a unique SHA-1 hash.

Q14. How do you commit staged changes with a message?
git commit -m "Your descriptive commit message"

Q15. What is the difference between git add . and git add -A?
git add . stages new and modified files in the current path. git add -A (or --all) stages all modified, new, and deleted files across the entire repository.

Q16. How do you view the commit history in Git?
git log or git log --oneline --graph --all for a visual summary.

Q17. What is git diff used for?
Displays line-by-line differences between working directory, staging area, or commits (e.g., git diff shows unstaged changes).

Q18. What is a HEAD in Git?
A pointer referencing the current active branch or specific commit you are currently working on.

Q19. What is a .gitignore file?
A text file instructing Git to ignore specified files, folders, or patterns (e.g., node_modules, .env, build outputs).

Q20. How do you track a file that was previously ignored by .gitignore?
Force add it using git add -f <filename>.

3. Branching, Merging & Rebase Strategies

Q21. What is a Branch in Git?
A lightweight pointer to a specific commit, allowing isolated parallel development without affecting the main code line.

Q22. How do you create and switch to a new branch?
git branch <branch-name> (creates) and git checkout <branch-name> (switches), or combined: git checkout -b <branch-name> / git switch -c <branch-name>.

Q23. How do you list all local and remote branches?
git branch -a

Q24. How do you delete a local and remote branch?
Local: git branch -d <branch-name> (force: -D).
Remote: git push origin --delete <branch-name>.

Q25. What is Git Merge?
Combines commit histories from one branch into another active branch.

Q26. What is a Fast-Forward Merge?
Occurs when the target branch has no new commits since branching off; Git simply moves the pointer forward to the source branch tip.

Q27. What is a 3-Way Merge?
Occurs when both branches have diverged with independent commits; Git creates a new "Merge Commit" uniting both histories using a common ancestor.

Q28. What is Git Rebase?
Re-applies commits from the current branch on top of another base branch tip, creating a linear project history.

Q29. Difference between Git Merge and Git Rebase?
Merge: Preserves original complete history with merge commits (non-destructive).
Rebase: Rewrites commit history into a clean linear sequence (destructive if done on public branches).

Q30. What is the Golden Rule of Git Rebase?
Never rebase public shared branches that other collaborators are actively working on.

4. Remote Repositories & GitHub Workflow

Q31. What is a Remote in Git?
A reference URL pointing to a shared repository instance hosted on a remote server (e.g., origin).

Q32. How do you link a local repository to a remote GitHub repository?
git remote add origin <repository-url>

Q33. What is git clone?
Copies an existing remote repository, its complete commit history, and branches to your local machine.

Q34. What is git fetch?
Downloads new commits, references, and tags from a remote repository into your local .git folder without merging changes into working files.

Q35. What is git pull?
Combination of git fetch followed automatically by git merge to update your current local branch with remote changes.

Q36. What is git push?
Uploads local branch commits to a specified remote repository branch (e.g., git push origin main).

Q37. What is upstream tracking in Git?
Links a local branch to a specific remote branch using git push -u origin <branch-name>, simplifying future pulls/pushes.

Q38. How do you rename a Git remote?
git remote rename <old-name> <new-name>

Q39. What is a Fork in GitHub?
A personal copy of another user's GitHub repository created under your own GitHub account, allowing independent modifications.

Q40. Difference between Forking and Cloning?
Forking: Server-side GitHub operation creating a remote copy under your account.
Cloning: Local operation downloading a repository to your local machine.

5. Git Stash, Reset, Revert & Undo Operations

Q41. What is git stash?
Temporarily shelves uncommitted working directory and staged changes, reverting working files to a clean HEAD state.

Q42. Common git stash commands?
git stash (save)
git stash pop (apply and remove latest)
git stash apply (apply and keep)
git stash list (view stashes)
git stash drop (delete stash)

Q43. What is the difference between git reset and git revert?
git reset: Rewinds pointer to a previous commit, rewriting history (local use).
git revert: Creates a new commit that explicitly undoes changes from a specified commit (safe for public history).

Q44. What are the three modes of git reset (--soft, --mixed, --hard)?
--soft: Moves HEAD, leaves changes staged.
--mixed (default): Moves HEAD, un-stages changes, leaves working directory files intact.
--hard: Moves HEAD, clears staging area, and completely wipes uncommitted working directory changes.

Q45. How do you amend the last commit message or add missed staged files?
git commit --amend -m "Updated commit message"

Q46. How do you restore a deleted file in the working directory before committing?
git restore <filename> or git checkout -- <filename>

Q47. How do you unstage a file staged with git add?
git restore --staged <filename> or git reset HEAD <filename>

Q48. How do you remove untracked files from the working directory?
git clean -fd (-f for files, -d for directories).

6. Advanced Commands (Cherry-pick, Bisect, Reflog, Submodules)

Q49. What is git cherry-pick?
Selects a specific commit from one branch by its hash and applies it onto the current active branch.

Q50. What is git reflog?
Tracks every local HEAD reference update (branch switches, resets, rebases), enabling recovery of lost commits or branches.

Q51. How do you recover a deleted branch using git reflog?
Find the commit SHA prior to branch deletion in git reflog, then checkout a new branch from that SHA: git checkout -b <branch-name> <commit-sha>.

Q52. What is git bisect?
A debugging tool using binary search across commit history to locate the exact commit that introduced a bug or bug regression.

Q53. What is git blame?
Displays line-by-line author attribution and last-modified commit hash details for a specific file.

Q54. What are Git Submodules?
Allows keeping a separate Git repository as a nested subdirectory within a main parent Git repository.

Q55. What is git archive?
Generates a compressed archive file (zip or tar) containing a single tree snapshot of a repository without the .git metadata folder.

Q56. What is git tag and its types?
Creates sticky reference points marking specific historical milestones (e.g., v1.0.0). Types: Lightweight tags and Annotated tags (contain author info, message, date).

Q57. How do you push tags to a remote repository?
git push origin <tag-name> or git push origin --tags for all tags.

Q58. What is git squash?
Combining multiple consecutive commit messages/snapshots into a single unified commit during rebase or merge.

7. Merge Conflicts & Resolution Techniques

Q59. What is a Merge Conflict?
Occurs when Git cannot automatically reconcile conflicting edits made to the exact same line of a file across merging branches.

Q60. How does Git represent conflict markers in files?
<<<<<<< HEAD (current branch changes)
======= (separator)
>>>>>>> branch-name (incoming branch changes)

Q61. What are the steps to resolve a Merge Conflict?
1. Identify conflicted files via git status.
2. Edit files manually to keep desired code and remove conflict markers.
3. Stage resolved files via git add <filename>.
4. Complete operation via git commit.

Q62. How do you abort an ongoing merge or rebase operation with conflicts?
git merge --abort or git rebase --abort

Q63. What is git rerere?
"Reuse Recorded Resolution" - a feature recording how you resolved a conflict snippet to automatically resolve identical conflicts in future operations.

8. GitHub Features, Pull Requests & Code Reviews

Q64. What is a Pull Request (PR) on GitHub?
A formal proposal requesting maintainers to review, discuss, and merge code changes from a feature branch into the target repository branch.

Q65. What is the standard GitHub Flow?
1. Create a branch from main.
2. Add commits.
3. Open a Pull Request.
4. Discuss and perform code review.
5. Merge PR into main branch.

Q66. What is Gitflow Architecture?
A strict branching model assigning explicit roles to branches: main (production), develop (integration), feature/*, release/*, and hotfix/*.

Q67. What is GitHub Issues?
An integrated tracking tool for logging bugs, feature requests, tasks, and project discussions linked directly to commits and PRs.

Q68. What are GitHub Releases?
Packaged software versions published on GitHub based on annotated Git tags, often containing compiled binaries and release notes.

Q69. How do you close a GitHub Issue automatically via a Pull Request?
Include keywords like "Closes #123", "Fixes #123", or "Resolves #123" in the PR description or commit message.

Q70. What is a Code Review?
A collaborative process where team members inspect proposed code changes in a PR to ensure quality, security, and standards before merging.

Q71. What is Branch Protection Rule in GitHub?
Repository settings enforcing rules on specific branches (e.g., requiring mandatory PR reviews, passing status checks, or signed commits before merging).

Q72. What is CODEOWNERS file?
A configuration file specifying individual developers or teams responsible for reviewing code changes in specific repository files/directories.

9. GitHub Actions, CI/CD & Security

Q73. What is GitHub Actions?
A built-in Continuous Integration and Continuous Deployment (CI/CD) platform allowing automation of build, test, and deployment workflows directly inside GitHub repositories.

Q74. What is a GitHub Actions Workflow file and where is it located?
A YAML configuration file specifying automated steps, located inside the .github/workflows/ repository directory.

Q75. What are key components of a GitHub Actions Workflow?
Events (triggers like push/pull_request), Jobs (execution steps running on runners), Steps (individual tasks/actions), and Runners (virtual machine environments).

Q76. What is GitHub Dependabot?
An automated security bot that scans repository dependencies for known vulnerabilities and opens automated PRs to update outdated packages.

Q77. What is GitHub Secrets?
Encrypted environment variables stored securely in repository settings used to pass sensitive API keys and tokens into GitHub Actions workflows.

Q78. What is SSH Key authentication for GitHub?
A secure passwordless method using a public/private key pair to authenticate local Git command-line operations with GitHub servers.

Q79. What is a Personal Access Token (PAT)?
A secure alternative to account passwords used for authenticating CLI or third-party API interactions with GitHub.

Q80. What is GPG Commit Signing?
Digitally signing commits using a GPG key to verify the true identity of the commit author on GitHub ("Verified" badge).

10. Git Best Practices & Troubleshooting

Q81. What constitutes a good Git commit message?
Use imperative mood ("Add feature" not "Added feature"), keep header line under 50 characters, capitalize title, and provide detailed context in body if needed.

Q82. Why should large binary files (videos, zip files) be kept out of standard Git repos?
Git stores full file copies across history, causing repository size to bloat rapidly.

Q83. What is Git LFS (Large File Storage)?
An extension replacing large binary files inside the repository with lightweight text pointers, storing actual file contents on a remote LFS server.

Q84. What happens when you execute git push --force?
Overwrites the remote branch commit history unconditionally with your local branch history, potentially destroying collaborators' commits.

Q85. What is git push --force-with-lease?
A safer alternative to --force that refuses to overwrite remote history if another collaborator has pushed new commits to the remote branch in the meantime.

Q86. How do you change the author information of the last commit?
git commit --amend --author="New Author <email@example.com>"

Q87. How do you find which commits contain a specific search string across history?
git log -S "search_term" or git log -G "regex_pattern"

Q88. How do you check if a local branch has been merged into main?
git branch --merged main

Q89. What is a Detached HEAD state?
Occurs when HEAD points directly to a specific commit hash rather than a named branch. Edits made in this state are lost unless assigned to a new branch.

Q90. How do you fix a Detached HEAD state?
Create a new branch from current position: git checkout -b <new-branch-name>.

Q91. What is git gc (Garbage Collection)?
Cleans up unreachable orphan objects, compresses file revisions, and optimizes local repository database storage.

Q92. What is git fsck?
Verifies the structural integrity and consistency of the local Git object database, identifying corrupted or orphan objects.

Q93. How do you list all aliases configured in Git?
git config --get-regexp alias

Q94. How do you create a custom shortcut alias in Git?
git config --global alias.co checkout (allows typing git co instead of git checkout).

Q95. What is the difference between git checkout <file> and git checkout <branch>?
git checkout <file>: Reverts working directory changes in specified file.
git checkout <branch>: Switches current working branch.

Q96. What is .gitkeep file?
A convention file placed inside an empty directory to force Git to track the folder (since Git natively tracks files, not empty folders).

Q97. How do you check remote repository URL details?
git remote -v

Q98. How do you change an existing remote repository URL?
git remote set-url origin <new-url>

Q99. What is Semantic Versioning (SemVer) in tagging?
Formatting tags as MAJOR.MINOR.PATCH (e.g., v2.1.4):
MAJOR: Breaking changes.
MINOR: Backward-compatible new features.
PATCH: Backward-compatible bug fixes.

Q100. Best practices for clean Git repository management?
Keep commits atomic and small, write clear imperative commit messages, use feature branching workflows, rebase local commits before pulling to avoid noisy merge commits, set up protected main branches, use .gitignore, and clean up merged feature branches regularly.

Top Companies Asking Git & GitHub Questions:
- Google
- Microsoft
- Amazon
- Meta
- Adobe
- Oracle
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master essential daily commands (add, commit, push, pull, fetch, status, log).
- Practice branching, merging, and resolving merge conflicts manually.
- Understand difference between Git Merge vs Rebase and Reset vs Revert.
- Learn GitHub PR workflow, code review practices, and GitHub Actions basics.
- Build and maintain clean personal projects on GitHub with structured READMEs.

Conclusion:
Git and GitHub are indispensable tools for modern software development and engineering teams. Mastering these 100 core questions along with daily terminal practice will ensure complete confidence in version control technical interviews.

Happy Learning!
Team GotPlaced
`
},
{
  id: 20,

  slug: "top-100-rest-api-interview-questions-2026",

  title: "Top 100 REST API Interview Questions and Answers (2026)",

  description:
    "Prepare for REST API interviews with the Top 100 REST API Interview Questions and Answers (2026). Learn REST Architecture, HTTP Methods, Status Codes, CRUD Operations, JSON, Authentication, JWT, OAuth, API Security, Versioning, Idempotency, Rate Limiting, CORS, API Testing, Postman, Swagger, Error Handling, Best Practices, and commonly asked REST API interview questions. This comprehensive guide is perfect for students, freshers, and experienced developers preparing for backend and full-stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/rest-api-blog.jpg",

  author: "GotPlaced Team",

  category: "REST API",

  date: "17 July 2026",

  readTime: "25 min read",

  content: `Top 100 REST API Interview Questions and Answers (2026)

REST API (Representational State Transfer Application Programming Interface) is one of the most commonly used architectural styles for building web services. It enables communication between client and server applications using standard HTTP methods. REST APIs are widely used in web development, mobile applications, cloud services, and microservices, making them one of the most important topics in backend and full-stack developer interviews.

Whether you're preparing for campus placements, internships, backend development roles, or software engineering interviews, understanding REST APIs is essential.

Topics Covered:
- REST Architecture & Core Principles
- HTTP Verbs, Requests & Responses
- HTTP Status Codes & Error Handling
- CRUD Operations & Data Serialization (JSON/XML)
- Authentication, Authorization & Security (JWT, OAuth)
- API Versioning & URL Naming Conventions
- Idempotency, Caching & Performance
- Rate Limiting, CORS & Middleware
- API Documentation & Testing (Swagger, Postman)
- Advanced REST API Design & Best Practices

1. REST Architecture & Core Principles

Q1. What is an API?
An Application Programming Interface (API) is a set of rules, protocols, and definitions allowing different software applications to communicate and exchange data.

Q2. What is REST?
Representational State Transfer - a stateless software architectural style for designing networked web applications using standard HTTP protocols.

Q3. What are the 6 Guiding Constraints of REST Architecture?
1. Client-Server Architecture.
2. Statelessness.
3. Cacheability.
4. Uniform Interface.
5. Layered System.
6. Code on Demand (optional).

Q4. What does Statelessness mean in REST APIs?
Every client request must contain all the information necessary for the server to process it. The server stores no client session context between requests.

Q5. What is a Resource in REST?
Any piece of data or concept managed by the server that can be identified, named, and addressed via a URI (e.g., /users, /orders/123).

Q6. What is a URI, URL, and URN?
URI (Uniform Resource Identifier): Identifies a resource.
URL (Uniform Resource Locator): Specifies the location and protocol to retrieve a resource.
URN (Uniform Resource Name): Identifies a resource by name in a given namespace.

Q7. What is Uniform Interface in REST?
Standardized interaction mechanism using consistent URIs, standard HTTP verbs, resource representations (JSON/XML), and hypermedia control.

Q8. What is HATEOAS in REST APIs?
Hypermedia As The Engine Of Application State - a REST constraint where response payloads include dynamic hypermedia links guiding clients to subsequent available API actions.

Q9. Compare SOAP vs REST web services.
SOAP: Protocol, XML-only format, strict WS-* standards, built-in security, stateful/stateless, heavy payload.
REST: Architectural style, multiple formats (JSON, XML, HTML), relies on standard HTTP/HTTPS, lightweight, stateless.

Q10. Compare REST vs GraphQL.
REST: Multiple endpoints per resource, fixed response structures (prone to over-fetching/under-fetching).
GraphQL: Single endpoint (/graphql), allows clients to request exact fields required using a single query.

2. HTTP Verbs, Requests & Responses

Q11. What are the primary HTTP Methods used in REST APIs?
GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD.

Q12. Explain GET method.
Retrieves representation of data resources from the server without modifying server state (safe and read-only).

Q13. Explain POST method.
Submits new payload data to the server to create a new subordinate resource.

Q14. Explain PUT method.
Completely replaces or overwrites an existing resource with the provided request payload.

Q15. Explain PATCH method.
Applies partial modifications or updates to specific attributes of an existing resource.

Q16. Difference between PUT and PATCH?
PUT replaces the complete resource entity (requires full payload). PATCH updates specified fields only (requires partial payload).

Q17. Explain DELETE method.
Removes the specified resource or resource entity from the server database.

Q18. What is OPTIONS method used for?
Returns supported HTTP methods and communication options available for a target URI endpoint (used in CORS preflight requests).

Q19. What is HEAD method used for?
Retrieves identical HTTP response headers as a GET request, but omits the actual response message body.

Q20. What components make up an HTTP Request?
HTTP Method, Request URI, HTTP Protocol Version, Request Headers, and Request Body/Payload.

Q21. What components make up an HTTP Response?
HTTP Protocol Version, Status Code & Reason Phrase, Response Headers, and Response Body/Payload.

3. HTTP Status Codes & Error Handling

Q22. How are HTTP Status Codes categorized?
1xx: Informational.
2xx: Success.
3xx: Redirection.
4xx: Client Errors.
5xx: Server Errors.

Q23. What does 200 OK mean?
Standard success response indicating request succeeded and server returned requested payload data.

Q24. What does 201 Created mean?
Success response indicating request succeeded and a new resource was created (commonly returned by POST requests).

Q25. What does 202 Accepted mean?
Indicates request has been accepted for processing, but processing has not been completed (asynchronous tasks).

Q26. What does 204 No Content mean?
Success response indicating request succeeded, but server deliberately returns no payload body (commonly returned by DELETE requests).

Q27. What does 301 Moved Permanently vs 302 Found mean?
301: Target resource has been permanently reassigned to a new URI.
302: Target resource temporarily resides under a different URI.

Q28. What does 400 Bad Request mean?
Client error indicating server cannot process request due to invalid syntax or malformed payload body.

Q29. What is 401 Unauthorized vs 403 Forbidden?
401 Unauthorized: Client lacks valid authentication credentials.
403 Forbidden: Client is authenticated but lacks permission rights to access resource.

Q30. What does 404 Not Found mean?
Client error indicating server cannot locate requested URI resource.

Q31. What does 405 Method Not Allowed mean?
Target URI endpoint exists, but requested HTTP method is not supported for that resource.

Q32. What does 409 Conflict mean?
Indicates request conflicts with current server or database state (e.g., creating duplicate user email).

Q33. What does 422 Unprocessable Entity mean?
Request payload syntax is correct, but contains semantic validation errors (e.g., missing mandatory JSON fields).

Q34. What does 429 Too Many Requests mean?
Client has exceeded rate limit quota within a given timeframe.

Q35. What does 500 Internal Server Error mean?
Generic server error indicating unhandled exception or crash occurred while processing request.

Q36. What does 502 Bad Gateway vs 503 Service Unavailable mean?
502: Reverse proxy/gateway received invalid response from upstream server.
503: Server is temporarily down due to maintenance or overload.

Q37. What does 504 Gateway Timeout mean?
Reverse proxy/gateway timed out waiting for response from upstream server.

Q38. How should error details be formatted in REST API responses?
Return structured JSON error bodies containing clear error codes, actionable messages, and field validation details.

4. CRUD Operations & Data Serialization (JSON/XML)

Q39. What is CRUD?
Create, Read, Update, Delete - four basic functions of persistent storage mapped directly to REST HTTP methods (POST, GET, PUT/PATCH, DELETE).

Q40. What is JSON?
JavaScript Object Notation - lightweight, human-readable data-interchange format structured as key-value pairs and arrays.

Q41. Why is JSON preferred over XML in REST APIs?
Simpler syntax, smaller payload size, faster parsing speed, and native compatibility with JavaScript.

Q42. What is Data Serialization and Deserialization?
Serialization: Converting in-memory object structures into printable format strings (JSON/XML) for network transfer.
Deserialization: Parsing string payloads back into native programming object instances.

Q43. What is Content Negotiation in REST APIs?
Process where client and server negotiate response format using Accept and Content-Type HTTP headers.

Q44. What is Content-Type header?
Informs recipient about the MIME format of transmitted payload body (e.g., application/json).

Q45. What is Accept header?
Sent by client informing server about acceptable response MIME formats (e.g., Accept: application/json).

5. Authentication, Authorization & Security (JWT, OAuth)

Q46. What is the difference between Authentication and Authorization?
Authentication: Verifies identity of user/client (Who are you?).
Authorization: Verifies user permissions to access resource (What can you do?).

Q47. What is Basic Authentication?
Sends Base64-encoded username and password credentials in Authorization header (Authorization: Basic <base64>). Insecure without HTTPS.

Q48. What is Bearer Token Authentication?
Sends a signed security token inside Authorization header (Authorization: Bearer <token>).

Q49. What is JWT (JSON Web Token)?
A compact, URL-safe open standard (RFC 7519) token containing encoded Header, Payload, and Signature parts.

Q50. How does token-based authentication work in REST APIs?
Client submits login credentials, server verifies and issues signed JWT, client stores JWT and includes it in headers of subsequent requests.

Q51. What is OAuth 2.0?
An open authorization framework allowing third-party applications to obtain limited access to user resources without exposing user passwords.

Q52. What are common OAuth 2.0 Grant Types?
Authorization Code Grant, Client Credentials Grant, Implicit Grant (deprecated), Refresh Token Grant.

Q53. What is API Key Authentication?
Identifies API client applications passing unique secret keys via query parameters or custom headers (e.g., X-API-Key).

Q54. What is SSL/TLS and why is HTTPS mandatory for REST APIs?
Encrypts HTTP traffic over network, protecting credentials, tokens, and data payloads against eavesdropping and MITM attacks.

Q55. How do you mitigate Cross-Site Scripting (XSS) in REST APIs?
Sanitize user input, escape output, and transmit tokens inside HTTP-only cookies rather than LocalStorage.

Q56. How do you mitigate SQL/NoSQL Injection in REST APIs?
Use parameterized queries, ORM/ODM libraries, and strict input validation rules.

6. API Versioning & URL Naming Conventions

Q57. Why is API Versioning necessary?
Allows introducing breaking changes or structural updates without disrupting legacy client integrations.

Q58. What are common strategies for API Versioning?
1. URI Path Versioning (/api/v1/users).
2. Query Parameter Versioning (/users?version=1).
3. Custom Header Versioning (X-API-Version: 1).
4. Media Type / Accept Header Versioning (Accept: application/vnd.company.v1+json).

Q59. What are best practices for naming REST API endpoints?
Use plural nouns (/users, /orders), avoid verbs in paths, use lowercase hyphens (/order-items), and represent hierarchy (/users/12/orders).

Q60. How should filtering, sorting, and pagination be handled in URLs?
Pass options via query parameters (e.g., /users?age=25&sort=-name&page=2&limit=10).

Q61. How do you handle sub-resource relationships in endpoints?
Nest endpoints logically to reflect ownership (e.g., GET /authors/5/books retrieves books by author 5).

7. Idempotency, Caching & Performance

Q62. What is Idempotency in REST APIs?
An operation is idempotent if executing it multiple times with identical parameters leaves the server in the exact same state as executing it once.

Q63. Which HTTP methods are Idempotent?
GET, PUT, DELETE, HEAD, OPTIONS are idempotent. POST is NOT idempotent.

Q64. Which HTTP methods are Safe?
GET, HEAD, OPTIONS are safe because they do not modify server state.

Q65. Is POST idempotent? Explain why.
No. Calling POST /orders multiple times creates multiple duplicate order records on the server.

Q66. How do you make POST operations Idempotent?
Include a unique client-generated Idempotency-Key header in the request. Server records processed key and ignores duplicate requests.

Q67. What is HTTP Caching in REST APIs?
Storing response payloads at client or proxy caches to reduce server load and latency for identical subsequent requests.

Q68. What is Cache-Control header?
Specifies caching directives for responses (e.g., Cache-Control: max-age=3600, public, no-cache, no-store).

Q69. What is ETag (Entity Tag) header?
Unique validator hash string representing resource state. Client sends If-None-Match: "etag_value" to verify if resource modified (returns 304 Not Modified if unchanged).

Q70. What is Last-Modified header?
Timestamp specifying when resource was last altered. Used with If-Modified-Since header for conditional requests.

Q71. What is 304 Not Modified status code?
Indicates cached resource copy is still valid and unchanged, saving bandwidth by omitting response body.

8. Rate Limiting, CORS & Middleware

Q72. What is Rate Limiting in REST APIs?
Restricting maximum request counts an API client can execute within a specified timeframe to prevent DoS attacks and resource abuse.

Q73. What headers are returned during Rate Limiting?
X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, and 429 Too Many Requests status code.

Q74. What is CORS (Cross-Origin Resource Sharing)?
HTTP-header based security mechanism enabling servers to declare which external domain origins are permitted to load their resources in browsers.

Q75. What is a CORS Preflight Request?
An automatic HTTP OPTIONS request sent by browsers before cross-origin requests to check server CORS permissions.

Q76. What headers control CORS?
Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials.

Q77. What is API Gateway?
An architectural server component acting as a single entry point for client requests, handling routing, rate limiting, authentication, logging, and SSL termination.

Q78. What is Middleware in REST API frameworks?
Functions executing sequentially during HTTP request-response pipeline to handle tasks like logging, authentication, validation, and error processing.

9. API Documentation & Testing (Swagger, Postman)

Q79. Why is API Documentation important?
Enables third-party developers and frontend teams to understand endpoints, payloads, query options, authentication, and error codes without inspecting backend code.

Q80. What is OpenAPI Specification (OAS) / Swagger?
A standard programming-language-agnostic interface description format for documenting and designing REST APIs using YAML or JSON.

Q81. What is Postman?
A popular API platform used to construct, execute, test, document, and mock HTTP REST requests.

Q82. What is API Mocking?
Creating simulated API server endpoints returning dummy responses to allow parallel frontend development before backend services are ready.

Q83. What is Contract Testing in APIs?
Automated testing verifying that provider and consumer applications agree on contract payloads (request/response structures).

10. Advanced REST API Design & Best Practices

Q84. What is Payload Compression in REST APIs?
Compressing HTTP response payloads using algorithms like Gzip or Brotli (Content-Encoding: gzip) to save network bandwidth.

Q85. How do you handle file uploads in REST APIs?
Use multipart/form-data content type to stream files or issue pre-signed S3 upload URLs.

Q86. How do you handle bulk creation or deletion in REST APIs?
Define explicit bulk endpoints (e.g., POST /users/bulk or DELETE /users/bulk) accepting array payload IDs.

Q87. What is Payload Validation?
Validating input payload fields against schema constraints before executing business logic, returning 422 Unprocessable Entity on failure.

Q88. What is API Throttling?
Dynamically slowing down request processing speed for clients exceeding normal usage thresholds instead of outright rejecting requests.

Q89. What is Webhook in comparison to REST API?
REST API: Client polls server for updates (Pull model).
Webhook: Server pushes event notifications automatically to client URL endpoint (Push model).

Q90. What is Circuit Breaker pattern in microservice REST APIs?
Prevents cascading failures by stopping calls to failing remote endpoints, returning fallback responses until target recovers.

Q91. What is Idempotent Consumer Pattern?
Designing receiving API endpoints to safely process duplicate message deliveries without unwanted side effects.

Q92. What is Partial Response / Field Selection in REST APIs?
Allowing clients to request specific fields using query parameters (e.g., GET /users?fields=id,name) to optimize payload size.

Q93. What is Server-Sent Events (SSE)?
HTTP standard allowing servers to push real-time text stream updates continuously over a single persistent HTTP connection.

Q94. What is Long Polling?
Client opens HTTP connection, server holds response open until new data is available, then returns response and closes connection.

Q95. What is Distributed Tracing in Microservice REST APIs?
Attaching unique correlation IDs (Trace-ID) to HTTP request headers across microservice hops for end-to-end performance debugging.

Q96. How do you sanitize inputs to prevent security flaws?
Strip HTML tags, enforce strict type schemas, reject unexpected fields, and use parameterized database queries.

Q97. What is API Monitoring?
Tracking metric indicators like latency, error rates (4xx/5xx counts), throughput, and uptime to ensure API availability.

Q98. How do you handle long-running asynchronous background jobs in REST?
Return 202 Accepted status code with job ID and polling URI (GET /jobs/123) or issue Webhook callbacks upon completion.

Q99. What is Graceful Degradation in API design?
Designing APIs to return partial or default cached data when secondary non-critical backend dependencies fail.

Q100. Best practices for designing enterprise-grade REST APIs?
Use standard plural URIs, leverage standard HTTP methods and status codes, implement versioning early, secure endpoints with JWT/OAuth, mandate HTTPS, enforce rate limiting, validate inputs, document using OpenAPI, and return consistent structured error responses.

Top Companies Asking REST API Questions:
- Amazon
- Microsoft
- Google
- Meta
- Netflix
- Oracle
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master HTTP methods, safe/idempotent constraints, and status codes (2xx, 4xx, 5xx).
- Practice designing RESTful URIs for complex real-world resources.
- Learn JWT authentication flows, OAuth 2.0 grant types, and CORS setup.
- Understand API versioning, caching strategies (ETag, Cache-Control), and rate limiting.
- Gain hands-on experience constructing and testing APIs in Postman and documenting with OpenAPI/Swagger.

Conclusion:
REST APIs are the backbone of modern web, mobile, and cloud software engineering. Mastering these top 100 interview questions along with practical hands-on API design will give you complete confidence in backend and full-stack technical rounds.

Happy Learning!
Team GotPlaced
`
},
{
  id: 21,

  slug: "top-100-jwt-authentication-interview-questions-2026",

  title: "Top 100 JWT Authentication Interview Questions and Answers (2026)",

  description:
    "Prepare for JWT Authentication interviews with the Top 100 JWT Authentication Interview Questions and Answers (2026). Learn JSON Web Tokens (JWT), Authentication vs Authorization, Access Tokens, Refresh Tokens, Token-Based Authentication, Bearer Tokens, OAuth, Cookies vs Local Storage, Session Management, JWT Security, Token Expiration, Refresh Token Rotation, Express.js Authentication, Node.js JWT Implementation, Middleware, and commonly asked authentication interview questions. This complete guide is ideal for students, freshers, and experienced developers preparing for backend and full-stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/jwt-blog.jpg",

  author: "GotPlaced Team",

  category: "JWT Authentication",

  date: "17 July 2026",

  readTime: "24 min read",

  content: `Top 100 JWT Authentication Interview Questions and Answers (2026)

JWT (JSON Web Token) is one of the most widely used authentication mechanisms in modern web applications. It enables secure communication between clients and servers by transmitting digitally signed tokens. JWT is commonly used in Node.js, Express.js, React, Angular, Spring Boot, .NET, and many other backend frameworks.

Whether you're preparing for campus placements, internships, backend developer roles, or full-stack interviews, understanding JWT Authentication is essential.

Topics Covered:
- Authentication vs Authorization & Security Fundamentals
- JWT Architecture & Token Structure (Header, Payload, Signature)
- Access Tokens vs Refresh Tokens
- Token Storage (HttpOnly Cookies vs LocalStorage)
- Session-Based vs Token-Based Authentication
- JWT Verification, Signing & Algorithms (HMAC vs RSA/ECDSA)
- Express.js / Node.js JWT Implementation & Middleware
- Security Best Practices, Expiration & Refresh Token Rotation
- OAuth 2.0, SSO & Token Revocation Strategies
- Common Authentication Vulnerabilities & Mitigation

1. Authentication vs Authorization & Security Fundamentals

Q1. What is Authentication?
The process of verifying the identity of a user, system, or application (verifying "Who you are").

Q2. What is Authorization?
The process of determining the specific permissions, roles, and access rights granted to an authenticated user (verifying "What you can do").

Q3. What is JWT (JSON Web Token)?
An open standard (RFC 7519) defining a compact, URL-safe container format for securely transmitting information as a JSON object between parties.

Q4. Is JWT encrypted or signed by default?
JWTs are digitally signed by default (JWS), ensuring data integrity and authenticity. They are encoded (Base64URL) but NOT encrypted unless using JSON Web Encryption (JWE).

Q5. What is the difference between State-based and Stateless Authentication?
State-based (Session): Server creates and stores session data in memory/database and references it via session ID.
Stateless (JWT): Server issues a self-contained token containing user details; no server-side storage is required for verification.

Q6. What are the key advantages of JWT Authentication?
Stateless server verification, high scalability, cross-domain/CORS friendly, mobile app compatibility, and decoupled microservice authentication.

Q7. What are the limitations of JWT Authentication?
Cannot be easily revoked before expiration without extra tracking, payload increases network request sizes, and compromised secret keys compromise all tokens.

Q8. What is a Bearer Token?
A security token where access is granted to whoever "bears" (holds) the token, passed via the Authorization header (Authorization: Bearer <token>).

Q9. What is Base64URL Encoding?
A modification of standard Base64 encoding replacing '+' with '-' and '/' with '_', and omitting padding '=' to ensure safe transmission in HTTP URLs and headers.

Q10. What is a Claim in JWT?
A piece of information (key-value pair) asserted about a entity (user) or metadata asserted by the issuer inside the JWT payload.

2. JWT Architecture & Token Structure

Q11. What are the three parts of a JWT token string?
Header, Payload, and Signature, separated by dots (Header.Payload.Signature).

Q12. What information does the JWT Header contain?
Algorithm used for signing (alg) and token type (typ: "JWT") (e.g., { "alg": "HS256", "typ": "JWT" }).

Q13. What information does the JWT Payload contain?
User data claims and token metadata claims (e.g., sub, exp, iat, role).

Q14. What are the three types of JWT Claims?
Reserved (standard predefined claims), Public (custom user-defined claims registered globally), and Private (custom claims shared between agreeing parties).

Q15. What are common Reserved Claims in JWT Payload?
iss (Issuer), sub (Subject/User ID), aud (Audience), exp (Expiration time), nbf (Not Before), iat (Issued At), jti (JWT ID).

Q16. How is the JWT Signature generated?
By taking the Base64URL-encoded header and payload, combining them with a secret key or private key, and hashing them using the specified algorithm (e.g., HMACSHA256(base64Header + "." + base64Payload, secret)).

Q17. What is the purpose of the JWT Signature?
To verify that the sender is who it claims to be and to ensure the message payload was not tampered with during transit.

Q18. Can anyone read the contents of a standard JWT?
Yes. Because the header and payload are only Base64URL encoded, anyone can decode and inspect the data. Sensitive credentials (passwords, credit cards) should never be stored in payload.

Q19. What is JWS vs JWE?
JWS (JSON Web Signature): Payload is visible but digitally signed to guarantee integrity.
JWE (JSON Web Encryption): Payload is fully encrypted so third parties cannot read its content.

Q20. What is JWA (JSON Web Algorithms)?
The cryptographic algorithms used for signature generation or encryption within JWT specs (e.g., HS256, RS256, ES256).

3. Access Tokens vs Refresh Tokens

Q21. What is an Access Token?
A short-lived credential issued to a client used to authorize direct API requests to protected resources.

Q22. What is a Refresh Token?
A long-lived credential used exclusively to obtain a new Access Token when the current one expires, without requiring user re-authentication.

Q23. Why do we separate Access Tokens and Refresh Tokens?
Minimizes security exposure: Short-lived access tokens limit damage if stolen, while long-lived refresh tokens are stored securely and revoked easily.

Q24. What is the typical lifespan of an Access Token vs Refresh Token?
Access Token: 5 to 15 minutes.
Refresh Token: 7 days to several weeks.

Q25. Where should Refresh Tokens be stored on the client side?
Inside HttpOnly, Secure, SameSite Cookies to protect against JavaScript XSS theft.

Q26. What is Refresh Token Rotation?
A security technique where every time a Refresh Token is used to get a new Access Token, a brand new Refresh Token is issued and the old one is invalidated.

Q27. What happens if an invalidated/old Refresh Token is used during Rotation?
The server detects reuse (potential attack), invalidates the entire token family, and forces all active sessions for that user to log in again.

Q28. What is the token refresh flow?
1. Client sends request with expired Access Token.
2. Server returns 401 Unauthorized.
3. Client sends Refresh Token to /refresh endpoint.
4. Server verifies Refresh Token and issues new Access Token.

4. Token Storage (HttpOnly Cookies vs LocalStorage)

Q29. What are the security risks of storing JWT in LocalStorage/SessionStorage?
XSS (Cross-Site Scripting) attacks: Any malicious third-party JavaScript executing on the page can read storage data and steal the JWT.

Q30. What are the security risks of storing JWT in Cookies?
CSRF (Cross-Site Request Forgery) attacks: Browsers automatically attach cookies to cross-origin requests unless protected by SameSite attributes or Anti-CSRF tokens.

Q31. What is an HttpOnly Cookie?
A cookie attribute instructing the browser that the cookie cannot be accessed via client-side scripts (document.cookie), mitigating XSS token theft.

Q32. What is a Secure Cookie attribute?
A cookie attribute directing the browser to transmit the cookie strictly over encrypted HTTPS connections.

Q33. What is SameSite Cookie attribute and its options?
Controls cookie transmission during cross-site requests:
Strict: Never sent in cross-site requests.
Lax: Sent during top-level navigations (default).
None: Sent in all contexts (requires Secure flag).

Q34. What is the recommended best practice for storing JWTs in modern web apps?
Store short-lived Access Token in in-memory JavaScript variables (React/Vue state) and long-lived Refresh Token in an HttpOnly, Secure, SameSite Cookie.

Q35. How do you prevent CSRF when storing JWTs in Cookies?
Use SameSite=Strict/Lax cookies, enforce custom request headers (X-Requested-With), or implement Anti-CSRF Synchronizer Tokens.

5. Session-Based vs Token-Based Authentication

Q36. Compare Session-Based and Token-Based Authentication.
Session-Based: Stateful, server tracks active sessions in memory/database, uses Session ID cookies, hard to scale horizontally without sticky sessions/Redis.
Token-Based: Stateless, token self-contains claims, verified via cryptography, highly scalable across microservices.

Q37. How does JWT support Microservices architecture?
An API Gateway or Auth Service issues a JWT. Downstream microservices verify the token signature locally using a public key without querying a central session database.

Q38. What is Single Sign-On (SSO)?
An authentication scheme allowing a user to log in once and gain access to multiple related applications using a centralized auth server issuing JWTs.

Q39. Can JWT be used for stateful sessions?
Yes, by storing JWT IDs (jti) or revocation lists in a fast server-side cache like Redis, though it sacrifices pure statelessness.

Q40. How does mobile application authentication benefit from JWT?
Mobile apps store tokens easily in secure native storage (Keychain/Keystore) and attach them as Bearer headers, bypassing cookie limitation issues.

6. JWT Verification, Signing & Algorithms

Q41. What is the difference between Symmetric and Asymmetric signing algorithms?
Symmetric (HS256): Same shared secret key used for both signing and verifying tokens.
Asymmetric (RS256): Private key signs the token; public key verifies the token signature.

Q42. Explain HS256 (HMAC with SHA-256).
A symmetric algorithm using a single secret passphrase. Fast and simple, but all services verifying tokens must hold the secret key.

Q43. Explain RS256 (RSA Signature with SHA-256).
An asymmetric algorithm using a private/public key pair. Auth server signs with private key; resource microservices verify using public key without secret exposure risks.

Q44. What is ES256 (ECDSA with SHA-256)?
An asymmetric algorithm using Elliptic Curve Cryptography offering equivalent security to RSA with significantly smaller key sizes and token lengths.

Q45. What is the "none" algorithm vulnerability in JWT?
An exploit where attackers modify the JWT header to {"alg": "none"} and strip the signature. Insecure libraries accept the unsigned token as valid.

Q46. How do you prevent the "none" algorithm vulnerability?
Explicitly specify allowed algorithms during verification (e.g., jwt.verify(token, key, { algorithms: ['HS256'] })) and reject unsigned tokens.

Q47. What is JWKS (JSON Web Key Set)?
A JSON structure representing a set of public cryptographic keys used by resource servers to automatically fetch and verify asymmetric JWT signatures.

Q48. How does key rotation work in JWKS?
Auth servers publish public keys at an endpoint (/.well-known/jwks.json) tagged with Key IDs (kid). When keys rotate, resource servers fetch new public keys based on the kid in token headers.

Q49. What happens if a server attempts to verify a token with an expired exp claim?
The verification library rejects the token and throws an "TokenExpiredError" or "jwt expired" exception.

Q50. How do you handle Clock Skew during token verification?
Configure a small tolerance window (clockTolerance option, e.g., 5 seconds) to account for slight system time discrepancies between auth and API servers.

7. Express.js / Node.js JWT Implementation & Middleware

Q51. What library is commonly used for JWT in Node.js?
jsonwebtoken (npm package).

Q52. How do you sign a JWT in Node.js using jsonwebtoken?
const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn: '15m' });

Q53. How do you verify a JWT in Node.js?
jwt.verify(token, secretKey, (err, decoded) => { if (err) handle(); else req.user = decoded; });

Q54. How to implement an Authentication Middleware in Express.js?
Extract token from Authorization header (req.headers.authorization.split(' ')[1]), verify with jwt.verify(), attach decoded user to req.user, and call next().

Q55. How do you implement Role-Based Access Control (RBAC) middleware with JWT?
Check if req.user.role matches allowed roles inside a secondary authorization middleware function after token verification.

Q56. What is express-jwt package?
A pre-built Express middleware that automatically validates JWTs on incoming requests and attaches the user payload to req.auth.

Q57. How do you pass JWT from client to server?
1. Header: Authorization: Bearer <token>
2. Cookie: Set-Cookie: token=<token>; HttpOnly
3. Query Parameter (discouraged): /api/data?token=<token>

Q58. Why is sending JWT in Query Parameters discouraged?
Query parameters are logged in server access logs, browser history, and proxy servers, exposing tokens to leak risks.

8. Security Best Practices & Token Revocation

Q59. How do you revoke an active JWT before its expiration date?
1. Token Blacklisting (store revoked jti in Redis until exp).
2. Token Whitelisting (store active tokens in DB).
3. User Password/Key Versioning (invalidate all tokens on password change).

Q60. What is Token Blacklisting using Redis?
When a user logs out, store the token's unique ID (jti) in Redis with a TTL equal to the token's remaining lifespan. Check blacklist during verification.

Q61. What is User Versioning / Token Versioning?
Include a tokenVersion field in user DB record and JWT payload. When password resets, increment DB version. Reject tokens where payload version != DB version.

Q62. What is the danger of using weak secret keys for HS256?
Attackers can brute-force or dictionary-attack secret keys offline to forge valid arbitrary JWTs.

Q63. What is the recommended secret key length for HS256?
At least 256 bits (32 random bytes/characters) generated using cryptographically secure random number generators (crypto.randomBytes(32)).

Q64. What is Algorithm Confusion Attack in JWT?
An attack where an adversary takes a server's RS256 public key and uses it as a secret key in HS256 algorithm to forge valid tokens.

Q65. How do you prevent Algorithm Confusion Attacks?
Hardcode expected verification algorithm types explicitly in verification calls and never trust algorithm headers dynamically.

Q66. Should sensitive PII (Personally Identifiable Information) be stored in JWT payloads?
No. Standard JWTs are unencrypted Base64URL strings readable by anyone. Do not store passwords, SSNs, credit cards, or emails if unencrypted.

Q67. What is nbf (Not Before) claim used for?
Defines the exact time before which the token MUST NOT be accepted for processing.

Q68. What is iat (Issued At) claim used for?
Identifies the exact creation time of the token, useful for calculating token age or revoking tokens issued before a password change.

Q69. What is jti (JWT ID) claim used for?
Provides a unique identifier for the token to prevent replay attacks and facilitate blacklisting.

Q70. How do you handle logout in a stateless JWT setup?
Delete Access Token from client memory/state and clear the HttpOnly Refresh Token cookie via res.clearCookie(). Optionally blacklist token on backend.

9. OAuth 2.0, SSO & Token Revocation Strategies

Q71. What is OAuth 2.0?
An industry-standard authorization framework enabling third-party services to access user resources without sharing user passwords.

Q72. What is OpenID Connect (OIDC)?
An identity layer built on top of OAuth 2.0 that provides authentication using ID Tokens (JWTs) to return user profile information.

Q73. What is an ID Token vs Access Token in OIDC?
ID Token: JWT containing user identity details for client consumption.
Access Token: Token used by client to authorize API requests to resource servers.

Q74. What is PKCE (Proof Key for Code Exchange) in OAuth 2.0?
An extension for Authorization Code flow preventing authorization code interception attacks on public mobile/SPA apps.

Q75. What is the role of State parameter in OAuth 2.0?
A random CSRF token sent during authorization requests and verified upon callback to prevent CSRF attacks.

10. Common Authentication Vulnerabilities & Mitigation

Q76. What is Token Replay Attack?
An attacker intercepts a valid token and retransmits it to make unauthorized requests. Mitigated via short expirations, HTTPS, and jti checks.

Q77. What is Cross-Site Scripting (XSS) in relation to Auth?
Injecting malicious scripts to read client memory or storage. Mitigated via CSP headers, input sanitization, and HttpOnly cookies.

Q78. What is Cross-Site Request Forgery (CSRF) in relation to Auth?
Tricking user browsers into issuing unauthorized commands to an authenticated site. Mitigated via SameSite cookie flags and Anti-CSRF tokens.

Q79. What is Man-In-The-Middle (MITM) attack on JWT?
Interference during network transit to steal or tamper with tokens. Mitigated via mandatory HTTPS (TLS/SSL).

Q80. What is Session Fixation?
An attack where an adversary sets a target's session identifier before authentication. Prevented in JWT by issuing new fresh tokens upon login.

Q81. What is Brute-Force Attack on Login Endpoints?
Repeatedly submitting login attempts to guess passwords. Mitigated via rate limiting (express-rate-limit) and account lockouts.

Q82. How do you invalidate all active sessions for a single user simultaneously?
Increment a tokenVersion field in user DB record or change user's password salt hash, instantly invalidating all existing tokens on verification.

Q83. How do you handle JWT verification in Server-Side Rendering (SSR) frameworks like Next.js?
Extract JWT from request cookies inside middleware or server context (getServerSideProps) and verify before rendering pages.

Q84. What is Content Security Policy (CSP) and how does it protect auth tokens?
An HTTP response header restricting scripts allowed to execute in browser, preventing XSS-based token theft.

Q85. What is the scope claim in OAuth/JWT?
Specifies granular resource access boundaries granted by token (e.g., scope: "read:users write:orders").

Q86. What is Token Introspection?
A mechanism (RFC 7662) allowing resource servers to query an OAuth authorization server to determine token active status and metadata.

Q87. Difference between Session Expiration and Token Expiration?
Session Expiration: Managed on server side by destroying session record.
Token Expiration: Managed cryptographically by checking embedded exp timestamp claim inside payload.

Q88. How to test JWT security during code reviews?
Check secret key strength, verify algorithm enforcement, confirm short access token TTLs, verify HttpOnly cookie flags, and test revocation/refresh logic.

Q89. What is aud (Audience) claim validation?
Verifies that the target resource server processing the token matches the intended audience specified when token was issued.

Q90. What is iss (Issuer) claim validation?
Verifies that the token was issued by a trusted authorization server domain.

Q91. What is a Passwordless Authentication flow using JWT?
User enters email -> Server sends magic link with single-use signed JWT -> User clicks link -> Server verifies token and issues login session.

Q92. How to pass tokens securely to WebSockets?
Pass token during initial HTTP handshake request via query string or headers, verify before upgrading socket connection.

Q93. What is CORS preflight header requirement for Authorization header?
Sending custom Authorization: Bearer headers triggers browser preflight OPTIONS requests requiring Access-Control-Allow-Headers: Authorization.

Q94. Why should you avoid storing JWTs in global variables in SPAs?
Page refreshes wipe global variable state, logging users out unless backed by persistent storage or refresh token cookies.

Q95. What is Silent Refresh in SPAs?
Automatically issuing a request to refresh token endpoint in background before current Access Token expires to maintain seamless login.

Q96. What is JWT decoding vs verification?
Decoding: Parsing Base64URL string to read JSON payload (no key needed).
Verification: Cryptographically checking signature validity against secret/public key and validating expiration/claims.

Q97. What happens if secret key is changed on backend server?
All existing issued symmetric JWTs immediately become invalid and fail signature verification, logging out all users.

Q98. How do you handle environment-specific secret keys?
Store secret keys in environment variables (.env files) managed per deployment environment (Dev, Staging, Prod) and keep out of source control.

Q99. What is Multi-Factor Authentication (MFA) step in JWT issuing?
User validates password -> Auth server issues temporary partial JWT (mfa_required) -> User completes TOTP code -> Auth server issues full Access/Refresh Tokens.

Q100. Best practices for secure JWT implementation?
Use asymmetric RS256 for microservices or strong 256-bit secrets for HS256, keep Access Tokens short-lived (5-15 mins), store Refresh Tokens in HttpOnly/Secure/SameSite cookies, implement Refresh Token Rotation, enforce strict algorithm verification, and omit sensitive PII from payloads.

Top Companies Asking JWT Authentication Questions:
- Amazon
- Microsoft
- Google
- Meta
- Netflix
- Oracle
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master JWT structure (Header, Payload, Signature) and claims (exp, iat, sub).
- Understand short-lived Access Tokens vs long-lived Refresh Tokens and Rotation.
- Learn storage trade-offs (HttpOnly Cookies vs LocalStorage) for XSS/CSRF security.
- Practice building Express.js authentication middleware and JWT verification.
- Understand symmetric (HS256) vs asymmetric (RS256) signing algorithms and JWKS.

Conclusion:
JWT Authentication is a vital pillar of modern web, mobile, and microservice security. Mastering these top 100 interview questions along with hands-on authentication setup will help you clear backend and full-stack technical rounds with complete confidence.

Happy Learning!
Team GotPlaced
`
},
{
  id: 22,

  slug: "top-100-firebase-interview-questions-2026",

  title: "Top 100 Firebase Interview Questions and Answers (2026)",

  description:
    "Prepare for Firebase interviews with the Top 100 Firebase Interview Questions and Answers (2026). Learn Firebase Fundamentals, Firebase Authentication, Cloud Firestore, Realtime Database, Firebase Storage, Cloud Functions, Hosting, Firebase Security Rules, Push Notifications, Firebase Cloud Messaging (FCM), Analytics, Performance Monitoring, Firebase SDK, Offline Persistence, and commonly asked Firebase interview questions. This complete guide is perfect for students, freshers, and experienced developers preparing for frontend, backend, mobile, and full-stack developer interviews at TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, IBM, Amazon, Microsoft, Google, Adobe, Oracle, Flipkart, Zoho, and other leading product and service-based companies.",

  image: "/firebase-blog.jpg",

  author: "GotPlaced Team",

  category: "Firebase",

  date: "17 July 2026",

  readTime: "25 min read",

  content: `Top 100 Firebase Interview Questions and Answers (2026)

Firebase is Google's Backend-as-a-Service (BaaS) platform that helps developers build web and mobile applications faster without managing complex backend server infrastructure. It provides core services such as Authentication, Cloud Firestore, Realtime Database, Cloud Storage, Hosting, Cloud Functions, Crashlytics, Analytics, and Push Notifications.

Firebase is widely used in startups, enterprise production applications, and modern full-stack projects, making it one of the most frequently asked technologies in frontend, backend, and mobile development interviews.

Topics Covered:
- Introduction to Firebase & BaaS Architecture
- Firebase Authentication & OAuth Providers
- Cloud Firestore (NoSQL Document Database)
- Realtime Database (JSON Tree Architecture)
- Firestore vs Realtime Database Comparison
- Firebase Security Rules & Rules Engine
- Firebase Cloud Storage & File Handling
- Firebase Hosting & Deployment
- Cloud Functions for Firebase (Serverless)
- Firebase Cloud Messaging (FCM), Analytics & Performance

1. Introduction to Firebase & BaaS Architecture

Q1. What is Firebase?
Firebase is Google's Backend-as-a-Service (BaaS) platform providing cloud services like authentication, databases, storage, hosting, serverless functions, and analytics.

Q2. What is Backend-as-a-Service (BaaS)?
A cloud computing model where developers outsource server-side infrastructure tasks (databases, auth, file storage) to third-party services to focus entirely on frontend client development.

Q3. What are the key products offered in Firebase?
Authentication, Cloud Firestore, Realtime Database, Cloud Storage, Hosting, Cloud Functions, Firebase Cloud Messaging (FCM), Crashlytics, Remote Config, and Performance Monitoring.

Q4. What are the advantages of using Firebase?
Fast development cycle, real-time data sync, built-in security rules, Google cloud infrastructure scalability, cross-platform SDKs, and offline persistence.

Q5. What are the limitations of Firebase?
Vendor lock-in, limited complex SQL querying/joins, unpredictable pricing scaling on high usage, and limited regional database hosting choices compared to full cloud platforms.

Q6. What is the Firebase Admin SDK vs Firebase Client SDK?
Client SDK: Used on frontend apps (Web, iOS, Android) subject to Security Rules restrictions.
Admin SDK: Elevated privileged SDK used on backend servers bypassing Security Rules with full access.

Q7. How do you initialize Firebase in a Web application?
Import initializeApp from 'firebase/app' and pass the firebaseConfig configuration object containing apiKey, authDomain, projectId, and storageBucket.

Q8. What is the Firebase CLI used for?
Command-line interface used to manage, test locally using emulators, and deploy Firebase projects (Hosting, Functions, Security Rules).

Q9. What is Firebase Local Emulator Suite?
A set of local development tools that replicate Firebase products on your local machine to test code and security rules without hitting cloud resources.

Q10. What are Firebase pricing plans?
Spark Plan (Free tier with limits) and Blaze Plan (Pay-as-you-go based on consumption).

2. Firebase Authentication & OAuth Providers

Q11. What is Firebase Authentication?
A comprehensive identity service providing ready-to-use SDKs and backend services to authenticate users using passwords, phone numbers, and OAuth providers.

Q12. What sign-in methods are supported by Firebase Auth?
Email/Password, Phone/SMS, Google, Facebook, Apple, GitHub, Twitter, Microsoft, Yahoo, and Custom Auth Tokens.

Q13. How does Email/Password Authentication work in Firebase?
Calls createUserWithEmailAndPassword() to register and signInWithEmailAndPassword() to authenticate, returning a UserCredential object.

Q14. What is a Firebase ID Token?
A short-lived, cryptographically signed JSON Web Token (JWT) issued by Firebase Auth valid for 1 hour, used to authenticate requests on client and backend servers.

Q15. How do you handle authentication state changes in Firebase?
Using onAuthStateChanged(auth, (user) => { ... }) listener to track when a user signs in, signs out, or token changes.

Q16. How do you implement OAuth Sign-In (e.g., Google) in Firebase?
Initialize GoogleAuthProvider(), then call signInWithPopup() or signInWithRedirect().

Q17. What is Custom Authentication in Firebase?
Allows developers to authenticate users using an existing legacy auth system by generating custom signed JWTs on their server using Admin SDK.

Q18. What is Anonymous Authentication in Firebase?
Allows users to create temporary anonymous accounts (signInAnonymously()) to save data before formally registering an email/password.

Q19. How do you send a Password Reset Email in Firebase?
Using sendPasswordResetEmail(auth, email) method.

Q20. How do you link multiple Auth Providers to a single user account?
Using linkWithPopup() or linkWithCredential() to merge credentials under a single user UID.

3. Cloud Firestore (NoSQL Document Database)

Q21. What is Cloud Firestore?
Firebase's flexible, scalable NoSQL document-oriented cloud database designed for mobile, web, and server development.

Q22. What is the data structure of Cloud Firestore?
Data is organized into Collections, which contain Documents, which can contain fields and nested Subcollections.

Q23. What are the key data types supported in Firestore documents?
String, Number, Boolean, Array, Map (object), Timestamp, Geopoint, Reference, Null, and Bytes.

Q24. What is the maximum size of a single Firestore document?
1 Megabyte (1MB).

Q25. How do you add data to a Firestore document?
setDoc(docRef, data) (overwrites or creates with custom ID) or addDoc(collectionRef, data) (auto-generates document ID).

Q26. How do you update data in Firestore without overwriting the entire document?
Using updateDoc(docRef, { fieldName: newValue }) or setDoc(docRef, data, { merge: true }).

Q27. How do you delete a document or specific field in Firestore?
Delete document: deleteDoc(docRef).
Delete field: updateDoc(docRef, { fieldName: deleteField() }).

Q28. How do you listen to real-time updates in Firestore?
Using onSnapshot(docRef or query, (snapshot) => { ... }) listener.

Q29. What is a Batch Write in Firestore?
Combining multiple write, update, or delete operations into a single atomic write executing up to 500 documents simultaneously.

Q30. What is a Firestore Transaction?
A set of read and write operations that execute atomically with strict consistency; if any read document changes during execution, Firestore retries the transaction.

4. Realtime Database (JSON Tree Architecture)

Q31. What is Firebase Realtime Database?
Firebase's original database - a cloud-hosted NoSQL database where data is stored as one large JSON tree.

Q32. How is data structured in Realtime Database?
As a giant nested JSON object tree where keys act as path locations (e.g., /users/$uid/name).

Q33. How do you write data in Realtime Database?
set() (writes/overwrites at path), push() (appends to list with auto-generated key), and update() (updates specific paths).

Q34. How do you read real-time data in Realtime Database?
Attach listeners using onValue(), onChildAdded(), or onChildChanged() on database references.

Q35. What is the presence system in Realtime Database?
A feature tracking client connection status using special location .info/connected and onDisconnect() handlers.

5. Firestore vs Realtime Database Comparison

Q36. Compare Cloud Firestore and Realtime Database.
Firestore: Document/Collection model, advanced querying/indexing, scales up to millions of concurrent users, subcollection depth.
Realtime DB: Single JSON tree, basic querying/indexing, requires sharding beyond 200,000 concurrent connections, low latency.

Q37. How do queries differ between Firestore and Realtime Database?
Firestore: Multi-field filtering, sorting, and automatic indexing.
Realtime DB: Queries can sort or filter on only a single property at a time.

Q38. Which database is better for large-scale production applications?
Cloud Firestore, due to superior scalability, richer querying capabilities, and structured data model.

6. Firebase Security Rules & Rules Engine

Q39. What are Firebase Security Rules?
Declarative access control rules defining authorization logic, data validation, and read/write permissions for Firestore, Realtime DB, and Storage.

Q40. Where do Security Rules execute?
On Firebase backend cloud servers before reading or writing data, making client-side security tampering impossible.

Q41. What is the basic syntax structure of Firestore Security Rules?
rules_version = '2'; service cloud.firestore { match /databases/{database}/documents { match /{document=**} { allow read, write: if condition; } } }

Q42. What is the difference between read and write operations in Security Rules?
read is divided into get (single document) and list (queries).
write is divided into create, update, and delete.

Q43. How do you verify if a request is authenticated in Security Rules?
if request.auth != null;

Q44. How do you restrict user access to their own data in Security Rules?
if request.auth.uid == userId;

Q45. What is request.resource vs resource in Security Rules?
resource: Existing document data currently stored in database before update.
request.resource: Incoming document data being submitted in the request.

Q46. How do you validate incoming field types in Security Rules?
if request.resource.data.age is int && request.resource.data.age >= 18;

Q47. Can Security Rules read other Firestore documents during evaluation?
Yes, using get() or exists() functions (e.g., get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true).

Q48. What is the security impact of setting rules to allow read, write: if true;?
It opens the entire database to the public, allowing anyone on the internet to read, modify, or delete all data.

Q49. How do you test Security Rules locally?
Using the Firebase Emulator Suite or the Rules Playground in Firebase Console.

Q50. How do Security Rules work with queries in Firestore?
Firestore security rules act as filters: a query fails completely if there is any possibility it could return documents violating security rules.

7. Firebase Cloud Storage & File Handling

Q51. What is Firebase Cloud Storage?
A powerful, simple, and cost-effective object storage service designed to store user-generated content like images, audio, and videos.

Q52. How do you upload a file to Firebase Storage?
Create a reference using ref(storage, 'path/filename.jpg'), then call uploadBytes() or uploadBytesResumable().

Q53. How do you monitor file upload progress in Firebase Storage?
Using uploadBytesResumable() task state change listeners tracking bytesTransferred and totalBytes.

Q54. How do you get a public download URL for an uploaded file?
Using getDownloadURL(storageRef) method.

Q55. How do you delete a file in Firebase Storage?
Using deleteObject(storageRef) method.

Q56. How are files protected in Firebase Storage?
Using Storage Security Rules matching storage paths (match /b/{bucket}/o { ... }).

8. Firebase Hosting & Deployment

Q57. What is Firebase Hosting?
A fast, secure, production-grade web hosting service for static assets, single-page web applications, and dynamic microservices.

Q58. What are key features of Firebase Hosting?
Free SSL certificates, global CDN caching, custom domain support, one-click rollbacks, and GitHub Actions integration.

Q59. How do you deploy a web application to Firebase Hosting?
Run firebase login, firebase init hosting, build project, and execute firebase deploy.

Q60. What is firebase.json file?
Configuration file specifying build public directory, rewrites, redirects, headers, and hosting rules.

Q61. How do you set up single-page application (SPA) rewrites in firebase.json?
Add "rewrites": [{ "source": "**", "destination": "/index.html" }].

9. Cloud Functions for Firebase (Serverless)

Q62. What are Cloud Functions for Firebase?
A serverless framework allowing you to run backend Node.js code automatically in response to events triggered by Firebase components or HTTP requests.

Q63. What event triggers can invoke Cloud Functions?
HTTP requests (onRequest/onCall), Firestore changes (onCreate, onUpdate, onDelete), Auth events, Storage uploads, and Analytics events.

Q64. What is Callable Cloud Functions (onCall)?
Specialized HTTP functions that automatically handle client authentication tokens, CORS headers, and JSON serialization.

Q65. How do you handle background database triggers in Cloud Functions?
exports.onUserCreated = functions.firestore.document('users/{userId}').onCreate((snap, context) => { ... });

Q66. What is Cold Start in Cloud Functions?
Delay occurring when an idle function instance initializes new container instances upon receiving a request.

Q67. How do you set environment secrets in Cloud Functions?
Using Firebase Secrets Manager or defineSecret() in v2 Cloud Functions.

10. Firebase Cloud Messaging (FCM), Analytics & Performance

Q68. What is Firebase Cloud Messaging (FCM)?
A cross-platform messaging solution allowing you to send push notifications and data messages reliably to Android, iOS, and Web.

Q69. What is the difference between Notification Messages and Data Messages in FCM?
Notification Messages: Handled automatically by system display UI when app is in background.
Data Messages: Handled explicitly by client app code in both foreground and background.

Q70. What is an FCM Registration Token?
A unique device token generated on client app installation used to address notification messages to specific devices.

Q71. What is Firebase Analytics?
A free app measurement solution providing insight into app usage, user engagement, and custom event tracking.

Q72. What are Custom Events in Firebase Analytics?
User actions logged programmatically using logEvent(analytics, 'event_name', { params }) to track user behavior.

Q73. What is Firebase Performance Monitoring?
A service giving insights into performance characteristics of iOS, Android, and Web apps (network latency, page load time, screen rendering).

Q74. What is Firebase Crashlytics?
A lightweight real-time crash reporter helping track, prioritize, and fix stability issues in mobile apps.

Q75. What is Firebase Remote Config?
A cloud service allowing developers to change app features, layout, and behavior dynamically without publishing new app versions.

Q76. How do you enable Offline Persistence in Cloud Firestore?
Calling enableIndexedDbPersistence(db) for web apps (enabled by default on mobile SDKs).

Q77. What happens when a device is offline while using Firestore?
Firestore writes changes to a local cache; when connection is restored, local changes sync automatically with cloud servers.

Q78. What is Compound Index in Firestore?
An index indexing multiple document fields required when executing complex queries combining range operators and equality filters.

Q79. How does Firestore inform you if a query requires an index?
Returns a console query error containing a direct link to generate the required index in Firebase Console automatically.

Q80. What is limit() and startAfter() used for in Firestore queries?
Implementing cursor-based pagination over dataset collections.

Q81. What is increment() and arrayUnion() field transforms in Firestore?
Special atomic field update operations to increment numerical fields or add non-duplicate array items without reading document state first.

Q82. How do you perform a GeoPoint query in Firestore?
Store latitude/longitude GeoPoints and query using geohashing libraries (Geofire).

Q83. What is Security Rules request.auth.token claims?
Custom token claims added via Admin SDK accessible inside Security Rules for fine-grained authorization (e.g., request.auth.token.admin == true).

Q84. How do you restrict file extensions in Storage Security Rules?
if request.resource.contentType.matches('image/.*');

Q85. What is Firebase Dynamic Links (Deprecated/Migrated)?
Smart URLs redirecting users to specific screens inside native mobile apps or falling back to web browser app stores.

Q86. What is Firebase App Check?
A security layer protecting backend resources (Firestore, Realtime DB, Storage) from abuse by attesting that requests originate from authentic app instances.

Q87. What attestation providers does App Check use?
reCAPTCHA v3/Enterprise (Web), SafetyNet/Play Integrity (Android), App Attest/DeviceCheck (iOS).

Q88. How do you implement Pagination in Firestore?
Use query(collectionRef, orderBy('createdAt'), startAfter(lastVisibleDoc), limit(pageSize)).

Q89. What is collectionGroup query in Firestore?
Queries across all subcollections sharing the same ID name across different parent documents.

Q90. What is Security Rules match statement wildcards?
Single segment wildcard ({docId}) or recursive multi-segment wildcard ({document=**}).

Q91. What is the execution limit of a single Cloud Function?
Default 1 minute (configurable up to 9 minutes for v1 / 60 minutes for v2 background functions).

Q92. How do you schedule periodic tasks in Cloud Functions?
Using pubsub.schedule('every 5 minutes') or v2 onSchedule() cron triggers.

Q93. What is Firebase Security Rules evaluation cost?
Security rules evaluate instantly without costing database read charges, except when using get() or exists() calls which incur 1 document read charge.

Q94. How do you back up Firestore databases?
Automated scheduled exports using gcloud CLI or Cloud Functions to Google Cloud Storage buckets.

Q95. What is Firebase Extensions?
Pre-packaged serverless solutions designed to automate common backend tasks (e.g., resize images, trigger emails, stripe payments).

Q96. What is Firebase A/B Testing?
A feature integrated with Remote Config and Analytics allowing developers to run product and marketing experiments.

Q97. How to handle multi-environment setups (Dev, Staging, Prod) in Firebase?
Create separate, isolated Firebase projects for each environment and switch configurations during build process.

Q98. What is CORS configuration in Firebase Storage?
JSON configuration uploaded via gsutil tool defining allowed HTTP origins and methods accessing storage buckets directly from web apps.

Q99. What is atomic update in Firestore?
Ensuring multiple modifications complete successfully together or fail completely without leaving partial data states (Transactions and Batches).

Q100. Best practices for mastering Firebase in production?
Enforce strict Security Rules early, structure Firestore collections for shallow queries, leverage indexes properly, monitor active Blaze plan usage limits, isolate environments, enable App Check, and use Cloud Functions for sensitive business logic.

Top Companies Asking Firebase Questions:
- Google
- Amazon
- Microsoft
- Adobe
- Oracle
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant

Preparation Tips:
- Master Firebase Auth flows (Email, Google OAuth, ID token handling).
- Understand Cloud Firestore document/collection layout and queries.
- Thoroughly practice writing declarative Security Rules for Firestore and Storage.
- Learn differences between Firestore and Realtime Database.
- Build projects integrating Cloud Storage, Hosting, and Cloud Functions.

Conclusion:
Firebase is an essential Backend-as-a-Service ecosystem for modern full-stack, mobile, and web software engineering. Mastering these 100 core Firebase interview questions along with practical hands-on app building will ensure complete confidence in technical interviews.

Happy Learning!
Team GotPlaced
`
},
{
  id: 23,

  slug: "top-100-system-design-interview-questions-2026",

  title: "Top 100 System Design Interview Questions and Answers (2026)",

  description:
    "Prepare for System Design interviews with the Top 100 System Design Interview Questions and Answers (2026). Learn System Design Fundamentals, Scalability, Load Balancing, Caching, Databases, CAP Theorem, Microservices, Monolithic Architecture, Message Queues, API Gateway, Reverse Proxy, CDN, Rate Limiting, Database Sharding, Replication, Consistency Models, High Availability, Fault Tolerance, and commonly asked System Design interview questions. This complete guide is ideal for students, freshers, and experienced software engineers preparing for interviews at Google, Microsoft, Amazon, Meta, Netflix, Adobe, Oracle, Uber, Flipkart, Walmart Global Tech, TCS, Infosys, Accenture, Cognizant, Capgemini, and other leading companies.",

  image: "/system-design-blog.jpg",

  author: "GotPlaced Team",

  category: "System Design",

  date: "17 July 2026",

  readTime: "30 min read",

  content: `Top 100 System Design Interview Questions and Answers (2026)

System Design is one of the most important topics for Software Engineers, Backend Developers, and Full Stack Developers. It focuses on designing scalable, reliable, secure, and high-performance systems capable of handling millions of users.

Whether you're preparing for product-based companies, startups, or service-based organizations, understanding System Design fundamentals is becoming increasingly important.

Topics Covered:
- System Design Fundamentals & Core Metrics
- Scalability & Load Balancing
- Caching Strategies & Content Delivery Networks (CDN)
- Database Architecture, SQL vs NoSQL, Sharding & Replication
- CAP Theorem, PACELC & Consistency Models
- Microservices vs Monolith Architecture & API Gateway
- Asynchronous Messaging, Queues & Event-Driven Systems
- Rate Limiting, Security & High Availability
- Object Storage, File Systems & Distributed Locks
- Real-World System Design Case Studies & Trade-Offs

1. System Design Fundamentals & Core Metrics

Q1. What is System Design?
System Design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements while handling scale, reliability, and security.

Q2. What is the difference between Functional and Non-Functional Requirements?
Functional Requirements: Core features and behaviors the system must perform (e.g., user can log in, post a tweet).
Non-Functional Requirements: Quality metrics and constraints under which the system operates (e.g., latency < 200ms, 99.99% availability, scalability).

Q3. What is High Availability (HA) and "Nines" of Availability?
A measure of system uptime over a given period.
99.9% (Three Nines): ~8.76 hours downtime/year.
99.99% (Four Nines): ~52.6 minutes downtime/year.
99.999% (Five Nines): ~5.26 minutes downtime/year.

Q4. What is Reliability vs Fault Tolerance?
Reliability: Probability that a system will perform correctly without failure over a period of time.
Fault Tolerance: Ability of a system to continue operating without interruption even when individual components fail.

Q5. What is Throughput vs Latency?
Throughput: Number of operations/requests a system can process per unit of time (e.g., RPS - Requests Per Second).
Latency: Time taken to process a single request from client invocation to response delivery.

Q6. What is SLA, SLO, and SLI?
SLA (Service Level Agreement): Business contract defining guaranteed performance standards and penalties for breach.
SLO (Service Level Objective): Target goal within an SLA (e.g., 99.9% uptime target).
SLI (Service Level Indicator): Actual measured performance metric (e.g., real-time measured uptime).

Q7. What is Single Point of Failure (SPOF)?
A critical component in a system architecture whose failure will cause the entire system to stop functioning.

Q8. How do you eliminate Single Points of Failure?
By adding component redundancy across infrastructure layers (multiple servers, database replication, multi-AZ deployment) and introducing load balancers.

Q9. What is Back-of-the-Envelope Estimation?
A quick rough calculation technique used in system design interviews to estimate resource constraints (bandwidth, storage, memory, RPS) before building architecture.

Q10. How do you calculate storage requirements for 10 million daily active users posting 1 image (200KB) each?
Daily Storage = 10,000,000 users * 200 KB = 2,000,000,000 KB = 2 TB/day. Annual Storage = 2 TB * 365 = 730 TB/year.

2. Scalability & Load Balancing

Q11. What is Scalability?
The capacity of a system to adapt seamlessly to growing workloads by expanding its resource capacity.

Q12. What is Vertical Scaling (Scale-Up) vs Horizontal Scaling (Scale-Out)?
Vertical Scaling: Increasing capacity of an existing single machine (adding CPU, RAM, SSD).
Horizontal Scaling: Adding more physical or virtual servers to distribute processing load across a pool.

Q13. What are the pros and cons of Vertical vs Horizontal Scaling?
Vertical: Simple management, no network overhead; limited hardware ceiling, single point of failure.
Horizontal: Infinite scaling capability, high fault tolerance; complex distribution, network latency, data consistency challenges.

Q14. What is a Load Balancer?
A networking device or software that distributes incoming network traffic across multiple server nodes to optimize resource usage and prevent server overload.

Q15. What are the common Load Balancing Algorithms?
Round Robin, Weighted Round Robin, Least Connections, Least Response Time, IP Hash, and Random.

Q16. Explain Layer 4 (L4) vs Layer 7 (L7) Load Balancing.
Layer 4: Operates at Transport Layer (TCP/UDP); routes packets based on IP address and port without inspecting payload (faster).
Layer 7: Operates at Application Layer (HTTP/HTTPS); inspects request headers, cookies, and URIs to make intelligent routing decisions (more flexible).

Q17. What is Reverse Proxy vs Forward Proxy?
Forward Proxy: Sits in front of client applications to control/cache outbound internet access and mask client IPs.
Reverse Proxy: Sits in front of backend servers to protect, load balance, encrypt (SSL termination), and route inbound client requests.

Q18. What is DNS Load Balancing?
Configuring multiple IP addresses for a single domain name in DNS, causing DNS servers to return different server IPs to clients using Round Robin.

Q19. What is Consistent Hashing?
A distributed hashing mechanism where both servers and keys are mapped onto a logical circular hash ring. Adding or removing a node reallocates only K/N keys, minimizing cache misses.

Q20. Why is Consistent Hashing critical in distributed caches and databases?
Prevents massive cache invalidation or complete data re-shuffling when nodes are added or removed from a distributed cluster.

3. Caching Strategies & Content Delivery Networks (CDN)

Q21. What is Caching?
Storing copies of frequently requested data in a fast, temporary storage layer (e.g., RAM) to accelerate data retrieval and reduce database load.

Q22. Where can Caching be applied in System Architecture?
Client-Side (Browser cache), Content Delivery Network (CDN), Reverse Proxy (Nginx), Application Layer (In-memory objects), Database Layer (Redis/Memcached).

Q23. Explain Cache-Aside (Lazy Loading) pattern.
Application checks cache first. If cache miss occurs, application fetches data from database, writes it to cache, and returns it to client.

Q24. Explain Write-Through Caching pattern.
Application writes data to cache and database simultaneously. Cache guarantees up-to-date data, but write latency increases.

Q25. Explain Write-Back (Write-Behind) Caching pattern.
Application writes data directly to cache, which immediately acknowledges client. Cache asynchronously flushes updates to database in batches (fast writes, risk of data loss on crash).

Q26. Explain Read-Through Caching pattern.
Application queries cache directly. If a miss occurs, the cache library autonomously reads missing data from database, populates cache, and returns it.

Q27. What are popular Cache Eviction Policies?
LRU (Least Recently Used), LFU (Least Frequently Used), FIFO (First In First Out), and TTL (Time To Live expiration).

Q28. What is Cache Stampede (Thundering Herd) and how to prevent it?
Occurs when multiple concurrent requests experience a cache miss for the same key simultaneously, overwhelming the underlying database. Prevented using mutex locks, probabilistic early expiration, or request collapsing.

Q29. What is Cache Penetration and how to prevent it?
Occurs when queries for non-existent keys bypass cache repeatedly to hit database. Prevented by caching null/default results or using Bloom Filters.

Q30. What is a CDN (Content Delivery Network)?
A geographically distributed network of edge servers that caches static content (images, JS, CSS, videos) close to end users to reduce latency and origin server load.

4. Database Architecture, SQL vs NoSQL, Sharding & Replication

Q31. Compare SQL (Relational) vs NoSQL (Non-Relational) Databases.
SQL: Structured tables, fixed schemas, ACID transactions, vertical scaling focus, standard SQL queries (e.g., PostgreSQL, MySQL).
NoSQL: Flexible dynamic schemas (documents, key-value, column-family, graphs), BASE consistency, horizontal scaling focus (e.g., MongoDB, Cassandra, Redis).

Q32. When should you choose SQL over NoSQL?
When structured relationships, complex join queries, multi-document ACID transactions, and strict data consistency are required (e.g., banking systems).

Q33. When should you choose NoSQL over SQL?
When handling massive unstructured/semi-structured data volumes, requiring dynamic schemas, high write throughput, and seamless horizontal scaling (e.g., social media feeds, IoT metrics).

Q34. What is Database Replication?
Copying data continuously from a primary database node to one or more secondary replica nodes to improve read performance, availability, and fault tolerance.

Q35. Explain Master-Slave (Primary-Secondary) Replication.
Primary node processes all write operations and replicates changes to secondary nodes. Secondary nodes handle read-only traffic.

Q36. Explain Master-Master (Multi-Primary) Replication.
Multiple primary database nodes can accept write operations simultaneously, distributing write traffic but introducing complex conflict resolution requirements.

Q37. What is Database Sharding (Horizontal Partitioning)?
Splitting a large database dataset horizontally into smaller, independent database instances (Shards) distributed across multiple physical servers.

Q38. What are common Sharding Strategies?
Key/Range-Based Sharding, Hash-Based Sharding, Directory-Based Sharding, and Geographic Sharding.

Q39. What are the main challenges of Database Sharding?
Complex cross-shard joins, lack of cross-shard multi-document transactions, dynamic re-sharding overhead, and hotspot shards.

Q40. What is Database Indexing?
A data structure (e.g., B-Tree, Hash Index) that speeds up data retrieval operations on a database table at the cost of additional write latency and disk space.

5. CAP Theorem, PACELC & Consistency Models

Q41. What is CAP Theorem?
States that a distributed data store can simultaneously guarantee at most two out of three properties: Consistency, Availability, and Partition Tolerance.

Q42. Define Consistency, Availability, and Partition Tolerance in CAP Theorem.
Consistency: Every read receives the most recent write or an error.
Availability: Every non-failing request receives a non-error response (without guarantee of containing latest write).
Partition Tolerance: System continues operating despite network message drops or delays between nodes.

Q43. Why is Partition Tolerance mandatory in distributed systems?
Network partitions (network cable cuts, router failures) are inevitable in real-world distributed infrastructure. Therefore, distributed systems must choose between CP or AP.

Q44. What is a CP System vs AP System?
CP (Consistency + Partition Tolerance): System sacrifices availability to guarantee identical data reads during network partitions (e.g., HBase, MongoDB).
AP (Availability + Partition Tolerance): System remains available during network partitions, returning potentially stale data (e.g., Cassandra, DynamoDB).

Q45. What is the PACELC Theorem?
Extends CAP Theorem by addressing tradeoffs during normal operation:
If there is a Partition (P), trade off Availability (A) vs Consistency (C); Else (E), trade off Latency (L) vs Consistency (C).

Q46. What is Eventual Consistency?
A consistency model guaranteeing that if no new updates are made, all replicas will eventually converge and return identical data values over time.

Q47. What is Strong Consistency vs Weak Consistency?
Strong Consistency: After an update, all subsequent reads across any node immediately reflect the updated value.
Weak Consistency: Reads do not guarantee returning the latest write value.

Q48. What is Read-Your-Writes Consistency?
Guarantees that a specific user will always read their own latest updates, even if other users see temporarily stale data.

Q49. What is BASE Property in NoSQL?
Basically Available, Soft State, Eventual Consistency - prioritizes high availability and scalability over strict immediate consistency.

Q50. What is ACID Property in Relational Databases?
Atomicity, Consistency, Isolation, Durability - set of guarantees ensuring reliable execution of database transactions.

6. Microservices vs Monolith Architecture & API Gateway

Q51. What is Monolithic Architecture?
A traditional software architecture where all application modules, UI logic, business code, and database interactions are unified into a single deployable codebase.

Q52. What is Microservices Architecture?
An architectural style structuring an application as a collection of small, autonomous, loosely-coupled services organized around specific business domains.

Q53. Compare Monolith vs Microservices.
Monolith: Simple setup, unified deployment, low inter-module latency; difficult to scale independently, long build times, large blast radius for bugs.
Microservices: Independent deployment, polyglot tech stack, independent horizontal scaling; complex deployment, network latency, distributed data management challenges.

Q54. What is an API Gateway?
A single entry-point server sitting between clients and microservices that handles request routing, protocol translation, authentication, rate limiting, SSL termination, and response aggregation.

Q55. What is Service Discovery?
A mechanism allowing microservice instances to dynamically locate and communicate with each other using a central registry (e.g., Consul, Eureka) as instances scale up/down.

Q56. What is the Circuit Breaker Pattern?
A resilience design pattern that stops forwarding calls to a failing remote microservice when error thresholds are crossed, returning fallback responses to prevent cascading system failures.

Q57. What are the three states of a Circuit Breaker?
Closed: Requests flow normally.
Open: Requests fail immediately without hitting upstream service.
Half-Open: Limited trial requests test if upstream service has recovered.

Q58. What is the Saga Pattern?
A design pattern managing distributed transactions across microservices by executing a sequence of local transactions, triggering compensating transactions if a step fails.

Q59. What is BFF (Backend-For-Frontend) Pattern?
Creating custom API gateway layers tailored specifically to the needs of individual frontend client types (e.g., Mobile BFF vs Desktop Web BFF).

Q60. What is Service Mesh?
An infrastructure layer (e.g., Istio, Linkerd) managing service-to-service communication, sidecar proxy routing, telemetry, and security without polluting application code.

7. Asynchronous Messaging, Queues & Event-Driven Systems

Q61. What is Asynchronous Communication?
A message exchange pattern where the sender transmits a message and continues processing without waiting for immediate response execution from the receiver.

Q62. What is a Message Queue?
An asynchronous buffer (e.g., RabbitMQ, SQS) storing messages transmitted between producer and consumer applications until processed.

Q63. What are the benefits of using Message Queues?
Decoupling components, traffic spike smoothing (burst buffering), system fault tolerance, and asynchronous background processing.

Q64. What is Publish-Subscribe (Pub/Sub) Model?
A messaging pattern where publishers broadcast messages to a topic without targeting specific recipients; all subscribed consumers receive copies of the message.

Q65. What is Apache Kafka?
A distributed, partitioned, replicated commit-log event streaming platform designed for high-throughput, real-time message streaming and processing.

Q66. Compare Message Queue (RabbitMQ) vs Event Stream (Kafka).
RabbitMQ: Message broker, deletes messages once acknowledged by consumer, task/queue oriented.
Kafka: Log-based stream, retains messages on disk based on retention policy, consumer offset tracking, high-throughput event logging.

Q67. What is Dead Letter Queue (DLQ)?
A specialized queue holding messages that failed processing repeatedly, allowing developers to inspect and debug failed payloads safely.

Q68. What is Idempotent Consumer Pattern?
Designing consumer services to handle duplicate incoming queue messages without producing duplicate side effects in application state.

Q69. What is Event Sourcing?
An architectural pattern where application state changes are stored as an append-only sequence of immutable domain events over time.

Q70. What is CQRS (Command Query Responsibility Segregation)?
Separating read and write operations into distinct data models and services to optimize read and write performance independently.

8. Rate Limiting, Security & High Availability

Q71. What is Rate Limiting?
Restricting the number of incoming API requests a client can execute within a specified timeframe to protect servers from overload and DDoS attacks.

Q72. What are popular Rate Limiting Algorithms?
Token Bucket, Leaky Bucket, Fixed Window Counter, Sliding Window Log, and Sliding Window Counter.

Q73. Explain the Token Bucket Algorithm.
Tokens are continuously added to a bucket at a fixed rate up to a max capacity. Each request consumes one token; if the bucket is empty, the request is dropped.

Q74. Explain the Leaky Bucket Algorithm.
Requests enter a FIFO bucket queue of fixed capacity and leak out to processing servers at a constant fixed rate, smoothing traffic bursts.

Q75. How is Rate Limiting implemented at scale?
Using a fast, centralized in-memory data store like Redis with atomic scripts (Lua) shared across API gateway instances.

Q76. What is Denial of Service (DoS) and Distributed DoS (DDoS)?
An attack attempting to crash a service by overwhelming it with malicious traffic volume. DDoS uses a distributed botnet of compromised devices.

Q77. How do you mitigate DDoS Attacks?
Deploying CDNs (Cloudflare), rate limiting at edge proxies, configuring Web Application Firewalls (WAF), and auto-scaling infrastructure.

Q78. What is a Web Application Firewall (WAF)?
A security proxy monitoring and filtering Layer 7 HTTP/HTTPS traffic to block attacks like SQL injection, XSS, and bad bots.

Q79. What is Graceful Degradation?
Designing a system to maintain core functionality under extreme load or component failures by disabling non-critical secondary features.

Q80. What is Disaster Recovery (DR) and RTO / RPO?
RTO (Recovery Time Objective): Maximum acceptable duration of system downtime following a failure.
RPO (Recovery Point Objective): Maximum acceptable age of data lost due to a system crash.

9. Object Storage, File Systems & Distributed Locks

Q81. What is Object Storage vs Block Storage vs File Storage?
Block Storage: Raw unformatted storage blocks (e.g., AWS EBS, SSDs).
File Storage: Hierarchical directory file system (e.g., NFS, NAS).
Object Storage: Unstructured data storage with flat metadata and unique IDs accessed via HTTP APIs (e.g., AWS S3).

Q82. When should Object Storage (AWS S3) be used?
For storing unstructured static files (images, videos, PDF documents, database backups, static logs) requiring high durability.

Q83. What is a Distributed Lock?
A mutual exclusion mechanism ensuring that only one node in a distributed environment accesses a shared resource at a given time.

Q84. How does Redis Redlock algorithm work for Distributed Locking?
Acquires a lock by setting a unique key with TTL across majority N/2+1 independent Redis nodes to ensure lock safety even if nodes crash.

Q85. What is Apache ZooKeeper?
A centralized coordination service providing configuration management, distributed synchronization, group membership, and naming services.

Q86. What is Distributed Tracing?
A method used to profile and monitor microservice requests by propagating a unique Trace ID across network call hops to track latency.

Q87. What is Database Connection Pooling?
Maintaining a reusable pool of active database socket connections to eliminate performance overhead of repeatedly opening/closing connections per request.

Q88. What is Heartbeat Mechanism?
Periodic signals transmitted between cluster nodes to monitor operational status and detect node failures.

Q89. What is Split-Brain Problem in distributed clusters?
Occurs when network failure splits a cluster into isolated partitions, causing both partitions to independently elect primaries and corrupt data.

Q90. How is Split-Brain prevented?
Requiring a strict Quorum (N/2 + 1 node consensus) to elect a primary node or execute cluster configuration state changes.

10. Real-World System Design Case Studies & Trade-Offs

Q91. How would you design a URL Shortener (e.g., TinyURL)?
Encode auto-incrementing 64-bit integer IDs into Base62 strings (a-z, A-Z, 0-9). Cache hot short-to-long URL mappings in Redis; store mappings in SQL/NoSQL.

Q92. How would you design a Web Crawler?
Use URL Frontier (priority queue) to fetch URLs, HTML parser to extract links, DNS resolver, duplicate filter (Bloom Filter), and storage worker for documents.

Q93. How would you design a Rate Limiter?
API Gateway middleware leveraging Redis sliding window log counter keyed by Client IP / API Key, returning 429 status code on limit breach.

Q94. How would you design a Distributed Chat Application (e.g., WhatsApp)?
WebSocket connections managed by Gateway servers, Message Service, User Status Service (Redis presence), Cassandra/HBase for scalable message log storage.

Q95. How would you design a Video Streaming Platform (e.g., Netflix / YouTube)?
Chunk video uploads, Transcoder Service converting to multiple resolutions (HLS/DASH protocols), store raw/processed files in Object Storage (S3), deliver via CDN.

Q96. How would you design a Notification System?
Notification Service accepting push/email/SMS tasks, queuing through Kafka/SQS, dispatching via third-party providers (FCM, APNS, Twilio) with rate limiting.

Q97. How would you design a Distributed Unique ID Generator (e.g., Twitter Snowflake)?
64-bit ID structure: 1 bit reserved + 41 bits Epoch Timestamp + 10 bits Worker Node ID + 12 bits Sequence Counter (generates 4096 IDs/ms per node).

Q98. How would you design a Search Autocomplete System?
Store prefix queries in a Trie data structure, keep top K search results at each Trie node, cache popular search terms in Redis.

Q99. What are Bloom Filters and where are they used?
A space-efficient probabilistic data structure used to test if an element is definitely NOT in a set or POSSIBLY in a set (used in DB query pre-filtering).

Q100. Key principles to remember during System Design Interviews?
Ask clarifying questions, state functional/non-functional requirements, estimate scale back-of-envelope, start high-level before deep diving, state trade-offs explicitly, avoid single points of failure, and optimize for the bottleneck.

Top Companies Asking System Design Questions:
- Google
- Amazon
- Microsoft
- Meta
- Netflix
- Uber
- Adobe
- Oracle
- Walmart Global Tech
- Flipkart

Preparation Tips:
- Master scalability concepts, load balancing algorithms, and caching patterns.
- Learn trade-offs between SQL vs NoSQL, CAP theorem, and consistency models.
- Practice drawing high-level architecture diagrams for real-world products.
- Understand asynchronous messaging with Kafka/RabbitMQ and rate limiting.
- Communicate trade-offs and bottleneck mitigations clearly during interviews.

Conclusion:
System Design is a cornerstone skill for building modern, scalable software applications. Mastering these 100 core System Design interview questions along with practicing real-world architecture trade-offs will help you clear software engineering interviews with confidence.

Happy Learning!
Team GotPlaced`
},
{
  id: 24,

  slug: "top-100-nextjs-interview-questions-2026",

  title: "Top 100 Next.js Interview Questions and Answers (2026)",

  description:
    "Prepare for Next.js interviews with the Top 100 Next.js Interview Questions and Answers (2026). Learn Next.js Fundamentals, App Router, Pages Router, Server Components, Client Components, Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), API Routes, Middleware, Dynamic Routing, Image Optimization, Authentication, Deployment on Vercel, SEO Optimization, Performance Optimization, and commonly asked Next.js interview questions. This comprehensive guide is ideal for students, freshers, and experienced developers preparing for frontend and full-stack developer interviews at Google, Microsoft, Amazon, Meta, Adobe, Oracle, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, and other leading product and service-based companies.",

  image: "/nextjs-blog.jpg",

  author: "GotPlaced Team",

  category: "Next.js",

  date: "17 July 2026",

  readTime: "28 min read",

  content: `Top 100 Next.js Interview Questions and Answers (2026)

Next.js is one of the most popular React frameworks for building fast, SEO-friendly, and production-ready web applications. It provides features like Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes, Middleware, Image Optimization, and the App Router, making it one of the most frequently asked technologies in frontend and full-stack interviews.

Whether you're preparing for internships, campus placements, or software engineering roles, mastering Next.js concepts is essential.

Topics Covered:
- Next.js Fundamentals & Architecture
- App Router vs Pages Router
- Server Components vs Client Components
- Data Fetching & Rendering Strategies (SSR, SSG, ISR, CSR)
- Routing, Layouts & Middleware
- API Routes & Server Actions
- Styling, Assets & Image Optimization
- SEO, Performance & Core Web Vitals
- State Management, Authentication & Security
- Deployment, Testing & Troubleshooting

1. Next.js Fundamentals & Architecture

Q1. What is Next.js?
Next.js is an open-source, full-stack React framework developed by Vercel that enables server-side rendering, static site generation, file-based routing, and built-in optimizations.

Q2. What are the key advantages of Next.js over vanilla React (CRA)?
Built-in SSR/SSG for superior SEO, file-system routing, automatic code splitting, optimized images and fonts, API routes, zero-config setup, and automatic server environment deployment.

Q3. What is the main difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?
CSR: Renders blank HTML initially and builds the UI in the browser using JS (slower initial load, poor SEO).
SSR: Renders complete HTML on the server for each request before sending it to the client (fast initial page load, excellent SEO).

Q4. What is Static Site Generation (SSG)?
Pre-rendering HTML pages at build time. The static HTML files are served instantly via a CDN on every request.

Q5. What is Incremental Static Regeneration (ISR)?
Allows developers to update static pages in the background after building the site, without needing to rebuild the entire application.

Q6. When should you use SSR vs SSG vs ISR?
SSG: Static content that rarely changes (blogs, docs, marketing sites).
SSR: Dynamic user-specific data required on every request (social feeds, dashboards).
ISR: Large-scale sites with dynamic content updated periodically (e-commerce product pages).

Q7. What is automatic code splitting in Next.js?
Next.js automatically splits bundle JavaScript per page/route so clients download only code required for the specific page being visited.

Q8. What is Fast Refresh in Next.js?
An enhanced hot module replacement (HMR) feature providing instant feedback on code edits while preserving local component state.

Q9. What is SWC in Next.js?
Extremely fast Rust-based compiler toolchain replacing Babel for compiling and bundling JavaScript/TypeScript code.

Q10. How does hydration work in Next.js?
The process where client-side React attaches event listeners and state logic to pre-rendered static HTML markup delivered from the server.

2. App Router vs Pages Router

Q11. What is the App Router in Next.js?
The new routing paradigm introduced in Next.js 13 built on React Server Components, using the app directory with nested layouts and streaming support.

Q12. What is the Pages Router in Next.js?
The legacy file-system routing model based on the pages directory using page-level data fetching methods like getStaticProps and getServerSideProps.

Q13. Compare app directory structure vs pages directory structure.
Pages: Routing based on file names inside pages/ (e.g., pages/about.js -> /about).
App: Routing based on directory folders inside app/ containing special layout.js, page.js, loading.js, and error.js files.

Q14. What are the special file conventions in the App Router?
page.js (UI unique to route), layout.js (shared UI frame), loading.js (suspense loading UI), error.js (error boundary), default.js (parallel fallback), and route.js (API handler).

Q15. Can Pages Router and App Router coexist in the same project?
Yes, Next.js allows incremental migration where both pages and app directories work simultaneously.

3. Server Components vs Client Components

Q16. What are React Server Components (RSC)?
Components that execute exclusively on the server, producing zero client-side JavaScript bundle footprint.

Q17. What are Client Components in Next.js?
Components rendered on the server and hydrated on the client, enabled by declaring 'use client' directive at the top of the file.

Q18. When should you use Server Components vs Client Components?
Server Components (default): Data fetching, accessing backend resources, keeping large dependencies on server.
Client Components: Interactive events (onClick, onChange), state hooks (useState, useEffect), browser APIs.

Q19. What is the 'use client' directive?
A boundary marker telling Next.js to treat the module and its imported dependencies as client-side code.

Q20. What is the 'use server' directive?
Marks a server-side async function as a Server Action executable from client components.

Q21. Can you import a Server Component inside a Client Component?
Not directly via direct import, but you can pass a Server Component as a child or prop (<ClientComp><ServerComp /></ClientComp>).

Q22. Can you import a Client Component inside a Server Component?
Yes, Server Components can import and render Client Components directly.

4. Data Fetching & Rendering Strategies (SSR, SSG, ISR, CSR)

Q23. How do you fetch data in the App Router?
Using standard async/await with native fetch() directly inside React Server Components.

Q24. How do you control caching in fetch() inside the App Router?
force-cache (default, static cache), no-store (dynamic SSR, no cache), or next: { revalidate: seconds } (ISR).

Q25. What is getStaticProps in Pages Router?
A function executing at build time to fetch static data for SSG pre-rendering.

Q26. What is getServerSideProps in Pages Router?
A function executing on every HTTP request on the server to fetch dynamic data for SSR.

Q27. What is getStaticPaths in Pages Router?
Defines a list of dynamic URL paths that must be pre-rendered to HTML at build time for dynamic routes ([id].js).

Q28. What are the fallback options in getStaticPaths?
false (404 for ungenerated paths), true (serves fallback UI while generating page), or 'blocking' (server-renders new path before serving).

Q29. How do you trigger On-Demand Revalidation in ISR?
Using res.revalidate() in Pages Router or revalidatePath() / revalidateTag() in App Router.

Q30. What is revalidatePath() vs revalidateTag()?
revalidatePath(): Invalidates cache for a specific URL route path.
revalidateTag(): Invalidates cache for all fetch requests tagged with a specific cache tag (next: { tags: ['products'] }).

5. Routing, Layouts & Middleware

Q31. How does dynamic routing work in Next.js?
By wrapping folder or file names in square brackets (e.g., app/blog/[slug]/page.js matches /blog/hello-world).

Q32. What are Catch-All Routes and Optional Catch-All Routes?
Catch-All ([...slug]): Matches all nested path segments (/shop/a/b/c).
Optional Catch-All ([[...slug]]): Matches root path as well as all nested sub-paths (/shop, /shop/a).

Q33. What are Route Groups in the App Router?
Folders wrapped in parentheses ( (auth) ) that group routes logically without affecting the URL path structure.

Q34. What are Parallel Routes in Next.js?
Slots defined with @prefix (@team, @analytics) allowing simultaneous rendering of multiple independent pages within the same layout.

Q35. What are Intercepting Routes in Next.js?
Routes declared with (.) or (..) syntax that load a contextual route (like a modal) inside the current layout while keeping the URL shareable.

Q36. What is Middleware in Next.js?
A script (middleware.js in root) running before every request completes, used for authentication, redirects, and header manipulation at the edge.

Q37. What is the Link component in Next.js?
An enhanced HTML <a> tag component (<Link href="/about">) providing client-side navigation, prefetching, and viewport detection.

Q38. How does route prefetching work in Next.js?
Next.js automatically prefetches code and data for <Link> components visible in the client viewport in production mode.

Q39. What is useRouter hook in Next.js?
A client-side hook imported from next/navigation (App Router) or next/router (Pages Router) providing programmatic navigation (router.push, router.replace).

Q40. How do you handle 404 and global errors in App Router?
Create custom not-found.js and error.js (must be client component) files inside route folders.

6. API Routes & Server Actions

Q41. What are API Routes in Pages Router?
Node.js serverless functions defined in pages/api/ responding to HTTP requests (export default function handler(req, res)).

Q42. What are Route Handlers in App Router?
Web standard Request/Response handlers defined in route.js files supporting GET, POST, PUT, PATCH, DELETE exports.

Q43. What are Server Actions in Next.js?
Asynchronous server functions called directly from Client Components or HTML forms to execute server-side data mutations without creating explicit API endpoints.

Q44. How do you define a Server Action?
Add the 'use server' directive at the top of an async function body or file module.

Q45. How do you manage form state with Server Actions?
Combine React's useActionState (or useFormState) and useFormStatus hooks with Server Actions.

7. Styling, Assets & Image Optimization

Q46. What is the Next.js Image Component (<Image />)?
An extension of the standard HTML <img> tag providing automatic image resizing, WebP/AVIF format conversion, lazy loading, and prevention of Cumulative Layout Shift (CLS).

Q47. What are the key props of <Image /> component?
src, alt, width, height, fill (responsive parent fill), priority (eager loading for LCP images), and quality.

Q48. How do you configure external domain images in Next.js?
Add remotePatterns configuration inside next.config.js specifying allowed external protocol and hostnames.

Q49. How does Font Optimization work in Next.js (next/font)?
Automatically self-hosts Google Fonts and custom fonts at build time, eliminating external network requests and zero layout shift.

Q50. What styling options are natively supported in Next.js?
CSS Modules, Tailwind CSS, Sass, CSS-in-JS (Styled Components, Emotion), and global CSS.

8. SEO, Performance & Core Web Vitals

Q51. How do you manage SEO metadata in the App Router?
Export a static metadata object or a dynamic generateMetadata() function from page.js or layout.js.

Q52. How do you manage HEAD tags in the Pages Router?
Import and wrap meta tags with the <Head> component from next/head.

Q53. How does Next.js help improve Core Web Vitals?
LCP (Image priority & SSR), CLS (next/font & next/image dimensions), INP/FID (code splitting & Server Components).

Q54. What is the Script component (<Script />)?
An optimized script loader component with execution strategies: beforeInteractive, afterInteractive, lazyOnload, or worker.

Q55. How do you analyze JavaScript bundle size in Next.js?
Using the official @next/bundle-analyzer package to generate visual interactive treemaps of client bundles.

Q56. What is streaming in Next.js?
Progressively rendering and streaming page HTML chunks from the server to client using React Suspense boundaries.

9. State Management, Authentication & Security

Q57. How do you manage global state in Next.js?
Using React Context API, Redux Toolkit, Zustand, or Jotai (wrapped in Client Components).

Q58. What is NextAuth.js (Auth.js)?
A complete open-source authentication solution for Next.js applications supporting OAuth, JWT, database sessions, and email logins.

Q59. How do you secure private routes in Next.js?
Using Next.js Middleware to verify authentication tokens (JWTs) before allowing navigation to protected route paths.

Q60. How do you protect against Cross-Site Scripting (XSS) in Next.js?
React automatically escapes values rendered in JSX. Enforce strict Content Security Policy (CSP) headers in middleware.

Q61. How do environment variables work in Next.js?
Stored in .env files. Variables prefixed with NEXT_PUBLIC_ are exposed to the browser; non-prefixed variables remain server-only.

Q62. What is server-only package?
An npm package (import 'server-only') preventing accidental import of server-only modules into Client Components at build time.

10. Deployment, Testing & Troubleshooting

Q63. Where can you deploy a Next.js application?
Vercel (native platform), AWS (Amplify, EC2, Lambda/SST), Docker containers, Node.js custom servers, or static export hosts.

Q64. What is Vercel?
The cloud platform built by the creators of Next.js providing zero-configuration deployments, edge network caching, and serverless infrastructure.

Q65. What is static export in Next.js (output: 'export')?
Configures Next.js to output pure static HTML/CSS/JS assets for hosting on traditional static web servers (disables SSR and server features).

Q66. How do you run Next.js in a custom Node.js server?
Import next module and construct a custom Express or HTTP server using app.getRequestHandler().

Q67. How do you test Next.js applications?
Unit/Integration testing with Jest, React Testing Library, and Vitest. End-to-end (E2E) testing with Playwright or Cypress.

Q68. What is next.config.js?
The central configuration file for customizing Next.js build options, redirects, rewrites, headers, and webpack settings.

Q69. Difference between redirects and rewrites in next.config.js?
redirects: Returns 301/302 HTTP status changing the destination URL in browser.
rewrites: Acts as an internal proxy serving content from new destination while keeping current browser URL unchanged.

Q70. What is the Edge Runtime in Next.js?
A lightweight, high-performance V8 runtime executing at network edge locations with low latency (used in Middleware).

Q71. What are the limitations of the Edge Runtime?
No access to native Node.js APIs (fs, child_process) or heavy Node modules; limited execution memory footprint.

Q72. What is draftMode in Next.js?
Enables previewing unpublished content from headless CMS systems dynamically without triggering build-time static page rendering.

Q73. What is useSearchParams hook?
Client-side hook in next/navigation used to read URL query string parameters in App Router.

Q74. What is usePathname hook?
Client-side hook in next/navigation returning the current URL pathname string.

Q75. What is useFormStatus hook?
React hook providing status information (pending, data) for a parent <form> submitting via Server Actions.

Q76. What is useOptimistic hook?
React hook allowing UI state to update optimistically before a Server Action mutation resolves on the server.

Q77. What is Partial Prerendering (PPR) in Next.js?
An experimental optimization combining static page shell pre-rendering with dynamic streaming parts within a single route request.

Q78. What is dynamic IO in Next.js?
Explicit flag controlling whether data fetching operations trigger static build generation or dynamic runtime resolution.

Q79. How do you handle CORS issues in Next.js API routes?
Set Access-Control-Allow-* headers inside route.js handlers or next.config.js headers block.

Q80. What is instrumentation.js file?
A root configuration file executing code when a new Next.js server instance starts up (used for OpenTelemetry/monitoring).

Q81. How do you customize the 500 error page in App Router?
Create a global-error.js component inside the root app directory.

Q82. How do you customize document HTML head tags globally in Pages Router?
Edit the _document.js custom component file inside pages directory.

Q83. What is _app.js in Pages Router?
The top-level root component wrapping all page instances, used for global layouts, CSS imports, and state providers.

Q84. What is router.events in Pages Router?
An event emitter tracking client-side navigation start, complete, and error lifecycle phases (e.g., displaying top progress bars).

Q85. What is Shallow Routing in Pages Router?
Updating page URL query parameters without re-executing data fetching methods (getStaticProps / getServerSideProps).

Q86. How do you handle internationalization (i18n) in Next.js?
App Router uses sub-path routing with dynamic locale parameters (app/[lang]/page.js) or third-party middleware (next-intl).

Q87. What is next/third-parties library?
Official performance-optimized components for embedding third-party scripts (Google Analytics, YouTube, Google Maps).

Q88. What is output: 'standalone' option in next.config.js?
Builds a minimal isolated standalone output folder containing only necessary dependencies for optimized Docker deployments.

Q89. How do you force a route to be dynamic in App Router?
Export const dynamic = 'force-dynamic' at the top of page.js or route.js file.

Q90. How do you force a route to be static in App Router?
Export const dynamic = 'force-static' at the top of page.js file.

Q91. What is generateStaticParams in App Router?
Replaces getStaticPaths in App Router to pre-generate static dynamic route parameters at build time.

Q92. What is React Suspense used for in Next.js?
Wraps dynamic components to show fallback loading UI while async component data streams from the server.

Q93. What is the difference between error.js and global-error.js?
error.js: Catches errors within its nested route boundary.
global-error.js: Catches errors in the root layout.js file.

Q94. How do you pass headers or cookies in Server Components?
Import cookies() and headers() async functions from next/headers.

Q95. How do you perform server-side redirects in App Router?
Import and call redirect('/target-path') from next/navigation.

Q96. What is notFound() function in App Router?
Triggers not-found.js boundary UI rendering and returns a 404 HTTP status code.

Q97. What is next/mdx?
Official Next.js plugin allowing developers to write MDX (Markdown with JSX components) directly inside Next.js pages.

Q98. How do you disable x-powered-by header in Next.js?
Add poweredByHeader: false inside next.config.js file for enhanced server security.

Q99. What is Turbopack?
An extremely fast Rust-based incremental bundler replacing Webpack in Next.js development server.

Q100. Best practices for building scalable Next.js applications?
Use App Router with React Server Components, leverage fetch caching with tag revalidation, optimize assets using next/image and next/font, keep Client Components small and leaf-level, secure private routes with Middleware, and monitor Web Vitals on Vercel.

Top Companies Asking Next.js Questions:
- Google
- Microsoft
- Amazon
- Meta
- Vercel
- Adobe
- Oracle
- TCS
- Infosys
- Accenture

Preparation Tips:
- Master App Router file conventions (layout, page, loading, error, route).
- Thoroughly understand Server Components vs Client Components ('use client').
- Learn data fetching caching mechanisms and revalidation (revalidateTag, revalidatePath).
- Practice creating Server Actions, API routes, and Middleware handlers.
- Understand SEO optimization, Image optimization, and Vercel deployment strategies.

Conclusion:
Next.js is the leading full-stack React framework for modern web engineering. Mastering these top 100 interview questions along with practical hands-on App Router development will give you complete confidence in modern frontend and full-stack technical rounds.

Happy Learning!
Team GotPlaced
`
},
{
  id: 25,

  slug: "top-100-typescript-interview-questions-2026",

  title: "Top 100 TypeScript Interview Questions and Answers (2026)",

  description:
    "Prepare for TypeScript interviews with the Top 100 TypeScript Interview Questions and Answers (2026). Learn TypeScript Fundamentals, Static Typing, Interfaces, Types, Enums, Generics, Classes, Functions, Type Inference, Union Types, Intersection Types, Type Guards, Modules, Decorators, Utility Types, Async Programming, and commonly asked TypeScript interview questions. This comprehensive guide is perfect for students, freshers, and experienced developers preparing for frontend and full-stack developer interviews at Google, Microsoft, Amazon, Meta, Adobe, Oracle, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, and other leading product and service-based companies.",

  image: "/typescript-blog.jpg",

  author: "GotPlaced Team",

  category: "TypeScript",

  date: "17 July 2026",

  readTime: "26 min read",

  content: `Top 100 TypeScript Interview Questions and Answers (2026)

TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It enhances JavaScript by adding static typing, interfaces, generics, and advanced tooling support. Today, TypeScript is widely used in Angular, React, Next.js, Node.js, NestJS, and enterprise-level applications.

Whether you're preparing for internships, campus placements, or full-stack developer interviews, mastering TypeScript is an essential skill.

Topics Covered:
- TypeScript Fundamentals & Compiler
- Basic Types, any, unknown, never & void
- Interfaces vs Type Aliases
- Advanced Types: Unions, Intersections & Tuples
- Type Guards, Narrowing & Assertions
- Generics & Generic Constraints
- Enums, Classes & Access Modifiers
- Utility Types (Partial, Pick, Omit, Readonly, etc.)
- Advanced Concepts (Mapped Types, Conditional Types, Decorators)
- Configuration (tsconfig.json), Modules & Best Practices

1. TypeScript Fundamentals & Compiler

Q1. What is TypeScript?
TypeScript is an open-source, strongly typed programming language developed by Microsoft that acts as a strict syntactical superset of JavaScript, compiling down to plain JavaScript.

Q2. What are the key advantages of TypeScript over JavaScript?
Static typing, early compile-time error detection, superior IDE IntelliSense and autocompletion, enhanced code refactoring capabilities, and self-documenting code bases.

Q3. What is the TypeScript Compiler (tsc)?
A command-line tool that transpiles TypeScript source code (.ts, .tsx) into browser and Node.js compatible JavaScript code (.js).

Q4. What is Type Inference in TypeScript?
The ability of the TypeScript compiler to automatically deduce variable data types based on their assigned initial values without explicit type annotations.

Q5. What is Type Annotation in TypeScript?
Explicitly specifying the type of a variable, function parameter, or return value using a colon (e.g., let count: number = 10;).

Q6. What happens if there are TypeScript compilation errors?
TypeScript still compiles code into JavaScript by default unless configured otherwise using the "noEmitOnError": true flag in tsconfig.json.

Q7. Does TypeScript type-checking exist at runtime?
No. TypeScript types are erased completely during compilation (Type Erasure); at runtime, pure JavaScript executes without type overhead.

Q8. What is tsconfig.json?
A JSON configuration file located at the project root specifying compiler options, target JS versions, module resolution, and file inclusion rules.

Q9. What is Ambient Declaration / Declaration Files (.d.ts)?
Files containing global type definitions without implementation code, used to provide TypeScript type definitions for plain JavaScript libraries.

Q10. What is DefinitelyTyped (@types)?
A community-maintained repository providing high-quality TypeScript type definitions for popular plain JavaScript packages.

2. Basic Types, any, unknown, never & void

Q11. What are primitive types in TypeScript?
boolean, number, string, symbol, bigint, null, and undefined.

Q12. What is the any type in TypeScript?
A type opting out of type checking, allowing a variable to hold any value type and permitting any operation without compiler errors.

Q13. What is the unknown type and how does it differ from any?
unknown is a type-safe counterpart of any. Values of type unknown cannot be assigned or manipulated without first narrowing or performing explicit type assertions.

Q14. What is the void type?
Represents the absence of a return value in functions that do not return anything (returns undefined implicitly).

Q15. What is the never type?
Represents values that NEVER occur, such as functions that always throw an exception or enter infinite loops, or unreachable branches.

Q16. Difference between void and never?
void means a function executes successfully and returns nothing. never means a function never finishes executing or returning at all.

Q17. What is the difference between null and undefined in TypeScript?
undefined represents a variable that has been declared but not initialized. null represents an intentional assignment of no value.

Q18. What is strictNullChecks compiler flag?
A tsconfig flag that prevents null and undefined from being assigned to other data types unless explicitly included via union types.

Q19. What is Object vs object vs {} in TypeScript?
Object: Represents all non-primitive JS objects including functions and primitives.
object: Represents any non-primitive type (excluding primitives like number, string).
{}: Represents any non-nullish value.

Q20. What is Literal Types in TypeScript?
Types that restrict variables to specific exact values (e.g., let status: "success" | "error";).

3. Interfaces vs Type Aliases

Q21. What is an Interface in TypeScript?
A contract defining the structural shape and properties that an object must conform to.

Q22. What is a Type Alias in TypeScript?
A name given to any custom type representation, including primitives, unions, tuples, and objects (e.g., type Point = { x: number; y: number };).

Q23. What are the key differences between Interface and Type Alias?
Interfaces can be re-opened for declaration merging, support extending with extends, and are best for object shapes. Types support union types, primitive aliases, and mapped types.

Q24. What is Declaration Merging in Interfaces?
TypeScript automatically merges multiple interface declarations sharing the exact same name into a single combined interface.

Q25. How do you make interface properties optional or read-only?
Optional: Append a question mark (name?: string;).
Read-only: Prepend readonly keyword (readonly id: number;).

Q26. How do you extend interfaces?
Using the extends keyword (interface Employee extends Person { salary: number; }).

Q27. What is Index Signatures in Interfaces/Types?
Allows defining objects with dynamic or unknown key names (e.g., interface Cache { [key: string]: string; }).

Q28. What is Excess Property Checking?
TypeScript triggers a compile error when passing object literals with extra un-declared properties to a function expecting an interface shape.

4. Advanced Types: Unions, Intersections & Tuples

Q29. What is a Union Type in TypeScript?
Combines multiple types using the pipe operator (|), allowing a variable to hold values of any of those specified types (type ID = string | number;).

Q30. What is an Intersection Type?
Combines multiple types using the ampersand operator (&), creating a new type possessing all properties from the intersected types.

Q31. What is a Tuple in TypeScript?
A fixed-length array where the data types of each element at specific index positions are known and fixed (type Response = [number, string];).

Q32. How do Readonly Tuples work?
Prevents modifying element values or calling array mutation methods like push() or pop() on tuples (readonly [number, string]).

Q33. What is a Discriminated Union (Tagged Union)?
A pattern where multiple object types in a union share a common literal discriminant field property, enabling easy runtime type narrowing.

Q34. What is Exhaustiveness Checking using never?
Using the never type in switch/if default blocks to ensure all possibilities of a discriminated union are handled at compile time.

5. Type Guards, Narrowing & Assertions

Q35. What is Type Narrowing?
The process of refining a broad variable type to a more specific type within a conditional code path.

Q36. What is typeof Type Guard?
Uses JavaScript's typeof operator to check primitive types (string, number, boolean, function) inside conditional blocks.

Q37. What is instanceof Type Guard?
Uses JavaScript's instanceof operator to check if an object is an instance of a specific class constructor.

Q38. What is the in Operator Type Guard?
Checks if a specified property exists on an object instance to narrow down union object shapes ('role' in user).

Q39. What is a Custom User-Defined Type Guard?
A function returning a Type Predicate (arg is Type) that narrows types based on custom logical checks (function isFish(pet: Pet): pet is Fish { ... }).

Q40. What is Type Assertion (as keyword vs angle brackets)?
Tells the compiler to treat a value as a specified target type, bypassing static inference (val as string or <string>val).

Q41. What is Non-Null Assertion Operator (!)?
A postfix exclamation mark telling the compiler that a value is guaranteed not to be null or undefined.

Q42. What is Satisfies Operator (satisfies)?
Introduced in TS 4.9, validates that an expression matches a target type without changing or widening the inferred type of the expression.

6. Generics & Generic Constraints

Q43. What are Generics in TypeScript?
A tool enabling reusable code components that work across multiple data types while maintaining strict type safety using type variables (<T>).

Q44. How do you define a Generic Function?
function identity<T>(arg: T): T { return arg; }

Q45. What are Generic Constraints?
Restricting allowed generic type arguments using the extends keyword (function logLength<T extends { length: number }>(arg: T): T { ... }).

Q46. How do you use keyof operator with Generics?
keyof extracts property keys of an object as a union type, useful for constraining key access (function getProp<T, K extends keyof T>(obj: T, key: K) { ... }).

Q47. What are Default Generic Parameters?
Providing fallback default types for generic parameters if none are explicitly passed (type Container<T = string> = { value: T };).

Q48. Can Interfaces and Classes be Generic?
Yes, both can accept generic type parameters (interface Repository<T> { findById(id: string): T; }).

7. Enums, Classes & Access Modifiers

Q49. What is an Enum in TypeScript?
A feature allowing developers to define a set of named constants (Numeric or String enums).

Q50. Difference between Numeric Enum and String Enum?
Numeric: Auto-increments from 0, supports reverse mapping (enum Direction { Up, Down }).
String: Requires explicit string values, does not support reverse mapping (enum Role { Admin = "ADMIN" }).

Q51. What is a const enum?
Enums declared with const keyword that are inlined directly into compiled output JavaScript, generating zero JS code footprint.

Q52. What are Access Modifiers in TypeScript Classes?
public: Accessible from anywhere (default).
private: Accessible only within the declaring class.
protected: Accessible within the declaring class and derived subclasses.

Q53. What is parameter properties syntax in constructors?
Shorthand constructor syntax declaring access modifiers directly in constructor arguments to auto-create properties (constructor(public name: string) {}).

Q54. What is the #private syntax vs private keyword?
#private: JavaScript native runtime hard privacy.
private: TypeScript compile-time soft privacy (erased at runtime).

Q55. What is an Abstract Class?
A base class containing abstract methods (without implementation) that cannot be instantiated directly and must be extended by subclasses.

Q56. What is the override keyword in TS 4.3+?
Ensures a subclass method explicitly overrides an existing method in its parent base class.

8. Utility Types (Partial, Pick, Omit, Readonly, etc.)

Q57. What is Partial<T>?
Constructs a type with all properties of T set to optional (?).

Q58. What is Required<T>?
Constructs a type with all properties of T set to required.

Q59. What is Readonly<T>?
Constructs a type with all properties of T set to readonly.

Q60. What is Record<K, T>?
Constructs an object type whose property keys are K and property values are T.

Q61. What is Pick<T, K>?
Constructs a type by picking a specified set of keys K from T.

Q62. What is Omit<T, K>?
Constructs a type by picking all properties from T and omitting specified keys K.

Q63. What is Exclude<UnionType, ExcludedMembers>?
Excludes specified members from a union type.

Q64. What is Extract<Type, Union>?
Extracts specified members present in both types from a union type.

Q65. What is NonNullable<T>?
Constructs a type by excluding null and undefined from T.

Q66. What is ReturnType<T>?
Extracts the return type of a function type T.

Q67. What is Parameters<T>?
Extracts the parameter types of a function type T as a tuple.

Q68. What is Awaited<T>?
Unwraps promises recursively to extract the resolved value type of Promise<T>.

9. Advanced Concepts (Mapped Types, Conditional Types, Decorators)

Q69. What are Mapped Types in TypeScript?
Types created by iterating over keys of another type using in keyof syntax (type ReadOnly<T> = { readonly [P in keyof T]: T[P] }).

Q70. What are Conditional Types?
Types that select one of two possible types based on a condition check (T extends U ? X : Y).

Q71. What is the infer keyword in Conditional Types?
Allows declaring and extracting a type variable within the condition check of a conditional type.

Q72. What are Template Literal Types?
Types built using string template literal syntax to combine literal types dynamically (type Event = \`\${"click" | "hover"}_event\`;).

Q73. What are Decorators in TypeScript?
Special declarations attached to classes, methods, accessors, properties, or parameters using @decorator syntax to modify behavior.

Q74. What is Method Decorator parameters signature?
Target object prototype, propertyKey name, and PropertyDescriptor descriptor.

Q75. What are Name Mapping / Key Remapping in Mapped Types?
Using the as keyword inside mapped types to rename or filter key names ([K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]).

10. Configuration (tsconfig.json), Modules & Best Practices

Q76. What are target and module options in tsconfig.json?
target: Specifies output ECMAScript syntax version (e.g., ES2020, ESNext).
module: Specifies output module system format (e.g., CommonJS, ESNext).

Q77. What is strict: true in tsconfig.json?
Enables a broad suite of strict type-checking behaviors (strictNullChecks, noImplicitAny, strictFunctionTypes, etc.).

Q78. What is noImplicitAny flag?
Triggers compile errors whenever TypeScript infers the any type for variables lacking explicit type annotations.

Q79. What is moduleResolution option?
Determines how TypeScript resolves module specifier import paths (NodeNext, Bundler, Classic).

Q80. What are Path Aliases in tsconfig.json?
Custom shortcut import path mappings defined via compilerOptions.paths (e.g., "@components/*": ["src/components/*"]).

Q81. What is import type syntax?
Explicitly imports strictly type declarations, allowing bundlers to drop imported type modules entirely during compilation.

Q82. How do you configure TypeScript for React (JSX)?
Set jsx option in tsconfig.json to react-jsx or react.

Q83. How do you type useState hook in React + TypeScript?
const [user, setUser] = useState<User | null>(null);

Q84. How do you type React Component props?
Define a type or interface for props and assign to component parameters (function MyComponent({ title }: Props) { ... }).

Q85. What is React.FC (FunctionComponent) and is it recommended?
A generic type for functional components. Modern React best practices prefer typing props directly in function parameters.

Q86. How do you type Event Handlers in React + TypeScript?
Use built-in React event types (React.MouseEvent<HTMLButtonElement>, React.ChangeEvent<HTMLInputElement>).

Q87. How do you type useRef hook in React?
const inputRef = useRef<HTMLInputElement>(null);

Q88. How to type async functions in TypeScript?
Async functions always return a Promise (async function fetchData(): Promise<Data> { ... }).

Q89. How do you handle error typing inside catch blocks?
In strict mode, caught errors are typed as unknown. Narrow using instanceof Error before accessing error.message.

Q90. What is type widening?
TypeScript expanding a specific literal value type (e.g., "hello") to its broader base type (string) when assigned to a mutable let variable.

Q91. What is const assertion (as const)?
Prevents type widening and sets object properties/array elements to readonly literal types.

Q92. What is Type Compatibility (Structural Subtyping)?
TypeScript compares types based strictly on their internal structure/shape, not on nominal declarations or class names.

Q93. What is Covariance vs Contravariance in function types?
Covariance: Subtypes can be assigned where supertypes are expected (return types).
Contravariance: Supertypes can be assigned where subtypes are expected (parameter types).

Q94. What is nominal typing and how to simulate it in TypeScript?
Nominal typing identifies types by explicit names. Simulated using Branding / Tagged Types ({ __brand: "UserId" } & string).

Q95. What is ts-ignore vs ts-expect-error?
@ts-ignore: Suppresses compile error on the next line unconditionally.
@ts-expect-error: Suppresses error on next line, but throws compile error if no error actually occurs (safer).

Q96. What is verbatimModuleSyntax?
Ensures imports/exports missing type keyword are preserved, improving bundler tree-shaking accuracy.

Q97. How do you extend global types in TypeScript?
Declare global namespace inside a module file (declare global { interface Window { customProp: string; } }).

Q98. Difference between unknown and any when writing safe APIs?
unknown forces consumers to perform runtime type assertions/validation before usage, preserving type safety.

Q99. What is declarationMap in tsconfig.json?
Generates source maps (.d.ts.map) mapping type definition files back to original TypeScript source code files for IDE navigation.

Q100. Best practices for clean TypeScript codebases?
Enable strict mode, avoid any, prefer unknown over any, use discriminated unions, leverage utility types, keep interfaces clean, use type assertions sparingly, and rely on type inference.

Top Companies Asking TypeScript Questions:
- Google
- Microsoft
- Amazon
- Meta
- Adobe
- Oracle
- TCS
- Infosys
- Accenture
- Capgemini

Preparation Tips:
- Master core types, strict mode flags, and tsconfig settings.
- Learn differences between Interfaces vs Type Aliases and when to use each.
- Practice using Generics, Generics Constraints, and keyof operator.
- Learn Utility Types (Pick, Omit, Partial, Record) and Type Guards.
- Gain hands-on experience typing React components, hooks, and events.

Conclusion:
TypeScript is the standard for modern frontend, backend, and enterprise software engineering. Mastering these 100 core TypeScript interview questions along with hands-on type-safe coding will give you complete confidence in technical interviews.

Happy Learning!
Team GotPlaced`
},
{
  id: 26,

  slug: "top-100-docker-interview-questions-2026",

  title: "Top 100 Docker Interview Questions and Answers (2026)",

  description:
    "Prepare for Docker interviews with the Top 100 Docker Interview Questions and Answers (2026). Learn Docker Fundamentals, Containers, Images, Dockerfile, Docker Compose, Volumes, Networking, Docker Hub, Container Lifecycle, Multi-stage Builds, Environment Variables, Kubernetes Integration, Security Best Practices, CI/CD Integration, and commonly asked Docker interview questions. This comprehensive guide is perfect for students, freshers, and experienced developers preparing for DevOps, Backend, Cloud, and Full Stack Developer interviews at Google, Microsoft, Amazon, Adobe, Oracle, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, IBM, and other leading product and service-based companies.",

  image: "/docker-blog.jpg",

  author: "GotPlaced Team",

  category: "Docker",

  date: "17 July 2026",

  readTime: "27 min read",

  content: `Top 100 Docker Interview Questions and Answers (2026)

Docker is one of the most popular containerization platforms used for developing, shipping, and deploying applications consistently across different environments. It enables developers to package applications with all their dependencies into lightweight containers, making deployment faster, more reliable, and highly scalable.

Docker has become an essential skill for Backend Developers, Full Stack Developers, Cloud Engineers, and DevOps Engineers. Almost every modern software company uses Docker in production.

Topics Covered:
- Docker Fundamentals & Architecture
- Containers vs Virtual Machines
- Docker Images & Docker Hub
- Dockerfile Instructions & Optimization
- Docker Container Lifecycle & Operations
- Docker Storage, Volumes & Bind Mounts
- Docker Networking & Service Port Mapping
- Docker Compose & Multi-Container Setup
- Multi-Stage Builds & Advanced Optimization
- Security Best Practices, CI/CD & Kubernetes Integration

1. Docker Fundamentals & Architecture

Q1. What is Docker?
Docker is an open-source platform that uses OS-level virtualization to deliver software in packages called containers, isolating applications from their underlying host environment.

Q2. What is the Docker Daemon (dockerd)?
A background persistent process managing Docker objects (images, containers, networks, volumes) and listening for Docker API requests.

Q3. What is the Docker CLI (Client)?
The command-line interface tool allowing users to interact with the Docker Daemon via terminal commands (e.g., docker run, docker build).

Q4. What is Docker Engine?
A client-server application comprising the Docker Daemon, REST API interfaces, and the Docker CLI.

Q5. What is containerd?
An industry-standard core container runtime managing complete container lifecycles (image transfer, execution, storage, network attachments).

Q6. What is runc?
A lightweight CLI tool built according to Open Container Initiative (OCI) specifications for spawning and running containers.

Q7. What is a Docker Host?
The physical server or virtual machine running the Docker Daemon and hosting containers.

Q8. What is Docker Desktop?
An easy-to-install application for Mac, Windows, and Linux that includes Docker Daemon, Docker CLI, Docker Compose, and a local Kubernetes cluster.

Q9. What are Namespaces in Linux and how does Docker use them?
A Linux kernel feature providing isolated workspace environments (Process IDs, Mounts, Networks, IPC) for containers.

Q10. What are Control Groups (cgroups) in Linux?
A Linux kernel feature managing and limiting hardware resource allocation (CPU, RAM, I/O) for container processes.

2. Containers vs Virtual Machines

Q11. What is a Docker Container?
A runnable instance of a Docker image representing a lightweight, standalone, executable package containing everything needed to run an application.

Q12. Compare Virtual Machines (VMs) and Docker Containers.
Virtual Machines: Package application with a full Guest Operating System, managed by a Hypervisor, heavy resource footprint, slow startup.
Docker Containers: Share host OS kernel, isolated at process level, minimal resource overhead, sub-second startup times.

Q13. Why are Docker Containers lightweight?
Because they eliminate the overhead of running a full Guest OS and share the host system kernel directly.

Q14. Can you run Linux containers on Windows OS?
Yes, using WSL2 (Windows Subsystem for Linux 2) or lightweight Hyper-V utility VMs.

Q15. Can containers run without Docker?
Yes, using alternative container runtimes like Podman, Containerd, or CRI-O.

3. Docker Images & Docker Hub

Q16. What is a Docker Image?
An immutable read-only template containing application code, libraries, dependencies, and execution instructions used to build containers.

Q17. What is Copy-on-Write (CoW) in Docker?
A storage optimization strategy where underlying image layers are shared read-only, and changes are written to a thin writable container top layer.

Q18. What is Docker Hub?
A public cloud-based registry service hosted by Docker for finding, storing, and sharing container images.

Q19. What is a Private Registry?
A self-hosted or cloud-managed repository (AWS ECR, Azure ACR, Docker Registry) storing proprietary application container images securely.

Q20. What is a Docker Image Tag?
A label applied to an image variant defining version or target configuration (e.g., node:18-alpine, redis:latest).

Q21. Why should you avoid using the 'latest' tag in production?
The 'latest' tag is mutable and can point to breaking new releases unpredictably, causing environment inconsistencies.

Q22. What is an OCI (Open Container Initiative) specification?
An open governance structure ensuring interoperability standards for container formats and runtimes.

Q23. How do you inspect image layers?
Using docker history <image-name> or docker image inspect <image-name>.

Q24. How do you pull and push images from/to Docker Hub?
docker pull <image-name> (downloads) and docker push <username>/<repo>:<tag> (uploads).

Q25. How do you remove unused Docker images?
docker image rm <image-id> or docker image prune (deletes dangling images).

4. Dockerfile Instructions & Optimization

Q26. What is a Dockerfile?
A text document containing sequential instructions used by Docker to build container images automatically.

Q27. What is the FROM instruction?
Specifies the base image from which you are building your new image (e.g., FROM node:18-alpine).

Q28. What is WORKDIR instruction?
Sets the active working directory for subsequent RUN, CMD, ENTRYPOINT, COPY, and ADD instructions.

Q29. What is the difference between COPY and ADD instructions?
COPY: Copies local files/directories into the image.
ADD: Copies local files, fetches remote URLs, and automatically extracts compressed archives (.tar.gz).

Q30. What is the difference between RUN, CMD, and ENTRYPOINT?
RUN: Executes commands during image build time and creates a new image layer.
CMD: Provides default commands or parameters for an executing container (can be overridden easily at runtime).
ENTRYPOINT: Configures a container to run as an immutable executable (harder to override).

Q31. What happens when you combine ENTRYPOINT and CMD?
ENTRYPOINT sets the default command, and CMD provides default arguments passed into the ENTRYPOINT script.

Q32. What is the EXPOSE instruction?
Informs Docker that the container listens on specified network ports at runtime (acts as documentation, does not publish ports).

Q33. What is the ENV instruction?
Sets environment variables available during image build and container runtime.

Q34. What is the ARG instruction?
Defines build-time variables passed during build execution (docker build --build-arg VAR=val) not retained in final runtime images.

Q35. What is .dockerignore file?
A text file instructing Docker to exclude specified local files/folders (e.g., node_modules, .git) from build contexts to optimize speed and size.

5. Docker Container Lifecycle & Operations

Q36. What are the main states of a Docker Container?
Created, Running, Paused, Stopped, Restarting, and Dead.

Q37. What is docker run command?
Creates a new container from an image and starts it (combines docker create and docker start).

Q38. How do you run a container in detached mode?
docker run -d <image-name> (runs container in background printing container ID).

Q39. How do you access an interactive terminal inside a running container?
docker exec -it <container-id> /bin/sh (or /bin/bash).

Q40. Difference between docker stop and docker kill?
docker stop: Sends SIGTERM, allowing container 10 seconds to shut down gracefully before sending SIGKILL.
docker kill: Sends SIGKILL immediately to terminate container processes abruptly.

Q41. How do you view logs of a running container?
docker logs <container-id> (use -f flag to follow log output continuously).

Q42. How do you list active vs all containers?
docker ps (active running containers) and docker ps -a (all containers including stopped ones).

Q43. How do you automatically remove a container when it exits?
Pass the --rm flag to docker run (e.g., docker run --rm ubuntu).

Q44. What is restart policy in Docker (--restart)?
Configures container restart behavior on failure/exit: no, on-failure, always, unless-stopped.

Q45. How do you resource-limit a container (CPU and RAM)?
docker run --memory="512m" --cpus="1.5" <image-name>.

6. Docker Storage, Volumes & Bind Mounts

Q46. Why is container data ephemeral by default?
Because data written to the container's top writable layer is destroyed when the container instance is removed.

Q47. What are the three types of mounts in Docker?
Volumes, Bind Mounts, and tmpfs mounts.

Q48. What is a Docker Volume?
Managed storage managed directly by Docker on the host file system (/var/lib/docker/volumes/), independent of container lifecycles.

Q49. What is a Bind Mount?
Mounts an exact host directory or file path directly into a container filesystem path.

Q50. What is a tmpfs mount?
Mounts storage in host system memory (RAM) only, never writing data to host disk.

Q51. Compare Volumes vs Bind Mounts.
Volumes: Managed by Docker, portable, easy to back up, safe for multi-container access.
Bind Mounts: Rely on explicit host directory structures, sensitive to host OS permissions.

Q52. How do you create and list Docker Volumes?
docker volume create <vol-name> and docker volume ls.

Q53. How do you attach a volume to a container?
docker run -v vol-name:/app/data <image-name> or --mount source=vol-name,target=/app/data.

Q54. How do you share volumes between containers?
Using named volumes attached to multiple containers or using --volumes-from flag.

Q55. What is a dangling volume?
A volume no longer referenced or used by any existing container instance.

7. Docker Networking & Service Port Mapping

Q56. What is Docker Networking?
Enables communication between Docker containers and host/external systems.

Q57. What are default network drivers in Docker?
Bridge, Host, Overlay, Macvlan, and None.

Q58. What is the Bridge network driver?
Default network driver for standalone containers. Creates an isolated software bridge network on the host.

Q59. What is Host network driver (--network host)?
Removes network isolation between container and host OS, sharing host network interfaces directly (improves performance).

Q60. What is None network driver (--network none)?
Disables all networking capabilities for the container.

Q61. What is Overlay network driver?
Creates a distributed network spanning across multiple physical Docker host nodes (used in Docker Swarm and Kubernetes).

Q62. What is User-Defined Bridge Network?
A custom bridge network created manually (docker network create my-net) providing automatic DNS name resolution between containers.

Q63. How do you map/publish container ports to host ports?
docker run -p <host-port>:<container-port> <image-name> (e.g., docker run -p 8080:80 nginx).

Q64. What is the difference between Exposing and Publishing a port?
Exposing: Documents intended ports inside Dockerfile without enabling host access.
Publishing (-p): Opens and maps host ports to container ports through firewall rules.

Q65. How do you connect a running container to a network dynamically?
docker network connect <network-name> <container-id>.

8. Docker Compose & Multi-Container Setup

Q66. What is Docker Compose?
A tool used for defining and running multi-container Docker applications using a single declarative YAML configuration file.

Q67. What is docker-compose.yml file?
YAML file defining services, networks, volumes, environment variables, and dependencies for multi-container applications.

Q68. What are common CLI commands in Docker Compose?
docker compose up (starts services), docker compose down (stops & removes containers/networks), docker compose ps, docker compose logs.

Q69. How do you run Docker Compose in detached mode?
docker compose up -d.

Q70. What is depends_on attribute in docker-compose.yml?
Expresses startup order dependencies between services (e.g., web service waits for db service to start).

Q71. Does depends_on wait for database readiness?
No. It waits only for container startup, not application readiness inside the container (requires healthchecks).

Q72. What is a Service Healthcheck in Docker Compose?
Defines commands testing application readiness (e.g., pg_isready), delaying dependent services until health checks pass.

Q73. How does automatic networking work in Docker Compose?
Compose automatically creates a default user-defined bridge network connecting all services defined in the YAML file by service name.

Q74. How do you scale a service using Docker Compose?
docker compose up -d --scale web=3.

Q75. How do you specify alternative docker-compose files?
docker compose -f docker-compose.prod.yml up -d.

9. Multi-Stage Builds & Advanced Optimization

Q76. What is a Multi-Stage Build in Docker?
A technique using multiple FROM instructions in a single Dockerfile to separate build environments from slim runtime artifacts.

Q77. What are the benefits of Multi-Stage Builds?
Significantly reduces final image size, eliminates build tools (compilers, SDKs) from production, and improves container security.

Q78. Example of Multi-Stage Build workflow?
Stage 1 (Build): Compile Go code using golang:alpine.
Stage 2 (Runtime): Copy compiled binary into lightweight alpine or scratch image.

Q79. What is a scratch image in Docker?
A completely empty base image containing zero operating system libraries or binaries (0 bytes), used for static binaries.

Q80. How do you optimize Docker build caching?
Order Dockerfile steps from least frequently changed to most frequently changed (e.g., copy dependency manifests and install packages before copying application source code).

Q81. What is BuildKit in Docker?
An advanced image build engine offering parallel build processing, cache mounting, secret mounting, and faster execution times.

Q82. How do you pass secret files safely during build time without embedding them in image layers?
Use BuildKit secret mounts: RUN --mount=type=secret,id=mysecret cat /run/secrets/mysecret.

Q83. What is Alpine Linux and why is it popular for Docker images?
A security-oriented, lightweight Linux distribution (~5MB size) minimizing image sizes and security vulnerability surfaces.

Q84. What is a Distroless Image?
Base images containing strictly your application and runtime dependencies, omitting package managers, shells, and OS utilities.

Q85. How do you clean up system disk space in Docker?
docker system prune -a --volumes (deletes stopped containers, unused networks, unreferenced images, and volumes).

10. Security Best Practices, CI/CD & Kubernetes Integration

Q86. Why should you avoid running containers as root user?
Running as root exposes host kernel vulnerability exploit risks. Always create and use a non-root USER in Dockerfile.

Q87. How do you set a non-root user in Dockerfile?
RUN useradd -m appuser && USER appuser.

Q88. What is Container Image Scanning?
Scanning container images for known security vulnerabilities (CVEs) using tools like Trivy, Grype, or Docker Scout.

Q89. How do you enforce read-only root filesystems in containers?
docker run --read-only <image-name>.

Q90. What is Docker Swarm?
Docker's native built-in clustering and container orchestration tool for managing pools of Docker engines.

Q91. Compare Docker Swarm vs Kubernetes.
Docker Swarm: Simple setup, native Docker CLI integration, basic scaling; limited customization.
Kubernetes: Industry standard, highly complex, robust auto-scaling, self-healing, huge ecosystem.

Q92. How does Docker integrate with CI/CD Pipelines?
CI/CD workflows (GitHub Actions, Jenkins) automate running tests inside containers, building production images, and pushing them to image registries.

Q93. What is Docker Content Trust (DCT)?
Enables digital signing of container images using cryptographic keys to verify image publisher authenticity before deployment.

Q94. How do you manage secrets securely in Docker Compose/Swarm?
Use secrets section in Compose files or integration with external vaults (HashiCorp Vault, AWS Secrets Manager).

Q95. What is the difference between Docker Compose and Kubernetes?
Docker Compose manages multi-container deployments on a single host. Kubernetes manages container workloads across multi-node server clusters.

Q96. What is a Sidecar Container Pattern?
Deploying a secondary utility container (logging, proxy, monitoring) alongside a primary application container.

Q97. What is docker init command?
A utility creating starter Dockerfile, docker-compose.yml, and .dockerignore files tailored to your project stack automatically.

Q98. How do you troubleshoot a crashing container?
Inspect exit codes (docker ps -a), check container logs (docker logs), and run diagnostic commands via docker exec or ephemeral debug containers.

Q99. What does Exit Code 137 mean in Docker?
Indicates the container was forcibly terminated by the OS kernel Out-Of-Memory (OOM) killer due to exceeding memory limits.

Q100. Best practices for mastering Docker in production?
Use official minimal base images, build multi-stage Dockerfiles, enforce non-root users, implement health checks, use .dockerignore, scan images for vulnerabilities, store persistent data in volumes, and manage containers using orchestration engines (Kubernetes).

Top Companies Asking Docker Questions:
- Google
- Microsoft
- Amazon
- Adobe
- Oracle
- TCS
- Infosys
- Wipro
- Accenture
- Cognizant

Preparation Tips:
- Master daily Docker CLI operations (run, exec, logs, ps, stop, rm).
- Practice writing optimized multi-stage Dockerfiles using .dockerignore.
- Understand Docker networking modes, port mapping, and volume persistence.
- Gain hands-on experience building multi-container apps with Docker Compose.
- Learn security best practices (non-root users, image scanning, secret management).

Conclusion:
Docker is an indispensable containerization platform powering modern DevOps, cloud infrastructure, and software engineering workflows. Mastering these 100 core Docker interview questions along with practical container deployment experience will ensure complete confidence in technical interviews.

Happy Learning!
Team GotPlaced`
},
{
  id: 27,

  slug: "top-100-aws-interview-questions-2026",

  title: "Top 100 AWS Interview Questions and Answers (2026)",

  description:
    "Prepare for AWS interviews with the Top 100 AWS Interview Questions and Answers (2026). Learn Amazon Web Services fundamentals, EC2, S3, IAM, VPC, RDS, Lambda, CloudFront, Route 53, Elastic Load Balancer (ELB), Auto Scaling, CloudWatch, ECS, EKS, DynamoDB, API Gateway, Security Groups, CloudFormation, DevOps integration, and commonly asked AWS interview questions. This comprehensive guide is perfect for students, freshers, and experienced professionals preparing for Cloud, DevOps, Backend, and Full Stack Developer interviews at Amazon, Google, Microsoft, Adobe, Oracle, IBM, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, HCL, Tech Mahindra, and other leading companies.",

  image: "/aws-blog.jpg",

  author: "GotPlaced Team",

  category: "AWS",

  date: "17 July 2026",

  readTime: "28 min read",

  content: `Top 100 AWS Interview Questions and Answers (2026)

Amazon Web Services (AWS) is the world's leading cloud computing platform, offering more than 200 cloud services for computing, storage, databases, networking, security, analytics, artificial intelligence, and application deployment. AWS is widely used by startups, enterprises, and global technology companies, making it one of the most frequently asked topics in Cloud Computing, DevOps, Backend, and Full Stack Developer interviews.

Whether you're preparing for internships, campus placements, cloud engineer roles, or software engineering interviews, understanding AWS fundamentals is essential.

Topics Covered:
- AWS Cloud Fundamentals & Global Infrastructure
- Compute Services (EC2, Lambda, Elastic Beanstalk)
- Storage Services (S3, EBS, EFS, Glacier)
- Database Services (RDS, DynamoDB, Aurora, ElastiCache)
- Networking, VPC, Subnets & Gateways
- Content Delivery, DNS & Load Balancing (CloudFront, Route 53, ELB)
- Identity, Access Management (IAM) & Security
- Monitoring, Logging & Management (CloudWatch, CloudTrail)
- Containers & Orchestration (ECS, EKS, Fargate)
- Infrastructure as Code (CloudFormation, Terraform) & DevOps Best Practices

1. AWS Cloud Fundamentals & Global Infrastructure

Q1. What is Amazon Web Services (AWS)?
AWS is a secure, comprehensive cloud computing platform provided by Amazon that offers on-demand cloud services spanning compute, storage, databases, and AI over the internet on a pay-as-you-go pricing model.

Q2. What is AWS Global Infrastructure?
The underlying physical infrastructure consisting of Regions, Availability Zones (AZs), Local Zones, and Edge Locations distributed worldwide.

Q3. What is an AWS Region?
A separate geographic area consisting of multiple isolated Availability Zones designed to be completely independent and fault-tolerant.

Q4. What is an Availability Zone (AZ)?
One or more discrete data centers with redundant power, networking, and connectivity housed within an AWS Region.

Q5. What is an Edge Location?
Endpoints used by AWS Content Delivery Networks (CloudFront) to cache content close to end users to reduce latency.

Q6. What is the Shared Responsibility Model in AWS?
Security and compliance framework dividing duties: AWS is responsible for "Security OF the Cloud" (hardware, physical datacenters, virtualization), while the customer is responsible for "Security IN the Cloud" (data encryption, OS configurations, firewall rules, IAM).

Q7. What are the benefits of Cloud Computing over On-Premises?
Trade capital expense for variable expense, benefit from massive economies of scale, stop guessing capacity, increase speed and agility, and deploy globally in minutes.

Q8. What is AWS Free Tier?
An introductory tier allowing new AWS accounts to use specific cloud services free of charge up to certain monthly usage limits for 12 months or indefinitely.

Q9. What is AWS Well-Architected Framework?
A guiding set of design principles across six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.

Q10. What is AWS CLI?
Command Line Interface - a unified tool to manage and script AWS services directly from terminal shells.

2. Compute Services (EC2, Lambda, Elastic Beanstalk)

Q11. What is Amazon EC2 (Elastic Compute Cloud)?
A web service providing scalable, resizable virtual server instances (EC2 instances) in the cloud.

Q12. What are the pricing models for Amazon EC2 instances?
On-Demand, Reserved Instances, Spot Instances, Dedicated Hosts, and Savings Plans.

Q13. What are EC2 Spot Instances?
Unused EC2 capacity offered at steep discounts (up to 90%), with the caveat that AWS can reclaim instances with a 2-minute warning.

Q14. What are EC2 Instance Types?
Categorized based on workload specialization: General Purpose (T/M series), Compute Optimized (C series), Memory Optimized (R series), Accelerated Computing (P/G series), and Storage Optimized (I series).

Q15. What is an Amazon Machine Image (AMI)?
A pre-configured template containing the OS, application server, and applications required to launch an EC2 instance.

Q16. What is AWS Lambda?
A serverless, event-driven compute service that executes code in response to triggers without provisioning or managing underlying servers.

Q17. What are the key features and limits of AWS Lambda?
Zero server administration, automatic scaling, pay-per-millisecond execution, max execution timeout of 15 minutes, and stateless runtime environment.

Q18. What is AWS Elastic Beanstalk?
A Platform-as-a-Service (PaaS) simplifying deployment and scaling of web applications and services written in Java, .NET, PHP, Node.js, Python, and Ruby.

Q19. What is Amazon Lightsail?
An easy-to-use virtual private server (VPS) provider offering pre-packaged virtual machines, storage, and networking at a predictable low monthly price.

Q20. What is EC2 Instance Metadata?
Data about your running EC2 instance accessible locally via http://169.254.169.254/latest/meta-data/ used to configure or manage running instances.

3. Storage Services (S3, EBS, EFS, Glacier)

Q21. What is Amazon S3 (Simple Storage Service)?
An infinitely scalable, highly durable object storage service designed to store and retrieve any amount of data over the internet.

Q22. What are S3 Storage Classes?
Standard, S3 Intelligent-Tiering, S3 Standard-Infrequent Access (Standard-IA), S3 One Zone-IA, S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive.

Q23. What is S3 Bucket Versioning?
A feature keeping multiple variants of a file inside the same S3 bucket, protecting against accidental overwrites and deletions.

Q24. What is S3 Lifecycle Policy?
Automated rules transitioning objects between storage classes or expiring them permanently after a specified timeframe to reduce costs.

Q25. What is Amazon EBS (Elastic Block Store)?
Persistent block storage volumes designed for use with EC2 instances (acts like raw hard drives attached to virtual servers).

Q26. Difference between EBS and S3?
EBS: Block storage attached to a single EC2 instance for OS/database files (low latency).
S3: Object storage accessed via HTTP APIs over the internet (infinitely scalable, file storage).

Q27. What is an EBS Snapshot?
A point-in-time incremental backup of an EBS volume stored securely in Amazon S3.

Q28. What is Amazon EFS (Elastic File System)?
Fully managed file storage providing shared POSIX-compliant file systems accessible concurrently across multiple EC2 instances via NFS protocol.

Q29. What is Amazon S3 Object Lock?
A WORM (Write Once, Read Many) model preventing S3 objects from being deleted or modified for a specified retention period.

Q30. What is Storage Gateway?
A hybrid cloud storage service giving on-premises applications seamless access to scalable AWS cloud storage.

4. Database Services (RDS, DynamoDB, Aurora, ElastiCache)

Q31. What is Amazon RDS (Relational Database Service)?
A managed relational database service handling administrative tasks like backups, patching, scaling, and replication for MySQL, PostgreSQL, MariaDB, SQL Server, and Oracle.

Q32. What is Amazon DynamoDB?
A fully managed, serverless, key-value and document NoSQL database delivering single-digit millisecond latency at any scale.

Q33. What is Amazon Aurora?
A MySQL and PostgreSQL-compatible relational database built for the cloud, offering 5x performance over standard MySQL with enterprise availability.

Q34. What is Amazon ElastiCache?
A fully managed in-memory data store and cache service supporting Redis and Memcached to accelerate application performance.

Q35. Difference between RDS Read Replicas and Multi-AZ Deployment?
Read Replicas: Asynchronous replication scaling read performance across multiple nodes.
Multi-AZ: Synchronous standby replica providing automatic failover and high availability for disaster recovery.

Q36. What is DynamoDB Global Tables?
A fully managed multi-region, multi-active database replication feature providing fast local read and write performance across global AWS regions.

Q37. What is Amazon Redshift?
A fast, fully managed petabyte-scale data warehouse service optimized for online analytical processing (OLAP) and business intelligence queries.

Q38. What is Amazon Neptune?
A fully managed graph database service optimized for building and running applications working with highly connected datasets.

Q39. What is Database Migration Service (DMS)?
A service helping migrate relational and NoSQL databases to AWS quickly and securely with minimal downtime.

Q40. What is RDS Multi-Region Replication?
Replicating relational databases across different AWS regions for disaster recovery and global read scalability.

5. Networking, VPC, Subnets & Gateways

Q41. What is Amazon VPC (Virtual Private Cloud)?
A logically isolated private network in AWS where you launch your AWS resources in a defined virtual network environment.

Q42. Difference between Public Subnet and Private Subnet?
Public Subnet: Has a route table pointing to an Internet Gateway (IGW), allowing direct internet access.
Private Subnet: Lacks direct internet route, isolated from public internet traffic.

Q43. What is an Internet Gateway (IGW)?
A horizontally scaled, redundant VPC component connecting your VPC to the public internet.

Q44. What is a NAT Gateway (Network Address Translation)?
Enables instances in a private subnet to initiate outbound connections to the internet (e.g., software updates) while blocking inbound internet connections.

Q45. What is a VPC Peering Connection?
A networking connection between two VPCs routing traffic privately using private IP addresses without traversing the public internet.

Q46. What is AWS Direct Connect?
A dedicated private network connection linking your on-premises data center directly to AWS, bypassing public internet for higher bandwidth and security.

Q47. What is Amazon Route 53?
A scalable Domain Name System (DNS) and domain registrar web service routing end-user requests to internet applications.

Q48. What is VPC Endpoint?
Enables private connectivity between your VPC and supported AWS services (e.g., S3, DynamoDB) without requiring Internet Gateways or NAT gateways.

Q49. What is AWS Transit Gateway?
A central hub connecting VPCs and on-premises networks together through a simplified hub-and-spoke router architecture.

Q50. What is VPN (Virtual Private Network) in AWS?
Establishes secure encrypted VPN tunnels between your corporate network and AWS VPC over the internet using AWS Client VPN or Site-to-Site VPN.

6. Content Delivery, DNS & Load Balancing (CloudFront, Route 53, ELB)

Q51. What is Amazon CloudFront?
AWS's high-speed Content Delivery Network (CDN) securely delivering static and dynamic content, APIs, and video streams globally via edge locations.

Q52. What is Elastic Load Balancer (ELB)?
Automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses across multiple AZs.

Q53. What are the three types of Elastic Load Balancers supported in AWS?
1. Application Load Balancer (ALB) - Layer 7 (HTTP/HTTPS).
2. Network Load Balancer (NLB) - Layer 4 (TCP/UDP/TLS, ultra-high performance).
3. Gateway Load Balancer (GWLB) - Operates at Layer 3/4 for deploying virtual networking appliances.

Q54. Difference between ALB and NLB?
ALB: Operates at Layer 7, routes based on HTTP headers, paths, and hostnames (best for web apps and microservices).
NLB: Operates at Layer 4, handles millions of requests per second with ultra-low latency based on IP protocols (best for real-time streaming).

Q55. What is Route 53 Routing Policy?
Rules defining how Route 53 responds to DNS queries (Simple, Failover, Geolocation, Geoproximity, Latency, Multivalue Answer, and Weighted routing).

Q56. What is SSL/TLS Certificate management in AWS?
AWS Certificate Manager (ACM) provisions, manages, and deploys public and private SSL/TLS certificates for use with AWS services.

7. Identity, Access Management (IAM) & Security

Q57. What is AWS IAM (Identity and Access Management)?
A web service helping securely control access to AWS resources by managing users, groups, roles, and policies.

Q58. What is an IAM Policy?
A JSON document defining permissions explicitly (specifying actions allowed/denied on resources).

Q59. Difference between IAM User, IAM Group, and IAM Role?
IAM User: An individual entity (person or service) with permanent security credentials.
IAM Group: A collection of IAM users sharing identical permission policies.
IAM Role: An identity with temporary permissions that can be assumed by trusted users, applications, or AWS services.

Q60. What is IAM Multi-Factor Authentication (MFA)?
An extra layer of security requiring users to provide a secondary verification code from an MFA device during sign-in.

Q61. What is AWS Shield?
A managed Distributed Denial of Service (DDoS) protection service safeguarding web applications running on AWS.

Q62. What is AWS WAF (Web Application Firewall)?
Protects web applications against common web exploits and SQL injection using customizable security rules.

Q63. What is AWS KMS (Key Management Service)?
A managed service creating and controlling cryptographic encryption keys used to encrypt data across AWS services.

Q64. What is Amazon Inspector?
An automated security vulnerability assessment service scanning AWS workloads for software vulnerabilities and network exposures.

Q65. What is AWS Secrets Manager?
Helps securely rotate, manage, and retrieve database credentials, API keys, and secrets throughout their lifecycle.

8. Monitoring, Logging & Management (CloudWatch, CloudTrail)

Q66. What is Amazon CloudWatch?
A monitoring and observability service collecting operational metrics, logs, and alarms from AWS resources and applications.

Q67. What is CloudWatch Alarms?
Triggers automated notifications or actions (e.g., Auto Scaling, rebooting EC2) when a metric breaches a defined threshold over time.

Q68. What is AWS CloudTrail?
A governance and auditing service recording account activity, API calls, and user actions across your AWS infrastructure.

Q69. Difference between CloudWatch and CloudTrail?
CloudWatch: Monitors performance metrics, resource health, and application logs.
CloudTrail: Audits security compliance by recording who made API calls and when.

Q70. What is AWS Trusted Advisor?
An online tool providing real-time guidance to help provision your resources following AWS best practices for cost, security, and performance.

Q71. What is AWS X-Ray?
A service helping developers analyze and debug distributed microservice applications through end-to-end tracing.

Q72. What is AWS Config?
A service providing inventory, configuration history, and configuration change notification of AWS resources for compliance auditing.

9. Containers & Orchestration (ECS, EKS, Fargate)

Q73. What is Amazon ECS (Elastic Container Service)?
A fully managed container orchestration service supporting Docker containers on AWS without managing complex cluster control planes.

Q74. What is Amazon EKS (Elastic Kubernetes Service)?
A managed Kubernetes service allowing you to run Kubernetes clusters on AWS without managing control plane nodes.

Q75. What is AWS Fargate?
A serverless compute engine for containers compatible with both ECS and EKS, eliminating the need to manage EC2 instance clusters.

Q76. Difference between ECS and EKS?
ECS: AWS proprietary container orchestration service (simpler setup).
EKS: Managed standard Kubernetes orchestration service (open-source Kubernetes ecosystem).

Q77. What is Amazon ECR (Elastic Container Registry)?
A fully managed secure Docker container registry making it easy to store, manage, and deploy container images.

10. Infrastructure as Code (CloudFormation) & DevOps Best Practices

Q78. What is AWS CloudFormation?
An Infrastructure as Code (IaC) service using JSON or YAML templates to provision and manage AWS resources declaratively.

Q79. What is AWS Elastic Container Service AMI / Bottlerocket?
A specialized Linux OS built by Amazon optimized specifically for running containers securely.

Q80. What is AWS OpsWorks?
A configuration management service providing managed instances of Chef and Puppet.

Q81. What is AWS CodePipeline?
A fully managed continuous delivery (CI/CD) service helping automate build, test, and release pipelines.

Q82. What is AWS CodeBuild?
A fully managed CI build service compiling source code, running unit tests, and producing deployable software packages.

Q83. What is AWS CodeDeploy?
Automates software deployments to various compute services like EC2, Lambda, and ECS.

Q84. What is AWS CDK (Cloud Development Kit)?
An open-source framework allowing developers to define cloud infrastructure using familiar programming languages (TypeScript, Python, Java) compiled into CloudFormation.

Q85. What is AWS Lambda Layers?
A distribution mechanism for libraries, runtimes, and dependencies shared across multiple Lambda functions.

Q86. What is Amazon SNS (Simple Notification Service)?
A fully managed pub/sub messaging and mobile notification service delivering messages to subscribers or endpoints.

Q87. What is Amazon SQS (Simple Queue Service)?
A fully managed message queuing service decoupling microservices, distributed systems, and serverless applications.

Q88. Difference between SNS and SQS?
SNS: Publish-Subscribe push model broadcasting messages to multiple subscribers simultaneously.
SQS: Message queue pull model holding messages until consumers process them individually.

Q89. What is Amazon EventBridge (CloudWatch Events)?
A serverless event bus service connecting application data from various AWS services, SaaS apps, and custom sources.

Q90. What is AWS Step Functions?
A low-code visual workflow orchestration service combining Lambda and other AWS services into robust serverless state machines.

Q91. What is AWS Batch?
Runs batch computing workloads efficiently across AWS compute resources without managing job schedulers.

Q92. What is AWS Athena?
An interactive query service analyzing data in Amazon S3 directly using standard SQL without managing database infrastructure.

Q93. What is AWS Glue?
A fully managed serverless data integration and ETL (Extract, Transform, Load) service.

Q94. What is Amazon Rekognition?
A service adding intelligent computer vision and facial/object analysis to your applications.

Q95. What is Amazon Polly?
A cloud service converting textual content into lifelike human speech audio.

Q96. What is Amazon Lex?
A service building conversational voice and text chatbots using advanced deep learning natural language understanding (NLU).

Q97. What is Amazon SageMaker?
A fully managed platform empowering developers to build, train, and deploy machine learning models at scale.

Q98. What is AWS Cost Explorer?
A tool visualizing, understanding, and managing your AWS costs and usage trends over time.

Q99. What are AWS Budgets?
Allows you to set custom spending limits alerting you when costs exceed specified budget thresholds.

Q100. Best practices for mastering AWS in production?
Implement least-privilege IAM permissions, encrypt data at rest and in transit (KMS/TLS), use Auto Scaling groups behind load balancers, orchestrate infrastructure via CloudFormation/Terraform, monitor resources with CloudWatch, configure Multi-AZ failovers, and optimize costs using appropriate EC2 pricing and S3 lifecycle rules.

Top Companies Asking AWS Questions:
- Amazon
- Google
- Microsoft
- Adobe
- Oracle
- IBM
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master core cloud infrastructure services (EC2, S3, IAM, VPC, RDS).
- Understand networking concepts like Subnets, Internet Gateways, NAT, and Security Groups.
- Learn serverless architecture (Lambda, SQS, SNS, API Gateway).
- Practice IaC using CloudFormation or Terraform.
- Study high availability, fault tolerance, and security compliance models.

Conclusion:
AWS is the dominant cloud computing provider powering modern enterprise architectures and software engineering. Mastering these 100 core AWS interview questions along with practical cloud deployment experience will give you complete confidence in technical interviews.

Happy Learning!
Team GotPlaced
`
},
{
  id: 28,

  slug: "top-100-devops-interview-questions-2026",

  title: "Top 100 DevOps Interview Questions and Answers (2026)",

  description:
    "Prepare for DevOps interviews with the Top 100 DevOps Interview Questions and Answers (2026). Learn DevOps Fundamentals, SDLC, CI/CD Pipelines, Git, GitHub, Docker, Kubernetes, Jenkins, AWS, Linux, Infrastructure as Code (IaC), Ansible, Terraform, Monitoring, Logging, Microservices, Containerization, Automation, Cloud Computing, and commonly asked DevOps interview questions. This complete guide is perfect for students, freshers, and experienced professionals preparing for DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Backend, and Full Stack Developer interviews at Amazon, Google, Microsoft, Adobe, Oracle, IBM, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, HCL, Tech Mahindra, and other leading companies.",

  image: "/devops-blog.jpg",

  author: "GotPlaced Team",

  category: "DevOps",

  date: "17 July 2026",

  readTime: "29 min read",

  content: `Top 100 DevOps Interview Questions and Answers (2026)

DevOps is a modern software development methodology that combines Development (Dev) and Operations (Ops) to automate software delivery, improve collaboration, and deploy applications faster and more reliably. It has become one of the most sought-after skills for Cloud Engineers, DevOps Engineers, Backend Developers, and Full Stack Developers.

Whether you're preparing for campus placements, internships, or experienced DevOps roles, understanding DevOps fundamentals is essential.

Topics Covered:
- DevOps Fundamentals & Culture
- Software Development Life Cycle (SDLC) & Agile
- Continuous Integration & Continuous Deployment (CI/CD)
- Version Control with Git & GitHub
- Containerization with Docker
- Container Orchestration with Kubernetes
- CI/CD Automation with Jenkins
- Linux Administration & Bash Scripting
- Cloud Computing & AWS Core Services
- Infrastructure as Code (Terraform & Ansible)
- Monitoring, Logging, SRE & Best Practices

1. DevOps Fundamentals & Culture

Q1. What is DevOps?
DevOps is a cultural and professional movement that bridges the gap between software development (Dev) and IT operations (Ops) teams to automate delivery, enhance collaboration, and increase deployment frequency.

Q2. What are the core pillars / principles of DevOps (CALMS)?
Culture, Automation, Lean, Measurement, and Sharing.

Q3. What problems did DevOps solve that traditional Waterfall/Siloed models faced?
Siloed communication barriers, "it works on my machine" friction, slow software release cycles, high deployment failure rates, and delayed feedback loops.

Q4. What is the role of a DevOps Engineer?
To design, implement, and maintain CI/CD pipelines, automate infrastructure provisioning, monitor system reliability, and optimize software deployment workflows.

Q5. What is Shift Left in DevOps?
Moving testing, security, and quality assurance processes earlier into the software development life cycle (SDLC) rather than testing at the end.

2. SDLC, Agile & CI/CD Pipelines

Q6. What is Continuous Integration (CI)?
A development practice where developers merge code changes frequently into a central repository, triggering automated builds and tests on every commit.

Q7. What is Continuous Delivery (CD)?
An automated software release process ensuring that code changes can be deployed safely to production at any time with a manual approval click.

Q8. What is Continuous Deployment (CD)?
An automated software release process where every code change passing automated tests is deployed directly to production without manual intervention.

Q9. What are the key stages of a typical CI/CD Pipeline?
Source Code Control -> Build -> Unit/Integration Testing -> Artifact Repository -> Staging/QA Deployment -> Production Deployment.

Q10. What is Agile Methodology vs DevOps?
Agile focuses on iterative software development and cross-functional team collaboration. DevOps extends Agile by focusing on continuous delivery, infrastructure automation, and operational stability.

3. Version Control (Git & GitHub)

Q11. Why is Version Control essential in DevOps?
It tracks every code change, provides rollback capabilities, enables team collaboration, and acts as the single source of truth for CI/CD pipeline triggers.

Q12. What is a Git Branching Strategy?
A defined convention for managing branches (e.g., Gitflow, GitHub Flow) to coordinate parallel feature development and release deployments safely.

Q13. What is a Pull Request / Merge Request?
A proposal to merge commits from a feature branch into a main branch accompanied by code reviews and automated CI checks.

4. Containerization (Docker)

Q14. What is Containerization?
An OS-level virtualization method packaging an application with all its dependencies, runtime, and configuration files into an isolated container.

Q15. Why is Docker crucial for DevOps?
It eliminates environment discrepancy bugs ("works on my machine"), ensures identical dev/staging/prod states, and speeds up application deployment.

Q16. What is the difference between Docker Image and Docker Container?
Docker Image is the immutable read-only template. Docker Container is the running, executable instance of that image.

Q17. What is a Multi-Stage Dockerfile build?
Using multiple FROM instructions in a single Dockerfile to build application code in heavy stages and copy binaries into slim runtime base images.

5. Container Orchestration (Kubernetes)

Q18. What is Kubernetes (K8s)?
An open-source container orchestration platform that automates deployment, scaling, networking, and management of containerized applications across clusters.

Q19. What is a Pod in Kubernetes?
The smallest deployable computing unit in Kubernetes representing one or more tightly coupled containers sharing network and storage resources.

Q20. What is a Deployment in Kubernetes?
A controller object managing ReplicaSets to ensure a specified number of identical Pod replicas run continuously.

Q21. What is a Service in Kubernetes?
An abstraction layer exposing a logical set of Pods via a persistent network IP address and port mapping.

Q22. What is Ingress in Kubernetes?
Manages external HTTP/HTTPS routing rules into cluster services, acting as a reverse proxy and load balancer.

Q23. What is Helm in Kubernetes?
The package manager for Kubernetes used to define, install, and upgrade complex multi-service applications using Helm Charts.

6. CI/CD Automation (Jenkins)

Q24. What is Jenkins?
An extensible, open-source automation server widely used to orchestrate build, test, and deployment CI/CD pipelines.

Q25. What is a Jenkinsfile?
A text file containing the definition of a Jenkins Pipeline written in Groovy syntax (Declarative or Scripted pipeline).

Q26. Difference between Declarative and Scripted Jenkins Pipeline?
Declarative: Structured, easier to read, strict syntax rules.
Scripted: Highly flexible, advanced programming control using Groovy scripting.

Q27. What is a Jenkins Agent (Slave)?
A remote machine or container configured to execute pipeline jobs offloaded from the Jenkins master controller node.

7. Linux Administration & Bash Scripting

Q28. Why is Linux knowledge mandatory for DevOps Engineers?
Most cloud servers, containers, and deployment targets run on Linux distributions; deep CLI and kernel understanding is essential for troubleshooting.

Q29. How do you check system resource usage in Linux?
top, htop, free -h, df -h, du, and vmstat.

Q30. What is chmod and chown?
chmod: Modifies file permission modes (read, write, execute).
chown: Changes file ownership and group association.

Q31. What is a Cron Job?
A time-based job scheduler used in Linux to execute scripts or administrative commands automatically at specified intervals.

Q32. How do you check active network listening ports in Linux?
netstat -tuln or ss -tuln.

8. Cloud Computing (AWS)

Q33. What is Cloud Computing?
On-demand delivery of IT computing resources over the internet on a pay-as-you-go pricing model.

Q34. What are the core AWS infrastructure components?
Regions, Availability Zones (AZs), and Edge Locations.

Q35. What is Amazon EC2 vs AWS Lambda?
EC2: Provisioned virtual server instances requiring OS configuration and management.
Lambda: Serverless compute executing code triggered by events without server provisioning.

Q36. What is an IAM Role vs IAM User?
IAM User: Permanent user identity with long-term credentials.
IAM Role: Temporary set of permissions assumed by trusted users or AWS services.

9. Infrastructure as Code (Terraform & Ansible)

Q37. What is Infrastructure as Code (IaC)?
Provisioning and managing computing infrastructure through machine-readable definition files rather than manual console clicks.

Q38. Difference between Imperative and Declarative IaC?
Imperative: Specifies exact step-by-step commands to achieve target state.
Declarative: Specifies desired end-state; the tool calculates steps required automatically.

Q39. What is Terraform?
An open-source declarative Infrastructure as Code tool created by HashiCorp used to provision multi-cloud resources.

Q40. What are core Terraform commands?
terraform init, terraform plan, terraform apply, terraform destroy.

Q41. What is Terraform State File (terraform.tfstate)?
A JSON file storing real-time mapping between your declared configuration and actual physical cloud resources.

Q42. What is Terraform Remote Backend?
Storing state files in secure remote shared storage (e.g., AWS S3 with DynamoDB locking) for team collaboration.

Q43. What is Ansible?
An open-source configuration management, application deployment, and task automation tool operating agentlessly over SSH.

Q44. Difference between Terraform and Ansible?
Terraform: Primarily focused on provisioning infrastructure (Servers, VPCs, Databases).
Ansible: Primarily focused on configuration management, software installation, and server provisioning inside instances.

Q45. What is an Ansible Playbook?
A YAML-formatted file defining structured automation tasks, roles, and play scripts executed against remote target hosts.

10. Monitoring, Logging, SRE & Best Practices

Q46. What is Monitoring vs Observability?
Monitoring: Tells you whether a system is working or failing based on metrics.
Observability: Tells you *why* a system is failing by inspecting internal logs, traces, and metrics.

Q47. What is Prometheus and Grafana?
Prometheus: Open-source monitoring and time-series metrics scraping database.
Grafana: Visualization dashboard tool querying Prometheus to render performance charts and alerts.

Q48. What is ELK Stack?
Elasticsearch (search engine), Logstash (log ingestion pipeline), and Kibana (log visualization dashboard) used for centralized logging.

Q49. What is Site Reliability Engineering (SRE)?
An engineering discipline incorporating software engineering principles into IT infrastructure operations to build scalable and reliable systems.

Q50. What is Chaos Engineering?
The discipline of intentionally injecting system failures and faults into a production environment to test resilience and fault tolerance.

Top Companies Asking DevOps Questions:
- Amazon
- Google
- Microsoft
- Netflix
- Adobe
- Oracle
- IBM
- TCS
- Infosys
- Accenture

Preparation Tips:
- Master Linux fundamentals, shell scripting, and network troubleshooting.
- Build end-to-end CI/CD pipelines using Jenkins, Git, and Docker.
- Learn container orchestration with Kubernetes and Helm charts.
- Practice Infrastructure as Code using Terraform and configuration management with Ansible.
- Understand cloud architecture (AWS), monitoring tools (Prometheus/Grafana), and logging stacks.

Conclusion:
DevOps is the backbone of modern software engineering and cloud deployment. Mastering these core interview questions along with hands-on automation and cloud practice will ensure complete confidence in technical interviews.

Happy Learning!
Team GotPlaced
`
},
{
  id: 29,

  slug: "top-100-kubernetes-interview-questions-2026",

  title: "Top 100 Kubernetes Interview Questions and Answers (2026)",

  description:
    "Prepare for Kubernetes interviews with the Top 100 Kubernetes Interview Questions and Answers (2026). Learn Kubernetes Fundamentals, Pods, Nodes, Clusters, Deployments, Services, Namespaces, ConfigMaps, Secrets, Volumes, Ingress, ReplicaSets, StatefulSets, DaemonSets, Helm, Autoscaling, Kubernetes Architecture, Container Orchestration, and commonly asked Kubernetes interview questions. This complete guide is ideal for students, freshers, and experienced professionals preparing for DevOps, Cloud, Backend, and Full Stack Developer interviews at Amazon, Google, Microsoft, Adobe, Oracle, IBM, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, HCL, Tech Mahindra, and other leading companies.",

  image: "/kubernetes-blog.jpg",

  author: "GotPlaced Team",

  category: "Kubernetes",

  date: "17 July 2026",

  readTime: "30 min read",

  content: `Top 100 Kubernetes Interview Questions and Answers (2026)

Kubernetes (K8s) is the world's most popular container orchestration platform used to deploy, manage, and scale containerized applications. It automates application deployment, scaling, load balancing, and high availability, making it one of the most important technologies for DevOps Engineers, Cloud Engineers, Backend Developers, and Full Stack Developers.

Whether you're preparing for internships, campus placements, or experienced cloud engineering roles, mastering Kubernetes concepts is essential.

Topics Covered:
- Kubernetes Fundamentals & Architecture
- Control Plane Components & Worker Nodes
- Pods, Namespaces & Container Lifecycles
- Deployments, ReplicaSets & Controllers
- StatefulSets, DaemonSets & Jobs
- Services, Ingress & Cluster Networking
- ConfigMaps, Secrets & Volume Storage
- Helm Package Manager & Chart Management
- Autoscaling (HPA, VPA, Cluster Autoscaler)
- Security, RBAC, Troubleshooting & Best Practices

1. Kubernetes Fundamentals & Architecture

Q1. What is Kubernetes (K8s)?
Kubernetes is an open-source container orchestration engine originally designed by Google for automating deployment, scaling, and operational management of containerized workloads across server clusters.

Q2. What are the primary responsibilities of Kubernetes?
Automated load balancing, self-healing container restarts, horizontal scaling, service discovery, rolling updates, secret management, and storage orchestration.

Q3. What is a Kubernetes Cluster?
A set of grouped computing machines (nodes)—consisting of one Control Plane master node and multiple worker nodes—running containerized applications.

Q4. What are the core components of the Kubernetes Control Plane?
1. API Server (kube-apiserver)
2. etcd (Distributed Key-Value Store)
3. Controller Manager (kube-controller-manager)
4. Scheduler (kube-scheduler)
5. Cloud Controller Manager (CCM)

Q5. What is the API Server (kube-apiserver)?
The central front-end control point exposing the Kubernetes API, processing REST requests, and acting as the communication hub for cluster components.

Q6. What is etcd in Kubernetes?
A strongly consistent, distributed key-value store used by Kubernetes to store all cluster state data, configurations, and metadata.

Q7. What is kube-scheduler?
The control plane component responsible for assigning newly created Pods to appropriate worker nodes based on resource availability and constraints.

Q8. What is kube-controller-manager?
A daemon running core control loops (Node Controller, Replication Controller, Endpoints Controller) to regulate cluster state toward desired configurations.

Q9. What are the components running on Kubernetes Worker Nodes?
1. Kubelet
2. Kube-Proxy
3. Container Runtime (Docker, containerd, CRI-O)

Q10. What is Kubelet?
The primary agent running on every worker node ensuring containers described in Pod specs are running and healthy.

2. Control Plane Components & Worker Nodes

Q11. What is Kube-Proxy?
A network proxy running on each worker node maintaining network rules and facilitating TCP/UDP packet forwarding for Kubernetes Services.

Q12. What is kubectl?
The command-line configuration tool used to communicate with the Kubernetes API server and execute management commands.

Q13. What is a Node in Kubernetes?
A worker machine (physical server or virtual machine) running Kubernetes container workloads.

Q14. How do you check cluster node status using kubectl?
kubectl get nodes or kubectl describe node <node-name>.

Q15. What is a Master Node vs Worker Node?
Master Node (Control Plane): Manages scheduling, state storage, and cluster orchestration.
Worker Node: Hosts actual containerized application workloads and pods.

Q16. What is Node Cordon and Drain?
Cordon: Marks a node as unschedulable to prevent new Pod scheduling.
Drain: Evicts all running Pods safely from a node before maintenance operations.

Q17. What is a Static Pod?
Pods managed directly by the Kubelet daemon on a specific node without API server or control plane intervention.

Q18. What is CoreDNS in Kubernetes?
The standard cluster DNS server providing internal service name resolution and DNS record lookups for Pods and Services.

Q19. What is the Container Network Interface (CNI)?
A specification and plugin architecture enabling networking configuration for containers (e.g., Calico, Flannel, Cilium).

Q20. What is a Cluster IP vs NodePort vs LoadBalancer?
ClusterIP: Exposes service internally within cluster only.
NodePort: Exposes service on a static port across all worker nodes.
LoadBalancer: Provisions a cloud provider load balancer routing traffic to cluster nodes.

3. Pods, Namespaces & Container Lifecycles

Q21. What is a Pod?
The smallest deployable computing object in Kubernetes containing one or more tightly coupled containers sharing network IP and storage volumes.

Q22. Why does Kubernetes run multiple containers in a single Pod?
To support helper sidecar patterns where containers need to share localhost networking, memory space, and local file storage volumes.

Q23. What is a Namespace in Kubernetes?
A logical isolation mechanism dividing cluster resource quotas and names among multiple teams or projects (e.g., default, kube-system, production).

Q24. How do you list all resources across all namespaces?
kubectl get all --all-namespaces

Q25. What is the lifecycle phases of a Pod?
Pending, Running, Succeeded, Failed, and Unknown.

Q26. What is a Liveness Probe?
A health check determining when a container needs to be restarted if its internal application becomes deadlocked or unresponsive.

Q27. What is a Readiness Probe?
A health check determining when a Pod is ready to accept incoming network traffic from services.

Q28. What is a Startup Probe?
A health check verifying if slow-starting container applications have successfully initialized before liveness/readiness probes start.

Q29. What is Pod Disruption Budget (PDB)?
Defines limits on the number of Pods that can be terminated simultaneously during voluntary disruptions like node upgrades.

Q30. What is an Init Container?
Specialized containers running to completion before application containers inside a Pod start up (used for setting up environment dependencies).

4. Deployments, ReplicaSets & Controllers

Q31. What is a Deployment?
A higher-level controller managing ReplicaSets to ensure declarative rolling updates, rollbacks, and desired replica counts for Pods.

Q32. What is a ReplicaSet?
A controller ensuring a stable set of identical Pod replica instances are running concurrently.

Q33. Difference between ReplicationController and ReplicaSet?
ReplicationController supports only exact equality-based selectors. ReplicaSet supports advanced set-based selectors (in, notin, exists).

Q34. What is a Rolling Update in Deployments?
Updating application versions incrementally by terminating old Pods and provisioning new ones progressively without downtime.

Q35. How do you rollback a failed Deployment?
kubectl rollout undo deployment/<deployment-name>.

Q36. How do you check deployment rollout history?
kubectl rollout history deployment/<deployment-name>.

Q37. What is a DaemonSet?
Ensures that all (or specific) worker nodes run a single copy of a specified Pod (used for log collectors, monitoring agents like Prometheus).

Q38. What is a StatefulSet?
A controller managing stateful applications requiring unique network identifiers, stable persistent storage, and ordered deployment/scaling.

Q39. What is a Job in Kubernetes?
Runs one or more Pods to completion, ensuring batch processing tasks finish successfully.

Q40. What is a CronJob?
Manages time-based execution of Jobs on a repeating schedule (cron format).

5. Services, Ingress & Cluster Networking

Q41. What is a Service in Kubernetes?
An abstract way to expose an application running on a set of Pods as a stable network service endpoint.

Q42. What are the four main Service Types in Kubernetes?
ClusterIP, NodePort, LoadBalancer, and ExternalName.

Q43. What is an Ingress controller?
A reverse proxy and load balancer (e.g., Nginx Ingress, Traefik) managing external HTTP/HTTPS routing rules into cluster services.

Q44. What is the difference between Service and Ingress?
Service handles Layer 4 TCP/UDP routing within cluster nodes. Ingress handles Layer 7 HTTP/HTTPS path-based and hostname routing from outside.

Q45. What is Network Policy in Kubernetes?
Rules controlling network traffic flow at IP/port level between Pods (firewall rules for microservices).

Q46. What is kube-dns / CoreDNS role in service discovery?
Translates internal service names automatically into corresponding cluster IP addresses.

Q47. What is ExternalName Service?
Maps a Kubernetes service name to an external DNS name without creating proxy rules.

Q48. What is IP Masquerading in Kubernetes networking?
Hiding internal Pod IP addresses behind node IPs when communicating outside cluster networks.

Q49. How do Pods communicate across different nodes?
Using CNI plugins wrapping packets in overlay networks (VXLAN, IP-in-IP) or direct routing.

Q50. What is headless service?
A Service with clusterIP: None that allows direct DNS resolution of individual Pod IPs without load balancing.

6. ConfigMaps, Secrets & Volume Storage

Q51. What is a ConfigMap?
An API object used to store non-confidential configuration key-value data separate from container image code.

Q52. What is a Secret in Kubernetes?
An object used to store sensitive data (passwords, TLS certificates, API tokens) encoded in Base64 format.

Q53. Are Secrets encrypted by default in Kubernetes?
No. Secrets are only base64 encoded by default. True encryption at rest requires enabling etcd encryption configurations.

Q54. What are the ways to consume ConfigMaps and Secrets inside Pods?
1. As environment variables.
2. As mounted configuration files in a volume.
3. Via command-line arguments in container specs.

Q55. What is a Volume in Kubernetes?
Storage attached to a Pod providing persistent file storage across container restarts.

Q56. What is PersistentVolume (PV)?
A cluster-wide piece of storage provisioned by an administrator or dynamically via StorageClasses.

Q57. What is PersistentVolumeClaim (PVC)?
A request for storage by a user/developer matching PV resources based on size and access modes.

Q58. What is a StorageClass?
Defines dynamic provisioning parameters (provisioner, backup type, IOPS) for creating PersistentVolumes automatically.

Q59. What are Volume Access Modes?
RWO (ReadWriteOnce), ROX (ReadOnlyMany), RWX (ReadWriteMany), and RWOP (ReadWriteOncePod).

Q60. What is emptyDir volume?
A temporary scratch directory created when a Pod is assigned to a node, destroyed when the Pod terminates.

7. Helm Package Manager & Chart Management

Q61. What is Helm?
The official package manager for Kubernetes used to define, install, and upgrade complex multi-service applications.

Q62. What is a Helm Chart?
A package format containing all required Kubernetes YAML resource templates and configuration files for an application.

Q63. What is values.yaml in Helm?
A file containing default configuration parameter values used to customize Helm chart templates during installation.

Q64. What are popular Helm CLI commands?
helm install, helm upgrade, helm uninstall, helm list, helm repo add, helm search.

Q65. What is Helm Tiller (legacy)?
The server-side component of Helm 2 that ran inside the cluster. Removed completely in Helm 3 for security improvements.

Q66. What is Chart Museum / OCI Registry?
Repositories used to store, host, and distribute packaged Helm charts.

Q67. How do you roll back a Helm deployment?
helm rollback <release-name> <revision-number>.

Q68. What is helm template command?
Renders chart templates locally into raw Kubernetes YAML manifests without installing them to a cluster.

Q69. What are Helm Hooks?
Allows executing scripts or actions at specific points in a release lifecycle (e.g., pre-install, post-upgrade).

Q70. What is Helm Dependency?
Managing sub-charts required by a parent Helm chart via Chart.yaml dependencies.

8. Autoscaling (HPA, VPA, Cluster Autoscaler)

Q71. What is Horizontal Pod Autoscaler (HPA)?
Automatically scales the number of Pod replicas in a deployment up or down based on observed CPU utilization or custom metrics.

Q72. What is Vertical Pod Autoscaler (VPA)?
Automatically adjusts CPU and memory resource requests and limits of running Pod containers.

Q73. What is Cluster Autoscaler?
Scales the physical number of worker nodes in a Kubernetes cluster up or down based on pending unschedulable Pods.

Q74. What is Kubernetes Event-driven Autoscaling (KEDA)?
An application-autoscaling component scaling workloads based on event queue metrics (Kafka, RabbitMQ, SQS).

Q75. What is Metrics Server in Kubernetes?
A cluster-wide aggregator of resource usage data (CPU/memory) required by HPA and kubectl top.

9. Security, RBAC, Troubleshooting & Best Practices

Q76. What is Role-Based Access Control (RBAC) in Kubernetes?
A security authorization mechanism regulating access to Kubernetes resources based on user roles and permissions.

Q77. What is Role vs ClusterRole?
Role: Defines permissions scoped to a single namespace.
ClusterRole: Defines permissions scoped cluster-wide across all namespaces.

Q78. What is RoleBinding vs ClusterRoleBinding?
RoleBinding: Grants Role permissions to users/service accounts within a namespace.
ClusterRoleBinding: Grants ClusterRole permissions cluster-wide.

Q79. What is a Service Account?
An identity assigned to Pod processes to authenticate securely with the Kubernetes API server.

Q80. What is Network Policies used for?
Isolating network traffic between Pods and namespaces using ingress and egress firewall rules.

Q81. What is Pod Security Standards (PSS)?
Defines security levels (Privileged, Baseline, Restricted) restricting security privileges of Pod containers.

Q82. How do you troubleshoot a crashing Pod?
kubectl describe pod <pod-name> (events), kubectl logs <pod-name>, and checking exit codes.

Q83. What does OOMKilled mean in kubectl get pods?
Out Of Memory Killed - container exceeded its assigned memory limit and was terminated by the node kernel.

Q84. What is kubectl port-forward?
Forwards local machine ports directly to a Pod or Service for debugging purposes (kubectl port-forward pod/nginx 8080:80).

Q85. What is kubectl exec?
Executes interactive commands inside a running container (kubectl exec -it <pod-name> -- /bin/bash).

Q86. What is kubectl diff?
Compares live cluster resource configurations against local YAML manifest files.

Q87. What is kube-bench?
An automated security tool checking Kubernetes cluster setups against CIS benchmarks.

Q88. What is GitOps in Kubernetes?
An operational framework using Git repositories as the single source of truth for declarative infrastructure and cluster deployment (ArgoCD, Flux).

Q89. What is ArgoCD?
A popular declarative GitOps continuous delivery tool for Kubernetes.

Q90. What is a Custom Resource Definition (CRD)?
Allows developers to extend Kubernetes API by defining custom domain-specific resource objects.

Q91. What is an Operator in Kubernetes?
A custom controller pattern combining CRDs and domain-specific business logic to manage complex stateful applications (e.g., Prometheus Operator).

Q92. What is kubeadm?
A tool built to bootstrap secure, production-grade Kubernetes clusters easily.

Q93. What is Minikube?
A tool running a single-node local Kubernetes cluster inside a virtual machine for local development and testing.

Q94. What is Kind (Kubernetes in Docker)?
Runs local Kubernetes clusters using Docker container nodes instead of virtual machines.

Q95. What is K3s?
A certified, lightweight, fully compliant Kubernetes distribution designed for edge computing and IoT devices.

Q96. What is etcd backup and restore?
Using etcdctl snapshot save to back up cluster etcd database state and snapshot restore for disaster recovery.

Q97. What is admission controller in Kubernetes?
A piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object, for validation or mutation.

Q98. What is Mutating vs Validating Admission Webhooks?
Mutating: Modifies incoming object requests (e.g., adding sidecars).
Validating: Checks incoming object requests against security/policy rules and accepts or rejects them.

Q99. What is taint and toleration in Kubernetes?
Taints allow nodes to repel a set of Pods. Tolerations are applied to Pods allowing them to schedule onto tainted nodes.

Q100. Best practices for managing production Kubernetes clusters?
Use Namespace isolation, enforce RBAC least privilege, set resource requests and limits on all containers, use readiness and liveness probes, store secrets securely with external vaults, implement GitOps deployments, enable network policies, and back up etcd regularly.

Top Companies Asking Kubernetes Questions:
- Amazon
- Google
- Microsoft
- Adobe
- Oracle
- IBM
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master core architecture components (Control Plane vs Worker Nodes).
- Practice writing and deploying Pods, Deployments, and Services via kubectl.
- Understand networking, Ingress controllers, and persistent storage (PV/PVC).
- Learn Helm charts, package management, and HPA autoscaling.
- Study security best practices (RBAC, Network Policies, Taints/Tolerations).

Conclusion:
Kubernetes is the undisputed king of container orchestration and modern cloud architecture. Mastering these 100 core Kubernetes interview questions along with hands-on cluster management will ensure complete confidence in technical interviews.

Happy Learning!
Team GotPlaced
`
},
{
  id: 30,

  slug: "top-100-linux-interview-questions-2026",

  title: "Top 100 Linux Interview Questions and Answers (2026)",

  description:
    "Prepare for Linux interviews with the Top 100 Linux Interview Questions and Answers (2026). Learn Linux Fundamentals, File System, Shell Commands, Permissions, Processes, Users & Groups, Bash Scripting, Networking, SSH, Cron Jobs, Package Management, Disk Management, System Monitoring, Services, Environment Variables, and commonly asked Linux interview questions. This comprehensive guide is perfect for students, freshers, and experienced professionals preparing for DevOps, Cloud, Backend, System Administrator, and Full Stack Developer interviews at Amazon, Google, Microsoft, Adobe, Oracle, IBM, TCS, Infosys, Wipro, Accenture, Cognizant, Capgemini, Deloitte, HCL, Tech Mahindra, and other leading companies.",

  image: "/linux-blog.jpg",

  author: "GotPlaced Team",

  category: "Linux",

  date: "17 July 2026",

  readTime: "28 min read",

  content: `Top 100 Linux Interview Questions and Answers (2026)

Linux is one of the most widely used operating systems for servers, cloud platforms, DevOps environments, and enterprise applications. Most modern applications run on Linux, making it an essential skill for software developers, backend engineers, cloud engineers, and DevOps professionals.

Whether you're preparing for internships, campus placements, or experienced technical roles, mastering Linux concepts and commands is essential.

Topics Covered:
- Linux Fundamentals & Architecture
- Linux Kernel & File System Hierarchy (FHS)
- Essential Shell Commands & Navigation
- File Permissions, Ownership & ACLs
- Users, Groups & Privilege Management (sudo, su)
- Process Management, Signals & Resource Monitoring
- Shell Scripting & Bash Automation
- Networking, SSH & Remote Connections
- Cron Jobs, Job Control & Task Scheduling
- Package Managers, Disk Management & Systemd Services

1. Linux Fundamentals & Architecture

Q1. What is Linux?
Linux is a clone of the Unix operating system, built as a free, open-source Unix-like OS known for exceptional stability, multi-user capability, security, and high performance.

Q2. What is the Linux Kernel?
The core underlying engine of the operating system that acts as an interface between system hardware and software processes, managing CPU, memory, drivers, and system calls.

Q3. What is the difference between Linux and Unix?
Unix is a proprietary operating system developed by AT&T. Linux is a free, open-source clone of Unix whose source code is freely available to modify.

Q4. What is a Shell in Linux?
A command-line interpreter (CLI) program that takes user inputs from the terminal and executes operating system kernel functions.

Q5. What is Bash?
Bash (Bourne Again Shell) is the default Unix shell and command language interpreter used across most Linux distributions.

Q6. What is the GNU Project?
A free software movement providing core user utilities, compilers (GCC), and system tools bundled with the Linux kernel to form a complete GNU/Linux OS.

Q7. What is a Linux Distribution (Distro)?
A packaged version of Linux containing the Linux kernel bundled with system tools, package managers, and desktop environments (e.g., Ubuntu, RHEL, CentOS, Debian, Alpine).

Q8. What is the root user in Linux?
The ultimate administrator superuser account (UID 0) holding unrestricted privileges to modify system files, install software, and manage all users.

Q9. What is sudo command?
Stands for "Superuser Do", allowing a permitted user to execute specific administrative commands with superuser root privileges.

Q10. What is an inode in Linux?
A data structure in a Unix-like file system storing metadata about a file (such as ownership, permissions, size, and disk block locations) excluding its actual name and data content.

2. Linux File System Hierarchy (FHS)

Q11. What is the Filesystem Hierarchy Standard (FHS)?
Defines the directory structure and directory contents paths across Linux and Unix-like operating systems.

Q12. What is the purpose of the root directory (/) in Linux?
The topmost directory in the Linux directory tree under which all other directories, files, and partitions are mounted.

Q13. What is /bin vs /sbin?
/bin: Contains essential user command binaries required for single-user mode (e.g., cat, ls, cp).
/sbin: Contains essential system administration binaries reserved for root user (e.g., fdisk, reboot, iptables).

Q14. What is /etc directory used for?
Stores system-wide configuration files and initialization scripts (e.g., /etc/passwd, /etc/hosts).

Q15. What is /var directory used for?
Stores variable data files that grow continuously during system operation, including logs (/var/log), spool queues, and mail.

Q16. What is /tmp vs /var/tmp?
/tmp: Stores temporary files deleted automatically upon system reboots.
/var/tmp: Stores temporary files retained across reboots for longer-term temporary caching.

Q17. What is /home directory?
Contains personal home directories for individual system user accounts (e.g., /home/username).

Q18. What is /proc directory?
A virtual pseudo-filesystem containing runtime system memory metrics, kernel parameters, and active process information as text files.

Q19. What is /dev directory?
Contains device node files representing physical hardware components, storage drives, terminals, and pseudo-devices.

Q20. What is /usr directory?
Contains secondary read-only user applications, shared libraries, documentation, and user binaries.

3. Essential Shell Commands & Navigation

Q21. How do you check your current working directory?
Run pwd (Print Working Directory).

Q22. How do you list files and directories in Linux?
Using ls command (e.g., ls -la to view hidden files and detailed permissions).

Q23. How do you create a new directory?
mkdir <directory-name> (use -p to create nested parent directories).

Q24. How do you copy files and directories?
cp <source> <destination> (use -r recursive flag for directories).

Q25. How do you move or rename files?
mv <old-name> <new-name>.

Q26. How do you delete files and directories?
rm <filename> (use -rf for recursive forced directory deletion).

Q27. How do you view the contents of a small text file quickly?
cat <filename> or less / more for paginated viewing.

Q28. How do you view the last lines of a log file in real time?
tail -f /var/log/syslog.

Q29. How do you search for text patterns inside files?
grep "search_term" filename.txt.

Q30. How do you find files and directories in Linux?
find /path/to/search -name "filename".

4. File Permissions, Ownership & ACLs

Q31. What are File Permissions in Linux?
Defines who can perform Read (r), Write (w), and Execute (x) actions on a file or directory.

Q32. What are the three permission classes in Linux?
u (User/Owner), g (Group), and o (Others).

Q33. What is numeric (octal) representation of file permissions?
Read = 4, Write = 2, Execute = 1. (e.g., chmod 755 means Owner has rwx (7), Group has r-x (5), Others have r-x (5)).

Q34. How do you change file permissions?
chmod <permissions> <filename>.

Q35. How do you change file owner and group?
chown user:group filename.txt.

Q36. What is a SUID (Set User ID) permission?
Allows a user to execute a file with the permissions of the file owner rather than their own (represented by 's' in user permissions).

Q37. What is a SGID (Set Group ID) permission?
Allows execution with file group permissions, or forces files created inside a directory to inherit the directory's group.

Q38. What is the Sticky Bit?
A permission bit set on shared directories (like /tmp) ensuring that only the file owner or root user can delete or rename files inside it.

Q39. What is umask?
A default permission mask that subtracts permissions from newly created files and directories (default umask 022 creates files with 644 and folders with 755).

Q40. What are Access Control Lists (ACLs)?
Provides finer-grained permission flexibility beyond standard owner/group models using getfacl and setfacl.

5. Users, Groups & Privilege Management

Q41. Where are user accounts stored in Linux?
Inside the /etc/passwd configuration file.

Q42. Where are user passwords stored securely?
Inside the /etc/shadow file in encrypted hash format (accessible only by root).

Q43. Where are user groups defined?
Inside the /etc/group configuration file.

Q44. How do you create a new user account?
useradd username or adduser (interactive).

Q45. How do you delete a user account and their home directory?
userdel -r username.

Q46. How do you modify user passwords?
passwd username.

Q47. How do you add a user to a supplementary group?
usermod -aG groupname username.

Q48. How do you switch user accounts in terminal?
su - username (switch user) or sudo -i (switch to root).

Q49. How do you check which groups your current user belongs to?
Run groups or id command.

Q50. What is /etc/sudoers file?
Configures user sudo privilege rules (edited safely using visudo command).

6. Process Management, Signals & Resource Monitoring

Q51. What is a Process in Linux?
An instance of a computer program that is being executed by one or many threads under the kernel.

Q52. What is a Thread?
A lightweight execution unit within a process sharing the same memory space.

Q53. How do you view active running processes?
ps aux or top / htop.

Q54. How do you terminate a running process?
kill <PID> (graceful SIGTERM) or kill -9 <PID> (forced SIGKILL).

Q55. What is the difference between SIGTERM and SIGKILL?
SIGTERM (signal 15): Requests a process to terminate gracefully, saving state.
SIGKILL (signal 9): Terminates a process immediately via kernel intervention without cleanup.

Q56. What is a Zombie Process?
A process that has finished execution but still has an entry in the process table because its parent process hasn't read its exit status.

Q57. What is an Orphan Process?
A running process whose parent process has finished or crashed, adopted automatically by the init (systemd) system process (PID 1).

Q58. What is a Daemon?
A background service process running without direct interactive user control (e.g., sshd, httpd).

Q59. How do you run a process in the background?
Append an ampersand (&) at the end of the command or use bg after suspending with Ctrl+Z.

Q60. How do you monitor real-time system performance (CPU, Memory)?
top, htop, vmstat, or sar.

7. Shell Scripting & Bash Automation

Q61. What is a Shell Script?
A plain text file containing a sequence of shell commands executed sequentially by the command interpreter.

Q62. What is Shebang (#!) in Bash scripts?
The first line of a script specifying the absolute interpreter path (e.g., #!/bin/bash).

Q63. How do you make a shell script executable?
chmod +x script.sh.

Q64. How do you declare and use variables in Bash?
NAME="GotPlaced"; echo $NAME.

Q65. How do you write conditional statements in Bash?
if [ "$VAR" = "value" ]; then ... fi.

Q66. How do you write loops in Bash?
for i in {1..5}; do echo $i; done or while [ condition ]; do ... done.

Q67. How do you accept user input inside a Bash script?
Using the read command (read -p "Enter name: " name).

Q68. How do you handle command-line arguments in scripts?
Using positional parameters: $1, $2 for arguments, $# for argument count, and $@ for all arguments.

Q69. What is grep, sed, and awk in text processing?
grep: Searches text patterns.
sed: Stream editor for filtering and transforming text inline.
awk: Pattern scanning and text extraction language processing columns.

Q70. How do you check exit status of the last executed command?
Run echo $? (0 indicates success; non-zero indicates error).

8. Networking, SSH & Remote Connections

Q71. How do you check IP address and network interface details?
ip addr show or hostname -I (legacy ifconfig).

Q72. How do you test network connectivity to a remote host?
ping <hostname_or_IP>.

Q73. How do you trace the network packet path to a destination?
traceroute or tracepath.

Q74. What is SSH (Secure Shell)?
A secure cryptographic protocol used for remote login and administration over unsecured networks on default port 22.

Q75. How do you connect to a remote server via SSH?
ssh username@remote_host_ip.

Q76. What is SSH Key-Based Authentication?
A secure authentication method using a public/private key pair instead of text passwords.

Q77. How do you copy files securely between local and remote hosts?
Using scp (Secure Copy Protocol) or rsync (e.g., scp file.txt user@host:/path/).

Q78. How do you check open network ports and active sockets?
ss -tuln or netstat -anp.

Q79. How do you download files from the internet via terminal?
curl -O <URL> or wget <URL>.

Q80. What is /etc/hosts file used for?
Static mapping of hostnames to IP addresses locally before querying DNS servers.

9. Cron Jobs, Job Control & Task Scheduling

Q81. What is Cron in Linux?
A background time-based job scheduler daemon executing automated tasks at specified dates and times.

Q82. What is crontab?
The configuration file format used to manage individual user cron schedules.

Q83. Explain Crontab syntax format.
* * * * * command_to_execute
(Minute 0-59, Hour 0-23, Day of Month 1-31, Month 1-12, Day of Week 0-6).

Q84. How do you edit your crontab schedule?
crontab -e.

Q85. How do you list active scheduled cron jobs?
crontab -l.

Q86. What is anacron?
Used instead of cron on systems that do not run 24/7, ensuring scheduled jobs run even if the system was powered off during scheduled times.

Q87. What is the at command?
Schedules a one-time command execution at a specified future time.

10. Package Managers, Disk Management & Systemd Services

Q88. What are the primary package managers in Linux distributions?
APT (Debian/Ubuntu), YUM/DNF (RHEL/CentOS/Fedora), Pacman (Arch Linux).

Q89. How do you install and update packages using APT?
sudo apt update, sudo apt upgrade, sudo apt install package-name.

Q90. How do you check available disk space usage?
df -h (Disk Free).

Q91. How do you check directory and file storage sizes?
du -sh /path/to/directory (Disk Usage).

Q92. How do you list connected storage drives and partitions?
lsblk or fdisk -l.

Q93. What is LVM (Logical Volume Manager)?
A device mapper framework providing flexible logical volume storage management allowing dynamic resizing of partitions.

Q94. What is systemd?
The modern system and service manager initialization daemon (PID 1) managing boot processes and services across Linux.

Q95. How do you manage services using systemctl?
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl status nginx
sudo systemctl enable nginx (start on boot).

Q96. What is journalctl?
A utility used to query and view logs generated by the systemd-journald logging service.

Q97. What is swapon / swap space?
Virtual memory space allocated on storage disk used when physical RAM is fully utilized.

Q98. How do you check kernel log messages?
dmesg command.

Q99. What is tar command used for?
Archiving and compressing multiple files and directories into tarball bundles (e.g., tar -czvf archive.tar.gz folder/).

Q100. Best practices for Linux system administration?
Keep system packages updated regularly, enforce strict file permissions, use SSH key authentication and disable root password logins, configure firewall rules (UFW/Firewalld), monitor system resource usage (Prometheus/top), and maintain automated backups.

Top Companies Asking Linux Questions:
- Amazon
- Google
- Microsoft
- Adobe
- Oracle
- IBM
- TCS
- Infosys
- Wipro
- Accenture

Preparation Tips:
- Master essential terminal navigation and file manipulation commands.
- Understand numeric file permissions (chmod 755) and user privilege management (sudo).
- Practice process monitoring (top, kill) and service management (systemctl).
- Learn cron job scheduling and basic Bash shell scripting.
- Study networking fundamentals (ip, ss, ssh) and disk management (df, lsblk).

Conclusion:
Linux is the foundational operating system powering cloud infrastructure, servers, and modern DevOps tools. Mastering these 100 core Linux interview questions along with hands-on terminal practice will give you complete confidence in technical interviews.

Happy Learning!
Team GotPlaced`
}



];

export default blogs;