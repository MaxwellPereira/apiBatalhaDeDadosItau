import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateExtraClassTags1622348570437
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'extraClassTags',
        columns: [
          {
            name: 'extraClass_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'tag',
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
    await queryRunner.dropTable('extraClassTags');
  }
}
