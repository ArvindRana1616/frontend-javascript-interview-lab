import Sidebar from "../components/Sidebar/Sidebar";
import "../src/assets/globle.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Sidebar />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}