import { useAppData } from "./useAppData";

export function useUsers() {
  return useAppData().users;
}

export function useUserById(userId?: string) {
  const users = useAppData().users;
  return users.find((u) => u.id === userId);
}
export const useCurrentUser = () => {
  const { users } = useAppData();
  return users.find((u) => u.id === "1");
};

export const useOtherUsers = () => {
  const { users } = useAppData();
  return users.filter((u) => u.id !== "1");
};
