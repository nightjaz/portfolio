export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "aigurukul",
    company: "AI Gurukul",
    role: "AI Research Intern",
    period: "May 2025 - Aug 2025",
    description: [
      "Benchmarked open-source LLMs like LLaMA for educational Q&A using RAG pipelines",
      "Used RAGAS and BLEU to evaluate response accuracy, integrated LlamaIndex for document retrieval",
    ],
    techStack: ["Python", "LLaMA", "RAG", "LlamaIndex"],
  },
  {
    id: "futurixai",
    company: "FuturixAI",
    role: "Product Lead",
    period: "Jan 2025 - Jul 2025",
    description: [
      "Drove product strategy and AI feature design with emphasis on user experience",
      "Led competitive analysis and mapped strategic decisions based on insights",
    ],
    techStack: ["Product Strategy", "AI/ML", "UX"],
  },
  {
    id: "iiser",
    company: "IISER",
    role: "Data Analysis Intern",
    period: "Jun 2024 - Jul 2024",
    description: [
      "Analyzed solar CME datasets to uncover correlations for space weather prediction",
      "Used Python for time-series analysis and preprocessed NASA data",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    id: "sensesemi",
    company: "Sensesemi Technologies",
    role: "Summer Intern",
    period: "May 2024 - Jul 2024",
    description: [
      "Designed 1D CNN and Time Series UNet models for blood pressure estimation",
      "Engineered lightweight PTT-based algorithm for real-time BP prediction",
    ],
    techStack: ["Python", "Deep Learning", "Signal Processing"],
  },
];

export const leadership = {
  role: "Avionics Subsystem Lead",
  organization: "Project Rocketry",
  period: "Apr 2025 - Present",
  description: "Leading a 10-member avionics team within a 25-member student rocketry project. Managing design and integration of flight computers, sensors, and telemetry systems.",
};
