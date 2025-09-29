'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

interface PartnerData {
  name: string
  charger_type: string
  power_output: string
  total_earnings?: number
  total_bookings?: number
}

export default function Dashboard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Sign in with Supabase
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      if (!data.user) {
        throw new Error('No user returned from login')
      }

      // Get partner data
      const { data: partner, error: partnerError } = await supabase
        .from('partners')
        .select('*')
        .eq('user_id', data.user.id)
        .single()

      if (partnerError) {
        await supabase.auth.signOut()
        throw new Error('Partner account not found. Please register first.')
      }

      setPartnerData({
        name: partner.name,
        charger_type: partner.charger_type,
        power_output: partner.power_output,
        total_earnings: 5000, // Placeholder
        total_bookings: 10 // Placeholder
      })
      setIsAuthenticated(true)
      toast.success('Welcome back!')

    } catch (error: any) {
      console.error('Login error:', error)
      toast.error(error.message || 'Failed to login')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      setIsAuthenticated(false)
      setPartnerData(null)
      setEmail('')
      setPassword('')
      toast.success('Logged out successfully')
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('Failed to log out')
    }
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b  flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Partner Dashboard Login
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-energy-green hover:bg-energy-green/90"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Access Dashboard'}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <a href="/auth/register" className="text-energy-green hover:underline">
                  Register here
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show dashboard if authenticated
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-gray-900">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">PlugWise Partner Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Partner Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Partner Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><span className="font-semibold">Name:</span> {partnerData?.name}</p>
              <p><span className="font-semibold">Charger Type:</span> {partnerData?.charger_type}</p>
              <p><span className="font-semibold">Power Output:</span> {partnerData?.power_output}</p>
            </CardContent>
          </Card>

          {/* Earnings Card */}
          <Card>
            <CardHeader>
              <CardTitle>Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-energy-green">
                ₹{partnerData?.total_earnings || 0}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This month's earnings from your charging station
              </p>
            </CardContent>
          </Card>

          {/* Bookings Card */}
          <Card>
            <CardHeader>
              <CardTitle>Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {partnerData?.total_bookings || 0}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Number of bookings this month
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}