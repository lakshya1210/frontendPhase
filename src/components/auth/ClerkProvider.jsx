import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = "pk_test_cmVhZHktcmFiYml0LTExLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export function ClerkProviderWithChildren({ children }) {
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          logoPlacement: "none",
          showOptionalFields: true
        },
        variables: {
          colorPrimary: "#3B82F6",
          colorText: "#1F2937",
          colorBackground: "#FFFFFF",
          borderRadius: "0.5rem"
        },
        elements: {
          card: "shadow-md rounded-lg",
          formButtonPrimary: "bg-gray-800 hover:bg-gray-900 text-white py-2 rounded",
          socialButtonsBlockButton: "border border-gray-300 text-gray-600 py-2 rounded mb-2",
          formFieldInput: "border border-gray-300 rounded px-3 py-2",
          footerActionLink: "text-blue-600 hover:text-blue-800"
        }
      }}
      navigate={(to) => window.location.href = to}
    >
      {children}
    </ClerkProvider>
  );
}