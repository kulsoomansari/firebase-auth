import React from 'react'

export default function Hero({handlelogout}) {
    return (
        <div>
          <section className="hero">
              <nav>
                  <h2>WELCOME</h2>
                  <button onClick={handlelogout}>Logout</button>
              </nav>
        </section>  
        </div>
    )
}
