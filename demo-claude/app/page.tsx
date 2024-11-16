import InputValidationForm from '@/components/InputValidationForm'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mx-4">
        <InputValidationForm />
      </div>
    </div>
  )
}