import styles from "./SideBar.module.css";
import React from "react";

export const SidebarComponent = ({ width, height }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width + 70);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div
        className={styles.sidebar}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          height: height,
        }}
      >
        <div>
          <div>
            <div
              onClick={() => toggleMenu()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: 15,
                paddingLeft: 13,
                marginBottom: 40,
                marginTop: 10,
              }}
            >
              <img
                src="./menu_black_24dp.svg"
                height={40}
                className={styles.icons}
              />
              <span style={{ paddingLeft: 40, fontSize: 20, color: "#FFFFFF" }}>
                1806510
              </span>
            </div>
            <div
              style={{
                padding: 15,
                alignItems: "center",
                paddingTop: 15,
                paddingBottom: 15,
                background: "#133B5C",
                display: "flex",
              }}
            >
              <img src="./home.svg" height={30} className={styles.icons} />
              <span
                style={{
                  paddingLeft: 10,
                  fontSize: 20,
                  color: "#FFFFFF",
                }}
              >
                Home
              </span>
            </div>
            <div
              style={{
                alignItems: "center",
                padding: 15,
                paddingTop: 15,
                paddingBottom: 15,
                display: "flex",
              }}
            >
              <img src="./face.svg" height={30} className={styles.icons} />
              <span
                style={{
                  paddingLeft: 10,
                  fontSize: 20,
                  color: "#FFFFFF",
                }}
              >
                About Me
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SideBar = () => {
  return <SidebarComponent width={270} height={"100vh"} />;
};

export default SideBar;
