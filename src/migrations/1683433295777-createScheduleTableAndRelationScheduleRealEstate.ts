import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateScheduleTableAndRelationScheduleRealEstate1683433295777 implements MigrationInterface {
    name = 'CreateScheduleTableAndRelationScheduleRealEstate1683433295777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" character varying(5) NOT NULL, "realEstateId" integer, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_ac3131bb922483053abebc5e9ff" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_ac3131bb922483053abebc5e9ff"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
    }

}
