import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";
import UserSkills from "./UserSkills";

const UserCard = ({ users }) => {

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                users.map((user, index) => (
                    <div key={index} className="max-w-[300px] bg-white rounded-lg">
                        <UserAvatar src={user.avatar} />
                        <UserInfo name={user.name} email={user.email} bio={user.bio} />
                        {
                            user.skills.map((skill, index) => (
                                <UserSkills key={index} skill={skill} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default UserCard
