export default interface ICreateClassInteractionDTO {
  userId: string;
  classId: string;
  comment: string;
  score: 0 | 1 | -1;
}
