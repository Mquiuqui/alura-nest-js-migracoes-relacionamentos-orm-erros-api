import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUsuarioIdDoProduto1734039400791 implements MigrationInterface {
    name = 'RemoveUsuarioIdDoProduto1734039400791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuario_id" character varying(100) NOT NULL`);
    }

}
