import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobsPosting1638815304153 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "jobs",
        columns: [
          {
            name: "id",
            type: "INTEGER",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "VARCHAR",
            isNullable: false,
          },
          {
            name: "description",
            type: "VARCHAR",
            isNullable: false,
          },
          {
            name: "location",
            type: "VARCHAR",
            isNullable: false,
          },
          {
            name: "payrate",
            type: "REAL",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "TIMESTAMP",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "TIMESTAMP",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("jobs");
  }
}
