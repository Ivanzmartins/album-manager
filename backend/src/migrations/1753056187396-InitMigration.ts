import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753056187396 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" (id, username, email) VALUES
      (1, 'Ivan', 'ivan@example.com'),
      (2, 'Maria', 'maria@example.com'),
      (3, 'Jose', 'jose@example.com'),
      (4, 'Paulo', 'paulo@example.com');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE id IN ('1', '2', '3', '4');
    `);
  }
}
