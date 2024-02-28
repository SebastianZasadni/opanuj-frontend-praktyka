export const PageTitle = ({ children }: { children: string }) => {
  return (
    <p className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center mt-2">
      {children}
    </p>
  );
};
