import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sys_menu', { schema: 'pc' })
export class SysMenu {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'menu_id',
    comment: '菜单ID',
  })
  menuId: string;

  @Column('varchar', { name: 'menu_name', comment: '菜单名称', length: 50 })
  menuName: string;

  @Column('bigint', {
    name: 'parent_id',
    nullable: true,
    comment: '父菜单ID',
    default: () => "'0'",
  })
  parentId: string | null;

  @Column('int', {
    name: 'order_num',
    nullable: true,
    comment: '显示顺序',
    default: () => "'0'",
  })
  orderNum: number | null;

  @Column('varchar', {
    name: 'path',
    nullable: true,
    comment: '路由地址',
    length: 200,
  })
  path: string | null;

  @Column('varchar', {
    name: 'component',
    nullable: true,
    comment: '组件路径',
    length: 255,
  })
  component: string | null;

  @Column('varchar', {
    name: 'query',
    nullable: true,
    comment: '路由参数',
    length: 255,
  })
  query: string | null;

  @Column('int', {
    name: 'is_frame',
    nullable: true,
    comment: '是否为外链（0是 1否）',
    default: () => "'1'",
  })
  isFrame: number | null;

  @Column('int', {
    name: 'is_cache',
    nullable: true,
    comment: '是否缓存（0缓存 1不缓存）',
    default: () => "'0'",
  })
  isCache: number | null;

  @Column('char', {
    name: 'menu_type',
    nullable: true,
    comment: '菜单类型（M目录 C菜单 F按钮）',
    length: 1,
  })
  menuType: string | null;

  @Column('char', {
    name: 'visible',
    nullable: true,
    comment: '菜单状态（0显示 1隐藏）',
    length: 1,
    default: () => "'0'",
  })
  visible: string | null;

  @Column('char', {
    name: 'status',
    nullable: true,
    comment: '菜单状态（0正常 1停用）',
    length: 1,
    default: () => "'0'",
  })
  status: string | null;

  @Column('varchar', {
    name: 'perms',
    nullable: true,
    comment: '权限标识',
    length: 100,
  })
  perms: string | null;

  @Column('varchar', {
    name: 'icon',
    nullable: true,
    comment: '菜单图标',
    length: 100,
    default: () => "'#'",
  })
  icon: string | null;

  @Column('varchar', {
    name: 'create_by',
    nullable: true,
    comment: '创建者',
    length: 64,
  })
  createBy: string | null;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
  })
  createTime: Date | null;

  @Column('varchar', {
    name: 'update_by',
    nullable: true,
    comment: '更新者',
    length: 64,
  })
  updateBy: string | null;

  @Column('datetime', {
    name: 'update_time',
    nullable: true,
    comment: '更新时间',
  })
  updateTime: Date | null;

  @Column('varchar', {
    name: 'remark',
    nullable: true,
    comment: '备注',
    length: 500,
  })
  remark: string | null;
}
