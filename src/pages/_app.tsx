import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ApolloProvider } from "@apollo/client";
import { clientGQL } from "@/services/graphqlApi";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Toaster position="top-center" />
            <ApolloProvider client={clientGQL}>
                <Component {...pageProps} />
            </ApolloProvider>
        </>
    );
}
