import { IPrompt } from '@/types/prompt';

export default async function Home() {
  const response = await fetch('https://api.blurbbles.com/prompts/daily', { next: { revalidate: 60 } })
  const prompt: IPrompt = await response.json()
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      {
        prompt && (
          <div>
            <div className='fade-in-down'>
              <div className='capitalize italic text-3xl'>{prompt.genre.split('_').join(' ').toLocaleLowerCase()}</div>
            </div>
            <div className='fade-in-up'>
              <div className='pt-5'>{prompt.prompt}</div>
            </div>
          </div>
        )
      }
    </div>
  );
}
