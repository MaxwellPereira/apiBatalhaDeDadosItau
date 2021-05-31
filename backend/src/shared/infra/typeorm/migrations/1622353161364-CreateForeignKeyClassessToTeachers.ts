import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyClassessToTeachers1622353161364
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'classes',
      new TableForeignKey({
        name: 'ClassesTeachers',
        columnNames: ['teacher_id'],
        referencedColumnNames: ['teacher_id'],
        referencedTableName: 'teachers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('classes', 'ClassesTeachers');
  }
}
