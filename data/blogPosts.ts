export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; language?: string; code: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  content: BlogBlock[];
}

// Add new posts at the top. The index and post pages update automatically.
export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-keep-a-technical-scratchpad",
    title: "Why I keep a technical scratchpad",
    excerpt:
      "A low-pressure place for half-formed ideas, debugging trails, and the small discoveries that rarely make it into project write-ups.",
    publishedAt: "2026-08-29",
    readTime: "3 min read",
    tags: ["Notes", "Learning", "Building"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Most technical work does not arrive as a clean conclusion. It starts as a strange error message, a diagram in the margin, or a question that is too small for a project and too interesting to forget.",
      },
      {
        type: "paragraph",
        text: "This blog is where I want to keep those fragments. Some posts will be careful explanations. Others will be field notes from whatever I am building, testing, or learning that week.",
      },
      { type: "heading", text: "What belongs here" },
      {
        type: "list",
        items: [
          "Debugging stories where the wrong assumption mattered more than the final fix.",
          "Small experiments with models, sensors, interfaces, and data.",
          "Useful mental models I want to remember six months from now.",
          "Occasional opinions about building technology that people can actually use.",
        ],
      },
      {
        type: "quote",
        text: "The goal is not to sound finished. The goal is to make the thinking visible.",
      },
      {
        type: "paragraph",
        text: "If a note eventually grows into a project, a paper, or a better question, great. If it only saves me from solving the same bug twice, that is useful too.",
      },
    ],
  },
  {
    slug: "debug-the-data-before-the-model",
    title: "Debug the data before the model",
    excerpt:
      "When an ML experiment behaves strangely, the fastest route forward is often a tiny, slightly boring inspection of the inputs.",
    publishedAt: "2026-08-17",
    readTime: "4 min read",
    tags: ["Machine Learning", "Debugging"],
    content: [
      {
        type: "paragraph",
        text: "A model can fail in sophisticated ways, but many experiments fail for ordinary reasons: labels are shifted, units changed halfway through a dataset, or a preprocessing step quietly flattened the signal we cared about.",
      },
      { type: "heading", text: "My first-pass checklist" },
      {
        type: "list",
        items: [
          "Print shapes, ranges, missing values, and class counts.",
          "Visualize a few raw examples before and after preprocessing.",
          "Try to overfit a deliberately tiny batch.",
          "Compare against a baseline that is almost embarrassingly simple.",
        ],
      },
      {
        type: "code",
        language: "python",
        code: "print(x.shape, y.shape)\nprint(x.min(), x.max())\nprint(np.unique(y, return_counts=True))",
      },
      {
        type: "paragraph",
        text: "None of this is glamorous. That is exactly why it works: it removes clever explanations until the pipeline has earned them.",
      },
    ],
  },
  {
    slug: "small-tools-are-still-products",
    title: "Small tools are still products",
    excerpt:
      "A script becomes a product the moment another person has to understand what it does, trust its output, and recover when it fails.",
    publishedAt: "2026-08-04",
    readTime: "3 min read",
    tags: ["Product Engineering", "Interfaces"],
    content: [
      {
        type: "paragraph",
        text: "There is a tempting gap between a useful script and a polished application. I used to think crossing that gap mostly meant adding a nicer interface. Now I think the real change is taking responsibility for someone else's uncertainty.",
      },
      { type: "heading", text: "The questions a tool should answer" },
      {
        type: "list",
        items: [
          "What can I give it?",
          "What is it doing right now?",
          "Can I trust this result?",
          "What should I do when something goes wrong?",
        ],
      },
      {
        type: "paragraph",
        text: "Progress states, examples, validation, and useful errors are not decoration. They are part of the system's behavior. A small tool that answers these questions can feel more complete than a large app that leaves them ambiguous.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
