const { Course } = require('../models');

module.exports = {
  create: async (body) => {
    try {
      const course = await Course.create(body);
      return { result: course };
    } catch (error) {
      return { error };
    }
  },

  find: async () => {
    try {
      const courses = await Course.findAll();
      return { result: courses };
    } catch (error) {
      return { error };
    }
  },

  findOne: async (id) => {
    try {
      const course = await Course.findOne({ where: { id: id } });
      return { result: course };
    } catch (error) {
      return { error };
    }
  },

  update: async (id, body) => {
    try {
      const course = await Course.update(body, { where: { id: id } });
      return { result: course };
    } catch (error) {
      return { error };
    }
  },

  delete: async (id) => {
    try {
      const course = await Course.destroy({ where: { id: id } });
      return { result: course };
    } catch (error) {
      return { error };
    }
  },
};
