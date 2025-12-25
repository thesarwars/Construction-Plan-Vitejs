export const metadata = {
  title: 'ConstruPlan Pro',
  description: 'Workforce Management System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body style={{ backgroundColor: '#f9fafb', fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
