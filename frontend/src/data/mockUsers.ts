import { User } from "@/types/User";

export const mockDataUsers: User[] = [
  {
    id: "1",
    username: "Ivan",
    email: "ivan@example.com",
  },
  {
    id: "2",
    username: "Maria",
    email: "maria@example.com",
  },
  {
    id: "3",
    username: "Jose",
    email: "jose@example.com",
  },
  {
    id: "4",
    username: "Paulo",
    email: "paulo@example.com",
  },
];

export const mockUsers: User[] = mockDataUsers.filter((u) => u.id !== "1");
export const currentUser = mockDataUsers.find((u) => u.id === "1");
