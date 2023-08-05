import avatar from './assets/rxzka.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function App() {
  return (
    <div className="flex bg-gray-900 min-h-screen flex-col items-center justify-center text-white overflow-hidden	">
      <div className='flex w-full max-w-5xl flex-col items-center justify-center space-y-8 px-2 pb-8 md:px-8'>
        <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-8">
          <img className="border-4 border-slate-700	 rounded-full w-80 h-80" src={avatar} alt="avatar" />
          <TypeAnimation
            className='text-bold text-4xl sm:text-2xl'
            sequence={[
              'Fachrel Razka Pramudya',
              1000,
              'Hello World!',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <p className='text-center sm:text-sm'>i'm a student on a vocational high school majoring in software engineering. interested in Web Development, Mobile Development and Internet Of Things, currently studying Laravel, React Js and Android Development</p>
          <div className='flex'>
            <a className='p-3 text-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md mr-4 transition hover:ease-out duration-300' href="https://www.instagram.com/rel.rxzka/">Instagram</a>
            <a className='p-3 text-bold bg-green-700 rounded-md transition ease-in	duration-300' href="https://wa.me/628127970456?text=Hello!">Whatsapp</a>
          </div>
        </div>
      </div>
    </div>

  )
}