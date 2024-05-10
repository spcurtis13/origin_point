import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import VerticalNavbar from '~/ui/VerticalNavbar';
import { UserButton } from "@clerk/nextjs";
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

  const mutation = api.mentor.create.useMutation({
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
    mutation.mutate(input);
  };

  if (!isLoaded) {
    return null; // Optionally, return a spinner or a loading message
  }

  return (
    <>
      <div className='flex flex-row w-full gap-4'>
        <VerticalNavbar />
        <div className='flex flex-col w-full p-6'>
          <Header pageTitle="Profile" />
          <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-lg shadow">
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
            <button onClick={createMentor} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Create Mentor</button>
          </div>
        </div>
      </div>
    </>
  );
}
