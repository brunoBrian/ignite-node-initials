interface ICourse {
  name: string;
  duration: number;
  educator: string;
}

class CourseDurationService {
  execute({ name, duration, educator }: ICourse) {
    console.log(name, duration, educator);
  }
}

export default new CourseDurationService();
