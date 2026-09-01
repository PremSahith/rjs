function UserAge(props) {
  const increaseAge = () => {
    props.onAgeChange(props.age + 1);
  };

  return (
    <div>
      <p>Age: {props.age}</p>

      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export { UserAge };
