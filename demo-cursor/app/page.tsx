import InputForm from '@/components/InputForm'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen relative bg-zinc-50">
      {/* Background image - No transparency */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/image@3x.png"
          alt="Layout background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-xl bg-white/70 backdrop-blur-sm shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Input Validation Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <InputForm />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
