import "./UsersList.css"
import Card from "./UI/Card";
import User from "./User.module";

const UsersList = (props) => {
  return (
    <Card className="users-list">
      {props.usersData.map((user) => {
        return <User key={user.id} name={user.userName} age={user.age} />;
      })}
    </Card>
  );
};
export default UsersList;
