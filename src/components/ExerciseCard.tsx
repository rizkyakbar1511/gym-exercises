import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ ml: "21px", color: "#fff", backgroundColor: "#ffa9a9", fontSize: 14, borderRadius: 20, textTransform: "capitalize" }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: "21px", color: "#fff", backgroundColor: "#fcc757", fontSize: 14, borderRadius: 20, textTransform: "capitalize" }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
