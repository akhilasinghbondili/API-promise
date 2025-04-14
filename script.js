//  Promises API
// methods: promise.all(),allsettled(),promise.race(),promise.any()
// promise.all() : it is a method that take iterable (such as array)of promises as input and returns single promise
// this returned promise resolves when all the inputs promises have resolved or its rejecte as aoon any of input promises object.

// => imagine u have 3 tasks to do, and task take sometime to complete(fecting data from different urls)
// u want to start all 3 tasksat a time and do something once all of them are done

// ex : promise.all

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "result from promise one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "result from promise two");
// });

// const promise3= new Promise((resolve, reject) => {
//   setTimeout(reject, 2000, "result from promise three");
// });
// // Promise.all ([promise1,promise2,promise3]).then((result) => {
// //     console.log(result);
// // });

// Promise.all ([promise1,promise2,promise3]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log ("error : ", error)
// })

// ex : allsettled()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "result from promise one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "result from promise two");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000, "result from promise three");
// });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("error : ", error);
//   });

// ex : race()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "result from promise one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "result from promise two");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 500, "result from promise three");
// });
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("error : ", error);
//   });

// ex : any()
//   all reject : aggrigate error is come

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 5000, "result from promise one");
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, "result from promise two");
//   });

//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 2000, "result from promise three");
//   });
//   Promise.any([promise1, promise2, promise3])
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log("error : ", error);
//     });

// promisification

//  taking a function , that uses callbacks and turning it into a function that returns a promise

// // 1. Callback-based function
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Hello, world!";
//       callback(null, data); // No error, return data
//     }, 500);
//   }

//   // 2. Promisify the function manually
//   function fetchDataAsync() {
//     return new Promise((resolve, reject) => {
//       fetchData((err, data) => {
//         if (err) return reject(err);
//         resolve(data);
//       });
//     });
//   }

//   // 3. Use with async/await
//   async function run() {
//     try {
//       const result = await fetchDataAsync();
//       console.log(result); // "Hello, world!"
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   run();

// microtasks
// microtask is a small tasks that js runs immediadtly after the current code finishes ,
// before handling and any other delayed things (timmer)
// examples of microtasks .then(),.catch(),.finally() - promises
// queuemicrotasks() : a special function to manually add microtasks

// ex:

// console.log("1");
// Promise.resolve().then(()=>{
//     console.log("2");
// });
// console.log("3");

// ex:
// console.log("a");
// Promise.resolve().then(()=>{
//     console.log("b");
// });
// console.log("c");

// microtasks : promise.then() == right after current code finishes
// macrotasks : settimeout, setinterval === after microtasks done

// ex:

// setTimeout(()=> console.log('timeout'),0);
// Promise.resolve().then(()=>console.log('microtasks'));
// console.log('end');

// queuemicrtask : it is a way to manually add a microtask

// queueMicrotask(()=>{
//     console.log("this is a microtask");
// })

// genarators
// its is a speacial type of function that allow you to pause and resume execution, making them useful,
// for handling asynchronous operations, managing state , and performing complex iterations.
// syntax: function*
// yield keyword to pause execution

// ex:

// function* mygenarator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let gen = mygenarator()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// // iteration
// function* mygenarator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let gen = mygenarator()
// for (let value of gen){
//     console.log(value);

// }

// spreed operator

// function* mygenarator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let gen = mygenarator();
// console.log([...gen]);

// yield*
// function* number() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// function* letter() {
//   yield "a";
//   yield "b";
// }
// function* combined() {
//     yield* number()
//     yield* letter()
//   }
//   const gen = combined()
//   console.log([...gen]);
// console.log(gen);

// next(), return(), throw()

// next(): each step execute and then print
// two properties :
// value : it returns yield expression, done : true or false

// return:

// function* genaratorsfunc(){
//     yield "step1";
//     yield "step2";
//     yield "step3";
// }
// const gen = genaratorsfunc();
// console.log(gen.next());
// console.log(gen.return('execution complete'));
// console.log(gen.next());

//   return doesnt work in try and catch

// function* genaratorsfunc(){
//     try{
//     yield "step1";
//     yield "step2";
//     yield "step3";
//     }
//     finally{
//         console.log('cleanup in finally block');
//     }
//     yield "step4";
// }
// const gen = genaratorsfunc();
// console.log(gen.next());
// console.log(gen.return('execution completed'))

// throw
// passing error message
// function* genaratorsfunc() {
//     try{
//         yield 'step1';
//         yield 'step2';
//     }catch (e) {
//         console.error('caught error :',e);
//     }
//     yield 'step3';
// }
// const gen = genaratorsfunc();
// console.log(gen.next());
// console.log(gen.throw(new Error("oops")));
// console.log(gen.next());

// --------------------------------------------------
//  async iterations and async generators

// Async iteration is a way to loop through data that arrives over time, using for await...of.

// Instead of getting all the data immediately, you wait for each item as
//  it becomes available — like streaming videos one by one instead of downloading them all at once.
// everything happens right way one after another


// var fruits =['banana','apple','cherry'];
// for (values of fruits)
// {
//     console.log(values);
// }
// --------
// var fruits =['banana','apple','cherry'];
// console.log('before loop');
// for (values of fruits)
// {
//     console.log(values);
// }
// console.log('after loop');
// *** this takes time , so we need async , await

// for await...of (async iteration)
// This loop is used to read each item from an async generator:
// var fruits = ["banana", "apple", "cherry"];
// async function displayfruits(){
//     for await (const values of fruits) {
//         console.log(values);
//       }
      
// }
// console.log('before loop');
// displayfruits();
// console.log('after loop');

//  even if there delays between them , this loop waits for each one
// doesnt stop this lines to execute first
// --------------------------
// async generator

//  An async generator is a special function that produces a sequence of asynchronous values, using async function* and yield.
// It allows you to pause and resume the function while waiting for each result.

// function delay(ms){
//     return new Promise (resolve => setTimeout(resolve,ms));
// }
// async function* getfruits(){
//     await delay(1000);
//     yield 'apple';
//     await delay(1000);
//     yield 'banana';
//     await delay(1000);
//     yield 'cherry';
// }  
// async function showfruits () {
//     for await (const fruit of getfruits()){
//     console.log('gotfruit:',fruit);
//     }
// }
// showfruits();












// Recall iterables

// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() { // called once, in the beginning of for..of
//       return {
//         current: this.from,
//         last: this.to,
  
//         next() { // called every iteration, to get the next value
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   for(let value of range) {
//     alert(value); // 1 then 2, then 3, then 4, then 5
//   }



// async iterables

// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.asyncIterator]() { // (1)
//       return {
//         current: this.from,
//         last: this.to,
  
//         async next() { // (2)
  
//           // note: we can use "await" inside the async next:
//           await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
//   (async () => {
  
//     for await (let value of range) { // (4)
//       alert(value); // 1,2,3,4,5
//     }
  
//   })()