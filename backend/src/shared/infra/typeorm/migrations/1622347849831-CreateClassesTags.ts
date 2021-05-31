import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClassesTags1622347849831
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classTags',
        columns: [
          {
            name: 'class_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'tag',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
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
    await queryRunner.dropTable('classTags');
  }
}
