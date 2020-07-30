import express from 'express';

const app = express();

app.get('user', () => {
  console.log('Testando');
})

app.listen(3000, () => {
  console.log('Servidor rodando topperso');
})