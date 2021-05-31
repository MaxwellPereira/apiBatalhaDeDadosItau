import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCoordanators1622342673838
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'coordenators',
        columns: [
          {
            name: 'coordenator_id',
            type: 'uuid',
            isNullable: true,
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
            name: 'contactPhone',
            type: 'varchar',
          },
          {
            name: 'nationalIdentityCard',
            type: 'varchar',
            isUnique: true,
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
    await queryRunner.dropTable('coodenators');
  }
}
