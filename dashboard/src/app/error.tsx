"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-4 text-muted-foreground">{error.message || "An unexpected error occurred"}</p>
        <Button onClick={() => reset()}>Try again</Button>
        </div>
    )
}