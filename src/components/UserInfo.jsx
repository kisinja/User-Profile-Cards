
const UserInfo = ({ name, email, bio }) => {
    return (
        <div className="p-4 flex flex-col gap-2 w-full">
            <h2 className="font-bold">{name}</h2>
            <p className="text-gray-600 text-sm">{email}</p>
            <p className="text-gray-700 text-sm">{bio}</p>
        </div>
    )
}

export default UserInfo
