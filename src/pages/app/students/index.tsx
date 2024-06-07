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
                  <option value="American Studies">American Studies</option>
                  <option value="Applied Journalism">Applied Journalism</option>
                  <option value="Anthropology">Anthropology</option>
                  <option value="Art">Art</option>
                  <option value="American Sign Language">American Sign Language</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Communications">Communication</option>
                  <option value="College Student Services Administration">College Student Services Administration</option>
                  <option value="English">English</option>
                  <option value="Environmental Arts and Humanitites">Environmental Arts and Humanities</option>
                  <option value="Economics">Economics</option>
                  <option value="Ethnic Studies">Ethnic Studies</option>
                  <option value="Food in Culture and Social Justice">Food in Culture and Social Justice</option>
                  <option value="Film Studies">Film Studies</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Global Development Studies">Global Development Studies</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Guitar">Guitar</option>
                  <option value="History">History</option>
                  <option value="Indigenous Studies">Indigenous Studies</option>
                  <option value="International Studies">International Studies</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Language in Culture">Language in Culture</option>
                  <option value="Liberal Studies">Liberal Studies</option>
                  <option value="Linguistics">Linguistics</option>
                  <option value="Marine Studies">Marine Studies</option>
                  <option value="Military History">Military History</option>
                  <option value="Music">Music</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Photography">Photography</option>
                  <option value="Political Science">Political Science</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Public Policy">Public Policy</option>
                  <option value="Religous Studies">Religous Studies</option>
                  <option value="Social Science">Social Science</option>
                  <option value="Sociology">Sociology</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Studio Art">Studio Art</option>
                  <option value="Theatre Arts">Theatre Arts</option>
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
