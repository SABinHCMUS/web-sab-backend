import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Profile {
  /**
   * This decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ type: 'nvarchar', length: 255 })
  @Field()
  fullname: string;

  @Column({ type: 'date' })
  @Field()
  dob: Date;

  @Column({ type: 'integer', nullable: true })
  @Field()
  avatar: number | null;

  @Column({ type: 'varchar', unique: true })
  @Field()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  @Field()
  phone: string | null;
}
