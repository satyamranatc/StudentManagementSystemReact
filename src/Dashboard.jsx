import React, {useState, useEffect} from 'react'

export default function Dashboard() {
    let [StudentData, setStudentData] = useState([])
    let [FilterdStudentData, setFilterdStudentData] = useState([])
    let [StudnetClass, setStudentClass] = useState([])

    useEffect(() => {
        let storedData = localStorage.getItem('students');
        if (storedData) {
            setStudentData(JSON.parse(storedData));
            setFilterdStudentData(JSON.parse(storedData));
        }
    }, [])

    useEffect(() => {
       let uniqueData = [...new Set(StudentData.map((e) => e.class))];
        setStudentClass(uniqueData);
    }, [StudentData])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <section className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Student Dashboard</h2>
                <p className="text-gray-600">Manage All Students</p>
            </section>

            <section className="mb-6 bg-white p-4 rounded-lg flex justify-between items-center shadow-md">
                <select 
                    className="px-3 py-2 border rounded-md mr-4 bg-white text-gray-800"
                    onChange={(e) => {
                        let selectedClass = e.target.value;
                        setFilterdStudentData(StudentData.filter((e) => e.class == selectedClass))
                    }}
                >
                    <option value="">Select Class</option>
                    {StudnetClass.map((e) => (
                        <option key={e} value={e}>{e}</option>
                    ))}
                </select>
                
                <input 
                    className="flex-grow px-3 py-2 border rounded-md bg-white text-gray-800 placeholder-gray-500" 
                    type="text" 
                    placeholder='Search By Name'
                    onChange={(e) => {
                        let searchQuery = e.target.value;
                        setFilterdStudentData(StudentData.filter((e) => 
                            e.name.toLowerCase().includes(searchQuery.toLowerCase())
                        ))
                    }} 
                />
            </section>

            <section className="bg-white shadow-md rounded-lg overflow-x-auto mb-6">
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
                        {FilterdStudentData.map((student, index) => (
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

            <section className="bg-white shadow-md rounded-lg p-6">
                <section className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Student Report Dashboard</h3>
                    <p className="text-gray-600">View Students Performance Report</p>
                </section>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                {['Class', 'Avg Marks', 'Max Marks', 'Min Marks', 
                                  'Math Avg', 'Science Avg', 'Computer Avg', 
                                  'English Avg', 'Hindi Avg', 'Social Studies Avg'].map((header) => (
                                    <th key={header} className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {StudnetClass.map((e) => {
                                const classStudents = StudentData.filter(student => student.class === e);
                                return (
                                    <tr key={e} className="hover:bg-gray-50">
                                        <td className="p-3">{e}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.math, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{Math.max(...classStudents.map(student => student.math))}</td>
                                        <td className="p-3">{Math.min(...classStudents.map(student => student.math))}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.math, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.science, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.computerScience, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.english, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.hindi, 0) / classStudents.length).toFixed(2)}</td>
                                        <td className="p-3">{(classStudents.reduce((total, student) => total + student.socialStudies, 0) / classStudents.length).toFixed(2)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}