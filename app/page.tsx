import prisma from "./lib/prisma"

export const revalidate = 20;

export default async function Home() {
  
  const projects = await getProjects();

  return(
    <div>
        <h1 className="text-5xl text-blue-500">
          Hello, World!
        </h1>
        {projects && projects.map((project, index) => (
          <li key={index}>
            {project.name}
          </li>
        ))}
        
    </div>
    
  )
}

async function getProjects() {
  const projects = await prisma.projects.findMany();
  return projects;
}