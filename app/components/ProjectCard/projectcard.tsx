import { FaCloud, FaClock, FaFile } from 'react-icons/fa6';
interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    icon?: React.ElementType;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, icon: Icon }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="bg-white p-6">
        {Icon && <Icon className="text-6xl text-purple-500 mr-2" />}
          <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
          <p className="text-black mb-4 text-center">{description}</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex justify-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  