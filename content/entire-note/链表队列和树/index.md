---
title: "抽象数据类型ADT"
date: 2024-03-18T18:23:23+08:00
description: "算法与数据结构"
tags : ["要求熟记"]
---

# 链表 ，队列和二叉树

### 尝试使用cpp实现二叉树，下面是粗劣的代码：

指针和引用传递的区别：

```cpp

//如果传递引用：
void List_Init(List &list)
{
    // 防止访问空指针
    if (list.next != NULL)
    {
        list.next = NULL;
        list.node_count = 0;
    }
}
//如果传递指针：
void List_Init(List *list)
{
    // 防止访问空指针
    if (list->next != NULL)
    {
        list->next = NULL;
        list->node_count = 0;
    }
}

//如果不想用指针，想用引用：
 List &tmp = *list;

```

使用类模板：

类模板使用只能用显示指定类型方式
类模板中的模板参数列表可以有默认参数

```cpp
template<class NameType>

```

```cpp

#include "stdio.h"
#include "stdlib.h"
#include "iostream"
using namespace std;

// 定义一个链表
typedef struct list
{
    int item;
    bool isEmpty;   // 是否空链表
    int node_count; // 节点数
    list *next;     // 下一节点
} List;

// 定义一个二叉树ADT
typedef struct tree
{
    list node;
    tree *tree;
} Tree;

void List_Init(List &list)
{
    // 防止访问空指针
    if (list.next != NULL)
    {
        list.next = NULL;
        list.node_count = 0;
    }
}

bool List_IsEmpty(List &list)
{
    return list.isEmpty;
}
bool Add_List_Item(List &list, int &new_item)
{
    if (list.next != NULL)
    {
        // 加入元素
        List *tp = (List *)malloc(sizeof(List));
        List &tmp = *tp;
        if (tmp.next != NULL)
        {
            //
            tmp.item = new_item;
            tmp.next = NULL;
            tmp.isEmpty = false;
            tmp.node_count++;
            list.next = tmp.next;
        }
        return true;
    }
    return false;
}

void Travel_List(List &list)
{
    while (list.next != NULL)
    {
        cout << "元素是：" << list.item << endl;
        list = *list.next;
    }
    cout << "元素是：" << list.item << endl;
}
int main(int argc, char const *argv[])
{

    List *test = (List *)malloc(sizeof(List));
    List &res = *test;
    List_Init(res);
    int item = 12;

    for (int i = 0; i < 12; i++)
    {
        Add_List_Item(res, item);
    }
    while (true)
    {
        Travel_List(res);
    }

    return 0;
}

```

#### 二叉树的基本知识：

> [参考文章](https://cloud.tencent.com/developer/article/1353388)

满二叉树：
- 所有元素全部占满，必定是完全二叉树
- 只有最下层才有叶子节点
- 非叶子节点的度为 2

完全二叉树：

叶子结点只能出现在最下两层；
最下层的叶子结点一定集中在左边并且连续；
若结点度为1，则该节点只有左子节点；

###### 遍历二叉树

![例子](https://ask.qcloudimg.com/http-save/yehe-2161968/xflz8w0vi1.png)





    ①、前序遍历：

　　定义：先访问根节点，然后访问左子树，再访问右子树；

　　按照定义遍历的顺序遍历结果为：A B D H I E J C F K G

　　②、中序遍历：

　　定义：先访问左子树，再访问根节点，最后访问右子树；

　　按照定义遍历的顺序遍历结果为：H D I B E J A F K C G

　　③、后序遍历：

　　定义：先访问左子树，再访问右子树，最后访问根节点；

　　按照定义遍历的顺序遍历结果为：H I D J E B K F G C A

　　④、层次遍历：

　　定义：逐层的从根节点开始，每层从左至右遍历；

　　按照定义遍历的顺序遍历结果为：A B C D E F G H I J K

经常使用的库：

```cpp
//
// Created by Rainy-Heights on 2024/3/19.
//

#ifndef CARL_CODE_UNION_H
#define CARL_CODE_UNION_H

#include <iostream>
#include <cstdio>
#include <iostream>
#include <vector>
using namespace std;

//链表ADT
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
    void initNode(ListNode *listNode,int len){
        ListNode *head=listNode;
        int index=0;
        while (index<len){
            head->next=new ListNode;
            head->val=0;
            head=head->next;
            index++;
        }
    }
};
//树ADT
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
#endif //CARL_CODE_UNION_H

```