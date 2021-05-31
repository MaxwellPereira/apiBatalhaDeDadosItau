import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyExtraClassessToStudent1622356229468
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'extraClasses',
      new TableForeignKey({
        name: 'ExtraClassesStudents',
        columnNames: ['student_id'],
        referencedColumnNames: ['student_id'],
        referencedTableName: 'students',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('extraClasses', 'ExtraClassesStudents');
  }
}
