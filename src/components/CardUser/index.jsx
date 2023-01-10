import { Trash } from "phosphor-react";
import "./style.css";

export function CardUser(props) {
  function deleteUser(idUser) {
    props.onDeleteLivro(idUser);
  }

  return (
    <div className="container-card">
      <p style={{ color: "white" }}>{props.name}</p>
      <button onClick={() => deleteUser(props.idLivro)}>
        <Trash size={24} color="#D80909" weight="bold" />
      </button>
    </div>
  );
}
