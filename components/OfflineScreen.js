export const OfflineScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center text-center text-gray-500 font-bold">
      <svg className="w-8 h-8 animate-spin mb-4" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.79 7.24l1.39 1.39 2.61-2.61zM18.21 7.24l-2.61 2.61 1.39 1.39zM10 14.21v4.59l-3.59-3.59zM14.21 10l-4.59 3.59 3.59 3.59z" fill="currentColor" />
      </svg>
      You are offline
    </div>
  );
};