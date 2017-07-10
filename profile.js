import People from './data';

class Bulletin extends Component {
  render() {
    return (
      <Profile name={People.john.name}
               age={People.john.age}
               occupation={People.john.occupation} />

      <Profile name={People.happy.name}
               age={People.happy.age}
               occupation={People.happy.occupation} />

      <Profile name={People.bucky.name}
               age={People.bucky.age}
               occupation={People.bucky.occupation} />
    );
  }
}

const Profile (props) => {
  return (
    <h2> {props.name}</h4>
    <h4> {props.age} </h4>
    <h4> {props.occupation} </h4>
  );
}
