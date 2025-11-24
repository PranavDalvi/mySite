import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { useEffect } from "react";
import image1 from "../../assets/projects/Dvimaya/dvimaya-1.png";
import image2 from "../../assets/projects/Dvimaya/dvimaya-2.png";
import image3 from "../../assets/projects/Dvimaya/dvimaya-3.png";

export const Dvimaya = () => {
  // Ensure the page scrolls to the top when this route is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <ProjectHeader
        title="Dvimaya"
        url="https://github.com/PranavDalvi/Dvimaya-App"
      />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="flex items-center justify-center">
            <img
              src={image1}
              className="w-[500px] rounded-xl "
              alt="Dvimaya screenshot 1"
            />
          </div>
          <p className="text-gray-300">
            Dvimaya is a malware detection system that leverages machine
            learning and binary visualization techniques to classify .exe files
            as safe or malicious. This project was developed as part of my
            Master's research in Computer Science, aiming to enhance
            cybersecurity measures using advanced technologies.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <strong>Binary Visualization:</strong> Converts binary data of
              executable files into visual patterns for analysis.
            </li>
            <li>
              <strong>Machine Learning Classification:</strong> Utilizes
              algorithms to classify files based on their visual patterns.
            </li>
            <li>
              <strong>Dataset Integration:</strong> Includes a comprehensive
              dataset of .exe files for training and testing the model.
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <img
              src={image2}
              className="w-[500px] rounded-xl "
              alt="Dvimaya screenshot 2"
            />
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Python eel, HTML, CSS, JS</li>
            <li>Python for data processing and model development.</li>
            <li>
              Machine Learning libraries such as Scikit-learn and TensorFlow.
            </li>
            <li>Visualization tools for binary data representation.</li>
          </ul>
          <div className="flex items-center justify-center">
            <img
              src={image3}
              className="w-[500px] rounded-xl "
              alt="Dvimaya screenshot 3"
            />
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-gray-300">
            The Dvimaya project showcases the potential of combining machine
            learning with binary visualization to enhance malware detection.
            This innovative approach not only improves classification accuracy
            but also provides a novel perspective on analyzing executable files.
          </p>
        </section>
      </main>
    </div>
  );
};
