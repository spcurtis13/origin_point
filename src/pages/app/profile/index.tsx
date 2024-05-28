import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import VerticalNavbar from '~/ui/VerticalNavbar';
import { api } from "~/utils/api";
import Header from '~/ui/Header';

export default function Index() {

    const { isLoaded } = useUser();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [industry, setIndustry] = useState('');
    const [role, setRole] = useState('');
    const [available, setAvailable] = useState(true);

    const [major, setMajor] = useState('');

    const [job, setJob] = useState('');
    const [action, setAction] = useState('');

    const createM = api.mentor.create.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const updateM = api.mentor.update.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const removeM = api.mentor.delete.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const createS = api.student.create.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const updateS = api.student.update.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const removeS = api.student.delete.useMutation({
        onSuccess: () => console.log('Success'),
        onError: (error) => console.error('Error', error)
    });

    const createMentor = () => {
        const input = {
            email,
            firstName,
            lastName,
            industry,
            role,
            available
        };
        createM.mutate(input);
    };

    const createStudent = () => {
        const input = {
            email,
            firstName,
            lastName,
            major
        };
        createS.mutate(input);
    };

    const updateMentor = () => {
        const input = {
            email,
            firstName,
            lastName,
            industry,
            role,
            available
        };
        updateM.mutate(input);
    };

    const updateStudent = () => {
        const input = {
            email,
            firstName,
            lastName,
            major
        };
        updateS.mutate(input);
    };

    const deleteMentor = () => {
        // Add your delete logic here
        const input = {
            email
        };
        removeM.mutate(input);
    };

    const deleteStudent = () => {
        // Add your delete logic here
        const input = {
            email
        };
        removeS.mutate(input);
    };

    if (!isLoaded) {
        return null;
    }

    const renderForm = () => {
        return (
            <>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                />
                {job === 'mentor' ? (
                    <>
                        <input
                            type="text"
                            placeholder="Industry"
                            value={industry}
                            onChange={e => setIndustry(e.target.value)}
                            className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="label cursor-pointer justify-start my-2">
                            <span className="label-text">Available:</span>
                            <input
                                type="checkbox"
                                checked={available}
                                onChange={e => setAvailable(e.target.checked)}
                                className="checkbox checkbox-primary"
                            />
                        </label>
                        {action === 'create' && (
                            <button onClick={createMentor} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Create Mentor</button>
                        )}
                        {action === 'update' && (
                            <button onClick={updateMentor} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">Update Mentor</button>
                        )}
                        {action === 'delete' && (
                            <button onClick={deleteMentor} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete Mentor</button>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Major"
                            value={major}
                            onChange={e => setMajor(e.target.value)}
                            className="input input-bordered w-full max-w-md my-2 focus:ring-2 focus:ring-blue-500"
                        />
                        {action === 'create' && (
                            <button onClick={createStudent} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Create Student</button>
                        )}
                        {action === 'update' && (
                            <button onClick={updateStudent} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">Update Student</button>
                        )}
                        {action === 'delete' && (
                            <button onClick={deleteStudent} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete Student</button>
                        )}
                    </>
                )}
            </>
        );
    };

    return (
        <>
            <div className='flex flex-row w-full gap-4'>
                <VerticalNavbar />
                <div className='flex flex-col w-full p-6'>
                    <Header pageTitle="Profile" />
                    <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-lg shadow">
                        {job === '' ? (
                            <div className="flex justify-center mb-4">
                                <button 
                                    onClick={() => setJob('mentor')} 
                                    className='px-4 py-2 rounded bg-blue-500 text-white'
                                >
                                    Mentor
                                </button>
                                <button 
                                    onClick={() => setJob('student')} 
                                    className='px-4 py-2 rounded ml-2 bg-blue-500 text-white'
                                >
                                    Student
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-center mb-4">
                                    <button 
                                        onClick={() => setAction('create')} 
                                        className="bg-green-500 text-white px-4 py-2 rounded mx-2"
                                    >
                                        Create {(job === 'mentor') ? 'Mentor' : 'Student'}
                                    </button>
                                    <button 
                                        onClick={() => setAction('update')} 
                                        className="bg-yellow-500 text-white px-4 py-2 rounded mx-2"
                                    >
                                        Update {(job === 'mentor') ? 'Mentor' : 'Student'}
                                    </button>
                                    <button 
                                        onClick={() => setAction('delete')} 
                                        className="bg-red-500 text-white px-4 py-2 rounded mx-2"
                                    >
                                        Delete {(job === 'mentor') ? 'Mentor' : 'Student'}
                                    </button>
                                </div>
                                {action && (
                                    <div className="flex flex-col items-center">
                                        {renderForm()}
                                        <button 
                                            onClick={() => { setAction(''); setJob(''); }} 
                                            className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
