const asyncHandler = require("express-async-handler");
const { Project } = require("../models/project");

// to get all projects
const getAllProjects = asyncHandler(async (req, res) => {
  const rows = await Project.findAll();
  if (!rows) {
    return res.status(204).json({
      msg: `No rows in the table`,
    });
  }
  res.json(rows);
});

// to get a project by id
const getSingleProject = asyncHandler(async (req, res) => {
  // getting the id from params and storing it as projectID
  const { id: projectID } = req.params;

  const row = await Project.findByPk(projectID);
  if (!row) {
    return res.status(204).json({
      msg: "Requested id not found",
    });
  }

  return res.json(row);
});

const postProject = asyncHandler(async (req, res) => {
  // assuming the details to put is present in req.body
  const project = await Project.create(req.body);
  res.status(201).json({
    msg: `project created with ${project}`,
  });
});

const patchProject = asyncHandler(async (req, res) => {
  // instead of PUT
  // assuming the project ID is present in req.body and req.body contains the details to update
  // i.e req.body = {
  //	project_id : ,
  //	and other attributes ...
  // }
  const project = await Project.findByPk(req.body.project_id);
  if (!project) {
    await Project.create(req.body);
    return res.status(201).json({
      msg: `project with given project_id, didn't exist, hence created project`,
    });
  }
  if (project == req.body) {
    return res.status(200).json({
      msg: `nothing to update`,
    });
  }
  project.set(req.body);
  await project.save();
  res.status(200).json({
    msg: `updated`,
  });
});

const deleteProject = asyncHandler(async (req, res) => {
  // assuming project_id is present req.params
  const { id: project_id } = req.params;
  // finding the project by id,
  const project = await Project.findByPk(project_id);
  // if project not found return success status code with the message nothing to delete
  if (!project) {
    return res.status(200).json({
      msg: `nothing to delete`,
    });
  }
  // destroy method in sequelize
  await project.destroy();
  res.status(200).json({
    msg: `deleted`,
  });
});

module.exports = {
  getAllProjects,
  getSingleProject,
  postProject,
  patchProject,
  deleteProject,
};
