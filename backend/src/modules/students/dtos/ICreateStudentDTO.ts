export default interface ICreateStudentDTO {
  firstName: string;
  lastName: string;
  birthDate: Date;
  motherName: string;
  fatherName: string;
  contactPhone: string;
  email?: string;
  identityStudent: string;
}
