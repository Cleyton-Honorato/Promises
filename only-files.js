// 3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).

const fs = require("fs");
const readdir = caminho =>
  new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
      if (err) {
        reject(err);
      } else {
        resolve(arquivos);
      }
    });
  });

const stat = caminho =>
  new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });

const isFile = async caminho => {
  const stats = await stat(caminho);
  return stats.isFile() ? caminho : false;
};

const execute = async () => {
  const files = await readdir("./");
  const possiblieFiles = await Promise.all(files.map(f => isFile(f)));
  const onlyFiles = possiblieFiles.filter(val => val);
  console.log(onlyFiles);
};

execute();
