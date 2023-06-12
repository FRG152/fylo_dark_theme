import iconLocation from "../../assets/icon-location.svg";

const Location = () => {
  return (
    <div className="container-location">
      <img className="location-icon" src={iconLocation} alt="location" />
      <p className="location-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore el dolore magna aliqua
      </p>
    </div>
  );
};

export default Location;
