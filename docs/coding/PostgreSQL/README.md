# PostgreSQL

::: tip
PostgreSQL：世界上最先进的开源关系数据库

[官方网站](https://www.postgresql.org/)
| [官方文档](https://www.postgresql.org/docs/)
| [pgAdmin](https://www.pgadmin.org/)
:::

## 链接

- [PostgreSQL 教程 | 菜鸟教程](https://www.runoob.com/postgresql/postgresql-tutorial.html)
- [PostgreSQL新手入门 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html)

## 安装

### Ubuntu

#### 安装 PostgreSQL

```shell
# 创建文件仓库配置：
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# 导入仓库签名密钥
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# 更新软件包列表
sudo apt-get update

# 安装最新版本的 PostgreSQL。
# 如果想要安装特定版本，请使用 `postgresql-12` 或类似：
sudo apt-get -y install postgresql
```

> 参考 [PostgreSQL: Linux downloads (Ubuntu)](https://www.postgresql.org/download/linux/ubuntu/)

安装完毕后，系统会创建一个数据库超级用户 `postgres`，密码为空。

```bash
# 切换用户
postgres@VM-0-5-ubuntu:~$ sudo -i -u postgres

# 打开数据库终端
postgres@VM-0-5-ubuntu:~$ psql
psql (14.1 (Ubuntu 14.1-2.pgdg20.04+1))
Type "help" for help.

postgres=#

# 退出数据库终端
postgres=# \q
```

#### 安装 pgAdmin

```shell
#
# 安装仓库
#

# 安装仓库的公钥（如果之前没有安装）:
sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

# 创建仓库配置文件：
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

#
# 安装 pgAdmin
#

# 安装桌面与 Web 模式：
sudo apt install pgadmin4

# 仅安装桌面模式：
sudo apt install pgadmin4-desktop

# 仅安装 Web 模式： 
sudo apt install pgadmin4-web 

# 如果安装了 `pgadmin4-web` 的话需要配置 Web 服务：
sudo /usr/pgadmin4/bin/setup-web.sh
```

> 参考 [pgAdmin 4 (APT) Download](https://www.pgadmin.org/download/pgadmin-4-apt/)

### Windows

参考 [PostgreSQL: Windows installers](https://www.postgresql.org/download/windows/) 获取下载链接：

[exe 压缩包](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
[zip 压缩包](https://www.enterprisedb.com/download-postgresql-binaries)

::: warning
安装时 **不要** 选中文，否则安装失败！
（没有 PostgreSQL 14 的 Server 显示；计算机管理->服务和应用程序->服务中 也没有 postgresql-x64-11 这个服务 ）

![](./img/windows-install.png)
:::

## 配置

### Ubuntu 配置 PostgreSQL

#### 设置密码

```postgresql
postgres=# \password postgres
Enter new password:
Enter it again:
```

#### 设置数据允许远程连接

编辑配置文件 `/etc/postgresql/14/main/postgresql.conf` 第 60 行：

```diff
-60 listen_addresses = 'localhost'          # what IP address(es) to listen on;
+60 listen_addresses = '*'                  # what IP address(es) to listen on;
 61                                         # comma-separated list of addresses;
 62                                         # defaults to 'localhost'; use '*' for all
```

#### 设置允许账户远程登入

编辑配置文件 `/etc/postgresql/14/main/pg_hba.conf` 加一行：

```conf
host    all    all    0.0.0.0/0    scram-sha-256
```

> 参考：
> - [PostgreSQL: Documentation: 14: 21.1. The pg_hba.conf File](https://www.postgresql.org/docs/14/auth-pg-hba-conf.html)
> - [PostgreSQL的pg_hba.conf文件讲解 - 玄同太子 - 博客园](https://www.cnblogs.com/zhi-leaf/p/11442471.html)

### 配置 pgAdmin4-web

```bash {1,8-10}
ubuntu@VM-0-5-ubuntu:~$ sudo /usr/pgadmin4/bin/setup-web.sh
Setting up pgAdmin 4 in web mode on a Debian based platform...
Creating configuration database...
NOTE: Configuring authentication for SERVER mode.

Enter the email address and password to use for the initial pgAdmin user account:

Email address: Yue_plus@foxmail.com
Password:
Retype password:
pgAdmin 4 - Application Initialisation
======================================

Creating storage and log directories...
We can now configure the Apache Web server for you. This involves enabling the wsgi module and configuring the pgAdmin 4 application to mount at /pgadmin4. Do you wish to continue (y/n)? y
The Apache web server is running and must be restarted for the pgAdmin 4 installation to complete. Continue (y/n)? y
Apache successfully restarted. You can now start using pgAdmin 4 in web mode at http://127.0.0.1/pgadmin4
```
