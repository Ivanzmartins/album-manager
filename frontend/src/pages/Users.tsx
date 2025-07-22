import { useCurrentUser, useOtherUsers } from "@/hooks/useUsers";
import { UserCard } from "@/components/UserCard";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const otherUsers = useOtherUsers();

  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground mt-2">
            Navigate through the users and their albums
          </p>
        </div>

        {currentUser && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">My profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UserCard
                user={currentUser}
                onClick={() => navigate(`/users/${currentUser.id}/albums`)}
                isCurrentUser
              />
            </div>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold mb-4">Other users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => navigate(`/users/${user.id}/albums`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
