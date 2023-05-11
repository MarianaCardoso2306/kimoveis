import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRealEstateTableAndRelationRealEstateAdress1683433121192 implements MigrationInterface {
    name = 'CreateRealEstateTableAndRelationRealEstateAdress1683433121192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "real_estate" ("id" SERIAL NOT NULL, "sold" boolean DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, CONSTRAINT "REL_44ae17efa35575b6a6f83b35ee" UNIQUE ("addressId"), CONSTRAINT "PK_8735a23fd5adc2afb18242894ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`DROP TABLE "real_estate"`);
    }

}
