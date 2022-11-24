function BlueButton(props) {
  return (
    <div>
      <a href={props.link}>
        <button className="Button" onClick={props.onClick}>
          {props.title}
        </button>
      </a>
    </div>
  );
}

export default BlueButton;
