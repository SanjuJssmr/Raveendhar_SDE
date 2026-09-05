import React from 'react'
import { FaNodeJs, FaAws, FaGitAlt, FaGithub, FaDocker, FaJava, FaReact } from "react-icons/fa"
import { SiSpringboot, SiSocketdotio, SiAmazons3, SiAmazoncloudwatch, SiAmazonsqs, SiGooglecloud, SiSentry, SiGithubactions } from "react-icons/si"
import { BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { GrMysql } from "react-icons/gr"
import { MdOutlineHub } from "react-icons/md"

const skillGroups = [
    {
        title: "Languages",
        items: [
            { name: "Java", Icon: FaJava },
            { name: "JavaScript", Icon: BiLogoJavascript },
        ]
    },
    {
        title: "Tech Stacks",
        items: [
            { name: "Spring Boot", Icon: SiSpringboot },
            { name: "gRPC", Icon: MdOutlineHub },
            { name: "Node.js", Icon: FaNodeJs },
            { name: "React.js", Icon: FaReact },
            { name: "WebSockets", Icon: SiSocketdotio },
            { name: "Docker", Icon: FaDocker },
        ]
    },
    {
        title: "Cloud & Infra",
        items: [
            { name: "AWS", Icon: FaAws },
            { name: "GCP", Icon: SiGooglecloud },
            { name: "S3", Icon: SiAmazons3 },
            { name: "SQS", Icon: SiAmazonsqs },
            { name: "CloudWatch", Icon: SiAmazoncloudwatch },
            { name: "GitHub Actions", Icon: SiGithubactions },
        ]
    },
    {
        title: "Data & Observability",
        items: [
            { name: "MongoDB", Icon: BiLogoMongodb },
            { name: "MySQL", Icon: GrMysql },
            { name: "Sentry", Icon: SiSentry },
            { name: "Git", Icon: FaGitAlt },
            { name: "GitHub", Icon: FaGithub },
        ]
    }
]

const SkillTile = ({ name, Icon, muted }) => (
    <div className={`skill-tile flex gap-3 flex-col sm:w-24 sm:h-32 w-16 h-24 items-center justify-center ${muted ? 'text-gray-400' : ''}`}>
        <Icon />
        <p className='text-sm text-gray-500 text-center leading-heading'>{name}</p>
    </div>
)

const Skills = () => {
    return (
        <div className='flex flex-col w-full items-center justify-center'>
            <div className="flex w-full gap-2 flex-col font-poppins items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2 leading-heading">Skills</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center leading-body">
                    My expertise
                </p>
            </div>
            <div className='flex w-full h-full pb-10 pt-8 px-6 sm:px-24 flex-col gap-7'>
                {skillGroups.map((group) => (
                    <section key={group.title} className='flex flex-col items-center gap-3'>
                        <h3 className='text-xs sm:text-sm tracking-[0.16em] uppercase text-[#44bec7] leading-heading'>{group.title}</h3>
                        <div className='flex xl:text-8xl sm:text-7xl text-4xl gap-8 sm:gap-10 flex-wrap items-center justify-center text-opacity-50 text-[#1877f2]'>
                            {group.items.map((skill, index) => (
                                <SkillTile key={skill.name} name={skill.name} Icon={skill.Icon} muted={index % 2 === 1} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Skills
