import fetch from "isomorphic-fetch";

const baseURL = "https://api.cebroker.com/v2";

const api = {
  featuredCourses: {
    async getList(profession = 36) {
      const response = await fetch(
        `${baseURL}/featuredCoursesProfession?profession=${profession}`
      );
      const data = await response.json();
      return data;
    }
  },
  courses: {
    async getList(
      courseName = "violence",
      pageIndex = 1,
      pageSize = 18,
      sortField = "RELEVANCE",
      profession = 36,
      courseType = "CD_ANYTIME",
      sortShufflingSeed = 27
    ) {
      const response = await fetch(
        `${baseURL}/search/courses/?expand=totalItems&pageIndex=${pageIndex}&pageSize=${pageSize}&sortField=${sortField}&profession=${profession}&courseType=${courseType}&sortShufflingSeed=${sortShufflingSeed}&courseName=${courseName}`
      );
      const data = await response.json();

      return data;
    }
  }
};

export default api;
