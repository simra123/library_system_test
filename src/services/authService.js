import studentsData from "@/data/students.json";

const ADMIN = {
  id: "A001",
  name: "Admin User",
  email: "admin@library.edu",
  password: "admin123",
};

const STUDENT_PASSWORD = "student123";

export const loginAdmin = async ({ email, password }) => {
  const e = String(email || "").trim().toLowerCase();
  if (e !== ADMIN.email || password !== ADMIN.password) {
    throw new Error("Invalid admin credentials");
  }
  return {
    token: "mock-admin-token",
    user: { id: ADMIN.id, role: "admin", name: ADMIN.name, email: ADMIN.email },
  };
};

export const loginStudent = async ({ email, password }) => {
  const e = String(email || "").trim().toLowerCase();
  const student = studentsData.find((s) => s.email.toLowerCase() === e);
  if (!student || password !== STUDENT_PASSWORD) {
    throw new Error("Invalid student credentials");
  }
  return {
    token: "mock-student-token",
    user: {
      id: student.id,
      role: "student",
      name: student.name,
      email: student.email,
      department: student.department,
    },
  };
};

export const forgotPassword = async ({ email }) => Promise.resolve({ ok: true, email });

export const logout = async () => Promise.resolve({ ok: true });
