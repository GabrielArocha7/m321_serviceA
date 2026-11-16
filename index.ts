import express, { Request, Response } from "express";

interface Person {
  name: string;
  addr: string;
}

const people: Person[] = [
  { name: "Anna Müller", addr: "Bahnhofstrasse 1, 8001 Zürich" },
  { name: "Luca Rossi", addr: "Limmatquai 42, 8001 Zürich" },
  { name: "Sara Keller", addr: "Seefeldstrasse 10, 8008 Zürich" },
];

const app = express();
const PORT = 3000;

app.get("/people", (_req: Request, res: Response) => {
  res.json(people);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 