---
date: 2024-10-15T18:23:23+08:00
title: MySQL一些常识和函数
---
# MVCC机制

> 当一个事务要对数据库中的数据进行修改时，MVCC 会为该事务创建一个数据快照，而不是直接修改实际的数据行。

一致性非锁定读（读取数据的时候为了保证数据的一致性，没有锁定，通过版本号）

> 如果读取的行正在执行 DELETE 或 UPDATE 操作，这时读取操作不会去等待行上锁的释放。相反地，InnoDB 存储引擎会去读取行的一个快照数据，对于这种读取历史数据的方式，我们叫它快照读 >(snapshot read)

锁定读如果执行的是下列语句，就是 锁定读（Locking Reads）
select ... lock in share mode

select ... for updateinsert、update、

delete

操作在锁定读下，读取的是数据的最新版本，这种读也被称为 当前读（current read）。锁定读会对读取到的记录加锁：select ... lock in share mode：对记录加 S 锁，其它事务也可以加S锁，如果加 x 锁则会被阻塞select ... for update、insert、update、delete：对记录加 X 锁，且其它事务不能加任何锁在一致性非锁定读下，即使读取的记录已被其它事务加上 X 锁，这时记录也是可以被读取的，即读取的快照数据。上面说了，在 Repeatable Read 下 MVCC 防止了部分幻读，这边的 “部分” 是指在 一致性非锁定读 情况下，只能读取到第一次查询之前所插入的数据（根据 Read View 判断数据可见性，Read View 在第一次查询时生成）。但是！如果是 当前读 ，每次读取的都是最新数据，这时如果两次查询中间有其它事务插入数据，就会产生幻读。所以， InnoDB 在实现Repeatable Read 时，如果执行的是当前读，则会对读取的记录使用 Next-key Lock ，来防止其它事务在间隙间插入数据


```pgsql

SELECT FEE_TYPE,SUM(${@com.kingtsoft.kingpower.frame.utils.core.DBUtil@getNull()}(AMOUNT,0)) AMOUNT

        FROM

        (

        SELECT AMOUNT,

        (SELECT CASE WHEN NAME LIKE '%体检%' OR NAME LIKE '%磁共振%' OR NAME LIKE '%CT%'OR NAME LIKE '%放射%'OR NAME LIKE '%检查%' THEN '05'

        WHEN NAME LIKE '%治疗%' THEN '06'

        WHEN NAME LIKE '%手术%' THEN '07'

        WHEN NAME LIKE '%检验%' THEN '08'

        WHEN NAME LIKE '%材料%' THEN '09'

        ELSE '99'END FROM ACC_DIC_FEE_CLASSIFY WHERE ID = B.CLASSIFY_ID) FEE_TYPE

         FROM OIS_BILL_DETAILS A,ACC_DIC_FEE_ITEM B

        WHERE A.FEE_ID = B.ID

        AND A.BILL_ID IN (SELECT BILL_ID FROM OIS_BILL WHERE OPC_ID = #{opcId} AND INVALID_TIME IS NULL)

        AND A.HT = 'C'

        union all

        SELECT AMOUNT,

        (CASE WHEN b.TYPE ='Y' THEN '01'

        WHEN b.TYPE = 'Z' THEN '02'

        WHEN b.TYPE = 'C' THEN '03'

        ELSE '99' END) FEE_TYPE

        FROM OIS_BILL_DETAILS A,MMIS_DIC_MED B

        WHERE A.Mat_Id = B.ID

        AND B.TYPE IN ('Y', 'Z', 'C')

        AND A.BILL_ID IN (SELECT BILL_ID FROM OIS_BILL WHERE OPC_ID = #{opcId} AND INVALID_TIME IS NULL)

        AND A.HT = 'C'

        union all

        SELECT SUM(${@com.kingtsoft.kingpower.frame.utils.core.DBUtil@getNull()}(AMOUNT,0)) AMOUNT,'00' FEE_TYPE

        FROM OIS_BILL_DETAILS A

        WHERE A.BILL_ID IN (SELECT BILL_ID FROM OIS_BILL WHERE OPC_ID = #{opcId} AND INVALID_TIME IS NULL)

        AND A.HT = 'C'

        ) T

        GROUP BY FEE_TYPE

```

在子查询结果集上进行操作的查询是外部查询。

一些不认识的函数：

```pgsql

COALESCE 函数是一个在 SQL 中用于处理空值的函数，它的语法如下：

COALESCE ( expression_1, expression_2,..., expression_n )

COALESCE 函数会依次检查每个表达式的值，并返回第一个非空的值。如果所有的表达式都为空值，则返回 NULL。

以下是一个使用 COALESCE 函数的示例：

假设有一个名为 employees 的表，其中包含 name、salary 和 bonus 三个列。如果 bonus 列的值为 NULL，我们希望使用 0 来代替。可以使用以下查询来实现：

SELECT name, salary, COALESCE(bonus, 0) AS bonus FROM employees;

在这个查询中，COALESCE 函数会检查 bonus 列的值。如果 bonus 列的值不为 NULL，它将返回该值；否则，它将返回 0。

```

```pgsql

在 SQL 中，EXTRACT()是一个用于从日期时间值中提取特定部分（如年、月、日、小时等）的函数。

其语法通常为：EXTRACT(unit FROM datetime_expression)。

其中，unit是要提取的时间部分，可以是YEAR（年）、MONTH（月）、DAY（日）、HOUR（小时）、MINUTE（分钟）、SECOND（秒）等；datetime_expression是一个日期时间类型的表达式，可以是一个日期时间列、一个函数返回的日期时间值或一个常量日期时间值。

例如：

sql

复制

SELECT EXTRACT(YEAR FROM '2023-10-29'::date) AS year_value;

-- 返回结果为 2023

这个函数在处理日期时间数据时非常有用，可以方便地获取特定的时间部分进行分析或计算。不同的数据库系统可能对EXTRACT()函数的支持略有不同，但基本用法相似。

```

什么是外部查询：

> 在 SQL 中，聚合函数是对一组值进行计算并返回单一值的函数。当聚合函数出现在查询的 SELECT 子句中，且不是在子查询中时，就称为外部聚合函数。外部聚合函数用于对整个查询结果集进行聚合操作。

区分外查询和子查询：

***查询每个部门的平均薪资** ：

```sql

SELECT department_id, 

       (SELECTAVG(salary) FROM employees WHERE department_id = e.department_id) AS average_salary

FROM employees e

GROUP BY department_id;

```

***查询每个班级的学生人数** ：

```sql

SELECT class_id, 

       (SELECTCOUNT(*) FROM students WHERE class_id = s.class_id) AS student_count

FROM students s

GROUP BY class_id;

```

***查询每个城市的订单总金额** ：

```sql

SELECT city, 

       (SELECTSUM(amount) FROM orders WHERE city = o.city) AS total_amount

FROM orders o

GROUP BY city;

```

***查询每个产品类别的最高价格** ：

```sql

SELECT category_id, 

       (SELECTMAX(price) FROM products WHERE category_id = p.category_id) AS max_price

FROM products p

GROUP BY category_id;

```

***查询每个供应商的最低价格** ：

```sql

SELECT supplier_id, 

       (SELECTMIN(price) FROM products WHERE supplier_id = s.supplier_id) AS min_price

FROM products s

GROUP BY supplier_id;

```
