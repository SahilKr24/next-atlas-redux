import { connectToDatabase } from "../../util/mongodb";

export const getAll = async (search = "", from, to) => {
  const { client, db } = await connectToDatabase();
  const selectors = [{ name: { $regex: search } }];
  if (from) {
    selectors.push({ date: { $gte: from } });
  }
  if (to) {
    selectors.push({
      date: {
        $lte: to,
      },
    });
  }
  console.log(selectors);
  const meetings = db
    .collection("meetings")
    .find({ $and: selectors })
    .toArray();
  return meetings;
};

export const createMeeting = async (data) => {
  const { client, db } = await connectToDatabase();
  const collection = db.collection("meetings");
  const insertedDocument = await collection.insertOne(data);
  return insertedDocument.ops;
};

export default async function (req, res) {
  switch (req.method) {
    case "GET": {
      try {
        let meetings = [];
        const { search, from, to } = req.query;
        meetings = await getAll(search, from, to);
        res.json(meetings);
      } catch (e) {
        console.error(e);
        res.json({ error: e }, 502);
      } finally {
        return;
      }
    }

    case "POST": {
      try {
        const { body } = req;
        const newMeeting = await createMeeting(body);
        res.json(newMeeting);
      } catch (e) {
        console.error(e);
        res.json({ error: e }, 502);
      }
    }
  }
}
