export type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type VideoThumbnail = {
  height: number;
  url: string;
  width: number;
};

type Video = {
  channelId: string;
  channelName: string;
  description: string;
  lengthText: string;
  publishedTimeText: string;
  thumbnails: VideoThumbnail[];
  title: string;
  videoId: string;
  viewCountText: string;
};

export type ExerciseVideo = {
  video: Video;
};
