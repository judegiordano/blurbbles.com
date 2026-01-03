import { Countdown } from '@/components/Countdown';
import { type IPrompt } from '@/types/prompt';

export default async function Home() {
  const response = await fetch('https://api.blurbbles.com/prompts/daily', { cache: 'no-cache', next: { revalidate: 60 } })
  const prompt: IPrompt = await response.json()
  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      {
        prompt && (
          <div>
            <div className='fade-in-down font-bold'>
              <div className='capitalize italic text-3xl'>{prompt.genre.split('_').join(' ').toLocaleLowerCase()}</div>
            </div>
            <div className='fade-in-up font-bold text-xl'>
              <div className='pt-5'>{prompt.prompt}</div>
            </div>
            <div className='fade-in-up-slow pt-5'>
              <Countdown />
            </div>
          </div>
        )
      }
    </div>
  );
}
