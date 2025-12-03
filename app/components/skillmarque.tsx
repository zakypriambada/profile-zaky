'use client';
import React from 'react';

const skills = [
    '/assets/skills/logo-html.svg',
    '/assets/skills/logo-css.svg',
    '/assets/skills/logo-js.svg',
    '/assets/skills/logo-php.svg',
    '/assets/skills/logo-python.svg',
    '/assets/skills/logo-java.svg',
    '/assets/skills/logo-cpp.svg',
    '/assets/skills/logo-androidstudio.svg',
    '/assets/skills/logo-flutter.svg',
    '/assets/skills/logo-dart.svg',
    '/assets/skills/logo-c.svg',
    '/assets/skills/logo-react.svg',
    '/assets/skills/logo-ts.svg',
    '/assets/skills/logo-tailwind.svg',
    '/assets/skills/logo-nextjs.svg',
    '/assets/skills/logo-nodejs.svg',
    '/assets/skills/logo-bootstrap.svg',
    '/assets/skills/logo-git.svg',
    '/assets/skills/logo-laragon.svg',
    '/assets/skills/logo-mysql.svg',
    '/assets/skills/logo-docker.svg',
    '/assets/skills/logo-postgre.svg',
    '/assets/skills/logo-gns3.svg',
    '/assets/skills/logo-winbox.svg',
    '/assets/skills/logo-netbeans.svg',
    '/assets/skills/logo-canva.svg',
    '/assets/skills/logo-figma.svg',
    '/assets/skills/logo-ps.svg',
    '/assets/skills/logo-pr.svg',
    '/assets/skills/logo-capcut.svg',
];

const SkillMarquee: React.FC = () => {
    const allSkills = [...skills, ...skills];

    return (
        <div className="overflow-hidden bg-[#f1f3fb] py-4 text-center">
            <div className="animate-marquee">
                {allSkills.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`skill-${index}`}
                        className="h-16 mx-6"
                    />
                ))}
            </div>
            <p className="text-[16px] p-[40px] md:mr-[100px] md:ml-[100px] text-black ">Keahlian saya mencakup berbagai teknologi dan alat seperti HTML, CSS, JavaScript, PHP, Python, Java, C++, Android Studio, Flutter, Dart, C, React, TypeScript, Tailwind CSS, Next.js, Node.js, Bootstrap, Git, Laragon, MySQL, Docker, PostgreSQL, GNS3, Winbox, NetBeans, Canva, Figma, Photoshop, Premiere Pro, dan CapCut.</p>
        </div>
    );
};

export default SkillMarquee;
