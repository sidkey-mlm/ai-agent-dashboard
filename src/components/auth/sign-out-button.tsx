'use client'

import { Button } from '@/components/ui/button'
import { useSupabase } from '@/components/providers/supabase-provider'
import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const { supabase } = useSupabase()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return (
    <Button
      variant="ghost"
      onClick={handleSignOut}
    >
      Sign out
    </Button>
  )
}
