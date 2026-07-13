import { useLibraryStore } from "@/store/libraryStore";

export const getStudents = async () => Promise.resolve(useLibraryStore.getState().students);
export const getStudentById = async (id) =>
  Promise.resolve(useLibraryStore.getState().students.find((s) => s.id === id));

export const createStudent = async (payload) => {
  useLibraryStore.getState().addStudent(payload);
  return Promise.resolve(payload);
};
export const updateStudent = async (id, payload) => {
  useLibraryStore.getState().updateStudent(id, payload);
  return Promise.resolve({ id, ...payload });
};
export const deleteStudent = async (id) => {
  useLibraryStore.getState().deleteStudent(id);
  return Promise.resolve({ id });
};
