import axios from "axios";
import { useContext, useState } from "react";
import useSWR, { mutate } from "swr";
import { FilterProvider } from "../../util/reducer";
import Paper from "../Paper";
import styles from "./Table.module.css";

const Form = () => {
  const { state } = useContext(FilterProvider);
  const headings = [
    "Sl.No",
    "Meeting Name",
    "No of People attending",
    "Date",
    "Start Time",
    "End Time",
    "Actions",
  ];

  const value = state.name;
  const to = state.to;
  const from = state.from;
  const query = `/api/meeting?search=${value}&to=${to}&from=${from}`;
  const { data } = useSWR(query);

  const clear = () => {
    setName("");
    setNumPeople("");
    setDate("");
    setStartTime("");
    setEndTime("");
  };

  const handleSubmit = async (body) => {
    try {
      mutate(query, data.concat(body), false);
      await axios.post("/api/meeting", body);
      mutate(query);
    } catch (e) {
      console.error(e);
    } finally {
      clear();
    }
  };

  const handleDelete = async (documentID) => {
    try {
      mutate(
        query,
        data.filter((document) => document._id != documentID),
        false
      );
      await axios.delete(`/api/meeting/${documentID}`);
      mutate(query);
    } catch (e) {
      console.error(e);
    }
  };

  const [name, setName] = useState("");
  const [numPeople, setNumPeople] = useState(null);
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  return (
    <div>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            {headings.map((heading, i) => (
              <th className={styles.th} key={`table-heading-${i}`}>
                {heading}
              </th>
            ))}
          </tr>
          {data?.map((row, index) => (
            <tr className={styles.tr} key={`table-data-${index}`}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.numPeople}</td>
              <td>{row.date}</td>
              <td>{row.startTime}</td>
              <td>{row.endTime}</td>
              <td>
                <img onClick={() => handleDelete(row._id)} src="./delete.svg" />
              </td>
            </tr>
          ))}
          <tr className={styles.tr}>
            <td></td>
            <td>
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </td>
            <td>
              <button
                className={styles.addButton}
                onClick={(e) =>
                  handleSubmit({ name, numPeople, date, startTime, endTime })
                }
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Table = () => {
  return (
    <Paper>
      <Form />
    </Paper>
  );
};

export default Table;
