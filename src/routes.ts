import { Response, Request } from "express";

import CourseDurationService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CourseDurationService.execute({
    name: "NodeJs",
    duration: 10,
    educator: "Renato Sousa",
  });

  return res.send();
}
