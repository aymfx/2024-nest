import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sys_role", { schema: "pc" })
export class SysRole {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "role_id",
    comment: "角色ID",
  })
  roleId: string;

  @Column("varchar", { name: "role_name", comment: "角色名称", length: 30 })
  roleName: string;

  @Column("varchar", {
    name: "role_key",
    comment: "角色权限字符串",
    length: 100,
  })
  roleKey: string;

  @Column("int", { name: "role_sort", comment: "显示顺序" })
  roleSort: number;

  @Column("char", {
    name: "data_scope",
    nullable: true,
    comment:
      "数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）",
    length: 1,
    default: () => "'1'",
  })
  dataScope: string | null;

  @Column("tinyint", {
    name: "menu_check_strictly",
    nullable: true,
    comment: "菜单树选择项是否关联显示",
    width: 1,
    default: () => "'1'",
  })
  menuCheckStrictly: boolean | null;

  @Column("tinyint", {
    name: "dept_check_strictly",
    nullable: true,
    comment: "部门树选择项是否关联显示",
    width: 1,
    default: () => "'1'",
  })
  deptCheckStrictly: boolean | null;

  @Column("char", {
    name: "status",
    comment: "角色状态（0正常 1停用）",
    length: 1,
  })
  status: string;

  @Column("char", {
    name: "del_flag",
    nullable: true,
    comment: "删除标志（0代表存在 2代表删除）",
    length: 1,
    default: () => "'0'",
  })
  delFlag: string | null;

  @Column("varchar", {
    name: "create_by",
    nullable: true,
    comment: "创建者",
    length: 64,
  })
  createBy: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("varchar", {
    name: "update_by",
    nullable: true,
    comment: "更新者",
    length: 64,
  })
  updateBy: string | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 500,
  })
  remark: string | null;
}
