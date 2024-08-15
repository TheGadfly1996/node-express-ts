CREATE TABLE IF NOT EXISTS menus (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  -- 自增ID
  parent_id INTEGER DEFAULT 0,
  -- 上级菜单ID，顶级菜单为0或NULL
  name TEXT NOT NULL,
  -- 菜单名称
  route TEXT NOT NULL,
  -- 路由地址
  menu_type TEXT CHECK (menu_type IN ('目录', '菜单', '按钮')),
  -- 菜单类型
  menu_order INTEGER NOT NULL DEFAULT 0 -- 菜单排序
)
INSERT INTO menus (parent_id, name, route, menu_type, `order`)
VALUES (0, '首页', '/home', '目录', 1),
  (1, '用户管理', '/user', '菜单', 1),
  (1, '权限管理', '/permission', '菜单', 2),
  (2, '新增用户', '/user/add', '按钮', 1);