export enum MarathonStatLabels {
  bibNumber = "Bib Number",
  finishTime = "Finish Time",
  averagePace = "Average Pace",
  overallStanding = "Overall Standing",
}

type MarathonStats = {
  [key in keyof typeof MarathonStatLabels]: string;
};

export type MarathonSectionCardProps = {
  title: string;
  raceDate: string;
  imageUrl: string;
  stats: MarathonStats;
};