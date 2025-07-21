import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753056187396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" ( username, email) VALUES
      ( 'Ivan', 'ivan@example.com'),
      ('Maria', 'maria@example.com'),
      ('Jose', 'jose@example.com'),
      ( 'Paulo', 'paulo@example.com');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE id IN ('1', '2', '3', '4');
    `);
  }
}
