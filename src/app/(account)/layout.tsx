export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-screen-sm mt-[100px]"> 
        {children}
    </div>
  );
}
