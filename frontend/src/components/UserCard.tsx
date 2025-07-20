import { Badge } from "@/components/ui/badge";
import { User } from "@/types/User";
import { Card, CardContent } from "./ui/card";

interface UserCardProps {
  user: User;
  onClick: () => void;
  isCurrentUser?: boolean;
}

export const UserCard = ({
  user,
  onClick,
  isCurrentUser = false,
}: UserCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-md transition-shadow"
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{user.username}</h3>
          {isCurrentUser && <Badge variant="default">Admin</Badge>}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
      </CardContent>
    </Card>
  );
};
