import React, { useEffect } from "react";
import img1 from "../../assets/projects/Udaan/iitb.jpeg";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
const Udaan: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);
    return (
        <>
            <ProjectHeader
                title="Project Udaan"
                url="https://udaanproject.org/"
            />
            <div>
                {/* Header */}
                <header className="max-w-5xl mx-auto px-4 py-10 text-center space-y-4">
                    <img
                        src={img1}
                        alt="IIT Bombay"
                        className="mx-auto w-full max-w-xl rounded-lg shadow-md"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Backend Developer Intern – Project Udaan @ IIT Bombay
                    </h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </header>

                {/* Content */}
                <main className="max-w-4xl mx-auto px-4 pb-16 space-y-10 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Abstract</h2>
                        <p>
                            This report provides a comprehensive overview of my
                            internship experience as a Python Developer at IIT
                            Bombay. It covers the key projects I contributed to,
                            specifically LEAP OCR and Project Udaan, detailing
                            my responsibilities, the skills I acquired, and the
                            challenges I overcame. The report also reflects on
                            the knowledge gained and its alignment with my
                            career goals.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Introduction</h2>
                        <h3 className="text-lg font-medium">
                            Project Overview
                        </h3>
                        <p>
                            Project Udaan is a flagship initiative by IIT Bombay
                            aimed at breaking language barriers across India by
                            translating academic books, bank circulars,
                            instruction manuals, and more into native languages.
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>
                                <b>LEAP OCR</b>: An advanced Optical Character
                                Recognition system capable of recognizing text,
                                figures, layout, and text attributes in multiple
                                languages.
                            </li>
                            <li>
                                <b>Project Udaan (Multi-Lingual LLMs)</b>:
                                Focuses on translation between English and
                                Indian languages and includes an in-house
                                post-translation editor tool.
                            </li>
                        </ol>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            Key Responsibilities
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Managing and maintaining LEAP OCR and Project
                                Udaan pipelines
                            </li>
                            <li>
                                Implementing new features into existing systems
                            </li>
                            <li>
                                Migrating translation pipelines between server
                                environments
                            </li>
                            <li>
                                Debugging and ensuring smooth pipeline operation
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            Skills and Knowledge Gained
                        </h2>

                        <h3 className="text-lg font-medium">
                            Technical Skills
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Server management and maintenance</li>
                            <li>
                                Advanced problem-solving during system
                                integrations
                            </li>
                            <li>
                                Critical thinking and pipeline-level debugging
                            </li>
                        </ul>

                        <h3 className="text-lg font-medium">Soft Skills</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Improved communication through volunteering at
                                TechFest 2024
                            </li>
                            <li>
                                Stronger teamwork and collaboration in Project
                                Udaan
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">Conclusion</h2>
                        <p>
                            My internship at IIT Bombay was a highly rewarding
                            experience. Working on impactful projects like LEAP
                            OCR and Project Udaan provided hands-on exposure to
                            real-world translation systems and strengthened both
                            my technical and professional skills.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            Acknowledgements
                        </h2>
                        <p>
                            I sincerely thank my supervisors Pranita Harpale and
                            Anuja Dumada for their guidance, Prof. Ganesh
                            Ramakrishnan for his leadership, and my colleagues
                            for creating a collaborative and enriching
                            environment at IIT Bombay.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            Related Posts
                        </h2>
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7146041201681494017/"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            Project UDAAN: “Breaking the Language Barrier in
                            Education” – Techfest IIT Bombay
                        </a>
                    </section>
                </main>

                {/* Footer */}
                <footer className="text-center py-6 text-sm text-gray-500">
                    Made with ❤️ by Pranav Dalvi
                </footer>
            </div>{" "}
        </>
    );
};

export default Udaan;
