// 배열의 사용

// 배열에 엘리먼트 추가 및 삭제하기
// 기본적으로 배열의 앞과 뒤에서 엘리먼트를 추가하거나 삭제할 수 있음


// .pop() // 배열의 뒤에서 엘리먼트 삭제하고 리턴

var arr =[1,2,3,4,5];
arr.pop(); // 5
arr = [1,2,3,4];

// .shift() // 배열의 앞에서 엘리먼트 삭제하고 리턴

arr.shitf(); // 1
arr = [2,3,4];

// .push(element) // 배열의 뒤에 엘리먼트 추가

arr.push(6); 
arr = [2,3,4,6];

// .unshift(element) // 배열의 앞에 엘리먼트 추가

arr.unshift(0);
arr = [0,2,3,4,6];

// .reverse() // 배열의 순서를 반대로

arr.reverse();
arr = [6,4,3,2,0];

// .sort() // 배열의 순서를 다시 정렬해줌

arr.sort();
arr = [0,2,3,4,6];

// 배열 붙이기, 검색하기

arr1.concat(arr2) // arr1 과 arr2 를 붙임

arr = [1,2,3];
arr1 = [4,5,6];
arr.concat(arr1) = [1,2,3,4,5,6];
arr1.concat(arr) = [4,5,6,1,2,3];


arr.indexOf(element) // arr 에서 element 가 있는 첫 위치를 검색
arr.lastIndexOf(element) // arr 에서 element 가 있는 마지막 위치를 검색


// 문자열 split 함수
// 문자열을 구분자(separator)로 나눠서 각각을 담은 배열을 반환하는 함수

var str="1,2,3,4,5"; 
arr = str.split(","); // arr = ["1", "2", "3", "4", "5"];
