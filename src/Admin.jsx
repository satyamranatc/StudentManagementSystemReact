import React, { useState, useEffect } from 'react'
import { Users, BookOpen, GraduationCap, ChartBar, Plus } from 'lucide-react'

export default function Admin() {
  let [FormData, setFormData] = useState([
    {
      profilePic: "https://masseduequity.org/wp-content/uploads/2021/07/Meeting-Students-Where-they-are-0-1024x748.jpg",
      name: "Rahul Sharma",
      age: 15,
      parentName: "Anil Sharma",
      class: "11th",
      math: 95,
      science: 89,
      english: 88,
      hindi: 92,
      socialStudies: 85,
      computerScience: 98,
    }
  ])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(FormData));
  }, [FormData])

  function handleSubmit(e) {
    e.preventDefault();
    let NewsStudent = {
      profilePic: "https://masseduequity.org/wp-content/uploads/2021/07/Meeting-Students-Where-they-are-0-1024x748.jpg",
      name: e.target[0].value,
      age: e.target[1].value,
      parentName: e.target[2].value,
      class: e.target[3].value,
      math: e.target[4].value,
      science: e.target[5].value,
      english: e.target[6].value,
      hindi: e.target[7].value,
      socialStudies: e.target[8].value,
      computerScience: e.target[9].value,
    }
    setFormData([...FormData, NewsStudent])
    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <main className="px-3 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <section className="bg-white p-8 rounded-lg shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Student Entry Portal</h2>
              <p className="text-gray-600">Add New Student Records</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder='Name' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='Age' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <input 
                type="text" 
                placeholder='Parent Name' 
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <select 
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Class</option>
                <option>5th</option>
                <option>6th</option>
                <option>7th</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
                <option>11th</option>
                <option>12th</option>
              </select>

              <div className="grid grid-cols-3 gap-4">
                <input 
                  type="number" 
                  placeholder='Math' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='Science' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='English' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='Hindi' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='Social Studies' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder='Computer Science' 
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <Plus className="mr-2" /> Add Student
              </button>
            </form>
          </section>

          <section>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Users className="mr-4 text-blue-600" size={50} />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Student Management</h3>
                  <p className="text-gray-600">Efficiently add and manage student records</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <ChartBar className="mr-4 text-green-600" size={50} />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Performance Tracking</h3>
                  <p className="text-gray-600">Input and monitor academic scores</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <GraduationCap className="mr-4 text-purple-600" size={50} />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Class Management</h3>
                  <p className="text-gray-600">Organize students across different classes</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}