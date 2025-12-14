import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { useEffect } from "react";
import image1 from "../../assets/projects/Dvimaya/dvimaya-1.png";
import image2 from "../../assets/projects/Dvimaya/dvimaya-2.png";
import image3 from "../../assets/projects/Dvimaya/dvimaya-3.png";

export const Dvimaya = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <div>
            <ProjectHeader
                title="Dvimaya"
                url="https://github.com/PranavDalvi/Dvimaya-App"
            />

            <main className="max-w-4xl mx-auto px-4 py-10 space-y-12 leading-relaxed">
                {/* Overview */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Overview</h2>

                    <img
                        src={image1}
                        alt="Dvimaya screenshot 1"
                        className="mx-auto w-full max-w-xl rounded-xl shadow-sm"
                    />

                    <p className="">
                        Dvimaya is a malware detection system that leverages
                        machine learning and binary visualization techniques to
                        classify <code>.exe</code> files as safe or malicious.
                        This project was developed as part of my Master’s
                        research in Computer Science, aiming to enhance
                        cybersecurity measures using advanced technologies.
                    </p>
                </section>

                {/* Key Features */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Key Features</h2>

                    <ul className="list-disc list-inside space-y-3 ">
                        <li>
                            <strong>Binary Visualization:</strong> Converts
                            executable binary data into visual patterns for
                            structured analysis.
                        </li>
                        <li>
                            <strong>Machine Learning Classification:</strong>{" "}
                            Classifies files as benign or malicious based on
                            learned visual features.
                        </li>
                        <li>
                            <strong>Dataset Integration:</strong> Uses a curated
                            dataset of executable files for training and
                            evaluation.
                        </li>
                    </ul>

                    <img
                        src={image2}
                        alt="Dvimaya screenshot 2"
                        className="mx-auto w-full max-w-xl rounded-xl shadow-sm"
                    />
                </section>

                {/* Technologies */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">
                        Technologies Used
                    </h2>

                    <ul className="list-disc list-inside space-y-3 ">
                        <li>Python (Eel) with HTML, CSS, and JavaScript</li>
                        <li>
                            Python for data preprocessing and model development
                        </li>
                        <li>
                            Machine learning libraries such as Scikit-learn and
                            TensorFlow
                        </li>
                        <li>
                            Binary visualization techniques for feature
                            extraction
                        </li>
                    </ul>

                    <img
                        src={image3}
                        alt="Dvimaya screenshot 3"
                        className="mx-auto w-full max-w-xl rounded-xl shadow-sm"
                    />
                </section>

                {/* Conclusion */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Conclusion</h2>

                    <p className="">
                        The Dvimaya project demonstrates the effectiveness of
                        combining machine learning with binary visualization for
                        malware detection. This approach improves classification
                        accuracy while offering a novel and interpretable way to
                        analyze executable files.
                    </p>
                </section>
            </main>
        </div>
    );
};
