import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./User";

@Table({
  tableName: "posts",
  timestamps: true, // Agrega automáticamente createdAt y updatedAt
})
export class Post extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
