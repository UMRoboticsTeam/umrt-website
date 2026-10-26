import { getCollection } from 'astro:content';

export async function getPrograms() {
  return (await getCollection('programs')).sort(
    (a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name)
  );
}

export async function getProjects() {
  const [projects, programs] = await Promise.all([
    getCollection('projects'),
    getCollection('programs'),
  ]);
  const programIds = new Set(programs.map((program) => program.id));

  for (const project of projects) {
    if (!programIds.has(project.data.program.id)) {
      throw new Error(
        `Project "${project.id}" references unknown program "${project.data.program.id}".`
      );
    }
  }

  return projects.sort(
    (a, b) => b.data.year - a.data.year || a.data.name.localeCompare(b.data.name)
  );
}
