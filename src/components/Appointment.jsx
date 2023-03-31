import React from 'react'
import './appointment.css'
function Appointment() {
  return (
    <div>
             <div className='join'>Join Community</div>
        <div className="home">Home</div>
        <div className="elipse"></div>
        <div className="sess">Would you like to book a session?</div>
        <div className="private">This is your Private area with all the tools you need customized for you</div>
        <div className="flex flex-wrap justify-center padd">
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >Peter Njoroge</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >4yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Nairobi Kenya</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.8/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 5,200 Reviews</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://images.unsplash.com/photo-1613730317928-246094cb6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >Annah perks</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >25yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Chicago LL</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.8/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 4,000 Reviews</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >MaggyKimani</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >10yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Kigali Rwanda</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.8/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 52,000 Reviews</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://media.istockphoto.com/id/1089633230/photo/glasses-girl-in-white.jpg?b=1&s=170667a&w=0&k=20&c=EbtEKHYtXoT3sF-XBlmRx9YhmWfG8wB4b4M_QD-Mv5A="
        alt="avatar"
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >ThobaAlice</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >2yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Nairobi Kenya</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.3/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 30,000 Reviews</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=Yyi5slaeNpq_HPcfgy1305VpJSwerPm_s7mTz_bBk6c="
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >MauriceDave</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >7yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Nairobi Kenya</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.8/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 12,000 Reviews</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-4">
    <div className="bg-white shadow-2xl rounded-lg p-4 flex items-center">
      <img
        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div className='details flex flex-col'>
        <h3 className='p-2'
          style={{
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "12.8938px",
            lineHeight: "16px",
          }}
        >ElizDias</h3>
        <h5 className='p-2'
          style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "9.33687px",
            lineHeight: "11px",
          }}
        >9yrs experience</h5>
        <div className="location flex flex-row">
          <span class="material-symbols-outlined text-green-500">
            location_on
          </span>
          <h3 className='p-2'
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "6.77676px",
              lineHeight: "8px",
            }}
          >Nairobi Kenya</h3>
        </div>
      </div>
      <div className="flex flex-row p-3">
        <span class="material-symbols-outlined text-green-500 p-1">
          grade
        </span>
        <p className='p-1'>4.2/5</p>
      </div>
      <div className="flex p-3">
        <p className='font-semibold'>| 3,000 Reviews</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Appointment