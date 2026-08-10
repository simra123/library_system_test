import { useLibraryStore } from "@/store/libraryStore";
import api from "@/services/api";

export const getStudents = async () => Promise.resolve(useLibraryStore.getState().students);
export const getStudentById = async (id) =>
  Promise.resolve(useLibraryStore.getState().students.find((s) => s.id === id));

export const createStudent = async (payload) => {
  const { data } = await api.post("/students", {
    ...payload,
    role: "student",
  });

  if (!data?.student) {
    throw new Error("The server returned an invalid student response");
  }

  return {
    id: String(data.student.Id),
    name: data.student.Name,
    email: data.student.Email,
    department: data.student.Department,
  };
};
export const updateStudent = async (id, payload) => {
  useLibraryStore.getState().updateStudent(id, payload);
  return Promise.resolve({ id, ...payload });
};
export const deleteStudent = async (id) => {
  useLibraryStore.getState().deleteStudent(id);
  return Promise.resolve({ id });
};
