import React from "react";
/*
  opts = {
    cx              <-- center x
    cy              <-- center y
    radius          <-- circle radius
    start_angle     <-- start angle in degrees
    end_angle       <-- end angle in degrees
  };
  */

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
const CirclePath = ({
  cx = 200,
  cy = 200,
  radius = 200,
  start_angle = 0,
  end_angle = 360,
  thickness = 200,
  fill = "orange",
}) => {
  const start = polarToCartesian(cx, cy, radius, end_angle),
    end = polarToCartesian(cx, cy, radius, start_angle),
    largeArcFlag = end_angle - start_angle <= 180 ? "0" : "1";

  const cutout_radius = radius - thickness,
    start2 = polarToCartesian(cx, cy, cutout_radius, end_angle),
    end2 = polarToCartesian(cx, cy, cutout_radius, start_angle);

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    "L",
    cx,
    cy,
    "Z",

    "M",
    start2.x,
    start2.y,
    "A",
    cutout_radius,
    cutout_radius,
    0,
    largeArcFlag,
    0,
    end2.x,
    end2.y,
    "L",
    cx,
    cy,
    "Z",
  ].join(" ");

  return <path d={d} fill={fill} stroke="none" fill-rule="evenodd" />;
};

const Circle = (props) => {
  const { separateCount = 15 } = props;
  let i = 0;
  let separaters = [];
  const separateAngle = 360 / separateCount;

  while (i < separateCount) {
    separaters.push({
      start_angle: separateAngle * i,
      end_angle: separateAngle * (i + 1),
    });
    i++;
  }

  return (
    <>
      <svg viewBox="0 0 400 400" width="300" height="300">
        {separaters.map(({ start_angle, end_angle }, index) => (
          <CirclePath
            start_angle={start_angle}
            end_angle={end_angle}
            fill={index === 0 ? "green" : index % 2 === 0 ? "#000" : "#cb2e25"}
          />
        ))}
      </svg>
    </>
  );
};

export default Circle;
