// 처음
/*function solution(i, j, k) {
    let cnt = 0;
    for(let index=i;index<=j;index++) {
        let num=index;
        while(num) {
            const r=num%10;
            if(r===k) cnt++;
            num=parseInt(num/10);
            if(num<10) {
                if(num === k) cnt++;
                break;
            }
        }
    }
    return cnt;
} */
function solution(i, j, k) {
  var answer = 0;
  var cnt = 0;
  for (let m = i; m <= j; m++) {
    if (String(m).length > 1) {
      for (var key in String(m)) {
        if (String(m)[key].includes(String(k))) {
          cnt++;
        }
      }
    } else {
      if (String(m).includes(String(k))) {
        cnt++;
      }
    }
  }
  return (answer = cnt);
}

/* function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}*/
