+++
title = '区间个位和'
date = 2023-11-14T13:47:44+08:00
draft = false
tags =["leetcode"]
+++

### 计算区间之间的所有数的个位数之和

思路： 总体用数学办法，45循环，补齐不全的区间

```c++
#include "class/head.h" //导入万能依赖
long long Sum(long long left,long long right,long long len)
{
    long long left_sum=0,right_sum=0;
    long long left_len,right_len;
    left_len=right_len=0;
    if(left!=0)//计算左补齐
    {
        left_sum=((left-1)*left)/2.0;
        left_len=left;
    }
    if(right!=9)//计算右补齐
    {
        right_sum=((right+10)*(9-right))/2.0;
        right_len=9-right;
    }
    long long cnt=0;//表示有多少个45，
    cnt=(len+left_len+right_len)/10;//算总个数
    long long sum=0;
    sum=cnt*45-left_sum-right_sum;
    return sum;
}
int main()
{
    long long m,n;
    scanf("%lld %lld",&m,&n);
    //通过补位来求
    long long left=m%10,right=n%10;
    long long sum=0;
    if(m>=0) sum=Sum(left,right,n-m+1);
    else if(n<=0) sum=Sum(-right,-left,n-m+1);
    else sum=Sum(0,right,n+1)+Sum(0,-left,-m+1);
    printf("%lld",sum);
    return 0;
}
```
