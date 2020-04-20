for (let i = 1; i < 101; i++) {
    if (i % 5 === 0) {
        console.log("Chicken");
        continue;
    }
    else if (i % 7 === 0) {
        console.log("Monkey");
        continue;
    }
    console.log(i)
}