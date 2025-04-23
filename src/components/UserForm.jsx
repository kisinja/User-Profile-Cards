import { useState } from "react"

const UserForm = ({ setUsers }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            bio,
            avatar
        };

        setUsers(prev => [...prev, { ...newUser, id: prev.id + 1 }]);

        setName('');
        setEmail('');
        setBio('');
        setAvatar('');
    };

    return (
        <form onSubmit={handleAddUser} className="w-full md:max-w-xl bg-white py-3 px-6 rounded-lg shadow-md mx-auto mb-6">
            <div className="mb-3">
                <label htmlFor="name" className="text-gray-700 text-lg block">Name</label>
                <input type="text" id="name" placeholder="Enter your name" className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="text-gray-700 text-lg block">Email</label>
                <input type="email" id="email" placeholder="Enter your email" className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="avatar" className="text-gray-700 text-lg block">Avatar</label>
                <input type="url" id="avatar" placeholder="Avatar url..." className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" onChange={(e) => setAvatar(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="bio" className="text-gray-700 text-lg block">Bio</label>
                <textarea id="bio" className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" onChange={(e) => setBio(e.target.value)}></textarea>
            </div>

            <div className="flex justify-center items-center w-full">
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
                    Add User
                </button>
            </div>
        </form>
    )
}

export default UserForm
