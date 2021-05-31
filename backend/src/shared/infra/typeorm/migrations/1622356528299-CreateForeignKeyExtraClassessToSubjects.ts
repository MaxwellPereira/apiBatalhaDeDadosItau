import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyExtraClassessToSubjects1622356528299
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'extraClasses',
      new TableForeignKey({
        name: 'ExtraClassesSubjects',
        columnNames: ['subject_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('extraClasses', 'ExtraClassesSubjects');
  }
}
