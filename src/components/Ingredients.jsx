import CloseIcon from "@mui/icons-material/Close";

export default function Ingredients(props) {
  return (
    <>
      <button className="btn" onClick={props.handleClick}>
        <CloseIcon />
      </button>
      <div>
        <h2>
          Ingredients : <span>{props.dishName}</span>
        </h2>
        <p>{props.contains}</p>
      </div>
    </>
  );
}
