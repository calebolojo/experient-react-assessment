import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { User } from "../../types/UserType";
import { useAppTheme } from "../../hooks/useAppTheme";

type UserCardProps = Partial<User>;

const UserCard = (props: UserCardProps) => {
  const { name, email, phone, address } = props;

  const { theme } = useAppTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.secondary,
        minWidth: 275,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
        >
          {name}
        </Typography>
        <Typography
          sx={{ color: theme.palette.text.tertiary, mb: 1.5, fontSize: 14 }}
        >
          <span>T: {phone}</span>T <br /> <span>E: {email}</span>E
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, fontSize: 16 }}
        >
          {address?.street},
          <br />
          {address?.suite && (address?.suite as string)}
          <br />
          {address?.city}
          <br />
          {address?.zipcode as string}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
