import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Exercise } from "../types";

interface DetailProps {
  exerciseDetail: Partial<Exercise>;
}

const Detail: React.FC<DetailProps> = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img className="detail-image" src={gifUrl} alt={name} loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi accusamus exercitationem aut reprehenderit amet, dolorem
          ab ut numquam modi, eos eius hic, veniam perferendis velit tenetur facilis cupiditate dolore!
        </Typography>
        {extraDetail.map((item, idx) => (
          <Stack key={idx} direction="row" gap="24px" alignItems="center">
            <Button sx={{ backgroundColor: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }}>
              <img src={item.icon} alt={bodyPart} />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
