import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStudents1622327482154 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'student_id',
            type: 'uuid',
            isUnique: true,
          },
          {
            name: 'identityStudent',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'coordenator_id',
            type: 'varchar',
          },
          {
            name: 'firstName',
            type: 'varchar',
          },
          {
            name: 'lastName',
            type: 'varchar',
          },
          {
            name: 'birthDate',
            type: 'timestamp',
          },
          {
            name: 'motherName',
            type: 'varchar',
          },
          {
            name: 'fatherName',
            type: 'varchar',
          },
          {
            name: 'contactPhone',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
  }
}
