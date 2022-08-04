import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function LabelBottomNavigation() {
  return (
    <BottomNavigation sx={{ width: "100%" }}>
      <BottomNavigationAction icon={<TwitterIcon sx={{ color: "black" }} />} />
      <BottomNavigationAction icon={<FacebookIcon sx={{ color: "black" }} />} />
      <BottomNavigationAction icon={<YouTubeIcon sx={{ color: "black" }} />} />
    </BottomNavigation>
  );
}
