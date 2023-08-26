import { Route, Routes } from "react-router-dom";
import "./App.css";

// All Pages Import
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProtectedPage from "./pages/ProtectedPage";
import ReducerExample from "./pages/ReducerExample";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import VideoChat from "./pages/VideoChat";
import College from "./components/College"
// All Clerks Import
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redux-example" element={<ReducerExample />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/video-chat" element={<VideoChat />} />
            <Route path='/college' element={<College />}/>
            
            {"This is how you can setup a protected page"}

            <Route
                path="/protected-page"
                element={
                    <>
                        <SignedIn>
                            <ProtectedPage />
                        </SignedIn>
                        <SignedOut>
                            <h1>You must be signed in to view this page</h1>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
