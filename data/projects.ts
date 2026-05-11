export type ProjectCategory = "ml" | "hardware" | "web";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "stethoscope",
    title: "AI-Powered Digital Stethoscope",
    description:
      "Low-cost digital stethoscope with ML-based heart sound classification for early cardiac screening.",
    longDescription:
      "Built a hybrid ML ensemble combining traditional algorithms, segment-aware CNNs, and beat-level classifiers for automated heart sound analysis. Designed for portable cardiac monitoring and early abnormality detection.",
    category: "ml",
    techStack: ["Python", "PyTorch", "ESP32", "librosa", "scikit-learn"],
    metrics: [
      { label: "Accuracy", value: "89.2%" },
      { label: "AUC-ROC", value: "0.97" },
    ],
    links: {
      github: "https://github.com/prajakta-bandgar",
    },
    featured: true,
  },
  {
    id: "spintronics",
    title: "Spintronics Edge Detection",
    description:
      "Novel image edge detection using SOT-MTJ devices for ultra-low energy neuromorphic computing.",
    longDescription:
      "Replaced computationally expensive adaptive thresholding with power-of-2 bit-logic operations using just 2 logic gates. Achieved massive improvements over baselines on medical imaging datasets.",
    category: "hardware",
    techStack: ["Python", "NumPy", "LLGS Simulation", "SOT-MTJ"],
    metrics: [
      { label: "vs SAM2", value: "+143%" },
      { label: "vs Canny", value: "+19.9%" },
      { label: "Energy", value: "85-171 nJ" },
    ],
    links: {},
    featured: true,
  },
  {
    id: "guild",
    title: "Guild",
    description:
      "A web application built solo, solving a problem I personally resonated with.",
    longDescription:
      "Full-stack web application designed and developed independently. Built with modern web technologies and deployed on Vercel.",
    category: "web",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      demo: "https://guild-awsd.vercel.app/",
    },
    featured: true,
  },
  {
    id: "avionics",
    title: "Rocket Avionics & Telemetry",
    description:
      "Embedded avionics module with real-time telemetry and Kalman filter-based state estimation.",
    longDescription:
      "Developed embedded C++ firmware interfacing barometric, temperature, and accelerometer sensors via I2C. Implemented Kalman filtering for noise smoothing and accurate altitude/velocity estimation.",
    category: "hardware",
    techStack: ["Embedded C++", "Arduino", "Kalman Filter", "I2C", "BMP180", "MPU6050"],
    links: {
      github: "https://github.com/prajakta-bandgar",
    },
    featured: true,
  },
  {
    id: "rag-chatbot",
    title: "RAG-Based Educational Chatbot",
    description:
      "Benchmarked open-source LLMs for educational Q&A using retrieval-augmented generation pipelines.",
    longDescription:
      "Compared LLaMA models against Gemini-generated ground truth for chatbot applications. Evaluated using RAGAS and BLEU metrics, integrated LlamaIndex for document retrieval.",
    category: "ml",
    techStack: ["Python", "LlamaIndex", "LLaMA", "RAGAS", "BLEU"],
    links: {},
    featured: false,
  },
  {
    id: "bp-estimation",
    title: "Blood Pressure Estimation",
    description:
      "1D CNN and Time Series UNet models for real-time, calibration-free BP prediction from ECG/PPG signals.",
    longDescription:
      "Designed lightweight Pulse Transit Time algorithm for blood pressure estimation. Trained models on physiological data with MAE/RMSE optimization.",
    category: "ml",
    techStack: ["Python", "TensorFlow", "Signal Processing", "ECG/PPG"],
    links: {},
    featured: false,
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  ml: "AI / ML",
  hardware: "Hardware",
  web: "Web",
};

export const categoryColors: Record<ProjectCategory, string> = {
  ml: "text-accent-cyan",
  hardware: "text-accent-coral",
  web: "text-accent-violet",
};
