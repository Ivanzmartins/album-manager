import { useAppData } from "./useAppData";

export function useUsers() {
  return useAppData().users;
}

export function useUserById(userId?: string) {
  const users = useAppData().users;
  return users.find((u) => u.id === userId);
}
