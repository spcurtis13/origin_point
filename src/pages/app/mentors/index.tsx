import { useState } from 'react';
import VerticalNavbar from '~/ui/VerticalNavbar';
import { api } from "~/utils/api";
import Header from '~/ui/Header';

export default function Index() {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const { data } = api.mentor.getAll.useQuery();

  const handleSave = () => {
    const filtered = data.filter(mentor =>
      (industry === '' || mentor.industry === industry) &&
      (role === '' || mentor.role === role)
    );
    setFilteredData(filtered);
    console.log(`Searching for ${role} in ${industry} industry`);
  };

  return (
    <>
      <div className="flex flex-row w-full gap-4">
        <VerticalNavbar />
        <div className='flex flex-col min-h-screen w-full'>
          <Header pageTitle="Mentors" />
          <div className="flex flex-col w-full items-center justify-items-start min-h-screen py-10">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5">
                <select
                  className="form-select block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
                <select
                  className="form-select block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select Role</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
              <div className='py-10'>
                <div className="overflow-x-auto">
                  <div className="grid grid-cols-4 gap-4 p-4 bg-white shadow-md rounded-lg">
                    <div className="font-bold text-center">Name</div>
                    <div className="font-bold text-center">Industry</div>
                    <div className="font-bold text-center">Role</div>
                    <div className="font-bold text-center">Email</div>
                    {filteredData.map((mentor, index) => (
                      <>
                        <div key={`name-${index}`}>{mentor.firstName} {mentor.lastName}</div>
                        <div key={`industry-${index}`}>{mentor.industry}</div>
                        <div key={`role-${index}`}>{mentor.role}</div>
                        <div key={`email-${index}`}>
                            <a href={`mailto:${mentor.email}`} className="text-blue-500 hover:text-blue-700">
                                {mentor.email}
                            </a>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
