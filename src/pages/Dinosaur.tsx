import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dino } from "../types";
import "../styles/deno.css";

export default function Dinosaur() {
  const { selectedDinosaur } = useParams();
  const [dinosaur, setDino] = useState<Dino>({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
      const dino = await resp.json() as Dino;
      setDino(dino);
    })();
  }, [selectedDinosaur]);

  return (
    <div>
      <h1>{dinosaur.name}</h1>
      <h3>Subtitulo</h3>
      <p className="ejemplo">{dinosaur.description}</p>
      <Link to="/">Back to all dinosaurs</Link>
    </div>
  );
}
