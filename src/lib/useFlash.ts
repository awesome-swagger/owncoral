import { useCallback } from 'react';
import type { UseToastOptions } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import { useQuery } from './useQuery';

/**
 * Returns a flash notification system using Chackra toast messages by checking if a `query` parameter,
 * called `flash` by default, is present on the current page URL.
 * @param options - Flash hook configuration options.
 *
 * @example
 * ```ts
 * // Default usage:
 * const flash = useFlash();
 * // Will only trigger on page load.
 * useEffect(() => { flash() }, [flash])
 * ```
 *
 * @example
 * ```ts
 * // Handle when the hook should run by adding more dependencies to the `useEffect` dependency array.
 * const [trigger, setTrigger] = useState(false);
 * // Will trigger on page load plus every time `trigger` is updated.
 * useEffect(() => { flash() }, [flash, trigger]);
 * ```
 *
 * @example
 * ```ts
 * // Custom query option and toast options:
 * const flash = useFlash('message');
 * useEffect(() => { flash({status: 'success'}) }, [flash]);
 * ```
 */
export function useFlash({ name = 'flash', replace = true }: UseFlashOptions = {}) {
  const toast = useToast();
  const query = useQuery();

  const flash = useCallback((options: Partial<UseToastOptions>) => {
    if (query.has(name)) {
      toast({
        description: query.get(name),
        ...options,
      });
      if (replace) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, [query, name, replace, toast]);

  return flash;
}
// =====
// Types
// =====
/**
 * useFlash hook configuration options.
 */
export type UseFlashOptions = {
  /**
   * Name of the query parameter to track.
   */
  name?: string;
  /**
   * Flag that indicates wether the history location should be replaced.
   */
  replace?: boolean;
};
