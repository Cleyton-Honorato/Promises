/*
  Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por  exemplo escrever algo no console, pausar o script por x tempo e escrever algo  mais algo como:
   console.log('Olá!')
   sleep(2000)
   console.log('Depois de 2segs')
  simule o sleep de maneira correta em Javascript (sem travar a thread principal)   utilizando promises e uma função async/await
*/

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const execute = async () => {
  console.log("Olá!");
  await sleep(2000);
  console.log("Depois de 2 segundos");
};

execute();
console.log("opaaaaa");
