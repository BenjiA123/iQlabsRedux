function Cities(props) {
  // eslint-disable-next-line array-callback-return
  props.covidInfo.map((covidDat) => {
    console.log(covidDat);
  });
  const covidDat = (
    <ul>
      {props.covidInfo.map((covidDat) => (
        <li key={covidDat.id}>{covidDat.title}</li>
      ))}
    </ul>
  );
  console.log(covidDat);
  // return <div>Hello</div>;
  return <div>{covidDat}</div>;
}

export default Cities;
