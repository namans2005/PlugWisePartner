'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Check Your Email
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 text-center">
          <div className="p-4">
            <Mail className="w-12 h-12 text-energy-green mx-auto mb-4" />
            <p className="text-lg text-gray-700">
              We've sent you a verification email. Please check your inbox and click the verification link to activate your account.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or try logging in again.
            </p>
            <Link href="/auth/login">
              <Button variant="outline" className="w-full">
                Return to Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
