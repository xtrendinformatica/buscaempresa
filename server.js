const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/search", (req, res) => {
  const { q } = req.query;

  // Exemplo: simular resultado. Aqui você pode expandir para buscar em DB ou API externa.
  if (!q) return res.status(400).json({ error: "Parâmetro 'q' é obrigatório." });

  // Retorna dados demo
  const resultado = [
    { nome: "Empresa Exemplo A", cnpj: "12.345.678/0001-99", cidade: "Guarulhos" },
    { nome: "Empresa Exemplo B", cnpj: "98.765.432/0001-00", cidade: "São Paulo" }
  ].filter(e => e.nome.toLowerCase().includes(q.toLowerCase()));

  return res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
