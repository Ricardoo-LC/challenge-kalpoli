import Switch from './switch'
interface Props {
  showInstructions: (value: boolean) => void;
  showStadistics: (value: boolean) => void;
}

export const Header = ({ showInstructions, showStadistics }: Props) => {
  const handleClickQuestion = () => {
    showInstructions(true)
  }

  const handleClickStadistics = () => {
    showStadistics(true)
  }
  return (
    <div className="relative flex flex-col items-center justify-center rounded-[15px] w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 2xl:mx-auto 2xl:p-4 bg-neutral-100 bg-clip-border shadow-md shadow-[#F3F3F3] dark:bg-slate-800 dark:text-white dark:shadow-none">
      <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-neutral-600 dark:fill-neutral-200 cursor-pointer"
          onClick={handleClickQuestion}
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-4xl font-bold font-roboto tracking-[.10em]">
          WORDLE
        </p>
        <div className="flex items-center">
          <svg
            className="w-8 h-8 cursor-pointer fill-neutral-600 dark:fill-neutral-200"
            viewBox="0 0 40 36"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClickStadistics}
          >
            <rect
              x="4.93549"
              y="6"
              width="29.6129"
              height="24"
              rx="2"
              className="bg-blue-500 bg-opacity-49"
            />
            <path
              d="M13.1613 15L13.1613 24"
              className="stroke-white dark:stroke-black stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.7419 18V24"
              className="stroke-white dark:stroke-black stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.3226 12V24"
              className="stroke-white dark:stroke-black stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Switch />
        </div>
      </div>
    </div>
  )
}
