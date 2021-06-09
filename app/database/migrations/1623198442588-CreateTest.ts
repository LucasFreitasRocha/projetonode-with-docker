import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTest1623198442588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'test',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: "increment"
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: false
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('test')
    }

}
