export interface ProjectBlog {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  video?: string;
  images?: string[];
  problem: string;
  approach: string;
  contribution: string;
  result: string;
  metrics?: { key: string; value: string; highlight?: boolean }[];
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
  };
}

export const projectBlogs: Record<string, ProjectBlog> = {
  guild: {
    id: "guild",
    title: "Guild — AI Finance Tracker",
    subtitle: "A budgeting tool for new adults learning to manage money",
    category: "Web · AI",
    video: "/guild-demo.mp4",
    problem: `New adults who just started earning face a unique challenge: they have ambitious goals like travel, buying a house, or a car, but their daily spending is filled with micro-transactions — Swiggy orders, cab rides, subscriptions. Traditional budgeting tools either require tedious manual categorization or don't provide personalized insights on how to actually reach those goals.

Bank statements come as PDFs with cryptic merchant names and transaction IDs. There's no easy way to understand spending patterns or get actionable advice tailored to your specific financial situation.`,
    approach: `I built Guild as a full-stack finance dashboard that turns messy bank PDFs into actionable insights. The core innovation is using Gemini to parse PDFs directly and extract transactions.

The key challenge was finding the right balance between automation and user control. Fully automated categorization by Gemini produces inconsistent results — it might categorize the same merchant differently each time. But asking users to manually categorize everything defeats the purpose.

My solution: Gemini handles initial extraction and suggests categories, but users can easily edit and the system learns their preferences. This hybrid approach gives the best of both worlds — speed of AI with accuracy of human oversight.`,
    contribution: `This was a solo full-stack project. I handled everything:
• **Design:** UI/UX from scratch, optimized for the target audience of young professionals
• **Frontend:** Next.js with TypeScript and Tailwind for a responsive, modern interface
• **Backend:** Firebase for auth and database, handling secure storage of financial data
• **AI Integration:** Gemini API for PDF parsing, transaction categorization, and generating personalized financial insights and goal-planning advice`,
    result: `Guild is live and deployed. It successfully parses bank statements, categorizes spending, visualizes patterns, and generates AI-powered insights to help users reach their financial goals.`,
    metrics: [
      { key: "Solo", value: "Design + Build", highlight: true },
      { key: "Live", value: "Deployed on Vercel" },
    ],
    tags: ["Next.js", "Firebase", "Gemini", "TypeScript", "Tailwind", "Vercel"],
    links: {
      demo: "https://guild-awsd.vercel.app/",
    },
  },

  spintronics: {
    id: "spintronics",
    title: "Spintronic Edge Detection",
    subtitle: "Hardware-efficient image processing using magnetic devices",
    category: "Hardware · Research",
    problem: `Edge detection is fundamental to computer vision — it's used in everything from quality control of aerospace parts to medical imaging. The challenge is that current approaches are either computationally expensive (classical methods like Canny) or extremely power-hungry (deep learning methods like SAM2 which uses over 1 Joule per image).

For deployment on battery-powered devices, IoT sensors, or resource-constrained edge systems, we need algorithms that maintain detection quality while consuming orders of magnitude less energy.`,
    approach: `We developed a hardware-efficient edge detection method using Spin-Orbit Torque Magnetic Tunnel Junction (SOT-MTJ) devices for in-memory computing.

The key insight: instead of complex 8-bit comparators, we use power-of-2 thresholds (192, 128, 64) that map exactly to simple bit-logic operations. This means each pixel only needs 2 logic gates — an AND, a wire, or an OR operation.

We then apply majority voting across three binary planes to make the detection robust to noise. The entire 3×3 neighborhood edge test executes directly in the MTJ crossbar array, exploiting the non-volatile storage and parallel sensing capabilities of spintronic devices.`,
    contribution: `I ran the simulations and experiments for this research project. This included:
• Setting up and running Landau-Lifshitz-Gilbert-Slonczewski (LLGS) simulations for energy modeling
• Evaluating our method on the BSDS500 benchmark (200 test images)
• Comparing against Canny ground truth and SAM2 baseline under identical conditions
• Analyzing and visualizing the results for the paper`,
    result: `Our method achieved F1 = 0.750 compared to SAM2's F1 = 0.349 — that's 2.15× better accuracy. More importantly, we did this at 78.27 nJ per image versus SAM2's >1 J — seven orders of magnitude (10 million times) less energy.

The paper has been submitted to the MMM (Magnetism and Magnetic Materials) conference, and a more detailed journal version is currently in progress.`,
    metrics: [
      { key: "2.15×", value: "Better than SAM2", highlight: true },
      { key: "78 nJ", value: "vs >1J for SAM2", highlight: true },
      { key: "F1=0.750", value: "Accuracy" },
      { key: "916 µs", value: "Latency" },
    ],
    tags: ["Python", "NumPy", "LLGS Simulation", "SOT-MTJ", "Image Processing"],
    links: {},
  },

  cardiac: {
    id: "cardiac",
    title: "AI Cardiac Sensor",
    subtitle: "ML-based heart sound classification for accessible screening",
    category: "ML · Hardware",
    problem: `Cardiovascular diseases remain the leading cause of death globally, claiming an estimated 17.9 million lives annually. Early detection is critical, but traditional diagnosis through heart auscultation requires skilled cardiologists, expensive equipment, and isn't always accessible in remote or under-resourced areas.

Heart sounds contain rich diagnostic information about cardiac abnormalities like murmurs, valve defects, and arrhythmias. However, interpreting these sounds requires years of clinical training. The question: Can we build an automated system that accurately classifies heart sounds, making preliminary cardiac screening accessible to anyone with a stethoscope and a smartphone?`,
    approach: `I built an end-to-end machine learning pipeline for binary heart sound classification using the PhysioNet 2016 Challenge dataset (3,240 recordings from 6 clinical sites).

**Feature Engineering:** Extracted 92 audio features from each recording:
• MFCCs (52 features) — spectral characteristics of heart sounds
• MFCC Deltas (26 features) — temporal dynamics
• Spectral features (8) — centroid, bandwidth, rolloff, flatness
• Temporal features (6) — zero-crossing rate, RMS energy

**Model Comparison:** Trained and compared Random Forest, XGBoost, SVM, and Logistic Regression with hyperparameter tuning via grid search and 5-fold cross-validation. Also built a Stacking Ensemble combining all models.

**Key Design Decision:** Prioritized sensitivity over raw accuracy — in a screening context, missing an abnormal heart (false negative) is far more dangerous than a false alarm.`,
    contribution: `Built the complete ML pipeline with a partner:
• Custom FeatureExtractor class using librosa for efficient audio processing (~0.01s per file)
• Modular Python codebase with separate modules for data loading, feature extraction, model training, and evaluation
• StackingEnsemble class combining multiple classifiers with cross-validated meta-features
• Comprehensive evaluation with clinical metrics (sensitivity/specificity) crucial for medical applications
• Addressed class imbalance (79.5% abnormal vs 20.5% normal) using SMOTE oversampling`,
    result: `Random Forest emerged as the best model, achieving metrics suitable for a first-line screening tool:

The system catches 93.33% of abnormal heart sounds — meaning it would miss only ~7% of cases that need expert review, while correctly identifying ~89% of normal cases to reduce cardiologist workload.`,
    metrics: [
      { key: "91.3%", value: "Balanced Accuracy", highlight: true },
      { key: "0.97", value: "AUC-ROC", highlight: true },
      { key: "93.3%", value: "Sensitivity" },
      { key: "89.4%", value: "Specificity" },
    ],
    tags: ["Python", "scikit-learn", "XGBoost", "librosa", "SMOTE", "PyTorch"],
    links: {
      github: "https://github.com/prajakta-bandgar",
    },
  },

  bp: {
    id: "bp",
    title: "Blood Pressure Estimation",
    subtitle: "Cuffless BP prediction from ECG and PPG signals",
    category: "ML · Signals",
    problem: `Traditional blood pressure monitors require uncomfortable arm cuffs and only give point-in-time readings. For patients who need continuous monitoring (hypertension management, post-surgery recovery), this is impractical.

Cuffless methods exist but typically require frequent re-calibration against a traditional cuff — defeating much of the convenience. The goal: develop calibration-free methods that can estimate blood pressure continuously from wearable-friendly signals like ECG and PPG (the same signal pulse oximeters use).`,
    approach: `During my internship at Sensesemi Technologies, I developed three complementary approaches:

**Method 1: 1D CNN Sequential Regression**
Dual-channel input processing ECG and PPG signals through separate convolutional branches, then concatenating features for blood pressure prediction.

**Method 2: Time Series UNet**
Enhanced feature extraction using a UNet architecture adapted for 1D signals. The encoder-decoder structure helps capture both local patterns and broader temporal context in the signals.

**Method 3: PTT Formula-Based**
Pulse Transit Time (PTT) — the delay between the heart's electrical signal (ECG R-peak) and the pulse arriving at the finger (PPG) — is physically related to blood pressure. This method uses the UNet to identify these key points, then applies physiological formulas.`,
    contribution: `I designed the neural network architectures for this project. Specifically:
• Architected the 1D CNN with dual-channel input fusion
• Designed the Time Series UNet adaptation for blood pressure signals
• Implemented the PTT detection pipeline using the trained models

This was a 2-month internship project with two other interns (Harsh and Pratham).`,
    result: `The Time Series UNet showed improved performance over the basic 1D CNN, particularly in capturing complex patterns within the signals. The PTT-based method offers a computationally efficient alternative that eliminates the need for BP ground truth during deployment, though its accuracy depends on proper calibration of physiological parameters.`,
    metrics: [
      { key: "ECG+PPG", value: "Fused Input" },
      { key: "3", value: "Methods Developed" },
      { key: "UNet", value: "Best Performance" },
    ],
    tags: ["Python", "TensorFlow", "Signal Processing", "Deep Learning", "ECG", "PPG"],
    links: {},
  },

  avionics: {
    id: "avionics",
    title: "Rocket Avionics",
    subtitle: "Flight computers for a student-built self-landing rocket",
    category: "Embedded",
    problem: `Our student rocketry project at BITS Goa is building a self-landing rocket — think SpaceX Falcon 9, but on a student budget. This requires sophisticated avionics: the onboard electronics and software that handle thrust vector control (TVC), altitude tracking, parachute deployment, and real-time telemetry to the ground station.

The challenge is integrating multiple subsystems (sensors, actuators, radio, recovery) into a reliable system that works under the extreme conditions of rocket flight — high G-forces, vibration, temperature changes, and the absolute requirement that it works the first time.`,
    approach: `This has been a 3-year journey of progressive learning and responsibility:

**Year 1 — Foundations:** Hands-on learning of how to interface sensors (BMP180 barometer, MPU6050 accelerometer) with microcontrollers over I²C. Building the flight computer from components, understanding signal conditioning and data logging.

**Year 2 — Systems Integration:** Developing the parachute deployment system with proper timing and redundancy. Building the launch station with safety interlocks and remote ignition.

**Year 3 — Leadership:** As Avionics Subsystem Lead, managing a 10-engineer team. Debugging the actual flight board, preparing for launch, teaching new team members, and leading development of the self-landing control algorithms.`,
    contribution: `Now leading the 10-person avionics team within our 25-person rocketry project. My responsibilities include:
• Technical architecture of the complete avionics stack
• Managing design reviews and integration testing
• Debugging flight hardware and firmware
• Mentoring junior team members
• Coordinating with other subsystems (propulsion, structures, recovery)`,
    result: `The full avionics system is ready for launch. All major subsystems are integrated and tested:
• Thrust Vector Control (TVC) for active steering
• Kalman-filtered state estimation for accurate altitude and velocity
• Parachute deployment system with redundant triggers
• Real-time telemetry link to ground station

Next milestone: first test flight.`,
    metrics: [
      { key: "10", value: "Person Team", highlight: true },
      { key: "3 Years", value: "Development" },
      { key: "Ready", value: "For Launch", highlight: true },
    ],
    tags: ["Embedded C++", "Arduino", "Kalman Filter", "I2C", "TVC", "Telemetry"],
    links: {
      github: "https://github.com/prajakta-bandgar",
    },
  },

  rag: {
    id: "rag",
    title: "RAG Educational Bot",
    subtitle: "Evaluating open-source LLMs for educational Q&A",
    category: "ML · Eval",
    problem: `A company building an educational chatbot needed to decide: should they use expensive proprietary models like Gemini, or could open-source alternatives deliver comparable quality? This matters both for cost (API fees add up) and for data privacy (some educational contexts require on-premise deployment).

The specific question: which open-source LLMs perform best in a Retrieval-Augmented Generation (RAG) pipeline for educational question-answering?`,
    approach: `I set up a systematic evaluation pipeline to benchmark multiple open-source LLMs against Gemini as the ground truth:

**Models Evaluated:** Various LLaMA family models and other open-source options including Qwen

**RAG Pipeline:** Used LlamaIndex for document retrieval, ensuring each model had access to the same knowledge base

**Evaluation Metrics:**
• RAGAS framework for RAG-specific quality metrics (faithfulness, relevance, etc.)
• BLEU scores for answer similarity to Gemini outputs
• Qualitative analysis of answer quality and appropriateness for educational contexts`,
    contribution: `My role at AI Gurukul was to:
• Set up the evaluation infrastructure and RAG pipeline
• Run systematic benchmarks across all model configurations
• Analyze results and identify patterns in where models succeed or fail
• Compile findings into a recommendation report for the company's product team`,
    result: `After comprehensive evaluation, Qwen emerged as the best-performing open-source option for this educational Q&A use case. The findings helped the company make an informed decision about their model selection, balancing quality, cost, and deployment flexibility.`,
    metrics: [
      { key: "Qwen", value: "Best Performer", highlight: true },
      { key: "RAGAS", value: "Eval Framework" },
      { key: "LlamaIndex", value: "RAG Pipeline" },
    ],
    tags: ["Python", "LLaMA", "Qwen", "LlamaIndex", "RAGAS", "BLEU"],
    links: {},
  },
};
