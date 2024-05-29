import { useState, useEffect } from 'react';
import VerticalNavbar from '~/ui/VerticalNavbar';
import { api } from "~/utils/api";
import Header from '~/ui/Header';

//nessesary to define Student for typescript and states of an array of Students

interface Student {
    email: string;
    firstName: string;
    lastName: string;
    major: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function Index() {
  const [major, setMajor] = useState('');
  const [filteredData, setFilteredData] = useState<Student[]>([]);

  //puts the students all displayed at first

  const { data } = api.student.getAll.useQuery();

  //gets the filtered list

  const handleSave = () => {
    if(data){
        const filtered = data.filter(student =>
            (major === '' || student.major === major)
        );
          setFilteredData(filtered);
        };
    };

    //When data changes this will run and execute handleSave which will filter the data

    useEffect(() => {
        if (data) {
            handleSave();
        }
    }, [data]);
    

  return (
    <>
      <div className="flex flex-row w-full gap-4">
        <VerticalNavbar />
        <div className='flex flex-col min-h-screen w-full'>
          <Header pageTitle="Students" />
          <div className="flex flex-col w-full items-center justify-items-start min-h-screen py-10">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5">
                {/*
                    This is just a simple filter by major the above useEffect hook actually makes changes when user filters
                    Currently this just lists Liberal arts majors but more majors can be added as nessesary.
                 */}
                <select
                  className="form-select block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                >
                  <option value="">Select Major</option>
                  <option value="Technology">American Studies</option>
                  <option value="Technology">Applied Journalism</option>
                  <option value="Technology">Anthropology</option>
                  <option value="Technology">Art</option>
                  <option value="Technology">American Sign Language</option>
                  <option value="Finance">Chinese</option>
                  <option value="Healthcare">Communication</option>
                  <option value="Technology">College Student Services Administration</option>
                  <option value="English">English</option>
                  <option value="Technology">Environmental Arts and Humanities</option>
                  <option value="Technology">Economics</option>
                  <option value="Technology">Ethnic Studies</option>
                  <option value="Technology">Food in Culture and Social Justice</option>
                  <option value="Finance">Film Studies</option>
                  <option value="Healthcare">French</option>
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
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg">
                    <div className="font-bold text-center">Name</div>
                    <div className="font-bold text-center">Major</div>
                    <div className="font-bold text-center">Email</div>
                    {/*This is the ui display piece of the filtered student list from above and displays it in a table */}
                    {filteredData.map((student, index) => (
                      <>
                        <div key={`name-${index}`}>{student.firstName} {student.lastName}</div>
                        <div key={`industry-${index}`}>{student.major}</div>
                        <div key={`email-${index}`}>
                            <a href={`mailto:${student.email}`} className="text-blue-500 hover:text-blue-700">
                                {student.email}
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
