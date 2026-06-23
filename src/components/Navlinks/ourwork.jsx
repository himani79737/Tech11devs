import project1 from '../../assets/projects/project1.jpg'
import project2 from '../../assets/projects/project2.jpg'
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
function Navwork() {
  return (
    <section>
    <div className="bg-gray-200 py-7 px-4">
      <div className="border-l-2 py-7 px-4 border-gray-500">

        <p className="text-sm uppercase tracking-widest text-gray-600">OUR PROJECTS</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Works</h1>
      </div>
       <div className="grid md:grid-cols-2 gap-8 hover:shadow-xl py-9">
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
    </div>
    </section>
  )

}

export default Navwork