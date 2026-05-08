import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { User } from "../../types/UserType";
import { useAppTheme } from "../../hooks/useAppTheme";
import { AnimatePresence, motion } from "motion/react";

interface UserCardProps extends Partial<User> {
  show?: boolean;
}

const UserCard = (props: UserCardProps) => {
  const { show, name, email, phone, address } = props;

  const { theme } = useAppTheme();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: 20, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          className="mt-5"
        >
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
                sx={{
                  color: theme.palette.text.tertiary,
                  mb: 1.5,
                  fontSize: 14,
                }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserCard;
