import React from "react";
import Cards from "./Cards";
import { Zap, Layers, ShieldCheck, BookOpen } from "lucide-react";

const MetricsCards = () => {
  return (
    <div className="items-center mt-12 md:mt-16 w-full px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
        <Cards
          tag="LATENCY"
          value="<200ms"
          label="P95 Alert Latency"
          description="Real-time WebSocket event streaming replacing REST polling under load."
          icon={<Zap size={18} className="text-sky-400" />}
        />
        <Cards
          tag="CONCURRENCY"
          value="1,000+"
          label="Tasks Benchmarked"
          description="Scalable background jobs orchestrated via Celery & verified with Locust."
          icon={<Layers size={18} className="text-indigo-400" />}
        />
        <Cards
          tag="RELIABILITY"
          value="95%+"
          label="Pipeline Success"
          description="Automated multilingual OCR translation for PDF/DOCX/PPTX/XLSX at IITB."
          icon={<ShieldCheck size={18} className="text-emerald-400" />}
        />
        <Cards
          tag="RESEARCH"
          value="1 Paper"
          label="TVCR 2025 Publication"
          description="Peer-reviewed paper on Indian script multilingual OCR & NLP (DOI indexed)."
          icon={<BookOpen size={18} className="text-amber-400" />}
        />
      </div>
    </div>
  );
};

export default MetricsCards;
