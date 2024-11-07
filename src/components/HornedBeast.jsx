function HornedBeast(props) {
    return (
      <div>
        <h2>{props.title}</h2>
      <img className="img-size" src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      </div>
    );
  }
  
  export default HornedBeast;