import react from 'react'
import project1 from '../../assets/projects/project1.jpg'
import project2 from '../../assets/projects/project2.jpg'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Veducation",
            description: "Web Platform Development for Veducation",
            image: project1,
        },
        {
            id: 2,
            title: "Skillbook Academy",
            description: "Website Redesign for Skillbook Academy",
            image: project2,
        },
    ];
    return (
        <section className="px-6 py-16 max-w-7xl mx-auto" id='project'>
            <p className="font-semibold text-gray-800">Case Studies</p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-10">
                Our Projects
            </h2>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-3 rounded-full bg-blue-700 text-white font-medium cursor-pointer hover:bg-blue-800 hover:scale-105">
                    All
                </button>

                <button className="px-8 py-3 rounded-full border border-blue-700 text-blue-700 font-medium hover:bg-blue-700 hover:text-white cursor-pointer">
                    Ed-Tech
                </button>

                <button className="px-8 py-3 rounded-full border border-blue-700 text-blue-700 font-medium hover:bg-blue-700 hover:text-white cursor-pointer">
                    Consulting
                </button>

                <button className="px-8 py-3 rounded-full border border-blue-700 text-blue-700 font-medium hover:bg-blue-700 hover:text-white cursor-pointer">
                    Gaming & Entertainment
                </button>
            </div>
            {/* project card */}
            <div className="grid md:grid-cols-2 gap-8 hover:shadow-xl ">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-3xl p-5 shadow-sm border"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-96 object-cover rounded-2xl"
                        />

                        <h3 className="mt-6 text-4xl font-bold text-blue-700">
                            {project.title}
                        </h3>

                        <p className="mt-3 text-xl text-gray-700">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Projects