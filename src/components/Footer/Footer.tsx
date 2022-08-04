import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const icons = [<TwitterIcon />, <FacebookIcon />, <YouTubeIcon />];

export default function LabelBottomNavigation() {
  return (
    <BottomNavigation sx={{ width: "100%" }}>
      {icons.map((icon) => (
        <BottomNavigationAction icon={icon} />
      ))}
    </BottomNavigation>
  );
}
