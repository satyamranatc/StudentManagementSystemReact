import React,{useState,useEffect} from 'react'

export default function Dashboard() {

    let [StudentData,setStudentData] = useState([
             

    ])

    useEffect(()=>{
        let storedData = localStorage.getItem('students');
        if (storedData)
        {
            setStudentData(JSON.parse(storedData));
        }
        

 
    },[])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <section className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Student Dashboard</h2>
        <p className="text-gray-600">Manage All Students</p>
      </section>

      <section id="TableSection" className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              {['Profile Pic', 'Name', 'Age', 'Parent Name', 'Class', 
                'Math', 'Science', 'English', 'Hindi', 
                'Social Studies', 'Computer Science'].map((header) => (
                <th key={header} className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {StudentData.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3">
                  <img 
                    src={student.profilePic} 
                    alt="profile" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.age}</td>
                <td className="p-3">{student.parentName}</td>
                <td className="p-3">{student.class}</td>
                <td className="p-3">{student.math}</td>
                <td className="p-3">{student.science}</td>
                <td className="p-3">{student.english}</td>
                <td className="p-3">{student.hindi}</td>
                <td className="p-3">{student.socialStudies}</td>
                <td className="p-3">{student.computerScience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}