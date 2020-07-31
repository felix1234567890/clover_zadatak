const data = require("../zadatak.json");
const CustomErrorHandler = require("../CustomErrorHandler");

const getTracks = (_, res) => {
  const {
    tracks: { data: trackList },
  } = data;
  return res.status(200).json(trackList);
};

const getTrackById = (req, res) => {
  const {
    params: { id },
  } = req;
  const intId = parseInt(id);
  if (isNaN(intId))
    throw new CustomErrorHandler(
      "You should use only numbers while searching for a track by id",
      400
    );
  const {
    tracks: { data: trackList },
  } = data;
  const track = trackList.find((track) => track.id === intId);
  if (!track)
    throw new CustomErrorHandler("Track with this ID doesn't exist", 404);
  return res.status(200).send(track);
};

const sortTracks = (req, res) => {
  const {
    tracks: { data: trackList },
  } = data;
  let sortedTracks;
  if (!("sortBy" in req.query))
    throw new CustomErrorHandler(
      "Please use sortBy as your query parameter",
      400
    );
  const { sortBy } = req.query;

  if (sortBy !== "name" && sortBy !== "duration")
    throw new CustomErrorHandler(
      "It is only allowed to sort data by track name or duration",
      400
    );

  if (sortBy === "name") {
    sortedTracks = trackList.sort((track1, track2) => {
      if (track1.title.toLowerCase() > track2.title.toLowerCase()) {
        return 1;
      }
      if (track1.title.toLowerCase() < track2.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  } else {
    sortedTracks = trackList.sort(
      (track1, track2) => track1.duration - track2.duration
    );
  }
  return res.status(200).json(sortedTracks);
};

module.exports = {
  getTracks,
  getTrackById,
  sortTracks,
};
