import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import image1 from "../../assets/projects/Dvimaya/dvimaya-1.png";
import image2 from "../../assets/projects/Dvimaya/dvimaya-2.png";
import image3 from "../../assets/projects/Dvimaya/dvimaya-3.png";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import { Footer } from "../../components/Footer/Footer";
import { ShieldCheck, Cpu, Database, CheckCircle2, Github, ExternalLink } from "lucide-react";

const dvimayaTech = [
  "Python",
  "TensorFlow",
  "scikit-learn",
  "Pandas",
  "OpenCV",
  "NumPy",
];

export const Dvimaya = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader
        title="Dvimaya"
        url="https://github.com/PranavDalvi/Dvimaya-App"
        backTo="/projects"
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 leading-relaxed">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-xs uppercase tracking-[0.16em] text-[#a9d9ff]">
            Master's Research Project &bull; Cybersecurity & ML
          </span>
          <h1 className="display-face text-3xl md:text-5xl font-bold text-[#edf5ff] leading-tight">
            Malware Detection via Machine Learning & Binary Visualization
          </h1>
          <p className="text-[#c7d5ea] text-base md:text-lg max-w-2xl mx-auto">
            Classifying executable files as safe or malicious by converting raw binaries into visual pattern representations.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {dvimayaTech.map((t) => {
              const meta = techStackIcons[t];
              return (
                <Batch
                  key={t}
                  title={t}
                  icon={meta?.icon}
                  backgroundColor={meta?.color}
                />
              );
            })}
          </div>
        </section>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-[rgba(145,182,232,0.3)] shadow-[0_20px_45px_rgba(4,9,18,0.5)]">
          <img
            src={image1}
            loading="lazy"
            alt="Dvimaya application interface"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview Card */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <ShieldCheck className="w-6 h-6 text-[#7fd0ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Overview</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            Dvimaya is a research-driven malware detection system developed as my Master’s research project in Computer Science. Traditional signature-based antivirus scanners often struggle against zero-day or obfuscated binaries. Dvimaya tackles this challenge by transforming <code className="px-1.5 py-0.5 rounded bg-[rgba(18,34,56,0.8)] border border-[rgba(145,189,248,0.2)] text-[#a9d9ff]">.exe</code> binary streams into grayscale/color 2D matrix representations, allowing computer vision and machine learning models to detect malicious structural signatures.
          </p>
        </section>

        {/* Key Features */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Cpu className="w-6 h-6 text-[#9df7e0]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Key Features & Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <CheckCircle2 className="w-5 h-5 text-[#7fd0ff]" />
              <h3 className="font-semibold text-[#edf5ff] text-base">Binary Visualization</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Converts raw binary byte arrays into high-density image matrices revealing code and data segments.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <CheckCircle2 className="w-5 h-5 text-[#9df7e0]" />
              <h3 className="font-semibold text-[#edf5ff] text-base">ML Classification</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Trains CNN and ensemble classification models to distinguish benign vs. malicious visual features.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <CheckCircle2 className="w-5 h-5 text-[#bfa4ff]" />
              <h3 className="font-semibold text-[#edf5ff] text-base">Intuitive GUI</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Built with Python (Eel) and web UI for quick binary drag-and-drop, visual inspection, and instant threat grading.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl overflow-hidden border border-[rgba(145,182,232,0.25)]">
              <img
                src={image2}
                loading="lazy"
                alt="Dvimaya feature visualization"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[rgba(145,182,232,0.25)]">
              <img
                src={image3}
                loading="lazy"
                alt="Dvimaya analysis dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Conclusion / Takeaways */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Database className="w-6 h-6 text-[#a9d9ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Outcome, Publication & Recognition</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            The Dvimaya project proved the viability of using structural visual analysis for malware detection without executing potentially hazardous payload binaries. It achieved <strong className="text-white">~84% classification accuracy</strong> across benign and malicious samples.
          </p>
          <p className="text-[#c7d5ea] leading-relaxed">
            This research was peer-reviewed and published in <strong className="text-white">The Voice of Creative Research (2025)</strong>, and was awarded <strong className="text-[#8ef3df]">3rd place in an inter-college research paper presentation</strong>.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="https://doi.org/10.53032/tvcr/2025.v7n2.45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7fd0ff] to-[#9df7e0] text-[#071322] font-semibold shadow-[0_8px_20px_rgba(32,118,176,0.35)] hover:translate-y-[-1px] transition-transform"
            >
              <ExternalLink size={18} /> View Published Paper (DOI)
            </a>
            <a
              href="https://github.com/PranavDalvi/Dvimaya-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl transperent-card text-[#8ed8ff] hover:text-white border border-[rgba(145,182,232,0.3)] hover:border-[rgba(145,182,232,0.6)] font-semibold transition-all"
            >
              <Github size={18} /> View Source Code on GitHub
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
