// Sample articles data for search functionality
export const articles = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    content:
      "React Hooks are a powerful feature that allows you to use state and other React features in functional components. They were introduced in React 16.8 and have revolutionized how we write React applications. Hooks like useState, useEffect, and useContext make it easier to manage component state and side effects. useState allows you to add state to functional components, while useEffect handles side effects like data fetching, subscriptions, and manual DOM updates. Custom hooks enable you to extract and reuse stateful logic between components, promoting better code organization and reusability. The rules of hooks ensure that they're always called in the same order, maintaining consistency across re-renders.",
    author: "Jane Doe",
    date: "2024-01-15",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Modern JavaScript ES6+ Features",
    content:
      "JavaScript has evolved significantly with ES6 and later versions. Features like arrow functions, destructuring, template literals, and async/await have made JavaScript more powerful and developer-friendly. These modern features help write cleaner and more maintainable code.",
    author: "John Smith",
    date: "2024-02-20",
    category: "Programming",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    content:
      "CSS Grid and Flexbox are both powerful layout systems in CSS. While Flexbox is excellent for one-dimensional layouts, CSS Grid shines in two-dimensional layouts. Understanding when to use each will help you create better responsive designs and improve your web development skills.",
    author: "Alice Johnson",
    date: "2024-03-10",
    category: "Web Design",
  },
  {
    id: 4,
    title: "Getting Started with Node.js",
    content:
      "Node.js is a runtime environment that allows you to run JavaScript on the server side. It's built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model. Node.js is perfect for building scalable network applications and APIs.",
    author: "Bob Wilson",
    date: "2024-01-25",
    category: "Backend Development",
  },
  {
    id: 5,
    title: "Understanding TypeScript Benefits",
    content:
      "TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static type definitions to JavaScript, which helps catch errors early in development. TypeScript improves code quality, developer productivity, and makes large-scale applications more maintainable.",
    author: "Carol Brown",
    date: "2024-02-05",
    category: "Programming",
  },
  {
    id: 6,
    title: "Responsive Web Design Principles",
    content:
      "Responsive web design ensures that web applications work well on all devices and screen sizes. Key principles include fluid grids, flexible images, and media queries. By following these principles, you can create websites that provide an optimal viewing experience across desktops, tablets, and mobile devices.",
    author: "David Lee",
    date: "2024-03-15",
    category: "Web Design",
  },
  {
    id: 7,
    title: "API Design Best Practices",
    content:
      "Designing good APIs is crucial for modern web development. Best practices include using RESTful conventions, proper HTTP status codes, consistent naming conventions, and comprehensive documentation. A well-designed API makes integration easier and improves developer experience.",
    author: "Emma Davis",
    date: "2024-01-30",
    category: "Backend Development",
  },
  {
    id: 8,
    title: "Introduction to Machine Learning",
    content:
      "Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed. Common algorithms include linear regression, decision trees, and neural networks. Machine learning is transforming industries from healthcare to finance.",
    author: "Frank Miller",
    date: "2024-02-12",
    category: "Data Science",
  },
  {
    id: 9,
    title: "Docker Containerization Guide",
    content:
      "Docker is a platform that uses containerization to package applications and their dependencies into lightweight, portable containers. Docker containers ensure consistency across different environments and simplify deployment processes. Understanding Docker is essential for modern DevOps practices.",
    author: "Grace Taylor",
    date: "2024-03-01",
    category: "DevOps",
  },
  {
    id: 10,
    title: "Database Design Fundamentals",
    content:
      "Proper database design is the foundation of efficient applications. Key concepts include normalization, indexing, relationships, and query optimization. Understanding these fundamentals helps create databases that are scalable, maintainable, and perform well under load.",
    author: "Henry Anderson",
    date: "2024-01-20",
    category: "Database",
  },
  {
    id: 11,
    title: "Introduction to GraphQL",
    content:
      "GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need. Unlike REST APIs, GraphQL provides a single endpoint and enables clients to specify the structure of the response. This reduces over-fetching and under-fetching of data, making applications more efficient. GraphQL also provides strong typing, real-time subscriptions, and excellent developer tools for API exploration and testing.",
    author: "Sarah Connor",
    date: "2024-04-05",
    category: "Backend Development",
  },
  {
    id: 12,
    title: "Vue.js 3 Composition API",
    content:
      "Vue.js 3 introduced the Composition API as an alternative to the Options API, providing better TypeScript support and more flexible component logic organization. The Composition API uses reactive references and computed properties to manage state, making it easier to share logic between components. Features like reactive, ref, and computed help create more maintainable and testable Vue applications with improved performance.",
    author: "Miguel Rodriguez",
    date: "2024-03-20",
    category: "Web Development",
  },
  {
    id: 13,
    title: "Python for Data Analysis",
    content:
      "Python has become the go-to language for data analysis due to its rich ecosystem of libraries. Pandas provides powerful data manipulation tools, NumPy handles numerical computing, and Matplotlib/Seaborn create beautiful visualizations. Jupyter notebooks offer an interactive environment for exploratory data analysis. Python's simplicity and extensive libraries make it perfect for data cleaning, statistical analysis, and machine learning workflows.",
    author: "Dr. Lisa Wang",
    date: "2024-02-28",
    category: "Data Science",
  },
  {
    id: 14,
    title: "Kubernetes Container Orchestration",
    content:
      "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides features like service discovery, load balancing, storage orchestration, and automated rollouts. Kubernetes abstracts away infrastructure complexity, allowing developers to focus on application logic while ensuring high availability and scalability in production environments.",
    author: "Alex Thompson",
    date: "2024-04-12",
    category: "DevOps",
  },
  {
    id: 15,
    title: "Svelte: The Compile-Time Framework",
    content:
      "Svelte is a radical new approach to building user interfaces that shifts work from the browser to compile time. Unlike traditional frameworks that run in the browser, Svelte compiles your components into vanilla JavaScript, resulting in smaller bundle sizes and better runtime performance. Svelte's simple syntax, built-in state management, and excellent developer experience make it an attractive alternative to React and Vue.",
    author: "Emily Chen",
    date: "2024-03-25",
    category: "Web Development",
  },
  {
    id: 16,
    title: "MongoDB vs PostgreSQL: Choosing Your Database",
    content:
      "Choosing between MongoDB and PostgreSQL depends on your application's specific needs. MongoDB is a NoSQL document database that excels with flexible schemas and horizontal scaling, making it ideal for rapid development and big data applications. PostgreSQL is a powerful relational database with ACID compliance, complex queries, and strong consistency guarantees. Consider factors like data structure, scalability requirements, and team expertise when making your choice.",
    author: "Robert Kim",
    date: "2024-01-10",
    category: "Database",
  },
  {
    id: 17,
    title: "Cybersecurity Best Practices for Developers",
    content:
      "Security should be built into every stage of software development. Essential practices include input validation, proper authentication and authorization, secure password storage using hashing algorithms, protection against common vulnerabilities like SQL injection and XSS attacks. Regular security audits, dependency updates, and following OWASP guidelines help maintain application security. Developers must adopt a security-first mindset to protect user data and maintain trust.",
    author: "Jennifer Martinez",
    date: "2024-04-08",
    category: "Security",
  },
  {
    id: 18,
    title: "AWS Cloud Services Overview",
    content:
      "Amazon Web Services (AWS) offers a comprehensive suite of cloud computing services that enable scalable and cost-effective application deployment. Key services include EC2 for virtual servers, S3 for object storage, RDS for managed databases, and Lambda for serverless computing. AWS provides global infrastructure, security features, and pay-as-you-go pricing. Understanding AWS services helps developers build resilient, scalable applications in the cloud.",
    author: "Mark Johnson",
    date: "2024-02-15",
    category: "Cloud Computing",
  },
  {
    id: 19,
    title: "Artificial Intelligence Ethics and Bias",
    content:
      "As AI systems become more prevalent, addressing ethical concerns and bias is crucial for responsible development. AI bias can perpetuate societal inequalities and lead to unfair outcomes in hiring, lending, and criminal justice systems. Developers must implement fairness metrics, diverse training data, and bias detection tools. Transparency, accountability, and human oversight are essential for building trustworthy AI systems that benefit all members of society.",
    author: "Dr. Aisha Patel",
    date: "2024-03-30",
    category: "AI Ethics",
  },
  {
    id: 20,
    title: "Mobile App Development with React Native",
    content:
      "React Native enables developers to build native mobile applications using JavaScript and React. By sharing code between iOS and Android platforms, React Native significantly reduces development time and costs. The framework provides access to native APIs, smooth animations, and platform-specific UI components. With features like hot reloading and a rich ecosystem of third-party libraries, React Native is an excellent choice for cross-platform mobile development.",
    author: "Sofia Andersson",
    date: "2024-04-15",
    category: "Mobile Development",
  },
];
