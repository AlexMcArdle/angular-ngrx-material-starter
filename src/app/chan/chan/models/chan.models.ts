export interface ChanThreadsModel {
  threads: [ChanThreadSubjectModel];
}

export interface ChanThreadSubjectModel {
  title: string;
  text: string;
}
