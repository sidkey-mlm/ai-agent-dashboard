'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail } from "lucide-react"
import { useState } from "react"
import { createClient } from "@/lib/supabase"
import { useSearchParams } from "next/navigation"

export default function VerifyEmailPage() {
  const [resending, setResending] = useState(false)
  const [resendStatus, setResendStatus] = useState<'success' | 'error' | null>(null)
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const supabase = createClient()

  const handleResend = async () => {
    if (!email) return
    
    setResending(true)
    setResendStatus(null)
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
      })

      if (error) {
        setResendStatus('error')
      } else {
        setResendStatus('success')
      }
    } catch (err) {
      setResendStatus('error')
    } finally {
      setResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Check your email</h2>
            <p className="text-muted-foreground">
              We&apos;ve sent you a verification link to{' '}
              <span className="font-medium">{email}</span>.
              Please click the link to verify your account.
            </p>
          </div>
          <div className="space-y-4 w-full">
            <Button asChild className="w-full">
              <Link href="/auth/login">
                Return to login
              </Link>
            </Button>
            <div className="text-center">
              <button
                onClick={handleResend}
                disabled={resending || !email}
                className="text-sm text-primary hover:text-primary/90 font-medium disabled:opacity-50"
              >
                {resending ? 'Sending...' : 'Resend verification email'}
              </button>
              {resendStatus === 'success' && (
                <p className="text-sm text-green-600 mt-2">
                  Verification email sent successfully!
                </p>
              )}
              {resendStatus === 'error' && (
                <p className="text-sm text-red-500 mt-2">
                  Failed to send verification email. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
