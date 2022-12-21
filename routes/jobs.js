const { Router } = require('express');
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs');
const Route = require('express/lib/router/route');

Router.route('/').post(createJob).get(getAllJobs);
Route.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = Router;
