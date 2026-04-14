import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactElement } from "react";

export const setup = (
  jsx: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return {
    user: userEvent.setup(),
    ...render(
      <QueryClientProvider client={queryClient}>{jsx}</QueryClientProvider>,
      options,
    ),
    queryClient,
  };
};