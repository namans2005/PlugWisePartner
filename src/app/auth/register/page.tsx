'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    chargerType: 'AC',
    powerOutput: '7kW'
  })
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(false)

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          toast.success('Location detected!')
        },
        () => {
          toast.error('Could not detect location')
        }
      )
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!location) {
      toast.error('Please detect your location first')
      return
    }

    setLoading(true)

    try {
      // First create the user with display name in metadata
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            display_name: formData.name
          }
        }
      })

      if (authError) {
        console.error('Auth error:', authError)
        throw authError
      }

      if (!authData.user?.id) {
        throw new Error('No user ID returned')
      }

      // Then create the partner record
      const { error: partnerError } = await supabase
        .from('partners')
        .insert([{
          user_id: authData.user.id,
          email: formData.email,
          name: formData.name,
          charger_type: formData.chargerType,
          power_output: formData.powerOutput,
          location: JSON.stringify({
            type: 'Point',
            coordinates: [location.lng, location.lat]
          }),
          verification_status: 'verified'
        }])

      if (partnerError) {
        console.error('Partner creation error:', partnerError)
        throw new Error('Failed to create partner record')
      }

      // Sign out after registration (user needs to login explicitly)
      await supabase.auth.signOut()

      toast.success('Registration successful! Please login to continue.')
      window.location.href = '/dashboard'

    } catch (error: any) {
      console.error('Registration error:', error)
      toast.error(error.message || 'Failed to register')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md  shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Become a PlugWise Partner
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="chargerType">Charger Type</Label>
                  <select
                    id="chargerType"
                    value={formData.chargerType}
                    onChange={(e) => setFormData({...formData, chargerType: e.target.value})}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    required
                    aria-label="Select charger type"
                    title="Select your charger type"
                  >
                    <option value="AC">AC</option>
                    <option value="DC">DC</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="powerOutput">Power Output</Label>
                  <select
                    id="powerOutput"
                    value={formData.powerOutput}
                    onChange={(e) => setFormData({...formData, powerOutput: e.target.value})}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    required
                    aria-label="Select power output"
                    title="Select your charger's power output"
                  >
                    <option value="3.7kW">3.7 kW</option>
                    <option value="7kW">7 kW</option>
                    <option value="22kW">22 kW</option>
                    <option value="50kW">50 kW</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={detectLocation}
                  className="w-full"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {location ? 'Update Location' : 'Detect Location'}
                </Button>
                
                {location && (
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" />
                    Location detected
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register as Partner'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <a href="/dashboard" className="text-energy-green hover:underline">
                Login here
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}