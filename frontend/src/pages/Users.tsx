import { UserCard } from "@/components/UserCard";
import { mockUsers } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Usuários</h1>
          <p className="text-muted-foreground mt-2">
            Navegue pelos usuários e seus albuns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => navigate(`/users/${user.id}/albums`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
