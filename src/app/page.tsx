'use client'

import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr></hr>
      <main className="mx-auto py-4">
      
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold ">
            Join PlugWise Partner Network
          </h1>
          <p className="text-xl  max-w-2xl mx-auto">
            List your EV charging station and start earning today. Join our growing network of charging station partners.
          </p>
          
          <p className="text-2xl ">
            1. Do you own a EV?
          </p>
          <p className="text-2xl ">
            2. You have charging unit installed?
          </p>
          <p className="text-2xl ">
            3. Register your charging station now.
          </p>
          
          <div className="flex justify-center gap-4">
            <a href="/auth/register">
              <Button size="lg" className="bg-energy-green hover:bg-energy-green/90 m-auto p-auto">
                Register Now
              </Button>
            </a>
          </div>
          </div>
      </main>
     <hr></hr>
      <Footer />
    </div>
  )
}