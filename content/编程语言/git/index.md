+++
title = 'Git'
date = 2023-11-08T21:58:02+08:00
draft = true
tags ="git"
+++


# $ git init

```text
Initialized empty Git repository in D:/pythonProject/.git/

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git status
```text
On branch master

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
.idea/
main.py

nothing added to commit but untracked files present (use "git add" to track)

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git status
On branch master

No commits yet

Untracked files:
(use "git add <file>..." to include in what will be committed)
.idea/
hello.txt
main.py
```


# $ git add .
```text
warning: in the working copy of '.idea/inspectionProfiles/Project_Default.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.idea/inspectionProfiles/profiles_settings.xml', LF will be replaced by CRLF the next time Git touches it

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file:   .idea/.gitignore
new file:   .idea/inspectionProfiles/Project_Default.xml
new file:   .idea/inspectionProfiles/profiles_settings.xml
new file:   .idea/misc.xml
new file:   .idea/modules.xml
new file:   .idea/pythonProject.iml
new file:   hello.txt
new file:   main.py

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git commit -m 'Init Commit'
```text
[master (root-commit) e43f799] Init Commit
8 files changed, 57 insertions(+)
create mode 100644 .idea/.gitignore
create mode 100644 .idea/inspectionProfiles/Project_Default.xml
create mode 100644 .idea/inspectionProfiles/profiles_settings.xml
create mode 100644 .idea/misc.xml
create mode 100644 .idea/modules.xml
create mode 100644 .idea/pythonProject.iml
create mode 100644 hello.txt
create mode 100644 main.py

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git log
```text
commit e43f799a847b01115695fd632773d9470de0d669 (HEAD -> master)
Author: ToDreamr <amixrip@163.com>
Date:   Sun Dec 25 14:50:21 2022 +0800

    Init Commit

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git log online
fatal: ambiguous argument 'online': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git log --oneline
```text
e43f799 (HEAD -> master) Init Commit

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git status
On branch master
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ gti add hello.txt
bash: gti: command not found

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git add hello.txt
```text
Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git commit -m 'Modified'
[master b4ad7dc] Modified
1 file changed, 3 insertions(+), 1 deletion(-)

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git status
On branch master
nothing to commit, working tree clean

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git log
commit b4ad7dc66687e9d9a5dc4aa1e27f3d5d34ec0a31 (HEAD -> master)
Author: ToDreamr <amixrip@163.com>
Date:   Sun Dec 25 14:53:43 2022 +0800

    Modified

commit e43f799a847b01115695fd632773d9470de0d669
Author: ToDreamr <amixrip@163.com>
Date:   Sun Dec 25 14:50:21 2022 +0800

    Init Commit

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git show
```text
commit b4ad7dc66687e9d9a5dc4aa1e27f3d5d34ec0a31 (HEAD -> master)
Author: ToDreamr <amixrip@163.com>
Date:   Sun Dec 25 14:53:43 2022 +0800

    Modified

diff --git a/hello.txt b/hello.txt
index 1008422..99c6bfc 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1,3 @@
-ksdak
\ No newline at end of file
+ksdak
+
+Hi
\ No newline at end of file
```


# $ git log --oneline --graph --all
```text
* f993767 (HEAD -> master) Add Ignore
* b4ad7dc Modified
* e43f799 Init Commit
```


# $ git reset --hard f993767
```text
HEAD is now at f993767 Add Ignore

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git reflog
```text
f993767 (HEAD -> master) HEAD@{0}: reset: moving to f993767
f993767 (HEAD -> master) HEAD@{1}: commit: Add Ignore
b4ad7dc HEAD@{2}: commit: Modified
e43f799 HEAD@{3}: commit (initial): Init Commit

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git status
On branch master
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified:   hello.txt

no changes added to commit (use "git add" and/or "git commit -a")

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ git commit -a -m 'OneTime_Modified'
```text
[master 075f853] OneTime_Modified
1 file changed, 3 insertions(+), 1 deletion(-)

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git status
On branch master
nothing to commit, working tree clean

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ git log
commit 075f853b6eacc27a8c0ac5e86b1ae2dbb81f458e (HEAD -> master)
Author: ToDreamr <amixrip@163.com>
Date:   Sun Dec 25 15:10:11 2022 +0800
```


## <mark>以上是基础命令</mark>

```shell
Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```

## <mark><b>查询文件和创建文件以及分支</b></mark>
```text

```
# $ ls

```text
hello.txt  main.py  note.md  venv/

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```


# $ ls -a
```text
./  ../  .git/  .gitignore  .idea/  hello.txt  main.py  note.md  venv/

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```

```text
/d/pythonProject

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```
# $ pwd


```text

```
# $ mkdir Hello


```text
Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
$ cd Hello

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject/Hello (master)
```
# $ cd ..
```text
Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)

```

# $ cd .
```text
Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```
# $ ls ..

```html
将会显示上级目录的全部文件
```
```text

```
# $ git log --all --graph --oneline


```text
* 081e900 (HEAD -> master) md
* 075f853 OneTime_Modified
* f993767 Add Ignore
* b4ad7dc Modified
* e43f799 Init Commit

Rainy-Heights@LAPTOP-I3GJPBVT MINGW64 /d/pythonProject (master)
```
# $ git checkout



# 关于分支

## 删除分支

```text
git branch -d/-D name

```

## 创建分支
```text
git branch name
```


## 切换分支
```text
git checkout(剪出) name

```

## 一次性提交
```text
git commit -a -m 'name'

```

## 使用分支之后改变的将会变成独立的改变同样也可以合并

## 合并（在保证不冲突的前提下）
```text
git merge

```
# 变基和优选

改变根部的操作（**变基**）

git rebase master(本质上是合并)

选择其他分支好的修改到当前分支（**优选**）

git cherry-pick + (改变的编号)

# 使用IDEA来管理本地仓库

![img.png](img.png)
## 右上角为提交与回滚

gitignore文件内部包含的筛选过的文件将不会参与到版本管理之中

下方工作区为版本控制区，分支，优选，变基等操作在之中

# **远程仓库**

作为放到服务器上的仓库，有公有私有之分，常见有GitHub,码云，Coding等，对外开放。私有的一般是GitLab自主搭建的远程仓库。如下以GitHub为例。


如上是选择开源协议（MIT Licence是作为可更改的开源协议）

## 添加远程仓库

# git remote add origin +远程仓库地址



## 推送到远程仓库(将会选择使用token登录，在github上生成token，最好设置时间保存较长的token)


# git push origin master

## 绑定远程仓库

git push --set-upstream origin master:master 实现绑定，直接提交。

之后直接git push origin

git pull --rebase origin master（在连接远程仓库时和本地仓库不一致导致的报错）

现在就实现了一个本地仓库对应一个远程仓库

## 克隆项目

git clone +项目地址

# 抓取拉取和冲突解决

在多人协调工作时可能出现冲突，需要协调

## 取消冲突合并

git rebase abort

拉取远端

git fetch

git pull(git fetch +merge)

# 使用IDEA来管理远程仓库
![img_1.png](img_1.png)

## 添加远程仓库

通过vcs从远程仓库添加项目

# THE END
