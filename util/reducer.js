import React from "react";

export const FilterProvider = React.createContext(null);

export const NAME = "name";
export const FROM = "from";
export const TO = "to";
export const STATUS = "status";

export const INIT_STATE = { name: "", from: "", to: "", status: true };

export const reducer = (state, action) => {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.payload.name };
    case FROM:
      return { ...state, from: action.payload.from };
    case TO:
      return { ...state, to: action.payload.to };
    case STATUS:
      return { ...state, status: !state.status };
    default: {
      throw Error("Invalid reducer");
    }
  }
};
