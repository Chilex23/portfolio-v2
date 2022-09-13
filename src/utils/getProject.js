const getProject = (projects, id) => {
  return projects.filter((el) => el.title === id);
};

export default getProject;
