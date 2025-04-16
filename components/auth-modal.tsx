"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"

type AuthView = "login" | "signup"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView: AuthView
  onSwitchView: (view: AuthView) => void
}

export function AuthModal({ isOpen, onClose, initialView, onSwitchView }: AuthModalProps) {
  const [view, setView] = useState<AuthView>(initialView)

  // Update view when initialView prop changes
  useEffect(() => {
    setView(initialView)
  }, [initialView])

  // Handle view switching
  const handleSwitchView = (newView: AuthView) => {
    setView(newView)
    onSwitchView(newView)
  }

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-lg bg-background p-6 shadow-lg rounded-lg border">
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="mt-2">
          {view === "login" ? (
            <LoginForm onSwitchToSignup={() => handleSwitchView("signup")} />
          ) : (
            <SignupForm onSwitchToLogin={() => handleSwitchView("login")} />
          )}
        </div>
      </div>
    </div>
  )
}
