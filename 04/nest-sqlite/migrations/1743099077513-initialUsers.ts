import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialUsers1743099077513 implements MigrationInterface {
  users = ['john', 'maria'];
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const user of this.users) {
      await queryRunner.query(`
        INSERT INTO user (name)
        VALUES ('${user}')
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM user WHERE name IN (${this.users.map((u) => `'${u}'`).join(',')})`,
    );
  }
}
