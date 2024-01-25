import { Topbar } from '@components/layouts/topbar';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout = (props: RootLayoutProps) => {
  return (
    <>
      <Topbar />
      <main className="flex flex-col">
        <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10 w-full">
          {props.children}
        </section>
      </main>
    </>
  );
};
