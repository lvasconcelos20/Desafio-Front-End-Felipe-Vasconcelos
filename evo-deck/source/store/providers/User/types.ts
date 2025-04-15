import { UserEntity } from "@/common/entities/user";

export interface UserContextType {
  updateUser: ({ id, email, name, username }: Partial<UserEntity>) => void;
  allUsers?: UserEntity[] | null;
  loading: Record<string, boolean>;
  fetchAllUsers: () => void;
}
