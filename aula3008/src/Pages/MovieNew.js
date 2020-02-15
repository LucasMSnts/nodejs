import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Header";
import LabelInput from "../Components/LabelInput";
import "./movieNew.css";

const MovieNew = () => {
  return (
    <div>
      <Header darker />
      <div className="container new-top">
        <LabelInput label="Título" />
        <LabelInput label="Descrição" />
        <LabelInput label="Diretor" />
        <LabelInput label="Artistas" />
        <LabelInput label="Gêneros" />
      </div>
      <div className="btn-box">
        <Button className="btn btn-primary">Salvar</Button>
        <Button className="btn btn-secondary">Cancelar</Button>
      </div>
    </div>
  );
};

export default MovieNew;
