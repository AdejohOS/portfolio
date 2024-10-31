export interface ProjectPostProps {
  id: number;
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  githubUrl: string;
  siteUrl: string;
}

const projectPosts: ProjectPostProps[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2023-10-01",
    description:
      "A guide to getting started with Next.js for building powerful web applications.",
    content: `
        # Getting Started with Next.js
        Next.js is a React framework for production. It enables functionalities like server-side rendering and static site generation, making React apps more scalable.
        
        ## Key Features
        - **File-based routing**
        - **Server-side rendering**
        - **API routes**
        
        ## Getting Started
        To create a new Next.js project, you can use the following command:
        
        \`\`\`bash
        npx create-next-app my-app
        \`\`\`
        
        Next, open the app in your code editor and start building!
      `,
    slug: "getting-started-with-next-js",
    image: "/images/futurejobsHome.png", // Path to the image
    githubUrl: "https//github.com/adejoh",
    siteUrl: "https//vercel/adejoh",
  },
  {
    id: 2,
    title: "Introduction to React Query",
    date: "2023-10-05",
    description:
      "Learn how to manage server-state with ease using React Query.",
    content: `
        # Introduction to React Query
        React Query simplifies data fetching in your React applications by providing hooks for managing server-state.
        
        ## Why Use React Query?
        - Caching: Avoid unnecessary network requests.
        - Synchronization: Keep data up-to-date automatically.
        - Powerful hooks like \`useQuery\` and \`useMutation\`.
        
        ## Example
        Here's how to use React Query's \`useQuery\` to fetch data:
        
        \`\`\`typescript
        import { useQuery } from 'react-query';
  
        function fetchData() {
          return fetch('/api/data').then(res => res.json());
        }
  
        function MyComponent() {
          const { data, error, isLoading } = useQuery('data', fetchData);
  
          if (isLoading) return <p>Loading...</p>;
          if (error) return <p>Error loading data</p>;
  
          return <div>{data}</div>;
        }
        \`\`\`
      `,
    slug: "introduction-to-react-query",
    image: "/images/react-query.jpg", // Path to the image
    githubUrl: "https//github.com/adejoh",
    siteUrl: "https//vercel/adejoh",
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    date: "2023-10-10",
    description: "A comprehensive guide to understanding and using CSS Grid.",
    content: `
        # Mastering CSS Grid
        CSS Grid is a powerful layout system in CSS. It allows you to create complex layouts with simple code.
        
        ## Basic Syntax
        To start using CSS Grid, you need to define a grid container:
        
        \`\`\`css
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        \`\`\`
        
        ## Example Layout
        Here's a basic example of a two-column grid layout:
        
        \`\`\`html
        <div class="container">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
        </div>
        \`\`\`
      `,
    slug: "mastering-css-grid",
    image: "/images/media-query.png", // Path to the image
    githubUrl: "https//github.com/adejoh",
    siteUrl: "https//vercel/adejoh",
  },
  {
    id: 4,
    title: "TypeScript for Beginners",
    date: "2023-10-15",
    description:
      "Learn the basics of TypeScript and how it enhances JavaScript development.",
    content: `
        # TypeScript for Beginners
        TypeScript is a superset of JavaScript that adds static types. This helps catch errors during development and improves code readability.
        
        ## Basic Types
        TypeScript provides various basic types:
        - \`string\`
        - \`number\`
        - \`boolean\`
        
        ## Example
        Here's how to define a function with types:
        
        \`\`\`typescript
        function greet(name: string): string {
          return 'Hello, ' + name;
        }
        \`\`\`
        
        ## Conclusion
        Using TypeScript can lead to more robust and maintainable code.
      `,
    slug: "typescript-for-beginners",
    image: "/images/typescript.png", // Path to the image
    githubUrl: "https//github.com/adejoh",
    siteUrl: "https//vercel/adejoh",
  },
];

export default projectPosts;
