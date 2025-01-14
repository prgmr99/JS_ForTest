function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = skill.split("");
    
    skill_trees.forEach((el) => {
        let temp = [];
        let flag = true;
        
        for (let i = 0; i < el.length; i++) {
            let index = skillArr.indexOf(el[i]);
            if (index !== -1) {
                temp.push(index);
            }
        }
        
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== i) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
            answer++;
        }
    });
    
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
