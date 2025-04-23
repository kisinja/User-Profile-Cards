import UserCard from "./UserCard";

const UsersList = ({ users }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.map(user => (
                    <UserCard user={user} key={user.id} />
                ))
            }
        </div>
    );
};

export default UsersList;