export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full">
      <div className="flex justify-between mb-6">
        <div>Tags</div>
        <div>Search</div>
      </div>
      {children}
    </div>
  );
}
