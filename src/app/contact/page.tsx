"use client"

import Link from "next/link"
import SocialMediaIcon from "@/components/layout.tsx/social-media"

export default function ContactPage() {
    const upworkUrl = "https://www.upwork.com/freelancers/~01416f5dd867bc4a69"

    return (
        <section className="container mx-auto min-h-screen py-20">
            <div className="max-w-3xl mx-auto space-y-10">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind? Let&apos;s start a conversation on Upwork.
                    </p>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-col items-center gap-8">
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl font-semibold">Start a Project</h2>
                        <p className="text-muted-foreground">
                            Connect with me on Upwork to discuss your project
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href={upworkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            View My Upwork Profile
                        </Link>
                        
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm text-muted-foreground">Or reach out via:</p>
                            <SocialMediaIcon />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 