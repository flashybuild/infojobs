'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { url } from '@/app/const'


const necesaryScope =
  'CV,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_EDIT_CURRICULUM_CVTEXT,CANDIDATE_READ_CURRICULUM_CVTEXT'
// const clientId = "0017c43570e04426b27e6bc8c75a846a";
// const clientId = process.env.CLIENT_ID
const clientId = '822b9be3d2da4333b50405e6f7a35031'

// const redirectUri = 'https://infojobsito.vercel.app/login'
const redirectUri = url

const AuthButton = ({ code }: any) => {
  console.log('🚀 code from AuthButton', code)
  
  const handleLogin = () => {
    window.location.href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${necesaryScope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`  
  }

  const router = useRouter()

  useEffect(() => {
    if (code) {
      document.cookie = `code=${code}; path=/login`
      toast
        .promise(
          fetch(`/api/authorize`, {
            headers: {
              'Content-Type': 'application/json',
              'InfoJobs-Code': code
            }
          }),
          {
            loading: 'Autenticando...',
            success: '¡Bienvenido!',
            error: 'Error en autenticación'
          }
        )
        .then(data => data.json())
        .then(({ data: { access_token, expires_in } }) => {
          const expirationDate = new Date(
            Date.now() + expires_in * 1000
          ).toUTCString()
          document.cookie = `access_token=${access_token}; expires=${expirationDate}; path=/login`
          window.history.pushState({}, document.title, window.location.pathname)
          router.replace('/')
        })
    }
  }, [code, router])

  return (
    <button
      className="bg-[#ff6340] hover:bg-[#d14f32] w-fit px-4 py-3 mt-6 rounded text-white shadow-lg font-semibold"
      onClick={handleLogin}
    >
      Autenticarme con InfoJobs
    </button>
  )
}

export default AuthButton
