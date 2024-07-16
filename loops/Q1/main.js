var mywork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1
    };
    mywork.push(lesson);
}
console.log(mywork);
