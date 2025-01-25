import React from 'react'
import { Users, BookOpen, GraduationCap, ChartBar } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">

      <main className="px-3py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Empowering Education Through Technology
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Student Management System provides comprehensive tools to streamline administrative tasks, track student performance, and enhance educational outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <Users className="mr-3 text-blue-600" size={40} />
                <div>
                  <h3 className="font-semibold text-gray-800">Student Tracking</h3>
                  <p className="text-sm text-gray-500">Manage student records efficiently</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <ChartBar className="mr-3 text-green-600" size={40} />
                <div>
                  <h3 className="font-semibold text-gray-800">Performance Analysis</h3>
                  <p className="text-sm text-gray-500">Detailed academic insights</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img 
              src="https://www.vidyalayaschoolsoftware.com/webassets/images/school_software_1.png" 
              alt="Student Management" 
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="mx-auto mb-4 text-purple-600" size={50} />
              <h3 className="font-semibold text-xl mb-2">Record Management</h3>
              <p className="text-gray-600">Comprehensive student information tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ChartBar className="mx-auto mb-4 text-green-600" size={50} />
              <h3 className="font-semibold text-xl mb-2">Performance Tracking</h3>
              <p className="text-gray-600">Detailed academic progress monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="mx-auto mb-4 text-blue-600" size={50} />
              <h3 className="font-semibold text-xl mb-2">User Management</h3>
              <p className="text-gray-600">Easy administration of student profiles</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}