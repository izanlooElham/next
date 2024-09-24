import {QueryClient,dehydrate,HydrationBoundary} from "@tanstack/react-query";
import { getProfile } from "@/services/user";
import QueryProvider from "@/provider/QueryProvider";

export default async function Hydration({children}) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60* 1000
      }
    },
  });

  try {
    await queryClient.prefetchQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    // Handle error as needed
  }
  
  return (
    <QueryProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </QueryProvider>
  );
}