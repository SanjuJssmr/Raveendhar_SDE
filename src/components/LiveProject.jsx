import React from 'react'
import abc from "../assets/abc.jpg"
import pf from "../assets/pf1.webp"

const tagClass = 'w-fit rounded-md  bg-[#1877f2] bg-opacity-20 text-[#2F5061]  px-2   py-1 leading-heading'

const paperflitePoints = [
    "Manage server-side and backend operations for the live product Paperflite.com, ensuring reliability, uptime, and performance.",
    "Led the end-to-end production migration from AWS to GCP in one month, enabling $200K in GCP credits, and independently own the GCP server-side stack.",
    "Architected and automated GitHub Actions CI/CD pipelines across multiple services, reducing manual build cycles (25–30 mins) and enabling 2500+ automated deployments over the year.",
    "Integrated multiple CRM and cloud-storage provider APIs, improving data flow and platform interoperability.",
    "Migrated major monolithic components to a gRPC-based microservices architecture and deployed key services in production.",
    "Diagnosed and resolved complex server, application, and cloud infrastructure issues with zero downtime, delivering complete RCA documentation.",
    "Collaborated closely with the team on application optimization, migrating the entire codebase and database collections with proper indexing and query best practices, resulting in a 90% performance improvement."
]

const allmastersPoints = [
    "Handling the backend part of the live product Allmasters.ai by creating and maintaining REST APIs and core functionalities with strong debugging and troubleshooting skills.",
    "Developed a separate micro-service that is responsible for every task scheduler functionality in the product which handles almost 50-70 jobs in daily basis.",
    "Build the crucial OCR modules that help the internal team to efficiently by improves the fault tolerance by 98 percentage.",
    "Optimized the existing API’s by implementing efficient logic and database aggregations, which gradually increased the performance of the API’s from minutes to (50-150 ms).",
    "Migrated the deprecated package with proper research and smooth implementation without affecting the existing data."
]

const paperfliteTags = ["Java", "SpringBoot", "gRPC", "MongoDb", "ReactJs", "GCP", "AWS", "S3", "EC2", "ECS", "SQS", "GitHub Actions", "Thymleaf", "Sentry", "Cloudfront"]
const allmastersTags = ["NodeJs", "ExpressJs", "MongoDb", "Azure", "Aws/S3", "Nodemailer", "Cron", "Multer", "Helmet", "Ejs", "Docker"]

const BulletList = ({ points }) => (
    <ul className='text-gray-600 sm:text-sm text-xs text-left space-y-2.5 leading-body'>
        {points.map((point) => (
            <li key={point} className='flex gap-2'>
                <span className='shrink-0 leading-body'>✔️</span>
                <span>{point}</span>
            </li>
        ))}
    </ul>
)

const LiveProject = () => {
    return (
        <div className='pb-10 w-full h-full flex flex-col items-center justify-center'>
            <div className="flex font-poppins w-full gap-2 pb-8 flex-col items-center justify-center  ">
                <h2 className="text-2xl font-medium text-[#fa3c4c] text-opacity-80 uppercase flex items-center justify-center gap-2 leading-heading">Live Products</h2>
                <p className="flex opacity-60 text-[#d696bb]  text-center leading-body">
                    Live Products Worked On
                </p>
            </div>
            <div className=' p-5 w-10/12 rounded-md shadow-md mb-6 hover:shadow-lg transition-shadow duration-300'>
                <section className='flex-col sm:flex-row flex gap-10 items-center justify-center'>
                    <img src={pf} alt="" width={200} height={200} />
                    <section className="flex  flex-col items-start gap-4 justify-center">
                        <a href='https://www.paperflite.com/' className=' cursor-pointer font-poppins text-gray-600 text-2xl leading-heading'>Paperflite|</a>
                        <BulletList points={paperflitePoints} />
                        <div className='flex gap-2 pt-1 sm:text-sm text-xs flex-wrap'>
                            {paperfliteTags.map((tag) => (
                                <p key={tag} className={tagClass}>{tag}</p>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
            <div className=' p-5 w-10/12 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300'>
                <section className='flex-col sm:flex-row flex gap-10 items-center justify-center'>
                    <img src={abc} alt="" width={200} height={200} />
                    <section className="flex  flex-col items-start gap-4 justify-center">
                        <a href='https://app.allmasters.ai/' className=' cursor-pointer font-poppins text-gray-600 text-2xl leading-heading'>AllMasters.ai|</a>
                        <BulletList points={allmastersPoints} />
                        <div className='flex gap-2 pt-1 sm:text-sm text-xs flex-wrap'>
                            {allmastersTags.map((tag) => (
                                <p key={tag} className={tagClass}>{tag}</p>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default LiveProject
