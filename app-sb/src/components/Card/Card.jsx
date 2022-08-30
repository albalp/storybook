import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ size, label, borderRadius }) => {
  return (
    <div
      className={[
        "storybook-card",
        "storybook-card--color",
        `storybook-card--${size}`,
        `storybook-card--${borderRadius}`,
      ].join(" ")}
    >
      {label}
    </div>
  );
};

export default Card;

Card.propTypes = {
    border: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sizeSmall", "sizeMedium", "sizeLarge"]),
  color: PropTypes.string,
  borderRadius: PropTypes.oneOf([
    "borderRadiusSmall",
    "borderRadiusMedium",
    "borderRadiusLarge",
  ]),
};
