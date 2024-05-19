import { useState } from 'react';
import Header from '~/ui/Header';
import VerticalNavbar from '~/ui/VerticalNavbar';


export default function Index() {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');

  const handleSearch = () => {
    // Perform search operation here
    console.log(`Searching for ${role} in ${industry} industry`);
  };

  return (
    <>
    <div className="flex flex-row w-full gap-4">
        <VerticalNavbar />
        <div className='flex flex-col min-h-screen w-full'>
            <Header pageTitle="About Us" />
            <div className="flex flex-col items-center justify-items-start min-h-screen py-10">
            <div className="flex flex-row space-x-5">
                <select
                className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                >
                <option value="">Select Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                </select>

                <select
                className="form-select block w-half px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                >
                <option value="">Select Role</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
                </select>

                <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={handleSearch}
                >
                Search
                </button>
            </div>
            <div className='py-10'>
                <ul>
                    <li>Bob Smith</li>
                    <li>Sandra Conner</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
