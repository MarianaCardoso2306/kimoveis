import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeOfDates1683434660482 implements MigrationInterface {
    name = 'ChangeTypeOfDates1683434660482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "state" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "state" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
