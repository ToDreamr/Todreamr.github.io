+++
title = '数之和'
date = 2023-11-14T13:47:44+08:00
draft = false
tags = ["leetcode"]
+++

题目：

[两数之和](https://leetcode.cn/problems/two-sum/description/)

[三数之和](https://leetcode.cn/problems/3sum/description/)

```java

class Main{
    //两数之和
    public static int[] twoSum(int[] nums, int target) {
        //找出和为target的数组中元素的下标：
        HashMap<Integer,Integer> dic=new HashMap<>();//和
        int index=0;
        int dicIndex=0;
        int len=nums.length;
        Set<Integer> list=new HashSet<>();
        for (int i=0;i<len;i++){
            dic.put(i,nums[i]);
        }

        while(index<len&&dicIndex<len){
            //3,2,4
            if (nums[index]+dic.get(dicIndex)==target&&index!=dicIndex){
                list.add(index);
                list.add(dicIndex);
            }
            index++;
            if (index==len){
                dicIndex++;
                index=0;
            }
        }
        int[]res=new int[list.size()];
        index=0;
        for (Integer item:list){
            res[index]=item;
            index++;
        }
        return  res;
    }
    //三数之和，返回加起来等于0的三元数组
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);//先排序再二分
        int len = nums.length;
        //nums = [-1,0,1,2,-1,-4]
        //输出：[[-1,-1,2],[-1,0,1]]
        List<List<Integer>> res=new ArrayList<>();
        for (int i = 0; i < len; i++) {
            if (nums[i]>0){
                return res;
            }
            if (i > 0 && nums[i] == nums[i - 1])
                continue;
            int left=i+1;
            int right=len-1;

            //二分法：
            while (right>left){
                if (nums[i]+nums[left]+nums[right]>0){
                    right--;
                } else if (nums[i] + nums[left] + nums[right] < 0) {
                    left++;
                }
                else {
                    ArrayList<Integer> tmpList = new ArrayList<>();
                    tmpList.add(nums[i]);
                    tmpList.add(nums[left]);
                    tmpList.add(nums[right]);
                    res.add(tmpList);
                    while (right>left&&nums[right]==nums[right-1]){
                        right--;
                    }
                    while (right>left&&nums[left]==nums[left+1]){
                        left++;
                    }
                    right--;
                    left++;
                }
            }
        }
        return res;
    }
    public static void main(String[] args) {
        int []arr={2,7,11,15};
        Arrays.stream(twoSum(arr, 9)).forEach(System.out::println);
    }
}
```
