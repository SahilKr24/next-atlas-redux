import styles from "./SideBar.module.css";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { FilterProvider, STATUS } from "../../util/reducer";

export const SidebarComponent = ({ width, height }) => {
  const router = useRouter();
  const path = router.pathname;
  const { state } = useContext(FilterProvider);
  const status = state.status;

  const { dispatch } = useContext(FilterProvider);

  const toggle = () => {
    dispatch({ type: STATUS });
  };

  return (
    <React.Fragment>
      <div
        className={styles.sidebar}
        style={{
          width: status ? width : 70,
          height: height,
        }}
      >
        <div>
          <div>
            <div
              onClick={() => toggle()}
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
                alt="hamburger menu"
                className={styles.icons}
              />
              <span
                style={{
                  paddingLeft: 30,
                  visibility: status ? "inherit" : "hidden",
                  transition: "opacity 0.3s linear",
                  transitionDelay: "0.4s",
                  opacity: status ? 1 : 0,
                  fontSize: 20,
                  color: "#FFFFFF",
                }}
              >
                1806510
              </span>
            </div>
            <a href="/">
              <div
                style={{
                  padding: 15,
                  alignItems: "center",
                  paddingTop: 15,
                  paddingBottom: 15,
                  background: path == "/" ? "#133B5C" : "",
                  display: "flex",
                }}
              >
                <img
                  src="./home.svg"
                  height={30}
                  className={styles.icons}
                  alt="home"
                />
                <span
                  style={{
                    paddingLeft: 10,
                    fontSize: 20,
                    color: "#FFFFFF",
                    visibility: status ? "inherit" : "hidden",
                    transition: "opacity 0.3s linear",
                    transitionDelay: "0.4s",
                    opacity: status ? 1 : 0,
                  }}
                >
                  Home
                </span>
              </div>
            </a>
            <a href="/aboutme">
              <div
                style={{
                  alignItems: "center",
                  padding: 15,
                  paddingTop: 15,
                  paddingBottom: 15,
                  display: "flex",
                  background: path == "/aboutme" ? "#133B5C" : "",
                }}
              >
                <img
                  src="./face.svg"
                  height={30}
                  className={styles.icons}
                  alt="face"
                />
                <span
                  style={{
                    paddingLeft: 10,
                    fontSize: 20,
                    color: "#FFFFFF",
                    visibility: status ? "inherit" : "hidden",
                    transition: "opacity 0.3s linear",
                    transitionDelay: "0.4s",
                    opacity: status ? 1 : 0,
                  }}
                >
                  About
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SideBar = () => {
  return <SidebarComponent width={235} height={"100vh"} />;
};

export default SideBar;
