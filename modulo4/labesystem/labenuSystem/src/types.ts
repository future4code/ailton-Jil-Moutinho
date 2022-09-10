export type classes = {
  id: number;
  class_name: string;
  module: string;
};

export type student = {
  id: number;
  student_name: string;
  student_email: string;
  birth_date: Date;
  class_id: number;
  hobbies: string[];
};

export type hobby = {
  id: number;
  hobby_name: string;
};

export type expertise = {
  id: number;
  expertise_name: string;
};

export type teacherExpertise = {
  id: number;
  teacher_name: string;
  teacher_email: string;
  birth_date: Date;
  class_id: number;
  expertise: string[];
};
