import { User } from "@/types/User";
import { Card, CardContent } from "./ui/card";
interface UserCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
  onClick: () => void;
}
export const UserCard = ({
  user,
  onClick,
  className,
  ...props
}: UserCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-hover hover:scale-105 bg-photo-card border-photo-border"
      onClick={onClick}
      {...props}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate">
              {user.username}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {user.email}
            </p>

            <div className="flex items-center space-x-4 mt-3"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
