import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753055795100 implements MigrationInterface {
  name = "InitMigration1753055795100";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "photo" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "base64" character varying NOT NULL, "uploadedAt" date NOT NULL, "userId" character varying, "albumId" character varying, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`
  CREATE TABLE "album" (
    "id" character varying NOT NULL,
    "title" character varying NOT NULL,
    "description" character varying NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    "userId" character varying,
    CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206" PRIMARY KEY ("id"),
    CONSTRAINT "FK_userId" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE
  )
`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "FK_4494006ff358f754d07df5ccc87" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "FK_464bcdec1590ef4d623166f1b54" FOREIGN KEY ("albumId") REFERENCES "album"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "album" ADD CONSTRAINT "FK_815bbf84cb5e82a56c85294d0fe" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "album" DROP CONSTRAINT "FK_815bbf84cb5e82a56c85294d0fe"`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "FK_464bcdec1590ef4d623166f1b54"`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "FK_4494006ff358f754d07df5ccc87"`
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "album"`);
    await queryRunner.query(`DROP TABLE "photo"`);
  }
}
