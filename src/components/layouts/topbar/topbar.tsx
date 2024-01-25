import { Contact } from 'lucide-react';

export const Topbar = () => {
  return (
    <header className="fixed top-0 z-30 flex w-full items-center gap-5 bg-dark-2 px-5 py-4 md:px-6 md:py-5">
      <div className="cursor-pointer">
        <Contact className="h-[30px] md:h-[40px] w-[77px] md:w-[102px]" />
      </div>
      <h1 className="text-heading4-semibold">Circle (test-task)</h1>
    </header>
  );
};
