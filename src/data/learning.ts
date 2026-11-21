export interface LearningTopic {
  title: string;
  focusArea: string;
  description: string;
  status: 'In Progress' | 'Active Exploration';
  topicsCovered: string[];
}

export const learningData: LearningTopic[] = [
  {
    title: "AI/ML Fundamentals & Python",
    focusArea: "Machine Learning Engineering",
    description: "Deepening foundational computer vision and natural language processing concepts, transitioning from facial recognition projects into modern generative pipelines.",
    status: "In Progress",
    topicsCovered: ["Python Scientific Stack (NumPy, Pandas)", "Model Inference", "Feature Embeddings", "Vector Math"]
  },
  {
    title: "Semantic Kernel (.NET)",
    focusArea: "Enterprise AI Orchestration",
    description: "Integrating Microsoft's Semantic Kernel SDK into ASP.NET Core backends to orchestrate LLM agents, plugins, and structured function calling.",
    status: "Active Exploration",
    topicsCovered: ["Semantic Functions", "Native Plugins", "Planners & Copilots", "Memory Connectors"]
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    focusArea: "Context-Aware Information Retrieval",
    description: "Architecting enterprise search and grounded generation by combining embedding models, vector databases, and semantic search algorithms.",
    status: "Active Exploration",
    topicsCovered: ["Chunking Strategies", "Vector Indexing", "Embedding Models", "Prompt Grounding & Verification"]
  }
];
