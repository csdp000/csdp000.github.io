---
title:      "[프로그래머스-스택/큐] 기능개발 문제"
slug:       "프로그래머스-기능개발"
date:       "2021-07-11T19:00:30"
template:   "post"
draft:      false 
category:   "algorithm"
tags:
  - "programmers"
  - "algorithm"
description: "작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다." 
---

## 문제

[https://programmers.co.kr/learn/courses/30/lessons/42586#](https://programmers.co.kr/learn/courses/30/lessons/42586#)

## 제한 사항

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.


## 📖풀이

```java
public class Main {
    public static int[] solution(int[] progresses, int[] speeds) {

        int count = progresses.length;
        //예상 시간
        int[] estimated = new int[count];
        int[] answer = new int[count];
        Arrays.fill(answer, 1);

        for(int i=0;i<count; i++) {
            //소숫점 올림 (제한사항 4)
            estimated[i] = (int)Math.ceil((100.0-progresses[i])/speeds[i]);
        }

        int index = 0;
        int highest = estimated[0];

        for(int i=0; i < count-1; i++) {
            if(highest >= estimated[i + 1]) {
                answer[index]++;
            } else {
                highest = estimated[i + 1];
                index++;
            }
        }
        return Arrays.copyOfRange(answer,0,index+1);
    }
    public static void main(String[] args) {
        var r = solution(new int[]{20, 99, 93, 30, 55, 10}, new int[]{5, 10, 1, 1, 30, 5});
        //return [3, 3]
        System.out.println(Arrays.toString(r));
    }
}
``` 