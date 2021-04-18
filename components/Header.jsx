const Header = ({ heading }) => {
  return (
    <div
      style={{
        fontSize: 44,
        fontFamily: "Roboto",
        paddingTop: 25,
      }}
    >
      {heading}
    </div>
  );
};

export default Header;
