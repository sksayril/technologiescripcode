import ProjectsHero from '@/components/projects/projects-hero';
import ProjectsGrid from '@/components/projects/projects-grid';
import ProjectsFilter from '@/components/projects/projects-filter';
import ProjectsShowcase from '@/components/projects/projects-showcase';

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <ProjectsShowcase />
    </div>
  );
}