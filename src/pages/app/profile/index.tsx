import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import VerticalNavbar from '~/ui/VerticalNavbar';
import { api } from "~/utils/api";
import Header from '~/ui/Header';

export default function Index() {

    //all nessesary states to keep track during process most will be used to send data to database at some point

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

    //create, update, remove mutation components  will adjust so that they display to screen 
    //This component is a nessesary piece to call api

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

    //create, update, remove mutation components will adjust so that they display to screen
    //This component is a nessesary piece to call api

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

    //the next two constants are the calls for create in both mentor and student
    // 

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

// update constants (calls)

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

//delete calls

    const deleteMentor = () => {
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

    // Failsafe loads blank page if isLoaded is null

    if (!isLoaded) {
        return null;
    }

    /**
         * This component renders a user interface for managing mentor and student profiles. 
         * It provides functionality for creating, updating, and deleting profiles based on user input.
         * 
         * The main functionalities include:
         * - A form with input fields for common details (Email, First Name, Last Name) and 
         *   additional fields specific to mentors (Industry, Role, Availability) or students (Major).
         * - Action buttons for performing operations (Create, Update, Delete) on the profiles.
         * - Conditional rendering based on the selected job type ('mentor' or 'student') and action type.
         * - Initial buttons for the user to choose between managing mentors or students.
         * - A cancel button to reset the form and selection states.
    */

    const renderForm = () => {
        return (
            // first part will always be the no matter mentor or student
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

                {/*ternary operators to render based on state of job whether that be 'mentor' or 'student' */}
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
                        {/*options for Create, update, delete and some styling for hover effects */}
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
    {/*this component will display first and chooses thate state for student or mentor then the next stage is the above piece the chooses read update or delet*/}
    return (
        <>
            <div className='flex flex-row w-full gap-4'>
                <VerticalNavbar />
                <div className='flex flex-col w-full p-6'>
                    <Header pageTitle="Profile" />
                    <div className="flex flex-col items-center justify-center min-h-64 p-5 bg-gray-100 rounded-lg shadow">
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
