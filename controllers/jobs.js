const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

const getJob = async (req, res) => {
  res.send('get  job');
};
const createjob = async (req, res) => {
  res.send('create job');
};
const updateJobs = async (req, res) => {
  res.send('update job');
};
const deleteJob = async (req, res) => {
  res.send('delte hob');
};

module.exports = {
  getAllJobs,
  getJob,
  createjob,
  updateJobs,
  deleteJob,
};
