
const UserCard = ({ user }) => {
    return (
        <div className="w-full md:max-w-sm rounded-lg shadow-lg py-2 px-4 flex flex-col gap-6 bg-white">
            <div className="flex gap-3 items-center">
                <img src={user.avatar} alt="User Avatar" className="w-36 h-36 object-cover rounded-full" />
                <span>{user.name}</span>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-blue-500 text-sm">Email: <span className="text-gray-500">{user.email}</span></p>
                <p className="text-blue-500 text-sm line-clamp-2">Bio: <span className="text-gray-500">{user.bio}</span></p>
            </div>
        </div>
    );
};

export default UserCard;