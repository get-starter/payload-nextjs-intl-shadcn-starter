import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'

export default async function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-4 text-center">
      <p className="text-8xl font-bold text-muted-foreground/30">404</p>
      <h1 className="text-2xl font-semibold">Not Found</h1>
      <p className="text-sm text-muted-foreground max-w-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad adipisci neque, totam exercitationem sit sapiente repellendus
        consequatur atque, at velit possimus fuga culpa maiores tenetur corporis, eum laborum expedita maxime!
      </p>

      <Button className="mt-2" asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  )
}
