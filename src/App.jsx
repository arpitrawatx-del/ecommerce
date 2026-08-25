import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { WishlistProvider } from "../context/WishlistContext";
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <WishlistProvider>
          <AuthProvider>
            <Navbar />
            <AppRoutes />
            <Footer />
          </AuthProvider>
        </WishlistProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
