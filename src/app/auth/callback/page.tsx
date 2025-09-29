'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()

        if (error) throw error
        if (!session) throw new Error('No session found')

        // Check if user is a partner
        const { data: partner, error: partnerError } = await supabase
          .from('partners')
          .select('*')
          .eq('user_id', session.user.id)
          .single()

        if (partnerError) {
          if (partnerError.code === 'PGRST116') {
            throw new Error('Your account is not registered as a partner. Please register first.')
          }
          throw partnerError
        }

        toast.success('Email verified successfully!')
        router.push('/dashboard')
      } catch (err: any) {
        toast.error(err.message || 'Failed to verify email. Please try again.')
        router.push('/auth/login')
      }
    }

    handleEmailVerification()
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-900 flex items-center justify-center p-4">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying your email...</h1>
        <p>Please wait while we verify your email address.</p>
      </div>
    </div>
  )
}
