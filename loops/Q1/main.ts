let mywork: { name: string; status: boolean }[] = [];

for (let i = 1; i <= 10; i++) {
    let lesson = {
        name: `Lesson ${i}`,
        status: i % 2 === 1 
    };

    mywork.push(lesson);
}

console.log(mywork);