import data from './skills.json';

export const getSkills = () => {
  return data;
};

export default (req, res) => {
  const projects = getSkills();
  res.json(projects);
};
