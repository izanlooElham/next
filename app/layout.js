import "./globals.css";
import Hydration from "@/config/reactQueryConfigs";
import Toast from "@/components/module/Toaster";
import { ApolloWrapper } from "@/data/ApolloWrapper";

export const metadata = {
  title: "rezqorazeq",
  description: "بزرگترین فروشگاه ارگانیک ایران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="body">
        <Hydration>
        <ApolloWrapper>
            <Toast/>
          {children}
        </ApolloWrapper>
        </Hydration>
        </body>
    </html>
    
  );
}
