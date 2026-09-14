export const bundledProjects = [
  {
    id: "short-drama-0e36060fe0c19078c4663663b292ba74",
    category: "shortDrama",
    title: "面试",
    type: "短剧",
    description: "",
    videoUrl: `${import.meta.env.BASE_URL}videos/0e36060fe0c19078c4663663b292ba74.mp4`,
  },
  {
    id: "short-drama-fa8c52d2dd2bdc91f01a027638bbfb06",
    category: "shortDrama",
    title: "合照",
    type: "短剧",
    description: "",
    videoUrl: `${import.meta.env.BASE_URL}videos/fa8c52d2dd2bdc91f01a027638bbfb06.mp4`,
  },
  {
    id: "short-drama-cf9f33f2450ea79433f5c2b330955c44",
    category: "shortDrama",
    title: "破案",
    type: "短剧",
    description: "",
    videoUrl: `${import.meta.env.BASE_URL}videos/cf9f33f2450ea79433f5c2b330955c44.mp4`,
  },
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
