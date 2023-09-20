import { Button, Box, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

interface BodyPartProps {
  item: string;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const BodyPart: React.FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Box
      className="bodyPart-card"
      sx={{
        ...(bodyPart === item && { borderTop: "4px solid #ff2625" }),
        backgroundColor: "#fff",
        borderBottomLeftRadius: 20,
        height: 280,
        cursor: "pointer",
      }}
    >
      <Button
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
        onClick={() => {
          setBodyPart(item);
          scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        }}
        variant="text"
      >
        <img src={Icon} alt="dumbbell" style={{ width: 40, height: 40 }} />
        <Typography fontSize={24} fontWeight="bold" color="#3A1212" textTransform="capitalize">
          {item}
        </Typography>
      </Button>
    </Box>
  );
};

export default BodyPart;
