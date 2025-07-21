import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1753056336871 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "album" (id, title, description, "userId", "createdAt", "updatedAt") VALUES
      ('1', 'album 1', 'album 1', '2', CURRENT_DATE, CURRENT_DATE),
      ('2', 'album 2', 'album 2', '1', CURRENT_DATE, CURRENT_DATE),
      ('3', 'album 3', 'album 3', '3', CURRENT_DATE, CURRENT_DATE);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "album" WHERE id IN ('1', '2', '3');
    `);
  }
}
