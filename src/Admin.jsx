import React,{useState,useEffect} from 'react'

export default function Admin() {

  let [FormData,setFormData] = useState([{
              profilePic:"https://masseduequity.org/wp-content/uploads/2021/07/Meeting-Students-Where-they-are-0-1024x748.jpg",
              name: "Rahul Sharma",
              age: 15,
              parentName: "Anil Sharma",
              class: "10th",
              math: 95,
              science: 89,
              english: 88,
              hindi: 92,
              socialStudies: 85,
              computerScience: 98,
            },
                 ])

  useEffect(()=>{
    localStorage.setItem('students', JSON.stringify(FormData));
  },[FormData])

  function handleSubmit(e)
  {
    e.preventDefault();
    let NewsStudent = {
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
    setFormData([...FormData,NewsStudent])
    e.target.reset();
    
  }


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin Panel</h2>
        </section>
        
        <section>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder='Name' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='Age' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <input 
              type="text" 
              placeholder='Parent Name' 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Class</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
              <option>9th</option>
              <option>10th</option>
            </select>

            <section className="grid grid-cols-3 gap-4 text-white">
              <input 
                type="number" 
                placeholder='Math' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='Science' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='English' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='Hindi' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='Social Studies' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="number" 
                placeholder='Computer Science' 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </section>
            <button className='text-white bg-blue-500' >Add Student</button>
          </form>
        </section>
      </div>
    </div>
  )
}