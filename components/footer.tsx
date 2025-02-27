import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-foreground/10 mt-auto">
      <div className="py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Repo Prompt. All rights reserved.
              </p>
            </div>
            <div className="flex justify-start sm:justify-end gap-6">
              <Link 
                href="mailto:contact@repoprompt.com" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}