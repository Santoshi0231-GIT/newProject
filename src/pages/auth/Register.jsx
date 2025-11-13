import React, { useState } from 'react'
import { registerUser } from './RegisterService'

import { Link } from 'react-router-dom'

const initialForm={
  userName: "",
  email: "",
  password: "",
  contactNumber: "",
  address: "",
  gender: "Male",
  dateOfBirth: ""
}
const Register = () => {
  const [form,setForm]=useState(initialForm)
  const [loading,setLoading]=useState(false)

  const [error,setError]=useState('')
    const [success,setSuccess]=useState('')

    const handleChange=(e)=>{
      console.log(e.target.value)
      const {name,value}=e.target
      setForm(prev=>({...prev,[name]:value}))
    }
    const validate=data=>{
      if(!data.userName.trim()) return 'Name  is required'
      if(!data.email.trim())return 'Email is required'
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'invalid email'
      if(!data.password||data.password.length<6) return 'Password must be atleast 6 characters'
      if(!/^\d{7,15}$/.test(data.contactNumber))return 'Contact number must be digits (7-15 chars)'
      if(!data.address.trim()) return 'Address is required'
      if(!data.dateOfBirth.trim()) return 'Date of Birth is required'
      return ''
    }
    const handleSubmit=async(e)=>{
      
      e.preventDefault()
      setError('')
      setSuccess('')
      const v=validate(form)
      if(v){
        setError(v)
        return
      }
      setLoading(true)
      try {
        const payload={...form}
        console.log(payload)
        const res=await registerUser(payload)
        console.log(res)
        setSuccess(res.message)||'Registration Successfull!!!'
        setForm(initialForm)
      } catch (error) {
        setForm(err?.message)||'Registration Failed'
        
      }
      finally{
        setLoading(false)
      }
    }
  
  return (
    <div className='
"min-h-screen flex items-center justify-center bg-gray-50'>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-[480px]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Create account</h2>

        {error && <p className="text-red-600 text-center mb-4 font-medium">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4 font-medium">{success}</p>}

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Full name</label>
          <input
            name="userName"
            value={form.userName}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@mail.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Contact</label>
            <input
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street, City"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 mb-1">Date of birth</label>
            <input
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium transition ${loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register