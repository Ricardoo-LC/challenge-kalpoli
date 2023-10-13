import Switch from './switch'

export const Header: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center rounded-[15px] w-[576px] mx-auto p-4 bg-neutral-100 bg-clip-border shadow-md shadow-[#F3F3F3] dark:bg-slate-800 dark:text-white dark:shadow-none">
        <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-neutral-600 dark:fill-neutral-200">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <p className="text-4xl font-bold font-roboto tracking-[.10em]">WORDLE</p>
            <div className="flex items-center">
                <svg className="w-8 h-8" viewBox="0 0 40 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill="fill-neutral-600 dark:fill-neutral-200" fillOpacity="0.49"/>
                    <path d="M13.1613 15L13.1613 24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.7419 18V24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.3226 12V24" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Switch/>

            </div>
        </div>
    </div>
  )
}
