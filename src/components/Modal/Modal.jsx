export function Modals({ handleClose, show, title, children }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center ${
          show ? '' : 'hidden'
        }`}
      >
        <div className='bg-white p-6 rounded-md max-w-md w-full mx-auto'>
          <div className='flex justify-end'>
            <button
              onClick={handleClose}
              className='text-gray-500 hover:text-gray-700 focus:outline-none bg-transparent'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='text-center'>
            <h2 className='text-lg font-bold mb-4'>{title}</h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
