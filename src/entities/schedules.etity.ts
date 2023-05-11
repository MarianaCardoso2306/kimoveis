import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./real_estate.entity";
import User from "./users.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "varchar", length: 5 })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;
}

export default Schedule;
