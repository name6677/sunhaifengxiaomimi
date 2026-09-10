export const bundledProjects = [
  {
    id: "mangxin-9",
    category: "shortDrama",
    title: "盲信",
    type: "AI漫剧",
    description: "",
    videoUrl: `${import.meta.env.BASE_URL}videos/mangxin-9.mp4`,
  },
];

export function mergeProjects(projects = [], removedProjectIds = []) {
  return [
    ...projects,
    ...bundledProjects.filter((project) =>
      !removedProjectIds.includes(project.id) && !projects.some((saved) => saved.id === project.id)
    ),
  ];
}
