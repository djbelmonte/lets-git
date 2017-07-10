import People from './data';

const Profile () => {
  return (
    <h2> {People.john.name}</h4>
    <h4> {People.john.age} </h4>
    <h4> {People.john.occupation} </h4>
  );
}
