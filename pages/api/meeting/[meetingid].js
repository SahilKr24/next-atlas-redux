import { ObjectId } from "bson";
import { connectToDatabase } from "../../../util/mongodb";

const deleteMeeting = async (meetingid) => {
  const { client, db } = await connectToDatabase();
  const response = await db
    .collection("meetings")
    .deleteOne({ _id: ObjectId(meetingid) });
  return response;
};

export default async function (req, res) {
  const { meetingid } = req.query;
  try {
    const response = await deleteMeeting(meetingid);
    res.json(response);
  } catch (e) {
    console.error(e);
    res.json({ error: e }, 404);
  }
}
