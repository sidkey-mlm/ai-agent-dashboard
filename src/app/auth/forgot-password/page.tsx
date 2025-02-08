'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { createClient } from '@/lib/supabase'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) {
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full p-8">
        <div className="space-y-6">
          <div>
            <Button
              variant="ghost"
              className="mb-4 -ml-4"
              asChild
            >
              <Link href="/auth/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>
            </Button>
            <h2 className="text-2xl font-bold">Reset your password</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {status === 'success' ? (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 text-green-700 rounded-md text-sm">
                Check your email for a link to reset your password.
              </div>
              <Button asChild className="w-full">
                <Link href="/auth/login">
                  Return to login
                </Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {status === 'error' && (
                <div className="text-sm text-red-500">
                  Failed to send reset link. Please try again.
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending reset link...' : 'Send reset link'}
              </Button>
            </form>
          )}
        </div>
      </Card>
    </div>
  )
}
