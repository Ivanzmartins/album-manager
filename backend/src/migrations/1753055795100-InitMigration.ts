import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753055795100 implements MigrationInterface {
  name = "InitMigration1753055795100";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE "user" (
      "id" character varying NOT NULL,
      "username" character varying NOT NULL,
      "email" character varying NOT NULL,
      CONSTRAINT "PK_user_id" PRIMARY KEY ("id")
    )`);

    await queryRunner.query(`
    CREATE TABLE "album" (
      "id" character varying NOT NULL,
      "title" character varying NOT NULL,
      "description" character varying NOT NULL,
      "userId" character varying,
      "createdAt" date NOT NULL,
      "updatedAt" date NOT NULL,
      CONSTRAINT "PK_album_id" PRIMARY KEY ("id")
    )`);

    await queryRunner.query(`
    CREATE TABLE "photo" (
      "id" character varying NOT NULL,
      "title" character varying NOT NULL,
      "description" character varying NOT NULL,
      "base64" character varying NOT NULL,
      "uploadedAt" date NOT NULL,
      "albumId" character varying,
      CONSTRAINT "PK_photo_id" PRIMARY KEY ("id")
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "photo"`);
    await queryRunner.query(`DROP TABLE "album"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
