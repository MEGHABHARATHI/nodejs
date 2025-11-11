const func1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello from func1");
        }, 3000);
    })
}

const main = async () => {
    console.log('Start ');
    const result = await func1();
    // result.then(value => console.log(value));
    console.log(result);

    console.log(" end ")

}

main()