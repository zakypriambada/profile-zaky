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
        <div className="overflow-hidden bg-[#f1f3fb] py-4">
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
        </div>
    );
};

export default SkillMarquee;
