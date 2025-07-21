import { MigrationInterface, QueryRunner } from "typeorm";
import { base64Photo } from "../utils/base64Photo";

export class Migrations1753089817422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "photo" ( title, description, "base64", "albumId", "uploadedAt") VALUES
      ( 'foto 1', 'foto 1', '${base64Photo}', 1, NOW()),
      ( 'foto 6', 'foto 6', '${base64Photo}', 2, NOW()),
      ( 'foto 7', 'foto 7', '${base64Photo}', 3, NOW()),
      ( 'foto 8', 'foto 8', '${base64Photo}', '1', NOW()),
      ( 'foto 9', 'foto 9', '${base64Photo}', 2, NOW()),
      ( 'foto 10', 'foto 10', '${base64Photo}', 3, NOW()),
      ( 'foto 11', 'foto 11', '${base64Photo}', 2, NOW()),
      ( 'foto 13', 'foto 13', '${base64Photo}', 3, NOW());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "photo" WHERE id IN (1,2,3,4,5,6,7,8);
    `);
  }
}
