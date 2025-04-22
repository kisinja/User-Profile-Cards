
const UserSkills = ({ skill }) => {
    return (
        <div className="flex  w-full justify-between">
            <span className="bg-blue-100 rounded-lg p-1 text-blue-500 text-xs w-max">{skill}</span>
        </div>
    );
};

export default UserSkills;